(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();var ol={exports:{}},$o={},sl={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P1;function jp(){if(P1)return Re;P1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),$=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=$&&j[$]||j["@@iterator"],typeof j=="function"?j:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,R={};function D(j,H,he){this.props=j,this.context=H,this.refs=R,this.updater=he||T}D.prototype.isReactComponent={},D.prototype.setState=function(j,H){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,H,"setState")},D.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function E(){}E.prototype=D.prototype;function O(j,H,he){this.props=j,this.context=H,this.refs=R,this.updater=he||T}var G=O.prototype=new E;G.constructor=O,P(G,D.prototype),G.isPureReactComponent=!0;var B=Array.isArray,W=Object.prototype.hasOwnProperty,U={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function V(j,H,he){var we,_e={},Me=null,Ne=null;if(H!=null)for(we in H.ref!==void 0&&(Ne=H.ref),H.key!==void 0&&(Me=""+H.key),H)W.call(H,we)&&!L.hasOwnProperty(we)&&(_e[we]=H[we]);var Ee=arguments.length-2;if(Ee===1)_e.children=he;else if(1<Ee){for(var Be=Array(Ee),mt=0;mt<Ee;mt++)Be[mt]=arguments[mt+2];_e.children=Be}if(j&&j.defaultProps)for(we in Ee=j.defaultProps,Ee)_e[we]===void 0&&(_e[we]=Ee[we]);return{$$typeof:o,type:j,key:Me,ref:Ne,props:_e,_owner:U.current}}function ne(j,H){return{$$typeof:o,type:j.type,key:H,ref:j.ref,props:j.props,_owner:j._owner}}function Se(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function Te(j){var H={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(he){return H[he]})}var me=/\/+/g;function be(j,H){return typeof j=="object"&&j!==null&&j.key!=null?Te(""+j.key):H.toString(36)}function qe(j,H,he,we,_e){var Me=typeof j;(Me==="undefined"||Me==="boolean")&&(j=null);var Ne=!1;if(j===null)Ne=!0;else switch(Me){case"string":case"number":Ne=!0;break;case"object":switch(j.$$typeof){case o:case n:Ne=!0}}if(Ne)return Ne=j,_e=_e(Ne),j=we===""?"."+be(Ne,0):we,B(_e)?(he="",j!=null&&(he=j.replace(me,"$&/")+"/"),qe(_e,H,he,"",function(mt){return mt})):_e!=null&&(Se(_e)&&(_e=ne(_e,he+(!_e.key||Ne&&Ne.key===_e.key?"":(""+_e.key).replace(me,"$&/")+"/")+j)),H.push(_e)),1;if(Ne=0,we=we===""?".":we+":",B(j))for(var Ee=0;Ee<j.length;Ee++){Me=j[Ee];var Be=we+be(Me,Ee);Ne+=qe(Me,H,he,Be,_e)}else if(Be=k(j),typeof Be=="function")for(j=Be.call(j),Ee=0;!(Me=j.next()).done;)Me=Me.value,Be=we+be(Me,Ee++),Ne+=qe(Me,H,he,Be,_e);else if(Me==="object")throw H=String(j),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Ne}function Ge(j,H,he){if(j==null)return j;var we=[],_e=0;return qe(j,we,"","",function(Me){return H.call(he,Me,_e++)}),we}function Ye(j){if(j._status===-1){var H=j._result;H=H(),H.then(function(he){(j._status===0||j._status===-1)&&(j._status=1,j._result=he)},function(he){(j._status===0||j._status===-1)&&(j._status=2,j._result=he)}),j._status===-1&&(j._status=0,j._result=H)}if(j._status===1)return j._result.default;throw j._result}var Fe={current:null},se={transition:null},xe={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:se,ReactCurrentOwner:U};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:Ge,forEach:function(j,H,he){Ge(j,function(){H.apply(this,arguments)},he)},count:function(j){var H=0;return Ge(j,function(){H++}),H},toArray:function(j){return Ge(j,function(H){return H})||[]},only:function(j){if(!Se(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Re.Component=D,Re.Fragment=r,Re.Profiler=l,Re.PureComponent=O,Re.StrictMode=s,Re.Suspense=h,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xe,Re.act=ue,Re.cloneElement=function(j,H,he){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var we=P({},j.props),_e=j.key,Me=j.ref,Ne=j._owner;if(H!=null){if(H.ref!==void 0&&(Me=H.ref,Ne=U.current),H.key!==void 0&&(_e=""+H.key),j.type&&j.type.defaultProps)var Ee=j.type.defaultProps;for(Be in H)W.call(H,Be)&&!L.hasOwnProperty(Be)&&(we[Be]=H[Be]===void 0&&Ee!==void 0?Ee[Be]:H[Be])}var Be=arguments.length-2;if(Be===1)we.children=he;else if(1<Be){Ee=Array(Be);for(var mt=0;mt<Be;mt++)Ee[mt]=arguments[mt+2];we.children=Ee}return{$$typeof:o,type:j.type,key:_e,ref:Me,props:we,_owner:Ne}},Re.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:u,_context:j},j.Consumer=j},Re.createElement=V,Re.createFactory=function(j){var H=V.bind(null,j);return H.type=j,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(j){return{$$typeof:g,render:j}},Re.isValidElement=Se,Re.lazy=function(j){return{$$typeof:_,_payload:{_status:-1,_result:j},_init:Ye}},Re.memo=function(j,H){return{$$typeof:x,type:j,compare:H===void 0?null:H}},Re.startTransition=function(j){var H=se.transition;se.transition={};try{j()}finally{se.transition=H}},Re.unstable_act=ue,Re.useCallback=function(j,H){return Fe.current.useCallback(j,H)},Re.useContext=function(j){return Fe.current.useContext(j)},Re.useDebugValue=function(){},Re.useDeferredValue=function(j){return Fe.current.useDeferredValue(j)},Re.useEffect=function(j,H){return Fe.current.useEffect(j,H)},Re.useId=function(){return Fe.current.useId()},Re.useImperativeHandle=function(j,H,he){return Fe.current.useImperativeHandle(j,H,he)},Re.useInsertionEffect=function(j,H){return Fe.current.useInsertionEffect(j,H)},Re.useLayoutEffect=function(j,H){return Fe.current.useLayoutEffect(j,H)},Re.useMemo=function(j,H){return Fe.current.useMemo(j,H)},Re.useReducer=function(j,H,he){return Fe.current.useReducer(j,H,he)},Re.useRef=function(j){return Fe.current.useRef(j)},Re.useState=function(j){return Fe.current.useState(j)},Re.useSyncExternalStore=function(j,H,he){return Fe.current.useSyncExternalStore(j,H,he)},Re.useTransition=function(){return Fe.current.useTransition()},Re.version="18.3.1",Re}var R1;function Bl(){return R1||(R1=1,sl.exports=jp()),sl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E1;function Ap(){if(E1)return $o;E1=1;var o=Bl(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function m(g,h,x){var _,$={},k=null,T=null;x!==void 0&&(k=""+x),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&(T=h.ref);for(_ in h)s.call(h,_)&&!u.hasOwnProperty(_)&&($[_]=h[_]);if(g&&g.defaultProps)for(_ in h=g.defaultProps,h)$[_]===void 0&&($[_]=h[_]);return{$$typeof:n,type:g,key:k,ref:T,props:$,_owner:l.current}}return $o.Fragment=r,$o.jsx=m,$o.jsxs=m,$o}var D1;function Cp(){return D1||(D1=1,ol.exports=Ap()),ol.exports}var w=Cp(),X=Bl(),U0={},al={exports:{}},Ot={},ll={exports:{}},ul={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function Pp(){return N1||(N1=1,(function(o){function n(se,xe){var ue=se.length;se.push(xe);e:for(;0<ue;){var j=ue-1>>>1,H=se[j];if(0<l(H,xe))se[j]=xe,se[ue]=H,ue=j;else break e}}function r(se){return se.length===0?null:se[0]}function s(se){if(se.length===0)return null;var xe=se[0],ue=se.pop();if(ue!==xe){se[0]=ue;e:for(var j=0,H=se.length,he=H>>>1;j<he;){var we=2*(j+1)-1,_e=se[we],Me=we+1,Ne=se[Me];if(0>l(_e,ue))Me<H&&0>l(Ne,_e)?(se[j]=Ne,se[Me]=ue,j=Me):(se[j]=_e,se[we]=ue,j=we);else if(Me<H&&0>l(Ne,ue))se[j]=Ne,se[Me]=ue,j=Me;else break e}}return xe}function l(se,xe){var ue=se.sortIndex-xe.sortIndex;return ue!==0?ue:se.id-xe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var m=Date,g=m.now();o.unstable_now=function(){return m.now()-g}}var h=[],x=[],_=1,$=null,k=3,T=!1,P=!1,R=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(se){for(var xe=r(x);xe!==null;){if(xe.callback===null)s(x);else if(xe.startTime<=se)s(x),xe.sortIndex=xe.expirationTime,n(h,xe);else break;xe=r(x)}}function B(se){if(R=!1,G(se),!P)if(r(h)!==null)P=!0,Ye(W);else{var xe=r(x);xe!==null&&Fe(B,xe.startTime-se)}}function W(se,xe){P=!1,R&&(R=!1,E(V),V=-1),T=!0;var ue=k;try{for(G(xe),$=r(h);$!==null&&(!($.expirationTime>xe)||se&&!Te());){var j=$.callback;if(typeof j=="function"){$.callback=null,k=$.priorityLevel;var H=j($.expirationTime<=xe);xe=o.unstable_now(),typeof H=="function"?$.callback=H:$===r(h)&&s(h),G(xe)}else s(h);$=r(h)}if($!==null)var he=!0;else{var we=r(x);we!==null&&Fe(B,we.startTime-xe),he=!1}return he}finally{$=null,k=ue,T=!1}}var U=!1,L=null,V=-1,ne=5,Se=-1;function Te(){return!(o.unstable_now()-Se<ne)}function me(){if(L!==null){var se=o.unstable_now();Se=se;var xe=!0;try{xe=L(!0,se)}finally{xe?be():(U=!1,L=null)}}else U=!1}var be;if(typeof O=="function")be=function(){O(me)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Ge=qe.port2;qe.port1.onmessage=me,be=function(){Ge.postMessage(null)}}else be=function(){D(me,0)};function Ye(se){L=se,U||(U=!0,be())}function Fe(se,xe){V=D(function(){se(o.unstable_now())},xe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(se){se.callback=null},o.unstable_continueExecution=function(){P||T||(P=!0,Ye(W))},o.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<se?Math.floor(1e3/se):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_getFirstCallbackNode=function(){return r(h)},o.unstable_next=function(se){switch(k){case 1:case 2:case 3:var xe=3;break;default:xe=k}var ue=k;k=xe;try{return se()}finally{k=ue}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(se,xe){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ue=k;k=se;try{return xe()}finally{k=ue}},o.unstable_scheduleCallback=function(se,xe,ue){var j=o.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?j+ue:j):ue=j,se){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ue+H,se={id:_++,callback:xe,priorityLevel:se,startTime:ue,expirationTime:H,sortIndex:-1},ue>j?(se.sortIndex=ue,n(x,se),r(h)===null&&se===r(x)&&(R?(E(V),V=-1):R=!0,Fe(B,ue-j))):(se.sortIndex=H,n(h,se),P||T||(P=!0,Ye(W))),se},o.unstable_shouldYield=Te,o.unstable_wrapCallback=function(se){var xe=k;return function(){var ue=k;k=xe;try{return se.apply(this,arguments)}finally{k=ue}}}})(ul)),ul}var B1;function Rp(){return B1||(B1=1,ll.exports=Pp()),ll.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function Ep(){if(I1)return Ot;I1=1;var o=Bl(),n=Rp();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function u(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var g=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},$={};function k(e){return h.call($,e)?!0:h.call(_,e)?!1:x.test(e)?$[e]=!0:(_[e]=!0,!1)}function T(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,t,i,a){if(t===null||typeof t>"u"||T(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function R(e,t,i,a,c,f,y){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=f,this.removeEmptyString=y}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new R(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];D[t]=new R(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new R(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new R(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new R(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new R(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new R(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new R(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new R(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,O);D[t]=new R(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,O);D[t]=new R(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,O);D[t]=new R(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new R(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new R(e,1,!1,e.toLowerCase(),null,!0,!0)});function G(e,t,i,a){var c=D.hasOwnProperty(t)?D[t]:null;(c!==null?c.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P(t,i,c,a)&&(i=null),a||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,a=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var B=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),U=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Te=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),be=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),se=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,j;function H(e){if(j===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var he=!1;function we(e,t){if(!e||he)return"";he=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(F){var a=F}Reflect.construct(e,[],t)}else{try{t.call()}catch(F){a=F}e.call(t.prototype)}else{try{throw Error()}catch(F){a=F}e()}}catch(F){if(F&&a&&typeof F.stack=="string"){for(var c=F.stack.split(`
`),f=a.stack.split(`
`),y=c.length-1,z=f.length-1;1<=y&&0<=z&&c[y]!==f[z];)z--;for(;1<=y&&0<=z;y--,z--)if(c[y]!==f[z]){if(y!==1||z!==1)do if(y--,z--,0>z||c[y]!==f[z]){var M=`
`+c[y].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=y&&0<=z);break}}}finally{he=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?H(e):""}function _e(e){switch(e.tag){case 5:return H(e.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return e=we(e.type,!1),e;case 11:return e=we(e.type.render,!1),e;case 1:return e=we(e.type,!0),e;default:return""}}function Me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case U:return"Portal";case ne:return"Profiler";case V:return"StrictMode";case be:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case me:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ge:return t=e.displayName||null,t!==null?t:Me(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}function Ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(t);case 8:return t===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mt(e){var t=Be(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xt(e){e._valueTracker||(e._valueTracker=mt(e))}function ti(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=Be(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function An(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qn(e,t){var i=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ar(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=Ee(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cn(e,t){t=t.checked,t!=null&&G(e,"checked",t,!1)}function Pn(e,t){Cn(e,t);var i=Ee(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ie(e,t.type,i):t.hasOwnProperty("defaultValue")&&Ie(e,t.type,Ee(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ie(e,t,i){(t!=="number"||An(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var zt=Array.isArray;function Ve(e,t,i,a){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Ee(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xt(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(zt(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Ee(i)}}function Rn(e,t){var i=Ee(t.value),a=Ee(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function Ei(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,Eo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zt(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Do=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){Do.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Ni(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function No(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,c=Ni(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,c):e[i]=c}}var Bo=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rr(e,t){if(t){if(Bo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function Zn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Jn=null,Jt=null;function Dr(e){if(e=ao(e)){if(typeof Er!="function")throw Error(r(280));var t=e.stateNode;t&&(t=a0(t),Er(e.stateNode,e.type,t))}}function Nr(e){Jn?Jt?Jt.push(e):Jt=[e]:Jn=e}function ri(){if(Jn){var e=Jn,t=Jt;if(Jt=Jn=null,Dr(e),t)for(e=0;e<t.length;e++)Dr(t[e])}}function Io(e,t){return e(t)}function er(){}var ii=!1;function Fi(e,t,i){if(ii)return e(t,i);ii=!0;try{return Io(e,t,i)}finally{ii=!1,(Jn!==null||Jt!==null)&&(er(),ri())}}function Br(e,t){var i=e.stateNode;if(i===null)return null;var a=a0(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var Li=!1;if(g)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Li=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Li=!1}function _s(e,t,i,a,c,f,y,z,M){var F=Array.prototype.slice.call(arguments,3);try{t.apply(i,F)}catch(Q){this.onError(Q)}}var Ir=!1,nr=null,rr=!1,Oi=null,ws={onError:function(e){Ir=!0,nr=e}};function $s(e,t,i,a,c,f,y,z,M){Ir=!1,nr=null,_s.apply(ws,arguments)}function ks(e,t,i,a,c,f,y,z,M){if($s.apply(this,arguments),Ir){if(Ir){var F=nr;Ir=!1,nr=null}else throw Error(r(198));rr||(rr=!0,Oi=F)}}function yn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Fo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cn(e){if(yn(e)!==e)throw Error(r(188))}function te(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,a=t;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(a=c.return,a!==null){i=a;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return cn(c),e;if(f===a)return cn(c),t;f=f.sibling}throw Error(r(188))}if(i.return!==a.return)i=c,a=f;else{for(var y=!1,z=c.child;z;){if(z===i){y=!0,i=c,a=f;break}if(z===a){y=!0,a=c,i=f;break}z=z.sibling}if(!y){for(z=f.child;z;){if(z===i){y=!0,i=f,a=c;break}if(z===a){y=!0,a=f,i=c;break}z=z.sibling}if(!y)throw Error(r(189))}}if(i.alternate!==a)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function De(e){return e=te(e),e!==null?Le(e):null}function Le(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Le(e);if(t!==null)return t;e=e.sibling}return null}var oi=n.unstable_scheduleCallback,au=n.unstable_cancelCallback,Fm=n.unstable_shouldYield,Lm=n.unstable_requestPaint,ut=n.unstable_now,Om=n.unstable_getCurrentPriorityLevel,zs=n.unstable_ImmediatePriority,lu=n.unstable_UserBlockingPriority,Lo=n.unstable_NormalPriority,Hm=n.unstable_LowPriority,uu=n.unstable_IdlePriority,Oo=null,xn=null;function Gm(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:Vm,Wm=Math.log,Um=Math.LN2;function Vm(e){return e>>>=0,e===0?32:31-(Wm(e)/Um|0)|0}var Ho=64,Go=4194304;function Hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,c=e.suspendedLanes,f=e.pingedLanes,y=i&268435455;if(y!==0){var z=y&~c;z!==0?a=Hi(z):(f&=y,f!==0&&(a=Hi(f)))}else y=i&~c,y!==0?a=Hi(y):f!==0&&(a=Hi(f));if(a===0)return 0;if(t!==0&&t!==a&&(t&c)===0&&(c=a&-a,f=t&-t,c>=f||c===16&&(f&4194240)!==0))return t;if((a&4)!==0&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-dn(t),c=1<<i,a|=e[i],t&=~c;return a}function Km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var y=31-dn(f),z=1<<y,M=c[y];M===-1?((z&i)===0||(z&a)!==0)&&(c[y]=Km(z,t)):M<=t&&(e.expiredLanes|=z),f&=~z}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cu(){var e=Ho;return Ho<<=1,(Ho&4194240)===0&&(Ho=64),e}function Ts(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Gi(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dn(t),e[t]=i}function Qm(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-dn(i),f=1<<c;t[c]=0,a[c]=-1,e[c]=-1,i&=~f}}function qs(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-dn(i),c=1<<a;c&t|e[a]&t&&(e[a]|=t),i&=~c}}var Ke=0;function du(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var mu,Ms,fu,pu,hu,js=!1,Uo=[],ir=null,or=null,sr=null,Wi=new Map,Ui=new Map,ar=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gu(e,t){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function Vi(e,t,i,a,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:f,targetContainers:[c]},t!==null&&(t=ao(t),t!==null&&Ms(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Zm(e,t,i,a,c){switch(t){case"focusin":return ir=Vi(ir,e,t,i,a,c),!0;case"dragenter":return or=Vi(or,e,t,i,a,c),!0;case"mouseover":return sr=Vi(sr,e,t,i,a,c),!0;case"pointerover":var f=c.pointerId;return Wi.set(f,Vi(Wi.get(f)||null,e,t,i,a,c)),!0;case"gotpointercapture":return f=c.pointerId,Ui.set(f,Vi(Ui.get(f)||null,e,t,i,a,c)),!0}return!1}function vu(e){var t=Fr(e.target);if(t!==null){var i=yn(t);if(i!==null){if(t=i.tag,t===13){if(t=Fo(i),t!==null){e.blockedOn=t,hu(e.priority,function(){fu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Cs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Bi=a,i.target.dispatchEvent(a),Bi=null}else return t=ao(i),t!==null&&Ms(t),e.blockedOn=i,!1;t.shift()}return!0}function yu(e,t,i){Vo(e)&&i.delete(t)}function Jm(){js=!1,ir!==null&&Vo(ir)&&(ir=null),or!==null&&Vo(or)&&(or=null),sr!==null&&Vo(sr)&&(sr=null),Wi.forEach(yu),Ui.forEach(yu)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Jm)))}function Yi(e){function t(c){return Ki(c,e)}if(0<Uo.length){Ki(Uo[0],e);for(var i=1;i<Uo.length;i++){var a=Uo[i];a.blockedOn===e&&(a.blockedOn=null)}}for(ir!==null&&Ki(ir,e),or!==null&&Ki(or,e),sr!==null&&Ki(sr,e),Wi.forEach(t),Ui.forEach(t),i=0;i<ar.length;i++)a=ar[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<ar.length&&(i=ar[0],i.blockedOn===null);)vu(i),i.blockedOn===null&&ar.shift()}var si=B.ReactCurrentBatchConfig,Ko=!0;function ef(e,t,i,a){var c=Ke,f=si.transition;si.transition=null;try{Ke=1,As(e,t,i,a)}finally{Ke=c,si.transition=f}}function tf(e,t,i,a){var c=Ke,f=si.transition;si.transition=null;try{Ke=4,As(e,t,i,a)}finally{Ke=c,si.transition=f}}function As(e,t,i,a){if(Ko){var c=Cs(e,t,i,a);if(c===null)Ys(e,t,a,Yo,i),gu(e,a);else if(Zm(c,e,t,i,a))a.stopPropagation();else if(gu(e,a),t&4&&-1<Xm.indexOf(e)){for(;c!==null;){var f=ao(c);if(f!==null&&mu(f),f=Cs(e,t,i,a),f===null&&Ys(e,t,a,Yo,i),f===c)break;c=f}c!==null&&a.stopPropagation()}else Ys(e,t,a,null,i)}}var Yo=null;function Cs(e,t,i,a){if(Yo=null,e=Ii(a),e=Fr(e),e!==null)if(t=yn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Fo(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function xu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case zs:return 1;case lu:return 4;case Lo:case Hm:return 16;case uu:return 536870912;default:return 16}default:return 16}}var lr=null,Ps=null,Qo=null;function bu(){if(Qo)return Qo;var e,t=Ps,i=t.length,a,c="value"in lr?lr.value:lr.textContent,f=c.length;for(e=0;e<i&&t[e]===c[e];e++);var y=i-e;for(a=1;a<=y&&t[i-a]===c[f-a];a++);return Qo=c.slice(e,1<a?1-a:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zo(){return!0}function _u(){return!1}function Wt(e){function t(i,a,c,f,y){this._reactName=i,this._targetInst=c,this.type=a,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(f):f[z]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Zo:_u,this.isPropagationStopped=_u,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Wt(ai),Qi=ue({},ai,{view:0,detail:0}),nf=Wt(Qi),Es,Ds,Xi,Jo=ue({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xi&&(Xi&&e.type==="mousemove"?(Es=e.screenX-Xi.screenX,Ds=e.screenY-Xi.screenY):Ds=Es=0,Xi=e),Es)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),wu=Wt(Jo),rf=ue({},Jo,{dataTransfer:0}),of=Wt(rf),sf=ue({},Qi,{relatedTarget:0}),Ns=Wt(sf),af=ue({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=Wt(af),uf=ue({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=Wt(uf),df=ue({},ai,{data:0}),$u=Wt(df),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ff={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=pf[e])?!!t[e]:!1}function Bs(){return hf}var gf=ue({},Qi,{key:function(e){if(e.key){var t=mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ff[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=Wt(gf),yf=ue({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Wt(yf),xf=ue({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),bf=Wt(xf),_f=ue({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),wf=Wt(_f),$f=ue({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kf=Wt($f),zf=[9,13,27,32],Is=g&&"CompositionEvent"in window,Zi=null;g&&"documentMode"in document&&(Zi=document.documentMode);var Sf=g&&"TextEvent"in window&&!Zi,zu=g&&(!Is||Zi&&8<Zi&&11>=Zi),Su=" ",Tu=!1;function qu(e,t){switch(e){case"keyup":return zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function Tf(e,t){switch(e){case"compositionend":return Mu(t);case"keypress":return t.which!==32?null:(Tu=!0,Su);case"textInput":return e=t.data,e===Su&&Tu?null:e;default:return null}}function qf(e,t){if(li)return e==="compositionend"||!Is&&qu(e,t)?(e=bu(),Qo=Ps=lr=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zu&&t.locale!=="ko"?null:t.data;default:return null}}var Mf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mf[e.type]:t==="textarea"}function Au(e,t,i,a){Nr(a),t=i0(t,"onChange"),0<t.length&&(i=new Rs("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var Ji=null,eo=null;function jf(e){Yu(e,0)}function e0(e){var t=fi(e);if(ti(t))return e}function Af(e,t){if(e==="change")return t}var Cu=!1;if(g){var Fs;if(g){var Ls="oninput"in document;if(!Ls){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Ls=typeof Pu.oninput=="function"}Fs=Ls}else Fs=!1;Cu=Fs&&(!document.documentMode||9<document.documentMode)}function Ru(){Ji&&(Ji.detachEvent("onpropertychange",Eu),eo=Ji=null)}function Eu(e){if(e.propertyName==="value"&&e0(eo)){var t=[];Au(t,eo,e,Ii(e)),Fi(jf,t)}}function Cf(e,t,i){e==="focusin"?(Ru(),Ji=t,eo=i,Ji.attachEvent("onpropertychange",Eu)):e==="focusout"&&Ru()}function Pf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return e0(eo)}function Rf(e,t){if(e==="click")return e0(t)}function Ef(e,t){if(e==="input"||e==="change")return e0(t)}function Df(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:Df;function to(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var c=i[a];if(!h.call(t,c)||!mn(e[c],t[c]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var i=Du(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Du(i)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iu(){for(var e=window,t=An();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=An(e.document)}return t}function Os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nf(e){var t=Iu(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Bu(i.ownerDocument.documentElement,i)){if(a!==null&&Os(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(a.start,c);a=a.end===void 0?f:Math.min(a.end,c),!e.extend&&f>a&&(c=a,a=f,f=c),c=Nu(i,f);var y=Nu(i,a);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),f>a?(e.addRange(t),e.extend(y.node,y.offset)):(t.setEnd(y.node,y.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bf=g&&"documentMode"in document&&11>=document.documentMode,ui=null,Hs=null,no=null,Gs=!1;function Fu(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Gs||ui==null||ui!==An(a)||(a=ui,"selectionStart"in a&&Os(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),no&&to(no,a)||(no=a,a=i0(Hs,"onSelect"),0<a.length&&(t=new Rs("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=ui)))}function t0(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ci={animationend:t0("Animation","AnimationEnd"),animationiteration:t0("Animation","AnimationIteration"),animationstart:t0("Animation","AnimationStart"),transitionend:t0("Transition","TransitionEnd")},Ws={},Lu={};g&&(Lu=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function n0(e){if(Ws[e])return Ws[e];if(!ci[e])return e;var t=ci[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Lu)return Ws[e]=t[i];return e}var Ou=n0("animationend"),Hu=n0("animationiteration"),Gu=n0("animationstart"),Wu=n0("transitionend"),Uu=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(e,t){Uu.set(e,t),u(t,[e])}for(var Us=0;Us<Vu.length;Us++){var Vs=Vu[Us],If=Vs.toLowerCase(),Ff=Vs[0].toUpperCase()+Vs.slice(1);ur(If,"on"+Ff)}ur(Ou,"onAnimationEnd"),ur(Hu,"onAnimationIteration"),ur(Gu,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Wu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Ku(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,ks(a,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],c=a.event;a=a.listeners;e:{var f=void 0;if(t)for(var y=a.length-1;0<=y;y--){var z=a[y],M=z.instance,F=z.currentTarget;if(z=z.listener,M!==f&&c.isPropagationStopped())break e;Ku(c,z,F),f=M}else for(y=0;y<a.length;y++){if(z=a[y],M=z.instance,F=z.currentTarget,z=z.listener,M!==f&&c.isPropagationStopped())break e;Ku(c,z,F),f=M}}}if(rr)throw e=Oi,rr=!1,Oi=null,e}function Je(e,t){var i=t[ta];i===void 0&&(i=t[ta]=new Set);var a=e+"__bubble";i.has(a)||(Qu(t,e,2,!1),i.add(a))}function Ks(e,t,i){var a=0;t&&(a|=4),Qu(i,e,a,t)}var r0="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[r0]){e[r0]=!0,s.forEach(function(i){i!=="selectionchange"&&(Lf.has(i)||Ks(i,!1,e),Ks(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[r0]||(t[r0]=!0,Ks("selectionchange",!1,t))}}function Qu(e,t,i,a){switch(xu(t)){case 1:var c=ef;break;case 4:c=tf;break;default:c=As}i=c.bind(null,t,i,e),c=void 0,!Li||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function Ys(e,t,i,a,c){var f=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var z=a.stateNode.containerInfo;if(z===c||z.nodeType===8&&z.parentNode===c)break;if(y===4)for(y=a.return;y!==null;){var M=y.tag;if((M===3||M===4)&&(M=y.stateNode.containerInfo,M===c||M.nodeType===8&&M.parentNode===c))return;y=y.return}for(;z!==null;){if(y=Fr(z),y===null)return;if(M=y.tag,M===5||M===6){a=f=y;continue e}z=z.parentNode}}a=a.return}Fi(function(){var F=f,Q=Ii(i),ee=[];e:{var K=Uu.get(e);if(K!==void 0){var de=Rs,ge=e;switch(e){case"keypress":if(Xo(i)===0)break e;case"keydown":case"keyup":de=vf;break;case"focusin":ge="focus",de=Ns;break;case"focusout":ge="blur",de=Ns;break;case"beforeblur":case"afterblur":de=Ns;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=of;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=bf;break;case Ou:case Hu:case Gu:de=lf;break;case Wu:de=wf;break;case"scroll":de=nf;break;case"wheel":de=kf;break;case"copy":case"cut":case"paste":de=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=ku}var ve=(t&4)!==0,ct=!ve&&e==="scroll",N=ve?K!==null?K+"Capture":null:K;ve=[];for(var C=F,I;C!==null;){I=C;var oe=I.stateNode;if(I.tag===5&&oe!==null&&(I=oe,N!==null&&(oe=Br(C,N),oe!=null&&ve.push(oo(C,oe,I)))),ct)break;C=C.return}0<ve.length&&(K=new de(K,ge,null,i,Q),ee.push({event:K,listeners:ve}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",K&&i!==Bi&&(ge=i.relatedTarget||i.fromElement)&&(Fr(ge)||ge[En]))break e;if((de||K)&&(K=Q.window===Q?Q:(K=Q.ownerDocument)?K.defaultView||K.parentWindow:window,de?(ge=i.relatedTarget||i.toElement,de=F,ge=ge?Fr(ge):null,ge!==null&&(ct=yn(ge),ge!==ct||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=F),de!==ge)){if(ve=wu,oe="onMouseLeave",N="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ve=ku,oe="onPointerLeave",N="onPointerEnter",C="pointer"),ct=de==null?K:fi(de),I=ge==null?K:fi(ge),K=new ve(oe,C+"leave",de,i,Q),K.target=ct,K.relatedTarget=I,oe=null,Fr(Q)===F&&(ve=new ve(N,C+"enter",ge,i,Q),ve.target=I,ve.relatedTarget=ct,oe=ve),ct=oe,de&&ge)t:{for(ve=de,N=ge,C=0,I=ve;I;I=di(I))C++;for(I=0,oe=N;oe;oe=di(oe))I++;for(;0<C-I;)ve=di(ve),C--;for(;0<I-C;)N=di(N),I--;for(;C--;){if(ve===N||N!==null&&ve===N.alternate)break t;ve=di(ve),N=di(N)}ve=null}else ve=null;de!==null&&Xu(ee,K,de,ve,!1),ge!==null&&ct!==null&&Xu(ee,ct,ge,ve,!0)}}e:{if(K=F?fi(F):window,de=K.nodeName&&K.nodeName.toLowerCase(),de==="select"||de==="input"&&K.type==="file")var ye=Af;else if(ju(K))if(Cu)ye=Ef;else{ye=Pf;var $e=Cf}else(de=K.nodeName)&&de.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(ye=Rf);if(ye&&(ye=ye(e,F))){Au(ee,ye,i,Q);break e}$e&&$e(e,K,F),e==="focusout"&&($e=K._wrapperState)&&$e.controlled&&K.type==="number"&&Ie(K,"number",K.value)}switch($e=F?fi(F):window,e){case"focusin":(ju($e)||$e.contentEditable==="true")&&(ui=$e,Hs=F,no=null);break;case"focusout":no=Hs=ui=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,Fu(ee,i,Q);break;case"selectionchange":if(Bf)break;case"keydown":case"keyup":Fu(ee,i,Q)}var ke;if(Is)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else li?qu(e,i)&&(Ae="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ae="onCompositionStart");Ae&&(zu&&i.locale!=="ko"&&(li||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&li&&(ke=bu()):(lr=Q,Ps="value"in lr?lr.value:lr.textContent,li=!0)),$e=i0(F,Ae),0<$e.length&&(Ae=new $u(Ae,e,null,i,Q),ee.push({event:Ae,listeners:$e}),ke?Ae.data=ke:(ke=Mu(i),ke!==null&&(Ae.data=ke)))),(ke=Sf?Tf(e,i):qf(e,i))&&(F=i0(F,"onBeforeInput"),0<F.length&&(Q=new $u("onBeforeInput","beforeinput",null,i,Q),ee.push({event:Q,listeners:F}),Q.data=ke))}Yu(ee,t)})}function oo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function i0(e,t){for(var i=t+"Capture",a=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=Br(e,i),f!=null&&a.unshift(oo(e,f,c)),f=Br(e,t),f!=null&&a.push(oo(e,f,c))),e=e.return}return a}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,i,a,c){for(var f=t._reactName,y=[];i!==null&&i!==a;){var z=i,M=z.alternate,F=z.stateNode;if(M!==null&&M===a)break;z.tag===5&&F!==null&&(z=F,c?(M=Br(i,f),M!=null&&y.unshift(oo(i,M,z))):c||(M=Br(i,f),M!=null&&y.push(oo(i,M,z)))),i=i.return}y.length!==0&&e.push({event:t,listeners:y})}var Of=/\r\n?/g,Hf=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(Of,`
`).replace(Hf,"")}function o0(e,t,i){if(t=Zu(t),Zu(e)!==t&&i)throw Error(r(425))}function s0(){}var Qs=null,Xs=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,Gf=typeof clearTimeout=="function"?clearTimeout:void 0,Ju=typeof Promise=="function"?Promise:void 0,Wf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ju<"u"?function(e){return Ju.resolve(null).then(e).catch(Uf)}:Js;function Uf(e){setTimeout(function(){throw e})}function ea(e,t){var i=t,a=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(a===0){e.removeChild(c),Yi(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=c}while(i);Yi(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),bn="__reactFiber$"+mi,so="__reactProps$"+mi,En="__reactContainer$"+mi,ta="__reactEvents$"+mi,Vf="__reactListeners$"+mi,Kf="__reactHandles$"+mi;function Fr(e){var t=e[bn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[En]||i[bn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=ec(e);e!==null;){if(i=e[bn])return i;e=ec(e)}return t}e=i,i=e.parentNode}return null}function ao(e){return e=e[bn]||e[En],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function a0(e){return e[so]||null}var na=[],pi=-1;function dr(e){return{current:e}}function et(e){0>pi||(e.current=na[pi],na[pi]=null,pi--)}function Xe(e,t){pi++,na[pi]=e.current,e.current=t}var mr={},St=dr(mr),Nt=dr(!1),Lr=mr;function hi(e,t){var i=e.type.contextTypes;if(!i)return mr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=t[f];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Bt(e){return e=e.childContextTypes,e!=null}function l0(){et(Nt),et(St)}function tc(e,t,i){if(St.current!==mr)throw Error(r(168));Xe(St,t),Xe(Nt,i)}function nc(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var c in a)if(!(c in t))throw Error(r(108,Ne(e)||"Unknown",c));return ue({},i,a)}function u0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mr,Lr=St.current,Xe(St,e),Xe(Nt,Nt.current),!0}function rc(e,t,i){var a=e.stateNode;if(!a)throw Error(r(169));i?(e=nc(e,t,Lr),a.__reactInternalMemoizedMergedChildContext=e,et(Nt),et(St),Xe(St,e)):et(Nt),Xe(Nt,i)}var Dn=null,c0=!1,ra=!1;function ic(e){Dn===null?Dn=[e]:Dn.push(e)}function Yf(e){c0=!0,ic(e)}function fr(){if(!ra&&Dn!==null){ra=!0;var e=0,t=Ke;try{var i=Dn;for(Ke=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Dn=null,c0=!1}catch(c){throw Dn!==null&&(Dn=Dn.slice(e+1)),oi(zs,fr),c}finally{Ke=t,ra=!1}}return null}var gi=[],vi=0,d0=null,m0=0,en=[],tn=0,Or=null,Nn=1,Bn="";function Hr(e,t){gi[vi++]=m0,gi[vi++]=d0,d0=e,m0=t}function oc(e,t,i){en[tn++]=Nn,en[tn++]=Bn,en[tn++]=Or,Or=e;var a=Nn;e=Bn;var c=32-dn(a)-1;a&=~(1<<c),i+=1;var f=32-dn(t)+c;if(30<f){var y=c-c%5;f=(a&(1<<y)-1).toString(32),a>>=y,c-=y,Nn=1<<32-dn(t)+c|i<<c|a,Bn=f+e}else Nn=1<<f|i<<c|a,Bn=e}function ia(e){e.return!==null&&(Hr(e,1),oc(e,1,0))}function oa(e){for(;e===d0;)d0=gi[--vi],gi[vi]=null,m0=gi[--vi],gi[vi]=null;for(;e===Or;)Or=en[--tn],en[tn]=null,Bn=en[--tn],en[tn]=null,Nn=en[--tn],en[tn]=null}var Ut=null,Vt=null,tt=!1,fn=null;function sc(e,t){var i=sn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function ac(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Vt=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Or!==null?{id:Nn,overflow:Bn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=sn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Ut=e,Vt=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(tt){var t=Vt;if(t){var i=t;if(!ac(e,t)){if(sa(e))throw Error(r(418));t=cr(i.nextSibling);var a=Ut;t&&ac(e,t)?sc(a,i):(e.flags=e.flags&-4097|2,tt=!1,Ut=e)}}else{if(sa(e))throw Error(r(418));e.flags=e.flags&-4097|2,tt=!1,Ut=e}}}function lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function f0(e){if(e!==Ut)return!1;if(!tt)return lc(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=Vt)){if(sa(e))throw uc(),Error(r(418));for(;t;)sc(e,t),t=cr(t.nextSibling)}if(lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Vt=cr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Ut?cr(e.stateNode.nextSibling):null;return!0}function uc(){for(var e=Vt;e;)e=cr(e.nextSibling)}function yi(){Vt=Ut=null,tt=!1}function la(e){fn===null?fn=[e]:fn.push(e)}var Qf=B.ReactCurrentBatchConfig;function lo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var a=i.stateNode}if(!a)throw Error(r(147,e));var c=a,f=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f?t.ref:(t=function(y){var z=c.refs;y===null?delete z[f]:z[f]=y},t._stringRef=f,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function p0(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function dc(e){function t(N,C){if(e){var I=N.deletions;I===null?(N.deletions=[C],N.flags|=16):I.push(C)}}function i(N,C){if(!e)return null;for(;C!==null;)t(N,C),C=C.sibling;return null}function a(N,C){for(N=new Map;C!==null;)C.key!==null?N.set(C.key,C):N.set(C.index,C),C=C.sibling;return N}function c(N,C){return N=_r(N,C),N.index=0,N.sibling=null,N}function f(N,C,I){return N.index=I,e?(I=N.alternate,I!==null?(I=I.index,I<C?(N.flags|=2,C):I):(N.flags|=2,C)):(N.flags|=1048576,C)}function y(N){return e&&N.alternate===null&&(N.flags|=2),N}function z(N,C,I,oe){return C===null||C.tag!==6?(C=Ja(I,N.mode,oe),C.return=N,C):(C=c(C,I),C.return=N,C)}function M(N,C,I,oe){var ye=I.type;return ye===L?Q(N,C,I.props.children,oe,I.key):C!==null&&(C.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Ye&&cc(ye)===C.type)?(oe=c(C,I.props),oe.ref=lo(N,C,I),oe.return=N,oe):(oe=B0(I.type,I.key,I.props,null,N.mode,oe),oe.ref=lo(N,C,I),oe.return=N,oe)}function F(N,C,I,oe){return C===null||C.tag!==4||C.stateNode.containerInfo!==I.containerInfo||C.stateNode.implementation!==I.implementation?(C=el(I,N.mode,oe),C.return=N,C):(C=c(C,I.children||[]),C.return=N,C)}function Q(N,C,I,oe,ye){return C===null||C.tag!==7?(C=Xr(I,N.mode,oe,ye),C.return=N,C):(C=c(C,I),C.return=N,C)}function ee(N,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Ja(""+C,N.mode,I),C.return=N,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case W:return I=B0(C.type,C.key,C.props,null,N.mode,I),I.ref=lo(N,null,C),I.return=N,I;case U:return C=el(C,N.mode,I),C.return=N,C;case Ye:var oe=C._init;return ee(N,oe(C._payload),I)}if(zt(C)||xe(C))return C=Xr(C,N.mode,I,null),C.return=N,C;p0(N,C)}return null}function K(N,C,I,oe){var ye=C!==null?C.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ye!==null?null:z(N,C,""+I,oe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case W:return I.key===ye?M(N,C,I,oe):null;case U:return I.key===ye?F(N,C,I,oe):null;case Ye:return ye=I._init,K(N,C,ye(I._payload),oe)}if(zt(I)||xe(I))return ye!==null?null:Q(N,C,I,oe,null);p0(N,I)}return null}function de(N,C,I,oe,ye){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return N=N.get(I)||null,z(C,N,""+oe,ye);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case W:return N=N.get(oe.key===null?I:oe.key)||null,M(C,N,oe,ye);case U:return N=N.get(oe.key===null?I:oe.key)||null,F(C,N,oe,ye);case Ye:var $e=oe._init;return de(N,C,I,$e(oe._payload),ye)}if(zt(oe)||xe(oe))return N=N.get(I)||null,Q(C,N,oe,ye,null);p0(C,oe)}return null}function ge(N,C,I,oe){for(var ye=null,$e=null,ke=C,Ae=C=0,wt=null;ke!==null&&Ae<I.length;Ae++){ke.index>Ae?(wt=ke,ke=null):wt=ke.sibling;var We=K(N,ke,I[Ae],oe);if(We===null){ke===null&&(ke=wt);break}e&&ke&&We.alternate===null&&t(N,ke),C=f(We,C,Ae),$e===null?ye=We:$e.sibling=We,$e=We,ke=wt}if(Ae===I.length)return i(N,ke),tt&&Hr(N,Ae),ye;if(ke===null){for(;Ae<I.length;Ae++)ke=ee(N,I[Ae],oe),ke!==null&&(C=f(ke,C,Ae),$e===null?ye=ke:$e.sibling=ke,$e=ke);return tt&&Hr(N,Ae),ye}for(ke=a(N,ke);Ae<I.length;Ae++)wt=de(ke,N,Ae,I[Ae],oe),wt!==null&&(e&&wt.alternate!==null&&ke.delete(wt.key===null?Ae:wt.key),C=f(wt,C,Ae),$e===null?ye=wt:$e.sibling=wt,$e=wt);return e&&ke.forEach(function(wr){return t(N,wr)}),tt&&Hr(N,Ae),ye}function ve(N,C,I,oe){var ye=xe(I);if(typeof ye!="function")throw Error(r(150));if(I=ye.call(I),I==null)throw Error(r(151));for(var $e=ye=null,ke=C,Ae=C=0,wt=null,We=I.next();ke!==null&&!We.done;Ae++,We=I.next()){ke.index>Ae?(wt=ke,ke=null):wt=ke.sibling;var wr=K(N,ke,We.value,oe);if(wr===null){ke===null&&(ke=wt);break}e&&ke&&wr.alternate===null&&t(N,ke),C=f(wr,C,Ae),$e===null?ye=wr:$e.sibling=wr,$e=wr,ke=wt}if(We.done)return i(N,ke),tt&&Hr(N,Ae),ye;if(ke===null){for(;!We.done;Ae++,We=I.next())We=ee(N,We.value,oe),We!==null&&(C=f(We,C,Ae),$e===null?ye=We:$e.sibling=We,$e=We);return tt&&Hr(N,Ae),ye}for(ke=a(N,ke);!We.done;Ae++,We=I.next())We=de(ke,N,Ae,We.value,oe),We!==null&&(e&&We.alternate!==null&&ke.delete(We.key===null?Ae:We.key),C=f(We,C,Ae),$e===null?ye=We:$e.sibling=We,$e=We);return e&&ke.forEach(function(Mp){return t(N,Mp)}),tt&&Hr(N,Ae),ye}function ct(N,C,I,oe){if(typeof I=="object"&&I!==null&&I.type===L&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case W:e:{for(var ye=I.key,$e=C;$e!==null;){if($e.key===ye){if(ye=I.type,ye===L){if($e.tag===7){i(N,$e.sibling),C=c($e,I.props.children),C.return=N,N=C;break e}}else if($e.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===Ye&&cc(ye)===$e.type){i(N,$e.sibling),C=c($e,I.props),C.ref=lo(N,$e,I),C.return=N,N=C;break e}i(N,$e);break}else t(N,$e);$e=$e.sibling}I.type===L?(C=Xr(I.props.children,N.mode,oe,I.key),C.return=N,N=C):(oe=B0(I.type,I.key,I.props,null,N.mode,oe),oe.ref=lo(N,C,I),oe.return=N,N=oe)}return y(N);case U:e:{for($e=I.key;C!==null;){if(C.key===$e)if(C.tag===4&&C.stateNode.containerInfo===I.containerInfo&&C.stateNode.implementation===I.implementation){i(N,C.sibling),C=c(C,I.children||[]),C.return=N,N=C;break e}else{i(N,C);break}else t(N,C);C=C.sibling}C=el(I,N.mode,oe),C.return=N,N=C}return y(N);case Ye:return $e=I._init,ct(N,C,$e(I._payload),oe)}if(zt(I))return ge(N,C,I,oe);if(xe(I))return ve(N,C,I,oe);p0(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,C!==null&&C.tag===6?(i(N,C.sibling),C=c(C,I),C.return=N,N=C):(i(N,C),C=Ja(I,N.mode,oe),C.return=N,N=C),y(N)):i(N,C)}return ct}var xi=dc(!0),mc=dc(!1),h0=dr(null),g0=null,bi=null,ua=null;function ca(){ua=bi=g0=null}function da(e){var t=h0.current;et(h0),e._currentValue=t}function ma(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function _i(e,t){g0=e,ua=bi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(It=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},bi===null){if(g0===null)throw Error(r(308));bi=e,g0.dependencies={lanes:0,firstContext:e}}else bi=bi.next=e;return t}var Gr=null;function fa(e){Gr===null?Gr=[e]:Gr.push(e)}function fc(e,t,i,a){var c=t.interleaved;return c===null?(i.next=i,fa(t)):(i.next=c.next,c.next=i),t.interleaved=i,In(e,a)}function In(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var pr=!1;function pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hr(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Oe&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,In(e,i)}return c=a.interleaved,c===null?(t.next=t,fa(a)):(t.next=c.next,c.next=t),a.interleaved=t,In(e,i)}function v0(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,qs(e,i)}}function hc(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=y:f=f.next=y,i=i.next}while(i!==null);f===null?c=f=t:f=f.next=t}else c=f=t;i={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function y0(e,t,i,a){var c=e.updateQueue;pr=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,z=c.shared.pending;if(z!==null){c.shared.pending=null;var M=z,F=M.next;M.next=null,y===null?f=F:y.next=F,y=M;var Q=e.alternate;Q!==null&&(Q=Q.updateQueue,z=Q.lastBaseUpdate,z!==y&&(z===null?Q.firstBaseUpdate=F:z.next=F,Q.lastBaseUpdate=M))}if(f!==null){var ee=c.baseState;y=0,Q=F=M=null,z=f;do{var K=z.lane,de=z.eventTime;if((a&K)===K){Q!==null&&(Q=Q.next={eventTime:de,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ge=e,ve=z;switch(K=t,de=i,ve.tag){case 1:if(ge=ve.payload,typeof ge=="function"){ee=ge.call(de,ee,K);break e}ee=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ve.payload,K=typeof ge=="function"?ge.call(de,ee,K):ge,K==null)break e;ee=ue({},ee,K);break e;case 2:pr=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,K=c.effects,K===null?c.effects=[z]:K.push(z))}else de={eventTime:de,lane:K,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Q===null?(F=Q=de,M=ee):Q=Q.next=de,y|=K;if(z=z.next,z===null){if(z=c.shared.pending,z===null)break;K=z,z=K.next,K.next=null,c.lastBaseUpdate=K,c.shared.pending=null}}while(!0);if(Q===null&&(M=ee),c.baseState=M,c.firstBaseUpdate=F,c.lastBaseUpdate=Q,t=c.shared.interleaved,t!==null){c=t;do y|=c.lane,c=c.next;while(c!==t)}else f===null&&(c.shared.lanes=0);Vr|=y,e.lanes=y,e.memoizedState=ee}}function gc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],c=a.callback;if(c!==null){if(a.callback=null,a=i,typeof c!="function")throw Error(r(191,c));c.call(a)}}}var uo={},_n=dr(uo),co=dr(uo),mo=dr(uo);function Wr(e){if(e===uo)throw Error(r(174));return e}function ha(e,t){switch(Xe(mo,t),Xe(co,e),Xe(_n,uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}et(_n),Xe(_n,t)}function wi(){et(_n),et(co),et(mo)}function vc(e){Wr(mo.current);var t=Wr(_n.current),i=Di(t,e.type);t!==i&&(Xe(co,e),Xe(_n,i))}function ga(e){co.current===e&&(et(_n),et(co))}var rt=dr(0);function x0(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function ya(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var b0=B.ReactCurrentDispatcher,xa=B.ReactCurrentBatchConfig,Ur=0,it=null,gt=null,bt=null,_0=!1,fo=!1,po=0,Xf=0;function Tt(){throw Error(r(321))}function ba(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!mn(e[i],t[i]))return!1;return!0}function _a(e,t,i,a,c,f){if(Ur=f,it=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b0.current=e===null||e.memoizedState===null?tp:np,e=i(a,c),fo){f=0;do{if(fo=!1,po=0,25<=f)throw Error(r(301));f+=1,bt=gt=null,t.updateQueue=null,b0.current=rp,e=i(a,c)}while(fo)}if(b0.current=k0,t=gt!==null&&gt.next!==null,Ur=0,bt=gt=it=null,_0=!1,t)throw Error(r(300));return e}function wa(){var e=po!==0;return po=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?it.memoizedState=bt=e:bt=bt.next=e,bt}function rn(){if(gt===null){var e=it.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=bt===null?it.memoizedState:bt.next;if(t!==null)bt=t,gt=e;else{if(e===null)throw Error(r(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},bt===null?it.memoizedState=bt=e:bt=bt.next=e}return bt}function ho(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=rn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var a=gt,c=a.baseQueue,f=i.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}a.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,a=a.baseState;var z=y=null,M=null,F=f;do{var Q=F.lane;if((Ur&Q)===Q)M!==null&&(M=M.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),a=F.hasEagerState?F.eagerState:e(a,F.action);else{var ee={lane:Q,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};M===null?(z=M=ee,y=a):M=M.next=ee,it.lanes|=Q,Vr|=Q}F=F.next}while(F!==null&&F!==f);M===null?y=a:M.next=z,mn(a,t.memoizedState)||(It=!0),t.memoizedState=a,t.baseState=y,t.baseQueue=M,i.lastRenderedState=a}if(e=i.interleaved,e!==null){c=e;do f=c.lane,it.lanes|=f,Vr|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ka(e){var t=rn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var a=i.dispatch,c=i.pending,f=t.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);mn(f,t.memoizedState)||(It=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),i.lastRenderedState=f}return[f,a]}function yc(){}function xc(e,t){var i=it,a=rn(),c=t(),f=!mn(a.memoizedState,c);if(f&&(a.memoizedState=c,It=!0),a=a.queue,za(wc.bind(null,i,a,e),[e]),a.getSnapshot!==t||f||bt!==null&&bt.memoizedState.tag&1){if(i.flags|=2048,go(9,_c.bind(null,i,a,c,t),void 0,null),_t===null)throw Error(r(349));(Ur&30)!==0||bc(i,t,c)}return c}function bc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function _c(e,t,i,a){t.value=i,t.getSnapshot=a,$c(t)&&kc(e)}function wc(e,t,i){return i(function(){$c(t)&&kc(e)})}function $c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!mn(e,i)}catch{return!0}}function kc(e){var t=In(e,1);t!==null&&vn(t,e,1,-1)}function zc(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t.queue=e,e=e.dispatch=ep.bind(null,it,e),[t.memoizedState,e]}function go(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function Sc(){return rn().memoizedState}function w0(e,t,i,a){var c=wn();it.flags|=e,c.memoizedState=go(1|t,i,void 0,a===void 0?null:a)}function $0(e,t,i,a){var c=rn();a=a===void 0?null:a;var f=void 0;if(gt!==null){var y=gt.memoizedState;if(f=y.destroy,a!==null&&ba(a,y.deps)){c.memoizedState=go(t,i,f,a);return}}it.flags|=e,c.memoizedState=go(1|t,i,f,a)}function Tc(e,t){return w0(8390656,8,e,t)}function za(e,t){return $0(2048,8,e,t)}function qc(e,t){return $0(4,2,e,t)}function Mc(e,t){return $0(4,4,e,t)}function jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,i){return i=i!=null?i.concat([e]):null,$0(4,4,jc.bind(null,t,e),i)}function Sa(){}function Cc(e,t){var i=rn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&ba(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function Pc(e,t){var i=rn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&ba(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function Rc(e,t,i){return(Ur&21)===0?(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=i):(mn(i,t)||(i=cu(),it.lanes|=i,Vr|=i,e.baseState=!0),t)}function Zf(e,t){var i=Ke;Ke=i!==0&&4>i?i:4,e(!0);var a=xa.transition;xa.transition={};try{e(!1),t()}finally{Ke=i,xa.transition=a}}function Ec(){return rn().memoizedState}function Jf(e,t,i){var a=xr(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Dc(e))Nc(t,i);else if(i=fc(e,t,i,a),i!==null){var c=Ct();vn(i,e,a,c),Bc(i,t,a)}}function ep(e,t,i){var a=xr(e),c={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Dc(e))Nc(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,z=f(y,i);if(c.hasEagerState=!0,c.eagerState=z,mn(z,y)){var M=t.interleaved;M===null?(c.next=c,fa(t)):(c.next=M.next,M.next=c),t.interleaved=c;return}}catch{}finally{}i=fc(e,t,c,a),i!==null&&(c=Ct(),vn(i,e,a,c),Bc(i,t,a))}}function Dc(e){var t=e.alternate;return e===it||t!==null&&t===it}function Nc(e,t){fo=_0=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Bc(e,t,i){if((i&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,qs(e,i)}}var k0={readContext:nn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},tp={readContext:nn,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Tc,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,w0(4194308,4,jc.bind(null,t,e),i)},useLayoutEffect:function(e,t){return w0(4194308,4,e,t)},useInsertionEffect:function(e,t){return w0(4,2,e,t)},useMemo:function(e,t){var i=wn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=wn();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Jf.bind(null,it,e),[a.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:zc,useDebugValue:Sa,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=zc(!1),t=e[0];return e=Zf.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=it,c=wn();if(tt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),_t===null)throw Error(r(349));(Ur&30)!==0||bc(a,t,i)}c.memoizedState=i;var f={value:i,getSnapshot:t};return c.queue=f,Tc(wc.bind(null,a,f,e),[e]),a.flags|=2048,go(9,_c.bind(null,a,f,i,t),void 0,null),i},useId:function(){var e=wn(),t=_t.identifierPrefix;if(tt){var i=Bn,a=Nn;i=(a&~(1<<32-dn(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=po++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Xf++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},np={readContext:nn,useCallback:Cc,useContext:nn,useEffect:za,useImperativeHandle:Ac,useInsertionEffect:qc,useLayoutEffect:Mc,useMemo:Pc,useReducer:$a,useRef:Sc,useState:function(){return $a(ho)},useDebugValue:Sa,useDeferredValue:function(e){var t=rn();return Rc(t,gt.memoizedState,e)},useTransition:function(){var e=$a(ho)[0],t=rn().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:xc,useId:Ec,unstable_isNewReconciler:!1},rp={readContext:nn,useCallback:Cc,useContext:nn,useEffect:za,useImperativeHandle:Ac,useInsertionEffect:qc,useLayoutEffect:Mc,useMemo:Pc,useReducer:ka,useRef:Sc,useState:function(){return ka(ho)},useDebugValue:Sa,useDeferredValue:function(e){var t=rn();return gt===null?t.memoizedState=e:Rc(t,gt.memoizedState,e)},useTransition:function(){var e=ka(ho)[0],t=rn().memoizedState;return[e,t]},useMutableSource:yc,useSyncExternalStore:xc,useId:Ec,unstable_isNewReconciler:!1};function pn(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ta(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:ue({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var z0={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=Ct(),c=xr(e),f=Fn(a,c);f.payload=t,i!=null&&(f.callback=i),t=hr(e,f,c),t!==null&&(vn(t,e,c,a),v0(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=Ct(),c=xr(e),f=Fn(a,c);f.tag=1,f.payload=t,i!=null&&(f.callback=i),t=hr(e,f,c),t!==null&&(vn(t,e,c,a),v0(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ct(),a=xr(e),c=Fn(i,a);c.tag=2,t!=null&&(c.callback=t),t=hr(e,c,a),t!==null&&(vn(t,e,a,i),v0(t,e,a))}};function Ic(e,t,i,a,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,y):t.prototype&&t.prototype.isPureReactComponent?!to(i,a)||!to(c,f):!0}function Fc(e,t,i){var a=!1,c=mr,f=t.contextType;return typeof f=="object"&&f!==null?f=nn(f):(c=Bt(t)?Lr:St.current,a=t.contextTypes,f=(a=a!=null)?hi(e,c):mr),t=new t(i,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=z0,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),t}function Lc(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&z0.enqueueReplaceState(t,t.state,null)}function qa(e,t,i,a){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},pa(e);var f=t.contextType;typeof f=="object"&&f!==null?c.context=nn(f):(f=Bt(t)?Lr:St.current,c.context=hi(e,f)),c.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(Ta(e,t,f,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&z0.enqueueReplaceState(c,c.state,null),y0(e,i,c,a),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function $i(e,t){try{var i="",a=t;do i+=_e(a),a=a.return;while(a);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:t,stack:c,digest:null}}function Ma(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function ja(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var ip=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,i){i=Fn(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){C0||(C0=!0,Wa=a),ja(e,t)},i}function Hc(e,t,i){i=Fn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var c=t.value;i.payload=function(){return a(c)},i.callback=function(){ja(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){ja(e,t),typeof a!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var y=t.stack;this.componentDidCatch(t.value,{componentStack:y!==null?y:""})}),i}function Gc(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new ip;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(i)||(c.add(i),e=yp.bind(null,e,t,i),t.then(e,e))}function Wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,i,a,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Fn(-1,1),t.tag=2,hr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var op=B.ReactCurrentOwner,It=!1;function At(e,t,i,a){t.child=e===null?mc(t,null,i,a):xi(t,e.child,i,a)}function Vc(e,t,i,a,c){i=i.render;var f=t.ref;return _i(t,c),a=_a(e,t,i,a,f,c),i=wa(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Ln(e,t,c)):(tt&&i&&ia(t),t.flags|=1,At(e,t,a,c),t.child)}function Kc(e,t,i,a,c){if(e===null){var f=i.type;return typeof f=="function"&&!Za(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=f,Yc(e,t,f,a,c)):(e=B0(i.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,(e.lanes&c)===0){var y=f.memoizedProps;if(i=i.compare,i=i!==null?i:to,i(y,a)&&e.ref===t.ref)return Ln(e,t,c)}return t.flags|=1,e=_r(f,a),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,i,a,c){if(e!==null){var f=e.memoizedProps;if(to(f,a)&&e.ref===t.ref)if(It=!1,t.pendingProps=a=f,(e.lanes&c)!==0)(e.flags&131072)!==0&&(It=!0);else return t.lanes=e.lanes,Ln(e,t,c)}return Aa(e,t,i,a,c)}function Qc(e,t,i){var a=t.pendingProps,c=a.children,f=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(zi,Kt),Kt|=i;else{if((i&1073741824)===0)return e=f!==null?f.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Xe(zi,Kt),Kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=f!==null?f.baseLanes:i,Xe(zi,Kt),Kt|=a}else f!==null?(a=f.baseLanes|i,t.memoizedState=null):a=i,Xe(zi,Kt),Kt|=a;return At(e,t,c,i),t.child}function Xc(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Aa(e,t,i,a,c){var f=Bt(i)?Lr:St.current;return f=hi(t,f),_i(t,c),i=_a(e,t,i,a,f,c),a=wa(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Ln(e,t,c)):(tt&&a&&ia(t),t.flags|=1,At(e,t,i,c),t.child)}function Zc(e,t,i,a,c){if(Bt(i)){var f=!0;u0(t)}else f=!1;if(_i(t,c),t.stateNode===null)T0(e,t),Fc(t,i,a),qa(t,i,a,c),a=!0;else if(e===null){var y=t.stateNode,z=t.memoizedProps;y.props=z;var M=y.context,F=i.contextType;typeof F=="object"&&F!==null?F=nn(F):(F=Bt(i)?Lr:St.current,F=hi(t,F));var Q=i.getDerivedStateFromProps,ee=typeof Q=="function"||typeof y.getSnapshotBeforeUpdate=="function";ee||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(z!==a||M!==F)&&Lc(t,y,a,F),pr=!1;var K=t.memoizedState;y.state=K,y0(t,a,y,c),M=t.memoizedState,z!==a||K!==M||Nt.current||pr?(typeof Q=="function"&&(Ta(t,i,Q,a),M=t.memoizedState),(z=pr||Ic(t,i,z,a,K,M,F))?(ee||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(t.flags|=4194308)):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=M),y.props=a,y.state=M,y.context=F,a=z):(typeof y.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{y=t.stateNode,pc(e,t),z=t.memoizedProps,F=t.type===t.elementType?z:pn(t.type,z),y.props=F,ee=t.pendingProps,K=y.context,M=i.contextType,typeof M=="object"&&M!==null?M=nn(M):(M=Bt(i)?Lr:St.current,M=hi(t,M));var de=i.getDerivedStateFromProps;(Q=typeof de=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(z!==ee||K!==M)&&Lc(t,y,a,M),pr=!1,K=t.memoizedState,y.state=K,y0(t,a,y,c);var ge=t.memoizedState;z!==ee||K!==ge||Nt.current||pr?(typeof de=="function"&&(Ta(t,i,de,a),ge=t.memoizedState),(F=pr||Ic(t,i,F,a,K,ge,M)||!1)?(Q||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(a,ge,M),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(a,ge,M)),typeof y.componentDidUpdate=="function"&&(t.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof y.componentDidUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ge),y.props=a,y.state=ge,y.context=M,a=F):(typeof y.componentDidUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),a=!1)}return Ca(e,t,i,a,f,c)}function Ca(e,t,i,a,c,f){Xc(e,t);var y=(t.flags&128)!==0;if(!a&&!y)return c&&rc(t,i,!1),Ln(e,t,f);a=t.stateNode,op.current=t;var z=y&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&y?(t.child=xi(t,e.child,null,f),t.child=xi(t,null,z,f)):At(e,t,z,f),t.memoizedState=a.state,c&&rc(t,i,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tc(e,t.context,!1),ha(e,t.containerInfo)}function e1(e,t,i,a,c){return yi(),la(c),t.flags|=256,At(e,t,i,a),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function Ra(e){return{baseLanes:e,cachePool:null,transitions:null}}function t1(e,t,i){var a=t.pendingProps,c=rt.current,f=!1,y=(t.flags&128)!==0,z;if((z=y)||(z=e!==null&&e.memoizedState===null?!1:(c&2)!==0),z?(f=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Xe(rt,c&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(y=a.children,e=a.fallback,f?(a=t.mode,f=t.child,y={mode:"hidden",children:y},(a&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=y):f=I0(y,a,0,null),e=Xr(e,a,i,null),f.return=t,e.return=t,f.sibling=e,t.child=f,t.child.memoizedState=Ra(i),t.memoizedState=Pa,e):Ea(t,y));if(c=e.memoizedState,c!==null&&(z=c.dehydrated,z!==null))return sp(e,t,y,a,z,c,i);if(f){f=a.fallback,y=t.mode,c=e.child,z=c.sibling;var M={mode:"hidden",children:a.children};return(y&1)===0&&t.child!==c?(a=t.child,a.childLanes=0,a.pendingProps=M,t.deletions=null):(a=_r(c,M),a.subtreeFlags=c.subtreeFlags&14680064),z!==null?f=_r(z,f):(f=Xr(f,y,i,null),f.flags|=2),f.return=t,a.return=t,a.sibling=f,t.child=a,a=f,f=t.child,y=e.child.memoizedState,y=y===null?Ra(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},f.memoizedState=y,f.childLanes=e.childLanes&~i,t.memoizedState=Pa,a}return f=e.child,e=f.sibling,a=_r(f,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function Ea(e,t){return t=I0({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function S0(e,t,i,a){return a!==null&&la(a),xi(t,e.child,null,i),e=Ea(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sp(e,t,i,a,c,f,y){if(i)return t.flags&256?(t.flags&=-257,a=Ma(Error(r(422))),S0(e,t,y,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(f=a.fallback,c=t.mode,a=I0({mode:"visible",children:a.children},c,0,null),f=Xr(f,c,y,null),f.flags|=2,a.return=t,f.return=t,a.sibling=f,t.child=a,(t.mode&1)!==0&&xi(t,e.child,null,y),t.child.memoizedState=Ra(y),t.memoizedState=Pa,f);if((t.mode&1)===0)return S0(e,t,y,null);if(c.data==="$!"){if(a=c.nextSibling&&c.nextSibling.dataset,a)var z=a.dgst;return a=z,f=Error(r(419)),a=Ma(f,a,void 0),S0(e,t,y,a)}if(z=(y&e.childLanes)!==0,It||z){if(a=_t,a!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(a.suspendedLanes|y))!==0?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,In(e,c),vn(a,e,c,-1))}return Xa(),a=Ma(Error(r(421))),S0(e,t,y,a)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=xp.bind(null,e),c._reactRetry=t,null):(e=f.treeContext,Vt=cr(c.nextSibling),Ut=t,tt=!0,fn=null,e!==null&&(en[tn++]=Nn,en[tn++]=Bn,en[tn++]=Or,Nn=e.id,Bn=e.overflow,Or=t),t=Ea(t,a.children),t.flags|=4096,t)}function n1(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ma(e.return,t,i)}function Da(e,t,i,a,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=i,f.tailMode=c)}function r1(e,t,i){var a=t.pendingProps,c=a.revealOrder,f=a.tail;if(At(e,t,a.children,i),a=rt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n1(e,i,t);else if(e.tag===19)n1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Xe(rt,a),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&x0(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),Da(t,!1,c,i,f);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&x0(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Da(t,!0,i,null,f);break;case"together":Da(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function T0(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Vr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=_r(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=_r(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function ap(e,t,i){switch(t.tag){case 3:Jc(t),yi();break;case 5:vc(t);break;case 1:Bt(t.type)&&u0(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,c=t.memoizedProps.value;Xe(h0,a._currentValue),a._currentValue=c;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Xe(rt,rt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?t1(e,t,i):(Xe(rt,rt.current&1),e=Ln(e,t,i),e!==null?e.sibling:null);Xe(rt,rt.current&1);break;case 19:if(a=(i&t.childLanes)!==0,(e.flags&128)!==0){if(a)return r1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xe(rt,rt.current),a)break;return null;case 22:case 23:return t.lanes=0,Qc(e,t,i)}return Ln(e,t,i)}var i1,Na,o1,s1;i1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Na=function(){},o1=function(e,t,i,a){var c=e.memoizedProps;if(c!==a){e=t.stateNode,Wr(_n.current);var f=null;switch(i){case"input":c=Qn(e,c),a=Qn(e,a),f=[];break;case"select":c=ue({},c,{value:void 0}),a=ue({},a,{value:void 0}),f=[];break;case"textarea":c=ni(e,c),a=ni(e,a),f=[];break;default:typeof c.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=s0)}Rr(i,a);var y;i=null;for(F in c)if(!a.hasOwnProperty(F)&&c.hasOwnProperty(F)&&c[F]!=null)if(F==="style"){var z=c[F];for(y in z)z.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(l.hasOwnProperty(F)?f||(f=[]):(f=f||[]).push(F,null));for(F in a){var M=a[F];if(z=c!=null?c[F]:void 0,a.hasOwnProperty(F)&&M!==z&&(M!=null||z!=null))if(F==="style")if(z){for(y in z)!z.hasOwnProperty(y)||M&&M.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in M)M.hasOwnProperty(y)&&z[y]!==M[y]&&(i||(i={}),i[y]=M[y])}else i||(f||(f=[]),f.push(F,i)),i=M;else F==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,z=z?z.__html:void 0,M!=null&&z!==M&&(f=f||[]).push(F,M)):F==="children"?typeof M!="string"&&typeof M!="number"||(f=f||[]).push(F,""+M):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(l.hasOwnProperty(F)?(M!=null&&F==="onScroll"&&Je("scroll",e),f||z===M||(f=[])):(f=f||[]).push(F,M))}i&&(f=f||[]).push("style",i);var F=f;(t.updateQueue=F)&&(t.flags|=4)}},s1=function(e,t,i,a){i!==a&&(t.flags|=4)};function vo(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function qt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags&14680064,a|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function lp(e,t,i){var a=t.pendingProps;switch(oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(t),null;case 1:return Bt(t.type)&&l0(),qt(t),null;case 3:return a=t.stateNode,wi(),et(Nt),et(St),ya(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(f0(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,fn!==null&&(Ka(fn),fn=null))),Na(e,t),qt(t),null;case 5:ga(t);var c=Wr(mo.current);if(i=t.type,e!==null&&t.stateNode!=null)o1(e,t,i,a,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(r(166));return qt(t),null}if(e=Wr(_n.current),f0(t)){a=t.stateNode,i=t.type;var f=t.memoizedProps;switch(a[bn]=t,a[so]=f,e=(t.mode&1)!==0,i){case"dialog":Je("cancel",a),Je("close",a);break;case"iframe":case"object":case"embed":Je("load",a);break;case"video":case"audio":for(c=0;c<ro.length;c++)Je(ro[c],a);break;case"source":Je("error",a);break;case"img":case"image":case"link":Je("error",a),Je("load",a);break;case"details":Je("toggle",a);break;case"input":Ar(a,f),Je("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!f.multiple},Je("invalid",a);break;case"textarea":xt(a,f),Je("invalid",a)}Rr(i,f),c=null;for(var y in f)if(f.hasOwnProperty(y)){var z=f[y];y==="children"?typeof z=="string"?a.textContent!==z&&(f.suppressHydrationWarning!==!0&&o0(a.textContent,z,e),c=["children",z]):typeof z=="number"&&a.textContent!==""+z&&(f.suppressHydrationWarning!==!0&&o0(a.textContent,z,e),c=["children",""+z]):l.hasOwnProperty(y)&&z!=null&&y==="onScroll"&&Je("scroll",a)}switch(i){case"input":Xt(a),Xn(a,f,!0);break;case"textarea":Xt(a),Ei(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=s0)}a=c,t.updateQueue=a,a!==null&&(t.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ro(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=y.createElement(i,{is:a.is}):(e=y.createElement(i),i==="select"&&(y=e,a.multiple?y.multiple=!0:a.size&&(y.size=a.size))):e=y.createElementNS(e,i),e[bn]=t,e[so]=a,i1(e,t,!1,!1),t.stateNode=e;e:{switch(y=Zn(i,a),i){case"dialog":Je("cancel",e),Je("close",e),c=a;break;case"iframe":case"object":case"embed":Je("load",e),c=a;break;case"video":case"audio":for(c=0;c<ro.length;c++)Je(ro[c],e);c=a;break;case"source":Je("error",e),c=a;break;case"img":case"image":case"link":Je("error",e),Je("load",e),c=a;break;case"details":Je("toggle",e),c=a;break;case"input":Ar(e,a),c=Qn(e,a),Je("invalid",e);break;case"option":c=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},c=ue({},a,{value:void 0}),Je("invalid",e);break;case"textarea":xt(e,a),c=ni(e,a),Je("invalid",e);break;default:c=a}Rr(i,c),z=c;for(f in z)if(z.hasOwnProperty(f)){var M=z[f];f==="style"?No(e,M):f==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Eo(e,M)):f==="children"?typeof M=="string"?(i!=="textarea"||M!=="")&&Zt(e,M):typeof M=="number"&&Zt(e,""+M):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?M!=null&&f==="onScroll"&&Je("scroll",e):M!=null&&G(e,f,M,y))}switch(i){case"input":Xt(e),Xn(e,a,!1);break;case"textarea":Xt(e),Ei(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ee(a.value));break;case"select":e.multiple=!!a.multiple,f=a.value,f!=null?Ve(e,!!a.multiple,f,!1):a.defaultValue!=null&&Ve(e,!!a.multiple,a.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=s0)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qt(t),null;case 6:if(e&&t.stateNode!=null)s1(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(r(166));if(i=Wr(mo.current),Wr(_n.current),f0(t)){if(a=t.stateNode,i=t.memoizedProps,a[bn]=t,(f=a.nodeValue!==i)&&(e=Ut,e!==null))switch(e.tag){case 3:o0(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&o0(a.nodeValue,i,(e.mode&1)!==0)}f&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[bn]=t,t.stateNode=a}return qt(t),null;case 13:if(et(rt),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)uc(),yi(),t.flags|=98560,f=!1;else if(f=f0(t),a!==null&&a.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[bn]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qt(t),f=!1}else fn!==null&&(Ka(fn),fn=null),f=!0;if(!f)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(rt.current&1)!==0?vt===0&&(vt=3):Xa())),t.updateQueue!==null&&(t.flags|=4),qt(t),null);case 4:return wi(),Na(e,t),e===null&&io(t.stateNode.containerInfo),qt(t),null;case 10:return da(t.type._context),qt(t),null;case 17:return Bt(t.type)&&l0(),qt(t),null;case 19:if(et(rt),f=t.memoizedState,f===null)return qt(t),null;if(a=(t.flags&128)!==0,y=f.rendering,y===null)if(a)vo(f,!1);else{if(vt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(y=x0(e),y!==null){for(t.flags|=128,vo(f,!1),a=y.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)f=i,e=a,f.flags&=14680066,y=f.alternate,y===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=y.childLanes,f.lanes=y.lanes,f.child=y.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=y.memoizedProps,f.memoizedState=y.memoizedState,f.updateQueue=y.updateQueue,f.type=y.type,e=y.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Xe(rt,rt.current&1|2),t.child}e=e.sibling}f.tail!==null&&ut()>Si&&(t.flags|=128,a=!0,vo(f,!1),t.lanes=4194304)}else{if(!a)if(e=x0(y),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),vo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!y.alternate&&!tt)return qt(t),null}else 2*ut()-f.renderingStartTime>Si&&i!==1073741824&&(t.flags|=128,a=!0,vo(f,!1),t.lanes=4194304);f.isBackwards?(y.sibling=t.child,t.child=y):(i=f.last,i!==null?i.sibling=y:t.child=y,f.last=y)}return f.tail!==null?(t=f.tail,f.rendering=t,f.tail=t.sibling,f.renderingStartTime=ut(),t.sibling=null,i=rt.current,Xe(rt,a?i&1|2:i&1),t):(qt(t),null);case 22:case 23:return Qa(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Kt&1073741824)!==0&&(qt(t),t.subtreeFlags&6&&(t.flags|=8192)):qt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function up(e,t){switch(oa(t),t.tag){case 1:return Bt(t.type)&&l0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wi(),et(Nt),et(St),ya(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(et(rt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(rt),null;case 4:return wi(),null;case 10:return da(t.type._context),null;case 22:case 23:return Qa(),null;case 24:return null;default:return null}}var q0=!1,Mt=!1,cp=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ki(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){at(e,t,a)}else i.current=null}function Ba(e,t,i){try{i()}catch(a){at(e,t,a)}}var a1=!1;function dp(e,t){if(Qs=Ko,e=Iu(),Os(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var c=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var y=0,z=-1,M=-1,F=0,Q=0,ee=e,K=null;t:for(;;){for(var de;ee!==i||c!==0&&ee.nodeType!==3||(z=y+c),ee!==f||a!==0&&ee.nodeType!==3||(M=y+a),ee.nodeType===3&&(y+=ee.nodeValue.length),(de=ee.firstChild)!==null;)K=ee,ee=de;for(;;){if(ee===e)break t;if(K===i&&++F===c&&(z=y),K===f&&++Q===a&&(M=y),(de=ee.nextSibling)!==null)break;ee=K,K=ee.parentNode}ee=de}i=z===-1||M===-1?null:{start:z,end:M}}else i=null}i=i||{start:0,end:0}}else i=null;for(Xs={focusedElem:e,selectionRange:i},Ko=!1,pe=t;pe!==null;)if(t=pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pe=e;else for(;pe!==null;){t=pe;try{var ge=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ve=ge.memoizedProps,ct=ge.memoizedState,N=t.stateNode,C=N.getSnapshotBeforeUpdate(t.elementType===t.type?ve:pn(t.type,ve),ct);N.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(oe){at(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,pe=e;break}pe=t.return}return ge=a1,a1=!1,ge}function yo(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&Ba(t,i,f)}c=c.next}while(c!==a)}}function M0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function Ia(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function l1(e){var t=e.alternate;t!==null&&(e.alternate=null,l1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bn],delete t[so],delete t[ta],delete t[Vf],delete t[Kf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function u1(e){return e.tag===5||e.tag===3||e.tag===4}function c1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||u1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fa(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=s0));else if(a!==4&&(e=e.child,e!==null))for(Fa(e,t,i),e=e.sibling;e!==null;)Fa(e,t,i),e=e.sibling}function La(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(La(e,t,i),e=e.sibling;e!==null;)La(e,t,i),e=e.sibling}var $t=null,hn=!1;function gr(e,t,i){for(i=i.child;i!==null;)d1(e,t,i),i=i.sibling}function d1(e,t,i){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Oo,i)}catch{}switch(i.tag){case 5:Mt||ki(i,t);case 6:var a=$t,c=hn;$t=null,gr(e,t,i),$t=a,hn=c,$t!==null&&(hn?(e=$t,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):$t.removeChild(i.stateNode));break;case 18:$t!==null&&(hn?(e=$t,i=i.stateNode,e.nodeType===8?ea(e.parentNode,i):e.nodeType===1&&ea(e,i),Yi(e)):ea($t,i.stateNode));break;case 4:a=$t,c=hn,$t=i.stateNode.containerInfo,hn=!0,gr(e,t,i),$t=a,hn=c;break;case 0:case 11:case 14:case 15:if(!Mt&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){c=a=a.next;do{var f=c,y=f.destroy;f=f.tag,y!==void 0&&((f&2)!==0||(f&4)!==0)&&Ba(i,t,y),c=c.next}while(c!==a)}gr(e,t,i);break;case 1:if(!Mt&&(ki(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(z){at(i,t,z)}gr(e,t,i);break;case 21:gr(e,t,i);break;case 22:i.mode&1?(Mt=(a=Mt)||i.memoizedState!==null,gr(e,t,i),Mt=a):gr(e,t,i);break;default:gr(e,t,i)}}function m1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new cp),t.forEach(function(a){var c=bp.bind(null,e,a);i.has(a)||(i.add(a),a.then(c,c))})}}function gn(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var c=i[a];try{var f=e,y=t,z=y;e:for(;z!==null;){switch(z.tag){case 5:$t=z.stateNode,hn=!1;break e;case 3:$t=z.stateNode.containerInfo,hn=!0;break e;case 4:$t=z.stateNode.containerInfo,hn=!0;break e}z=z.return}if($t===null)throw Error(r(160));d1(f,y,c),$t=null,hn=!1;var M=c.alternate;M!==null&&(M.return=null),c.return=null}catch(F){at(c,t,F)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)f1(t,e),t=t.sibling}function f1(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(t,e),$n(e),a&4){try{yo(3,e,e.return),M0(3,e)}catch(ve){at(e,e.return,ve)}try{yo(5,e,e.return)}catch(ve){at(e,e.return,ve)}}break;case 1:gn(t,e),$n(e),a&512&&i!==null&&ki(i,i.return);break;case 5:if(gn(t,e),$n(e),a&512&&i!==null&&ki(i,i.return),e.flags&32){var c=e.stateNode;try{Zt(c,"")}catch(ve){at(e,e.return,ve)}}if(a&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,y=i!==null?i.memoizedProps:f,z=e.type,M=e.updateQueue;if(e.updateQueue=null,M!==null)try{z==="input"&&f.type==="radio"&&f.name!=null&&Cn(c,f),Zn(z,y);var F=Zn(z,f);for(y=0;y<M.length;y+=2){var Q=M[y],ee=M[y+1];Q==="style"?No(c,ee):Q==="dangerouslySetInnerHTML"?Eo(c,ee):Q==="children"?Zt(c,ee):G(c,Q,ee,F)}switch(z){case"input":Pn(c,f);break;case"textarea":Rn(c,f);break;case"select":var K=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var de=f.value;de!=null?Ve(c,!!f.multiple,de,!1):K!==!!f.multiple&&(f.defaultValue!=null?Ve(c,!!f.multiple,f.defaultValue,!0):Ve(c,!!f.multiple,f.multiple?[]:"",!1))}c[so]=f}catch(ve){at(e,e.return,ve)}}break;case 6:if(gn(t,e),$n(e),a&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(ve){at(e,e.return,ve)}}break;case 3:if(gn(t,e),$n(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Yi(t.containerInfo)}catch(ve){at(e,e.return,ve)}break;case 4:gn(t,e),$n(e);break;case 13:gn(t,e),$n(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(Ga=ut())),a&4&&m1(e);break;case 22:if(Q=i!==null&&i.memoizedState!==null,e.mode&1?(Mt=(F=Mt)||Q,gn(t,e),Mt=F):gn(t,e),$n(e),a&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!Q&&(e.mode&1)!==0)for(pe=e,Q=e.child;Q!==null;){for(ee=pe=Q;pe!==null;){switch(K=pe,de=K.child,K.tag){case 0:case 11:case 14:case 15:yo(4,K,K.return);break;case 1:ki(K,K.return);var ge=K.stateNode;if(typeof ge.componentWillUnmount=="function"){a=K,i=K.return;try{t=a,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ve){at(a,i,ve)}}break;case 5:ki(K,K.return);break;case 22:if(K.memoizedState!==null){g1(ee);continue}}de!==null?(de.return=K,pe=de):g1(ee)}Q=Q.sibling}e:for(Q=null,ee=e;;){if(ee.tag===5){if(Q===null){Q=ee;try{c=ee.stateNode,F?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(z=ee.stateNode,M=ee.memoizedProps.style,y=M!=null&&M.hasOwnProperty("display")?M.display:null,z.style.display=Ni("display",y))}catch(ve){at(e,e.return,ve)}}}else if(ee.tag===6){if(Q===null)try{ee.stateNode.nodeValue=F?"":ee.memoizedProps}catch(ve){at(e,e.return,ve)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===e)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===e)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===e)break e;Q===ee&&(Q=null),ee=ee.return}Q===ee&&(Q=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:gn(t,e),$n(e),a&4&&m1(e);break;case 21:break;default:gn(t,e),$n(e)}}function $n(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(u1(i)){var a=i;break e}i=i.return}throw Error(r(160))}switch(a.tag){case 5:var c=a.stateNode;a.flags&32&&(Zt(c,""),a.flags&=-33);var f=c1(e);La(e,f,c);break;case 3:case 4:var y=a.stateNode.containerInfo,z=c1(e);Fa(e,z,y);break;default:throw Error(r(161))}}catch(M){at(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mp(e,t,i){pe=e,p1(e)}function p1(e,t,i){for(var a=(e.mode&1)!==0;pe!==null;){var c=pe,f=c.child;if(c.tag===22&&a){var y=c.memoizedState!==null||q0;if(!y){var z=c.alternate,M=z!==null&&z.memoizedState!==null||Mt;z=q0;var F=Mt;if(q0=y,(Mt=M)&&!F)for(pe=c;pe!==null;)y=pe,M=y.child,y.tag===22&&y.memoizedState!==null?v1(c):M!==null?(M.return=y,pe=M):v1(c);for(;f!==null;)pe=f,p1(f),f=f.sibling;pe=c,q0=z,Mt=F}h1(e)}else(c.subtreeFlags&8772)!==0&&f!==null?(f.return=c,pe=f):h1(e)}}function h1(e){for(;pe!==null;){var t=pe;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Mt||M0(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Mt)if(i===null)a.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:pn(t.type,i.memoizedProps);a.componentDidUpdate(c,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var f=t.updateQueue;f!==null&&gc(t,f,a);break;case 3:var y=t.updateQueue;if(y!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}gc(t,y,i)}break;case 5:var z=t.stateNode;if(i===null&&t.flags&4){i=z;var M=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&i.focus();break;case"img":M.src&&(i.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var F=t.alternate;if(F!==null){var Q=F.memoizedState;if(Q!==null){var ee=Q.dehydrated;ee!==null&&Yi(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Mt||t.flags&512&&Ia(t)}catch(K){at(t,t.return,K)}}if(t===e){pe=null;break}if(i=t.sibling,i!==null){i.return=t.return,pe=i;break}pe=t.return}}function g1(e){for(;pe!==null;){var t=pe;if(t===e){pe=null;break}var i=t.sibling;if(i!==null){i.return=t.return,pe=i;break}pe=t.return}}function v1(e){for(;pe!==null;){var t=pe;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{M0(4,t)}catch(M){at(t,i,M)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var c=t.return;try{a.componentDidMount()}catch(M){at(t,c,M)}}var f=t.return;try{Ia(t)}catch(M){at(t,f,M)}break;case 5:var y=t.return;try{Ia(t)}catch(M){at(t,y,M)}}}catch(M){at(t,t.return,M)}if(t===e){pe=null;break}var z=t.sibling;if(z!==null){z.return=t.return,pe=z;break}pe=t.return}}var fp=Math.ceil,j0=B.ReactCurrentDispatcher,Oa=B.ReactCurrentOwner,on=B.ReactCurrentBatchConfig,Oe=0,_t=null,ft=null,kt=0,Kt=0,zi=dr(0),vt=0,xo=null,Vr=0,A0=0,Ha=0,bo=null,Ft=null,Ga=0,Si=1/0,On=null,C0=!1,Wa=null,vr=null,P0=!1,yr=null,R0=0,_o=0,Ua=null,E0=-1,D0=0;function Ct(){return(Oe&6)!==0?ut():E0!==-1?E0:E0=ut()}function xr(e){return(e.mode&1)===0?1:(Oe&2)!==0&&kt!==0?kt&-kt:Qf.transition!==null?(D0===0&&(D0=cu()),D0):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:xu(e.type)),e)}function vn(e,t,i,a){if(50<_o)throw _o=0,Ua=null,Error(r(185));Gi(e,i,a),((Oe&2)===0||e!==_t)&&(e===_t&&((Oe&2)===0&&(A0|=i),vt===4&&br(e,kt)),Lt(e,a),i===1&&Oe===0&&(t.mode&1)===0&&(Si=ut()+500,c0&&fr()))}function Lt(e,t){var i=e.callbackNode;Ym(e,t);var a=Wo(e,e===_t?kt:0);if(a===0)i!==null&&au(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&au(i),t===1)e.tag===0?Yf(x1.bind(null,e)):ic(x1.bind(null,e)),Wf(function(){(Oe&6)===0&&fr()}),i=null;else{switch(du(a)){case 1:i=zs;break;case 4:i=lu;break;case 16:i=Lo;break;case 536870912:i=uu;break;default:i=Lo}i=T1(i,y1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function y1(e,t){if(E0=-1,D0=0,(Oe&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Ti()&&e.callbackNode!==i)return null;var a=Wo(e,e===_t?kt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=N0(e,a);else{t=a;var c=Oe;Oe|=2;var f=_1();(_t!==e||kt!==t)&&(On=null,Si=ut()+500,Yr(e,t));do try{gp();break}catch(z){b1(e,z)}while(!0);ca(),j0.current=f,Oe=c,ft!==null?t=0:(_t=null,kt=0,t=vt)}if(t!==0){if(t===2&&(c=Ss(e),c!==0&&(a=c,t=Va(e,c))),t===1)throw i=xo,Yr(e,0),br(e,a),Lt(e,ut()),i;if(t===6)br(e,a);else{if(c=e.current.alternate,(a&30)===0&&!pp(c)&&(t=N0(e,a),t===2&&(f=Ss(e),f!==0&&(a=f,t=Va(e,f))),t===1))throw i=xo,Yr(e,0),br(e,a),Lt(e,ut()),i;switch(e.finishedWork=c,e.finishedLanes=a,t){case 0:case 1:throw Error(r(345));case 2:Qr(e,Ft,On);break;case 3:if(br(e,a),(a&130023424)===a&&(t=Ga+500-ut(),10<t)){if(Wo(e,0)!==0)break;if(c=e.suspendedLanes,(c&a)!==a){Ct(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Js(Qr.bind(null,e,Ft,On),t);break}Qr(e,Ft,On);break;case 4:if(br(e,a),(a&4194240)===a)break;for(t=e.eventTimes,c=-1;0<a;){var y=31-dn(a);f=1<<y,y=t[y],y>c&&(c=y),a&=~f}if(a=c,a=ut()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*fp(a/1960))-a,10<a){e.timeoutHandle=Js(Qr.bind(null,e,Ft,On),a);break}Qr(e,Ft,On);break;case 5:Qr(e,Ft,On);break;default:throw Error(r(329))}}}return Lt(e,ut()),e.callbackNode===i?y1.bind(null,e):null}function Va(e,t){var i=bo;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=N0(e,t),e!==2&&(t=Ft,Ft=i,t!==null&&Ka(t)),e}function Ka(e){Ft===null?Ft=e:Ft.push.apply(Ft,e)}function pp(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var c=i[a],f=c.getSnapshot;c=c.value;try{if(!mn(f(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function br(e,t){for(t&=~Ha,t&=~A0,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-dn(t),a=1<<i;e[i]=-1,t&=~a}}function x1(e){if((Oe&6)!==0)throw Error(r(327));Ti();var t=Wo(e,0);if((t&1)===0)return Lt(e,ut()),null;var i=N0(e,t);if(e.tag!==0&&i===2){var a=Ss(e);a!==0&&(t=a,i=Va(e,a))}if(i===1)throw i=xo,Yr(e,0),br(e,t),Lt(e,ut()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qr(e,Ft,On),Lt(e,ut()),null}function Ya(e,t){var i=Oe;Oe|=1;try{return e(t)}finally{Oe=i,Oe===0&&(Si=ut()+500,c0&&fr())}}function Kr(e){yr!==null&&yr.tag===0&&(Oe&6)===0&&Ti();var t=Oe;Oe|=1;var i=on.transition,a=Ke;try{if(on.transition=null,Ke=1,e)return e()}finally{Ke=a,on.transition=i,Oe=t,(Oe&6)===0&&fr()}}function Qa(){Kt=zi.current,et(zi)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Gf(i)),ft!==null)for(i=ft.return;i!==null;){var a=i;switch(oa(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&l0();break;case 3:wi(),et(Nt),et(St),ya();break;case 5:ga(a);break;case 4:wi();break;case 13:et(rt);break;case 19:et(rt);break;case 10:da(a.type._context);break;case 22:case 23:Qa()}i=i.return}if(_t=e,ft=e=_r(e.current,null),kt=Kt=t,vt=0,xo=null,Ha=A0=Vr=0,Ft=bo=null,Gr!==null){for(t=0;t<Gr.length;t++)if(i=Gr[t],a=i.interleaved,a!==null){i.interleaved=null;var c=a.next,f=i.pending;if(f!==null){var y=f.next;f.next=c,a.next=y}i.pending=a}Gr=null}return e}function b1(e,t){do{var i=ft;try{if(ca(),b0.current=k0,_0){for(var a=it.memoizedState;a!==null;){var c=a.queue;c!==null&&(c.pending=null),a=a.next}_0=!1}if(Ur=0,bt=gt=it=null,fo=!1,po=0,Oa.current=null,i===null||i.return===null){vt=1,xo=t,ft=null;break}e:{var f=e,y=i.return,z=i,M=t;if(t=kt,z.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var F=M,Q=z,ee=Q.tag;if((Q.mode&1)===0&&(ee===0||ee===11||ee===15)){var K=Q.alternate;K?(Q.updateQueue=K.updateQueue,Q.memoizedState=K.memoizedState,Q.lanes=K.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var de=Wc(y);if(de!==null){de.flags&=-257,Uc(de,y,z,f,t),de.mode&1&&Gc(f,F,t),t=de,M=F;var ge=t.updateQueue;if(ge===null){var ve=new Set;ve.add(M),t.updateQueue=ve}else ge.add(M);break e}else{if((t&1)===0){Gc(f,F,t),Xa();break e}M=Error(r(426))}}else if(tt&&z.mode&1){var ct=Wc(y);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Uc(ct,y,z,f,t),la($i(M,z));break e}}f=M=$i(M,z),vt!==4&&(vt=2),bo===null?bo=[f]:bo.push(f),f=y;do{switch(f.tag){case 3:f.flags|=65536,t&=-t,f.lanes|=t;var N=Oc(f,M,t);hc(f,N);break e;case 1:z=M;var C=f.type,I=f.stateNode;if((f.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(vr===null||!vr.has(I)))){f.flags|=65536,t&=-t,f.lanes|=t;var oe=Hc(f,z,t);hc(f,oe);break e}}f=f.return}while(f!==null)}$1(i)}catch(ye){t=ye,ft===i&&i!==null&&(ft=i=i.return);continue}break}while(!0)}function _1(){var e=j0.current;return j0.current=k0,e===null?k0:e}function Xa(){(vt===0||vt===3||vt===2)&&(vt=4),_t===null||(Vr&268435455)===0&&(A0&268435455)===0||br(_t,kt)}function N0(e,t){var i=Oe;Oe|=2;var a=_1();(_t!==e||kt!==t)&&(On=null,Yr(e,t));do try{hp();break}catch(c){b1(e,c)}while(!0);if(ca(),Oe=i,j0.current=a,ft!==null)throw Error(r(261));return _t=null,kt=0,vt}function hp(){for(;ft!==null;)w1(ft)}function gp(){for(;ft!==null&&!Fm();)w1(ft)}function w1(e){var t=S1(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?$1(e):ft=t,Oa.current=null}function $1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=lp(i,t,Kt),i!==null){ft=i;return}}else{if(i=up(i,t),i!==null){i.flags&=32767,ft=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{vt=6,ft=null;return}}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);vt===0&&(vt=5)}function Qr(e,t,i){var a=Ke,c=on.transition;try{on.transition=null,Ke=1,vp(e,t,i,a)}finally{on.transition=c,Ke=a}return null}function vp(e,t,i,a){do Ti();while(yr!==null);if((Oe&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(Qm(e,f),e===_t&&(ft=_t=null,kt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||P0||(P0=!0,T1(Lo,function(){return Ti(),null})),f=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||f){f=on.transition,on.transition=null;var y=Ke;Ke=1;var z=Oe;Oe|=4,Oa.current=null,dp(e,i),f1(i,e),Nf(Xs),Ko=!!Qs,Xs=Qs=null,e.current=i,mp(i),Lm(),Oe=z,Ke=y,on.transition=f}else e.current=i;if(P0&&(P0=!1,yr=e,R0=c),f=e.pendingLanes,f===0&&(vr=null),Gm(i.stateNode),Lt(e,ut()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],a(c.value,{componentStack:c.stack,digest:c.digest});if(C0)throw C0=!1,e=Wa,Wa=null,e;return(R0&1)!==0&&e.tag!==0&&Ti(),f=e.pendingLanes,(f&1)!==0?e===Ua?_o++:(_o=0,Ua=e):_o=0,fr(),null}function Ti(){if(yr!==null){var e=du(R0),t=on.transition,i=Ke;try{if(on.transition=null,Ke=16>e?16:e,yr===null)var a=!1;else{if(e=yr,yr=null,R0=0,(Oe&6)!==0)throw Error(r(331));var c=Oe;for(Oe|=4,pe=e.current;pe!==null;){var f=pe,y=f.child;if((pe.flags&16)!==0){var z=f.deletions;if(z!==null){for(var M=0;M<z.length;M++){var F=z[M];for(pe=F;pe!==null;){var Q=pe;switch(Q.tag){case 0:case 11:case 15:yo(8,Q,f)}var ee=Q.child;if(ee!==null)ee.return=Q,pe=ee;else for(;pe!==null;){Q=pe;var K=Q.sibling,de=Q.return;if(l1(Q),Q===F){pe=null;break}if(K!==null){K.return=de,pe=K;break}pe=de}}}var ge=f.alternate;if(ge!==null){var ve=ge.child;if(ve!==null){ge.child=null;do{var ct=ve.sibling;ve.sibling=null,ve=ct}while(ve!==null)}}pe=f}}if((f.subtreeFlags&2064)!==0&&y!==null)y.return=f,pe=y;else e:for(;pe!==null;){if(f=pe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:yo(9,f,f.return)}var N=f.sibling;if(N!==null){N.return=f.return,pe=N;break e}pe=f.return}}var C=e.current;for(pe=C;pe!==null;){y=pe;var I=y.child;if((y.subtreeFlags&2064)!==0&&I!==null)I.return=y,pe=I;else e:for(y=C;pe!==null;){if(z=pe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:M0(9,z)}}catch(ye){at(z,z.return,ye)}if(z===y){pe=null;break e}var oe=z.sibling;if(oe!==null){oe.return=z.return,pe=oe;break e}pe=z.return}}if(Oe=c,fr(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Oo,e)}catch{}a=!0}return a}finally{Ke=i,on.transition=t}}return!1}function k1(e,t,i){t=$i(i,t),t=Oc(e,t,1),e=hr(e,t,1),t=Ct(),e!==null&&(Gi(e,1,t),Lt(e,t))}function at(e,t,i){if(e.tag===3)k1(e,e,i);else for(;t!==null;){if(t.tag===3){k1(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vr===null||!vr.has(a))){e=$i(i,e),e=Hc(t,e,1),t=hr(t,e,1),e=Ct(),t!==null&&(Gi(t,1,e),Lt(t,e));break}}t=t.return}}function yp(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&i,_t===e&&(kt&i)===i&&(vt===4||vt===3&&(kt&130023424)===kt&&500>ut()-Ga?Yr(e,0):Ha|=i),Lt(e,t)}function z1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Go,Go<<=1,(Go&130023424)===0&&(Go=4194304)));var i=Ct();e=In(e,t),e!==null&&(Gi(e,t,i),Lt(e,i))}function xp(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),z1(e,i)}function bp(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(r(314))}a!==null&&a.delete(t),z1(e,i)}var S1;S1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Nt.current)It=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return It=!1,ap(e,t,i);It=(e.flags&131072)!==0}else It=!1,tt&&(t.flags&1048576)!==0&&oc(t,m0,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;T0(e,t),e=t.pendingProps;var c=hi(t,St.current);_i(t,i),c=_a(null,t,a,e,c,i);var f=wa();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Bt(a)?(f=!0,u0(t)):f=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,pa(t),c.updater=z0,t.stateNode=c,c._reactInternals=t,qa(t,a,e,i),t=Ca(null,t,a,!0,f,i)):(t.tag=0,tt&&f&&ia(t),At(null,t,c,i),t=t.child),t;case 16:a=t.elementType;e:{switch(T0(e,t),e=t.pendingProps,c=a._init,a=c(a._payload),t.type=a,c=t.tag=wp(a),e=pn(a,e),c){case 0:t=Aa(null,t,a,e,i);break e;case 1:t=Zc(null,t,a,e,i);break e;case 11:t=Vc(null,t,a,e,i);break e;case 14:t=Kc(null,t,a,pn(a.type,e),i);break e}throw Error(r(306,a,""))}return t;case 0:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:pn(a,c),Aa(e,t,a,c,i);case 1:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:pn(a,c),Zc(e,t,a,c,i);case 3:e:{if(Jc(t),e===null)throw Error(r(387));a=t.pendingProps,f=t.memoizedState,c=f.element,pc(e,t),y0(t,a,null,i);var y=t.memoizedState;if(a=y.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){c=$i(Error(r(423)),t),t=e1(e,t,a,i,c);break e}else if(a!==c){c=$i(Error(r(424)),t),t=e1(e,t,a,i,c);break e}else for(Vt=cr(t.stateNode.containerInfo.firstChild),Ut=t,tt=!0,fn=null,i=mc(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(yi(),a===c){t=Ln(e,t,i);break e}At(e,t,a,i)}t=t.child}return t;case 5:return vc(t),e===null&&aa(t),a=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,y=c.children,Zs(a,c)?y=null:f!==null&&Zs(a,f)&&(t.flags|=32),Xc(e,t),At(e,t,y,i),t.child;case 6:return e===null&&aa(t),null;case 13:return t1(e,t,i);case 4:return ha(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=xi(t,null,a,i):At(e,t,a,i),t.child;case 11:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:pn(a,c),Vc(e,t,a,c,i);case 7:return At(e,t,t.pendingProps,i),t.child;case 8:return At(e,t,t.pendingProps.children,i),t.child;case 12:return At(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,c=t.pendingProps,f=t.memoizedProps,y=c.value,Xe(h0,a._currentValue),a._currentValue=y,f!==null)if(mn(f.value,y)){if(f.children===c.children&&!Nt.current){t=Ln(e,t,i);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var z=f.dependencies;if(z!==null){y=f.child;for(var M=z.firstContext;M!==null;){if(M.context===a){if(f.tag===1){M=Fn(-1,i&-i),M.tag=2;var F=f.updateQueue;if(F!==null){F=F.shared;var Q=F.pending;Q===null?M.next=M:(M.next=Q.next,Q.next=M),F.pending=M}}f.lanes|=i,M=f.alternate,M!==null&&(M.lanes|=i),ma(f.return,i,t),z.lanes|=i;break}M=M.next}}else if(f.tag===10)y=f.type===t.type?null:f.child;else if(f.tag===18){if(y=f.return,y===null)throw Error(r(341));y.lanes|=i,z=y.alternate,z!==null&&(z.lanes|=i),ma(y,i,t),y=f.sibling}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===t){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}At(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,a=t.pendingProps.children,_i(t,i),c=nn(c),a=a(c),t.flags|=1,At(e,t,a,i),t.child;case 14:return a=t.type,c=pn(a,t.pendingProps),c=pn(a.type,c),Kc(e,t,a,c,i);case 15:return Yc(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,c=t.pendingProps,c=t.elementType===a?c:pn(a,c),T0(e,t),t.tag=1,Bt(a)?(e=!0,u0(t)):e=!1,_i(t,i),Fc(t,a,c),qa(t,a,c,i),Ca(null,t,a,!0,e,i);case 19:return r1(e,t,i);case 22:return Qc(e,t,i)}throw Error(r(156,t.tag))};function T1(e,t){return oi(e,t)}function _p(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,i,a){return new _p(e,t,i,a)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wp(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===Ge)return 14}return 2}function _r(e,t){var i=e.alternate;return i===null?(i=sn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function B0(e,t,i,a,c,f){var y=2;if(a=e,typeof e=="function")Za(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case L:return Xr(i.children,c,f,t);case V:y=8,c|=8;break;case ne:return e=sn(12,i,t,c|2),e.elementType=ne,e.lanes=f,e;case be:return e=sn(13,i,t,c),e.elementType=be,e.lanes=f,e;case qe:return e=sn(19,i,t,c),e.elementType=qe,e.lanes=f,e;case Fe:return I0(i,c,f,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:y=10;break e;case Te:y=9;break e;case me:y=11;break e;case Ge:y=14;break e;case Ye:y=16,a=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=sn(y,i,t,c),t.elementType=e,t.type=a,t.lanes=f,t}function Xr(e,t,i,a){return e=sn(7,e,a,t),e.lanes=i,e}function I0(e,t,i,a){return e=sn(22,e,a,t),e.elementType=Fe,e.lanes=i,e.stateNode={isHidden:!1},e}function Ja(e,t,i){return e=sn(6,e,null,t),e.lanes=i,e}function el(e,t,i){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $p(e,t,i,a,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ts(0),this.expirationTimes=Ts(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ts(0),this.identifierPrefix=a,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function tl(e,t,i,a,c,f,y,z,M){return e=new $p(e,t,i,z,M),t===1?(t=1,f===!0&&(t|=8)):t=0,f=sn(3,null,null,t),e.current=f,f.stateNode=e,f.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},pa(f),e}function kp(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function q1(e){if(!e)return mr;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Bt(i))return nc(e,i,t)}return t}function M1(e,t,i,a,c,f,y,z,M){return e=tl(i,a,!0,e,c,f,y,z,M),e.context=q1(null),i=e.current,a=Ct(),c=xr(i),f=Fn(a,c),f.callback=t??null,hr(i,f,c),e.current.lanes=c,Gi(e,c,a),Lt(e,a),e}function F0(e,t,i,a){var c=t.current,f=Ct(),y=xr(c);return i=q1(i),t.context===null?t.context=i:t.pendingContext=i,t=Fn(f,y),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=hr(c,t,y),e!==null&&(vn(e,c,y,f),v0(e,c,y)),y}function L0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function nl(e,t){j1(e,t),(e=e.alternate)&&j1(e,t)}function zp(){return null}var A1=typeof reportError=="function"?reportError:function(e){console.error(e)};function rl(e){this._internalRoot=e}O0.prototype.render=rl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));F0(e,t,null,null)},O0.prototype.unmount=rl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){F0(null,e,null,null)}),t[En]=null}};function O0(e){this._internalRoot=e}O0.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<ar.length&&t!==0&&t<ar[i].priority;i++);ar.splice(i,0,e),i===0&&vu(e)}};function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function H0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function C1(){}function Sp(e,t,i,a,c){if(c){if(typeof a=="function"){var f=a;a=function(){var F=L0(y);f.call(F)}}var y=M1(t,a,e,0,null,!1,!1,"",C1);return e._reactRootContainer=y,e[En]=y.current,io(e.nodeType===8?e.parentNode:e),Kr(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof a=="function"){var z=a;a=function(){var F=L0(M);z.call(F)}}var M=tl(e,0,!1,null,null,!1,!1,"",C1);return e._reactRootContainer=M,e[En]=M.current,io(e.nodeType===8?e.parentNode:e),Kr(function(){F0(t,M,i,a)}),M}function G0(e,t,i,a,c){var f=i._reactRootContainer;if(f){var y=f;if(typeof c=="function"){var z=c;c=function(){var M=L0(y);z.call(M)}}F0(t,y,e,c)}else y=Sp(i,t,e,c,a);return L0(y)}mu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Hi(t.pendingLanes);i!==0&&(qs(t,i|1),Lt(t,ut()),(Oe&6)===0&&(Si=ut()+500,fr()))}break;case 13:Kr(function(){var a=In(e,1);if(a!==null){var c=Ct();vn(a,e,1,c)}}),nl(e,1)}},Ms=function(e){if(e.tag===13){var t=In(e,134217728);if(t!==null){var i=Ct();vn(t,e,134217728,i)}nl(e,134217728)}},fu=function(e){if(e.tag===13){var t=xr(e),i=In(e,t);if(i!==null){var a=Ct();vn(i,e,t,a)}nl(e,t)}},pu=function(){return Ke},hu=function(e,t){var i=Ke;try{return Ke=e,t()}finally{Ke=i}},Er=function(e,t,i){switch(t){case"input":if(Pn(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var c=a0(a);if(!c)throw Error(r(90));ti(a),Pn(a,c)}}}break;case"textarea":Rn(e,i);break;case"select":t=i.value,t!=null&&Ve(e,!!i.multiple,t,!1)}},Io=Ya,er=Kr;var Tp={usingClientEntryPoint:!1,Events:[ao,fi,a0,Nr,ri,Ya]},wo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qp={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=De(e),e===null?null:e.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||zp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var W0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!W0.isDisabled&&W0.supportsFiber)try{Oo=W0.inject(qp),xn=W0}catch{}}return Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp,Ot.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!il(t))throw Error(r(200));return kp(e,t,null,i)},Ot.createRoot=function(e,t){if(!il(e))throw Error(r(299));var i=!1,a="",c=A1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=tl(e,1,!1,null,null,i,!1,a,c),e[En]=t.current,io(e.nodeType===8?e.parentNode:e),new rl(t)},Ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=De(t),e=e===null?null:e.stateNode,e},Ot.flushSync=function(e){return Kr(e)},Ot.hydrate=function(e,t,i){if(!H0(t))throw Error(r(200));return G0(null,e,t,!0,i)},Ot.hydrateRoot=function(e,t,i){if(!il(e))throw Error(r(405));var a=i!=null&&i.hydratedSources||null,c=!1,f="",y=A1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),t=M1(t,null,e,1,i??null,c,!1,f,y),e[En]=t.current,io(e),a)for(e=0;e<a.length;e++)i=a[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new O0(t)},Ot.render=function(e,t,i){if(!H0(t))throw Error(r(200));return G0(null,e,t,!1,i)},Ot.unmountComponentAtNode=function(e){if(!H0(e))throw Error(r(40));return e._reactRootContainer?(Kr(function(){G0(null,null,e,!1,function(){e._reactRootContainer=null,e[En]=null})}),!0):!1},Ot.unstable_batchedUpdates=Ya,Ot.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!H0(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return G0(e,t,i,!1,a)},Ot.version="18.3.1-next-f1338f8080-20240426",Ot}var F1;function Dp(){if(F1)return al.exports;F1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),al.exports=Ep(),al.exports}var L1;function Np(){if(L1)return U0;L1=1;var o=Dp();return U0.createRoot=o.createRoot,U0.hydrateRoot=o.hydrateRoot,U0}var Bp=Np();const Ip=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Fp=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Lp=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Op=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,Hp=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Gp=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Wp=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Up=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Vp=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Kp=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
---
`,Yp=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Qp=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,Xp=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,Zp=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,Jp=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
---
`,eh=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,th=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,nh=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,rh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,ih=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,oh=`---
label: "Linear Function"
labelPl: "Funkcja liniowa"
scope: funkcje
section: SP8
level: 2
x: 260
y: 540
---
`,sh=`---
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
`,lh=`---
label: "Quadratic Function"
labelPl: "Funkcja kwadratowa"
scope: funkcje
section: LP
level: 2
x: 390
y: 700
---
`,uh=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,ch=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,dh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,mh=`---
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
`,ph=`---
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
`,gh=`---
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
`,yh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,xh=`---
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
`,_h=`---
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
`,$h=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,kh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,zh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,Sh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,Th=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,qh=`---
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
`,jh=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
---
`,Ah=`---
label: "Quadratic Equations"
labelPl: "Równania kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 390
---
`,Ch=`---
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
`,Rh=`---
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
`,Nh=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,Bh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,Ih=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
`,Fh=`---
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
`,Hh=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,Gh=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,Wh=`---
label: "Vectors"
labelPl: "Wektory"
scope: geometria_analityczna
section: LR
level: 3
x: 660
y: 870
---
`,Uh=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
---
`,Vh=`---
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
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,Kh=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,Yh=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,Qh=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,Xh=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,Zh=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,Jh=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,e4=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,t4=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,n4=`---
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
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,r4=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,i4=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,o4=`---
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
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,s4=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,a4=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,l4=`---
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
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,u4=`---
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
Rozwiń $(a + b)^3$:`,c4=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,d4=`---
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
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,m4=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,f4=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,p4=`---
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
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,h4=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,g4=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,v4=`---
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
Moduł liczby zespolonej z = 3 + 4i wynosi:`,y4=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,x4=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,b4=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,_4=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,w4=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,$4=`---
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
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,k4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,z4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,S4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,T4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,q4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,M4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,j4=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,A4=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,C4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,R4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,E4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,D4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,N4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,B4=`---
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
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,I4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,F4=`---
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
Wykres rozkładu normalnego ma kształt:`,L4=`---
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
Rozkład na czynniki: x² − 5x + 6 =`,O4=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,H4=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,G4=`---
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
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,W4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,U4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,V4=`---
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
Która z poniższych relacji NIE jest funkcją?`,K4=`---
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
Funkcja to takie przyporządkowanie, że:`,Y4=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,Q4=`---
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
Funkcja f(x) = 2ˣ jest:`,X4=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,Z4=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,J4=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,e2=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,t2=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,n2=`---
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
Dziedzina funkcji f(x) = log(x − 2) to:`,r2=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,i2=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,o2=`---
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
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,s2=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,a2=`---
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
Funkcja $f(x) = x^3$ jest:`,l2=`---
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
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,u2=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,c2=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,d2=`---
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
Okres funkcji f(x) = sin(2x) wynosi:`,m2=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,f2=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,p2=`---
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
Uproszczona postać ułamka 45/60 to:`,h2=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,g2=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,v2=`---
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
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,y2=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,x2=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,b2=`---
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
Ile wynosi NWD(84, 56)?`,_2=`---
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
Oblicz: $(-3) \\cdot 4 =$`,w2=`---
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
Oblicz: $3 - 8 =$`,$2=`---
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
$\\displaystyle \\int 2x \\, dx =$`,k2=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,z2=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,S2=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,T2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,q2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,M2=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,j2=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,A2=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,C2=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,R2=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,E2=`---
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
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,D2=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,N2=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,B2=`---
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
Rozwiązaniem równania log₂(x) = 3 jest:`,I2=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,F2=`---
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
Rozwiąż równanie: $2^x = 16$`,L2=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,O2=`---
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
Oblicz: $\\log_2 8 =$`,H2=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,G2=`---
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
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,W2=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,U2=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,V2=`---
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
Prostokąt o obwodzie 20 ma największe pole gdy:`,K2=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,Y2=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,Q2=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,X2=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,Z2=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,J2=`---
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
Liczba permutacji zbioru {A, B, C, D} wynosi:`,e3=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,t3=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,n3=`---
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
Kąt wpisany w okrąg oparty na średnicy mierzy:`,r3=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,i3=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,o3=`---
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
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,s3=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,a3=`---
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
Wielomian stopnia $n$ ma:`,l3=`---
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
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,u3=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,c3=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,d3=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,m3=`---
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
Oblicz: $2^3 =$`,f3=`---
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
Uprość: $a^2 \\cdot a^3 =$`,p3=`---
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
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,h3=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,g3=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,v3=`---
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
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,y3=`---
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
Dowód nie wprost polega na tym, że:`,x3=`---
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
Dowód przez indukcję matematyczną składa się z:`,b3=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,_3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,w3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,$3=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,k3=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,z3=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,S3=`---
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
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,T3=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,q3=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,M3=`---
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
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,j3=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,A3=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,C3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,R3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,E3=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,D3=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,N3=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,B3=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,I3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,F3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,L3=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,O3=`---
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
Twierdzenie cosinusów brzmi:`,H3=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,G3=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,W3=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,U3=`---
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
Wzór na objętość kuli o promieniu $r$:`,V3=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,K3=`---
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
Dominanta (moda) zbioru danych to:`,Y3=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,Q3=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,X3=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,Z3=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,J3=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,e5=`---
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
Wartość $\\sin 30°$ wynosi:`,t5=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,n5=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,r5=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,i5=`---
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
Rozwiąż równanie: $\\tan x = 1$`,o5=`---
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
sin(2α) jest równe:`,s5=`---
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
Wzór na $\\sin 2\\alpha$:`,a5=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,l5=`---
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
Wartość sin(120°) jest równa:`,u5=`---
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
Wartość $\\cos 30°$ wynosi:`,c5=`---
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
Wartość $\\sin 45°$ wynosi:`,d5=`---
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
Długość wektora v = [3, 4] wynosi:`,m5=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,f5=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,p5=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,h5=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,g5=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`;function Ad(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],s=n[2].trim(),l={},u=r.split(/\r?\n/);let m=0;for(;m<u.length;){const g=u[m];if(g.startsWith("  ")){m++;continue}const h=g.match(/^(\w+):\s*(.*)/);if(!h){m++;continue}const x=h[1];let _=h[2].trim();if(_===""||_===null){const $=u[m+1]??"";if($.startsWith("  - ")){const k=[];for(m++;m<u.length&&u[m].startsWith("  - ");){let T=u[m].replace(/^  - /,"").trim();T=T.replace(/^["']|["']$/g,""),k.push(T),m++}l[x]=k.length>0?k:null}else if($.match(/^  \w+:/)){const k={};for(m++;m<u.length&&u[m].match(/^  \w+:/);){const T=u[m].match(/^  (\w+):\s*(.*)/);if(T){const P=T[1];let R=T[2].trim().replace(/^["']|["']$/g,"");k[P]=!isNaN(R)&&R!==""?Number(R):R}m++}l[x]=k}else l[x]=null,m++}else _=_.replace(/^["']|["']$/g,""),!isNaN(_)&&_!==""?l[x]=Number(_):_==="true"?l[x]=!0:_==="false"?l[x]=!1:l[x]=_,m++}return{meta:l,body:s}}function Cd(o,n){return Object.entries(o).map(([r,s])=>{var m;const l=(m=r.match(n))==null?void 0:m[1],{meta:u}=Ad(s);return{id:l,label:u.label??l,labelPl:u.labelPl??u.label??l,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0}})}function Pd(o,n){var s;const r={};for(const[l,u]of Object.entries(o)){const m=(s=l.match(n))==null?void 0:s[1];if(!m)continue;const{meta:g,body:h}=Ad(u);r[m]||(r[m]=[]),r[m].push({q:h,options:g.options??[],correct:g.correct??0,hint:g.hint??"",tests:g.tests&&typeof g.tests=="object"&&Object.keys(g.tests).length>0?g.tests:{[m]:1}})}return r}function v5(o,n,r=[]){const s=o[n];if(!s||s.length===0||r.includes(-1))return null;const l=s.map((m,g)=>({q:m,i:g})).filter(({i:m})=>!r.includes(m));if(l.length===0)return null;const u=l[Math.floor(Math.random()*l.length)];return{...u.q,index:u.i}}const y5=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],x5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},b5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},_5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Rd={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},w5=Object.assign({"./nodes/abs_value/node.md":Ip,"./nodes/analytic_geom/node.md":Fp,"./nodes/area_perimeter/node.md":Lp,"./nodes/arith_geom/node.md":Op,"./nodes/bernoulli/node.md":Hp,"./nodes/binom_theorem/node.md":Gp,"./nodes/circle_eq/node.md":Wp,"./nodes/combinations/node.md":Up,"./nodes/complex/node.md":Vp,"./nodes/cond_prob/node.md":Kp,"./nodes/conic_sections/node.md":Yp,"./nodes/counting/node.md":Qp,"./nodes/data_basics/node.md":Xp,"./nodes/deriv_apps/node.md":Zp,"./nodes/derivative/node.md":Jp,"./nodes/distributions/node.md":eh,"./nodes/factoring/node.md":th,"./nodes/fn_compositions/node.md":nh,"./nodes/fn_concept/node.md":rh,"./nodes/fn_exp/node.md":ih,"./nodes/fn_linear/node.md":oh,"./nodes/fn_log/node.md":sh,"./nodes/fn_poly/node.md":ah,"./nodes/fn_quadratic/node.md":lh,"./nodes/fn_trig/node.md":uh,"./nodes/fractions/node.md":ch,"./nodes/geo_series/node.md":dh,"./nodes/integers/node.md":mh,"./nodes/integral/node.md":fh,"./nodes/limits/node.md":ph,"./nodes/linear_eq/node.md":hh,"./nodes/linear_ineq/node.md":gh,"./nodes/linear_sys/node.md":vh,"./nodes/log_eq/node.md":yh,"./nodes/log_exp/node.md":xh,"./nodes/logic_basics/node.md":bh,"./nodes/optimization_lp/node.md":_h,"./nodes/param_eq/node.md":wh,"./nodes/permutations/node.md":$h,"./nodes/planimetria_lp/node.md":kh,"./nodes/poly_roots/node.md":zh,"./nodes/polynomials/node.md":Sh,"./nodes/powers/node.md":Th,"./nodes/probability/node.md":qh,"./nodes/proof/node.md":Mh,"./nodes/pythagoras/node.md":jh,"./nodes/quadratic_eq/node.md":Ah,"./nodes/quadratic_ineq/node.md":Ch,"./nodes/rational_expr/node.md":Ph,"./nodes/seq_limits/node.md":Rh,"./nodes/sequences/node.md":Eh,"./nodes/sets/node.md":Dh,"./nodes/sin_cos_law/node.md":Nh,"./nodes/solid_geom/node.md":Bh,"./nodes/stat_lp/node.md":Ih,"./nodes/thales/node.md":Fh,"./nodes/trig_basic/node.md":Lh,"./nodes/trig_eq/node.md":Oh,"./nodes/trig_formulas/node.md":Hh,"./nodes/trig_lp/node.md":Gh,"./nodes/vectors/node.md":Wh,"./nodes/vieta/node.md":Uh}),$5=Cd(w5,/\.\/nodes\/([^/]+)\/node\.md$/),k5=Object.assign({"./nodes/abs_value/questions/01.md":Vh,"./nodes/abs_value/questions/02.md":Kh,"./nodes/abs_value/questions/03.md":Yh,"./nodes/analytic_geom/questions/01.md":Qh,"./nodes/analytic_geom/questions/02.md":Xh,"./nodes/analytic_geom/questions/03.md":Zh,"./nodes/area_perimeter/questions/01.md":Jh,"./nodes/area_perimeter/questions/02.md":e4,"./nodes/area_perimeter/questions/03.md":t4,"./nodes/arith_geom/questions/01.md":n4,"./nodes/arith_geom/questions/02.md":r4,"./nodes/arith_geom/questions/03.md":i4,"./nodes/bernoulli/questions/01.md":o4,"./nodes/bernoulli/questions/02.md":s4,"./nodes/bernoulli/questions/03.md":a4,"./nodes/binom_theorem/questions/01.md":l4,"./nodes/binom_theorem/questions/02.md":u4,"./nodes/binom_theorem/questions/03.md":c4,"./nodes/circle_eq/questions/01.md":d4,"./nodes/circle_eq/questions/02.md":m4,"./nodes/circle_eq/questions/03.md":f4,"./nodes/combinations/questions/01.md":p4,"./nodes/combinations/questions/02.md":h4,"./nodes/combinations/questions/03.md":g4,"./nodes/complex/questions/01.md":v4,"./nodes/complex/questions/02.md":y4,"./nodes/complex/questions/03.md":x4,"./nodes/cond_prob/questions/01.md":b4,"./nodes/cond_prob/questions/02.md":_4,"./nodes/cond_prob/questions/03.md":w4,"./nodes/conic_sections/questions/01.md":$4,"./nodes/conic_sections/questions/02.md":k4,"./nodes/conic_sections/questions/03.md":z4,"./nodes/counting/questions/01.md":S4,"./nodes/counting/questions/02.md":T4,"./nodes/counting/questions/03.md":q4,"./nodes/data_basics/questions/01.md":M4,"./nodes/data_basics/questions/02.md":j4,"./nodes/data_basics/questions/03.md":A4,"./nodes/deriv_apps/questions/01.md":C4,"./nodes/deriv_apps/questions/02.md":P4,"./nodes/deriv_apps/questions/03.md":R4,"./nodes/derivative/questions/01.md":E4,"./nodes/derivative/questions/02.md":D4,"./nodes/derivative/questions/03.md":N4,"./nodes/distributions/questions/01.md":B4,"./nodes/distributions/questions/02.md":I4,"./nodes/distributions/questions/03.md":F4,"./nodes/factoring/questions/01.md":L4,"./nodes/factoring/questions/02.md":O4,"./nodes/factoring/questions/03.md":H4,"./nodes/fn_compositions/questions/01.md":G4,"./nodes/fn_compositions/questions/02.md":W4,"./nodes/fn_compositions/questions/03.md":U4,"./nodes/fn_concept/questions/01.md":V4,"./nodes/fn_concept/questions/02.md":K4,"./nodes/fn_concept/questions/03.md":Y4,"./nodes/fn_exp/questions/01.md":Q4,"./nodes/fn_exp/questions/02.md":X4,"./nodes/fn_exp/questions/03.md":Z4,"./nodes/fn_linear/questions/01.md":J4,"./nodes/fn_linear/questions/02.md":e2,"./nodes/fn_linear/questions/03.md":t2,"./nodes/fn_log/questions/01.md":n2,"./nodes/fn_log/questions/02.md":r2,"./nodes/fn_log/questions/03.md":i2,"./nodes/fn_poly/questions/01.md":o2,"./nodes/fn_poly/questions/02.md":s2,"./nodes/fn_poly/questions/03.md":a2,"./nodes/fn_quadratic/questions/01.md":l2,"./nodes/fn_quadratic/questions/02.md":u2,"./nodes/fn_quadratic/questions/03.md":c2,"./nodes/fn_trig/questions/01.md":d2,"./nodes/fn_trig/questions/02.md":m2,"./nodes/fn_trig/questions/03.md":f2,"./nodes/fractions/questions/01.md":p2,"./nodes/fractions/questions/02.md":h2,"./nodes/fractions/questions/03.md":g2,"./nodes/geo_series/questions/01.md":v2,"./nodes/geo_series/questions/02.md":y2,"./nodes/geo_series/questions/03.md":x2,"./nodes/integers/questions/01.md":b2,"./nodes/integers/questions/02.md":_2,"./nodes/integers/questions/03.md":w2,"./nodes/integral/questions/01.md":$2,"./nodes/integral/questions/02.md":k2,"./nodes/integral/questions/03.md":z2,"./nodes/limits/questions/01.md":S2,"./nodes/limits/questions/02.md":T2,"./nodes/limits/questions/03.md":q2,"./nodes/linear_eq/questions/01.md":M2,"./nodes/linear_eq/questions/02.md":j2,"./nodes/linear_eq/questions/03.md":A2,"./nodes/linear_ineq/questions/01.md":C2,"./nodes/linear_ineq/questions/02.md":P2,"./nodes/linear_ineq/questions/03.md":R2,"./nodes/linear_sys/questions/01.md":E2,"./nodes/linear_sys/questions/02.md":D2,"./nodes/linear_sys/questions/03.md":N2,"./nodes/log_eq/questions/01.md":B2,"./nodes/log_eq/questions/02.md":I2,"./nodes/log_eq/questions/03.md":F2,"./nodes/log_exp/questions/01.md":L2,"./nodes/log_exp/questions/02.md":O2,"./nodes/log_exp/questions/03.md":H2,"./nodes/logic_basics/questions/01.md":G2,"./nodes/logic_basics/questions/02.md":W2,"./nodes/logic_basics/questions/03.md":U2,"./nodes/optimization_lp/questions/01.md":V2,"./nodes/optimization_lp/questions/02.md":K2,"./nodes/optimization_lp/questions/03.md":Y2,"./nodes/param_eq/questions/01.md":Q2,"./nodes/param_eq/questions/02.md":X2,"./nodes/param_eq/questions/03.md":Z2,"./nodes/permutations/questions/01.md":J2,"./nodes/permutations/questions/02.md":e3,"./nodes/permutations/questions/03.md":t3,"./nodes/planimetria_lp/questions/01.md":n3,"./nodes/planimetria_lp/questions/02.md":r3,"./nodes/planimetria_lp/questions/03.md":i3,"./nodes/poly_roots/questions/01.md":o3,"./nodes/poly_roots/questions/02.md":s3,"./nodes/poly_roots/questions/03.md":a3,"./nodes/polynomials/questions/01.md":l3,"./nodes/polynomials/questions/02.md":u3,"./nodes/polynomials/questions/03.md":c3,"./nodes/powers/questions/01.md":d3,"./nodes/powers/questions/02.md":m3,"./nodes/powers/questions/03.md":f3,"./nodes/probability/questions/01.md":p3,"./nodes/probability/questions/02.md":h3,"./nodes/probability/questions/03.md":g3,"./nodes/proof/questions/01.md":v3,"./nodes/proof/questions/02.md":y3,"./nodes/proof/questions/03.md":x3,"./nodes/pythagoras/questions/01.md":b3,"./nodes/pythagoras/questions/02.md":_3,"./nodes/pythagoras/questions/03.md":w3,"./nodes/quadratic_eq/questions/01.md":$3,"./nodes/quadratic_eq/questions/02.md":k3,"./nodes/quadratic_eq/questions/03.md":z3,"./nodes/quadratic_ineq/questions/01.md":S3,"./nodes/quadratic_ineq/questions/02.md":T3,"./nodes/quadratic_ineq/questions/03.md":q3,"./nodes/rational_expr/questions/01.md":M3,"./nodes/rational_expr/questions/02.md":j3,"./nodes/rational_expr/questions/03.md":A3,"./nodes/seq_limits/questions/01.md":C3,"./nodes/seq_limits/questions/02.md":P3,"./nodes/seq_limits/questions/03.md":R3,"./nodes/sequences/questions/01.md":E3,"./nodes/sequences/questions/02.md":D3,"./nodes/sequences/questions/03.md":N3,"./nodes/sets/questions/01.md":B3,"./nodes/sets/questions/02.md":I3,"./nodes/sets/questions/03.md":F3,"./nodes/sin_cos_law/questions/01.md":L3,"./nodes/sin_cos_law/questions/02.md":O3,"./nodes/sin_cos_law/questions/03.md":H3,"./nodes/solid_geom/questions/01.md":G3,"./nodes/solid_geom/questions/02.md":W3,"./nodes/solid_geom/questions/03.md":U3,"./nodes/stat_lp/questions/01.md":V3,"./nodes/stat_lp/questions/02.md":K3,"./nodes/stat_lp/questions/03.md":Y3,"./nodes/thales/questions/01.md":Q3,"./nodes/thales/questions/02.md":X3,"./nodes/thales/questions/03.md":Z3,"./nodes/trig_basic/questions/01.md":J3,"./nodes/trig_basic/questions/02.md":e5,"./nodes/trig_basic/questions/03.md":t5,"./nodes/trig_eq/questions/01.md":n5,"./nodes/trig_eq/questions/02.md":r5,"./nodes/trig_eq/questions/03.md":i5,"./nodes/trig_formulas/questions/01.md":o5,"./nodes/trig_formulas/questions/02.md":s5,"./nodes/trig_formulas/questions/03.md":a5,"./nodes/trig_lp/questions/01.md":l5,"./nodes/trig_lp/questions/02.md":u5,"./nodes/trig_lp/questions/03.md":c5,"./nodes/vectors/questions/01.md":d5,"./nodes/vectors/questions/02.md":m5,"./nodes/vectors/questions/03.md":f5,"./nodes/vieta/questions/01.md":p5,"./nodes/vieta/questions/02.md":h5,"./nodes/vieta/questions/03.md":g5}),z5=Pd(k5,/\.\/nodes\/([^/]+)\/questions\//),S5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Rd,QUESTION_BANK:z5,RAW_EDGES:y5,RAW_NODES:$5,SCOPE_COLORS:b5,SCOPE_LABELS:_5,SECTIONS:x5},Symbol.toStringTag,{value:"Module"})),T5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,q5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,M5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,j5=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,A5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,C5=`---
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
`,R5=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,E5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,D5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,N5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,B5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,I5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,F5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,L5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,O5=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,H5=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,G5=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,W5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,U5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,V5=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,K5=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Y5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,Q5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,X5=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,Z5=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,J5=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,e6=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,t6=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,n6=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,r6=`---
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
`,i6=`---
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
`,o6=`---
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
`,s6=`---
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
`,a6=`---
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
`,l6=`---
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
`,u6=`---
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
`,c6=`---
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
`,d6=`---
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
`,m6=`---
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

`,f6=`---
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

`,p6=`---
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

`,h6=`---
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
`,g6=`---
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
`,v6=`---
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
`,y6=`---
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
`,x6=`---
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
`,b6=`---
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
`,_6=`---
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

`,w6=`---
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

`,$6=`---
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

`,k6=`---
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

`,z6=`---
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

`,S6=`---
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

`,T6=`---
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
`,q6=`---
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
`,M6=`---
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
`,j6=`---
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
`,A6=`---
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
`,C6=`---
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
`,R6=`---
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
`,E6=`---
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
`,D6=`---
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
`,N6=`---
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
`,B6=`---
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
`,I6=`---
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
`,F6=`---
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
`,L6=`---
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
`,O6=`---
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
`,H6=`---
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
`,G6=`---
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
`,W6=`---
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
`,U6=`---
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
`,V6=`---
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
`,K6=`---
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

`,Y6=`---
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

`,Q6=`---
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

`,X6=`---
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

`,Z6=`---
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

`,J6=`---
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

`,e7=`---
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

`,t7=`---
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

`,n7=`---
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

`,r7=`---
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
`,i7=`---
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
`,o7=`---
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
`,s7=`---
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
`,a7=`---
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
`,l7=`---
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
`,u7=`---
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

`,c7=`---
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

`,d7=`---
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

`,m7=`---
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

`,f7=`---
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

`,p7=`---
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

`,h7=`---
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
`,g7=`---
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
`,v7=`---
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
`,y7=`---
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
`,x7=`---
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
`,b7=`---
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
`,_7=`---
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
`,w7=`---
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
`,k7=`---
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
`,z7=`---
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

`,S7=`---
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

`,T7=`---
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
`,q7=`---
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
`,M7=`---
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

`,A7=`---
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

`,C7=`---
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
`,R7=`---
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
`,E7=`---
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
`,D7=`---
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

`,N7=`---
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

`,B7=`---
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

`,I7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],F7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},L7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},O7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},Ed={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},H7=Object.assign({"./nodes/binary_ops/node.md":T5,"./nodes/cosets/node.md":q5,"./nodes/cyclic_groups/node.md":M5,"./nodes/direct_sums/node.md":j5,"./nodes/field_extensions/node.md":A5,"./nodes/fields_intro/node.md":C5,"./nodes/finitely_generated/node.md":P5,"./nodes/free_modules/node.md":R5,"./nodes/group_actions/node.md":E5,"./nodes/group_homomorphisms/node.md":D5,"./nodes/groups_intro/node.md":N5,"./nodes/ideals/node.md":B5,"./nodes/induction/node.md":I5,"./nodes/integral_domains/node.md":F5,"./nodes/iso_theorem/node.md":L5,"./nodes/jordan_normal_form/node.md":O5,"./nodes/module_homs/node.md":H5,"./nodes/modules_intro/node.md":G5,"./nodes/normal_subgroups/node.md":W5,"./nodes/poly_rings/node.md":U5,"./nodes/primary_decomp/node.md":V5,"./nodes/rational_canonical/node.md":K5,"./nodes/relations/node.md":Y5,"./nodes/ring_homomorphisms/node.md":Q5,"./nodes/rings_intro/node.md":X5,"./nodes/sets_functions/node.md":Z5,"./nodes/subgroups/node.md":J5,"./nodes/submodules/node.md":e6,"./nodes/sylow/node.md":t6,"./nodes/torsion_modules/node.md":n6}),G7=Cd(H7,/\.\/nodes\/([^/]+)\/node\.md$/),W7=Object.assign({"./nodes/binary_ops/questions/01.md":r6,"./nodes/binary_ops/questions/02.md":i6,"./nodes/binary_ops/questions/03.md":o6,"./nodes/cosets/questions/01.md":s6,"./nodes/cosets/questions/02.md":a6,"./nodes/cosets/questions/03.md":l6,"./nodes/cyclic_groups/questions/01.md":u6,"./nodes/cyclic_groups/questions/02.md":c6,"./nodes/cyclic_groups/questions/03.md":d6,"./nodes/direct_sums/questions/01.md":m6,"./nodes/direct_sums/questions/02.md":f6,"./nodes/direct_sums/questions/03.md":p6,"./nodes/field_extensions/questions/01.md":h6,"./nodes/field_extensions/questions/02.md":g6,"./nodes/field_extensions/questions/03.md":v6,"./nodes/fields_intro/questions/01.md":y6,"./nodes/fields_intro/questions/02.md":x6,"./nodes/fields_intro/questions/03.md":b6,"./nodes/finitely_generated/questions/01.md":_6,"./nodes/finitely_generated/questions/02.md":w6,"./nodes/finitely_generated/questions/03.md":$6,"./nodes/free_modules/questions/01.md":k6,"./nodes/free_modules/questions/02.md":z6,"./nodes/free_modules/questions/03.md":S6,"./nodes/group_actions/questions/01.md":T6,"./nodes/group_actions/questions/02.md":q6,"./nodes/group_actions/questions/03.md":M6,"./nodes/group_homomorphisms/questions/01.md":j6,"./nodes/group_homomorphisms/questions/02.md":A6,"./nodes/group_homomorphisms/questions/03.md":C6,"./nodes/groups_intro/questions/01.md":P6,"./nodes/groups_intro/questions/02.md":R6,"./nodes/groups_intro/questions/03.md":E6,"./nodes/ideals/questions/01.md":D6,"./nodes/ideals/questions/02.md":N6,"./nodes/ideals/questions/03.md":B6,"./nodes/induction/questions/01.md":I6,"./nodes/induction/questions/02.md":F6,"./nodes/induction/questions/03.md":L6,"./nodes/integral_domains/questions/01.md":O6,"./nodes/integral_domains/questions/02.md":H6,"./nodes/integral_domains/questions/03.md":G6,"./nodes/iso_theorem/questions/01.md":W6,"./nodes/iso_theorem/questions/02.md":U6,"./nodes/iso_theorem/questions/03.md":V6,"./nodes/jordan_normal_form/questions/01.md":K6,"./nodes/jordan_normal_form/questions/02.md":Y6,"./nodes/jordan_normal_form/questions/03.md":Q6,"./nodes/module_homs/questions/01.md":X6,"./nodes/module_homs/questions/02.md":Z6,"./nodes/module_homs/questions/03.md":J6,"./nodes/modules_intro/questions/01.md":e7,"./nodes/modules_intro/questions/02.md":t7,"./nodes/modules_intro/questions/03.md":n7,"./nodes/normal_subgroups/questions/01.md":r7,"./nodes/normal_subgroups/questions/02.md":i7,"./nodes/normal_subgroups/questions/03.md":o7,"./nodes/poly_rings/questions/01.md":s7,"./nodes/poly_rings/questions/02.md":a7,"./nodes/poly_rings/questions/03.md":l7,"./nodes/primary_decomp/questions/01.md":u7,"./nodes/primary_decomp/questions/02.md":c7,"./nodes/primary_decomp/questions/03.md":d7,"./nodes/rational_canonical/questions/01.md":m7,"./nodes/rational_canonical/questions/02.md":f7,"./nodes/rational_canonical/questions/03.md":p7,"./nodes/relations/questions/01.md":h7,"./nodes/relations/questions/02.md":g7,"./nodes/relations/questions/03.md":v7,"./nodes/ring_homomorphisms/questions/01.md":y7,"./nodes/ring_homomorphisms/questions/02.md":x7,"./nodes/ring_homomorphisms/questions/03.md":b7,"./nodes/rings_intro/questions/01.md":_7,"./nodes/rings_intro/questions/02.md":w7,"./nodes/rings_intro/questions/03.md":$7,"./nodes/sets_functions/questions/01.md":k7,"./nodes/sets_functions/questions/02.md":z7,"./nodes/sets_functions/questions/03.md":S7,"./nodes/subgroups/questions/01.md":T7,"./nodes/subgroups/questions/02.md":q7,"./nodes/subgroups/questions/03.md":M7,"./nodes/submodules/questions/01.md":j7,"./nodes/submodules/questions/02.md":A7,"./nodes/submodules/questions/03.md":C7,"./nodes/sylow/questions/01.md":P7,"./nodes/sylow/questions/02.md":R7,"./nodes/sylow/questions/03.md":E7,"./nodes/torsion_modules/questions/01.md":D7,"./nodes/torsion_modules/questions/02.md":N7,"./nodes/torsion_modules/questions/03.md":B7}),U7=Pd(W7,/\.\/nodes\/([^/]+)\/questions\//),V7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Ed,QUESTION_BANK:U7,RAW_EDGES:I7,RAW_NODES:G7,SCOPE_COLORS:L7,SCOPE_LABELS:O7,SECTIONS:F7},Symbol.toStringTag,{value:"Module"})),K7={math_pl:S5,abstract_algebra:V7},Y7=[Rd,Ed],Q7="math_pl",X7={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."}};function Z(o,n="pl"){const r=X7[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function Z7(o,n){const r={},s={};return o.forEach(l=>{r[l.id]=[],s[l.id]=[]}),n.forEach(([l,u])=>{var m,g;(m=r[u])==null||m.push(l),(g=s[l])==null||g.push(u)}),{prereqs:r,dependents:s}}function Il(o,n){const r=Object.fromEntries(o.map(m=>[m.id,0])),s=Object.fromEntries(o.map(m=>[m.id,[]]));for(const[m,g]of n)r[g]!==void 0&&r[g]++,s[m]!==void 0&&s[m].push(g);const l=Object.fromEntries(o.map(m=>[m.id,0])),u=o.filter(m=>r[m.id]===0).map(m=>m.id);for(;u.length;){const m=u.shift();for(const g of s[m])l[g]=Math.max(l[g],l[m]+1),--r[g]===0&&u.push(g)}return l}const J7={id:"spectral",label:"Spectral"};function eg(o,n,r,s,l=80){const u=o.length,m=Object.fromEntries(o.map((L,V)=>[L.id,V])),g=Array.from({length:u},()=>new Float64Array(u));n.forEach(([L,V])=>{const ne=m[L],Se=m[V];ne==null||Se==null||(g[ne][Se]=1,g[Se][ne]=1)});const h=g.map(L=>L.reduce((V,ne)=>V+ne,0)),x=L=>L.map((V,ne)=>{let Se=0;for(let Te=0;Te<u;Te++)Se+=g[ne][Te]*L[Te];return h[ne]*L[ne]-Se}),_=(L,V)=>L.reduce((ne,Se,Te)=>ne+Se*V[Te],0),$=L=>{const V=Math.sqrt(_(L,L))||1;return L.map(ne=>ne/V)},k=(L,V)=>{let ne=[...L];return V.forEach(Se=>{const Te=_(ne,Se);ne=ne.map((me,be)=>me-Te*Se[be])}),$(ne)},T=(L,V=400)=>{let ne=$(Array.from({length:u},()=>Math.random()-.5));ne=k(ne,L);for(let Se=0;Se<V;Se++){const Te=Math.max(...h)+1;ne=k(ne.map((me,be)=>Te*me-x(ne)[be]),L)}return ne},P=$(new Array(u).fill(1)),R=T([P]),D=T([P,R]),E=Math.min(...R),O=Math.max(...R),G=Math.min(...D),B=Math.max(...D),W=O-E<1e-6?1:(r-2*l)/(O-E),U=B-G<1e-6?1:(s-2*l)/(B-G);return o.map((L,V)=>({id:L.id,x:l+(R[V]-E)*W,y:l+(D[V]-G)*U,vx:0,vy:0}))}const tg=Object.freeze(Object.defineProperty({__proto__:null,apply:eg,meta:J7},Symbol.toStringTag,{value:"Module"})),ng={id:"topoRank",label:"Topo Rank"},O1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function rg(o,n,r,s,l=80){const u=Il(o,n),m=Math.max(...o.map(_=>u[_.id]??0),0),g={};for(const _ of o){const $=u[_.id]??0;(g[$]??(g[$]=[])).push(_)}for(const _ of Object.values(g))_.sort(($,k)=>{const T=O1.indexOf($.scope),P=O1.indexOf(k.scope);return(T===-1?999:T)-(P===-1?999:P)});const h=r-2*l,x=s-2*l;return o.map(_=>{const $=u[_.id]??0,k=g[$],T=k.indexOf(_);return{id:_.id,x:l+(T+.5)/k.length*h,y:l+$/Math.max(m,1)*x,vx:0,vy:0}})}const ig=Object.freeze(Object.defineProperty({__proto__:null,apply:rg,meta:ng},Symbol.toStringTag,{value:"Module"})),og={id:"nPartite",label:"N-Partite Grid"};function sg(o,n,r,s,l=80){const u=Il(o,n),m=Math.max(...o.map(T=>u[T.id]??0),0),g={};for(const T of o){const P=u[T.id]??0;(g[P]??(g[P]=[])).push(T)}const h={};for(const T of o)h[T.id]=[];for(const[T,P]of n)h[P]&&h[P].push(T);const x=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],_={},$=r-2*l,k=s-2*l;for(let T=0;T<=m;T++){const P=g[T]??[];T===0?P.sort((D,E)=>{const O=x.indexOf(D.scope),G=x.indexOf(E.scope);return(O===-1?999:O)-(G===-1?999:G)}):P.sort((D,E)=>{const O=G=>{const B=h[G.id]??[];return B.length===0?r/2:B.reduce((W,U)=>{var L;return W+(((L=_[U])==null?void 0:L.x)??r/2)},0)/B.length};return O(D)-O(E)});const R=l+T/Math.max(m,1)*k;P.forEach((D,E)=>{const O=P.length===1?r/2:l+E/(P.length-1)*$;_[D.id]={x:O,y:R}})}return o.map(T=>{var P,R;return{id:T.id,x:((P=_[T.id])==null?void 0:P.x)??r/2,y:((R=_[T.id])==null?void 0:R.y)??s/2,vx:0,vy:0}})}const Dd=Object.freeze(Object.defineProperty({__proto__:null,apply:sg,meta:og},Symbol.toStringTag,{value:"Module"})),Nd=[Dd,ig,tg],Bd="nPartite";function ag(o){return Nd.find(n=>n.meta.id===o)??Dd}const is=1400,Fl=1e3,qo=80,lg=.4,H1=6,ug=.35,G1=.012;function cg(o,n){const r=Il(o,n),s=Math.max(...o.map(u=>r[u.id]??0),0),l=Object.fromEntries(o.map(u=>[u.id,qo+(r[u.id]??0)/Math.max(s,1)*(Fl-2*qo)]));return{ranks:r,rankY:l}}function dg(o,n){const r=Object.fromEntries(o.map((s,l)=>[s.id,l]));return n.map(([s,l])=>[r[s],r[l]]).filter(([s,l])=>s!=null&&l!=null)}function mg(o){return Math.sqrt(is*Fl/Math.max(o.length,1))*.9}function fg(o,n,r,s){return ag(o).apply(n,r,is,Fl,qo).map(m=>({id:m.id,x:m.x+(Math.random()-.5)*20,y:s[m.id]??m.y,vx:0,vy:0}))}function pg(o,n,r,s,{ranks:l,rankY:u,simEdges:m,idealK:g}){const h=o.length,x=new Float64Array(h);for(let _=0;_<h;_++)for(let $=_+1;$<h;$++){if(l[o[_].id]!==l[o[$].id])continue;const k=o[_].x-o[$].x,T=Math.abs(k)||.1,P=g*g/(T*T),R=k<0?-1:1;x[_]+=R*P,x[$]-=R*P}for(const[_,$]of m){const k=o[$].x-o[_].x;x[_]+=k*G1,x[$]-=k*G1}for(let _=0;_<h;_++)x[_]+=(is/2-o[_].x)*.003;return o.map((_,$)=>{if(_.id===n)return{..._,x:r,y:s,vx:0,vy:0};let k=(_.vx+x[$])*lg;Math.abs(k)>H1&&(k*=H1/Math.abs(k));const T=u[_.id]??_.y,P=_.y+(T-_.y)*ug;return{..._,vx:k,vy:0,x:Math.max(qo,Math.min(is-qo,_.x+k)),y:P}})}function cl(o=Bd,n=300,r,s){if(!r||r.length===0)return{};const{ranks:l,rankY:u}=cg(r,s??[]),m=dg(r,s??[]),g=mg(r),h={ranks:l,rankY:u,simEdges:m,idealK:g};let x=fg(o,r,s??[],u);for(let _=0;_<n;_++)x=pg(x,null,0,0,h);return Object.fromEntries(x.map(_=>[_.id,{x:_.x,y:_.y}]))}const ae={bg:"#0a0e17",surface:"#0d1520",border:"#1e2d45",borderSubtle:"#1a2235",textPrimary:"#f5f6fa",textBody:"#c8d6e5",textMuted:"#8a9dbe",textDim:"#6b7d9a",textFaint:"#3a4d63",knownHi:"#2ecc71",unknownHi:"#e74c3c",frontier:"#f39c12"},Id="'JetBrains Mono','SF Mono','Fira Code',monospace",zn=(o,n)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${ae.border}`,background:o?`${n}22`:"transparent",color:o?n:ae.textDim,minHeight:32}),ko=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function hg(o){const n=typeof window<"u"&&window.innerWidth<600,[r,s]=X.useState(n?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[l,u]=X.useState("grab"),m=X.useRef(!1),g=X.useRef({x:0,y:0}),h=X.useRef(null),x=X.useRef(null),_=X.useCallback(B=>{B.preventDefault();const W=B.deltaY>0?.9:1.1;s(U=>{const L=Math.max(.15,Math.min(5,U.scale*W)),V=B.clientX,ne=B.clientY,Se=V-(V-U.x)/U.scale*L,Te=ne-(ne-U.y)/U.scale*L;return{x:Se,y:Te,scale:L}})},[]),$=X.useCallback((B,W)=>({x:(B-r.x)/r.scale,y:(W-r.y)/r.scale}),[r]),k=X.useCallback((B,W)=>{m.current=!0,u("grabbing"),g.current={x:B-r.x,y:W-r.y}},[r]),T=X.useCallback(B=>m.current?(s(W=>({...W,x:B.clientX-g.current.x,y:B.clientY-g.current.y})),!0):!1,[]),P=X.useCallback(()=>{m.current=!1,u("grab")},[]),R=(B,W)=>{const U=B.clientX-W.clientX,L=B.clientY-W.clientY;return Math.sqrt(U*U+L*L)},D=(B,W)=>({x:(B.clientX+W.clientX)/2,y:(B.clientY+W.clientY)/2}),E=X.useCallback(B=>{B.touches.length===1?(m.current=!0,s(W=>(g.current={x:B.touches[0].clientX-W.x,y:B.touches[0].clientY-W.y},W)),h.current=null,x.current=null):B.touches.length===2&&(m.current=!1,h.current=R(B.touches[0],B.touches[1]),x.current=D(B.touches[0],B.touches[1]))},[]),O=X.useCallback(B=>{if(B.preventDefault(),B.touches.length===1&&m.current)s(W=>({...W,x:B.touches[0].clientX-g.current.x,y:B.touches[0].clientY-g.current.y}));else if(B.touches.length===2&&h.current!==null){const W=R(B.touches[0],B.touches[1]),U=D(B.touches[0],B.touches[1]),L=W/h.current;s(V=>{const ne=Math.max(.15,Math.min(5,V.scale*L)),Se=x.current.x,Te=x.current.y,me=Se-(Se-V.x)/V.scale*ne,be=Te-(Te-V.y)/V.scale*ne;return{x:me,y:be,scale:ne}}),h.current=W,x.current=U}},[]),G=X.useCallback(()=>{m.current=!1,h.current=null,x.current=null},[]);return X.useEffect(()=>{const B=o.current;if(B)return B.addEventListener("wheel",_,{passive:!1}),B.addEventListener("touchstart",E,{passive:!1}),B.addEventListener("touchmove",O,{passive:!1}),B.addEventListener("touchend",G,{passive:!1}),()=>{B.removeEventListener("wheel",_),B.removeEventListener("touchstart",E),B.removeEventListener("touchmove",O),B.removeEventListener("touchend",G)}},[o,_,E,O,G]),{viewTransform:r,setViewTransform:s,toCanvas:$,isPanning:m,panStart:g,startPan:k,cursorStyle:l,setCursorStyle:u,handleMouseMove:T,handleMouseUp:P,handleWheel:_}}function gg(o,n,r,s){const l=X.useRef(null),u=X.useRef({x:0,y:0}),m=X.useCallback((x,_,$)=>{const k=o(_,$),T=n.find(P=>P.id===x);T&&(l.current=x,u.current={x:k.x-T.x,y:k.y-T.y},s==null||s("grabbing"))},[o,n,s]),g=X.useCallback((x,_)=>{if(!l.current)return!1;const $=o(x,_),k=l.current;return r(T=>({...T,[k]:{x:$.x-u.current.x,y:$.y-u.current.y}})),!0},[o,r]),h=X.useCallback(()=>{l.current=null,s==null||s("grab")},[s]);return{draggingNode:l,startNodeDrag:m,handleDragMove:g,handleDragEnd:h}}const Fd="wizmat_v1_";function vg(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function yg(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function kn(o,n){const r=Fd+o,[s,l]=X.useState(()=>{try{const m=localStorage.getItem(r);return m===null?n:yg(m,n)}catch{return n}});X.useEffect(()=>{try{localStorage.setItem(r,vg(s))}catch{}},[r,s]);const u=X.useCallback(m=>{l(g=>typeof m=="function"?m(g):m)},[]);return[s,u]}function xg(){try{Object.keys(localStorage).filter(o=>o.startsWith(Fd)).forEach(o=>localStorage.removeItem(o))}catch{}}function bg(o,n,r){var u;const s={...n},l=[o];for(;l.length;){const m=l.shift();s[m]!=="known"&&(s[m]="known",(u=r.prereqs[m])==null||u.forEach(g=>{s[g]!=="known"&&l.push(g)}))}return s}function Ld(o,n,r){var u;const s={...n},l=[o];for(;l.length;){const m=l.shift();s[m]!=="unknown"&&(s[m]="unknown",(u=r.dependents[m])==null||u.forEach(g=>{s[g]!=="unknown"&&l.push(g)}))}return s}function _g(o,n,r,s,l){let u={...s};if(n){for(const m of Object.keys(r))u[m]="known";for(const m of Object.keys(r))u=bg(m,u,l)}else{for(const m of Object.keys(r))u[m]="unknown";for(const m of Object.keys(r))u=Ld(m,u,l)}return u}function wg(o,n,r){return o.filter(s=>n[s.id]!=="known"&&n[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(l=>n[l]==="known")).map(s=>s.id)}function $g(o,n,r,s=.5){var l,u,m;try{const g=1-s,h=o.filter($=>n[$.id]!=="known"&&n[$.id]!=="unknown");if(h.length===0)return null;const x=h.map($=>{const k=Od($.id,n,r),T=Hd($.id,n,r),P=s*k+g*T;return{id:$.id,erv:P||0,ancestorsToReveal:k,descendantsToReveal:T}});return x.sort(($,k)=>k.erv-$.erv),((l=x[0])==null?void 0:l.id)||((u=h[0])==null?void 0:u.id)||null}catch(g){return console.error("pickNextQuestion error:",g),((m=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown")[0])==null?void 0:m.id)||null}}function Od(o,n,r){const s=new Set,l=[...r.prereqs[o]??[]];let u=0;for(;l.length>0;){const m=l.shift();if(s.has(m))continue;s.add(m),n[m]!=="known"&&n[m]!=="unknown"&&u++;const g=r.prereqs[m]??[];for(const h of g)s.has(h)||l.push(h)}return u}function Hd(o,n,r){const s=new Set,l=[...r.dependents[o]??[]];let u=0;for(;l.length>0;){const m=l.shift();if(s.has(m))continue;s.add(m),n[m]!=="known"&&n[m]!=="unknown"&&u++;const g=r.dependents[m]??[];for(const h of g)s.has(h)||l.push(h)}return u}function kg(o,n,r,s=.5){try{const l=o.filter(x=>n[x.id]!=="known"&&n[x.id]!=="unknown");if(l.length===0)return 0;const u=1-s;let m=0;for(const x of l){const _=Od(x.id,n,r),$=Hd(x.id,n,r),k=s*_+u*$;m+=k||0}if(!m||m===0)return l.length;const g=l.length,h=g*g/m;return isNaN(h)?l.length:Math.ceil(h)}catch(l){return console.error("estimateRemainingQuestions error:",l),null}}function zg(o,n,r){const s={...o};for(const[l,u]of Object.entries(n)){const m=s[l]??{alpha:1,beta:1};s[l]={alpha:m.alpha+(r?u:0),beta:m.beta+(r?0:u)}}return s}function Sg(o,n){const r={};for(const s of o){const l=n[s]??{alpha:1,beta:1},u=l.alpha+l.beta,m=l.alpha/u;m>.75&&u>2?r[s]="known":m<.25&&u>2?r[s]="unknown":r[s]="uncertain"}return r}function Tg(o,n,r){const s=new Set,l=new Set(r.map(m=>m.id)),u=[o];for(;u.length;){const m=u.shift();if(!s.has(m)&&l.has(m)){s.add(m);for(const g of n.prereqs[m]??[])s.has(g)||u.push(g)}}return s}function qg(o,n,r,s,l){var g;const u=o.filter(h=>r[h]==="uncertain");if(u.length===0)return null;const m=u.map(h=>{const x=n[h]??{alpha:1,beta:1},_=x.alpha+x.beta,$=x.alpha/_,k=1-$,T=new Set(o);let P=0;const R=[...s.prereqs[h]??[]],D=new Set;for(;R.length;){const W=R.shift();if(!D.has(W)){D.add(W),T.has(W)&&r[W]==="uncertain"&&P++;for(const U of s.prereqs[W]??[])D.has(U)||R.push(U)}}let E=0;const O=[...s.dependents[h]??[]],G=new Set;for(;O.length;){const W=O.shift();if(!G.has(W)){G.add(W),T.has(W)&&r[W]==="uncertain"&&E++;for(const U of s.dependents[W]??[])G.has(U)||O.push(U)}}const B=$*P+k*E;return{id:h,erv:B,strength:_}});return m.sort((h,x)=>Math.abs(h.erv-x.erv)>.01?x.erv-h.erv:h.strength-x.strength),((g=m[0])==null?void 0:g.id)??u[0]}function Mg(o,n){return o.every(r=>n[r]!=="uncertain")}function jg(o,n){return o.every(r=>n[r.id]==="known"||n[r.id]==="unknown")}function Ag(o,n,r){const s=r?`${r}_`:"",[l,u]=kn(`${s}diagMode`,!1),[m,g]=kn(`${s}diagSubMode`,"quick"),[h,x]=kn(`${s}belief`,{}),[_,$]=kn(`${s}targetNode`,null),[k,T]=kn(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[P,R]=kn(`${s}answeredQuestions`,new Set),[D,E]=kn(`${s}betaBeliefs`,{}),[O,G]=kn(`${s}quizNode`,null),B=X.useMemo(()=>{const j=k.correct+k.incorrect;return j===0?.5:(k.correct+.5)/(j+1)},[k]),W=k.questionsAnswered,U=X.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(n)])].map(H=>({id:H})),[o,n]),L=X.useMemo(()=>l&&m==="quick"?wg(U,h,o):[],[l,m,h,o,U]),V=X.useMemo(()=>Object.keys(h).length>0||k.questionsAnswered>0,[h,k]),ne=V?L:[],Se=X.useMemo(()=>l&&m==="quick"?$g(U,h,o,B):null,[l,m,h,o,B,U]),Te=X.useMemo(()=>l&&m==="quick"?kg(U,h,o,B):null,[l,m,h,o,B,U]),me=X.useMemo(()=>l&&m==="quick"&&V&&jg(U,h),[l,m,V,h,U]),be=X.useMemo(()=>!l||m!=="deepdive"||!_?[]:[...Tg(_,o,U)],[l,m,_,o,U]),qe=X.useMemo(()=>m!=="deepdive"?{}:Sg(be,D),[m,be,D]),Ge=X.useMemo(()=>!l||m!=="deepdive"||be.length===0?null:qg(be,D,qe,o),[l,m,be,D,qe,o,U]),Ye=X.useMemo(()=>!l||m!=="deepdive"||be.length===0?!1:Mg(be,qe),[l,m,be,qe]),Fe=X.useCallback((j,H)=>l?m==="deepdive"?be.includes(j)?(qe[j]!=="uncertain"||G(j),!0):!1:h[j]==="unknown"?!0:H?(x(he=>Ld(j,he,o)),G(null),!0):h[j]==="known"?(x(he=>{const we={...he};return delete we[j],we}),G(null),!0):(G(j),!0):!1,[l,m,h,o,be,qe]),se=X.useCallback((j,H,he,we)=>{if(m==="deepdive"){const _e=(he==null?void 0:he.tests)??{[j]:1};E(Me=>zg(Me,_e,H))}else{const _e=(he==null?void 0:he.tests)??{[j]:1};x(Me=>_g(j,H,_e,Me,o))}typeof we=="number"&&R(_e=>new Set([..._e,`${j}:${we}`])),T(_e=>({correct:_e.correct+(H?1:0),incorrect:_e.incorrect+(H?0:1),questionsAnswered:_e.questionsAnswered+1})),G(null)},[m,o]),xe=X.useCallback(()=>{xg(),u(!1),g("quick"),x({}),E({}),G(null),$(null),T({correct:0,incorrect:0,questionsAnswered:0}),R(new Set)},[]),ue=X.useCallback(j=>{g("deepdive"),$(j),E({}),x({}),G(null),T({correct:0,incorrect:0,questionsAnswered:0}),R(new Set),u(!0)},[]);return{diagMode:l,setDiagMode:u,mode:m,setMode:g,quizNode:O,setQuizNode:G,questionsAnswered:W,answeredQuestions:P,setAnsweredQuestions:R,getAnsweredIndices:j=>{const H=[];return P.forEach(he=>{const[we,_e]=he.split(":");we===j&&H.push(parseInt(_e,10))}),H},handleDiagClick:Fe,handleQuizAnswer:se,resetDiagnostic:xe,startDeepDive:ue,targetNode:_,belief:h,frontier:L,visibleFrontier:ne,hasStarted:V,nextSuggestedId:Se,expectedRemaining:Te,pCorrect:B,sessionComplete:me,betaBeliefs:D,subgraphIds:be,ddClassification:qe,ddNextNodeId:Ge,ddComplete:Ye}}const W1=640;function Cg(){const[o,n]=X.useState(()=>typeof window<"u"&&window.innerWidth<W1);return X.useEffect(()=>{const r=window.matchMedia(`(max-width: ${W1-1}px)`),s=l=>n(l.matches);return r.addEventListener("change",s),n(r.matches),()=>r.removeEventListener("change",s)},[]),o}function U1(o){return 6+o.level*2}function Pg({edges:o,nodes:n,highlightedIds:r}){const s=X.useMemo(()=>Object.fromEntries(n.map(l=>[l.id,l])),[n]);return w.jsx("g",{children:o.map(([l,u])=>{const m=s[l],g=s[u];if(!m||!g)return null;const h=(r==null?void 0:r.has(l))&&(r==null?void 0:r.has(u)),x=r&&!h,_=g.x-m.x,$=g.y-m.y,k=Math.sqrt(_*_+$*$)||1,T=U1(g)+3,P=g.x-_/k*T,R=g.y-$/k*T,D=U1(m)+2,E=m.x+_/k*D,O=m.y+$/k*D,G=x?"#0f1825":h?"#4a9eff":"#2a3f5a",B=h?1.8:1,W=x?.15:h?1:.55,U=x?"url(#arrow-dim)":h?"url(#arrow-hi)":"url(#arrow-default)";return w.jsx("line",{x1:E,y1:O,x2:P,y2:R,stroke:G,strokeWidth:B,opacity:W,markerEnd:U},`${l}-${u}`)})})}function Rg(o){return 6+o.level*2}function Eg(o){return o<.4?8:o<.65?13:o<1?18:28}function Dg({nodes:o,filteredIds:n,highlightedIds:r,selected:s,onSelect:l,onHover:u,lang:m,diagMode:g,belief:h,frontier:x,scale:_,scopeColors:$}){return w.jsx("g",{children:o.map(k=>{const T=Rg(k),P=($==null?void 0:$[k.scope])||"#4a9eff",R=n&&!n.has(k.id),D=r==null?void 0:r.has(k.id),E=s===k.id,O=r&&!D||R,G=m==="pl"?k.labelPl:k.label,B=Eg(_??1);let W=P,U=O?.15:.9,L=O?.2:.85,V=null,ne=2;if(g){const Se=h[k.id],Te=x.includes(k.id);U=R?.1:.9,L=R?.15:.9,Se==="known"?(W="#27ae60",V="#2ecc71"):Se==="unknown"?(W="#c0392b",U=R?.1:.5,V="#e74c3c"):Te?(W="#f39c12",V="#f1c40f",ne=3):(W=P,U=R?.1:.35)}return w.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>l(k.id===s?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(E||g&&V)&&w.jsx("circle",{cx:k.x,cy:k.y,r:T+(E?5:4),fill:"none",stroke:E?P:V,strokeWidth:E?2:ne,opacity:E?.5:.9}),w.jsx("circle",{cx:k.x,cy:k.y,r:T,fill:W,fillOpacity:U,stroke:!g&&(D||E)?P:"none",strokeWidth:1.5}),w.jsx("text",{x:k.x,y:k.y+T+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:L,style:{pointerEvents:"none",userSelect:"none"},children:G.length>B?G.slice(0,B-1)+"…":G})]},k.id)})})}function Ng({nodeId:o,nodes:n,adjacency:r,lang:s,SCOPE_COLORS:l,SCOPE_LABELS:u,SECTIONS:m,isMobile:g,onClose:h}){var O,G;const x=n.find(B=>B.id===o);if(!x)return null;const _=(l==null?void 0:l[x.scope])??"#4a9eff",$=s==="pl"?x.labelPl:x.label,k=r.prereqs[o]||[],T=r.dependents[o]||[],P=Object.fromEntries(n.map(B=>[B.id,B])),R=B=>{var W,U;return s==="pl"?(W=P[B])==null?void 0:W.labelPl:(U=P[B])==null?void 0:U.label},D=g?12:10,E=w.jsxs(w.Fragment,{children:[g&&w.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:w.jsx("div",{style:{width:36,height:4,borderRadius:2,background:ae.textFaint}})}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[w.jsx("div",{style:{color:_,fontWeight:700,fontSize:g?16:13,marginBottom:4},children:$}),g&&w.jsx("button",{onClick:h,style:{background:"none",border:"none",color:ae.textDim,fontSize:22,cursor:"pointer",lineHeight:1,padding:"0 4px"},children:"×"})]}),w.jsxs("div",{style:{color:ae.textDim,fontSize:D,marginBottom:12,lineHeight:1.6},children:[(O=m==null?void 0:m[x.section])==null?void 0:O.label," · ",(G=u==null?void 0:u[x.scope])==null?void 0:G[s==="pl"?"pl":"en"]," · ",Z("level",s)," ",x.level]}),k.length>0?w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{color:"#4a9eff",fontSize:D,fontWeight:600,marginBottom:6},children:Z("prerequisites",s)}),k.map(B=>w.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:D,lineHeight:g?2:1.7},children:["← ",R(B)]},B))]}):w.jsx("div",{style:{color:ae.textFaint,fontSize:D,fontStyle:"italic"},children:Z("noPrereqs",s)}),T.length>0?w.jsxs("div",{style:{marginTop:12},children:[w.jsx("div",{style:{color:"#3dc9b0",fontSize:D,fontWeight:600,marginBottom:6},children:Z("enables",s)}),T.map(B=>w.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:D,lineHeight:g?2:1.7},children:["→ ",R(B)]},B))]}):w.jsx("div",{style:{color:ae.textFaint,fontSize:D,fontStyle:"italic",marginTop:10},children:Z("noDependents",s)})]});return g?w.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:`1px solid ${_}40`,borderRadius:"14px 14px 0 0",padding:"16px 16px 32px",zIndex:30,maxHeight:"60vh",overflowY:"auto"},children:E}):w.jsx("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:`1px solid ${_}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:ae.textBody,lineHeight:1.6,zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:E})}class Ht{constructor(n,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=s}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Ht(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Yt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Yt(r,Ht.range(this,n))}}class re{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+n,l,u,m=r&&r.loc;if(m&&m.start<=m.end){var g=m.lexer.input;l=m.start,u=m.end,l===g.length?s+=" at end of input: ":s+=" at position "+(l+1)+": ";var h=g.slice(l,u).replace(/[^]/g,"$&̲"),x;l>15?x="…"+g.slice(l-15,l):x=g.slice(0,l);var _;u+15<g.length?_=g.slice(u,u+15)+"…":_=g.slice(u),s+=x+h+_}var $=new Error(s);return $.name="ParseError",$.__proto__=re.prototype,$.position=l,l!=null&&u!=null&&($.length=u-l),$.rawMessage=n,$}}re.prototype.__proto__=Error.prototype;var Bg=/([A-Z])/g,Ll=o=>o.replace(Bg,"-$1").toLowerCase(),Ig={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Fg=/[&><"']/g,jt=o=>String(o).replace(Fg,n=>Ig[n]),So=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?So(o.body[0]):o:o.type==="font"?So(o.body):o,Lg=new Set(["mathord","textord","atom"]),Vn=o=>Lg.has(So(o).type),Og=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},ns={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Hg(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Ol{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in ns)if(ns.hasOwnProperty(r)){var s=ns[r];this[r]=n[r]!==void 0?s.processor?s.processor(n[r]):n[r]:Hg(s)}}reportNonstrict(n,r,s){var l=this.strict;if(typeof l=="function"&&(l=l(n,r,s)),!(!l||l==="ignore")){if(l===!0||l==="error")throw new re("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),s);l==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,s){var l=this.strict;if(typeof l=="function")try{l=l(n,r,s)}catch{l="error"}return!l||l==="ignore"?!1:l===!0||l==="error"?!0:l==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=Og(n.url);if(r==null)return!1;n.protocol=r}var s=typeof this.trust=="function"?this.trust(n):this.trust;return!!s}}class $r{constructor(n,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=s}sup(){return Sn[Gg[this.id]]}sub(){return Sn[Wg[this.id]]}fracNum(){return Sn[Ug[this.id]]}fracDen(){return Sn[Vg[this.id]]}cramp(){return Sn[Kg[this.id]]}text(){return Sn[Yg[this.id]]}isTight(){return this.size>=2}}var Hl=0,os=1,Mi=2,Wn=3,Mo=4,an=5,ji=6,Et=7,Sn=[new $r(Hl,0,!1),new $r(os,0,!0),new $r(Mi,1,!1),new $r(Wn,1,!0),new $r(Mo,2,!1),new $r(an,2,!0),new $r(ji,3,!1),new $r(Et,3,!0)],Gg=[Mo,an,Mo,an,ji,Et,ji,Et],Wg=[an,an,an,an,Et,Et,Et,Et],Ug=[Mi,Wn,Mo,an,ji,Et,ji,Et],Vg=[Wn,Wn,an,an,Et,Et,Et,Et],Kg=[os,os,Wn,Wn,an,an,Et,Et],Yg=[Hl,os,Mi,Wn,Mi,Wn,Mi,Wn],Ce={DISPLAY:Sn[Hl],TEXT:Sn[Mi],SCRIPT:Sn[Mo],SCRIPTSCRIPT:Sn[ji]},Tl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Qg(o){for(var n=0;n<Tl.length;n++)for(var r=Tl[n],s=0;s<r.blocks.length;s++){var l=r.blocks[s];if(o>=l[0]&&o<=l[1])return r.name}return null}var rs=[];Tl.forEach(o=>o.blocks.forEach(n=>rs.push(...n)));function Gd(o){for(var n=0;n<rs.length;n+=2)if(o>=rs[n]&&o<=rs[n+1])return!0;return!1}var qi=80,Xg=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},Zg=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},Jg=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},ev=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},tv=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},nv=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},rv=function(n,r,s){var l=s-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+l+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},iv=function(n,r,s){r=1e3*r;var l="";switch(n){case"sqrtMain":l=Xg(r,qi);break;case"sqrtSize1":l=Zg(r,qi);break;case"sqrtSize2":l=Jg(r,qi);break;case"sqrtSize3":l=ev(r,qi);break;case"sqrtSize4":l=tv(r,qi);break;case"sqrtTall":l=rv(r,qi,s)}return l},ov=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},V1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},sv=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Ao{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var Tn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},V0={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},K1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function av(o,n){Tn[o]=n}function Gl(o,n,r){if(!Tn[n])throw new Error("Font metrics not found for font: "+n+".");var s=o.charCodeAt(0),l=Tn[n][s];if(!l&&o[0]in K1&&(s=K1[o[0]].charCodeAt(0),l=Tn[n][s]),!l&&r==="text"&&Gd(s)&&(l=Tn[n][77]),l)return{depth:l[0],height:l[1],italic:l[2],skew:l[3],width:l[4]}}var dl={};function lv(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!dl[n]){var r=dl[n]={cssEmPerMu:V0.quad[n]/18};for(var s in V0)V0.hasOwnProperty(s)&&(r[s]=V0[s][n])}return dl[n]}var uv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Y1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Q1=function(n,r){return r.size<2?n:uv[n-1][r.size-1]};class Gn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Gn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Y1[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return new Gn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:Q1(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Y1[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=Q1(Gn.BASESIZE,n);return this.size===r&&this.textSize===Gn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Gn.BASESIZE?["sizing","reset-size"+this.size,"size"+Gn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=lv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Gn.BASESIZE=6;var ql={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},cv={ex:!0,em:!0,mu:!0},Wd=function(n){return typeof n!="string"&&(n=n.unit),n in ql||n in cv||n==="ex"},st=function(n,r){var s;if(n.unit in ql)s=ql[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var l;if(r.style.isTight()?l=r.havingStyle(r.style.text()):l=r,n.unit==="ex")s=l.fontMetrics().xHeight;else if(n.unit==="em")s=l.fontMetrics().quad;else throw new re("Invalid unit: '"+n.unit+"'");l!==r&&(s*=l.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*s,r.maxSize)},le=function(n){return+n.toFixed(4)+"em"},Sr=function(n){return n.filter(r=>r).join(" ")},Ud=function(n,r,s){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var l=r.getColor();l&&(this.style.color=l)}},Vd=function(n){var r=document.createElement(n);r.className=Sr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var l in this.attributes)this.attributes.hasOwnProperty(l)&&r.setAttribute(l,this.attributes[l]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},dv=/[\s"'>/=\x00-\x1f]/,Kd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+jt(Sr(this.classes))+'"');var s="";for(var l in this.style)this.style.hasOwnProperty(l)&&(s+=Ll(l)+":"+this.style[l]+";");s&&(r+=' style="'+jt(s)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(dv.test(u))throw new re("Invalid attribute name '"+u+"'");r+=" "+u+'="'+jt(this.attributes[u])+'"'}r+=">";for(var m=0;m<this.children.length;m++)r+=this.children[m].toMarkup();return r+="</"+n+">",r};class Co{constructor(n,r,s,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Ud.call(this,n,s,l),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Vd.call(this,"span")}toMarkup(){return Kd.call(this,"span")}}class Wl{constructor(n,r,s,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Ud.call(this,r,l),this.children=s||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Vd.call(this,"a")}toMarkup(){return Kd.call(this,"a")}}class mv{constructor(n,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=s}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+jt(this.src)+'"'+(' alt="'+jt(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=Ll(s)+":"+this.style[s]+";");return r&&(n+=' style="'+jt(r)+'"'),n+="'/>",n}}var fv={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class ln{constructor(n,r,s,l,u,m,g,h){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=s||0,this.italic=l||0,this.skew=u||0,this.width=m||0,this.classes=g||[],this.style=h||{},this.maxFontSize=0;var x=Qg(this.text.charCodeAt(0));x&&this.classes.push(x+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=fv[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=le(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Sr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=jt(Sr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var l in this.style)this.style.hasOwnProperty(l)&&(s+=Ll(l)+":"+this.style[l]+";");s&&(n=!0,r+=' style="'+jt(s)+'"');var u=jt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Un{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var l=0;l<this.children.length;l++)r.appendChild(this.children[l].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+jt(this.attributes[r])+'"');n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</svg>",n}}class Tr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",V1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+jt(this.alternate)+'"/>':'<path d="'+jt(V1[this.pathName])+'"/>'}}class Ml{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+jt(this.attributes[r])+'"');return n+="/>",n}}function X1(o){if(o instanceof ln)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function pv(o){if(o instanceof Co)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var hv={bin:1,close:1,inner:1,open:1,punct:1,rel:1},gv={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ze={math:{},text:{}};function d(o,n,r,s,l,u){Ze[o][l]={font:n,group:r,replace:s},u&&s&&(Ze[o][s]=Ze[o][l])}var p="math",Y="text",v="main",S="ams",nt="accent-token",fe="bin",Dt="close",Pi="inner",ze="mathord",ht="op-token",Qt="open",ds="punct",q="rel",Kn="spacing",A="textord";d(p,v,q,"≡","\\equiv",!0);d(p,v,q,"≺","\\prec",!0);d(p,v,q,"≻","\\succ",!0);d(p,v,q,"∼","\\sim",!0);d(p,v,q,"⊥","\\perp");d(p,v,q,"⪯","\\preceq",!0);d(p,v,q,"⪰","\\succeq",!0);d(p,v,q,"≃","\\simeq",!0);d(p,v,q,"∣","\\mid",!0);d(p,v,q,"≪","\\ll",!0);d(p,v,q,"≫","\\gg",!0);d(p,v,q,"≍","\\asymp",!0);d(p,v,q,"∥","\\parallel");d(p,v,q,"⋈","\\bowtie",!0);d(p,v,q,"⌣","\\smile",!0);d(p,v,q,"⊑","\\sqsubseteq",!0);d(p,v,q,"⊒","\\sqsupseteq",!0);d(p,v,q,"≐","\\doteq",!0);d(p,v,q,"⌢","\\frown",!0);d(p,v,q,"∋","\\ni",!0);d(p,v,q,"∝","\\propto",!0);d(p,v,q,"⊢","\\vdash",!0);d(p,v,q,"⊣","\\dashv",!0);d(p,v,q,"∋","\\owns");d(p,v,ds,".","\\ldotp");d(p,v,ds,"⋅","\\cdotp");d(p,v,A,"#","\\#");d(Y,v,A,"#","\\#");d(p,v,A,"&","\\&");d(Y,v,A,"&","\\&");d(p,v,A,"ℵ","\\aleph",!0);d(p,v,A,"∀","\\forall",!0);d(p,v,A,"ℏ","\\hbar",!0);d(p,v,A,"∃","\\exists",!0);d(p,v,A,"∇","\\nabla",!0);d(p,v,A,"♭","\\flat",!0);d(p,v,A,"ℓ","\\ell",!0);d(p,v,A,"♮","\\natural",!0);d(p,v,A,"♣","\\clubsuit",!0);d(p,v,A,"℘","\\wp",!0);d(p,v,A,"♯","\\sharp",!0);d(p,v,A,"♢","\\diamondsuit",!0);d(p,v,A,"ℜ","\\Re",!0);d(p,v,A,"♡","\\heartsuit",!0);d(p,v,A,"ℑ","\\Im",!0);d(p,v,A,"♠","\\spadesuit",!0);d(p,v,A,"§","\\S",!0);d(Y,v,A,"§","\\S");d(p,v,A,"¶","\\P",!0);d(Y,v,A,"¶","\\P");d(p,v,A,"†","\\dag");d(Y,v,A,"†","\\dag");d(Y,v,A,"†","\\textdagger");d(p,v,A,"‡","\\ddag");d(Y,v,A,"‡","\\ddag");d(Y,v,A,"‡","\\textdaggerdbl");d(p,v,Dt,"⎱","\\rmoustache",!0);d(p,v,Qt,"⎰","\\lmoustache",!0);d(p,v,Dt,"⟯","\\rgroup",!0);d(p,v,Qt,"⟮","\\lgroup",!0);d(p,v,fe,"∓","\\mp",!0);d(p,v,fe,"⊖","\\ominus",!0);d(p,v,fe,"⊎","\\uplus",!0);d(p,v,fe,"⊓","\\sqcap",!0);d(p,v,fe,"∗","\\ast");d(p,v,fe,"⊔","\\sqcup",!0);d(p,v,fe,"◯","\\bigcirc",!0);d(p,v,fe,"∙","\\bullet",!0);d(p,v,fe,"‡","\\ddagger");d(p,v,fe,"≀","\\wr",!0);d(p,v,fe,"⨿","\\amalg");d(p,v,fe,"&","\\And");d(p,v,q,"⟵","\\longleftarrow",!0);d(p,v,q,"⇐","\\Leftarrow",!0);d(p,v,q,"⟸","\\Longleftarrow",!0);d(p,v,q,"⟶","\\longrightarrow",!0);d(p,v,q,"⇒","\\Rightarrow",!0);d(p,v,q,"⟹","\\Longrightarrow",!0);d(p,v,q,"↔","\\leftrightarrow",!0);d(p,v,q,"⟷","\\longleftrightarrow",!0);d(p,v,q,"⇔","\\Leftrightarrow",!0);d(p,v,q,"⟺","\\Longleftrightarrow",!0);d(p,v,q,"↦","\\mapsto",!0);d(p,v,q,"⟼","\\longmapsto",!0);d(p,v,q,"↗","\\nearrow",!0);d(p,v,q,"↩","\\hookleftarrow",!0);d(p,v,q,"↪","\\hookrightarrow",!0);d(p,v,q,"↘","\\searrow",!0);d(p,v,q,"↼","\\leftharpoonup",!0);d(p,v,q,"⇀","\\rightharpoonup",!0);d(p,v,q,"↙","\\swarrow",!0);d(p,v,q,"↽","\\leftharpoondown",!0);d(p,v,q,"⇁","\\rightharpoondown",!0);d(p,v,q,"↖","\\nwarrow",!0);d(p,v,q,"⇌","\\rightleftharpoons",!0);d(p,S,q,"≮","\\nless",!0);d(p,S,q,"","\\@nleqslant");d(p,S,q,"","\\@nleqq");d(p,S,q,"⪇","\\lneq",!0);d(p,S,q,"≨","\\lneqq",!0);d(p,S,q,"","\\@lvertneqq");d(p,S,q,"⋦","\\lnsim",!0);d(p,S,q,"⪉","\\lnapprox",!0);d(p,S,q,"⊀","\\nprec",!0);d(p,S,q,"⋠","\\npreceq",!0);d(p,S,q,"⋨","\\precnsim",!0);d(p,S,q,"⪹","\\precnapprox",!0);d(p,S,q,"≁","\\nsim",!0);d(p,S,q,"","\\@nshortmid");d(p,S,q,"∤","\\nmid",!0);d(p,S,q,"⊬","\\nvdash",!0);d(p,S,q,"⊭","\\nvDash",!0);d(p,S,q,"⋪","\\ntriangleleft");d(p,S,q,"⋬","\\ntrianglelefteq",!0);d(p,S,q,"⊊","\\subsetneq",!0);d(p,S,q,"","\\@varsubsetneq");d(p,S,q,"⫋","\\subsetneqq",!0);d(p,S,q,"","\\@varsubsetneqq");d(p,S,q,"≯","\\ngtr",!0);d(p,S,q,"","\\@ngeqslant");d(p,S,q,"","\\@ngeqq");d(p,S,q,"⪈","\\gneq",!0);d(p,S,q,"≩","\\gneqq",!0);d(p,S,q,"","\\@gvertneqq");d(p,S,q,"⋧","\\gnsim",!0);d(p,S,q,"⪊","\\gnapprox",!0);d(p,S,q,"⊁","\\nsucc",!0);d(p,S,q,"⋡","\\nsucceq",!0);d(p,S,q,"⋩","\\succnsim",!0);d(p,S,q,"⪺","\\succnapprox",!0);d(p,S,q,"≆","\\ncong",!0);d(p,S,q,"","\\@nshortparallel");d(p,S,q,"∦","\\nparallel",!0);d(p,S,q,"⊯","\\nVDash",!0);d(p,S,q,"⋫","\\ntriangleright");d(p,S,q,"⋭","\\ntrianglerighteq",!0);d(p,S,q,"","\\@nsupseteqq");d(p,S,q,"⊋","\\supsetneq",!0);d(p,S,q,"","\\@varsupsetneq");d(p,S,q,"⫌","\\supsetneqq",!0);d(p,S,q,"","\\@varsupsetneqq");d(p,S,q,"⊮","\\nVdash",!0);d(p,S,q,"⪵","\\precneqq",!0);d(p,S,q,"⪶","\\succneqq",!0);d(p,S,q,"","\\@nsubseteqq");d(p,S,fe,"⊴","\\unlhd");d(p,S,fe,"⊵","\\unrhd");d(p,S,q,"↚","\\nleftarrow",!0);d(p,S,q,"↛","\\nrightarrow",!0);d(p,S,q,"⇍","\\nLeftarrow",!0);d(p,S,q,"⇏","\\nRightarrow",!0);d(p,S,q,"↮","\\nleftrightarrow",!0);d(p,S,q,"⇎","\\nLeftrightarrow",!0);d(p,S,q,"△","\\vartriangle");d(p,S,A,"ℏ","\\hslash");d(p,S,A,"▽","\\triangledown");d(p,S,A,"◊","\\lozenge");d(p,S,A,"Ⓢ","\\circledS");d(p,S,A,"®","\\circledR");d(Y,S,A,"®","\\circledR");d(p,S,A,"∡","\\measuredangle",!0);d(p,S,A,"∄","\\nexists");d(p,S,A,"℧","\\mho");d(p,S,A,"Ⅎ","\\Finv",!0);d(p,S,A,"⅁","\\Game",!0);d(p,S,A,"‵","\\backprime");d(p,S,A,"▲","\\blacktriangle");d(p,S,A,"▼","\\blacktriangledown");d(p,S,A,"■","\\blacksquare");d(p,S,A,"⧫","\\blacklozenge");d(p,S,A,"★","\\bigstar");d(p,S,A,"∢","\\sphericalangle",!0);d(p,S,A,"∁","\\complement",!0);d(p,S,A,"ð","\\eth",!0);d(Y,v,A,"ð","ð");d(p,S,A,"╱","\\diagup");d(p,S,A,"╲","\\diagdown");d(p,S,A,"□","\\square");d(p,S,A,"□","\\Box");d(p,S,A,"◊","\\Diamond");d(p,S,A,"¥","\\yen",!0);d(Y,S,A,"¥","\\yen",!0);d(p,S,A,"✓","\\checkmark",!0);d(Y,S,A,"✓","\\checkmark");d(p,S,A,"ℶ","\\beth",!0);d(p,S,A,"ℸ","\\daleth",!0);d(p,S,A,"ℷ","\\gimel",!0);d(p,S,A,"ϝ","\\digamma",!0);d(p,S,A,"ϰ","\\varkappa");d(p,S,Qt,"┌","\\@ulcorner",!0);d(p,S,Dt,"┐","\\@urcorner",!0);d(p,S,Qt,"└","\\@llcorner",!0);d(p,S,Dt,"┘","\\@lrcorner",!0);d(p,S,q,"≦","\\leqq",!0);d(p,S,q,"⩽","\\leqslant",!0);d(p,S,q,"⪕","\\eqslantless",!0);d(p,S,q,"≲","\\lesssim",!0);d(p,S,q,"⪅","\\lessapprox",!0);d(p,S,q,"≊","\\approxeq",!0);d(p,S,fe,"⋖","\\lessdot");d(p,S,q,"⋘","\\lll",!0);d(p,S,q,"≶","\\lessgtr",!0);d(p,S,q,"⋚","\\lesseqgtr",!0);d(p,S,q,"⪋","\\lesseqqgtr",!0);d(p,S,q,"≑","\\doteqdot");d(p,S,q,"≓","\\risingdotseq",!0);d(p,S,q,"≒","\\fallingdotseq",!0);d(p,S,q,"∽","\\backsim",!0);d(p,S,q,"⋍","\\backsimeq",!0);d(p,S,q,"⫅","\\subseteqq",!0);d(p,S,q,"⋐","\\Subset",!0);d(p,S,q,"⊏","\\sqsubset",!0);d(p,S,q,"≼","\\preccurlyeq",!0);d(p,S,q,"⋞","\\curlyeqprec",!0);d(p,S,q,"≾","\\precsim",!0);d(p,S,q,"⪷","\\precapprox",!0);d(p,S,q,"⊲","\\vartriangleleft");d(p,S,q,"⊴","\\trianglelefteq");d(p,S,q,"⊨","\\vDash",!0);d(p,S,q,"⊪","\\Vvdash",!0);d(p,S,q,"⌣","\\smallsmile");d(p,S,q,"⌢","\\smallfrown");d(p,S,q,"≏","\\bumpeq",!0);d(p,S,q,"≎","\\Bumpeq",!0);d(p,S,q,"≧","\\geqq",!0);d(p,S,q,"⩾","\\geqslant",!0);d(p,S,q,"⪖","\\eqslantgtr",!0);d(p,S,q,"≳","\\gtrsim",!0);d(p,S,q,"⪆","\\gtrapprox",!0);d(p,S,fe,"⋗","\\gtrdot");d(p,S,q,"⋙","\\ggg",!0);d(p,S,q,"≷","\\gtrless",!0);d(p,S,q,"⋛","\\gtreqless",!0);d(p,S,q,"⪌","\\gtreqqless",!0);d(p,S,q,"≖","\\eqcirc",!0);d(p,S,q,"≗","\\circeq",!0);d(p,S,q,"≜","\\triangleq",!0);d(p,S,q,"∼","\\thicksim");d(p,S,q,"≈","\\thickapprox");d(p,S,q,"⫆","\\supseteqq",!0);d(p,S,q,"⋑","\\Supset",!0);d(p,S,q,"⊐","\\sqsupset",!0);d(p,S,q,"≽","\\succcurlyeq",!0);d(p,S,q,"⋟","\\curlyeqsucc",!0);d(p,S,q,"≿","\\succsim",!0);d(p,S,q,"⪸","\\succapprox",!0);d(p,S,q,"⊳","\\vartriangleright");d(p,S,q,"⊵","\\trianglerighteq");d(p,S,q,"⊩","\\Vdash",!0);d(p,S,q,"∣","\\shortmid");d(p,S,q,"∥","\\shortparallel");d(p,S,q,"≬","\\between",!0);d(p,S,q,"⋔","\\pitchfork",!0);d(p,S,q,"∝","\\varpropto");d(p,S,q,"◀","\\blacktriangleleft");d(p,S,q,"∴","\\therefore",!0);d(p,S,q,"∍","\\backepsilon");d(p,S,q,"▶","\\blacktriangleright");d(p,S,q,"∵","\\because",!0);d(p,S,q,"⋘","\\llless");d(p,S,q,"⋙","\\gggtr");d(p,S,fe,"⊲","\\lhd");d(p,S,fe,"⊳","\\rhd");d(p,S,q,"≂","\\eqsim",!0);d(p,v,q,"⋈","\\Join");d(p,S,q,"≑","\\Doteq",!0);d(p,S,fe,"∔","\\dotplus",!0);d(p,S,fe,"∖","\\smallsetminus");d(p,S,fe,"⋒","\\Cap",!0);d(p,S,fe,"⋓","\\Cup",!0);d(p,S,fe,"⩞","\\doublebarwedge",!0);d(p,S,fe,"⊟","\\boxminus",!0);d(p,S,fe,"⊞","\\boxplus",!0);d(p,S,fe,"⋇","\\divideontimes",!0);d(p,S,fe,"⋉","\\ltimes",!0);d(p,S,fe,"⋊","\\rtimes",!0);d(p,S,fe,"⋋","\\leftthreetimes",!0);d(p,S,fe,"⋌","\\rightthreetimes",!0);d(p,S,fe,"⋏","\\curlywedge",!0);d(p,S,fe,"⋎","\\curlyvee",!0);d(p,S,fe,"⊝","\\circleddash",!0);d(p,S,fe,"⊛","\\circledast",!0);d(p,S,fe,"⋅","\\centerdot");d(p,S,fe,"⊺","\\intercal",!0);d(p,S,fe,"⋒","\\doublecap");d(p,S,fe,"⋓","\\doublecup");d(p,S,fe,"⊠","\\boxtimes",!0);d(p,S,q,"⇢","\\dashrightarrow",!0);d(p,S,q,"⇠","\\dashleftarrow",!0);d(p,S,q,"⇇","\\leftleftarrows",!0);d(p,S,q,"⇆","\\leftrightarrows",!0);d(p,S,q,"⇚","\\Lleftarrow",!0);d(p,S,q,"↞","\\twoheadleftarrow",!0);d(p,S,q,"↢","\\leftarrowtail",!0);d(p,S,q,"↫","\\looparrowleft",!0);d(p,S,q,"⇋","\\leftrightharpoons",!0);d(p,S,q,"↶","\\curvearrowleft",!0);d(p,S,q,"↺","\\circlearrowleft",!0);d(p,S,q,"↰","\\Lsh",!0);d(p,S,q,"⇈","\\upuparrows",!0);d(p,S,q,"↿","\\upharpoonleft",!0);d(p,S,q,"⇃","\\downharpoonleft",!0);d(p,v,q,"⊶","\\origof",!0);d(p,v,q,"⊷","\\imageof",!0);d(p,S,q,"⊸","\\multimap",!0);d(p,S,q,"↭","\\leftrightsquigarrow",!0);d(p,S,q,"⇉","\\rightrightarrows",!0);d(p,S,q,"⇄","\\rightleftarrows",!0);d(p,S,q,"↠","\\twoheadrightarrow",!0);d(p,S,q,"↣","\\rightarrowtail",!0);d(p,S,q,"↬","\\looparrowright",!0);d(p,S,q,"↷","\\curvearrowright",!0);d(p,S,q,"↻","\\circlearrowright",!0);d(p,S,q,"↱","\\Rsh",!0);d(p,S,q,"⇊","\\downdownarrows",!0);d(p,S,q,"↾","\\upharpoonright",!0);d(p,S,q,"⇂","\\downharpoonright",!0);d(p,S,q,"⇝","\\rightsquigarrow",!0);d(p,S,q,"⇝","\\leadsto");d(p,S,q,"⇛","\\Rrightarrow",!0);d(p,S,q,"↾","\\restriction");d(p,v,A,"‘","`");d(p,v,A,"$","\\$");d(Y,v,A,"$","\\$");d(Y,v,A,"$","\\textdollar");d(p,v,A,"%","\\%");d(Y,v,A,"%","\\%");d(p,v,A,"_","\\_");d(Y,v,A,"_","\\_");d(Y,v,A,"_","\\textunderscore");d(p,v,A,"∠","\\angle",!0);d(p,v,A,"∞","\\infty",!0);d(p,v,A,"′","\\prime");d(p,v,A,"△","\\triangle");d(p,v,A,"Γ","\\Gamma",!0);d(p,v,A,"Δ","\\Delta",!0);d(p,v,A,"Θ","\\Theta",!0);d(p,v,A,"Λ","\\Lambda",!0);d(p,v,A,"Ξ","\\Xi",!0);d(p,v,A,"Π","\\Pi",!0);d(p,v,A,"Σ","\\Sigma",!0);d(p,v,A,"Υ","\\Upsilon",!0);d(p,v,A,"Φ","\\Phi",!0);d(p,v,A,"Ψ","\\Psi",!0);d(p,v,A,"Ω","\\Omega",!0);d(p,v,A,"A","Α");d(p,v,A,"B","Β");d(p,v,A,"E","Ε");d(p,v,A,"Z","Ζ");d(p,v,A,"H","Η");d(p,v,A,"I","Ι");d(p,v,A,"K","Κ");d(p,v,A,"M","Μ");d(p,v,A,"N","Ν");d(p,v,A,"O","Ο");d(p,v,A,"P","Ρ");d(p,v,A,"T","Τ");d(p,v,A,"X","Χ");d(p,v,A,"¬","\\neg",!0);d(p,v,A,"¬","\\lnot");d(p,v,A,"⊤","\\top");d(p,v,A,"⊥","\\bot");d(p,v,A,"∅","\\emptyset");d(p,S,A,"∅","\\varnothing");d(p,v,ze,"α","\\alpha",!0);d(p,v,ze,"β","\\beta",!0);d(p,v,ze,"γ","\\gamma",!0);d(p,v,ze,"δ","\\delta",!0);d(p,v,ze,"ϵ","\\epsilon",!0);d(p,v,ze,"ζ","\\zeta",!0);d(p,v,ze,"η","\\eta",!0);d(p,v,ze,"θ","\\theta",!0);d(p,v,ze,"ι","\\iota",!0);d(p,v,ze,"κ","\\kappa",!0);d(p,v,ze,"λ","\\lambda",!0);d(p,v,ze,"μ","\\mu",!0);d(p,v,ze,"ν","\\nu",!0);d(p,v,ze,"ξ","\\xi",!0);d(p,v,ze,"ο","\\omicron",!0);d(p,v,ze,"π","\\pi",!0);d(p,v,ze,"ρ","\\rho",!0);d(p,v,ze,"σ","\\sigma",!0);d(p,v,ze,"τ","\\tau",!0);d(p,v,ze,"υ","\\upsilon",!0);d(p,v,ze,"ϕ","\\phi",!0);d(p,v,ze,"χ","\\chi",!0);d(p,v,ze,"ψ","\\psi",!0);d(p,v,ze,"ω","\\omega",!0);d(p,v,ze,"ε","\\varepsilon",!0);d(p,v,ze,"ϑ","\\vartheta",!0);d(p,v,ze,"ϖ","\\varpi",!0);d(p,v,ze,"ϱ","\\varrho",!0);d(p,v,ze,"ς","\\varsigma",!0);d(p,v,ze,"φ","\\varphi",!0);d(p,v,fe,"∗","*",!0);d(p,v,fe,"+","+");d(p,v,fe,"−","-",!0);d(p,v,fe,"⋅","\\cdot",!0);d(p,v,fe,"∘","\\circ",!0);d(p,v,fe,"÷","\\div",!0);d(p,v,fe,"±","\\pm",!0);d(p,v,fe,"×","\\times",!0);d(p,v,fe,"∩","\\cap",!0);d(p,v,fe,"∪","\\cup",!0);d(p,v,fe,"∖","\\setminus",!0);d(p,v,fe,"∧","\\land");d(p,v,fe,"∨","\\lor");d(p,v,fe,"∧","\\wedge",!0);d(p,v,fe,"∨","\\vee",!0);d(p,v,A,"√","\\surd");d(p,v,Qt,"⟨","\\langle",!0);d(p,v,Qt,"∣","\\lvert");d(p,v,Qt,"∥","\\lVert");d(p,v,Dt,"?","?");d(p,v,Dt,"!","!");d(p,v,Dt,"⟩","\\rangle",!0);d(p,v,Dt,"∣","\\rvert");d(p,v,Dt,"∥","\\rVert");d(p,v,q,"=","=");d(p,v,q,":",":");d(p,v,q,"≈","\\approx",!0);d(p,v,q,"≅","\\cong",!0);d(p,v,q,"≥","\\ge");d(p,v,q,"≥","\\geq",!0);d(p,v,q,"←","\\gets");d(p,v,q,">","\\gt",!0);d(p,v,q,"∈","\\in",!0);d(p,v,q,"","\\@not");d(p,v,q,"⊂","\\subset",!0);d(p,v,q,"⊃","\\supset",!0);d(p,v,q,"⊆","\\subseteq",!0);d(p,v,q,"⊇","\\supseteq",!0);d(p,S,q,"⊈","\\nsubseteq",!0);d(p,S,q,"⊉","\\nsupseteq",!0);d(p,v,q,"⊨","\\models");d(p,v,q,"←","\\leftarrow",!0);d(p,v,q,"≤","\\le");d(p,v,q,"≤","\\leq",!0);d(p,v,q,"<","\\lt",!0);d(p,v,q,"→","\\rightarrow",!0);d(p,v,q,"→","\\to");d(p,S,q,"≱","\\ngeq",!0);d(p,S,q,"≰","\\nleq",!0);d(p,v,Kn," ","\\ ");d(p,v,Kn," ","\\space");d(p,v,Kn," ","\\nobreakspace");d(Y,v,Kn," ","\\ ");d(Y,v,Kn," "," ");d(Y,v,Kn," ","\\space");d(Y,v,Kn," ","\\nobreakspace");d(p,v,Kn,null,"\\nobreak");d(p,v,Kn,null,"\\allowbreak");d(p,v,ds,",",",");d(p,v,ds,";",";");d(p,S,fe,"⊼","\\barwedge",!0);d(p,S,fe,"⊻","\\veebar",!0);d(p,v,fe,"⊙","\\odot",!0);d(p,v,fe,"⊕","\\oplus",!0);d(p,v,fe,"⊗","\\otimes",!0);d(p,v,A,"∂","\\partial",!0);d(p,v,fe,"⊘","\\oslash",!0);d(p,S,fe,"⊚","\\circledcirc",!0);d(p,S,fe,"⊡","\\boxdot",!0);d(p,v,fe,"△","\\bigtriangleup");d(p,v,fe,"▽","\\bigtriangledown");d(p,v,fe,"†","\\dagger");d(p,v,fe,"⋄","\\diamond");d(p,v,fe,"⋆","\\star");d(p,v,fe,"◃","\\triangleleft");d(p,v,fe,"▹","\\triangleright");d(p,v,Qt,"{","\\{");d(Y,v,A,"{","\\{");d(Y,v,A,"{","\\textbraceleft");d(p,v,Dt,"}","\\}");d(Y,v,A,"}","\\}");d(Y,v,A,"}","\\textbraceright");d(p,v,Qt,"{","\\lbrace");d(p,v,Dt,"}","\\rbrace");d(p,v,Qt,"[","\\lbrack",!0);d(Y,v,A,"[","\\lbrack",!0);d(p,v,Dt,"]","\\rbrack",!0);d(Y,v,A,"]","\\rbrack",!0);d(p,v,Qt,"(","\\lparen",!0);d(p,v,Dt,")","\\rparen",!0);d(Y,v,A,"<","\\textless",!0);d(Y,v,A,">","\\textgreater",!0);d(p,v,Qt,"⌊","\\lfloor",!0);d(p,v,Dt,"⌋","\\rfloor",!0);d(p,v,Qt,"⌈","\\lceil",!0);d(p,v,Dt,"⌉","\\rceil",!0);d(p,v,A,"\\","\\backslash");d(p,v,A,"∣","|");d(p,v,A,"∣","\\vert");d(Y,v,A,"|","\\textbar",!0);d(p,v,A,"∥","\\|");d(p,v,A,"∥","\\Vert");d(Y,v,A,"∥","\\textbardbl");d(Y,v,A,"~","\\textasciitilde");d(Y,v,A,"\\","\\textbackslash");d(Y,v,A,"^","\\textasciicircum");d(p,v,q,"↑","\\uparrow",!0);d(p,v,q,"⇑","\\Uparrow",!0);d(p,v,q,"↓","\\downarrow",!0);d(p,v,q,"⇓","\\Downarrow",!0);d(p,v,q,"↕","\\updownarrow",!0);d(p,v,q,"⇕","\\Updownarrow",!0);d(p,v,ht,"∐","\\coprod");d(p,v,ht,"⋁","\\bigvee");d(p,v,ht,"⋀","\\bigwedge");d(p,v,ht,"⨄","\\biguplus");d(p,v,ht,"⋂","\\bigcap");d(p,v,ht,"⋃","\\bigcup");d(p,v,ht,"∫","\\int");d(p,v,ht,"∫","\\intop");d(p,v,ht,"∬","\\iint");d(p,v,ht,"∭","\\iiint");d(p,v,ht,"∏","\\prod");d(p,v,ht,"∑","\\sum");d(p,v,ht,"⨂","\\bigotimes");d(p,v,ht,"⨁","\\bigoplus");d(p,v,ht,"⨀","\\bigodot");d(p,v,ht,"∮","\\oint");d(p,v,ht,"∯","\\oiint");d(p,v,ht,"∰","\\oiiint");d(p,v,ht,"⨆","\\bigsqcup");d(p,v,ht,"∫","\\smallint");d(Y,v,Pi,"…","\\textellipsis");d(p,v,Pi,"…","\\mathellipsis");d(Y,v,Pi,"…","\\ldots",!0);d(p,v,Pi,"…","\\ldots",!0);d(p,v,Pi,"⋯","\\@cdots",!0);d(p,v,Pi,"⋱","\\ddots",!0);d(p,v,A,"⋮","\\varvdots");d(Y,v,A,"⋮","\\varvdots");d(p,v,nt,"ˊ","\\acute");d(p,v,nt,"ˋ","\\grave");d(p,v,nt,"¨","\\ddot");d(p,v,nt,"~","\\tilde");d(p,v,nt,"ˉ","\\bar");d(p,v,nt,"˘","\\breve");d(p,v,nt,"ˇ","\\check");d(p,v,nt,"^","\\hat");d(p,v,nt,"⃗","\\vec");d(p,v,nt,"˙","\\dot");d(p,v,nt,"˚","\\mathring");d(p,v,ze,"","\\@imath");d(p,v,ze,"","\\@jmath");d(p,v,A,"ı","ı");d(p,v,A,"ȷ","ȷ");d(Y,v,A,"ı","\\i",!0);d(Y,v,A,"ȷ","\\j",!0);d(Y,v,A,"ß","\\ss",!0);d(Y,v,A,"æ","\\ae",!0);d(Y,v,A,"œ","\\oe",!0);d(Y,v,A,"ø","\\o",!0);d(Y,v,A,"Æ","\\AE",!0);d(Y,v,A,"Œ","\\OE",!0);d(Y,v,A,"Ø","\\O",!0);d(Y,v,nt,"ˊ","\\'");d(Y,v,nt,"ˋ","\\`");d(Y,v,nt,"ˆ","\\^");d(Y,v,nt,"˜","\\~");d(Y,v,nt,"ˉ","\\=");d(Y,v,nt,"˘","\\u");d(Y,v,nt,"˙","\\.");d(Y,v,nt,"¸","\\c");d(Y,v,nt,"˚","\\r");d(Y,v,nt,"ˇ","\\v");d(Y,v,nt,"¨",'\\"');d(Y,v,nt,"˝","\\H");d(Y,v,nt,"◯","\\textcircled");var Yd={"--":!0,"---":!0,"``":!0,"''":!0};d(Y,v,A,"–","--",!0);d(Y,v,A,"–","\\textendash");d(Y,v,A,"—","---",!0);d(Y,v,A,"—","\\textemdash");d(Y,v,A,"‘","`",!0);d(Y,v,A,"‘","\\textquoteleft");d(Y,v,A,"’","'",!0);d(Y,v,A,"’","\\textquoteright");d(Y,v,A,"“","``",!0);d(Y,v,A,"“","\\textquotedblleft");d(Y,v,A,"”","''",!0);d(Y,v,A,"”","\\textquotedblright");d(p,v,A,"°","\\degree",!0);d(Y,v,A,"°","\\degree");d(Y,v,A,"°","\\textdegree",!0);d(p,v,A,"£","\\pounds");d(p,v,A,"£","\\mathsterling",!0);d(Y,v,A,"£","\\pounds");d(Y,v,A,"£","\\textsterling",!0);d(p,S,A,"✠","\\maltese");d(Y,S,A,"✠","\\maltese");var Z1='0123456789/@."';for(var ml=0;ml<Z1.length;ml++){var J1=Z1.charAt(ml);d(p,v,A,J1,J1)}var ed='0123456789!@*()-=+";:?/.,';for(var fl=0;fl<ed.length;fl++){var td=ed.charAt(fl);d(Y,v,A,td,td)}var ss="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var pl=0;pl<ss.length;pl++){var K0=ss.charAt(pl);d(p,v,ze,K0,K0),d(Y,v,A,K0,K0)}d(p,S,A,"C","ℂ");d(Y,S,A,"C","ℂ");d(p,S,A,"H","ℍ");d(Y,S,A,"H","ℍ");d(p,S,A,"N","ℕ");d(Y,S,A,"N","ℕ");d(p,S,A,"P","ℙ");d(Y,S,A,"P","ℙ");d(p,S,A,"Q","ℚ");d(Y,S,A,"Q","ℚ");d(p,S,A,"R","ℝ");d(Y,S,A,"R","ℝ");d(p,S,A,"Z","ℤ");d(Y,S,A,"Z","ℤ");d(p,v,ze,"h","ℎ");d(Y,v,ze,"h","ℎ");var je="";for(var Pt=0;Pt<ss.length;Pt++){var lt=ss.charAt(Pt);je=String.fromCharCode(55349,56320+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56372+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56424+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56580+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56684+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56736+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56788+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56840+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56944+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),Pt<26&&(je=String.fromCharCode(55349,56632+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je),je=String.fromCharCode(55349,56476+Pt),d(p,v,ze,lt,je),d(Y,v,A,lt,je))}je="𝕜";d(p,v,ze,"k",je);d(Y,v,A,"k",je);for(var Zr=0;Zr<10;Zr++){var kr=Zr.toString();je=String.fromCharCode(55349,57294+Zr),d(p,v,ze,kr,je),d(Y,v,A,kr,je),je=String.fromCharCode(55349,57314+Zr),d(p,v,ze,kr,je),d(Y,v,A,kr,je),je=String.fromCharCode(55349,57324+Zr),d(p,v,ze,kr,je),d(Y,v,A,kr,je),je=String.fromCharCode(55349,57334+Zr),d(p,v,ze,kr,je),d(Y,v,A,kr,je)}var jl="ÐÞþ";for(var hl=0;hl<jl.length;hl++){var Y0=jl.charAt(hl);d(p,v,ze,Y0,Y0),d(Y,v,A,Y0,Y0)}var Q0=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],nd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],vv=function(n,r){var s=n.charCodeAt(0),l=n.charCodeAt(1),u=(s-55296)*1024+(l-56320)+65536,m=r==="math"?0:1;if(119808<=u&&u<120484){var g=Math.floor((u-119808)/26);return[Q0[g][2],Q0[g][m]]}else if(120782<=u&&u<=120831){var h=Math.floor((u-120782)/10);return[nd[h][2],nd[h][m]]}else{if(u===120485||u===120486)return[Q0[0][2],Q0[0][m]];if(120486<u&&u<120782)return["",""];throw new re("Unsupported character: "+n)}},ms=function(n,r,s){return Ze[s][n]&&Ze[s][n].replace&&(n=Ze[s][n].replace),{value:n,metrics:Gl(n,r,s)}},Rt=function(n,r,s,l,u){var m=ms(n,r,s),g=m.metrics;n=m.value;var h;if(g){var x=g.italic;(s==="text"||l&&l.font==="mathit")&&(x=0),h=new ln(n,g.height,g.depth,x,g.skew,g.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+s+"'")),h=new ln(n,0,0,0,0,0,u);if(l){h.maxFontSize=l.sizeMultiplier,l.style.isTight()&&h.classes.push("mtight");var _=l.getColor();_&&(h.style.color=_)}return h},Ul=function(n,r,s,l){return l===void 0&&(l=[]),s.font==="boldsymbol"&&ms(n,"Main-Bold",r).metrics?Rt(n,"Main-Bold",r,s,l.concat(["mathbf"])):n==="\\"||Ze[r][n].font==="main"?Rt(n,"Main-Regular",r,s,l):Rt(n,"AMS-Regular",r,s,l.concat(["amsrm"]))},yv=function(n,r,s,l,u){return u!=="textord"&&ms(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},fs=function(n,r,s){var l=n.mode,u=n.text,m=["mord"],g=l==="math"||l==="text"&&r.font,h=g?r.font:r.fontFamily,x="",_="";if(u.charCodeAt(0)===55349&&([x,_]=vv(u,l)),x.length>0)return Rt(u,x,l,r,m.concat(_));if(h){var $,k;if(h==="boldsymbol"){var T=yv(u,l,r,m,s);$=T.fontName,k=[T.fontClass]}else g?($=Al[h].fontName,k=[h]):($=X0(h,r.fontWeight,r.fontShape),k=[h,r.fontWeight,r.fontShape]);if(ms(u,$,l).metrics)return Rt(u,$,l,r,m.concat(k));if(Yd.hasOwnProperty(u)&&$.slice(0,10)==="Typewriter"){for(var P=[],R=0;R<u.length;R++)P.push(Rt(u[R],$,l,r,m.concat(k)));return Yn(P)}}if(s==="mathord")return Rt(u,"Math-Italic",l,r,m.concat(["mathnormal"]));if(s==="textord"){var D=Ze[l][u]&&Ze[l][u].font;if(D==="ams"){var E=X0("amsrm",r.fontWeight,r.fontShape);return Rt(u,E,l,r,m.concat("amsrm",r.fontWeight,r.fontShape))}else if(D==="main"||!D){var O=X0("textrm",r.fontWeight,r.fontShape);return Rt(u,O,l,r,m.concat(r.fontWeight,r.fontShape))}else{var G=X0(D,r.fontWeight,r.fontShape);return Rt(u,G,l,r,m.concat(G,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},xv=(o,n)=>{if(Sr(o.classes)!==Sr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==n.style[s])return!1;for(var l in n.style)if(n.style.hasOwnProperty(l)&&o.style[l]!==n.style[l])return!1;return!0},Qd=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],s=o[n+1];r instanceof ln&&s instanceof ln&&xv(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(n+1,1),n--)}return o},Vl=function(n){for(var r=0,s=0,l=0,u=0;u<n.children.length;u++){var m=n.children[u];m.height>r&&(r=m.height),m.depth>s&&(s=m.depth),m.maxFontSize>l&&(l=m.maxFontSize)}n.height=r,n.depth=s,n.maxFontSize=l},J=function(n,r,s,l){var u=new Co(n,r,s,l);return Vl(u),u},qr=(o,n,r,s)=>new Co(o,n,r,s),Ai=function(n,r,s){var l=J([n],[],r);return l.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),l.style.borderBottomWidth=le(l.height),l.maxFontSize=1,l},bv=function(n,r,s,l){var u=new Wl(n,r,s,l);return Vl(u),u},Yn=function(n){var r=new Ao(n);return Vl(r),r},Ci=function(n,r){return n instanceof Ao?J([],[n],r):n},_v=function(n){if(n.positionType==="individualShift"){for(var r=n.children,s=[r[0]],l=-r[0].shift-r[0].elem.depth,u=l,m=1;m<r.length;m++){var g=-r[m].shift-u-r[m].elem.depth,h=g-(r[m-1].elem.height+r[m-1].elem.depth);u=u+g,s.push({type:"kern",size:h}),s.push(r[m])}return{children:s,depth:l}}var x;if(n.positionType==="top"){for(var _=n.positionData,$=0;$<n.children.length;$++){var k=n.children[$];_-=k.type==="kern"?k.size:k.elem.height+k.elem.depth}x=_}else if(n.positionType==="bottom")x=-n.positionData;else{var T=n.children[0];if(T.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")x=-T.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")x=-T.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:x}},Ue=function(n,r){for(var{children:s,depth:l}=_v(n),u=0,m=0;m<s.length;m++){var g=s[m];if(g.type==="elem"){var h=g.elem;u=Math.max(u,h.maxFontSize,h.height)}}u+=2;var x=J(["pstrut"],[]);x.style.height=le(u);for(var _=[],$=l,k=l,T=l,P=0;P<s.length;P++){var R=s[P];if(R.type==="kern")T+=R.size;else{var D=R.elem,E=R.wrapperClasses||[],O=R.wrapperStyle||{},G=J(E,[x,D],void 0,O);G.style.top=le(-u-T-D.depth),R.marginLeft&&(G.style.marginLeft=R.marginLeft),R.marginRight&&(G.style.marginRight=R.marginRight),_.push(G),T+=D.height+D.depth}$=Math.min($,T),k=Math.max(k,T)}var B=J(["vlist"],_);B.style.height=le(k);var W;if($<0){var U=J([],[]),L=J(["vlist"],[U]);L.style.height=le(-$);var V=J(["vlist-s"],[new ln("​")]);W=[J(["vlist-r"],[B,V]),J(["vlist-r"],[L])]}else W=[J(["vlist-r"],[B])];var ne=J(["vlist-t"],W);return W.length===2&&ne.classes.push("vlist-t2"),ne.height=k,ne.depth=-$,ne},Xd=(o,n)=>{var r=J(["mspace"],[],n),s=st(o,n);return r.style.marginRight=le(s),r},X0=function(n,r,s){var l="";switch(n){case"amsrm":l="AMS";break;case"textrm":l="Main";break;case"textsf":l="SansSerif";break;case"texttt":l="Typewriter";break;default:l=n}var u;return r==="textbf"&&s==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",l+"-"+u},Al={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Zd={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Jd=function(n,r){var[s,l,u]=Zd[n],m=new Tr(s),g=new Un([m],{width:le(l),height:le(u),style:"width:"+le(l),viewBox:"0 0 "+1e3*l+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),h=qr(["overlay"],[g],r);return h.height=u,h.style.height=le(u),h.style.width=le(l),h},ot={number:3,unit:"mu"},Jr={number:4,unit:"mu"},Hn={number:5,unit:"mu"},wv={mord:{mop:ot,mbin:Jr,mrel:Hn,minner:ot},mop:{mord:ot,mop:ot,mrel:Hn,minner:ot},mbin:{mord:Jr,mop:Jr,mopen:Jr,minner:Jr},mrel:{mord:Hn,mop:Hn,mopen:Hn,minner:Hn},mopen:{},mclose:{mop:ot,mbin:Jr,mrel:Hn,minner:ot},mpunct:{mord:ot,mop:ot,mrel:Hn,mopen:ot,mclose:ot,mpunct:ot,minner:ot},minner:{mord:ot,mop:ot,mbin:Jr,mrel:Hn,mopen:ot,mpunct:ot,minner:ot}},$v={mord:{mop:ot},mop:{mord:ot,mop:ot},mbin:{},mrel:{},mopen:{},mclose:{mop:ot},mpunct:{},minner:{mop:ot}},em={},as={},ls={};function ce(o){for(var{type:n,names:r,props:s,handler:l,htmlBuilder:u,mathmlBuilder:m}=o,g={type:n,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:l},h=0;h<r.length;++h)em[r[h]]=g;n&&(u&&(as[n]=u),m&&(ls[n]=m))}function ei(o){var{type:n,htmlBuilder:r,mathmlBuilder:s}=o;ce({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var us=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},dt=function(n){return n.type==="ordgroup"?n.body:[n]},kv=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),zv=new Set(["rightmost","mrel","mclose","mpunct"]),Sv={display:Ce.DISPLAY,text:Ce.TEXT,script:Ce.SCRIPT,scriptscript:Ce.SCRIPTSCRIPT},Tv={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},yt=function(n,r,s,l){l===void 0&&(l=[null,null]);for(var u=[],m=0;m<n.length;m++){var g=He(n[m],r);if(g instanceof Ao){var h=g.children;u.push(...h)}else u.push(g)}if(Qd(u),!s)return u;var x=r;if(n.length===1){var _=n[0];_.type==="sizing"?x=r.havingSize(_.size):_.type==="styling"&&(x=r.havingStyle(Sv[_.style]))}var $=J([l[0]||"leftmost"],[],r),k=J([l[1]||"rightmost"],[],r),T=s==="root";return rd(u,(P,R)=>{var D=R.classes[0],E=P.classes[0];D==="mbin"&&zv.has(E)?R.classes[0]="mord":E==="mbin"&&kv.has(D)&&(P.classes[0]="mord")},{node:$},k,T),rd(u,(P,R)=>{var D=Cl(R),E=Cl(P),O=D&&E?P.hasClass("mtight")?$v[D][E]:wv[D][E]:null;if(O)return Xd(O,x)},{node:$},k,T),u},rd=function o(n,r,s,l,u){l&&n.push(l);for(var m=0;m<n.length;m++){var g=n[m],h=tm(g);if(h){o(h.children,r,s,null,u);continue}var x=!g.hasClass("mspace");if(x){var _=r(g,s.node);_&&(s.insertAfter?s.insertAfter(_):(n.unshift(_),m++))}x?s.node=g:u&&g.hasClass("newline")&&(s.node=J(["leftmost"])),s.insertAfter=($=>k=>{n.splice($+1,0,k),m++})(m)}l&&n.pop()},tm=function(n){return n instanceof Ao||n instanceof Wl||n instanceof Co&&n.hasClass("enclosing")?n:null},qv=function o(n,r){var s=tm(n);if(s){var l=s.children;if(l.length){if(r==="right")return o(l[l.length-1],"right");if(r==="left")return o(l[0],"left")}}return n},Cl=function(n,r){return n?(r&&(n=qv(n,r)),Tv[n.classes[0]]||null):null},jo=function(n,r){var s=["nulldelimiter"].concat(n.baseSizingClasses());return J(r.concat(s))},He=function(n,r,s){if(!n)return J();if(as[n.type]){var l=as[n.type](n,r);if(s&&r.size!==s.size){l=J(r.sizingClasses(s),[l],r);var u=r.sizeMultiplier/s.sizeMultiplier;l.height*=u,l.depth*=u}return l}else throw new re("Got group of unknown type: '"+n.type+"'")};function Z0(o,n){var r=J(["base"],o,n),s=J(["strut"]);return s.style.height=le(r.height+r.depth),r.depth&&(s.style.verticalAlign=le(-r.depth)),r.children.unshift(s),r}function Pl(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=yt(o,n,"root"),l;s.length===2&&s[1].hasClass("tag")&&(l=s.pop());for(var u=[],m=[],g=0;g<s.length;g++)if(m.push(s[g]),s[g].hasClass("mbin")||s[g].hasClass("mrel")||s[g].hasClass("allowbreak")){for(var h=!1;g<s.length-1&&s[g+1].hasClass("mspace")&&!s[g+1].hasClass("newline");)g++,m.push(s[g]),s[g].hasClass("nobreak")&&(h=!0);h||(u.push(Z0(m,n)),m=[])}else s[g].hasClass("newline")&&(m.pop(),m.length>0&&(u.push(Z0(m,n)),m=[]),u.push(s[g]));m.length>0&&u.push(Z0(m,n));var x;r?(x=Z0(yt(r,n,!0)),x.classes=["tag"],u.push(x)):l&&u.push(l);var _=J(["katex-html"],u);if(_.setAttribute("aria-hidden","true"),x){var $=x.children[0];$.style.height=le(_.height+_.depth),_.depth&&($.style.verticalAlign=le(-_.depth))}return _}function nm(o){return new Ao(o)}class ie{constructor(n,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=Sr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof pt&&this.children[s+1]instanceof pt){for(var l=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof pt;)l+=this.children[++s].toText();n.appendChild(new pt(l).toNode())}else n.appendChild(this.children[s].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=jt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+jt(Sr(this.classes))+'"'),n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class pt{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return jt(this.toText())}toText(){return this.text}}class rm{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",le(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+le(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Mv=new Set(["\\imath","\\jmath"]),jv=new Set(["mrow","mtable"]),un=function(n,r,s){return Ze[r][n]&&Ze[r][n].replace&&n.charCodeAt(0)!==55349&&!(Yd.hasOwnProperty(n)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(n=Ze[r][n].replace),new pt(n)},Kl=function(n){return n.length===1?n[0]:new ie("mrow",n)},Yl=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var l=n.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var u=n.text;if(Mv.has(u))return null;Ze[l][u]&&Ze[l][u].replace&&(u=Ze[l][u].replace);var m=Al[s].fontName;return Gl(u,m,l)?Al[s].variant:null};function gl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof pt&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof pt&&r.text===","}else return!1}var Gt=function(n,r,s){if(n.length===1){var l=Qe(n[0],r);return s&&l instanceof ie&&l.type==="mo"&&(l.setAttribute("lspace","0em"),l.setAttribute("rspace","0em")),[l]}for(var u=[],m,g=0;g<n.length;g++){var h=Qe(n[g],r);if(h instanceof ie&&m instanceof ie){if(h.type==="mtext"&&m.type==="mtext"&&h.getAttribute("mathvariant")===m.getAttribute("mathvariant")){m.children.push(...h.children);continue}else if(h.type==="mn"&&m.type==="mn"){m.children.push(...h.children);continue}else if(gl(h)&&m.type==="mn"){m.children.push(...h.children);continue}else if(h.type==="mn"&&gl(m))h.children=[...m.children,...h.children],u.pop();else if((h.type==="msup"||h.type==="msub")&&h.children.length>=1&&(m.type==="mn"||gl(m))){var x=h.children[0];x instanceof ie&&x.type==="mn"&&(x.children=[...m.children,...x.children],u.pop())}else if(m.type==="mi"&&m.children.length===1){var _=m.children[0];if(_ instanceof pt&&_.text==="̸"&&(h.type==="mo"||h.type==="mi"||h.type==="mn")){var $=h.children[0];$ instanceof pt&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),u.pop())}}}u.push(h),m=h}return u},Mr=function(n,r,s){return Kl(Gt(n,r,s))},Qe=function(n,r){if(!n)return new ie("mrow");if(ls[n.type]){var s=ls[n.type](n,r);return s}else throw new re("Got group of unknown type: '"+n.type+"'")};function id(o,n,r,s,l){var u=Gt(o,r),m;u.length===1&&u[0]instanceof ie&&jv.has(u[0].type)?m=u[0]:m=new ie("mrow",u);var g=new ie("annotation",[new pt(n)]);g.setAttribute("encoding","application/x-tex");var h=new ie("semantics",[m,g]),x=new ie("math",[h]);x.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&x.setAttribute("display","block");var _=l?"katex":"katex-mathml";return J([_],[x])}var im=function(n){return new Gn({style:n.displayMode?Ce.DISPLAY:Ce.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},om=function(n,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),n=J(s,[n])}return n},Av=function(n,r,s){var l=im(s),u;if(s.output==="mathml")return id(n,r,l,s.displayMode,!0);if(s.output==="html"){var m=Pl(n,l);u=J(["katex"],[m])}else{var g=id(n,r,l,s.displayMode,!1),h=Pl(n,l);u=J(["katex"],[g,h])}return om(u,s)},Cv=function(n,r,s){var l=im(s),u=Pl(n,l),m=J(["katex"],[u]);return om(m,s)},Pv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},ps=function(n){var r=new ie("mo",[new pt(Pv[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Rv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Ev=new Set(["widehat","widecheck","widetilde","utilde"]),hs=function(n,r){function s(){var g=4e5,h=n.label.slice(1);if(Ev.has(h)){var x=n,_=x.base.type==="ordgroup"?x.base.body.length:1,$,k,T;if(_>5)h==="widehat"||h==="widecheck"?($=420,g=2364,T=.42,k=h+"4"):($=312,g=2340,T=.34,k="tilde4");else{var P=[1,1,2,2,3,3][_];h==="widehat"||h==="widecheck"?(g=[0,1062,2364,2364,2364][P],$=[0,239,300,360,420][P],T=[0,.24,.3,.3,.36,.42][P],k=h+P):(g=[0,600,1033,2339,2340][P],$=[0,260,286,306,312][P],T=[0,.26,.286,.3,.306,.34][P],k="tilde"+P)}var R=new Tr(k),D=new Un([R],{width:"100%",height:le(T),viewBox:"0 0 "+g+" "+$,preserveAspectRatio:"none"});return{span:qr([],[D],r),minWidth:0,height:T}}else{var E=[],O=Rv[h],[G,B,W]=O,U=W/1e3,L=G.length,V,ne;if(L===1){var Se=O[3];V=["hide-tail"],ne=[Se]}else if(L===2)V=["halfarrow-left","halfarrow-right"],ne=["xMinYMin","xMaxYMin"];else if(L===3)V=["brace-left","brace-center","brace-right"],ne=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+L+" children.");for(var Te=0;Te<L;Te++){var me=new Tr(G[Te]),be=new Un([me],{width:"400em",height:le(U),viewBox:"0 0 "+g+" "+W,preserveAspectRatio:ne[Te]+" slice"}),qe=qr([V[Te]],[be],r);if(L===1)return{span:qe,minWidth:B,height:U};qe.style.height=le(U),E.push(qe)}return{span:J(["stretchy"],E,r),minWidth:B,height:U}}}var{span:l,minWidth:u,height:m}=s();return l.height=m,l.style.height=le(m),u>0&&(l.style.minWidth=le(u)),l},Dv=function(n,r,s,l,u){var m,g=n.height+n.depth+s+l;if(/fbox|color|angl/.test(r)){if(m=J(["stretchy",r],[],u),r==="fbox"){var h=u.color&&u.getColor();h&&(m.style.borderColor=h)}}else{var x=[];/^[bx]cancel$/.test(r)&&x.push(new Ml({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&x.push(new Ml({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var _=new Un(x,{width:"100%",height:le(g)});m=qr([],[_],u)}return m.height=g,m.style.height=le(g),m};function Pe(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function Ql(o){var n=gs(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function gs(o){return o&&(o.type==="atom"||gv.hasOwnProperty(o.type))?o:null}var Xl=(o,n)=>{var r,s,l;o&&o.type==="supsub"?(s=Pe(o.base,"accent"),r=s.base,o.base=r,l=pv(He(o,n)),o.base=s):(s=Pe(o,"accent"),r=s.base);var u=He(r,n.havingCrampedStyle()),m=s.isShifty&&Vn(r),g=0;if(m){var h=So(r),x=He(h,n.havingCrampedStyle());g=X1(x).skew}var _=s.label==="\\c",$=_?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),k;if(s.isStretchy)k=hs(s,n),k=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:k,wrapperClasses:["svg-align"],wrapperStyle:g>0?{width:"calc(100% - "+le(2*g)+")",marginLeft:le(2*g)}:void 0}]});else{var T,P;s.label==="\\vec"?(T=Jd("vec",n),P=Zd.vec[1]):(T=fs({mode:s.mode,text:s.label},n,"textord"),T=X1(T),T.italic=0,P=T.width,_&&($+=T.depth)),k=J(["accent-body"],[T]);var R=s.label==="\\textcircled";R&&(k.classes.push("accent-full"),$=u.height);var D=g;R||(D-=P/2),k.style.left=le(D),s.label==="\\textcircled"&&(k.style.top=".2em"),k=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-$},{type:"elem",elem:k}]})}var E=J(["mord","accent"],[k],n);return l?(l.children[0]=E,l.height=Math.max(E.height,l.height),l.classes[0]="mord",l):E},sm=(o,n)=>{var r=o.isStretchy?ps(o.label):new ie("mo",[un(o.label,o.mode)]),s=new ie("mover",[Qe(o.base,n),r]);return s.setAttribute("accent","true"),s},Nv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ce({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=us(n[0]),s=!Nv.test(o.funcName),l=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:l,base:r}},htmlBuilder:Xl,mathmlBuilder:sm});ce({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:Xl,mathmlBuilder:sm});ce({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0];return{type:"accentUnder",mode:r.mode,label:s,base:l}},htmlBuilder:(o,n)=>{var r=He(o.base,n),s=hs(o,n),l=o.label==="\\utilde"?.12:0,u=Ue({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:l},{type:"elem",elem:r}]});return J(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=ps(o.label),s=new ie("munder",[Qe(o.base,n),r]);return s.setAttribute("accentunder","true"),s}});var J0=o=>{var n=new ie("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};ce({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s,funcName:l}=o;return{type:"xArrow",mode:s.mode,label:l,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,s=n.havingStyle(r.sup()),l=Ci(He(o.body,s,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";l.classes.push(u+"-arrow-pad");var m;o.below&&(s=n.havingStyle(r.sub()),m=Ci(He(o.below,s,n),n),m.classes.push(u+"-arrow-pad"));var g=hs(o,n),h=-n.fontMetrics().axisHeight+.5*g.height,x=-n.fontMetrics().axisHeight-.5*g.height-.111;(l.depth>.25||o.label==="\\xleftequilibrium")&&(x-=l.depth);var _;if(m){var $=-n.fontMetrics().axisHeight+m.height+.5*g.height+.111;_=Ue({positionType:"individualShift",children:[{type:"elem",elem:l,shift:x},{type:"elem",elem:g,shift:h},{type:"elem",elem:m,shift:$}]})}else _=Ue({positionType:"individualShift",children:[{type:"elem",elem:l,shift:x},{type:"elem",elem:g,shift:h}]});return _.children[0].children[0].children[1].classes.push("svg-align"),J(["mrel","x-arrow"],[_],n)},mathmlBuilder(o,n){var r=ps(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var l=J0(Qe(o.body,n));if(o.below){var u=J0(Qe(o.below,n));s=new ie("munderover",[r,u,l])}else s=new ie("mover",[r,l])}else if(o.below){var m=J0(Qe(o.below,n));s=new ie("munder",[r,m])}else s=J0(),s=new ie("mover",[r,s]);return s}});function am(o,n){var r=yt(o.body,n,!0);return J([o.mclass],r,n)}function lm(o,n){var r,s=Gt(o.body,n);return o.mclass==="minner"?r=new ie("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new ie("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new ie("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ce({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:dt(l),isCharacterBox:Vn(l)}},htmlBuilder:am,mathmlBuilder:lm});var vs=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};ce({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:vs(n[0]),body:dt(n[1]),isCharacterBox:Vn(n[1])}}});ce({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:s}=o,l=n[1],u=n[0],m;s!=="\\stackrel"?m=vs(l):m="mrel";var g={type:"op",mode:l.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:dt(l)},h={type:"supsub",mode:u.mode,base:g,sup:s==="\\underset"?null:u,sub:s==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:m,body:[h],isCharacterBox:Vn(h)}},htmlBuilder:am,mathmlBuilder:lm});ce({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:vs(n[0]),body:dt(n[0])}},htmlBuilder(o,n){var r=yt(o.body,n,!0),s=J([o.mclass],r,n);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,n){var r=Gt(o.body,n),s=new ie("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var Bv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},od=()=>({type:"styling",body:[],mode:"math",style:"display"}),sd=o=>o.type==="textord"&&o.text==="@",Iv=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function Fv(o,n,r){var s=Bv[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var l=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:s,mode:"math",family:"rel"},m=r.callFunction("\\Big",[u],[]),g=r.callFunction("\\\\cdright",[n[1]],[]),h={type:"ordgroup",mode:"math",body:[l,m,g]};return r.callFunction("\\\\cdparent",[h],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var x={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[x],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Lv(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new re("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],l=[s],u=0;u<n.length;u++){for(var m=n[u],g=od(),h=0;h<m.length;h++)if(!sd(m[h]))g.body.push(m[h]);else{s.push(g),h+=1;var x=Ql(m[h]).text,_=new Array(2);if(_[0]={type:"ordgroup",mode:"math",body:[]},_[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(x))if("<>AV".includes(x))for(var $=0;$<2;$++){for(var k=!0,T=h+1;T<m.length;T++){if(Iv(m[T],x)){k=!1,h=T;break}if(sd(m[T]))throw new re("Missing a "+x+" character to complete a CD arrow.",m[T]);_[$].body.push(m[T])}if(k)throw new re("Missing a "+x+" character to complete a CD arrow.",m[h])}else throw new re('Expected one of "<>AV=|." after @',m[h]);var P=Fv(x,_,o),R={type:"styling",body:[P],mode:"math",style:"display"};s.push(R),g=od()}u%2===0?s.push(g):s.shift(),s=[],l.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var D=new Array(l[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:l,arraystretch:1,addJot:!0,rowGaps:[null],cols:D,colSeparationType:"CD",hLinesBeforeRow:new Array(l.length+1).fill([])}}ce({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),s=Ci(He(o.label,r,n),n);return s.classes.push("cd-label-"+o.side),s.style.bottom=le(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,n){var r=new ie("mrow",[Qe(o.label,n)]);return r=new ie("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new ie("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ce({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=Ci(He(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new ie("mrow",[Qe(o.fragment,n)])}});ce({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,s=Pe(n[0],"ordgroup"),l=s.body,u="",m=0;m<l.length;m++){var g=Pe(l[m],"textord");u+=g.text}var h=parseInt(u),x;if(isNaN(h))throw new re("\\@char has non-numeric argument "+u);if(h<0||h>=1114111)throw new re("\\@char with invalid code point "+u);return h<=65535?x=String.fromCharCode(h):(h-=65536,x=String.fromCharCode((h>>10)+55296,(h&1023)+56320)),{type:"textord",mode:r.mode,text:x}}});var um=(o,n)=>{var r=yt(o.body,n.withColor(o.color),!1);return Yn(r)},cm=(o,n)=>{var r=Gt(o.body,n.withColor(o.color)),s=new ie("mstyle",r);return s.setAttribute("mathcolor",o.color),s};ce({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,s=Pe(n[0],"color-token").color,l=n[1];return{type:"color",mode:r.mode,color:s,body:dt(l)}},htmlBuilder:um,mathmlBuilder:cm});ce({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:s}=o,l=Pe(n[0],"color-token").color;r.gullet.macros.set("\\current@color",l);var u=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:l,body:u}},htmlBuilder:um,mathmlBuilder:cm});ce({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:s}=o,l=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,u=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:u,size:l&&Pe(l,"size").value}},htmlBuilder(o,n){var r=J(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=le(st(o.size,n)))),r},mathmlBuilder(o,n){var r=new ie("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",le(st(o.size,n)))),r}});var Rl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},dm=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new re("Expected a control sequence",o);return n},Ov=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},mm=(o,n,r,s)=>{var l=o.gullet.macros.get(r.text);l==null&&(r.noexpand=!0,l={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,l,s)};ce({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var s=n.fetch();if(Rl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Rl[s.text]),Pe(n.parseFunction(),"internal");throw new re("Invalid token after macro prefix",s)}});ce({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=n.gullet.popToken(),l=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(l))throw new re("Expected a control sequence",s);for(var u=0,m,g=[[]];n.gullet.future().text!=="{";)if(s=n.gullet.popToken(),s.text==="#"){if(n.gullet.future().text==="{"){m=n.gullet.future(),g[u].push("{");break}if(s=n.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new re('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==u+1)throw new re('Argument number "'+s.text+'" out of order');u++,g.push([])}else{if(s.text==="EOF")throw new re("Expected a macro definition");g[u].push(s.text)}var{tokens:h}=n.gullet.consumeArg();return m&&h.unshift(m),(r==="\\edef"||r==="\\xdef")&&(h=n.gullet.expandTokens(h),h.reverse()),n.gullet.macros.set(l,{tokens:h,numArgs:u,delimiters:g},r===Rl[r]),{type:"internal",mode:n.mode}}});ce({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=dm(n.gullet.popToken());n.gullet.consumeSpaces();var l=Ov(n);return mm(n,s,l,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});ce({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=dm(n.gullet.popToken()),l=n.gullet.popToken(),u=n.gullet.popToken();return mm(n,s,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(l),{type:"internal",mode:n.mode}}});var zo=function(n,r,s){var l=Ze.math[n]&&Ze.math[n].replace,u=Gl(l||n,r,s);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},Zl=function(n,r,s,l){var u=s.havingBaseStyle(r),m=J(l.concat(u.sizingClasses(s)),[n],s),g=u.sizeMultiplier/s.sizeMultiplier;return m.height*=g,m.depth*=g,m.maxFontSize=u.sizeMultiplier,m},fm=function(n,r,s){var l=r.havingBaseStyle(s),u=(1-r.sizeMultiplier/l.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=le(u),n.height-=u,n.depth+=u},Hv=function(n,r,s,l,u,m){var g=Rt(n,"Main-Regular",u,l),h=Zl(g,r,l,m);return fm(h,l,r),h},Gv=function(n,r,s,l){return Rt(n,"Size"+r+"-Regular",s,l)},pm=function(n,r,s,l,u,m){var g=Gv(n,r,u,l),h=Zl(J(["delimsizing","size"+r],[g],l),Ce.TEXT,l,m);return s&&fm(h,l,Ce.TEXT),h},vl=function(n,r,s){var l;r==="Size1-Regular"?l="delim-size1":l="delim-size4";var u=J(["delimsizinginner",l],[J([],[Rt(n,r,s)])]);return{type:"elem",elem:u}},yl=function(n,r,s){var l=Tn["Size4-Regular"][n.charCodeAt(0)]?Tn["Size4-Regular"][n.charCodeAt(0)][4]:Tn["Size1-Regular"][n.charCodeAt(0)][4],u=new Tr("inner",ov(n,Math.round(1e3*r))),m=new Un([u],{width:le(l),height:le(r),style:"width:"+le(l),viewBox:"0 0 "+1e3*l+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),g=qr([],[m],s);return g.height=r,g.style.height=le(r),g.style.width=le(l),{type:"elem",elem:g}},El=.008,es={type:"kern",size:-1*El},Wv=new Set(["|","\\lvert","\\rvert","\\vert"]),Uv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),hm=function(n,r,s,l,u,m){var g,h,x,_,$="",k=0;g=x=_=n,h=null;var T="Size1-Regular";n==="\\uparrow"?x=_="⏐":n==="\\Uparrow"?x=_="‖":n==="\\downarrow"?g=x="⏐":n==="\\Downarrow"?g=x="‖":n==="\\updownarrow"?(g="\\uparrow",x="⏐",_="\\downarrow"):n==="\\Updownarrow"?(g="\\Uparrow",x="‖",_="\\Downarrow"):Wv.has(n)?(x="∣",$="vert",k=333):Uv.has(n)?(x="∥",$="doublevert",k=556):n==="["||n==="\\lbrack"?(g="⎡",x="⎢",_="⎣",T="Size4-Regular",$="lbrack",k=667):n==="]"||n==="\\rbrack"?(g="⎤",x="⎥",_="⎦",T="Size4-Regular",$="rbrack",k=667):n==="\\lfloor"||n==="⌊"?(x=g="⎢",_="⎣",T="Size4-Regular",$="lfloor",k=667):n==="\\lceil"||n==="⌈"?(g="⎡",x=_="⎢",T="Size4-Regular",$="lceil",k=667):n==="\\rfloor"||n==="⌋"?(x=g="⎥",_="⎦",T="Size4-Regular",$="rfloor",k=667):n==="\\rceil"||n==="⌉"?(g="⎤",x=_="⎥",T="Size4-Regular",$="rceil",k=667):n==="("||n==="\\lparen"?(g="⎛",x="⎜",_="⎝",T="Size4-Regular",$="lparen",k=875):n===")"||n==="\\rparen"?(g="⎞",x="⎟",_="⎠",T="Size4-Regular",$="rparen",k=875):n==="\\{"||n==="\\lbrace"?(g="⎧",h="⎨",_="⎩",x="⎪",T="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(g="⎫",h="⎬",_="⎭",x="⎪",T="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(g="⎧",_="⎩",x="⎪",T="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(g="⎫",_="⎭",x="⎪",T="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(g="⎧",_="⎭",x="⎪",T="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(g="⎫",_="⎩",x="⎪",T="Size4-Regular");var P=zo(g,T,u),R=P.height+P.depth,D=zo(x,T,u),E=D.height+D.depth,O=zo(_,T,u),G=O.height+O.depth,B=0,W=1;if(h!==null){var U=zo(h,T,u);B=U.height+U.depth,W=2}var L=R+G+B,V=Math.max(0,Math.ceil((r-L)/(W*E))),ne=L+V*W*E,Se=l.fontMetrics().axisHeight;s&&(Se*=l.sizeMultiplier);var Te=ne/2-Se,me=[];if($.length>0){var be=ne-R-G,qe=Math.round(ne*1e3),Ge=sv($,Math.round(be*1e3)),Ye=new Tr($,Ge),Fe=(k/1e3).toFixed(3)+"em",se=(qe/1e3).toFixed(3)+"em",xe=new Un([Ye],{width:Fe,height:se,viewBox:"0 0 "+k+" "+qe}),ue=qr([],[xe],l);ue.height=qe/1e3,ue.style.width=Fe,ue.style.height=se,me.push({type:"elem",elem:ue})}else{if(me.push(vl(_,T,u)),me.push(es),h===null){var j=ne-R-G+2*El;me.push(yl(x,j,l))}else{var H=(ne-R-G-B)/2+2*El;me.push(yl(x,H,l)),me.push(es),me.push(vl(h,T,u)),me.push(es),me.push(yl(x,H,l))}me.push(es),me.push(vl(g,T,u))}var he=l.havingBaseStyle(Ce.TEXT),we=Ue({positionType:"bottom",positionData:Te,children:me});return Zl(J(["delimsizing","mult"],[we],he),Ce.TEXT,l,m)},xl=80,bl=.08,_l=function(n,r,s,l,u){var m=iv(n,l,s),g=new Tr(n,m),h=new Un([g],{width:"400em",height:le(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return qr(["hide-tail"],[h],u)},Vv=function(n,r){var s=r.havingBaseSizing(),l=bm("\\surd",n*s.sizeMultiplier,xm,s),u=s.sizeMultiplier,m=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),g,h=0,x=0,_=0,$;return l.type==="small"?(_=1e3+1e3*m+xl,n<1?u=1:n<1.4&&(u=.7),h=(1+m+bl)/u,x=(1+m)/u,g=_l("sqrtMain",h,_,m,r),g.style.minWidth="0.853em",$=.833/u):l.type==="large"?(_=(1e3+xl)*To[l.size],x=(To[l.size]+m)/u,h=(To[l.size]+m+bl)/u,g=_l("sqrtSize"+l.size,h,_,m,r),g.style.minWidth="1.02em",$=1/u):(h=n+m+bl,x=n+m,_=Math.floor(1e3*n+m)+xl,g=_l("sqrtTall",h,_,m,r),g.style.minWidth="0.742em",$=1.056),g.height=x,g.style.height=le(h),{span:g,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+m)*u}},gm=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Kv=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),vm=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),To=[0,1.2,1.8,2.4,3],ym=function(n,r,s,l,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),gm.has(n)||vm.has(n))return pm(n,r,!1,s,l,u);if(Kv.has(n))return hm(n,To[r],!1,s,l,u);throw new re("Illegal delimiter: '"+n+"'")},Yv=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Qv=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"stack"}],xm=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Xv=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},bm=function(n,r,s,l){for(var u=Math.min(2,3-l.style.size),m=u;m<s.length&&s[m].type!=="stack";m++){var g=zo(n,Xv(s[m]),"math"),h=g.height+g.depth;if(s[m].type==="small"){var x=l.havingBaseStyle(s[m].style);h*=x.sizeMultiplier}if(h>r)return s[m]}return s[s.length-1]},Dl=function(n,r,s,l,u,m){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var g;vm.has(n)?g=Yv:gm.has(n)?g=xm:g=Qv;var h=bm(n,r,g,l);return h.type==="small"?Hv(n,h.style,s,l,u,m):h.type==="large"?pm(n,h.size,s,l,u,m):hm(n,r,s,l,u,m)},wl=function(n,r,s,l,u,m){var g=l.fontMetrics().axisHeight*l.sizeMultiplier,h=901,x=5/l.fontMetrics().ptPerEm,_=Math.max(r-g,s+g),$=Math.max(_/500*h,2*_-x);return Dl(n,$,!0,l,u,m)},ad={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},Zv=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function ys(o,n){var r=gs(o);if(r&&Zv.has(r.text))return r;throw r?new re("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new re("Invalid delimiter type '"+o.type+"'",o)}ce({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=ys(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:ad[o.funcName].size,mclass:ad[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?J([o.mclass]):ym(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(un(o.delim,o.mode));var r=new ie("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=le(To[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function ld(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ce({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new re("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:ys(n[0],o).text,color:r}}});ce({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=ys(n[0],o),s=o.parser;++s.leftrightDepth;var l=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var u=Pe(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:l,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{ld(o);for(var r=yt(o.body,n,!0,["mopen","mclose"]),s=0,l=0,u=!1,m=0;m<r.length;m++)r[m].isMiddle?u=!0:(s=Math.max(r[m].height,s),l=Math.max(r[m].depth,l));s*=n.sizeMultiplier,l*=n.sizeMultiplier;var g;if(o.left==="."?g=jo(n,["mopen"]):g=wl(o.left,s,l,n,o.mode,["mopen"]),r.unshift(g),u)for(var h=1;h<r.length;h++){var x=r[h],_=x.isMiddle;_&&(r[h]=wl(_.delim,s,l,_.options,o.mode,[]))}var $;if(o.right===".")$=jo(n,["mclose"]);else{var k=o.rightColor?n.withColor(o.rightColor):n;$=wl(o.right,s,l,k,o.mode,["mclose"])}return r.push($),J(["minner"],r,n)},mathmlBuilder:(o,n)=>{ld(o);var r=Gt(o.body,n);if(o.left!=="."){var s=new ie("mo",[un(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var l=new ie("mo",[un(o.right,o.mode)]);l.setAttribute("fence","true"),o.rightColor&&l.setAttribute("mathcolor",o.rightColor),r.push(l)}return Kl(r)}});ce({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=ys(n[0],o);if(!o.parser.leftrightDepth)throw new re("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=jo(n,[]);else{r=ym(o.delim,1,n,o.mode,[]);var s={delim:o.delim,options:n};r.isMiddle=s}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?un("|","text"):un(o.delim,o.mode),s=new ie("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var Jl=(o,n)=>{var r=Ci(He(o.body,n),n),s=o.label.slice(1),l=n.sizeMultiplier,u,m=0,g=Vn(o.body);if(s==="sout")u=J(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/l,m=-.5*n.fontMetrics().xHeight;else if(s==="phase"){var h=st({number:.6,unit:"pt"},n),x=st({number:.35,unit:"ex"},n),_=n.havingBaseSizing();l=l/_.sizeMultiplier;var $=r.height+r.depth+h+x;r.style.paddingLeft=le($/2+h);var k=Math.floor(1e3*$*l),T=nv(k),P=new Un([new Tr("phase",T)],{width:"400em",height:le(k/1e3),viewBox:"0 0 400000 "+k,preserveAspectRatio:"xMinYMin slice"});u=qr(["hide-tail"],[P],n),u.style.height=le($),m=r.depth+h+x}else{/cancel/.test(s)?g||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var R=0,D=0,E=0;/box/.test(s)?(E=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),R=n.fontMetrics().fboxsep+(s==="colorbox"?0:E),D=R):s==="angl"?(E=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),R=4*E,D=Math.max(0,.25-r.depth)):(R=g?.2:0,D=R),u=Dv(r,s,R,D,n),/fbox|boxed|fcolorbox/.test(s)?(u.style.borderStyle="solid",u.style.borderWidth=le(E)):s==="angl"&&E!==.049&&(u.style.borderTopWidth=le(E),u.style.borderRightWidth=le(E)),m=r.depth+D,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var O;if(o.backgroundColor)O=Ue({positionType:"individualShift",children:[{type:"elem",elem:u,shift:m},{type:"elem",elem:r,shift:0}]});else{var G=/cancel|phase/.test(s)?["svg-align"]:[];O=Ue({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:m,wrapperClasses:G}]})}return/cancel/.test(s)&&(O.height=r.height,O.depth=r.depth),/cancel/.test(s)&&!g?J(["mord","cancel-lap"],[O],n):J(["mord"],[O],n)},eu=(o,n)=>{var r=0,s=new ie(o.label.includes("colorbox")?"mpadded":"menclose",[Qe(o.body,n)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var l=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);s.setAttribute("style","border: "+l+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};ce({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:s,funcName:l}=o,u=Pe(n[0],"color-token").color,m=n[1];return{type:"enclose",mode:s.mode,label:l,backgroundColor:u,body:m}},htmlBuilder:Jl,mathmlBuilder:eu});ce({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:s,funcName:l}=o,u=Pe(n[0],"color-token").color,m=Pe(n[1],"color-token").color,g=n[2];return{type:"enclose",mode:s.mode,label:l,backgroundColor:m,borderColor:u,body:g}},htmlBuilder:Jl,mathmlBuilder:eu});ce({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});ce({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];return{type:"enclose",mode:r.mode,label:s,body:l}},htmlBuilder:Jl,mathmlBuilder:eu});ce({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var _m={};function qn(o){for(var{type:n,names:r,props:s,handler:l,htmlBuilder:u,mathmlBuilder:m}=o,g={type:n,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:l},h=0;h<r.length;++h)_m[r[h]]=g;u&&(as[n]=u),m&&(ls[n]=m)}var wm={};function b(o,n){wm[o]=n}function ud(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var xs=o=>{var n=o.parser.settings;if(!n.displayMode)throw new re("{"+o.envName+"} can be used only in display mode.")},Jv=new Set(["gather","gather*"]);function tu(o){if(!o.includes("ed"))return!o.includes("*")}function jr(o,n,r){var{hskipBeforeAndAfter:s,addJot:l,cols:u,arraystretch:m,colSeparationType:g,autoTag:h,singleRow:x,emptySingleRow:_,maxNumCols:$,leqno:k}=n;if(o.gullet.beginGroup(),x||o.gullet.macros.set("\\cr","\\\\\\relax"),!m){var T=o.gullet.expandMacroAsText("\\arraystretch");if(T==null)m=1;else if(m=parseFloat(T),!m||m<0)throw new re("Invalid \\arraystretch: "+T)}o.gullet.beginGroup();var P=[],R=[P],D=[],E=[],O=h!=null?[]:void 0;function G(){h&&o.gullet.macros.set("\\@eqnsw","1",!0)}function B(){O&&(o.gullet.macros.get("\\df@tag")?(O.push(o.subparse([new Yt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):O.push(!!h&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(G(),E.push(ud(o));;){var W=o.parseExpression(!1,x?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),W={type:"ordgroup",mode:o.mode,body:W},r&&(W={type:"styling",mode:o.mode,style:r,body:[W]}),P.push(W);var U=o.fetch().text;if(U==="&"){if($&&P.length===$){if(x||g)throw new re("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(U==="\\end"){B(),P.length===1&&W.type==="styling"&&W.body[0].body.length===0&&(R.length>1||!_)&&R.pop(),E.length<R.length+1&&E.push([]);break}else if(U==="\\\\"){o.consume();var L=void 0;o.gullet.future().text!==" "&&(L=o.parseSizeGroup(!0)),D.push(L?L.value:null),B(),E.push(ud(o)),P=[],R.push(P),G()}else throw new re("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:l,arraystretch:m,body:R,cols:u,rowGaps:D,hskipBeforeAndAfter:s,hLinesBeforeRow:E,colSeparationType:g,tags:O,leqno:k}}function nu(o){return o.slice(0,1)==="d"?"display":"text"}var Mn=function(n,r){var s,l,u=n.body.length,m=n.hLinesBeforeRow,g=0,h=new Array(u),x=[],_=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,k=5*$;if(n.colSeparationType&&n.colSeparationType==="small"){var T=r.havingStyle(Ce.SCRIPT).sizeMultiplier;k=.2778*(T/r.sizeMultiplier)}var P=n.colSeparationType==="CD"?st({number:3,unit:"ex"},r):12*$,R=3*$,D=n.arraystretch*P,E=.7*D,O=.3*D,G=0;function B(zt){for(var Ve=0;Ve<zt.length;++Ve)Ve>0&&(G+=.25),x.push({pos:G,isDashed:zt[Ve]})}for(B(m[0]),s=0;s<n.body.length;++s){var W=n.body[s],U=E,L=O;g<W.length&&(g=W.length);var V=new Array(W.length);for(l=0;l<W.length;++l){var ne=He(W[l],r);L<ne.depth&&(L=ne.depth),U<ne.height&&(U=ne.height),V[l]=ne}var Se=n.rowGaps[s],Te=0;Se&&(Te=st(Se,r),Te>0&&(Te+=O,L<Te&&(L=Te),Te=0)),n.addJot&&(L+=R),V.height=U,V.depth=L,G+=U,V.pos=G,G+=L+Te,h[s]=V,B(m[s+1])}var me=G/2+r.fontMetrics().axisHeight,be=n.cols||[],qe=[],Ge,Ye,Fe=[];if(n.tags&&n.tags.some(zt=>zt))for(s=0;s<u;++s){var se=h[s],xe=se.pos-me,ue=n.tags[s],j=void 0;ue===!0?j=J(["eqn-num"],[],r):ue===!1?j=J([],[],r):j=J([],yt(ue,r,!0),r),j.depth=se.depth,j.height=se.height,Fe.push({type:"elem",elem:j,shift:xe})}for(l=0,Ye=0;l<g||Ye<be.length;++l,++Ye){for(var H=be[Ye]||{},he=!0;H.type==="separator";){if(he||(Ge=J(["arraycolsep"],[]),Ge.style.width=le(r.fontMetrics().doubleRuleSep),qe.push(Ge)),H.separator==="|"||H.separator===":"){var we=H.separator==="|"?"solid":"dashed",_e=J(["vertical-separator"],[],r);_e.style.height=le(G),_e.style.borderRightWidth=le(_),_e.style.borderRightStyle=we,_e.style.margin="0 "+le(-_/2);var Me=G-me;Me&&(_e.style.verticalAlign=le(-Me)),qe.push(_e)}else throw new re("Invalid separator type: "+H.separator);Ye++,H=be[Ye]||{},he=!1}if(!(l>=g)){var Ne=void 0;if(l>0||n.hskipBeforeAndAfter){var Ee;Ne=(Ee=H.pregap)!=null?Ee:k,Ne!==0&&(Ge=J(["arraycolsep"],[]),Ge.style.width=le(Ne),qe.push(Ge))}var Be=[];for(s=0;s<u;++s){var mt=h[s],Xt=mt[l];if(Xt){var ti=mt.pos-me;Xt.depth=mt.depth,Xt.height=mt.height,Be.push({type:"elem",elem:Xt,shift:ti})}}if(Be=Ue({positionType:"individualShift",children:Be}),Be=J(["col-align-"+(H.align||"c")],[Be]),qe.push(Be),l<g-1||n.hskipBeforeAndAfter){var An;Ne=(An=H.postgap)!=null?An:k,Ne!==0&&(Ge=J(["arraycolsep"],[]),Ge.style.width=le(Ne),qe.push(Ge))}}}if(h=J(["mtable"],qe),x.length>0){for(var Qn=Ai("hline",r,_),Ar=Ai("hdashline",r,_),Cn=[{type:"elem",elem:h,shift:0}];x.length>0;){var Pn=x.pop(),Xn=Pn.pos-me;Pn.isDashed?Cn.push({type:"elem",elem:Ar,shift:Xn}):Cn.push({type:"elem",elem:Qn,shift:Xn})}h=Ue({positionType:"individualShift",children:Cn})}if(Fe.length===0)return J(["mord"],[h],r);var Ie=Ue({positionType:"individualShift",children:Fe});return Ie=J(["tag"],[Ie],r),Yn([h,Ie])},e8={c:"center ",l:"left ",r:"right "},jn=function(n,r){for(var s=[],l=new ie("mtd",[],["mtr-glue"]),u=new ie("mtd",[],["mml-eqn-num"]),m=0;m<n.body.length;m++){for(var g=n.body[m],h=[],x=0;x<g.length;x++)h.push(new ie("mtd",[Qe(g[x],r)]));n.tags&&n.tags[m]&&(h.unshift(l),h.push(l),n.leqno?h.unshift(u):h.push(u)),s.push(new ie("mtr",h))}var _=new ie("mtable",s),$=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);_.setAttribute("rowspacing",le($));var k="",T="";if(n.cols&&n.cols.length>0){var P=n.cols,R="",D=!1,E=0,O=P.length;P[0].type==="separator"&&(k+="top ",E=1),P[P.length-1].type==="separator"&&(k+="bottom ",O-=1);for(var G=E;G<O;G++)P[G].type==="align"?(T+=e8[P[G].align],D&&(R+="none "),D=!0):P[G].type==="separator"&&D&&(R+=P[G].separator==="|"?"solid ":"dashed ",D=!1);_.setAttribute("columnalign",T.trim()),/[sd]/.test(R)&&_.setAttribute("columnlines",R.trim())}if(n.colSeparationType==="align"){for(var B=n.cols||[],W="",U=1;U<B.length;U++)W+=U%2?"0em ":"1em ";_.setAttribute("columnspacing",W.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?_.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?_.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?_.setAttribute("columnspacing","0.5em"):_.setAttribute("columnspacing","1em");var L="",V=n.hLinesBeforeRow;k+=V[0].length>0?"left ":"",k+=V[V.length-1].length>0?"right ":"";for(var ne=1;ne<V.length-1;ne++)L+=V[ne].length===0?"none ":V[ne][0]?"dashed ":"solid ";return/[sd]/.test(L)&&_.setAttribute("rowlines",L.trim()),k!==""&&(_=new ie("menclose",[_]),_.setAttribute("notation",k.trim())),n.arraystretch&&n.arraystretch<1&&(_=new ie("mstyle",[_]),_.setAttribute("scriptlevel","1")),_},$m=function(n,r){n.envName.includes("ed")||xs(n);var s=[],l=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",m=jr(n.parser,{cols:s,addJot:!0,autoTag:u?void 0:tu(n.envName),emptySingleRow:!0,colSeparationType:l,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),g,h=0,x={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var _="",$=0;$<r[0].body.length;$++){var k=Pe(r[0].body[$],"textord");_+=k.text}g=Number(_),h=g*2}var T=!h;m.body.forEach(function(E){for(var O=1;O<E.length;O+=2){var G=Pe(E[O],"styling"),B=Pe(G.body[0],"ordgroup");B.body.unshift(x)}if(T)h<E.length&&(h=E.length);else{var W=E.length/2;if(g<W)throw new re("Too many math in a row: "+("expected "+g+", but got "+W),E[0])}});for(var P=0;P<h;++P){var R="r",D=0;P%2===1?R="l":P>0&&T&&(D=1),s[P]={type:"align",align:R,pregap:D,postgap:0}}return m.colSeparationType=T?"align":"alignat",m};qn({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=gs(n[0]),s=r?[n[0]]:Pe(n[0],"ordgroup").body,l=s.map(function(m){var g=Ql(m),h=g.text;if("lcr".includes(h))return{type:"align",align:h};if(h==="|")return{type:"separator",separator:"|"};if(h===":")return{type:"separator",separator:":"};throw new re("Unknown column alignment: "+h,m)}),u={cols:l,hskipBeforeAndAfter:!0,maxNumCols:l.length};return jr(o.parser,u,nu(o.envName))},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var l=o.parser;if(l.consumeSpaces(),l.fetch().text==="["){if(l.consume(),l.consumeSpaces(),r=l.fetch().text,!"lcr".includes(r))throw new re("Expected l or c or r",l.nextToken);l.consume(),l.consumeSpaces(),l.expect("]"),l.consume(),s.cols=[{type:"align",align:r}]}}var u=jr(o.parser,s,nu(o.envName)),m=Math.max(0,...u.body.map(g=>g.length));return u.cols=new Array(m).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=jr(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=gs(n[0]),s=r?[n[0]]:Pe(n[0],"ordgroup").body,l=s.map(function(m){var g=Ql(m),h=g.text;if("lc".includes(h))return{type:"align",align:h};throw new re("Unknown column alignment: "+h,m)});if(l.length>1)throw new re("{subarray} can contain only one column");var u={cols:l,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=jr(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new re("{subarray} can contain only one column");return u},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=jr(o.parser,n,nu(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:$m,htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){Jv.has(o.envName)&&xs(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:tu(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return jr(o.parser,n,"display")},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:$m,htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){xs(o);var n={autoTag:tu(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return jr(o.parser,n,"display")},htmlBuilder:Mn,mathmlBuilder:jn});qn({type:"array",names:["CD"],props:{numArgs:0},handler(o){return xs(o),Lv(o.parser)},htmlBuilder:Mn,mathmlBuilder:jn});b("\\nonumber","\\gdef\\@eqnsw{0}");b("\\notag","\\nonumber");ce({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new re(o.funcName+" valid only within array environment")}});var cd=_m;ce({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];if(l.type!=="ordgroup")throw new re("Invalid environment name",l);for(var u="",m=0;m<l.body.length;++m)u+=Pe(l.body[m],"textord").text;if(s==="\\begin"){if(!cd.hasOwnProperty(u))throw new re("No such environment: "+u,l);var g=cd[u],{args:h,optArgs:x}=r.parseArguments("\\begin{"+u+"}",g),_={mode:r.mode,envName:u,parser:r},$=g.handler(_,h,x);r.expect("\\end",!1);var k=r.nextToken,T=Pe(r.parseFunction(),"environment");if(T.name!==u)throw new re("Mismatch: \\begin{"+u+"} matched by \\end{"+T.name+"}",k);return $}return{type:"environment",mode:r.mode,name:u,nameGroup:l}}});var km=(o,n)=>{var r=o.font,s=n.withFont(r);return He(o.body,s)},zm=(o,n)=>{var r=o.font,s=n.withFont(r);return Qe(o.body,s)},dd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ce({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=us(n[0]),u=s;return u in dd&&(u=dd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:l}},htmlBuilder:km,mathmlBuilder:zm});ce({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"mclass",mode:r.mode,mclass:vs(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:Vn(s)}}});ce({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,breakOnTokenText:l}=o,{mode:u}=r,m=r.parseExpression(!0,l),g="math"+s.slice(1);return{type:"font",mode:u,font:g,body:{type:"ordgroup",mode:r.mode,body:m}}},htmlBuilder:km,mathmlBuilder:zm});var t8=(o,n)=>{var r=n.style,s=r.fracNum(),l=r.fracDen(),u;u=n.havingStyle(s);var m=He(o.numer,u,n);if(o.continued){var g=8.5/n.fontMetrics().ptPerEm,h=3.5/n.fontMetrics().ptPerEm;m.height=m.height<g?g:m.height,m.depth=m.depth<h?h:m.depth}u=n.havingStyle(l);var x=He(o.denom,u,n),_,$,k;o.hasBarLine?(o.barSize?($=st(o.barSize,n),_=Ai("frac-line",n,$)):_=Ai("frac-line",n),$=_.height,k=_.height):(_=null,$=0,k=n.fontMetrics().defaultRuleThickness);var T,P,R;r.size===Ce.DISPLAY.size?(T=n.fontMetrics().num1,$>0?P=3*k:P=7*k,R=n.fontMetrics().denom1):($>0?(T=n.fontMetrics().num2,P=k):(T=n.fontMetrics().num3,P=3*k),R=n.fontMetrics().denom2);var D;if(_){var O=n.fontMetrics().axisHeight;T-m.depth-(O+.5*$)<P&&(T+=P-(T-m.depth-(O+.5*$))),O-.5*$-(x.height-R)<P&&(R+=P-(O-.5*$-(x.height-R)));var G=-(O-.5*$);D=Ue({positionType:"individualShift",children:[{type:"elem",elem:x,shift:R},{type:"elem",elem:_,shift:G},{type:"elem",elem:m,shift:-T}]})}else{var E=T-m.depth-(x.height-R);E<P&&(T+=.5*(P-E),R+=.5*(P-E)),D=Ue({positionType:"individualShift",children:[{type:"elem",elem:x,shift:R},{type:"elem",elem:m,shift:-T}]})}u=n.havingStyle(r),D.height*=u.sizeMultiplier/n.sizeMultiplier,D.depth*=u.sizeMultiplier/n.sizeMultiplier;var B;r.size===Ce.DISPLAY.size?B=n.fontMetrics().delim1:r.size===Ce.SCRIPTSCRIPT.size?B=n.havingStyle(Ce.SCRIPT).fontMetrics().delim2:B=n.fontMetrics().delim2;var W,U;return o.leftDelim==null?W=jo(n,["mopen"]):W=Dl(o.leftDelim,B,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?U=J([]):o.rightDelim==null?U=jo(n,["mclose"]):U=Dl(o.rightDelim,B,!0,n.havingStyle(r),o.mode,["mclose"]),J(["mord"].concat(u.sizingClasses(n)),[W,J(["mfrac"],[D]),U],n)},n8=(o,n)=>{var r=new ie("mfrac",[Qe(o.numer,n),Qe(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=st(o.barSize,n);r.setAttribute("linethickness",le(s))}if(o.leftDelim!=null||o.rightDelim!=null){var l=[];if(o.leftDelim!=null){var u=new ie("mo",[new pt(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),l.push(u)}if(l.push(r),o.rightDelim!=null){var m=new ie("mo",[new pt(o.rightDelim.replace("\\",""))]);m.setAttribute("fence","true"),l.push(m)}return Kl(l)}return r},Sm=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};ce({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0],u=n[1],m,g=null,h=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":m=!0;break;case"\\\\atopfrac":m=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":m=!1,g="(",h=")";break;case"\\\\bracefrac":m=!1,g="\\{",h="\\}";break;case"\\\\brackfrac":m=!1,g="[",h="]";break;default:throw new Error("Unrecognized genfrac command")}var x=s==="\\cfrac",_=null;return x||s.startsWith("\\d")?_="display":s.startsWith("\\t")&&(_="text"),Sm({type:"genfrac",mode:r.mode,numer:l,denom:u,continued:x,hasBarLine:m,leftDelim:g,rightDelim:h,barSize:null},_)},htmlBuilder:t8,mathmlBuilder:n8});ce({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:s}=o,l;switch(r){case"\\over":l="\\frac";break;case"\\choose":l="\\binom";break;case"\\atop":l="\\\\atopfrac";break;case"\\brace":l="\\\\bracefrac";break;case"\\brack":l="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:l,token:s}}});var md=["display","text","script","scriptscript"],fd=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};ce({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,s=n[4],l=n[5],u=us(n[0]),m=u.type==="atom"&&u.family==="open"?fd(u.text):null,g=us(n[1]),h=g.type==="atom"&&g.family==="close"?fd(g.text):null,x=Pe(n[2],"size"),_,$=null;x.isBlank?_=!0:($=x.value,_=$.number>0);var k=null,T=n[3];if(T.type==="ordgroup"){if(T.body.length>0){var P=Pe(T.body[0],"textord");k=md[Number(P.text)]}}else T=Pe(T,"textord"),k=md[Number(T.text)];return Sm({type:"genfrac",mode:r.mode,numer:s,denom:l,continued:!1,hasBarLine:_,barSize:$,leftDelim:m,rightDelim:h},k)}});ce({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:s,token:l}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Pe(n[0],"size").value,token:l}}});ce({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0],u=Pe(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var m=n[2],g=u.number>0;return{type:"genfrac",mode:r.mode,numer:l,denom:m,continued:!1,hasBarLine:g,barSize:u,leftDelim:null,rightDelim:null}}});var Tm=(o,n)=>{var r=n.style,s,l;o.type==="supsub"?(s=o.sup?He(o.sup,n.havingStyle(r.sup()),n):He(o.sub,n.havingStyle(r.sub()),n),l=Pe(o.base,"horizBrace")):l=Pe(o,"horizBrace");var u=He(l.base,n.havingBaseStyle(Ce.DISPLAY)),m=hs(l,n),g;if(l.isOver?(g=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:m}]}),g.children[0].children[0].children[1].classes.push("svg-align")):(g=Ue({positionType:"bottom",positionData:u.depth+.1+m.height,children:[{type:"elem",elem:m},{type:"kern",size:.1},{type:"elem",elem:u}]}),g.children[0].children[0].children[0].classes.push("svg-align")),s){var h=J(["mord",l.isOver?"mover":"munder"],[g],n);l.isOver?g=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:h},{type:"kern",size:.2},{type:"elem",elem:s}]}):g=Ue({positionType:"bottom",positionData:h.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:h}]})}return J(["mord",l.isOver?"mover":"munder"],[g],n)},r8=(o,n)=>{var r=ps(o.label);return new ie(o.isOver?"mover":"munder",[Qe(o.base,n),r])};ce({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:n[0]}},htmlBuilder:Tm,mathmlBuilder:r8});ce({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[1],l=Pe(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:l})?{type:"href",mode:r.mode,href:l,body:dt(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=yt(o.body,n,!1);return bv(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=Mr(o.body,n);return r instanceof ie||(r=new ie("mrow",[r])),r.setAttribute("href",o.href),r}});ce({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=Pe(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var l=[],u=0;u<s.length;u++){var m=s[u];m==="~"&&(m="\\textasciitilde"),l.push({type:"textord",mode:"text",text:m})}var g={type:"text",mode:r.mode,font:"\\texttt",body:l};return{type:"href",mode:r.mode,href:s,body:dt(g)}}});ce({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:dt(n[0])}},htmlBuilder(o,n){var r=yt(o.body,n,!1);return Yn(r)},mathmlBuilder(o,n){return new ie("mrow",Gt(o.body,n))}});ce({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,token:l}=o,u=Pe(n[0],"raw").string,m=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var g,h={};switch(s){case"\\htmlClass":h.class=u,g={command:"\\htmlClass",class:u};break;case"\\htmlId":h.id=u,g={command:"\\htmlId",id:u};break;case"\\htmlStyle":h.style=u,g={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var x=u.split(","),_=0;_<x.length;_++){var $=x[_],k=$.indexOf("=");if(k<0)throw new re("\\htmlData key/value '"+$+"' missing equals sign");var T=$.slice(0,k),P=$.slice(k+1);h["data-"+T.trim()]=P}g={command:"\\htmlData",attributes:h};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(g)?{type:"html",mode:r.mode,attributes:h,body:dt(m)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,n)=>{var r=yt(o.body,n,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var l=J(s,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&l.setAttribute(u,o.attributes[u]);return l},mathmlBuilder:(o,n)=>Mr(o.body,n)});ce({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:dt(n[0]),mathml:dt(n[1])}},htmlBuilder:(o,n)=>{var r=yt(o.html,n,!1);return Yn(r)},mathmlBuilder:(o,n)=>Mr(o.mathml,n)});var $l=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new re("Invalid size: '"+n+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!Wd(s))throw new re("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};ce({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:s}=o,l={number:0,unit:"em"},u={number:.9,unit:"em"},m={number:0,unit:"em"},g="";if(r[0])for(var h=Pe(r[0],"raw").string,x=h.split(","),_=0;_<x.length;_++){var $=x[_].split("=");if($.length===2){var k=$[1].trim();switch($[0].trim()){case"alt":g=k;break;case"width":l=$l(k);break;case"height":u=$l(k);break;case"totalheight":m=$l(k);break;default:throw new re("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var T=Pe(n[0],"url").url;return g===""&&(g=T,g=g.replace(/^.*[\\/]/,""),g=g.substring(0,g.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:T})?{type:"includegraphics",mode:s.mode,alt:g,width:l,height:u,totalheight:m,src:T}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=st(o.height,n),s=0;o.totalheight.number>0&&(s=st(o.totalheight,n)-r);var l=0;o.width.number>0&&(l=st(o.width,n));var u={height:le(r+s)};l>0&&(u.width=le(l)),s>0&&(u.verticalAlign=le(-s));var m=new mv(o.src,o.alt,u);return m.height=r,m.depth=s,m},mathmlBuilder:(o,n)=>{var r=new ie("mglyph",[]);r.setAttribute("alt",o.alt);var s=st(o.height,n),l=0;if(o.totalheight.number>0&&(l=st(o.totalheight,n)-s,r.setAttribute("valign",le(-l))),r.setAttribute("height",le(s+l)),o.width.number>0){var u=st(o.width,n);r.setAttribute("width",le(u))}return r.setAttribute("src",o.src),r}});ce({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,l=Pe(n[0],"size");if(r.settings.strict){var u=s[1]==="m",m=l.value.unit==="mu";u?(m||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+l.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):m&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:l.value}},htmlBuilder(o,n){return Xd(o.dimension,n)},mathmlBuilder(o,n){var r=st(o.dimension,n);return new rm(r)}});ce({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:l}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=J([],[He(o.body,n)]),r=J(["inner"],[r],n)):r=J(["inner"],[He(o.body,n)]);var s=J(["fix"],[]),l=J([o.alignment],[r,s],n),u=J(["strut"]);return u.style.height=le(l.height+l.depth),l.depth&&(u.style.verticalAlign=le(-l.depth)),l.children.unshift(u),l=J(["thinbox"],[l],n),J(["mord","vbox"],[l],n)},mathmlBuilder:(o,n)=>{var r=new ie("mpadded",[Qe(o.body,n)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});ce({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:s}=o,l=s.mode;s.switchMode("math");var u=r==="\\("?"\\)":"$",m=s.parseExpression(!1,u);return s.expect(u),s.switchMode(l),{type:"styling",mode:s.mode,style:"text",body:m}}});ce({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new re("Mismatched "+o.funcName)}});var pd=(o,n)=>{switch(n.style.size){case Ce.DISPLAY.size:return o.display;case Ce.TEXT.size:return o.text;case Ce.SCRIPT.size:return o.script;case Ce.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ce({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:dt(n[0]),text:dt(n[1]),script:dt(n[2]),scriptscript:dt(n[3])}},htmlBuilder:(o,n)=>{var r=pd(o,n),s=yt(r,n,!1);return Yn(s)},mathmlBuilder:(o,n)=>{var r=pd(o,n);return Mr(r,n)}});var qm=(o,n,r,s,l,u,m)=>{o=J([],[o]);var g=r&&Vn(r),h,x;if(n){var _=He(n,s.havingStyle(l.sup()),s);x={elem:_,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-_.depth)}}if(r){var $=He(r,s.havingStyle(l.sub()),s);h={elem:$,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-$.height)}}var k;if(x&&h){var T=s.fontMetrics().bigOpSpacing5+h.elem.height+h.elem.depth+h.kern+o.depth+m;k=Ue({positionType:"bottom",positionData:T,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:le(-u)},{type:"kern",size:h.kern},{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:le(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(h){var P=o.height-m;k=Ue({positionType:"top",positionData:P,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:le(-u)},{type:"kern",size:h.kern},{type:"elem",elem:o}]})}else if(x){var R=o.depth+m;k=Ue({positionType:"bottom",positionData:R,children:[{type:"elem",elem:o},{type:"kern",size:x.kern},{type:"elem",elem:x.elem,marginLeft:le(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var D=[k];if(h&&u!==0&&!g){var E=J(["mspace"],[],s);E.style.marginRight=le(u),D.unshift(E)}return J(["mop","op-limits"],D,s)},Mm=new Set(["\\smallint"]),Ri=(o,n)=>{var r,s,l=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Pe(o.base,"op"),l=!0):u=Pe(o,"op");var m=n.style,g=!1;m.size===Ce.DISPLAY.size&&u.symbol&&!Mm.has(u.name)&&(g=!0);var h;if(u.symbol){var x=g?"Size2-Regular":"Size1-Regular",_="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(_=u.name.slice(1),u.name=_==="oiint"?"\\iint":"\\iiint"),h=Rt(u.name,x,"math",n,["mop","op-symbol",g?"large-op":"small-op"]),_.length>0){var $=h.italic,k=Jd(_+"Size"+(g?"2":"1"),n);h=Ue({positionType:"individualShift",children:[{type:"elem",elem:h,shift:0},{type:"elem",elem:k,shift:g?.08:0}]}),u.name="\\"+_,h.classes.unshift("mop"),h.italic=$}}else if(u.body){var T=yt(u.body,n,!0);T.length===1&&T[0]instanceof ln?(h=T[0],h.classes[0]="mop"):h=J(["mop"],T,n)}else{for(var P=[],R=1;R<u.name.length;R++)P.push(Ul(u.name[R],u.mode,n));h=J(["mop"],P,n)}var D=0,E=0;return(h instanceof ln||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(D=(h.height-h.depth)/2-n.fontMetrics().axisHeight,E=h.italic),l?qm(h,r,s,n,m,E,D):(D&&(h.style.position="relative",h.style.top=le(D)),h)},Po=(o,n)=>{var r;if(o.symbol)r=new ie("mo",[un(o.name,o.mode)]),Mm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new ie("mo",Gt(o.body,n));else{r=new ie("mi",[new pt(o.name.slice(1))]);var s=new ie("mo",[un("⁡","text")]);o.parentIsSupSub?r=new ie("mrow",[r,s]):r=nm([r,s])}return r},i8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ce({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=s;return l.length===1&&(l=i8[l]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:l}},htmlBuilder:Ri,mathmlBuilder:Po});ce({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:dt(s)}},htmlBuilder:Ri,mathmlBuilder:Po});var o8={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ce({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Ri,mathmlBuilder:Po});ce({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Ri,mathmlBuilder:Po});ce({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,s=r;return s.length===1&&(s=o8[s]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Ri,mathmlBuilder:Po});var jm=(o,n)=>{var r,s,l=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Pe(o.base,"operatorname"),l=!0):u=Pe(o,"operatorname");var m;if(u.body.length>0){for(var g=u.body.map($=>{var k=$.text;return typeof k=="string"?{type:"textord",mode:$.mode,text:k}:$}),h=yt(g,n.withFont("mathrm"),!0),x=0;x<h.length;x++){var _=h[x];_ instanceof ln&&(_.text=_.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}m=J(["mop"],h,n)}else m=J(["mop"],[],n);return l?qm(m,r,s,n,n.style,0,0):m},s8=(o,n)=>{for(var r=Gt(o.body,n.withFont("mathrm")),s=!0,l=0;l<r.length;l++){var u=r[l];if(!(u instanceof rm))if(u instanceof ie)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var m=u.children[0];u.children.length===1&&m instanceof pt?m.text=m.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var g=r.map(_=>_.toText()).join("");r=[new pt(g)]}var h=new ie("mi",r);h.setAttribute("mathvariant","normal");var x=new ie("mo",[un("⁡","text")]);return o.parentIsSupSub?new ie("mrow",[h,x]):nm([h,x])};ce({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,l=n[0];return{type:"operatorname",mode:r.mode,body:dt(l),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:jm,mathmlBuilder:s8});b("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ei({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?Yn(yt(o.body,n,!1)):J(["mord"],yt(o.body,n,!0),n)},mathmlBuilder(o,n){return Mr(o.body,n,!0)}});ce({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,s=n[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,n){var r=He(o.body,n.havingCrampedStyle()),s=Ai("overline-line",n),l=n.fontMetrics().defaultRuleThickness,u=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*l},{type:"elem",elem:s},{type:"kern",size:l}]});return J(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new ie("mo",[new pt("‾")]);r.setAttribute("stretchy","true");var s=new ie("mover",[Qe(o.body,n),r]);return s.setAttribute("accent","true"),s}});ce({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"phantom",mode:r.mode,body:dt(s)}},htmlBuilder:(o,n)=>{var r=yt(o.body,n.withPhantom(),!1);return Yn(r)},mathmlBuilder:(o,n)=>{var r=Gt(o.body,n);return new ie("mphantom",r)}});ce({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=J([],[He(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),J(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Gt(dt(o.body),n),s=new ie("mphantom",r),l=new ie("mpadded",[s]);return l.setAttribute("height","0px"),l.setAttribute("depth","0px"),l}});ce({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=J(["inner"],[He(o.body,n.withPhantom())]),s=J(["fix"],[]);return J(["mord","rlap"],[r,s],n)},mathmlBuilder:(o,n)=>{var r=Gt(dt(o.body),n),s=new ie("mphantom",r),l=new ie("mpadded",[s]);return l.setAttribute("width","0px"),l}});ce({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,s=Pe(n[0],"size").value,l=n[1];return{type:"raisebox",mode:r.mode,dy:s,body:l}},htmlBuilder(o,n){var r=He(o.body,n),s=st(o.dy,n);return Ue({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new ie("mpadded",[Qe(o.body,n)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});ce({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});ce({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:s}=o,l=r[0],u=Pe(n[0],"size"),m=Pe(n[1],"size");return{type:"rule",mode:s.mode,shift:l&&Pe(l,"size").value,width:u.value,height:m.value}},htmlBuilder(o,n){var r=J(["mord","rule"],[],n),s=st(o.width,n),l=st(o.height,n),u=o.shift?st(o.shift,n):0;return r.style.borderRightWidth=le(s),r.style.borderTopWidth=le(l),r.style.bottom=le(u),r.width=s,r.height=l+u,r.depth=-u,r.maxFontSize=l*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=st(o.width,n),s=st(o.height,n),l=o.shift?st(o.shift,n):0,u=n.color&&n.getColor()||"black",m=new ie("mspace");m.setAttribute("mathbackground",u),m.setAttribute("width",le(r)),m.setAttribute("height",le(s));var g=new ie("mpadded",[m]);return l>=0?g.setAttribute("height",le(l)):(g.setAttribute("height",le(l)),g.setAttribute("depth",le(-l))),g.setAttribute("voffset",le(l)),g}});function Am(o,n,r){for(var s=yt(o,n,!1),l=n.sizeMultiplier/r.sizeMultiplier,u=0;u<s.length;u++){var m=s[u].classes.indexOf("sizing");m<0?Array.prototype.push.apply(s[u].classes,n.sizingClasses(r)):s[u].classes[m+1]==="reset-size"+n.size&&(s[u].classes[m+1]="reset-size"+r.size),s[u].height*=l,s[u].depth*=l}return Yn(s)}var hd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],a8=(o,n)=>{var r=n.havingSize(o.size);return Am(o.body,r,n)};ce({type:"sizing",names:hd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:s,parser:l}=o,u=l.parseExpression(!1,r);return{type:"sizing",mode:l.mode,size:hd.indexOf(s)+1,body:u}},htmlBuilder:a8,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),s=Gt(o.body,r),l=new ie("mstyle",s);return l.setAttribute("mathsize",le(r.sizeMultiplier)),l}});ce({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:s}=o,l=!1,u=!1,m=r[0]&&Pe(r[0],"ordgroup");if(m)for(var g="",h=0;h<m.body.length;++h){var x=m.body[h];if(g=x.text,g==="t")l=!0;else if(g==="b")u=!0;else{l=!1,u=!1;break}}else l=!0,u=!0;var _=n[0];return{type:"smash",mode:s.mode,body:_,smashHeight:l,smashDepth:u}},htmlBuilder:(o,n)=>{var r=J([],[He(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var l=0;l<r.children.length;l++)r.children[l].depth=0;var u=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return J(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new ie("mpadded",[Qe(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ce({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s}=o,l=r[0],u=n[0];return{type:"sqrt",mode:s.mode,body:u,index:l}},htmlBuilder(o,n){var r=He(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=Ci(r,n);var s=n.fontMetrics(),l=s.defaultRuleThickness,u=l;n.style.id<Ce.TEXT.id&&(u=n.fontMetrics().xHeight);var m=l+u/4,g=r.height+r.depth+m+l,{span:h,ruleWidth:x,advanceWidth:_}=Vv(g,n),$=h.height-x;$>r.height+r.depth+m&&(m=(m+$-r.height-r.depth)/2);var k=h.height-r.height-m-x;r.style.paddingLeft=le(_);var T=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+k)},{type:"elem",elem:h},{type:"kern",size:x}]});if(o.index){var P=n.havingStyle(Ce.SCRIPTSCRIPT),R=He(o.index,P,n),D=.6*(T.height-T.depth),E=Ue({positionType:"shift",positionData:-D,children:[{type:"elem",elem:R}]}),O=J(["root"],[E]);return J(["mord","sqrt"],[O,T],n)}else return J(["mord","sqrt"],[T],n)},mathmlBuilder(o,n){var{body:r,index:s}=o;return s?new ie("mroot",[Qe(r,n),Qe(s,n)]):new ie("msqrt",[Qe(r,n)])}});var gd={display:Ce.DISPLAY,text:Ce.TEXT,script:Ce.SCRIPT,scriptscript:Ce.SCRIPTSCRIPT};ce({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:s,parser:l}=o,u=l.parseExpression(!0,r),m=s.slice(1,s.length-5);return{type:"styling",mode:l.mode,style:m,body:u}},htmlBuilder(o,n){var r=gd[o.style],s=n.havingStyle(r).withFont("");return Am(o.body,s,n)},mathmlBuilder(o,n){var r=gd[o.style],s=n.havingStyle(r),l=Gt(o.body,s),u=new ie("mstyle",l),m={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},g=m[o.style];return u.setAttribute("scriptlevel",g[0]),u.setAttribute("displaystyle",g[1]),u}});var l8=function(n,r){var s=n.base;if(s)if(s.type==="op"){var l=s.limits&&(r.style.size===Ce.DISPLAY.size||s.alwaysHandleSupSub);return l?Ri:null}else if(s.type==="operatorname"){var u=s.alwaysHandleSupSub&&(r.style.size===Ce.DISPLAY.size||s.limits);return u?jm:null}else{if(s.type==="accent")return Vn(s.base)?Xl:null;if(s.type==="horizBrace"){var m=!n.sub;return m===s.isOver?Tm:null}else return null}else return null};ei({type:"supsub",htmlBuilder(o,n){var r=l8(o,n);if(r)return r(o,n);var{base:s,sup:l,sub:u}=o,m=He(s,n),g,h,x=n.fontMetrics(),_=0,$=0,k=s&&Vn(s);if(l){var T=n.havingStyle(n.style.sup());g=He(l,T,n),k||(_=m.height-T.fontMetrics().supDrop*T.sizeMultiplier/n.sizeMultiplier)}if(u){var P=n.havingStyle(n.style.sub());h=He(u,P,n),k||($=m.depth+P.fontMetrics().subDrop*P.sizeMultiplier/n.sizeMultiplier)}var R;n.style===Ce.DISPLAY?R=x.sup1:n.style.cramped?R=x.sup3:R=x.sup2;var D=n.sizeMultiplier,E=le(.5/x.ptPerEm/D),O=null;if(h){var G=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(m instanceof ln||G)&&(O=le(-m.italic))}var B;if(g&&h){_=Math.max(_,R,g.depth+.25*x.xHeight),$=Math.max($,x.sub2);var W=x.defaultRuleThickness,U=4*W;if(_-g.depth-(h.height-$)<U){$=U-(_-g.depth)+h.height;var L=.8*x.xHeight-(_-g.depth);L>0&&(_+=L,$-=L)}var V=[{type:"elem",elem:h,shift:$,marginRight:E,marginLeft:O},{type:"elem",elem:g,shift:-_,marginRight:E}];B=Ue({positionType:"individualShift",children:V})}else if(h){$=Math.max($,x.sub1,h.height-.8*x.xHeight);var ne=[{type:"elem",elem:h,marginLeft:O,marginRight:E}];B=Ue({positionType:"shift",positionData:$,children:ne})}else if(g)_=Math.max(_,R,g.depth+.25*x.xHeight),B=Ue({positionType:"shift",positionData:-_,children:[{type:"elem",elem:g,marginRight:E}]});else throw new Error("supsub must have either sup or sub.");var Se=Cl(m,"right")||"mord";return J([Se],[m,J(["msupsub"],[B])],n)},mathmlBuilder(o,n){var r=!1,s,l;o.base&&o.base.type==="horizBrace"&&(l=!!o.sup,l===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Qe(o.base,n)];o.sub&&u.push(Qe(o.sub,n)),o.sup&&u.push(Qe(o.sup,n));var m;if(r)m=s?"mover":"munder";else if(o.sub)if(o.sup){var x=o.base;x&&x.type==="op"&&x.limits&&n.style===Ce.DISPLAY||x&&x.type==="operatorname"&&x.alwaysHandleSupSub&&(n.style===Ce.DISPLAY||x.limits)?m="munderover":m="msubsup"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(n.style===Ce.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||n.style===Ce.DISPLAY)?m="munder":m="msub"}else{var g=o.base;g&&g.type==="op"&&g.limits&&(n.style===Ce.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||n.style===Ce.DISPLAY)?m="mover":m="msup"}return new ie(m,u)}});ei({type:"atom",htmlBuilder(o,n){return Ul(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new ie("mo",[un(o.text,o.mode)]);if(o.family==="bin"){var s=Yl(o,n);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Cm={mi:"italic",mn:"normal",mtext:"normal"};ei({type:"mathord",htmlBuilder(o,n){return fs(o,n,"mathord")},mathmlBuilder(o,n){var r=new ie("mi",[un(o.text,o.mode,n)]),s=Yl(o,n)||"italic";return s!==Cm[r.type]&&r.setAttribute("mathvariant",s),r}});ei({type:"textord",htmlBuilder(o,n){return fs(o,n,"textord")},mathmlBuilder(o,n){var r=un(o.text,o.mode,n),s=Yl(o,n)||"normal",l;return o.mode==="text"?l=new ie("mtext",[r]):/[0-9]/.test(o.text)?l=new ie("mn",[r]):o.text==="\\prime"?l=new ie("mo",[r]):l=new ie("mi",[r]),s!==Cm[l.type]&&l.setAttribute("mathvariant",s),l}});var kl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},zl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ei({type:"spacing",htmlBuilder(o,n){if(zl.hasOwnProperty(o.text)){var r=zl[o.text].className||"";if(o.mode==="text"){var s=fs(o,n,"textord");return s.classes.push(r),s}else return J(["mspace",r],[Ul(o.text,o.mode,n)],n)}else{if(kl.hasOwnProperty(o.text))return J(["mspace",kl[o.text]],[],n);throw new re('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if(zl.hasOwnProperty(o.text))r=new ie("mtext",[new pt(" ")]);else{if(kl.hasOwnProperty(o.text))return new ie("mspace");throw new re('Unknown type of space "'+o.text+'"')}return r}});var vd=()=>{var o=new ie("mtd",[]);return o.setAttribute("width","50%"),o};ei({type:"tag",mathmlBuilder(o,n){var r=new ie("mtable",[new ie("mtr",[vd(),new ie("mtd",[Mr(o.body,n)]),vd(),new ie("mtd",[Mr(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var yd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},xd={"\\textbf":"textbf","\\textmd":"textmd"},u8={"\\textit":"textit","\\textup":"textup"},bd=(o,n)=>{var r=o.font;if(r){if(yd[r])return n.withTextFontFamily(yd[r]);if(xd[r])return n.withTextFontWeight(xd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(u8[r])};ce({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,l=n[0];return{type:"text",mode:r.mode,body:dt(l),font:s}},htmlBuilder(o,n){var r=bd(o,n),s=yt(o.body,r,!0);return J(["mord","text"],s,r)},mathmlBuilder(o,n){var r=bd(o,n);return Mr(o.body,r)}});ce({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=He(o.body,n),s=Ai("underline-line",n),l=n.fontMetrics().defaultRuleThickness,u=Ue({positionType:"top",positionData:r.height,children:[{type:"kern",size:l},{type:"elem",elem:s},{type:"kern",size:3*l},{type:"elem",elem:r}]});return J(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new ie("mo",[new pt("‾")]);r.setAttribute("stretchy","true");var s=new ie("munder",[Qe(o.body,n),r]);return s.setAttribute("accentunder","true"),s}});ce({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=He(o.body,n),s=n.fontMetrics().axisHeight,l=.5*(r.height-s-(r.depth+s));return Ue({positionType:"shift",positionData:l,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new ie("mpadded",[Qe(o.body,n)],["vcenter"])}});ce({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new re("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=_d(o),s=[],l=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var m=r[u];m==="~"&&(m="\\textasciitilde"),s.push(Rt(m,"Typewriter-Regular",o.mode,l,["mord","texttt"]))}return J(["mord","text"].concat(l.sizingClasses(n)),Qd(s),l)},mathmlBuilder(o,n){var r=new pt(_d(o)),s=new ie("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var _d=o=>o.body.replace(/ /g,o.star?"␣":" "),zr=em,Pm=`[ \r
	]`,c8="\\\\[a-zA-Z@]+",d8="\\\\[^\uD800-\uDFFF]",m8="("+c8+")"+Pm+"*",f8=`\\\\(
|[ \r	]+
?)[ \r	]*`,Nl="[̀-ͯ]",p8=new RegExp(Nl+"+$"),h8="("+Pm+"+)|"+(f8+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Nl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Nl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+m8)+("|"+d8+")");class wd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(h8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Yt("EOF",new Ht(this,r,r));var s=this.tokenRegex.exec(n);if(s===null||s.index!==r)throw new re("Unexpected character: '"+n[r]+"'",new Yt(n[r],new Ht(this,r,r+1)));var l=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[l]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Yt(l,new Ht(this,r,this.tokenRegex.lastIndex))}}class g8{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new re("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,s){if(s===void 0&&(s=!1),s){for(var l=0;l<this.undefStack.length;l++)delete this.undefStack[l][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var v8=wm;b("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});b("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});b("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});b("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});b("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});b("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");b("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var $d={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};b("\\char",function(o){var n=o.popToken(),r,s="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")s=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new re("\\char` missing argument");s=n.text.charCodeAt(0)}else r=10;if(r){if(s=$d[n.text],s==null||s>=r)throw new re("Invalid base-"+r+" digit "+n.text);for(var l;(l=$d[o.future().text])!=null&&l<r;)s*=r,s+=l,o.popToken()}return"\\@char{"+s+"}"});var ru=(o,n,r,s)=>{var l=o.consumeArg().tokens;if(l.length!==1)throw new re("\\newcommand's first argument must be a macro name");var u=l[0].text,m=o.isDefined(u);if(m&&!n)throw new re("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!m&&!r)throw new re("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var g=0;if(l=o.consumeArg().tokens,l.length===1&&l[0].text==="["){for(var h="",x=o.expandNextToken();x.text!=="]"&&x.text!=="EOF";)h+=x.text,x=o.expandNextToken();if(!h.match(/^\s*[0-9]+\s*$/))throw new re("Invalid number of arguments: "+h);g=parseInt(h),l=o.consumeArg().tokens}return m&&s||o.macros.set(u,{tokens:l,numArgs:g}),""};b("\\newcommand",o=>ru(o,!1,!0,!1));b("\\renewcommand",o=>ru(o,!0,!1,!1));b("\\providecommand",o=>ru(o,!0,!0,!0));b("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});b("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});b("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),zr[r],Ze.math[r],Ze.text[r]),""});b("\\bgroup","{");b("\\egroup","}");b("~","\\nobreakspace");b("\\lq","`");b("\\rq","'");b("\\aa","\\r a");b("\\AA","\\r A");b("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");b("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");b("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");b("ℬ","\\mathscr{B}");b("ℰ","\\mathscr{E}");b("ℱ","\\mathscr{F}");b("ℋ","\\mathscr{H}");b("ℐ","\\mathscr{I}");b("ℒ","\\mathscr{L}");b("ℳ","\\mathscr{M}");b("ℛ","\\mathscr{R}");b("ℭ","\\mathfrak{C}");b("ℌ","\\mathfrak{H}");b("ℨ","\\mathfrak{Z}");b("\\Bbbk","\\Bbb{k}");b("·","\\cdotp");b("\\llap","\\mathllap{\\textrm{#1}}");b("\\rlap","\\mathrlap{\\textrm{#1}}");b("\\clap","\\mathclap{\\textrm{#1}}");b("\\mathstrut","\\vphantom{(}");b("\\underbar","\\underline{\\text{#1}}");b("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');b("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");b("\\ne","\\neq");b("≠","\\neq");b("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");b("∉","\\notin");b("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");b("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");b("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");b("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");b("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");b("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");b("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");b("⟂","\\perp");b("‼","\\mathclose{!\\mkern-0.8mu!}");b("∌","\\notni");b("⌜","\\ulcorner");b("⌝","\\urcorner");b("⌞","\\llcorner");b("⌟","\\lrcorner");b("©","\\copyright");b("®","\\textregistered");b("️","\\textregistered");b("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');b("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');b("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');b("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');b("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");b("⋮","\\vdots");b("\\varGamma","\\mathit{\\Gamma}");b("\\varDelta","\\mathit{\\Delta}");b("\\varTheta","\\mathit{\\Theta}");b("\\varLambda","\\mathit{\\Lambda}");b("\\varXi","\\mathit{\\Xi}");b("\\varPi","\\mathit{\\Pi}");b("\\varSigma","\\mathit{\\Sigma}");b("\\varUpsilon","\\mathit{\\Upsilon}");b("\\varPhi","\\mathit{\\Phi}");b("\\varPsi","\\mathit{\\Psi}");b("\\varOmega","\\mathit{\\Omega}");b("\\substack","\\begin{subarray}{c}#1\\end{subarray}");b("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");b("\\boxed","\\fbox{$\\displaystyle{#1}$}");b("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");b("\\implies","\\DOTSB\\;\\Longrightarrow\\;");b("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");b("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");b("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var kd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},y8=new Set(["bin","rel"]);b("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in kd?n=kd[r]:(r.slice(0,4)==="\\not"||r in Ze.math&&y8.has(Ze.math[r].group))&&(n="\\dotsb"),n});var iu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};b("\\dotso",function(o){var n=o.future().text;return n in iu?"\\ldots\\,":"\\ldots"});b("\\dotsc",function(o){var n=o.future().text;return n in iu&&n!==","?"\\ldots\\,":"\\ldots"});b("\\cdots",function(o){var n=o.future().text;return n in iu?"\\@cdots\\,":"\\@cdots"});b("\\dotsb","\\cdots");b("\\dotsm","\\cdots");b("\\dotsi","\\!\\cdots");b("\\dotsx","\\ldots\\,");b("\\DOTSI","\\relax");b("\\DOTSB","\\relax");b("\\DOTSX","\\relax");b("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");b("\\,","\\tmspace+{3mu}{.1667em}");b("\\thinspace","\\,");b("\\>","\\mskip{4mu}");b("\\:","\\tmspace+{4mu}{.2222em}");b("\\medspace","\\:");b("\\;","\\tmspace+{5mu}{.2777em}");b("\\thickspace","\\;");b("\\!","\\tmspace-{3mu}{.1667em}");b("\\negthinspace","\\!");b("\\negmedspace","\\tmspace-{4mu}{.2222em}");b("\\negthickspace","\\tmspace-{5mu}{.277em}");b("\\enspace","\\kern.5em ");b("\\enskip","\\hskip.5em\\relax");b("\\quad","\\hskip1em\\relax");b("\\qquad","\\hskip2em\\relax");b("\\tag","\\@ifstar\\tag@literal\\tag@paren");b("\\tag@paren","\\tag@literal{({#1})}");b("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new re("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});b("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");b("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");b("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");b("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");b("\\newline","\\\\\\relax");b("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Rm=le(Tn["Main-Regular"][84][1]-.7*Tn["Main-Regular"][65][1]);b("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Rm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");b("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Rm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");b("\\hspace","\\@ifstar\\@hspacer\\@hspace");b("\\@hspace","\\hskip #1\\relax");b("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");b("\\ordinarycolon",":");b("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");b("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');b("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');b("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');b("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');b("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');b("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');b("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');b("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');b("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');b("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');b("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');b("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');b("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');b("∷","\\dblcolon");b("∹","\\eqcolon");b("≔","\\coloneqq");b("≕","\\eqqcolon");b("⩴","\\Coloneqq");b("\\ratio","\\vcentcolon");b("\\coloncolon","\\dblcolon");b("\\colonequals","\\coloneqq");b("\\coloncolonequals","\\Coloneqq");b("\\equalscolon","\\eqqcolon");b("\\equalscoloncolon","\\Eqqcolon");b("\\colonminus","\\coloneq");b("\\coloncolonminus","\\Coloneq");b("\\minuscolon","\\eqcolon");b("\\minuscoloncolon","\\Eqcolon");b("\\coloncolonapprox","\\Colonapprox");b("\\coloncolonsim","\\Colonsim");b("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");b("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");b("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");b("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");b("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");b("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");b("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");b("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");b("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");b("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");b("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");b("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");b("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");b("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");b("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");b("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");b("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");b("\\nleqq","\\html@mathml{\\@nleqq}{≰}");b("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");b("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");b("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");b("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");b("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");b("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");b("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");b("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");b("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");b("\\imath","\\html@mathml{\\@imath}{ı}");b("\\jmath","\\html@mathml{\\@jmath}{ȷ}");b("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");b("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");b("⟦","\\llbracket");b("⟧","\\rrbracket");b("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");b("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");b("⦃","\\lBrace");b("⦄","\\rBrace");b("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");b("⦵","\\minuso");b("\\darr","\\downarrow");b("\\dArr","\\Downarrow");b("\\Darr","\\Downarrow");b("\\lang","\\langle");b("\\rang","\\rangle");b("\\uarr","\\uparrow");b("\\uArr","\\Uparrow");b("\\Uarr","\\Uparrow");b("\\N","\\mathbb{N}");b("\\R","\\mathbb{R}");b("\\Z","\\mathbb{Z}");b("\\alef","\\aleph");b("\\alefsym","\\aleph");b("\\Alpha","\\mathrm{A}");b("\\Beta","\\mathrm{B}");b("\\bull","\\bullet");b("\\Chi","\\mathrm{X}");b("\\clubs","\\clubsuit");b("\\cnums","\\mathbb{C}");b("\\Complex","\\mathbb{C}");b("\\Dagger","\\ddagger");b("\\diamonds","\\diamondsuit");b("\\empty","\\emptyset");b("\\Epsilon","\\mathrm{E}");b("\\Eta","\\mathrm{H}");b("\\exist","\\exists");b("\\harr","\\leftrightarrow");b("\\hArr","\\Leftrightarrow");b("\\Harr","\\Leftrightarrow");b("\\hearts","\\heartsuit");b("\\image","\\Im");b("\\infin","\\infty");b("\\Iota","\\mathrm{I}");b("\\isin","\\in");b("\\Kappa","\\mathrm{K}");b("\\larr","\\leftarrow");b("\\lArr","\\Leftarrow");b("\\Larr","\\Leftarrow");b("\\lrarr","\\leftrightarrow");b("\\lrArr","\\Leftrightarrow");b("\\Lrarr","\\Leftrightarrow");b("\\Mu","\\mathrm{M}");b("\\natnums","\\mathbb{N}");b("\\Nu","\\mathrm{N}");b("\\Omicron","\\mathrm{O}");b("\\plusmn","\\pm");b("\\rarr","\\rightarrow");b("\\rArr","\\Rightarrow");b("\\Rarr","\\Rightarrow");b("\\real","\\Re");b("\\reals","\\mathbb{R}");b("\\Reals","\\mathbb{R}");b("\\Rho","\\mathrm{P}");b("\\sdot","\\cdot");b("\\sect","\\S");b("\\spades","\\spadesuit");b("\\sub","\\subset");b("\\sube","\\subseteq");b("\\supe","\\supseteq");b("\\Tau","\\mathrm{T}");b("\\thetasym","\\vartheta");b("\\weierp","\\wp");b("\\Zeta","\\mathrm{Z}");b("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");b("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");b("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");b("\\bra","\\mathinner{\\langle{#1}|}");b("\\ket","\\mathinner{|{#1}\\rangle}");b("\\braket","\\mathinner{\\langle{#1}\\rangle}");b("\\Bra","\\left\\langle#1\\right|");b("\\Ket","\\left|#1\\right\\rangle");var Em=o=>n=>{var r=n.consumeArg().tokens,s=n.consumeArg().tokens,l=n.consumeArg().tokens,u=n.consumeArg().tokens,m=n.macros.get("|"),g=n.macros.get("\\|");n.macros.beginGroup();var h=$=>k=>{o&&(k.macros.set("|",m),l.length&&k.macros.set("\\|",g));var T=$;if(!$&&l.length){var P=k.future();P.text==="|"&&(k.popToken(),T=!0)}return{tokens:T?l:s,numArgs:0}};n.macros.set("|",h(!1)),l.length&&n.macros.set("\\|",h(!0));var x=n.consumeArg().tokens,_=n.expandTokens([...u,...x,...r]);return n.macros.endGroup(),{tokens:_.reverse(),numArgs:0}};b("\\bra@ket",Em(!1));b("\\bra@set",Em(!0));b("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");b("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");b("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");b("\\angln","{\\angl n}");b("\\blue","\\textcolor{##6495ed}{#1}");b("\\orange","\\textcolor{##ffa500}{#1}");b("\\pink","\\textcolor{##ff00af}{#1}");b("\\red","\\textcolor{##df0030}{#1}");b("\\green","\\textcolor{##28ae7b}{#1}");b("\\gray","\\textcolor{gray}{#1}");b("\\purple","\\textcolor{##9d38bd}{#1}");b("\\blueA","\\textcolor{##ccfaff}{#1}");b("\\blueB","\\textcolor{##80f6ff}{#1}");b("\\blueC","\\textcolor{##63d9ea}{#1}");b("\\blueD","\\textcolor{##11accd}{#1}");b("\\blueE","\\textcolor{##0c7f99}{#1}");b("\\tealA","\\textcolor{##94fff5}{#1}");b("\\tealB","\\textcolor{##26edd5}{#1}");b("\\tealC","\\textcolor{##01d1c1}{#1}");b("\\tealD","\\textcolor{##01a995}{#1}");b("\\tealE","\\textcolor{##208170}{#1}");b("\\greenA","\\textcolor{##b6ffb0}{#1}");b("\\greenB","\\textcolor{##8af281}{#1}");b("\\greenC","\\textcolor{##74cf70}{#1}");b("\\greenD","\\textcolor{##1fab54}{#1}");b("\\greenE","\\textcolor{##0d923f}{#1}");b("\\goldA","\\textcolor{##ffd0a9}{#1}");b("\\goldB","\\textcolor{##ffbb71}{#1}");b("\\goldC","\\textcolor{##ff9c39}{#1}");b("\\goldD","\\textcolor{##e07d10}{#1}");b("\\goldE","\\textcolor{##a75a05}{#1}");b("\\redA","\\textcolor{##fca9a9}{#1}");b("\\redB","\\textcolor{##ff8482}{#1}");b("\\redC","\\textcolor{##f9685d}{#1}");b("\\redD","\\textcolor{##e84d39}{#1}");b("\\redE","\\textcolor{##bc2612}{#1}");b("\\maroonA","\\textcolor{##ffbde0}{#1}");b("\\maroonB","\\textcolor{##ff92c6}{#1}");b("\\maroonC","\\textcolor{##ed5fa6}{#1}");b("\\maroonD","\\textcolor{##ca337c}{#1}");b("\\maroonE","\\textcolor{##9e034e}{#1}");b("\\purpleA","\\textcolor{##ddd7ff}{#1}");b("\\purpleB","\\textcolor{##c6b9fc}{#1}");b("\\purpleC","\\textcolor{##aa87ff}{#1}");b("\\purpleD","\\textcolor{##7854ab}{#1}");b("\\purpleE","\\textcolor{##543b78}{#1}");b("\\mintA","\\textcolor{##f5f9e8}{#1}");b("\\mintB","\\textcolor{##edf2df}{#1}");b("\\mintC","\\textcolor{##e0e5cc}{#1}");b("\\grayA","\\textcolor{##f6f7f7}{#1}");b("\\grayB","\\textcolor{##f0f1f2}{#1}");b("\\grayC","\\textcolor{##e3e5e6}{#1}");b("\\grayD","\\textcolor{##d6d8da}{#1}");b("\\grayE","\\textcolor{##babec2}{#1}");b("\\grayF","\\textcolor{##888d93}{#1}");b("\\grayG","\\textcolor{##626569}{#1}");b("\\grayH","\\textcolor{##3b3e40}{#1}");b("\\grayI","\\textcolor{##21242c}{#1}");b("\\kaBlue","\\textcolor{##314453}{#1}");b("\\kaGreen","\\textcolor{##71B307}{#1}");var Dm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class x8{constructor(n,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new g8(v8,r.macros),this.mode=s,this.stack=[]}feed(n){this.lexer=new wd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,s,l;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:l,end:s}=this.consumeArg(["]"])}else({tokens:l,start:r,end:s}=this.consumeArg());return this.pushToken(new Yt("EOF",s.loc)),this.pushTokens(l),new Yt("",Ht.range(r,s))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],s=n&&n.length>0;s||this.consumeSpaces();var l=this.future(),u,m=0,g=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++m;else if(u.text==="}"){if(--m,m===-1)throw new re("Extra }",u)}else if(u.text==="EOF")throw new re("Unexpected end of input in a macro argument, expected '"+(n&&s?n[g]:"}")+"'",u);if(n&&s)if((m===0||m===1&&n[g]==="{")&&u.text===n[g]){if(++g,g===n.length){r.splice(-g,g);break}}else g=0}while(m!==0||s);return l.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:l,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new re("The length of delimiters doesn't match the number of args!");for(var s=r[0],l=0;l<s.length;l++){var u=this.popToken();if(s[l]!==u.text)throw new re("Use of the macro doesn't match its definition",u)}}for(var m=[],g=0;g<n;g++)m.push(this.consumeArg(r&&r[g+1]).tokens);return m}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new re("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),s=r.text,l=r.noexpand?null:this._getExpansion(s);if(l==null||n&&l.unexpandable){if(n&&l==null&&s[0]==="\\"&&!this.isDefined(s))throw new re("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var u=l.tokens,m=this.consumeArgs(l.numArgs,l.delimiters);if(l.numArgs){u=u.slice();for(var g=u.length-1;g>=0;--g){var h=u[g];if(h.text==="#"){if(g===0)throw new re("Incomplete placeholder at end of macro body",h);if(h=u[--g],h.text==="#")u.splice(g+1,1);else if(/^[1-9]$/.test(h.text))u.splice(g,2,...m[+h.text-1]);else throw new re("Not a valid argument number",h)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Yt(n)]):void 0}expandTokens(n){var r=[],s=this.stack.length;for(this.pushTokens(n);this.stack.length>s;)if(this.expandOnce(!0)===!1){var l=this.stack.pop();l.treatAsRelax&&(l.noexpand=!1,l.treatAsRelax=!1),r.push(l)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(s=>s.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var s=this.lexer.catcodes[n];if(s!=null&&s!==13)return}var l=typeof r=="function"?r(this):r;if(typeof l=="string"){var u=0;if(l.includes("#"))for(var m=l.replace(/##/g,"");m.includes("#"+(u+1));)++u;for(var g=new wd(l,this.settings),h=[],x=g.lex();x.text!=="EOF";)h.push(x),x=g.lex();h.reverse();var _={tokens:h,numArgs:u};return _}return l}isDefined(n){return this.macros.has(n)||zr.hasOwnProperty(n)||Ze.math.hasOwnProperty(n)||Ze.text.hasOwnProperty(n)||Dm.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:zr.hasOwnProperty(n)&&!zr[n].primitive}}var zd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ts=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Sl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Sd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class bs{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new x8(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new re("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Yt("}")),this.gullet.pushTokens(n);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(n,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var l=this.fetch();if(bs.endOfExpression.has(l.text)||r&&l.text===r||n&&zr[l.text]&&zr[l.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;s.push(u)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(n){for(var r=-1,s,l=0;l<n.length;l++)if(n[l].type==="infix"){if(r!==-1)throw new re("only one infix operator per group",n[l].token);r=l,s=n[l].replaceWith}if(r!==-1&&s){var u,m,g=n.slice(0,r),h=n.slice(r+1);g.length===1&&g[0].type==="ordgroup"?u=g[0]:u={type:"ordgroup",mode:this.mode,body:g},h.length===1&&h[0].type==="ordgroup"?m=h[0]:m={type:"ordgroup",mode:this.mode,body:h};var x;return s==="\\\\abovefrac"?x=this.callFunction(s,[u,n[r],m],[]):x=this.callFunction(s,[u,m],[]),[x]}else return n}handleSupSubscript(n){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var l;do{var u;l=this.parseGroup(n)}while(((u=l)==null?void 0:u.type)==="internal");if(!l)throw new re("Expected group after '"+s+"'",r);return l}formatUnsupportedCmd(n){for(var r=[],s=0;s<n.length;s++)r.push({type:"textord",mode:"text",text:n[s]});var l={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[l]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,l;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var m=u.text==="\\limits";r.limits=m,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new re("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(s)throw new re("Double superscript",u);s=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(l)throw new re("Double subscript",u);l=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(s)throw new re("Double superscript",u);var g={type:"textord",mode:this.mode,text:"\\prime"},h=[g];for(this.consume();this.fetch().text==="'";)h.push(g),this.consume();this.fetch().text==="^"&&h.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:h}}else if(ts[u.text]){var x=zd.test(u.text),_=[];for(_.push(new Yt(ts[u.text])),this.consume();;){var $=this.fetch().text;if(!ts[$]||zd.test($)!==x)break;_.unshift(new Yt(ts[$])),this.consume()}var k=this.subparse(_);x?l={type:"ordgroup",mode:"math",body:k}:s={type:"ordgroup",mode:"math",body:k}}else break}return s||l?{type:"supsub",mode:this.mode,base:r,sup:s,sub:l}:r}parseFunction(n,r){var s=this.fetch(),l=s.text,u=zr[l];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new re("Got function '"+l+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!u.allowedInText)throw new re("Can't use function '"+l+"' in text mode",s);if(this.mode==="math"&&u.allowedInMath===!1)throw new re("Can't use function '"+l+"' in math mode",s);var{args:m,optArgs:g}=this.parseArguments(l,u);return this.callFunction(l,m,g,s,n)}callFunction(n,r,s,l,u){var m={funcName:n,parser:this,token:l,breakOnTokenText:u},g=zr[n];if(g&&g.handler)return g.handler(m,r,s);throw new re("No function handler for "+n)}parseArguments(n,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var l=[],u=[],m=0;m<s;m++){var g=r.argTypes&&r.argTypes[m],h=m<r.numOptionalArgs;(r.primitive&&g==null||r.type==="sqrt"&&m===1&&u[0]==null)&&(g="primitive");var x=this.parseGroupOfType("argument to '"+n+"'",g,h);if(h)u.push(x);else if(x!=null)l.push(x);else throw new re("Null argument, please report this as a bug")}return{args:l,optArgs:u}}parseGroupOfType(n,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var l=this.parseArgumentGroup(s,"text");return l!=null?{type:"styling",mode:l.mode,body:[l],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",s);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(s)throw new re("A primitive argument cannot be optional");var m=this.parseGroup(n);if(m==null)throw new re("Expected group as "+n,this.fetch());return m}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new re("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var l="",u;(u=this.fetch()).text!=="EOF";)l+=u.text,this.consume();return this.consume(),s.text=l,s}parseRegexGroup(n,r){for(var s=this.fetch(),l=s,u="",m;(m=this.fetch()).text!=="EOF"&&n.test(u+m.text);)l=m,u+=l.text,this.consume();if(u==="")throw new re("Invalid "+r+": '"+s.text+"'",s);return s.range(l,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new re("Invalid color: '"+r.text+"'",r);var l=s[0];return/^[0-9a-f]{6}$/i.test(l)&&(l="#"+l),{type:"color-token",mode:this.mode,color:l}}parseSizeGroup(n){var r,s=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",s=!0);var l=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!l)throw new re("Invalid size: '"+r.text+"'",r);var u={number:+(l[1]+l[2]),unit:l[3]};if(!Wd(u))throw new re("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:s}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(n,r){var s=this.gullet.scanArgument(n);if(s==null)return null;var l=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var m={type:"ordgroup",mode:this.mode,loc:s.loc,body:u};return r&&this.switchMode(l),m}parseGroup(n,r){var s=this.fetch(),l=s.text,u;if(l==="{"||l==="\\begingroup"){this.consume();var m=l==="{"?"}":"\\endgroup";this.gullet.beginGroup();var g=this.parseExpression(!1,m),h=this.fetch();this.expect(m),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Ht.range(s,h),body:g,semisimple:l==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&l[0]==="\\"&&!Dm.hasOwnProperty(l)){if(this.settings.throwOnError)throw new re("Undefined control sequence: "+l,s);u=this.formatUnsupportedCmd(l),this.consume()}return u}formLigatures(n){for(var r=n.length-1,s=0;s<r;++s){var l=n[s],u=l.text;u==="-"&&n[s+1].text==="-"&&(s+1<r&&n[s+2].text==="-"?(n.splice(s,3,{type:"textord",mode:"text",loc:Ht.range(l,n[s+2]),text:"---"}),r-=2):(n.splice(s,2,{type:"textord",mode:"text",loc:Ht.range(l,n[s+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[s+1].text===u&&(n.splice(s,2,{type:"textord",mode:"text",loc:Ht.range(l,n[s+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),l=s.charAt(0)==="*";if(l&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new re(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:l}}Sd.hasOwnProperty(r[0])&&!Ze[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Sd[r[0]]+r.slice(1));var u=p8.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var m;if(Ze[this.mode][r]){this.settings.strict&&this.mode==="math"&&jl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var g=Ze[this.mode][r].group,h=Ht.range(n),x;if(hv.hasOwnProperty(g)){var _=g;x={type:"atom",mode:this.mode,family:_,loc:h,text:r}}else x={type:g,mode:this.mode,loc:h,text:r};m=x}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Gd(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),m={type:"textord",mode:"text",loc:Ht.range(n),text:r};else return null;if(this.consume(),u)for(var $=0;$<u[0].length;$++){var k=u[0][$];if(!Sl[k])throw new re("Unknown accent ' "+k+"'",n);var T=Sl[k][this.mode]||Sl[k].text;if(!T)throw new re("Accent "+k+" unsupported in "+this.mode+" mode",n);m={type:"accent",mode:this.mode,loc:Ht.range(n),label:T,isStretchy:!1,isShifty:!0,base:m}}return m}}bs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var ou=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new bs(n,r);delete s.gullet.macros.current["\\df@tag"];var l=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new re("\\tag works only in display equations");l=[{type:"tag",mode:"text",body:l,tag:s.subparse([new Yt("\\df@tag")])}]}return l},Nm=function(n,r,s){r.textContent="";var l=su(n,s).toNode();r.appendChild(l)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Nm=function(){throw new re("KaTeX doesn't work in quirks mode.")});var b8=function(n,r){var s=su(n,r).toMarkup();return s},_8=function(n,r){var s=new Ol(r);return ou(n,s)},Bm=function(n,r,s){if(s.throwOnError||!(n instanceof re))throw n;var l=J(["katex-error"],[new ln(r)]);return l.setAttribute("title",n.toString()),l.setAttribute("style","color:"+s.errorColor),l},su=function(n,r){var s=new Ol(r);try{var l=ou(n,s);return Av(l,n,s)}catch(u){return Bm(u,n,s)}},w8=function(n,r){var s=new Ol(r);try{var l=ou(n,s);return Cv(l,n,s)}catch(u){return Bm(u,n,s)}},$8="0.16.33",k8={Span:Co,Anchor:Wl,SymbolNode:ln,SvgNode:Un,PathNode:Tr,LineNode:Ml},Td={version:$8,render:Nm,renderToString:b8,ParseError:re,SETTINGS_SCHEMA:ns,__parse:_8,__renderToDomTree:su,__renderToHTMLTree:w8,__setFontMetrics:av,__defineSymbol:d,__defineFunction:ce,__defineMacro:b,__domTree:k8};function z8(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Td.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Td.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(l){return`<span style="color:red">[latex error: ${l.message}]</span>`}}),n}class cs{constructor(n){this._perm=n}get length(){return this._perm.length}originalIndex(n){return this._perm[n]}displayIndex(n){return this._perm.indexOf(n)}apply(n){return this._perm.map(r=>n[r])}static random(n){const r=Array.from({length:n},(s,l)=>l);for(let s=n-1;s>0;s--){const l=Math.floor(Math.random()*(s+1));[r[s],r[l]]=[r[l],r[s]]}return new cs(r)}static identity(n){return new cs(Array.from({length:n},(r,s)=>s))}}function S8({nodeId:o,nodes:n,questionBank:r,onAnswer:s,onSkip:l,lang:u,excludeIndices:m=[]}){const g=n.find(W=>W.id===o),h=X.useMemo(()=>v5(r,o,m),[o,m]),x="#4a9eff",_=g?u==="pl"?g.labelPl:g.label:o,$=X.useMemo(()=>h?cs.random(h.options.length):null,[h]),k=X.useMemo(()=>$?$.apply(h.options):[],[$,h]),T=X.useMemo(()=>$?$.displayIndex(h.correct):-1,[$,h]),[P,R]=X.useState(null),[D,E]=X.useState(!1),O=()=>{P!==null&&E(!0)},G=()=>{s(P===T,h,h.index),R(null),E(!1)},B=W=>w.jsx("span",{dangerouslySetInnerHTML:{__html:z8(W)}});return w.jsx("div",{style:{position:"fixed",inset:0,zIndex:100,background:"rgba(5,9,18,0.75)",backdropFilter:"blur(3px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:W=>{W.target===W.currentTarget&&l((h==null?void 0:h.index)??-1)},children:w.jsxs("div",{style:{width:"100%",maxWidth:500,background:ae.surface,border:`1px solid ${x}40`,borderRadius:12,padding:"20px 24px",color:ae.textBody,boxShadow:"0 24px 64px rgba(0,0,0,0.6)",maxHeight:"90vh",overflowY:"auto",boxSizing:"border-box"},children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12},children:[w.jsx("div",{style:{color:x,fontWeight:700,fontSize:14},children:_}),w.jsx("button",{onClick:()=>l((h==null?void 0:h.index)??-1),style:{background:"none",border:"none",color:ae.textDim,cursor:"pointer",fontSize:20,lineHeight:1,padding:"0 4px",minWidth:32,minHeight:32},children:"×"})]}),h?w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{fontSize:14,color:ae.textBody,marginBottom:16,lineHeight:1.7},children:B(h.q)}),w.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:16},children:k.map((W,U)=>{let L=ae.bg,V=ae.border,ne=ae.textBody;return P===U&&!D&&(L=`${x}22`,V=x,ne=x),D&&(U===T?(L="#27ae6022",V="#27ae60",ne="#2ecc71"):U===P&&(L="#e74c3c22",V="#e74c3c",ne="#ff6b6b")),w.jsxs("button",{onClick:()=>{D||R(U)},style:{textAlign:"left",padding:"12px 14px",borderRadius:8,fontSize:13,cursor:D?"default":"pointer",background:L,border:`1px solid ${V}`,color:ne,lineHeight:1.5,minHeight:44},children:[w.jsxs("span",{style:{marginRight:8,opacity:.5},children:[["A","B","C","D"][U],"."]}),B(W)]},U)})}),D&&h.hint&&w.jsx("div",{style:{fontSize:12,color:ae.textMuted,marginBottom:14,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:B(h.hint)}),D?w.jsx("button",{onClick:G,style:{...ko(P===T?"#27ae60":"#e74c3c"),width:"100%"},children:Z(P===T?"knownConfirm":"unknownConfirm",u)}):w.jsx("button",{onClick:O,disabled:P===null,style:{...ko(x),width:"100%",opacity:P===null?.4:1},children:Z("checkAnswer",u)})]}):w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{color:ae.textDim,fontSize:13,marginBottom:16},children:Z("noQuestion",u)}),w.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[w.jsx("button",{onClick:()=>s(!0,null,-1),style:ko("#27ae60"),children:Z("yesKnow",u)}),w.jsx("button",{onClick:()=>s(!1,null,-1),style:ko("#e74c3c"),children:Z("noKnow",u)}),w.jsx("button",{onClick:()=>l(-1),style:ko("#3a4d63"),children:Z("skipBtn",u)})]})]})]})})}const T8={position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function q8({belief:o,frontier:n,visibleFrontier:r,hasStarted:s,nextSuggestedId:l,sessionComplete:u,adjacency:m,expectedRemaining:g,pCorrect:h,questionsAnswered:x,nodes:_,lang:$,onReset:k,onNodeClick:T,SCOPE_LABELS:P,isMobile:R}){var Se,Te;const D=Object.fromEntries(_.map(me=>[me.id,me])),E=me=>{var be,qe;return $==="pl"?(be=D[me])==null?void 0:be.labelPl:(qe=D[me])==null?void 0:qe.label},O=_.filter(me=>o[me.id]==="known"),G=_.filter(me=>o[me.id]==="unknown"),B=_.length,W=[{label:Z("statKnown",$),count:O.length,color:"#27ae60"},{label:Z("statUnknown",$),count:G.length,color:"#e74c3c"},{label:Z("statRemaining",$),count:g??"-",color:"#4a9eff"}],U=h?Math.round(h*100):50,L=R?13:11,V=R?11:9,ne=w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{fontWeight:700,fontSize:R?14:12,marginBottom:10,color:ae.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsxs("span",{children:[Z("diagHeader",$)," ",u?"✓":""]}),w.jsx("button",{onClick:k,style:{fontSize:V,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${ae.textFaint}`,color:ae.textDim,minHeight:R?32:"auto"},children:Z("reset",$)})]}),w.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:W.map(({label:me,count:be,color:qe})=>w.jsxs("div",{style:{flex:1,textAlign:"center",background:`${qe}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${qe}40`},children:[w.jsx("div",{style:{color:qe,fontWeight:700,fontSize:R?20:15},children:be}),w.jsx("div",{style:{color:ae.textDim,fontSize:V},children:me})]},me))}),!u&&s&&w.jsxs("div",{style:{fontSize:V,color:ae.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[w.jsxs("span",{children:[Z("answered",$),": ",w.jsx("span",{style:{color:ae.textPrimary},children:x})]}),w.jsxs("span",{children:[Z("estimated",$),": ",w.jsxs("span",{style:{color:"#4a9eff"},children:["~",g??"-"]})]}),w.jsxs("span",{children:[Z("accuracy",$),": ",w.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]})]})]}),u&&w.jsxs("div",{children:[w.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[w.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:R?14:12,marginBottom:4},children:Z("sessionDone",$)}),w.jsxs("div",{style:{color:ae.textDim,fontSize:V,lineHeight:1.6},children:[Z("sessionDoneSub",$)," ",w.jsx("span",{style:{color:ae.textPrimary},children:x})," ",Z("sessionDoneQ",$),"."," ",Z("sessionDoneClass",$)," ",O.length+G.length,"/",B,".",w.jsx("br",{}),Z("sessionDoneAcc",$),": ",w.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]}),"."," ",Z("sessionDoneKnown",$)," ",w.jsx("span",{style:{color:"#2ecc71"},children:O.length}),","," ",Z("sessionDoneStudy",$)," ",w.jsx("span",{style:{color:"#e74c3c"},children:G.length}),"."]})]}),G.length>0&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{color:"#e74c3c",fontSize:L,fontWeight:600,marginBottom:5},children:[Z("toStudy",$)," (",G.length,")"]}),_.filter(me=>o[me.id]==="unknown").filter(me=>(m.prereqs[me.id]??[]).every(be=>o[be]==="known")).slice(0,8).map(me=>{var be,qe;return w.jsxs("div",{style:{padding:R?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:L,color:"#ff8a8a",lineHeight:1.4},children:[E(me.id),w.jsx("div",{style:{fontSize:V,color:ae.textDim,marginTop:1},children:(qe=P==null?void 0:P[(be=D[me.id])==null?void 0:be.scope])==null?void 0:qe[$==="pl"?"pl":"en"]})]},me.id)})]}),O.length>0&&w.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:L},children:["✓ ",Z("knownList",$)," ",O.length]})]}),!u&&!s&&w.jsxs("div",{style:{marginBottom:10},children:[l&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{color:"#4a9eff",fontSize:L,fontWeight:600,marginBottom:5},children:Z("startHere",$)}),w.jsxs("div",{onClick:()=>T==null?void 0:T(l),style:{padding:R?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:L,color:"#a8d4ff",minHeight:R?44:"auto"},children:[w.jsx("div",{style:{fontWeight:600},children:E(l)}),w.jsxs("div",{style:{fontSize:V,color:ae.textDim,marginTop:2},children:[(Te=P==null?void 0:P[(Se=D[l])==null?void 0:Se.scope])==null?void 0:Te[$==="pl"?"pl":"en"]," · ",Z("startHereSub",$)]})]})]}),w.jsx("div",{style:{fontSize:V,color:ae.textFaint,marginTop:8,lineHeight:1.5},children:Z("clickAnyNode",$)})]}),!u&&s&&r.length>0&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{color:"#f39c12",fontSize:L,fontWeight:600,marginBottom:5},children:Z("whatNext",$)}),r.map(me=>{var qe,Ge;const be=me===l;return w.jsxs("div",{onClick:()=>T==null?void 0:T(me),style:{padding:R?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:be?"#4a9eff18":"#f39c1215",border:`1px solid ${be?"#4a9eff55":"#f39c1240"}`,fontSize:L,color:be?"#a8d4ff":"#f5d78e",minHeight:R?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[w.jsxs("div",{children:[w.jsx("div",{children:E(me)}),w.jsxs("div",{style:{fontSize:V,color:ae.textDim,marginTop:1},children:[(Ge=P==null?void 0:P[(qe=D[me])==null?void 0:qe.scope])==null?void 0:Ge[$==="pl"?"pl":"en"],be&&w.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:Z("best",$)})]})]}),w.jsx("span",{style:{opacity:.7},children:be?"★":"→"})]},me)})]}),!u&&O.length>0&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{color:"#27ae60",fontSize:L,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",Z("knownList",$)," (",O.length,")"]}),O.map(me=>w.jsx("div",{style:{fontSize:V,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:E(me.id)},me.id))]}),!u&&!R&&w.jsxs("div",{style:{marginTop:12,color:ae.textFaint,fontSize:V,lineHeight:1.5},children:[Z("hintClick",$),w.jsx("br",{}),Z("hintShift",$),w.jsx("br",{}),Z("hintGreen",$)]})]});return R?w.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[w.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:w.jsx("div",{style:{width:36,height:4,borderRadius:2,background:ae.textFaint}})}),ne]}):w.jsx("div",{style:T8,children:ne})}function M8({nodes:o,lang:n,targetNode:r,subgraphIds:s,ddClassification:l,betaBeliefs:u,ddComplete:m,ddNextNodeId:g,questionsAnswered:h,onNodeClick:x,onReset:_,isMobile:$}){const k=Object.fromEntries(o.map(L=>[L.id,L])),T=L=>{var V,ne;return n==="pl"?(V=k[L])==null?void 0:V.labelPl:(ne=k[L])==null?void 0:ne.label},P=s.filter(L=>l[L]==="known"),R=s.filter(L=>l[L]==="unknown"),D=s.filter(L=>l[L]==="uncertain"),E=s.length,O=P.length+R.length,G=E>0?Math.round(O/E*100):0,B=T(r),W=$?11:9,U=$?{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return w.jsxs("div",{style:U,children:[$&&w.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:w.jsx("div",{style:{width:36,height:4,borderRadius:2,background:ae.textFaint}})}),w.jsxs("div",{style:{fontWeight:700,fontSize:$?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsxs("span",{children:[Z("deepDiveHeader",n)," ",m?"✓":""]}),w.jsx("button",{onClick:_,style:{fontSize:W,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${ae.textFaint}`,color:ae.textDim,minHeight:$?32:"auto"},children:Z("reset",n)})]}),w.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[w.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:Z("deepDiveTarget",n)}),w.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:B}),w.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[E," ",Z("deepDiveNodes",n)]})]}),w.jsxs("div",{style:{marginBottom:10},children:[w.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:w.jsx("div",{style:{height:"100%",borderRadius:3,width:`${G}%`,background:m?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[w.jsxs("span",{children:[Z("classified",n),": ",w.jsxs("span",{style:{color:"#f5f6fa"},children:[O,"/",E]})]}),w.jsxs("span",{children:[Z("questions",n),": ",w.jsx("span",{style:{color:"#f5f6fa"},children:h})]})]})]}),m&&w.jsxs("div",{children:[w.jsxs("div",{style:{background:P.length>R.length?"#27ae6018":"#e74c3c18",border:`1px solid ${P.length>R.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[w.jsx("div",{style:{color:P.length>R.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:Z("diagReady",n)}),w.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[Z("diagKnown",n),": ",w.jsx("span",{style:{color:"#2ecc71"},children:P.length})," / ",Z("diagStudy",n),": ",w.jsx("span",{style:{color:"#ff6b6b"},children:R.length})," / ",Z("diagTotal",n),": ",E]})]}),R.length>0&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:Z("studyThese",n)}),s.filter(L=>l[L]==="unknown").slice(0,8).map(L=>{var V;return w.jsx(qd,{id:L,label:T(L),scope:(V=k[L])==null?void 0:V.scope,classification:"unknown",beta:u[L]},L)})]}),P.length>0&&w.jsxs(w.Fragment,{children:[w.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:Z("mastered",n)}),s.filter(L=>l[L]==="known").map(L=>{var V;return w.jsx(qd,{id:L,label:T(L),scope:(V=k[L])==null?void 0:V.scope,classification:"known",beta:u[L]},L)})]})]}),!m&&w.jsxs(w.Fragment,{children:[g&&w.jsxs("div",{style:{marginBottom:10},children:[w.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:Z("nextQuestion",n)}),w.jsxs("div",{onClick:()=>x==null?void 0:x(g),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[T(g),w.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[Z("confidence",n),": ",j8(u[g])]})]})]}),D.length>0&&w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[Z("unclassified",n)," (",D.length,")"]}),D.map(L=>w.jsxs("div",{onClick:()=>x==null?void 0:x(L),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:L===g?"#4a9eff18":"#f39c1212",border:`1px solid ${L===g?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:L===g?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsx("span",{children:T(L)}),w.jsx(Im,{beta:u[L]})]},L))]})]})]})}function j8(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function Im({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),l=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return w.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:w.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:l,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function qd({id:o,label:n,scope:r,classification:s,beta:l}){const u=s==="known"?"#27ae60":"#e74c3c";return w.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsx("span",{children:n}),w.jsx(Im,{beta:l})]})}function A8({isOpen:o,onClose:n,title:r,children:s,maxHeight:l="75vh"}){return o?w.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50},children:[w.jsx("div",{onClick:n,style:{position:"absolute",inset:0,background:"rgba(5,9,18,0.6)",backdropFilter:"blur(2px)"}}),w.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:0,background:ae.surface,borderTop:`1px solid ${ae.border}`,borderRadius:"16px 16px 0 0",maxHeight:l,display:"flex",flexDirection:"column",overflow:"hidden"},children:[w.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"10px 0 4px",flexShrink:0},children:w.jsx("div",{style:{width:36,height:4,borderRadius:2,background:ae.textFaint}})}),r&&w.jsx("div",{style:{padding:"4px 16px 10px",fontWeight:700,fontSize:14,color:ae.textPrimary,flexShrink:0,borderBottom:`1px solid ${ae.borderSubtle}`},children:r}),w.jsx("div",{style:{overflowY:"auto",flex:1,padding:"12px 16px 24px"},children:s})]})]}):null}function C8({filterScope:o,toggleScope:n,clearScope:r,filterSection:s,toggleSection:l,clearSection:u,searchTerm:m,setSearchTerm:g,lang:h,setLang:x,SECTIONS:_,SCOPE_COLORS:$,SCOPE_LABELS:k,isMobile:T}){const[P,R]=X.useState(!1),D=o.size+s.size;return T?w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{padding:"6px 12px",borderBottom:`1px solid ${ae.borderSubtle}`,display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[w.jsx("input",{value:m,onChange:E=>g(E.target.value),placeholder:Z("search",h),style:{flex:1,background:"#0d1520",border:`1px solid ${ae.border}`,borderRadius:6,color:ae.textBody,padding:"8px 12px",fontSize:14,outline:"none",minHeight:36}}),w.jsxs("button",{onClick:()=>R(!0),style:{padding:"8px 12px",borderRadius:6,fontSize:13,cursor:"pointer",border:D>0?"1px solid #4a9eff":`1px solid ${ae.border}`,background:D>0?"#4a9eff22":"transparent",color:D>0?"#4a9eff":ae.textDim,whiteSpace:"nowrap",minHeight:36},children:[Z("filters",h),D>0?` (${D})`:""]}),w.jsx("button",{style:{...zn(!0,h==="pl"?"#f5a623":"#4a9eff"),minHeight:36,fontSize:13},onClick:()=>x(E=>E==="pl"?"en":"pl"),children:h==="pl"?"PL":"EN"})]}),w.jsx(A8,{isOpen:P,onClose:()=>R(!1),title:Z("filterTitle",h),maxHeight:"60vh",children:w.jsx(P8,{filterScope:o,toggleScope:n,clearScope:r,filterSection:s,toggleSection:l,clearSection:u,lang:h,SECTIONS:_,SCOPE_COLORS:$,SCOPE_LABELS:k,onDone:()=>R(!1)})})]}):w.jsxs("div",{style:{padding:"6px 12px",borderBottom:`1px solid ${ae.borderSubtle}`,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",flexShrink:0,minHeight:40},children:[w.jsx("input",{value:m,onChange:E=>g(E.target.value),placeholder:Z("search",h),style:{background:"#0d1520",border:`1px solid ${ae.border}`,borderRadius:4,color:ae.textBody,padding:"6px 10px",fontSize:13,width:"min(140px, 30vw)",outline:"none",minHeight:32}}),w.jsx("span",{style:{color:ae.border,fontSize:10},children:"|"}),w.jsx("span",{style:{fontSize:11,color:ae.textFaint},children:Z("filterSection",h)}),w.jsx("button",{style:zn(s.size===0,"#c8d6e5"),onClick:u,children:Z("all",h)}),Object.entries(_).map(([E,O])=>w.jsx("button",{style:zn(s.has(E),O.color),onClick:()=>l(E),children:O.label},E)),w.jsx("span",{style:{color:ae.border,fontSize:10},children:"|"}),w.jsx("span",{style:{fontSize:11,color:ae.textFaint},children:Z("filterScope",h)}),w.jsx("button",{style:zn(o.size===0,"#c8d6e5"),onClick:r,children:Z("all",h)}),Object.entries($).map(([E,O])=>{var G;return w.jsx("button",{style:zn(o.has(E),O),onClick:()=>n(E),children:(G=k[E])==null?void 0:G[h==="pl"?"pl":"en"]},E)}),w.jsx("span",{style:{color:ae.border,fontSize:10},children:"|"}),w.jsx("button",{style:{...zn(!0,h==="pl"?"#f5a623":"#4a9eff")},onClick:()=>x(E=>E==="pl"?"en":"pl"),children:h==="pl"?"PL":"EN"})]})}function P8({filterScope:o,toggleScope:n,clearScope:r,filterSection:s,toggleSection:l,clearSection:u,lang:m,SECTIONS:g,SCOPE_COLORS:h,SCOPE_LABELS:x,onDone:_}){return w.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[w.jsxs("div",{children:[w.jsx("div",{style:{fontSize:12,color:ae.textDim,marginBottom:8,fontWeight:600},children:Z("filterSection",m)}),w.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[w.jsx("button",{style:{...zn(s.size===0,"#c8d6e5"),fontSize:13,minHeight:36},onClick:u,children:Z("all",m)}),Object.entries(g).map(([$,k])=>w.jsx("button",{style:{...zn(s.has($),k.color),fontSize:13,minHeight:36},onClick:()=>l($),children:k.label},$))]})]}),w.jsxs("div",{children:[w.jsx("div",{style:{fontSize:12,color:ae.textDim,marginBottom:8,fontWeight:600},children:Z("filterScope",m)}),w.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:[w.jsx("button",{style:{...zn(o.size===0,"#c8d6e5"),fontSize:13,minHeight:36},onClick:r,children:Z("all",m)}),Object.entries(h).map(([$,k])=>{var T;return w.jsx("button",{style:{...zn(o.has($),k),fontSize:13,minHeight:36},onClick:()=>n($),children:(T=x[$])==null?void 0:T[m==="pl"?"pl":"en"]},$)})]})]}),w.jsx("button",{onClick:_,style:{padding:"12px",borderRadius:8,fontSize:15,cursor:"pointer",background:"#4a9eff22",border:"1px solid #4a9eff",color:"#4a9eff",fontWeight:600},children:Z("done",m)})]})}function R8({lang:o,diagMode:n,SCOPE_COLORS:r,SCOPE_LABELS:s,SECTIONS:l}){const[u,m]=X.useState(!1),g=Object.entries(r).map(([h,x])=>{var _;return{color:x,label:(_=s[h])==null?void 0:_[o==="pl"?"pl":"en"]}});return w.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152095",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[w.jsxs("button",{onClick:()=>m(h=>!h),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[w.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),Z("legendTitle",o)]}),u&&w.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&w.jsxs("div",{style:{marginBottom:8},children:[[{color:ae.knownHi,label:Z("legendKnown",o)},{color:ae.unknownHi,label:Z("legendUnknown",o)},{color:ae.frontier,label:Z("legendFrontier",o)},{color:"#4a5568",label:Z("legendUnclassified",o)}].map(({color:h,label:x})=>w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[w.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0}}),w.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),w.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),w.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:Z("legendScopes",o)}),g.map(({color:h,label:x})=>w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[w.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0}}),w.jsx("span",{style:{color:"#8a9dbe"},children:x})]},x)),w.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[w.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:Z("legendStages",o)}),Object.entries(l).map(([h,x])=>w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[w.jsx("div",{style:{width:8,height:3,borderRadius:1,background:x.color,flexShrink:0}}),w.jsx("span",{style:{color:"#8a9dbe"},children:x.label})]},h))]})]})]})}function E8({nodes:o,lang:n,onSelect:r,onClose:s,SECTIONS:l,SCOPE_COLORS:u}){const[m,g]=X.useState(""),[h,x]=X.useState(-1),_=X.useRef([]),$=X.useMemo(()=>Object.keys(l??{}),[l]),k=X.useMemo(()=>{const E=m.toLowerCase();return o.filter(O=>!E||O.label.toLowerCase().includes(E)||O.labelPl.toLowerCase().includes(E))},[o,m]),T=X.useMemo(()=>{const E={};for(const G of $)E[G]=[];for(const G of k){const B=G.section??$[0]??"default";E[B]||(E[B]=[]),E[B].push(G)}const O=[];for(const G of $)for(const B of E[G]??[])O.push(B);return O},[k,$]),P=X.useMemo(()=>{const E={};for(const O of $)E[O]=[];for(const O of k){const G=O.section??$[0]??"default";E[G]||(E[G]=[]),E[G].push(O)}return E},[k,$]),R=E=>n==="pl"?E.labelPl:E.label;X.useEffect(()=>{const E=O=>{if(O.key==="Escape"){s();return}O.key==="ArrowDown"&&(O.preventDefault(),x(G=>Math.min(G+1,T.length-1))),O.key==="ArrowUp"&&(O.preventDefault(),x(G=>Math.max(G-1,0))),O.key==="Enter"&&h>=0&&T[h]&&(O.preventDefault(),r(T[h].id))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[T,h,s,r]),X.useEffect(()=>{h>=0&&_.current[h]&&_.current[h].scrollIntoView({block:"nearest"})},[h]),X.useEffect(()=>{x(-1)},[m]);const D={title:n==="pl"?"Wybierz cel":"Select Goal",subtitle:n==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:n==="pl"?"Szukaj tematu...":"Search topics...",noResults:n==="pl"?"Brak wyników":"No results",footer:`${k.length} / ${o.length} ${n==="pl"?"tematów":"topics"}`,cancel:n==="pl"?"Anuluj":"Cancel"};return w.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:E=>{E.target===E.currentTarget&&s()},children:w.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[w.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[w.jsxs("div",{children:[w.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:D.title}),w.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:D.subtitle})]}),w.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),w.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:w.jsx("input",{autoFocus:!0,value:m,onChange:E=>g(E.target.value),placeholder:D.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),w.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[$.map(E=>{const O=P[E];if(!O||O.length===0)return null;const G=l==null?void 0:l[E];return w.jsxs("div",{style:{marginBottom:12},children:[w.jsx("div",{style:{fontSize:9,fontWeight:700,color:(G==null?void 0:G.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(G==null?void 0:G.label)??E}),w.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:O.map(B=>{const W=T.indexOf(B),U=(u==null?void 0:u[B.scope])??"#4a9eff",L=h===W;return w.jsxs("button",{ref:V=>_.current[W]=V,onClick:()=>r(B.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:L?`${U}35`:`${U}15`,border:`1px solid ${L?U:`${U}40`}`,color:"#c8d6e5",cursor:"pointer",outline:L?`2px solid ${U}`:"none",outlineOffset:1},onMouseEnter:V=>{V.currentTarget.style.background=`${U}30`,V.currentTarget.style.borderColor=`${U}90`},onMouseLeave:V=>{T.indexOf(B)!==h&&(V.currentTarget.style.background=`${U}15`,V.currentTarget.style.borderColor=`${U}40`)},children:[w.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:U,verticalAlign:"middle"}}),R(B)]},B.id)})})]},E)}),k.length===0&&w.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:D.noResults})]}),w.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:D.footer}),w.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:D.cancel})]})]})})}function D8({isOpen:o,onSelect:n,onClose:r,lang:s="pl"}){const l=[{id:"quick",icon:"⚡",color:"#4a9eff",label:Z("modeQuickLabel",s),description:Z("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:Z("modeDeepLabel",s),description:Z("modeDeepDesc",s)}],[u,m]=X.useState(null),g=X.useRef(null);return X.useEffect(()=>{o&&(m(null),setTimeout(()=>{var h;return(h=g.current)==null?void 0:h.focus()},100))},[o]),X.useEffect(()=>{if(!o)return;const h=x=>{x.key==="Escape"&&r(),x.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[o,u,r,n]),o?w.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:h=>{h.target===h.currentTarget&&r()},children:w.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[w.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[w.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:Z("modePickerTitle",s)}),w.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:Z("modePickerSub",s)})]}),w.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:l.map((h,x)=>w.jsxs("button",{ref:x===0?g:null,onClick:()=>m(h.id),onDoubleClick:()=>n(h.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===h.id?`${h.color}18`:"#0a0e17",border:`1px solid ${u===h.id?h.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background=`${h.color}18`,_.currentTarget.style.borderColor=`${h.color}60`},onMouseLeave:_=>{u!==h.id&&(_.currentTarget.style.background="#0a0e17",_.currentTarget.style.borderColor="#1e2d45")},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[w.jsx("span",{style:{fontSize:16},children:h.icon}),w.jsx("span",{style:{fontWeight:600,color:u===h.id?h.color:"#f5f6fa"},children:h.label})]}),w.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:h.description})]},h.id))}),w.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:Z("cancel",s)}),w.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#1e2d45",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:Z("next",s)})]})]})}):null}const N8=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function B8({isOpen:o,onSelect:n,onClose:r,lang:s}){return X.useEffect(()=>{if(!o)return;const l=u=>{u.key==="Escape"&&r()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[o,r]),o?w.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:l=>{l.target===l.currentTarget&&r()},children:w.jsxs("div",{style:{width:"100%",maxWidth:480,background:ae.surface,border:"1px solid #1e2d45",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[w.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #0a1628 100%)",borderBottom:"1px solid #1e2d45",textAlign:"center"},children:[w.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),w.jsx("div",{style:{fontWeight:700,fontSize:18,color:ae.textPrimary,marginBottom:8},children:Z("onboardingTitle",s)}),w.jsx("div",{style:{fontSize:12,color:ae.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:Z("onboardingSub",s)})]}),w.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[w.jsx("div",{style:{fontSize:11,color:ae.textFaint,marginBottom:2},children:Z("onboardingChoose",s)}),N8.map(({id:l,key:u,descKey:m,color:g})=>w.jsxs("button",{onClick:()=>n(l),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${g}0e`,border:`1px solid ${g}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:h=>{h.currentTarget.style.background=`${g}1c`,h.currentTarget.style.borderColor=`${g}70`},onMouseLeave:h=>{h.currentTarget.style.background=`${g}0e`,h.currentTarget.style.borderColor=`${g}30`},children:[w.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0,marginTop:5}}),w.jsxs("div",{style:{flex:1},children:[w.jsx("div",{style:{fontWeight:600,fontSize:13,color:ae.textPrimary,marginBottom:3},children:Z(u,s)}),w.jsx("div",{style:{fontSize:11,color:ae.textDim,lineHeight:1.5},children:Z(m,s)})]}),w.jsx("div",{style:{color:g,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},l))]}),w.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:ae.textFaint,textAlign:"center"},children:Z("onboardingLangHint",s)})]})}):null}const Md={x:40,y:40,scale:.72},jd={x:20,y:20,scale:.42};function I8({courseId:o,RAW_NODES:n,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:m,COURSE_META:g,onBackToCourses:h}){const x=Cg(),[_,$]=X.useState(Bd),[k,T]=kn("lang","pl"),[P,R]=X.useState(new Set),[D,E]=X.useState(new Set),[O,G]=X.useState(""),[B,W]=X.useState(null),[U,L]=X.useState(null),[V,ne]=X.useState(!1),[Se,Te]=X.useState(!1),[me,be]=X.useState(!1),[qe,Ge]=kn("onboardingSeen",!1),[Ye,Fe]=X.useState(!qe),se=X.useCallback(()=>{Ge(!0),Fe(!1)},[Ge]),xe=X.useCallback(te=>R(De=>{const Le=new Set(De);return Le.has(te)?Le.delete(te):Le.add(te),Le}),[]),ue=X.useCallback(te=>E(De=>{const Le=new Set(De);return Le.has(te)?Le.delete(te):Le.add(te),Le}),[]),j=X.useCallback(()=>R(new Set),[]),H=X.useCallback(()=>E(new Set),[]),he=X.useMemo(()=>Z7(n,r),[n,r]),[we,_e]=X.useState(()=>cl(_,300,n,r)),Me=X.useMemo(()=>n.map(te=>{var De,Le;return{...te,x:((De=we[te.id])==null?void 0:De.x)??te.x,y:((Le=we[te.id])==null?void 0:Le.y)??te.y}}),[n,we]),Ne=X.useRef(null),{viewTransform:Ee,setViewTransform:Be,toCanvas:mt,startPan:Xt,cursorStyle:ti,setCursorStyle:An,handleMouseMove:Qn,handleMouseUp:Ar}=hg(Ne),{startNodeDrag:Cn,handleDragMove:Pn,handleDragEnd:Xn}=gg(mt,Me,_e,An),{diagMode:Ie,setDiagMode:zt,mode:Ve,setMode:ni,quizNode:xt,setQuizNode:Rn,questionsAnswered:Ei,setAnsweredQuestions:Ro,getAnsweredIndices:Di,handleDiagClick:Cr,handleQuizAnswer:Eo,resetDiagnostic:Zt,startDeepDive:Pr,targetNode:Do,belief:Ni,frontier:No,visibleFrontier:Bo,hasStarted:Rr,nextSuggestedId:Zn,expectedRemaining:Bi,pCorrect:Ii,sessionComplete:Er,betaBeliefs:Jn,subgraphIds:Jt,ddClassification:Dr,ddNextNodeId:Nr,ddComplete:ri}=Ag(he,s,o),Io=X.useMemo(()=>{const te=O.toLowerCase(),De=n.filter(Le=>!(P.size>0&&!P.has(Le.scope)||D.size>0&&!D.has(Le.section)||te&&!Le.label.toLowerCase().includes(te)&&!Le.labelPl.toLowerCase().includes(te)));return De.length<n.length?new Set(De.map(Le=>Le.id)):null},[n,P,D,O]),er=B||U,ii=X.useMemo(()=>{var De,Le;if(!er)return null;const te=new Set([er]);return(De=he.prereqs[er])==null||De.forEach(oi=>te.add(oi)),(Le=he.dependents[er])==null||Le.forEach(oi=>te.add(oi)),te},[er,he]),Fi=X.useMemo(()=>!Ie||Ve!=="deepdive"||Jt.length===0?null:new Set(Jt),[Ie,Ve,Jt]),Br=X.useCallback(te=>{const De=te.target.closest("[data-node-id]");if(De){Cn(De.getAttribute("data-node-id"),te.clientX,te.clientY),te.stopPropagation();return}Xt(te.clientX,te.clientY)},[Cn,Xt]),Li=X.useCallback(te=>{Pn(te.clientX,te.clientY)||Qn(te)},[Pn,Qn]),tr=X.useCallback(()=>{Xn(),Ar()},[Xn,Ar]),_s=X.useCallback(te=>{x&&!te.target.closest("[data-node-id]")&&W(null)},[x]);X.useEffect(()=>{if(!(!Ie||Ve!=="quick")&&!xt&&Zn&&!Er&&Rr){const te=setTimeout(()=>Rn(Zn),400);return()=>clearTimeout(te)}},[Ie,Ve,xt,Zn,Er,Rr]),X.useEffect(()=>{if(!(!Ie||Ve!=="deepdive")&&!xt&&Nr&&!ri){const te=setTimeout(()=>Rn(Nr),400);return()=>clearTimeout(te)}},[Ie,Ve,xt,Nr,ri]),X.useEffect(()=>{const te=De=>{if(De.key==="Escape"){if(xt){Rn(null);return}W(null),ne(!1)}};return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[xt]);const Ir=X.useCallback(te=>{$(te),_e(cl(te,300,n,r)),Be(x?jd:Md)},[Be,n,r,x]),nr=X.useCallback(()=>{Ie?(zt(!1),Zt(),W(null)):Te(!0)},[Ie,zt,Zt]),rr=X.useCallback(te=>{Te(!1),Zt(),te==="deepdive"?(zt(!0),ne(!0)):(zt(!0),ni("quick"),W(null))},[zt,ni,Zt]),Oi=X.useCallback(te=>{Ge(!0),Fe(!1),(te==="quick"||te==="deepdive")&&rr(te)},[Ge,rr]),ws=X.useMemo(()=>{if(Ve!=="deepdive")return{};const te={};for(const[De,Le]of Object.entries(Dr))Le==="known"?te[De]="known":Le==="unknown"&&(te[De]="unknown");return te},[Ve,Dr]),$s=Ve==="deepdive"?ws:Ni,ks=Ve==="deepdive"?Jt.filter(te=>Dr[te]==="uncertain"):Bo,yn=k==="pl"?g.title??g.titleEn:g.titleEn??g.title,Fo=Ye||Se||V||!!(Ie&&xt),cn=(te,De="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:te?`1px solid ${De}`:`1px solid ${ae.border}`,background:te?`${De}22`:"transparent",color:te?De:ae.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:te?600:400});return w.jsxs("div",{style:{width:"100%",height:"100dvh",background:ae.bg,fontFamily:Id,color:ae.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[x?w.jsxs("div",{style:{padding:"8px 12px",borderBottom:`1px solid ${ae.borderSubtle}`,display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[h&&w.jsx("button",{onClick:h,style:{...cn(!1),padding:"7px 10px"},children:"←"}),w.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:ae.textPrimary,letterSpacing:.5,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:yn}),w.jsx("button",{onClick:nr,style:cn(Ie,"#f39c12"),children:Ie?"✓":Z("diagnosticOff",k)}),w.jsx("button",{style:cn(!0,k==="pl"?"#f5a623":"#4a9eff"),onClick:()=>T(te=>te==="pl"?"en":"pl"),children:k==="pl"?"PL":"EN"})]}):w.jsxs("div",{style:{padding:"8px 16px",borderBottom:`1px solid ${ae.borderSubtle}`,display:"flex",alignItems:"center",gap:10,flexShrink:0,flexWrap:"wrap"},children:[h&&w.jsx("button",{onClick:h,style:cn(!1),children:"←"}),w.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:ae.textPrimary,letterSpacing:1,whiteSpace:"nowrap"},children:yn}),w.jsxs("span",{style:{fontSize:9,color:ae.textFaint,whiteSpace:"nowrap"},children:[n.length," ",Z("topicsCount",k)," · ",r.length," ",Z("edgesCount",k)]}),w.jsx("span",{style:{fontSize:9,color:ae.textFaint,marginLeft:"auto"},children:Z(Ie?Ve==="deepdive"?"hintDiagDeep":"hintDiagQuick":"hintBrowse",k)}),w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[w.jsx("div",{style:{display:"flex",gap:3},children:Nd.map(te=>w.jsx("button",{onClick:()=>Ir(te.meta.id),style:cn(_===te.meta.id),children:te.meta.label},te.meta.id))}),w.jsx("span",{style:{color:ae.border},children:"|"}),w.jsx("button",{onClick:nr,style:cn(Ie,"#f39c12"),children:Z(Ie?Ve==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",k)}),Ie&&w.jsx("button",{onClick:()=>ne(!0),style:cn(Ve==="deepdive","#8e44ad"),children:Z("goalBtn",k)}),w.jsx("span",{style:{color:ae.border},children:"|"}),w.jsx("button",{style:cn(!0,k==="pl"?"#f5a623":"#4a9eff"),onClick:()=>T(te=>te==="pl"?"en":"pl"),children:k==="pl"?"PL":"EN"})]})]}),w.jsx(C8,{filterScope:P,toggleScope:xe,clearScope:j,filterSection:D,toggleSection:ue,clearSection:H,searchTerm:O,setSearchTerm:G,lang:k,setLang:T,SECTIONS:l,SCOPE_COLORS:u,SCOPE_LABELS:m,isMobile:x}),w.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[w.jsxs("svg",{ref:Ne,width:"100%",height:"100%",style:{cursor:ti,touchAction:"none",pointerEvents:Fo?"none":"auto"},onMouseDown:Br,onMouseMove:Li,onMouseUp:tr,onMouseLeave:tr,onClick:te=>{if(_s(te),!Ie)return;const De=te.target.closest("[data-node-id]");De&&Cr(De.getAttribute("data-node-id"),te.shiftKey)},children:[w.jsxs("defs",{children:[w.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:w.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),w.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:w.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),w.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:w.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),w.jsxs("g",{transform:`translate(${Ee.x},${Ee.y}) scale(${Ee.scale})`,children:[w.jsx(Pg,{edges:r,nodes:Me,highlightedIds:Ie&&Ve==="deepdive"?Fi:ii}),w.jsx(Dg,{nodes:Me,filteredIds:Ie&&Ve==="deepdive"?Fi:Io,highlightedIds:Ie?null:ii,selected:B,onSelect:te=>{if(Ie){Cr(te,!1);return}W(te===B?null:te)},onHover:L,lang:k,diagMode:Ie,belief:$s,frontier:ks,scale:Ee.scale,scopeColors:u})]})]}),B&&!Ie&&w.jsx(Ng,{nodeId:B,nodes:Me,adjacency:he,lang:k,SCOPE_COLORS:u,SCOPE_LABELS:m,SECTIONS:l,isMobile:x,onClose:()=>W(null)}),Ie&&xt&&w.jsx(S8,{nodeId:xt,nodes:Me,lang:k,questionBank:s,excludeIndices:Di(xt),onAnswer:(te,De,Le)=>Eo(xt,te,De,Le),onSkip:te=>{typeof te=="number"&&Ro(De=>new Set([...De,`${xt}:${te}`])),Rn(null)}}),Ie&&Ve==="quick"&&!xt&&w.jsx(q8,{belief:Ni,frontier:No,visibleFrontier:Bo,hasStarted:Rr,nextSuggestedId:Zn,sessionComplete:Er,adjacency:he,expectedRemaining:Bi,pCorrect:Ii,questionsAnswered:Ei,nodes:Me,lang:k,onNodeClick:te=>Rn(te),onReset:Zt,SCOPE_LABELS:m,isMobile:x}),Ie&&Ve==="deepdive"&&!xt&&Do&&w.jsx(M8,{nodes:Me,lang:k,targetNode:Do,subgraphIds:Jt,ddClassification:Dr,betaBeliefs:Jn,ddComplete:ri,ddNextNodeId:Nr,questionsAnswered:Ei,onNodeClick:te=>Rn(te),onReset:Zt,isMobile:x}),!x&&w.jsx(R8,{lang:k,diagMode:Ie,SCOPE_COLORS:u,SCOPE_LABELS:m,SECTIONS:l}),w.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([te,De])=>w.jsx("button",{onClick:()=>{De===null?(_e(cl(_,300,n,r)),Be(x?jd:Md)):Be(Le=>({...Le,scale:Math.max(.15,Math.min(5,Le.scale*De))}))},style:{width:44,height:44,background:ae.surface,border:`1px solid ${ae.border}`,color:ae.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:te},te))}),x&&Ie&&!xt&&w.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${ae.surface}ee`,borderTop:`1px solid ${ae.border}`,display:"flex",gap:0,zIndex:20},children:[w.jsx("button",{onClick:()=>ne(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${ae.border}`,color:Ve==="deepdive"?"#c39bd3":ae.textDim,cursor:"pointer"},children:Z("goalBtn",k)}),w.jsx("button",{onClick:nr,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:Z("reset",k)})]})]}),V&&w.jsx(E8,{nodes:Me,lang:k,SECTIONS:l,SCOPE_COLORS:u,onSelect:te=>{ne(!1),Pr(te)},onClose:()=>ne(!1)}),w.jsx(D8,{isOpen:Se,onSelect:rr,onClose:()=>Te(!1),lang:k}),w.jsx(B8,{isOpen:Ye,onSelect:Oi,onClose:se,lang:k})]})}function F8(){const[o,n]=X.useState(Q7),[r,s]=X.useState(!1),l=K7[o];return l?r?w.jsx(L8,{courses:Y7,activeCourseId:o,onSelect:u=>{n(u),s(!1)},onClose:()=>s(!1)}):w.jsx(I8,{courseId:o,RAW_NODES:l.RAW_NODES,RAW_EDGES:l.RAW_EDGES,QUESTION_BANK:l.QUESTION_BANK,SECTIONS:l.SECTIONS,SCOPE_COLORS:l.SCOPE_COLORS,SCOPE_LABELS:l.SCOPE_LABELS,COURSE_META:l.COURSE_META,onBackToCourses:()=>s(!0)},o):w.jsxs("div",{style:{color:"#ff6b6b",padding:20},children:["Unknown course: ",o]})}function L8({courses:o,activeCourseId:n,onSelect:r,onClose:s}){return w.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#0a0e17",fontFamily:Id,color:"#c8d6e5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32},children:[w.jsxs("div",{style:{textAlign:"center"},children:[w.jsx("div",{style:{fontSize:28,fontWeight:700,color:"#f5f6fa",marginBottom:6},children:"oczochodzi.pl"}),w.jsx("div",{style:{fontSize:12,color:"#3a4d63"},children:"Select a course"})]}),w.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"min(340px, calc(100vw - 32px))"},children:o.map(l=>w.jsxs("button",{onClick:()=>r(l.id),style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:10,cursor:"pointer",border:l.id===n?`1px solid ${l.color}`:"1px solid #1a2235",background:l.id===n?`${l.color}18`:"#0d1520",color:"#c8d6e5",textAlign:"left",transition:"border-color 0.15s, background 0.15s"},children:[w.jsx("span",{style:{fontSize:28,lineHeight:1},children:l.icon}),w.jsxs("div",{children:[w.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:l.titleEn??l.title}),w.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:3,lineHeight:1.4},children:l.descriptionEn??l.description})]})]},l.id))}),w.jsx("button",{onClick:s,style:{fontSize:11,color:"#3a4d63",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"},children:"Cancel"})]})}Bp.createRoot(document.getElementById("root")).render(w.jsx(X.StrictMode,{children:w.jsx(F8,{})}));
