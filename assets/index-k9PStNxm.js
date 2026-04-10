(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();var cl={exports:{}},So={},dl={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1;function Rp(){if(N1)return Pe;N1=1;var o=Symbol.for("react.element"),n=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),m=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),$=Symbol.iterator;function k(j){return j===null||typeof j!="object"?null:(j=$&&j[$]||j["@@iterator"],typeof j=="function"?j:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,E={};function L(j,G,he){this.props=j,this.context=G,this.refs=E,this.updater=he||q}L.prototype.isReactComponent={},L.prototype.setState=function(j,G){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,G,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function P(){}P.prototype=L.prototype;function H(j,G,he){this.props=j,this.context=G,this.refs=E,this.updater=he||q}var W=H.prototype=new P;W.constructor=H,R(W,L.prototype),W.isPureReactComponent=!0;var N=Array.isArray,F=Object.prototype.hasOwnProperty,V={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function U(j,G,he){var ze,ke={},Me=null,Be=null;if(G!=null)for(ze in G.ref!==void 0&&(Be=G.ref),G.key!==void 0&&(Me=""+G.key),G)F.call(G,ze)&&!B.hasOwnProperty(ze)&&(ke[ze]=G[ze]);var De=arguments.length-2;if(De===1)ke.children=he;else if(1<De){for(var Ie=Array(De),mt=0;mt<De;mt++)Ie[mt]=arguments[mt+2];ke.children=Ie}if(j&&j.defaultProps)for(ze in De=j.defaultProps,De)ke[ze]===void 0&&(ke[ze]=De[ze]);return{$$typeof:o,type:j,key:Me,ref:Be,props:ke,_owner:V.current}}function K(j,G){return{$$typeof:o,type:j.type,key:G,ref:j.ref,props:j.props,_owner:j._owner}}function be(j){return typeof j=="object"&&j!==null&&j.$$typeof===o}function ve(j){var G={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(he){return G[he]})}var ue=/\/+/g;function ye(j,G){return typeof j=="object"&&j!==null&&j.key!=null?ve(""+j.key):G.toString(36)}function $e(j,G,he,ze,ke){var Me=typeof j;(Me==="undefined"||Me==="boolean")&&(j=null);var Be=!1;if(j===null)Be=!0;else switch(Me){case"string":case"number":Be=!0;break;case"object":switch(j.$$typeof){case o:case n:Be=!0}}if(Be)return Be=j,ke=ke(Be),j=ze===""?"."+ye(Be,0):ze,N(ke)?(he="",j!=null&&(he=j.replace(ue,"$&/")+"/"),$e(ke,G,he,"",function(mt){return mt})):ke!=null&&(be(ke)&&(ke=K(ke,he+(!ke.key||Be&&Be.key===ke.key?"":(""+ke.key).replace(ue,"$&/")+"/")+j)),G.push(ke)),1;if(Be=0,ze=ze===""?".":ze+":",N(j))for(var De=0;De<j.length;De++){Me=j[De];var Ie=ze+ye(Me,De);Be+=$e(Me,G,he,Ie,ke)}else if(Ie=k(j),typeof Ie=="function")for(j=Ie.call(j),De=0;!(Me=j.next()).done;)Me=Me.value,Ie=ze+ye(Me,De++),Be+=$e(Me,G,he,Ie,ke);else if(Me==="object")throw G=String(j),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Be}function He(j,G,he){if(j==null)return j;var ze=[],ke=0;return $e(j,ze,"","",function(Me){return G.call(he,Me,ke++)}),ze}function Qe(j){if(j._status===-1){var G=j._result;G=G(),G.then(function(he){(j._status===0||j._status===-1)&&(j._status=1,j._result=he)},function(he){(j._status===0||j._status===-1)&&(j._status=2,j._result=he)}),j._status===-1&&(j._status=0,j._result=G)}if(j._status===1)return j._result.default;throw j._result}var Fe={current:null},ae={transition:null},_e={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ae,ReactCurrentOwner:V};function ce(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:He,forEach:function(j,G,he){He(j,function(){G.apply(this,arguments)},he)},count:function(j){var G=0;return He(j,function(){G++}),G},toArray:function(j){return He(j,function(G){return G})||[]},only:function(j){if(!be(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Pe.Component=L,Pe.Fragment=r,Pe.Profiler=a,Pe.PureComponent=H,Pe.StrictMode=s,Pe.Suspense=g,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_e,Pe.act=ce,Pe.cloneElement=function(j,G,he){if(j==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+j+".");var ze=R({},j.props),ke=j.key,Me=j.ref,Be=j._owner;if(G!=null){if(G.ref!==void 0&&(Me=G.ref,Be=V.current),G.key!==void 0&&(ke=""+G.key),j.type&&j.type.defaultProps)var De=j.type.defaultProps;for(Ie in G)F.call(G,Ie)&&!B.hasOwnProperty(Ie)&&(ze[Ie]=G[Ie]===void 0&&De!==void 0?De[Ie]:G[Ie])}var Ie=arguments.length-2;if(Ie===1)ze.children=he;else if(1<Ie){De=Array(Ie);for(var mt=0;mt<Ie;mt++)De[mt]=arguments[mt+2];ze.children=De}return{$$typeof:o,type:j.type,key:ke,ref:Me,props:ze,_owner:Be}},Pe.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},j.Provider={$$typeof:u,_context:j},j.Consumer=j},Pe.createElement=U,Pe.createFactory=function(j){var G=U.bind(null,j);return G.type=j,G},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(j){return{$$typeof:h,render:j}},Pe.isValidElement=be,Pe.lazy=function(j){return{$$typeof:w,_payload:{_status:-1,_result:j},_init:Qe}},Pe.memo=function(j,G){return{$$typeof:y,type:j,compare:G===void 0?null:G}},Pe.startTransition=function(j){var G=ae.transition;ae.transition={};try{j()}finally{ae.transition=G}},Pe.unstable_act=ce,Pe.useCallback=function(j,G){return Fe.current.useCallback(j,G)},Pe.useContext=function(j){return Fe.current.useContext(j)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(j){return Fe.current.useDeferredValue(j)},Pe.useEffect=function(j,G){return Fe.current.useEffect(j,G)},Pe.useId=function(){return Fe.current.useId()},Pe.useImperativeHandle=function(j,G,he){return Fe.current.useImperativeHandle(j,G,he)},Pe.useInsertionEffect=function(j,G){return Fe.current.useInsertionEffect(j,G)},Pe.useLayoutEffect=function(j,G){return Fe.current.useLayoutEffect(j,G)},Pe.useMemo=function(j,G){return Fe.current.useMemo(j,G)},Pe.useReducer=function(j,G,he){return Fe.current.useReducer(j,G,he)},Pe.useRef=function(j){return Fe.current.useRef(j)},Pe.useState=function(j){return Fe.current.useState(j)},Pe.useSyncExternalStore=function(j,G,he){return Fe.current.useSyncExternalStore(j,G,he)},Pe.useTransition=function(){return Fe.current.useTransition()},Pe.version="18.3.1",Pe}var B1;function Hl(){return B1||(B1=1,dl.exports=Rp()),dl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I1;function Ep(){if(I1)return So;I1=1;var o=Hl(),n=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function m(h,g,y){var w,$={},k=null,q=null;y!==void 0&&(k=""+y),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(q=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&($[w]=g[w]);if(h&&h.defaultProps)for(w in g=h.defaultProps,g)$[w]===void 0&&($[w]=g[w]);return{$$typeof:n,type:h,key:k,ref:q,props:$,_owner:a.current}}return So.Fragment=r,So.jsx=m,So.jsxs=m,So}var F1;function Pp(){return F1||(F1=1,cl.exports=Ep()),cl.exports}var _=Pp(),Q=Hl(),X0={},ml={exports:{}},Lt={},fl={exports:{}},pl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L1;function Dp(){return L1||(L1=1,(function(o){function n(ae,_e){var ce=ae.length;ae.push(_e);e:for(;0<ce;){var j=ce-1>>>1,G=ae[j];if(0<a(G,_e))ae[j]=_e,ae[ce]=G,ce=j;else break e}}function r(ae){return ae.length===0?null:ae[0]}function s(ae){if(ae.length===0)return null;var _e=ae[0],ce=ae.pop();if(ce!==_e){ae[0]=ce;e:for(var j=0,G=ae.length,he=G>>>1;j<he;){var ze=2*(j+1)-1,ke=ae[ze],Me=ze+1,Be=ae[Me];if(0>a(ke,ce))Me<G&&0>a(Be,ke)?(ae[j]=Be,ae[Me]=ce,j=Me):(ae[j]=ke,ae[ze]=ce,j=ze);else if(Me<G&&0>a(Be,ce))ae[j]=Be,ae[Me]=ce,j=Me;else break e}}return _e}function a(ae,_e){var ce=ae.sortIndex-_e.sortIndex;return ce!==0?ce:ae.id-_e.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var m=Date,h=m.now();o.unstable_now=function(){return m.now()-h}}var g=[],y=[],w=1,$=null,k=3,q=!1,R=!1,E=!1,L=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(ae){for(var _e=r(y);_e!==null;){if(_e.callback===null)s(y);else if(_e.startTime<=ae)s(y),_e.sortIndex=_e.expirationTime,n(g,_e);else break;_e=r(y)}}function N(ae){if(E=!1,W(ae),!R)if(r(g)!==null)R=!0,Qe(F);else{var _e=r(y);_e!==null&&Fe(N,_e.startTime-ae)}}function F(ae,_e){R=!1,E&&(E=!1,P(U),U=-1),q=!0;var ce=k;try{for(W(_e),$=r(g);$!==null&&(!($.expirationTime>_e)||ae&&!ve());){var j=$.callback;if(typeof j=="function"){$.callback=null,k=$.priorityLevel;var G=j($.expirationTime<=_e);_e=o.unstable_now(),typeof G=="function"?$.callback=G:$===r(g)&&s(g),W(_e)}else s(g);$=r(g)}if($!==null)var he=!0;else{var ze=r(y);ze!==null&&Fe(N,ze.startTime-_e),he=!1}return he}finally{$=null,k=ce,q=!1}}var V=!1,B=null,U=-1,K=5,be=-1;function ve(){return!(o.unstable_now()-be<K)}function ue(){if(B!==null){var ae=o.unstable_now();be=ae;var _e=!0;try{_e=B(!0,ae)}finally{_e?ye():(V=!1,B=null)}}else V=!1}var ye;if(typeof H=="function")ye=function(){H(ue)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,He=$e.port2;$e.port1.onmessage=ue,ye=function(){He.postMessage(null)}}else ye=function(){L(ue,0)};function Qe(ae){B=ae,V||(V=!0,ye())}function Fe(ae,_e){U=L(function(){ae(o.unstable_now())},_e)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ae){ae.callback=null},o.unstable_continueExecution=function(){R||q||(R=!0,Qe(F))},o.unstable_forceFrameRate=function(ae){0>ae||125<ae?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<ae?Math.floor(1e3/ae):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_getFirstCallbackNode=function(){return r(g)},o.unstable_next=function(ae){switch(k){case 1:case 2:case 3:var _e=3;break;default:_e=k}var ce=k;k=_e;try{return ae()}finally{k=ce}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ae,_e){switch(ae){case 1:case 2:case 3:case 4:case 5:break;default:ae=3}var ce=k;k=ae;try{return _e()}finally{k=ce}},o.unstable_scheduleCallback=function(ae,_e,ce){var j=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?j+ce:j):ce=j,ae){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=ce+G,ae={id:w++,callback:_e,priorityLevel:ae,startTime:ce,expirationTime:G,sortIndex:-1},ce>j?(ae.sortIndex=ce,n(y,ae),r(g)===null&&ae===r(y)&&(E?(P(U),U=-1):E=!0,Fe(N,ce-j))):(ae.sortIndex=G,n(g,ae),R||q||(R=!0,Qe(F))),ae},o.unstable_shouldYield=ve,o.unstable_wrapCallback=function(ae){var _e=k;return function(){var ce=k;k=_e;try{return ae.apply(this,arguments)}finally{k=ce}}}})(pl)),pl}var O1;function Np(){return O1||(O1=1,fl.exports=Dp()),fl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1;function Bp(){if(H1)return Lt;H1=1;var o=Hl(),n=Np();function r(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},$={};function k(e){return g.call($,e)?!0:g.call(w,e)?!1:y.test(e)?$[e]=!0:(w[e]=!0,!1)}function q(e,t,i,l){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,t,i,l){if(t===null||typeof t>"u"||q(e,t,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function E(e,t,i,l,c,f,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=f,this.removeEmptyString=x}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];L[t]=new E(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,H);L[t]=new E(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,H);L[t]=new E(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,H);L[t]=new E(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,t,i,l){var c=L.hasOwnProperty(t)?L[t]:null;(c!==null?c.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(R(t,i,c,l)&&(i=null),l||c===null?k(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(t=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(t):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,t,i):e.setAttribute(t,i))))}var N=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),V=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),ve=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ye=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),ae=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=ae&&e[ae]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,j;function G(e){if(j===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);j=t&&t[1]||""}return`
`+j+e}var he=!1;function ze(e,t){if(!e||he)return"";he=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(O){var l=O}Reflect.construct(e,[],t)}else{try{t.call()}catch(O){l=O}e.call(t.prototype)}else{try{throw Error()}catch(O){l=O}e()}}catch(O){if(O&&l&&typeof O.stack=="string"){for(var c=O.stack.split(`
`),f=l.stack.split(`
`),x=c.length-1,z=f.length-1;1<=x&&0<=z&&c[x]!==f[z];)z--;for(;1<=x&&0<=z;x--,z--)if(c[x]!==f[z]){if(x!==1||z!==1)do if(x--,z--,0>z||c[x]!==f[z]){var M=`
`+c[x].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=x&&0<=z);break}}}finally{he=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?G(e):""}function ke(e){switch(e.tag){case 5:return G(e.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return e=ze(e.type,!1),e;case 11:return e=ze(e.type.render,!1),e;case 1:return e=ze(e.type,!0),e;default:return""}}function Me(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case V:return"Portal";case K:return"Profiler";case U:return"StrictMode";case ye:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ve:return(e.displayName||"Context")+".Consumer";case be:return(e._context.displayName||"Context")+".Provider";case ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case He:return t=e.displayName||null,t!==null?t:Me(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return Me(e(t))}catch{}}return null}function Be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(t);case 8:return t===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function De(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mt(e){var t=Ie(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(x){l=""+x,f.call(this,x)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(x){l=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){e._valueTracker||(e._valueTracker=mt(e))}function ni(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),l="";return e&&(l=Ie(e)?e.checked?"true":"false":e.value),e=l,e!==i?(t.setValue(e),!0):!1}function Mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yn(e,t){var i=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Cr(e,t){var i=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;i=De(t.value!=null?t.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jn(e,t){t=t.checked,t!=null&&W(e,"checked",t,!1)}function An(e,t){jn(e,t);var i=De(t.value),l=t.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ee(e,t.type,i):t.hasOwnProperty("defaultValue")&&Ee(e,t.type,De(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Ee(e,t,i){(t!=="number"||Mn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var ft=Array.isArray;function Ve(e,t,i,l){if(e=e.options,t){t={};for(var c=0;c<i.length;c++)t["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=t.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+De(i),t=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function Zn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gt(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(r(92));if(ft(i)){if(1<i.length)throw Error(r(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:De(i)}}function Jn(e,t){var i=De(t.value),l=De(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Di(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,Io=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(t,i,l,c)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wt(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Er=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Er.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Bi(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function Fo(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Bi(i,t[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var Lo=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pr(e,t){if(t){if(Lo[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function er(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function Fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dr=null,tr=null,Jt=null;function Nr(e){if(e=co(e)){if(typeof Dr!="function")throw Error(r(280));var t=e.stateNode;t&&(t=m0(t),Dr(e.stateNode,e.type,t))}}function Br(e){tr?Jt?Jt.push(e):Jt=[e]:tr=e}function ri(){if(tr){var e=tr,t=Jt;if(Jt=tr=null,Nr(e),t)for(e=0;e<t.length;e++)Nr(t[e])}}function Oo(e,t){return e(t)}function Rn(){}var Li=!1;function nr(e,t,i){if(Li)return e(t,i);Li=!0;try{return Oo(e,t,i)}finally{Li=!1,(tr!==null||Jt!==null)&&(Rn(),ri())}}function rr(e,t){var i=e.stateNode;if(i===null)return null;var l=m0(i);if(l===null)return null;i=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,t,typeof i));return i}var ii=!1;if(h)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){ii=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{ii=!1}function Ss(e,t,i,l,c,f,x,z,M){var O=Array.prototype.slice.call(arguments,3);try{t.apply(i,O)}catch(J){this.onError(J)}}var ir=!1,oi=null,vn=!1,Oi=null,Ts={onError:function(e){ir=!0,oi=e}};function Hi(e,t,i,l,c,f,x,z,M){ir=!1,oi=null,Ss.apply(Ts,arguments)}function qs(e,t,i,l,c,f,x,z,M){if(Hi.apply(this,arguments),ir){if(ir){var O=oi;ir=!1,oi=null}else throw Error(r(198));vn||(vn=!0,Oi=O)}}function En(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function Ho(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Go(e){if(En(e)!==e)throw Error(r(188))}function Ms(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(r(188));return t!==e?null:e}for(var i=e,l=t;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return Go(c),e;if(f===l)return Go(c),t;f=f.sibling}throw Error(r(188))}if(i.return!==l.return)i=c,l=f;else{for(var x=!1,z=c.child;z;){if(z===i){x=!0,i=c,l=f;break}if(z===l){x=!0,l=c,i=f;break}z=z.sibling}if(!x){for(z=f.child;z;){if(z===i){x=!0,i=f,l=c;break}if(z===l){x=!0,l=f,i=c;break}z=z.sibling}if(!x)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:t}function Wo(e){return e=Ms(e),e!==null?Gi(e):null}function Gi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gi(e);if(t!==null)return t;e=e.sibling}return null}var Y=n.unstable_scheduleCallback,Ne=n.unstable_cancelCallback,Ge=n.unstable_shouldYield,Wi=n.unstable_requestPaint,ut=n.unstable_now,Wm=n.unstable_getCurrentPriorityLevel,js=n.unstable_ImmediatePriority,mu=n.unstable_UserBlockingPriority,Uo=n.unstable_NormalPriority,Um=n.unstable_LowPriority,fu=n.unstable_IdlePriority,Vo=null,yn=null;function Vm(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Vo,e,void 0,(e.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:Ym,Km=Math.log,Qm=Math.LN2;function Ym(e){return e>>>=0,e===0?32:31-(Km(e)/Qm|0)|0}var Ko=64,Qo=4194304;function Ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,f=e.pingedLanes,x=i&268435455;if(x!==0){var z=x&~c;z!==0?l=Ui(z):(f&=x,f!==0&&(l=Ui(f)))}else x=i&~c,x!==0?l=Ui(x):f!==0&&(l=Ui(f));if(l===0)return 0;if(t!==0&&t!==l&&(t&c)===0&&(c=l&-l,f=t&-t,c>=f||c===16&&(f&4194240)!==0))return t;if((l&4)!==0&&(l|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)i=31-cn(t),c=1<<i,l|=e[i],t&=~c;return l}function Xm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zm(e,t){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var x=31-cn(f),z=1<<x,M=c[x];M===-1?((z&i)===0||(z&l)!==0)&&(c[x]=Xm(z,t)):M<=t&&(e.expiredLanes|=z),f&=~z}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pu(){var e=Ko;return Ko<<=1,(Ko&4194240)===0&&(Ko=64),e}function Cs(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Vi(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-cn(t),e[t]=i}function Jm(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-cn(i),f=1<<c;t[c]=0,l[c]=-1,e[c]=-1,i&=~f}}function Rs(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var l=31-cn(i),c=1<<l;c&t|e[l]&t&&(e[l]|=t),i&=~c}}var Ke=0;function hu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gu,Es,vu,yu,xu,Ps=!1,Xo=[],or=null,sr=null,ar=null,Ki=new Map,Qi=new Map,lr=[],ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bu(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function Yi(e,t,i,l,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:i,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},t!==null&&(t=co(t),t!==null&&Es(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function tf(e,t,i,l,c){switch(t){case"focusin":return or=Yi(or,e,t,i,l,c),!0;case"dragenter":return sr=Yi(sr,e,t,i,l,c),!0;case"mouseover":return ar=Yi(ar,e,t,i,l,c),!0;case"pointerover":var f=c.pointerId;return Ki.set(f,Yi(Ki.get(f)||null,e,t,i,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Qi.set(f,Yi(Qi.get(f)||null,e,t,i,l,c)),!0}return!1}function wu(e){var t=Fr(e.target);if(t!==null){var i=En(t);if(i!==null){if(t=i.tag,t===13){if(t=Ho(i),t!==null){e.blockedOn=t,xu(e.priority,function(){vu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Ii=l,i.target.dispatchEvent(l),Ii=null}else return t=co(i),t!==null&&Es(t),e.blockedOn=i,!1;t.shift()}return!0}function _u(e,t,i){Zo(e)&&i.delete(t)}function nf(){Ps=!1,or!==null&&Zo(or)&&(or=null),sr!==null&&Zo(sr)&&(sr=null),ar!==null&&Zo(ar)&&(ar=null),Ki.forEach(_u),Qi.forEach(_u)}function Xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Ps||(Ps=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,nf)))}function Zi(e){function t(c){return Xi(c,e)}if(0<Xo.length){Xi(Xo[0],e);for(var i=1;i<Xo.length;i++){var l=Xo[i];l.blockedOn===e&&(l.blockedOn=null)}}for(or!==null&&Xi(or,e),sr!==null&&Xi(sr,e),ar!==null&&Xi(ar,e),Ki.forEach(t),Qi.forEach(t),i=0;i<lr.length;i++)l=lr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<lr.length&&(i=lr[0],i.blockedOn===null);)wu(i),i.blockedOn===null&&lr.shift()}var si=N.ReactCurrentBatchConfig,Jo=!0;function rf(e,t,i,l){var c=Ke,f=si.transition;si.transition=null;try{Ke=1,Ds(e,t,i,l)}finally{Ke=c,si.transition=f}}function of(e,t,i,l){var c=Ke,f=si.transition;si.transition=null;try{Ke=4,Ds(e,t,i,l)}finally{Ke=c,si.transition=f}}function Ds(e,t,i,l){if(Jo){var c=Ns(e,t,i,l);if(c===null)ea(e,t,l,e0,i),bu(e,l);else if(tf(c,e,t,i,l))l.stopPropagation();else if(bu(e,l),t&4&&-1<ef.indexOf(e)){for(;c!==null;){var f=co(c);if(f!==null&&gu(f),f=Ns(e,t,i,l),f===null&&ea(e,t,l,e0,i),f===c)break;c=f}c!==null&&l.stopPropagation()}else ea(e,t,l,null,i)}}var e0=null;function Ns(e,t,i,l){if(e0=null,e=Fi(l),e=Fr(e),e!==null)if(t=En(e),t===null)e=null;else if(i=t.tag,i===13){if(e=Ho(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return e0=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case js:return 1;case mu:return 4;case Uo:case Um:return 16;case fu:return 536870912;default:return 16}default:return 16}}var ur=null,Bs=null,t0=null;function ku(){if(t0)return t0;var e,t=Bs,i=t.length,l,c="value"in ur?ur.value:ur.textContent,f=c.length;for(e=0;e<i&&t[e]===c[e];e++);var x=i-e;for(l=1;l<=x&&t[i-l]===c[f-l];l++);return t0=c.slice(e,1<l?1-l:void 0)}function n0(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function r0(){return!0}function zu(){return!1}function Ut(e){function t(i,l,c,f,x){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(f):f[z]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?r0:zu,this.isPropagationStopped=zu,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=r0)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=r0)},persist:function(){},isPersistent:r0}),t}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=Ut(ai),Ji=ce({},ai,{view:0,detail:0}),sf=Ut(Ji),Fs,Ls,eo,i0=ce({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Fs=e.screenX-eo.screenX,Ls=e.screenY-eo.screenY):Ls=Fs=0,eo=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Ls}}),Su=Ut(i0),af=ce({},i0,{dataTransfer:0}),lf=Ut(af),uf=ce({},Ji,{relatedTarget:0}),Os=Ut(uf),cf=ce({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),df=Ut(cf),mf=ce({},ai,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=Ut(mf),pf=ce({},ai,{data:0}),Tu=Ut(pf),hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vf[e])?!!t[e]:!1}function Hs(){return yf}var xf=ce({},Ji,{key:function(e){if(e.key){var t=hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=n0(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hs,charCode:function(e){return e.type==="keypress"?n0(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?n0(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bf=Ut(xf),wf=ce({},i0,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qu=Ut(wf),_f=ce({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hs}),$f=Ut(_f),kf=ce({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ut(kf),Sf=ce({},i0,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tf=Ut(Sf),qf=[9,13,27,32],Gs=h&&"CompositionEvent"in window,to=null;h&&"documentMode"in document&&(to=document.documentMode);var Mf=h&&"TextEvent"in window&&!to,Mu=h&&(!Gs||to&&8<to&&11>=to),ju=" ",Au=!1;function Cu(e,t){switch(e){case"keyup":return qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function jf(e,t){switch(e){case"compositionend":return Ru(t);case"keypress":return t.which!==32?null:(Au=!0,ju);case"textInput":return e=t.data,e===ju&&Au?null:e;default:return null}}function Af(e,t){if(li)return e==="compositionend"||!Gs&&Cu(e,t)?(e=ku(),t0=Bs=ur=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mu&&t.locale!=="ko"?null:t.data;default:return null}}var Cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cf[e.type]:t==="textarea"}function Pu(e,t,i,l){Br(l),t=u0(t,"onChange"),0<t.length&&(i=new Is("onChange","change",null,i,l),e.push({event:i,listeners:t}))}var no=null,ro=null;function Rf(e){Ju(e,0)}function o0(e){var t=fi(e);if(ni(t))return e}function Ef(e,t){if(e==="change")return t}var Du=!1;if(h){var Ws;if(h){var Us="oninput"in document;if(!Us){var Nu=document.createElement("div");Nu.setAttribute("oninput","return;"),Us=typeof Nu.oninput=="function"}Ws=Us}else Ws=!1;Du=Ws&&(!document.documentMode||9<document.documentMode)}function Bu(){no&&(no.detachEvent("onpropertychange",Iu),ro=no=null)}function Iu(e){if(e.propertyName==="value"&&o0(ro)){var t=[];Pu(t,ro,e,Fi(e)),nr(Rf,t)}}function Pf(e,t,i){e==="focusin"?(Bu(),no=t,ro=i,no.attachEvent("onpropertychange",Iu)):e==="focusout"&&Bu()}function Df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return o0(ro)}function Nf(e,t){if(e==="click")return o0(t)}function Bf(e,t){if(e==="input"||e==="change")return o0(t)}function If(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dn=typeof Object.is=="function"?Object.is:If;function io(e,t){if(dn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),l=Object.keys(t);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!g.call(t,c)||!dn(e[c],t[c]))return!1}return!0}function Fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var i=Fu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=t&&l>=t)return{node:i,offset:t-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Fu(i)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=Mn();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=Mn(e.document)}return t}function Vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ff(e){var t=Hu(),i=e.focusedElem,l=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Ou(i.ownerDocument.documentElement,i)){if(l!==null&&Vs(i)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(l.start,c);l=l.end===void 0?f:Math.min(l.end,c),!e.extend&&f>l&&(c=l,l=f,f=c),c=Lu(i,f);var x=Lu(i,l);c&&x&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(c.node,c.offset),e.removeAllRanges(),f>l?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lf=h&&"documentMode"in document&&11>=document.documentMode,ui=null,Ks=null,oo=null,Qs=!1;function Gu(e,t,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Qs||ui==null||ui!==Mn(l)||(l=ui,"selectionStart"in l&&Vs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&io(oo,l)||(oo=l,l=u0(Ks,"onSelect"),0<l.length&&(t=new Is("onSelect","select",null,t,i),e.push({event:t,listeners:l}),t.target=ui)))}function s0(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var ci={animationend:s0("Animation","AnimationEnd"),animationiteration:s0("Animation","AnimationIteration"),animationstart:s0("Animation","AnimationStart"),transitionend:s0("Transition","TransitionEnd")},Ys={},Wu={};h&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function a0(e){if(Ys[e])return Ys[e];if(!ci[e])return e;var t=ci[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Wu)return Ys[e]=t[i];return e}var Uu=a0("animationend"),Vu=a0("animationiteration"),Ku=a0("animationstart"),Qu=a0("transitionend"),Yu=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(e,t){Yu.set(e,t),u(t,[e])}for(var Xs=0;Xs<Xu.length;Xs++){var Zs=Xu[Xs],Of=Zs.toLowerCase(),Hf=Zs[0].toUpperCase()+Zs.slice(1);cr(Of,"on"+Hf)}cr(Uu,"onAnimationEnd"),cr(Vu,"onAnimationIteration"),cr(Ku,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(Qu,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gf=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Zu(e,t,i){var l=e.type||"unknown-event";e.currentTarget=i,qs(l,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var x=l.length-1;0<=x;x--){var z=l[x],M=z.instance,O=z.currentTarget;if(z=z.listener,M!==f&&c.isPropagationStopped())break e;Zu(c,z,O),f=M}else for(x=0;x<l.length;x++){if(z=l[x],M=z.instance,O=z.currentTarget,z=z.listener,M!==f&&c.isPropagationStopped())break e;Zu(c,z,O),f=M}}}if(vn)throw e=Oi,vn=!1,Oi=null,e}function Je(e,t){var i=t[sa];i===void 0&&(i=t[sa]=new Set);var l=e+"__bubble";i.has(l)||(ec(t,e,2,!1),i.add(l))}function Js(e,t,i){var l=0;t&&(l|=4),ec(i,e,l,t)}var l0="_reactListening"+Math.random().toString(36).slice(2);function ao(e){if(!e[l0]){e[l0]=!0,s.forEach(function(i){i!=="selectionchange"&&(Gf.has(i)||Js(i,!1,e),Js(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[l0]||(t[l0]=!0,Js("selectionchange",!1,t))}}function ec(e,t,i,l){switch($u(t)){case 1:var c=rf;break;case 4:c=of;break;default:c=Ds}i=c.bind(null,t,i,e),c=void 0,!ii||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(t,i,{capture:!0,passive:c}):e.addEventListener(t,i,!0):c!==void 0?e.addEventListener(t,i,{passive:c}):e.addEventListener(t,i,!1)}function ea(e,t,i,l,c){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var x=l.tag;if(x===3||x===4){var z=l.stateNode.containerInfo;if(z===c||z.nodeType===8&&z.parentNode===c)break;if(x===4)for(x=l.return;x!==null;){var M=x.tag;if((M===3||M===4)&&(M=x.stateNode.containerInfo,M===c||M.nodeType===8&&M.parentNode===c))return;x=x.return}for(;z!==null;){if(x=Fr(z),x===null)return;if(M=x.tag,M===5||M===6){l=f=x;continue e}z=z.parentNode}}l=l.return}nr(function(){var O=f,J=Fi(i),ne=[];e:{var X=Yu.get(e);if(X!==void 0){var me=Is,ge=e;switch(e){case"keypress":if(n0(i)===0)break e;case"keydown":case"keyup":me=bf;break;case"focusin":ge="focus",me=Os;break;case"focusout":ge="blur",me=Os;break;case"beforeblur":case"afterblur":me=Os;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=$f;break;case Uu:case Vu:case Ku:me=df;break;case Qu:me=zf;break;case"scroll":me=sf;break;case"wheel":me=Tf;break;case"copy":case"cut":case"paste":me=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=qu}var xe=(t&4)!==0,ct=!xe&&e==="scroll",D=xe?X!==null?X+"Capture":null:X;xe=[];for(var C=O,I;C!==null;){I=C;var oe=I.stateNode;if(I.tag===5&&oe!==null&&(I=oe,D!==null&&(oe=rr(C,D),oe!=null&&xe.push(lo(C,oe,I)))),ct)break;C=C.return}0<xe.length&&(X=new me(X,ge,null,i,J),ne.push({event:X,listeners:xe}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",me=e==="mouseout"||e==="pointerout",X&&i!==Ii&&(ge=i.relatedTarget||i.fromElement)&&(Fr(ge)||ge[Pn]))break e;if((me||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,me?(ge=i.relatedTarget||i.toElement,me=O,ge=ge?Fr(ge):null,ge!==null&&(ct=En(ge),ge!==ct||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(me=null,ge=O),me!==ge)){if(xe=Su,oe="onMouseLeave",D="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(xe=qu,oe="onPointerLeave",D="onPointerEnter",C="pointer"),ct=me==null?X:fi(me),I=ge==null?X:fi(ge),X=new xe(oe,C+"leave",me,i,J),X.target=ct,X.relatedTarget=I,oe=null,Fr(J)===O&&(xe=new xe(D,C+"enter",ge,i,J),xe.target=I,xe.relatedTarget=ct,oe=xe),ct=oe,me&&ge)t:{for(xe=me,D=ge,C=0,I=xe;I;I=di(I))C++;for(I=0,oe=D;oe;oe=di(oe))I++;for(;0<C-I;)xe=di(xe),C--;for(;0<I-C;)D=di(D),I--;for(;C--;){if(xe===D||D!==null&&xe===D.alternate)break t;xe=di(xe),D=di(D)}xe=null}else xe=null;me!==null&&tc(ne,X,me,xe,!1),ge!==null&&ct!==null&&tc(ne,ct,ge,xe,!0)}}e:{if(X=O?fi(O):window,me=X.nodeName&&X.nodeName.toLowerCase(),me==="select"||me==="input"&&X.type==="file")var we=Ef;else if(Eu(X))if(Du)we=Bf;else{we=Df;var Se=Pf}else(me=X.nodeName)&&me.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(we=Nf);if(we&&(we=we(e,O))){Pu(ne,we,i,J);break e}Se&&Se(e,X,O),e==="focusout"&&(Se=X._wrapperState)&&Se.controlled&&X.type==="number"&&Ee(X,"number",X.value)}switch(Se=O?fi(O):window,e){case"focusin":(Eu(Se)||Se.contentEditable==="true")&&(ui=Se,Ks=O,oo=null);break;case"focusout":oo=Ks=ui=null;break;case"mousedown":Qs=!0;break;case"contextmenu":case"mouseup":case"dragend":Qs=!1,Gu(ne,i,J);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":Gu(ne,i,J)}var Te;if(Gs)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else li?Cu(e,i)&&(Ae="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ae="onCompositionStart");Ae&&(Mu&&i.locale!=="ko"&&(li||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&li&&(Te=ku()):(ur=J,Bs="value"in ur?ur.value:ur.textContent,li=!0)),Se=u0(O,Ae),0<Se.length&&(Ae=new Tu(Ae,e,null,i,J),ne.push({event:Ae,listeners:Se}),Te?Ae.data=Te:(Te=Ru(i),Te!==null&&(Ae.data=Te)))),(Te=Mf?jf(e,i):Af(e,i))&&(O=u0(O,"onBeforeInput"),0<O.length&&(J=new Tu("onBeforeInput","beforeinput",null,i,J),ne.push({event:J,listeners:O}),J.data=Te))}Ju(ne,t)})}function lo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function u0(e,t){for(var i=t+"Capture",l=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=rr(e,i),f!=null&&l.unshift(lo(e,f,c)),f=rr(e,t),f!=null&&l.push(lo(e,f,c))),e=e.return}return l}function di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function tc(e,t,i,l,c){for(var f=t._reactName,x=[];i!==null&&i!==l;){var z=i,M=z.alternate,O=z.stateNode;if(M!==null&&M===l)break;z.tag===5&&O!==null&&(z=O,c?(M=rr(i,f),M!=null&&x.unshift(lo(i,M,z))):c||(M=rr(i,f),M!=null&&x.push(lo(i,M,z)))),i=i.return}x.length!==0&&e.push({event:t,listeners:x})}var Wf=/\r\n?/g,Uf=/\u0000|\uFFFD/g;function nc(e){return(typeof e=="string"?e:""+e).replace(Wf,`
`).replace(Uf,"")}function c0(e,t,i){if(t=nc(t),nc(e)!==t&&i)throw Error(r(425))}function d0(){}var ta=null,na=null;function ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,rc=typeof Promise=="function"?Promise:void 0,Kf=typeof queueMicrotask=="function"?queueMicrotask:typeof rc<"u"?function(e){return rc.resolve(null).then(e).catch(Qf)}:ia;function Qf(e){setTimeout(function(){throw e})}function oa(e,t){var i=t,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),Zi(t);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);Zi(t)}function dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var mi=Math.random().toString(36).slice(2),xn="__reactFiber$"+mi,uo="__reactProps$"+mi,Pn="__reactContainer$"+mi,sa="__reactEvents$"+mi,Yf="__reactListeners$"+mi,Xf="__reactHandles$"+mi;function Fr(e){var t=e[xn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Pn]||i[xn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=ic(e);e!==null;){if(i=e[xn])return i;e=ic(e)}return t}e=i,i=e.parentNode}return null}function co(e){return e=e[xn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function fi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function m0(e){return e[uo]||null}var aa=[],pi=-1;function mr(e){return{current:e}}function et(e){0>pi||(e.current=aa[pi],aa[pi]=null,pi--)}function Xe(e,t){pi++,aa[pi]=e.current,e.current=t}var fr={},zt=mr(fr),Dt=mr(!1),Lr=fr;function hi(e,t){var i=e.type.contextTypes;if(!i)return fr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=t[f];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=c),c}function Nt(e){return e=e.childContextTypes,e!=null}function f0(){et(Dt),et(zt)}function oc(e,t,i){if(zt.current!==fr)throw Error(r(168));Xe(zt,t),Xe(Dt,i)}function sc(e,t,i){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in t))throw Error(r(108,Be(e)||"Unknown",c));return ce({},i,l)}function p0(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fr,Lr=zt.current,Xe(zt,e),Xe(Dt,Dt.current),!0}function ac(e,t,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=sc(e,t,Lr),l.__reactInternalMemoizedMergedChildContext=e,et(Dt),et(zt),Xe(zt,e)):et(Dt),Xe(Dt,i)}var Dn=null,h0=!1,la=!1;function lc(e){Dn===null?Dn=[e]:Dn.push(e)}function Zf(e){h0=!0,lc(e)}function pr(){if(!la&&Dn!==null){la=!0;var e=0,t=Ke;try{var i=Dn;for(Ke=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Dn=null,h0=!1}catch(c){throw Dn!==null&&(Dn=Dn.slice(e+1)),Y(js,pr),c}finally{Ke=t,la=!1}}return null}var gi=[],vi=0,g0=null,v0=0,en=[],tn=0,Or=null,Nn=1,Bn="";function Hr(e,t){gi[vi++]=v0,gi[vi++]=g0,g0=e,v0=t}function uc(e,t,i){en[tn++]=Nn,en[tn++]=Bn,en[tn++]=Or,Or=e;var l=Nn;e=Bn;var c=32-cn(l)-1;l&=~(1<<c),i+=1;var f=32-cn(t)+c;if(30<f){var x=c-c%5;f=(l&(1<<x)-1).toString(32),l>>=x,c-=x,Nn=1<<32-cn(t)+c|i<<c|l,Bn=f+e}else Nn=1<<f|i<<c|l,Bn=e}function ua(e){e.return!==null&&(Hr(e,1),uc(e,1,0))}function ca(e){for(;e===g0;)g0=gi[--vi],gi[vi]=null,v0=gi[--vi],gi[vi]=null;for(;e===Or;)Or=en[--tn],en[tn]=null,Bn=en[--tn],en[tn]=null,Nn=en[--tn],en[tn]=null}var Vt=null,Kt=null,tt=!1,mn=null;function cc(e,t){var i=sn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function dc(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Vt=e,Kt=dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Vt=e,Kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Or!==null?{id:Nn,overflow:Bn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=sn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,Vt=e,Kt=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(tt){var t=Kt;if(t){var i=t;if(!dc(e,t)){if(da(e))throw Error(r(418));t=dr(i.nextSibling);var l=Vt;t&&dc(e,t)?cc(l,i):(e.flags=e.flags&-4097|2,tt=!1,Vt=e)}}else{if(da(e))throw Error(r(418));e.flags=e.flags&-4097|2,tt=!1,Vt=e}}}function mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Vt=e}function y0(e){if(e!==Vt)return!1;if(!tt)return mc(e),tt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ra(e.type,e.memoizedProps)),t&&(t=Kt)){if(da(e))throw fc(),Error(r(418));for(;t;)cc(e,t),t=dr(t.nextSibling)}if(mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Kt=dr(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Kt=null}}else Kt=Vt?dr(e.stateNode.nextSibling):null;return!0}function fc(){for(var e=Kt;e;)e=dr(e.nextSibling)}function yi(){Kt=Vt=null,tt=!1}function fa(e){mn===null?mn=[e]:mn.push(e)}var Jf=N.ReactCurrentBatchConfig;function mo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var c=l,f=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===f?t.ref:(t=function(x){var z=c.refs;x===null?delete z[f]:z[f]=x},t._stringRef=f,t)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function x0(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pc(e){var t=e._init;return t(e._payload)}function hc(e){function t(D,C){if(e){var I=D.deletions;I===null?(D.deletions=[C],D.flags|=16):I.push(C)}}function i(D,C){if(!e)return null;for(;C!==null;)t(D,C),C=C.sibling;return null}function l(D,C){for(D=new Map;C!==null;)C.key!==null?D.set(C.key,C):D.set(C.index,C),C=C.sibling;return D}function c(D,C){return D=_r(D,C),D.index=0,D.sibling=null,D}function f(D,C,I){return D.index=I,e?(I=D.alternate,I!==null?(I=I.index,I<C?(D.flags|=2,C):I):(D.flags|=2,C)):(D.flags|=1048576,C)}function x(D){return e&&D.alternate===null&&(D.flags|=2),D}function z(D,C,I,oe){return C===null||C.tag!==6?(C=il(I,D.mode,oe),C.return=D,C):(C=c(C,I),C.return=D,C)}function M(D,C,I,oe){var we=I.type;return we===B?J(D,C,I.props.children,oe,I.key):C!==null&&(C.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Qe&&pc(we)===C.type)?(oe=c(C,I.props),oe.ref=mo(D,C,I),oe.return=D,oe):(oe=H0(I.type,I.key,I.props,null,D.mode,oe),oe.ref=mo(D,C,I),oe.return=D,oe)}function O(D,C,I,oe){return C===null||C.tag!==4||C.stateNode.containerInfo!==I.containerInfo||C.stateNode.implementation!==I.implementation?(C=ol(I,D.mode,oe),C.return=D,C):(C=c(C,I.children||[]),C.return=D,C)}function J(D,C,I,oe,we){return C===null||C.tag!==7?(C=Xr(I,D.mode,oe,we),C.return=D,C):(C=c(C,I),C.return=D,C)}function ne(D,C,I){if(typeof C=="string"&&C!==""||typeof C=="number")return C=il(""+C,D.mode,I),C.return=D,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case F:return I=H0(C.type,C.key,C.props,null,D.mode,I),I.ref=mo(D,null,C),I.return=D,I;case V:return C=ol(C,D.mode,I),C.return=D,C;case Qe:var oe=C._init;return ne(D,oe(C._payload),I)}if(ft(C)||_e(C))return C=Xr(C,D.mode,I,null),C.return=D,C;x0(D,C)}return null}function X(D,C,I,oe){var we=C!==null?C.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return we!==null?null:z(D,C,""+I,oe);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case F:return I.key===we?M(D,C,I,oe):null;case V:return I.key===we?O(D,C,I,oe):null;case Qe:return we=I._init,X(D,C,we(I._payload),oe)}if(ft(I)||_e(I))return we!==null?null:J(D,C,I,oe,null);x0(D,I)}return null}function me(D,C,I,oe,we){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return D=D.get(I)||null,z(C,D,""+oe,we);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case F:return D=D.get(oe.key===null?I:oe.key)||null,M(C,D,oe,we);case V:return D=D.get(oe.key===null?I:oe.key)||null,O(C,D,oe,we);case Qe:var Se=oe._init;return me(D,C,I,Se(oe._payload),we)}if(ft(oe)||_e(oe))return D=D.get(I)||null,J(C,D,oe,we,null);x0(C,oe)}return null}function ge(D,C,I,oe){for(var we=null,Se=null,Te=C,Ae=C=0,_t=null;Te!==null&&Ae<I.length;Ae++){Te.index>Ae?(_t=Te,Te=null):_t=Te.sibling;var We=X(D,Te,I[Ae],oe);if(We===null){Te===null&&(Te=_t);break}e&&Te&&We.alternate===null&&t(D,Te),C=f(We,C,Ae),Se===null?we=We:Se.sibling=We,Se=We,Te=_t}if(Ae===I.length)return i(D,Te),tt&&Hr(D,Ae),we;if(Te===null){for(;Ae<I.length;Ae++)Te=ne(D,I[Ae],oe),Te!==null&&(C=f(Te,C,Ae),Se===null?we=Te:Se.sibling=Te,Se=Te);return tt&&Hr(D,Ae),we}for(Te=l(D,Te);Ae<I.length;Ae++)_t=me(Te,D,Ae,I[Ae],oe),_t!==null&&(e&&_t.alternate!==null&&Te.delete(_t.key===null?Ae:_t.key),C=f(_t,C,Ae),Se===null?we=_t:Se.sibling=_t,Se=_t);return e&&Te.forEach(function($r){return t(D,$r)}),tt&&Hr(D,Ae),we}function xe(D,C,I,oe){var we=_e(I);if(typeof we!="function")throw Error(r(150));if(I=we.call(I),I==null)throw Error(r(151));for(var Se=we=null,Te=C,Ae=C=0,_t=null,We=I.next();Te!==null&&!We.done;Ae++,We=I.next()){Te.index>Ae?(_t=Te,Te=null):_t=Te.sibling;var $r=X(D,Te,We.value,oe);if($r===null){Te===null&&(Te=_t);break}e&&Te&&$r.alternate===null&&t(D,Te),C=f($r,C,Ae),Se===null?we=$r:Se.sibling=$r,Se=$r,Te=_t}if(We.done)return i(D,Te),tt&&Hr(D,Ae),we;if(Te===null){for(;!We.done;Ae++,We=I.next())We=ne(D,We.value,oe),We!==null&&(C=f(We,C,Ae),Se===null?we=We:Se.sibling=We,Se=We);return tt&&Hr(D,Ae),we}for(Te=l(D,Te);!We.done;Ae++,We=I.next())We=me(Te,D,Ae,We.value,oe),We!==null&&(e&&We.alternate!==null&&Te.delete(We.key===null?Ae:We.key),C=f(We,C,Ae),Se===null?we=We:Se.sibling=We,Se=We);return e&&Te.forEach(function(Cp){return t(D,Cp)}),tt&&Hr(D,Ae),we}function ct(D,C,I,oe){if(typeof I=="object"&&I!==null&&I.type===B&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case F:e:{for(var we=I.key,Se=C;Se!==null;){if(Se.key===we){if(we=I.type,we===B){if(Se.tag===7){i(D,Se.sibling),C=c(Se,I.props.children),C.return=D,D=C;break e}}else if(Se.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Qe&&pc(we)===Se.type){i(D,Se.sibling),C=c(Se,I.props),C.ref=mo(D,Se,I),C.return=D,D=C;break e}i(D,Se);break}else t(D,Se);Se=Se.sibling}I.type===B?(C=Xr(I.props.children,D.mode,oe,I.key),C.return=D,D=C):(oe=H0(I.type,I.key,I.props,null,D.mode,oe),oe.ref=mo(D,C,I),oe.return=D,D=oe)}return x(D);case V:e:{for(Se=I.key;C!==null;){if(C.key===Se)if(C.tag===4&&C.stateNode.containerInfo===I.containerInfo&&C.stateNode.implementation===I.implementation){i(D,C.sibling),C=c(C,I.children||[]),C.return=D,D=C;break e}else{i(D,C);break}else t(D,C);C=C.sibling}C=ol(I,D.mode,oe),C.return=D,D=C}return x(D);case Qe:return Se=I._init,ct(D,C,Se(I._payload),oe)}if(ft(I))return ge(D,C,I,oe);if(_e(I))return xe(D,C,I,oe);x0(D,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,C!==null&&C.tag===6?(i(D,C.sibling),C=c(C,I),C.return=D,D=C):(i(D,C),C=il(I,D.mode,oe),C.return=D,D=C),x(D)):i(D,C)}return ct}var xi=hc(!0),gc=hc(!1),b0=mr(null),w0=null,bi=null,pa=null;function ha(){pa=bi=w0=null}function ga(e){var t=b0.current;et(b0),e._currentValue=t}function va(e,t,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===i)break;e=e.return}}function wi(e,t){w0=e,pa=bi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Bt=!0),e.firstContext=null)}function nn(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},bi===null){if(w0===null)throw Error(r(308));bi=e,w0.dependencies={lanes:0,firstContext:e}}else bi=bi.next=e;return t}var Gr=null;function ya(e){Gr===null?Gr=[e]:Gr.push(e)}function vc(e,t,i,l){var c=t.interleaved;return c===null?(i.next=i,ya(t)):(i.next=c.next,c.next=i),t.interleaved=i,In(e,l)}function In(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var hr=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gr(e,t,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var c=l.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),l.pending=t,In(e,i)}return c=l.interleaved,c===null?(t.next=t,ya(l)):(t.next=c.next,c.next=t),l.interleaved=t,In(e,i)}function _0(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Rs(e,i)}}function xc(e,t){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var x={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=x:f=f.next=x,i=i.next}while(i!==null);f===null?c=f=t:f=f.next=t}else c=f=t;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function $0(e,t,i,l){var c=e.updateQueue;hr=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,z=c.shared.pending;if(z!==null){c.shared.pending=null;var M=z,O=M.next;M.next=null,x===null?f=O:x.next=O,x=M;var J=e.alternate;J!==null&&(J=J.updateQueue,z=J.lastBaseUpdate,z!==x&&(z===null?J.firstBaseUpdate=O:z.next=O,J.lastBaseUpdate=M))}if(f!==null){var ne=c.baseState;x=0,J=O=M=null,z=f;do{var X=z.lane,me=z.eventTime;if((l&X)===X){J!==null&&(J=J.next={eventTime:me,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ge=e,xe=z;switch(X=t,me=i,xe.tag){case 1:if(ge=xe.payload,typeof ge=="function"){ne=ge.call(me,ne,X);break e}ne=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=xe.payload,X=typeof ge=="function"?ge.call(me,ne,X):ge,X==null)break e;ne=ce({},ne,X);break e;case 2:hr=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,X=c.effects,X===null?c.effects=[z]:X.push(z))}else me={eventTime:me,lane:X,tag:z.tag,payload:z.payload,callback:z.callback,next:null},J===null?(O=J=me,M=ne):J=J.next=me,x|=X;if(z=z.next,z===null){if(z=c.shared.pending,z===null)break;X=z,z=X.next,X.next=null,c.lastBaseUpdate=X,c.shared.pending=null}}while(!0);if(J===null&&(M=ne),c.baseState=M,c.firstBaseUpdate=O,c.lastBaseUpdate=J,t=c.shared.interleaved,t!==null){c=t;do x|=c.lane,c=c.next;while(c!==t)}else f===null&&(c.shared.lanes=0);Vr|=x,e.lanes=x,e.memoizedState=ne}}function bc(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(r(191,c));c.call(l)}}}var fo={},bn=mr(fo),po=mr(fo),ho=mr(fo);function Wr(e){if(e===fo)throw Error(r(174));return e}function ba(e,t){switch(Xe(ho,t),Xe(po,e),Xe(bn,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ni(t,e)}et(bn),Xe(bn,t)}function _i(){et(bn),et(po),et(ho)}function wc(e){Wr(ho.current);var t=Wr(bn.current),i=Ni(t,e.type);t!==i&&(Xe(po,e),Xe(bn,i))}function wa(e){po.current===e&&(et(bn),et(po))}var rt=mr(0);function k0(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _a=[];function $a(){for(var e=0;e<_a.length;e++)_a[e]._workInProgressVersionPrimary=null;_a.length=0}var z0=N.ReactCurrentDispatcher,ka=N.ReactCurrentBatchConfig,Ur=0,it=null,vt=null,bt=null,S0=!1,go=!1,vo=0,ep=0;function St(){throw Error(r(321))}function za(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!dn(e[i],t[i]))return!1;return!0}function Sa(e,t,i,l,c,f){if(Ur=f,it=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z0.current=e===null||e.memoizedState===null?ip:op,e=i(l,c),go){f=0;do{if(go=!1,vo=0,25<=f)throw Error(r(301));f+=1,bt=vt=null,t.updateQueue=null,z0.current=sp,e=i(l,c)}while(go)}if(z0.current=M0,t=vt!==null&&vt.next!==null,Ur=0,bt=vt=it=null,S0=!1,t)throw Error(r(300));return e}function Ta(){var e=vo!==0;return vo=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?it.memoizedState=bt=e:bt=bt.next=e,bt}function rn(){if(vt===null){var e=it.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=bt===null?it.memoizedState:bt.next;if(t!==null)bt=t,vt=e;else{if(e===null)throw Error(r(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},bt===null?it.memoizedState=bt=e:bt=bt.next=e}return bt}function yo(e,t){return typeof t=="function"?t(e):t}function qa(e){var t=rn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=vt,c=l.baseQueue,f=i.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}l.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,l=l.baseState;var z=x=null,M=null,O=f;do{var J=O.lane;if((Ur&J)===J)M!==null&&(M=M.next={lane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),l=O.hasEagerState?O.eagerState:e(l,O.action);else{var ne={lane:J,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null};M===null?(z=M=ne,x=l):M=M.next=ne,it.lanes|=J,Vr|=J}O=O.next}while(O!==null&&O!==f);M===null?x=l:M.next=z,dn(l,t.memoizedState)||(Bt=!0),t.memoizedState=l,t.baseState=x,t.baseQueue=M,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do f=c.lane,it.lanes|=f,Vr|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Ma(e){var t=rn(),i=t.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,f=t.memoizedState;if(c!==null){i.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);dn(f,t.memoizedState)||(Bt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),i.lastRenderedState=f}return[f,l]}function _c(){}function $c(e,t){var i=it,l=rn(),c=t(),f=!dn(l.memoizedState,c);if(f&&(l.memoizedState=c,Bt=!0),l=l.queue,ja(Sc.bind(null,i,l,e),[e]),l.getSnapshot!==t||f||bt!==null&&bt.memoizedState.tag&1){if(i.flags|=2048,xo(9,zc.bind(null,i,l,c,t),void 0,null),wt===null)throw Error(r(349));(Ur&30)!==0||kc(i,t,c)}return c}function kc(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function zc(e,t,i,l){t.value=i,t.getSnapshot=l,Tc(t)&&qc(e)}function Sc(e,t,i){return i(function(){Tc(t)&&qc(e)})}function Tc(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!dn(e,i)}catch{return!0}}function qc(e){var t=In(e,1);t!==null&&gn(t,e,1,-1)}function Mc(e){var t=wn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:e},t.queue=e,e=e.dispatch=rp.bind(null,it,e),[t.memoizedState,e]}function xo(e,t,i,l){return e={tag:e,create:t,destroy:i,deps:l,next:null},t=it.updateQueue,t===null?(t={lastEffect:null,stores:null},it.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,t.lastEffect=e)),e}function jc(){return rn().memoizedState}function T0(e,t,i,l){var c=wn();it.flags|=e,c.memoizedState=xo(1|t,i,void 0,l===void 0?null:l)}function q0(e,t,i,l){var c=rn();l=l===void 0?null:l;var f=void 0;if(vt!==null){var x=vt.memoizedState;if(f=x.destroy,l!==null&&za(l,x.deps)){c.memoizedState=xo(t,i,f,l);return}}it.flags|=e,c.memoizedState=xo(1|t,i,f,l)}function Ac(e,t){return T0(8390656,8,e,t)}function ja(e,t){return q0(2048,8,e,t)}function Cc(e,t){return q0(4,2,e,t)}function Rc(e,t){return q0(4,4,e,t)}function Ec(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pc(e,t,i){return i=i!=null?i.concat([e]):null,q0(4,4,Ec.bind(null,t,e),i)}function Aa(){}function Dc(e,t){var i=rn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&za(t,l[1])?l[0]:(i.memoizedState=[e,t],e)}function Nc(e,t){var i=rn();t=t===void 0?null:t;var l=i.memoizedState;return l!==null&&t!==null&&za(t,l[1])?l[0]:(e=e(),i.memoizedState=[e,t],e)}function Bc(e,t,i){return(Ur&21)===0?(e.baseState&&(e.baseState=!1,Bt=!0),e.memoizedState=i):(dn(i,t)||(i=pu(),it.lanes|=i,Vr|=i,e.baseState=!0),t)}function tp(e,t){var i=Ke;Ke=i!==0&&4>i?i:4,e(!0);var l=ka.transition;ka.transition={};try{e(!1),t()}finally{Ke=i,ka.transition=l}}function Ic(){return rn().memoizedState}function np(e,t,i){var l=br(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Fc(e))Lc(t,i);else if(i=vc(e,t,i,l),i!==null){var c=At();gn(i,e,l,c),Oc(i,t,l)}}function rp(e,t,i){var l=br(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Fc(e))Lc(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var x=t.lastRenderedState,z=f(x,i);if(c.hasEagerState=!0,c.eagerState=z,dn(z,x)){var M=t.interleaved;M===null?(c.next=c,ya(t)):(c.next=M.next,M.next=c),t.interleaved=c;return}}catch{}finally{}i=vc(e,t,c,l),i!==null&&(c=At(),gn(i,e,l,c),Oc(i,t,l))}}function Fc(e){var t=e.alternate;return e===it||t!==null&&t===it}function Lc(e,t){go=S0=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Oc(e,t,i){if((i&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,i|=l,t.lanes=i,Rs(e,i)}}var M0={readContext:nn,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},ip={readContext:nn,useCallback:function(e,t){return wn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:Ac,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,T0(4194308,4,Ec.bind(null,t,e),i)},useLayoutEffect:function(e,t){return T0(4194308,4,e,t)},useInsertionEffect:function(e,t){return T0(4,2,e,t)},useMemo:function(e,t){var i=wn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var l=wn();return t=i!==void 0?i(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=np.bind(null,it,e),[l.memoizedState,e]},useRef:function(e){var t=wn();return e={current:e},t.memoizedState=e},useState:Mc,useDebugValue:Aa,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=Mc(!1),t=e[0];return e=tp.bind(null,e[1]),wn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var l=it,c=wn();if(tt){if(i===void 0)throw Error(r(407));i=i()}else{if(i=t(),wt===null)throw Error(r(349));(Ur&30)!==0||kc(l,t,i)}c.memoizedState=i;var f={value:i,getSnapshot:t};return c.queue=f,Ac(Sc.bind(null,l,f,e),[e]),l.flags|=2048,xo(9,zc.bind(null,l,f,i,t),void 0,null),i},useId:function(){var e=wn(),t=wt.identifierPrefix;if(tt){var i=Bn,l=Nn;i=(l&~(1<<32-cn(l)-1)).toString(32)+i,t=":"+t+"R"+i,i=vo++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=ep++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},op={readContext:nn,useCallback:Dc,useContext:nn,useEffect:ja,useImperativeHandle:Pc,useInsertionEffect:Cc,useLayoutEffect:Rc,useMemo:Nc,useReducer:qa,useRef:jc,useState:function(){return qa(yo)},useDebugValue:Aa,useDeferredValue:function(e){var t=rn();return Bc(t,vt.memoizedState,e)},useTransition:function(){var e=qa(yo)[0],t=rn().memoizedState;return[e,t]},useMutableSource:_c,useSyncExternalStore:$c,useId:Ic,unstable_isNewReconciler:!1},sp={readContext:nn,useCallback:Dc,useContext:nn,useEffect:ja,useImperativeHandle:Pc,useInsertionEffect:Cc,useLayoutEffect:Rc,useMemo:Nc,useReducer:Ma,useRef:jc,useState:function(){return Ma(yo)},useDebugValue:Aa,useDeferredValue:function(e){var t=rn();return vt===null?t.memoizedState=e:Bc(t,vt.memoizedState,e)},useTransition:function(){var e=Ma(yo)[0],t=rn().memoizedState;return[e,t]},useMutableSource:_c,useSyncExternalStore:$c,useId:Ic,unstable_isNewReconciler:!1};function fn(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ca(e,t,i,l){t=e.memoizedState,i=i(l,t),i=i==null?t:ce({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var j0={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var l=At(),c=br(e),f=Fn(l,c);f.payload=t,i!=null&&(f.callback=i),t=gr(e,f,c),t!==null&&(gn(t,e,c,l),_0(t,e,c))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var l=At(),c=br(e),f=Fn(l,c);f.tag=1,f.payload=t,i!=null&&(f.callback=i),t=gr(e,f,c),t!==null&&(gn(t,e,c,l),_0(t,e,c))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=At(),l=br(e),c=Fn(i,l);c.tag=2,t!=null&&(c.callback=t),t=gr(e,c,l),t!==null&&(gn(t,e,l,i),_0(t,e,l))}};function Hc(e,t,i,l,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,x):t.prototype&&t.prototype.isPureReactComponent?!io(i,l)||!io(c,f):!0}function Gc(e,t,i){var l=!1,c=fr,f=t.contextType;return typeof f=="object"&&f!==null?f=nn(f):(c=Nt(t)?Lr:zt.current,l=t.contextTypes,f=(l=l!=null)?hi(e,c):fr),t=new t(i,f),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=j0,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),t}function Wc(e,t,i,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,l),t.state!==e&&j0.enqueueReplaceState(t,t.state,null)}function Ra(e,t,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},xa(e);var f=t.contextType;typeof f=="object"&&f!==null?c.context=nn(f):(f=Nt(t)?Lr:zt.current,c.context=hi(e,f)),c.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(Ca(e,t,f,i),c.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(t=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),t!==c.state&&j0.enqueueReplaceState(c,c.state,null),$0(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function $i(e,t){try{var i="",l=t;do i+=ke(l),l=l.return;while(l);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:t,stack:c,digest:null}}function Ea(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Pa(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,t,i){i=Fn(-1,i),i.tag=3,i.payload={element:null};var l=t.value;return i.callback=function(){N0||(N0=!0,Ya=l),Pa(e,t)},i}function Vc(e,t,i){i=Fn(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=t.value;i.payload=function(){return l(c)},i.callback=function(){Pa(e,t)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){Pa(e,t),typeof l!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),i}function Kc(e,t,i){var l=e.pingCache;if(l===null){l=e.pingCache=new ap;var c=new Set;l.set(t,c)}else c=l.get(t),c===void 0&&(c=new Set,l.set(t,c));c.has(i)||(c.add(i),e=wp.bind(null,e,t,i),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,i,l,c){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Fn(-1,1),t.tag=2,gr(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=c,e)}var lp=N.ReactCurrentOwner,Bt=!1;function jt(e,t,i,l){t.child=e===null?gc(t,null,i,l):xi(t,e.child,i,l)}function Xc(e,t,i,l,c){i=i.render;var f=t.ref;return wi(t,c),l=Sa(e,t,i,l,f,c),i=Ta(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Ln(e,t,c)):(tt&&i&&ua(t),t.flags|=1,jt(e,t,l,c),t.child)}function Zc(e,t,i,l,c){if(e===null){var f=i.type;return typeof f=="function"&&!rl(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=f,Jc(e,t,f,l,c)):(e=H0(i.type,null,l,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,(e.lanes&c)===0){var x=f.memoizedProps;if(i=i.compare,i=i!==null?i:io,i(x,l)&&e.ref===t.ref)return Ln(e,t,c)}return t.flags|=1,e=_r(f,l),e.ref=t.ref,e.return=t,t.child=e}function Jc(e,t,i,l,c){if(e!==null){var f=e.memoizedProps;if(io(f,l)&&e.ref===t.ref)if(Bt=!1,t.pendingProps=l=f,(e.lanes&c)!==0)(e.flags&131072)!==0&&(Bt=!0);else return t.lanes=e.lanes,Ln(e,t,c)}return Da(e,t,i,l,c)}function e1(e,t,i){var l=t.pendingProps,c=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(zi,Qt),Qt|=i;else{if((i&1073741824)===0)return e=f!==null?f.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Xe(zi,Qt),Qt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:i,Xe(zi,Qt),Qt|=l}else f!==null?(l=f.baseLanes|i,t.memoizedState=null):l=i,Xe(zi,Qt),Qt|=l;return jt(e,t,c,i),t.child}function t1(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Da(e,t,i,l,c){var f=Nt(i)?Lr:zt.current;return f=hi(t,f),wi(t,c),i=Sa(e,t,i,l,f,c),l=Ta(),e!==null&&!Bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~c,Ln(e,t,c)):(tt&&l&&ua(t),t.flags|=1,jt(e,t,i,c),t.child)}function n1(e,t,i,l,c){if(Nt(i)){var f=!0;p0(t)}else f=!1;if(wi(t,c),t.stateNode===null)C0(e,t),Gc(t,i,l),Ra(t,i,l,c),l=!0;else if(e===null){var x=t.stateNode,z=t.memoizedProps;x.props=z;var M=x.context,O=i.contextType;typeof O=="object"&&O!==null?O=nn(O):(O=Nt(i)?Lr:zt.current,O=hi(t,O));var J=i.getDerivedStateFromProps,ne=typeof J=="function"||typeof x.getSnapshotBeforeUpdate=="function";ne||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(z!==l||M!==O)&&Wc(t,x,l,O),hr=!1;var X=t.memoizedState;x.state=X,$0(t,l,x,c),M=t.memoizedState,z!==l||X!==M||Dt.current||hr?(typeof J=="function"&&(Ca(t,i,J,l),M=t.memoizedState),(z=hr||Hc(t,i,z,l,X,M,O))?(ne||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=M),x.props=l,x.state=M,x.context=O,l=z):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{x=t.stateNode,yc(e,t),z=t.memoizedProps,O=t.type===t.elementType?z:fn(t.type,z),x.props=O,ne=t.pendingProps,X=x.context,M=i.contextType,typeof M=="object"&&M!==null?M=nn(M):(M=Nt(i)?Lr:zt.current,M=hi(t,M));var me=i.getDerivedStateFromProps;(J=typeof me=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(z!==ne||X!==M)&&Wc(t,x,l,M),hr=!1,X=t.memoizedState,x.state=X,$0(t,l,x,c);var ge=t.memoizedState;z!==ne||X!==ge||Dt.current||hr?(typeof me=="function"&&(Ca(t,i,me,l),ge=t.memoizedState),(O=hr||Hc(t,i,O,l,X,ge,M)||!1)?(J||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(l,ge,M),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(l,ge,M)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||z===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=ge),x.props=l,x.state=ge,x.context=M,l=O):(typeof x.componentDidUpdate!="function"||z===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),l=!1)}return Na(e,t,i,l,f,c)}function Na(e,t,i,l,c,f){t1(e,t);var x=(t.flags&128)!==0;if(!l&&!x)return c&&ac(t,i,!1),Ln(e,t,f);l=t.stateNode,lp.current=t;var z=x&&typeof i.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&x?(t.child=xi(t,e.child,null,f),t.child=xi(t,null,z,f)):jt(e,t,z,f),t.memoizedState=l.state,c&&ac(t,i,!0),t.child}function r1(e){var t=e.stateNode;t.pendingContext?oc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oc(e,t.context,!1),ba(e,t.containerInfo)}function i1(e,t,i,l,c){return yi(),fa(c),t.flags|=256,jt(e,t,i,l),t.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function o1(e,t,i){var l=t.pendingProps,c=rt.current,f=!1,x=(t.flags&128)!==0,z;if((z=x)||(z=e!==null&&e.memoizedState===null?!1:(c&2)!==0),z?(f=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Xe(rt,c&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=l.children,e=l.fallback,f?(l=t.mode,f=t.child,x={mode:"hidden",children:x},(l&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=x):f=G0(x,l,0,null),e=Xr(e,l,i,null),f.return=t,e.return=t,f.sibling=e,t.child=f,t.child.memoizedState=Ia(i),t.memoizedState=Ba,e):Fa(t,x));if(c=e.memoizedState,c!==null&&(z=c.dehydrated,z!==null))return up(e,t,x,l,z,c,i);if(f){f=l.fallback,x=t.mode,c=e.child,z=c.sibling;var M={mode:"hidden",children:l.children};return(x&1)===0&&t.child!==c?(l=t.child,l.childLanes=0,l.pendingProps=M,t.deletions=null):(l=_r(c,M),l.subtreeFlags=c.subtreeFlags&14680064),z!==null?f=_r(z,f):(f=Xr(f,x,i,null),f.flags|=2),f.return=t,l.return=t,l.sibling=f,t.child=l,l=f,f=t.child,x=e.child.memoizedState,x=x===null?Ia(i):{baseLanes:x.baseLanes|i,cachePool:null,transitions:x.transitions},f.memoizedState=x,f.childLanes=e.childLanes&~i,t.memoizedState=Ba,l}return f=e.child,e=f.sibling,l=_r(f,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=i),l.return=t,l.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=l,t.memoizedState=null,l}function Fa(e,t){return t=G0({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function A0(e,t,i,l){return l!==null&&fa(l),xi(t,e.child,null,i),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function up(e,t,i,l,c,f,x){if(i)return t.flags&256?(t.flags&=-257,l=Ea(Error(r(422))),A0(e,t,x,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(f=l.fallback,c=t.mode,l=G0({mode:"visible",children:l.children},c,0,null),f=Xr(f,c,x,null),f.flags|=2,l.return=t,f.return=t,l.sibling=f,t.child=l,(t.mode&1)!==0&&xi(t,e.child,null,x),t.child.memoizedState=Ia(x),t.memoizedState=Ba,f);if((t.mode&1)===0)return A0(e,t,x,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var z=l.dgst;return l=z,f=Error(r(419)),l=Ea(f,l,void 0),A0(e,t,x,l)}if(z=(x&e.childLanes)!==0,Bt||z){if(l=wt,l!==null){switch(x&-x){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|x))!==0?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,In(e,c),gn(l,e,c,-1))}return nl(),l=Ea(Error(r(421))),A0(e,t,x,l)}return c.data==="$?"?(t.flags|=128,t.child=e.child,t=_p.bind(null,e),c._reactRetry=t,null):(e=f.treeContext,Kt=dr(c.nextSibling),Vt=t,tt=!0,mn=null,e!==null&&(en[tn++]=Nn,en[tn++]=Bn,en[tn++]=Or,Nn=e.id,Bn=e.overflow,Or=t),t=Fa(t,l.children),t.flags|=4096,t)}function s1(e,t,i){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),va(e.return,t,i)}function La(e,t,i,l,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=i,f.tailMode=c)}function a1(e,t,i){var l=t.pendingProps,c=l.revealOrder,f=l.tail;if(jt(e,t,l.children,i),l=rt.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&s1(e,i,t);else if(e.tag===19)s1(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Xe(rt,l),(t.mode&1)===0)t.memoizedState=null;else switch(c){case"forwards":for(i=t.child,c=null;i!==null;)e=i.alternate,e!==null&&k0(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=t.child,t.child=null):(c=i.sibling,i.sibling=null),La(t,!1,c,i,f);break;case"backwards":for(i=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&k0(e)===null){t.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}La(t,!0,i,null,f);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function C0(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ln(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Vr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,i=_r(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=_r(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function cp(e,t,i){switch(t.tag){case 3:r1(t),yi();break;case 5:wc(t);break;case 1:Nt(t.type)&&p0(t);break;case 4:ba(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,c=t.memoizedProps.value;Xe(b0,l._currentValue),l._currentValue=c;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(Xe(rt,rt.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?o1(e,t,i):(Xe(rt,rt.current&1),e=Ln(e,t,i),e!==null?e.sibling:null);Xe(rt,rt.current&1);break;case 19:if(l=(i&t.childLanes)!==0,(e.flags&128)!==0){if(l)return a1(e,t,i);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xe(rt,rt.current),l)break;return null;case 22:case 23:return t.lanes=0,e1(e,t,i)}return Ln(e,t,i)}var l1,Oa,u1,c1;l1=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Oa=function(){},u1=function(e,t,i,l){var c=e.memoizedProps;if(c!==l){e=t.stateNode,Wr(bn.current);var f=null;switch(i){case"input":c=Yn(e,c),l=Yn(e,l),f=[];break;case"select":c=ce({},c,{value:void 0}),l=ce({},l,{value:void 0}),f=[];break;case"textarea":c=Zn(e,c),l=Zn(e,l),f=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=d0)}Pr(i,l);var x;i=null;for(O in c)if(!l.hasOwnProperty(O)&&c.hasOwnProperty(O)&&c[O]!=null)if(O==="style"){var z=c[O];for(x in z)z.hasOwnProperty(x)&&(i||(i={}),i[x]="")}else O!=="dangerouslySetInnerHTML"&&O!=="children"&&O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&O!=="autoFocus"&&(a.hasOwnProperty(O)?f||(f=[]):(f=f||[]).push(O,null));for(O in l){var M=l[O];if(z=c!=null?c[O]:void 0,l.hasOwnProperty(O)&&M!==z&&(M!=null||z!=null))if(O==="style")if(z){for(x in z)!z.hasOwnProperty(x)||M&&M.hasOwnProperty(x)||(i||(i={}),i[x]="");for(x in M)M.hasOwnProperty(x)&&z[x]!==M[x]&&(i||(i={}),i[x]=M[x])}else i||(f||(f=[]),f.push(O,i)),i=M;else O==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,z=z?z.__html:void 0,M!=null&&z!==M&&(f=f||[]).push(O,M)):O==="children"?typeof M!="string"&&typeof M!="number"||(f=f||[]).push(O,""+M):O!=="suppressContentEditableWarning"&&O!=="suppressHydrationWarning"&&(a.hasOwnProperty(O)?(M!=null&&O==="onScroll"&&Je("scroll",e),f||z===M||(f=[])):(f=f||[]).push(O,M))}i&&(f=f||[]).push("style",i);var O=f;(t.updateQueue=O)&&(t.flags|=4)}},c1=function(e,t,i,l){i!==l&&(t.flags|=4)};function bo(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(t)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,t}function dp(e,t,i){var l=t.pendingProps;switch(ca(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Nt(t.type)&&f0(),Tt(t),null;case 3:return l=t.stateNode,_i(),et(Dt),et(zt),$a(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(y0(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mn!==null&&(Ja(mn),mn=null))),Oa(e,t),Tt(t),null;case 5:wa(t);var c=Wr(ho.current);if(i=t.type,e!==null&&t.stateNode!=null)u1(e,t,i,l,c),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(r(166));return Tt(t),null}if(e=Wr(bn.current),y0(t)){l=t.stateNode,i=t.type;var f=t.memoizedProps;switch(l[xn]=t,l[uo]=f,e=(t.mode&1)!==0,i){case"dialog":Je("cancel",l),Je("close",l);break;case"iframe":case"object":case"embed":Je("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)Je(so[c],l);break;case"source":Je("error",l);break;case"img":case"image":case"link":Je("error",l),Je("load",l);break;case"details":Je("toggle",l);break;case"input":Cr(l,f),Je("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Je("invalid",l);break;case"textarea":Gt(l,f),Je("invalid",l)}Pr(i,f),c=null;for(var x in f)if(f.hasOwnProperty(x)){var z=f[x];x==="children"?typeof z=="string"?l.textContent!==z&&(f.suppressHydrationWarning!==!0&&c0(l.textContent,z,e),c=["children",z]):typeof z=="number"&&l.textContent!==""+z&&(f.suppressHydrationWarning!==!0&&c0(l.textContent,z,e),c=["children",""+z]):a.hasOwnProperty(x)&&z!=null&&x==="onScroll"&&Je("scroll",l)}switch(i){case"input":Zt(l),Xn(l,f,!0);break;case"textarea":Zt(l),Di(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=d0)}l=c,t.updateQueue=l,l!==null&&(t.flags|=4)}else{x=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bo(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=x.createElement(i,{is:l.is}):(e=x.createElement(i),i==="select"&&(x=e,l.multiple?x.multiple=!0:l.size&&(x.size=l.size))):e=x.createElementNS(e,i),e[xn]=t,e[uo]=l,l1(e,t,!1,!1),t.stateNode=e;e:{switch(x=er(i,l),i){case"dialog":Je("cancel",e),Je("close",e),c=l;break;case"iframe":case"object":case"embed":Je("load",e),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)Je(so[c],e);c=l;break;case"source":Je("error",e),c=l;break;case"img":case"image":case"link":Je("error",e),Je("load",e),c=l;break;case"details":Je("toggle",e),c=l;break;case"input":Cr(e,l),c=Yn(e,l),Je("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=ce({},l,{value:void 0}),Je("invalid",e);break;case"textarea":Gt(e,l),c=Zn(e,l),Je("invalid",e);break;default:c=l}Pr(i,c),z=c;for(f in z)if(z.hasOwnProperty(f)){var M=z[f];f==="style"?Fo(e,M):f==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Io(e,M)):f==="children"?typeof M=="string"?(i!=="textarea"||M!=="")&&Wt(e,M):typeof M=="number"&&Wt(e,""+M):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(a.hasOwnProperty(f)?M!=null&&f==="onScroll"&&Je("scroll",e):M!=null&&W(e,f,M,x))}switch(i){case"input":Zt(e),Xn(e,l,!1);break;case"textarea":Zt(e),Di(e);break;case"option":l.value!=null&&e.setAttribute("value",""+De(l.value));break;case"select":e.multiple=!!l.multiple,f=l.value,f!=null?Ve(e,!!l.multiple,f,!1):l.defaultValue!=null&&Ve(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=d0)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)c1(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(r(166));if(i=Wr(ho.current),Wr(bn.current),y0(t)){if(l=t.stateNode,i=t.memoizedProps,l[xn]=t,(f=l.nodeValue!==i)&&(e=Vt,e!==null))switch(e.tag){case 3:c0(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&c0(l.nodeValue,i,(e.mode&1)!==0)}f&&(t.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[xn]=t,t.stateNode=l}return Tt(t),null;case 13:if(et(rt),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(tt&&Kt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)fc(),yi(),t.flags|=98560,f=!1;else if(f=y0(t),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=t.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[xn]=t}else yi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tt(t),f=!1}else mn!==null&&(Ja(mn),mn=null),f=!0;if(!f)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(rt.current&1)!==0?yt===0&&(yt=3):nl())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return _i(),Oa(e,t),e===null&&ao(t.stateNode.containerInfo),Tt(t),null;case 10:return ga(t.type._context),Tt(t),null;case 17:return Nt(t.type)&&f0(),Tt(t),null;case 19:if(et(rt),f=t.memoizedState,f===null)return Tt(t),null;if(l=(t.flags&128)!==0,x=f.rendering,x===null)if(l)bo(f,!1);else{if(yt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=k0(e),x!==null){for(t.flags|=128,bo(f,!1),l=x.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=i,i=t.child;i!==null;)f=i,e=l,f.flags&=14680066,x=f.alternate,x===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=x.childLanes,f.lanes=x.lanes,f.child=x.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=x.memoizedProps,f.memoizedState=x.memoizedState,f.updateQueue=x.updateQueue,f.type=x.type,e=x.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Xe(rt,rt.current&1|2),t.child}e=e.sibling}f.tail!==null&&ut()>Si&&(t.flags|=128,l=!0,bo(f,!1),t.lanes=4194304)}else{if(!l)if(e=k0(x),e!==null){if(t.flags|=128,l=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),bo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!x.alternate&&!tt)return Tt(t),null}else 2*ut()-f.renderingStartTime>Si&&i!==1073741824&&(t.flags|=128,l=!0,bo(f,!1),t.lanes=4194304);f.isBackwards?(x.sibling=t.child,t.child=x):(i=f.last,i!==null?i.sibling=x:t.child=x,f.last=x)}return f.tail!==null?(t=f.tail,f.rendering=t,f.tail=t.sibling,f.renderingStartTime=ut(),t.sibling=null,i=rt.current,Xe(rt,l?i&1|2:i&1),t):(Tt(t),null);case 22:case 23:return tl(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(Qt&1073741824)!==0&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function mp(e,t){switch(ca(t),t.tag){case 1:return Nt(t.type)&&f0(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _i(),et(Dt),et(zt),$a(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return wa(t),null;case 13:if(et(rt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(rt),null;case 4:return _i(),null;case 10:return ga(t.type._context),null;case 22:case 23:return tl(),null;case 24:return null;default:return null}}var R0=!1,qt=!1,fp=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ki(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){at(e,t,l)}else i.current=null}function Ha(e,t,i){try{i()}catch(l){at(e,t,l)}}var d1=!1;function pp(e,t){if(ta=Jo,e=Hu(),Vs(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var x=0,z=-1,M=-1,O=0,J=0,ne=e,X=null;t:for(;;){for(var me;ne!==i||c!==0&&ne.nodeType!==3||(z=x+c),ne!==f||l!==0&&ne.nodeType!==3||(M=x+l),ne.nodeType===3&&(x+=ne.nodeValue.length),(me=ne.firstChild)!==null;)X=ne,ne=me;for(;;){if(ne===e)break t;if(X===i&&++O===c&&(z=x),X===f&&++J===l&&(M=x),(me=ne.nextSibling)!==null)break;ne=X,X=ne.parentNode}ne=me}i=z===-1||M===-1?null:{start:z,end:M}}else i=null}i=i||{start:0,end:0}}else i=null;for(na={focusedElem:e,selectionRange:i},Jo=!1,pe=t;pe!==null;)if(t=pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,pe=e;else for(;pe!==null;){t=pe;try{var ge=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var xe=ge.memoizedProps,ct=ge.memoizedState,D=t.stateNode,C=D.getSnapshotBeforeUpdate(t.elementType===t.type?xe:fn(t.type,xe),ct);D.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(oe){at(t,t.return,oe)}if(e=t.sibling,e!==null){e.return=t.return,pe=e;break}pe=t.return}return ge=d1,d1=!1,ge}function wo(e,t,i){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&Ha(t,i,f)}c=c.next}while(c!==l)}}function E0(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==t)}}function Ga(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function m1(e){var t=e.alternate;t!==null&&(e.alternate=null,m1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xn],delete t[uo],delete t[sa],delete t[Yf],delete t[Xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function f1(e){return e.tag===5||e.tag===3||e.tag===4}function p1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=d0));else if(l!==4&&(e=e.child,e!==null))for(Wa(e,t,i),e=e.sibling;e!==null;)Wa(e,t,i),e=e.sibling}function Ua(e,t,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ua(e,t,i),e=e.sibling;e!==null;)Ua(e,t,i),e=e.sibling}var $t=null,pn=!1;function vr(e,t,i){for(i=i.child;i!==null;)h1(e,t,i),i=i.sibling}function h1(e,t,i){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Vo,i)}catch{}switch(i.tag){case 5:qt||ki(i,t);case 6:var l=$t,c=pn;$t=null,vr(e,t,i),$t=l,pn=c,$t!==null&&(pn?(e=$t,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):$t.removeChild(i.stateNode));break;case 18:$t!==null&&(pn?(e=$t,i=i.stateNode,e.nodeType===8?oa(e.parentNode,i):e.nodeType===1&&oa(e,i),Zi(e)):oa($t,i.stateNode));break;case 4:l=$t,c=pn,$t=i.stateNode.containerInfo,pn=!0,vr(e,t,i),$t=l,pn=c;break;case 0:case 11:case 14:case 15:if(!qt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var f=c,x=f.destroy;f=f.tag,x!==void 0&&((f&2)!==0||(f&4)!==0)&&Ha(i,t,x),c=c.next}while(c!==l)}vr(e,t,i);break;case 1:if(!qt&&(ki(i,t),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(z){at(i,t,z)}vr(e,t,i);break;case 21:vr(e,t,i);break;case 22:i.mode&1?(qt=(l=qt)||i.memoizedState!==null,vr(e,t,i),qt=l):vr(e,t,i);break;default:vr(e,t,i)}}function g1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new fp),t.forEach(function(l){var c=$p.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function hn(e,t){var i=t.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var f=e,x=t,z=x;e:for(;z!==null;){switch(z.tag){case 5:$t=z.stateNode,pn=!1;break e;case 3:$t=z.stateNode.containerInfo,pn=!0;break e;case 4:$t=z.stateNode.containerInfo,pn=!0;break e}z=z.return}if($t===null)throw Error(r(160));h1(f,x,c),$t=null,pn=!1;var M=c.alternate;M!==null&&(M.return=null),c.return=null}catch(O){at(c,t,O)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)v1(t,e),t=t.sibling}function v1(e,t){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hn(t,e),_n(e),l&4){try{wo(3,e,e.return),E0(3,e)}catch(xe){at(e,e.return,xe)}try{wo(5,e,e.return)}catch(xe){at(e,e.return,xe)}}break;case 1:hn(t,e),_n(e),l&512&&i!==null&&ki(i,i.return);break;case 5:if(hn(t,e),_n(e),l&512&&i!==null&&ki(i,i.return),e.flags&32){var c=e.stateNode;try{Wt(c,"")}catch(xe){at(e,e.return,xe)}}if(l&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,x=i!==null?i.memoizedProps:f,z=e.type,M=e.updateQueue;if(e.updateQueue=null,M!==null)try{z==="input"&&f.type==="radio"&&f.name!=null&&jn(c,f),er(z,x);var O=er(z,f);for(x=0;x<M.length;x+=2){var J=M[x],ne=M[x+1];J==="style"?Fo(c,ne):J==="dangerouslySetInnerHTML"?Io(c,ne):J==="children"?Wt(c,ne):W(c,J,ne,O)}switch(z){case"input":An(c,f);break;case"textarea":Jn(c,f);break;case"select":var X=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var me=f.value;me!=null?Ve(c,!!f.multiple,me,!1):X!==!!f.multiple&&(f.defaultValue!=null?Ve(c,!!f.multiple,f.defaultValue,!0):Ve(c,!!f.multiple,f.multiple?[]:"",!1))}c[uo]=f}catch(xe){at(e,e.return,xe)}}break;case 6:if(hn(t,e),_n(e),l&4){if(e.stateNode===null)throw Error(r(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(xe){at(e,e.return,xe)}}break;case 3:if(hn(t,e),_n(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(xe){at(e,e.return,xe)}break;case 4:hn(t,e),_n(e);break;case 13:hn(t,e),_n(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(Qa=ut())),l&4&&g1(e);break;case 22:if(J=i!==null&&i.memoizedState!==null,e.mode&1?(qt=(O=qt)||J,hn(t,e),qt=O):hn(t,e),_n(e),l&8192){if(O=e.memoizedState!==null,(e.stateNode.isHidden=O)&&!J&&(e.mode&1)!==0)for(pe=e,J=e.child;J!==null;){for(ne=pe=J;pe!==null;){switch(X=pe,me=X.child,X.tag){case 0:case 11:case 14:case 15:wo(4,X,X.return);break;case 1:ki(X,X.return);var ge=X.stateNode;if(typeof ge.componentWillUnmount=="function"){l=X,i=X.return;try{t=l,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(xe){at(l,i,xe)}}break;case 5:ki(X,X.return);break;case 22:if(X.memoizedState!==null){b1(ne);continue}}me!==null?(me.return=X,pe=me):b1(ne)}J=J.sibling}e:for(J=null,ne=e;;){if(ne.tag===5){if(J===null){J=ne;try{c=ne.stateNode,O?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(z=ne.stateNode,M=ne.memoizedProps.style,x=M!=null&&M.hasOwnProperty("display")?M.display:null,z.style.display=Bi("display",x))}catch(xe){at(e,e.return,xe)}}}else if(ne.tag===6){if(J===null)try{ne.stateNode.nodeValue=O?"":ne.memoizedProps}catch(xe){at(e,e.return,xe)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===e)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===e)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===e)break e;J===ne&&(J=null),ne=ne.return}J===ne&&(J=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:hn(t,e),_n(e),l&4&&g1(e);break;case 21:break;default:hn(t,e),_n(e)}}function _n(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(f1(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Wt(c,""),l.flags&=-33);var f=p1(e);Ua(e,f,c);break;case 3:case 4:var x=l.stateNode.containerInfo,z=p1(e);Wa(e,z,x);break;default:throw Error(r(161))}}catch(M){at(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hp(e,t,i){pe=e,y1(e)}function y1(e,t,i){for(var l=(e.mode&1)!==0;pe!==null;){var c=pe,f=c.child;if(c.tag===22&&l){var x=c.memoizedState!==null||R0;if(!x){var z=c.alternate,M=z!==null&&z.memoizedState!==null||qt;z=R0;var O=qt;if(R0=x,(qt=M)&&!O)for(pe=c;pe!==null;)x=pe,M=x.child,x.tag===22&&x.memoizedState!==null?w1(c):M!==null?(M.return=x,pe=M):w1(c);for(;f!==null;)pe=f,y1(f),f=f.sibling;pe=c,R0=z,qt=O}x1(e)}else(c.subtreeFlags&8772)!==0&&f!==null?(f.return=c,pe=f):x1(e)}}function x1(e){for(;pe!==null;){var t=pe;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qt||E0(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!qt)if(i===null)l.componentDidMount();else{var c=t.elementType===t.type?i.memoizedProps:fn(t.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=t.updateQueue;f!==null&&bc(t,f,l);break;case 3:var x=t.updateQueue;if(x!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}bc(t,x,i)}break;case 5:var z=t.stateNode;if(i===null&&t.flags&4){i=z;var M=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&i.focus();break;case"img":M.src&&(i.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var O=t.alternate;if(O!==null){var J=O.memoizedState;if(J!==null){var ne=J.dehydrated;ne!==null&&Zi(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}qt||t.flags&512&&Ga(t)}catch(X){at(t,t.return,X)}}if(t===e){pe=null;break}if(i=t.sibling,i!==null){i.return=t.return,pe=i;break}pe=t.return}}function b1(e){for(;pe!==null;){var t=pe;if(t===e){pe=null;break}var i=t.sibling;if(i!==null){i.return=t.return,pe=i;break}pe=t.return}}function w1(e){for(;pe!==null;){var t=pe;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{E0(4,t)}catch(M){at(t,i,M)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var c=t.return;try{l.componentDidMount()}catch(M){at(t,c,M)}}var f=t.return;try{Ga(t)}catch(M){at(t,f,M)}break;case 5:var x=t.return;try{Ga(t)}catch(M){at(t,x,M)}}}catch(M){at(t,t.return,M)}if(t===e){pe=null;break}var z=t.sibling;if(z!==null){z.return=t.return,pe=z;break}pe=t.return}}var gp=Math.ceil,P0=N.ReactCurrentDispatcher,Va=N.ReactCurrentOwner,on=N.ReactCurrentBatchConfig,Le=0,wt=null,pt=null,kt=0,Qt=0,zi=mr(0),yt=0,_o=null,Vr=0,D0=0,Ka=0,$o=null,It=null,Qa=0,Si=1/0,On=null,N0=!1,Ya=null,yr=null,B0=!1,xr=null,I0=0,ko=0,Xa=null,F0=-1,L0=0;function At(){return(Le&6)!==0?ut():F0!==-1?F0:F0=ut()}function br(e){return(e.mode&1)===0?1:(Le&2)!==0&&kt!==0?kt&-kt:Jf.transition!==null?(L0===0&&(L0=pu()),L0):(e=Ke,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e)}function gn(e,t,i,l){if(50<ko)throw ko=0,Xa=null,Error(r(185));Vi(e,i,l),((Le&2)===0||e!==wt)&&(e===wt&&((Le&2)===0&&(D0|=i),yt===4&&wr(e,kt)),Ft(e,l),i===1&&Le===0&&(t.mode&1)===0&&(Si=ut()+500,h0&&pr()))}function Ft(e,t){var i=e.callbackNode;Zm(e,t);var l=Yo(e,e===wt?kt:0);if(l===0)i!==null&&Ne(i),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(i!=null&&Ne(i),t===1)e.tag===0?Zf($1.bind(null,e)):lc($1.bind(null,e)),Kf(function(){(Le&6)===0&&pr()}),i=null;else{switch(hu(l)){case 1:i=js;break;case 4:i=mu;break;case 16:i=Uo;break;case 536870912:i=fu;break;default:i=Uo}i=A1(i,_1.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function _1(e,t){if(F0=-1,L0=0,(Le&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Ti()&&e.callbackNode!==i)return null;var l=Yo(e,e===wt?kt:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=O0(e,l);else{t=l;var c=Le;Le|=2;var f=z1();(wt!==e||kt!==t)&&(On=null,Si=ut()+500,Qr(e,t));do try{xp();break}catch(z){k1(e,z)}while(!0);ha(),P0.current=f,Le=c,pt!==null?t=0:(wt=null,kt=0,t=yt)}if(t!==0){if(t===2&&(c=As(e),c!==0&&(l=c,t=Za(e,c))),t===1)throw i=_o,Qr(e,0),wr(e,l),Ft(e,ut()),i;if(t===6)wr(e,l);else{if(c=e.current.alternate,(l&30)===0&&!vp(c)&&(t=O0(e,l),t===2&&(f=As(e),f!==0&&(l=f,t=Za(e,f))),t===1))throw i=_o,Qr(e,0),wr(e,l),Ft(e,ut()),i;switch(e.finishedWork=c,e.finishedLanes=l,t){case 0:case 1:throw Error(r(345));case 2:Yr(e,It,On);break;case 3:if(wr(e,l),(l&130023424)===l&&(t=Qa+500-ut(),10<t)){if(Yo(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){At(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=ia(Yr.bind(null,e,It,On),t);break}Yr(e,It,On);break;case 4:if(wr(e,l),(l&4194240)===l)break;for(t=e.eventTimes,c=-1;0<l;){var x=31-cn(l);f=1<<x,x=t[x],x>c&&(c=x),l&=~f}if(l=c,l=ut()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*gp(l/1960))-l,10<l){e.timeoutHandle=ia(Yr.bind(null,e,It,On),l);break}Yr(e,It,On);break;case 5:Yr(e,It,On);break;default:throw Error(r(329))}}}return Ft(e,ut()),e.callbackNode===i?_1.bind(null,e):null}function Za(e,t){var i=$o;return e.current.memoizedState.isDehydrated&&(Qr(e,t).flags|=256),e=O0(e,t),e!==2&&(t=It,It=i,t!==null&&Ja(t)),e}function Ja(e){It===null?It=e:It.push.apply(It,e)}function vp(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],f=c.getSnapshot;c=c.value;try{if(!dn(f(),c))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wr(e,t){for(t&=~Ka,t&=~D0,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-cn(t),l=1<<i;e[i]=-1,t&=~l}}function $1(e){if((Le&6)!==0)throw Error(r(327));Ti();var t=Yo(e,0);if((t&1)===0)return Ft(e,ut()),null;var i=O0(e,t);if(e.tag!==0&&i===2){var l=As(e);l!==0&&(t=l,i=Za(e,l))}if(i===1)throw i=_o,Qr(e,0),wr(e,t),Ft(e,ut()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yr(e,It,On),Ft(e,ut()),null}function el(e,t){var i=Le;Le|=1;try{return e(t)}finally{Le=i,Le===0&&(Si=ut()+500,h0&&pr())}}function Kr(e){xr!==null&&xr.tag===0&&(Le&6)===0&&Ti();var t=Le;Le|=1;var i=on.transition,l=Ke;try{if(on.transition=null,Ke=1,e)return e()}finally{Ke=l,on.transition=i,Le=t,(Le&6)===0&&pr()}}function tl(){Qt=zi.current,et(zi)}function Qr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Vf(i)),pt!==null)for(i=pt.return;i!==null;){var l=i;switch(ca(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&f0();break;case 3:_i(),et(Dt),et(zt),$a();break;case 5:wa(l);break;case 4:_i();break;case 13:et(rt);break;case 19:et(rt);break;case 10:ga(l.type._context);break;case 22:case 23:tl()}i=i.return}if(wt=e,pt=e=_r(e.current,null),kt=Qt=t,yt=0,_o=null,Ka=D0=Vr=0,It=$o=null,Gr!==null){for(t=0;t<Gr.length;t++)if(i=Gr[t],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,f=i.pending;if(f!==null){var x=f.next;f.next=c,l.next=x}i.pending=l}Gr=null}return e}function k1(e,t){do{var i=pt;try{if(ha(),z0.current=M0,S0){for(var l=it.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}S0=!1}if(Ur=0,bt=vt=it=null,go=!1,vo=0,Va.current=null,i===null||i.return===null){yt=1,_o=t,pt=null;break}e:{var f=e,x=i.return,z=i,M=t;if(t=kt,z.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var O=M,J=z,ne=J.tag;if((J.mode&1)===0&&(ne===0||ne===11||ne===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var me=Qc(x);if(me!==null){me.flags&=-257,Yc(me,x,z,f,t),me.mode&1&&Kc(f,O,t),t=me,M=O;var ge=t.updateQueue;if(ge===null){var xe=new Set;xe.add(M),t.updateQueue=xe}else ge.add(M);break e}else{if((t&1)===0){Kc(f,O,t),nl();break e}M=Error(r(426))}}else if(tt&&z.mode&1){var ct=Qc(x);if(ct!==null){(ct.flags&65536)===0&&(ct.flags|=256),Yc(ct,x,z,f,t),fa($i(M,z));break e}}f=M=$i(M,z),yt!==4&&(yt=2),$o===null?$o=[f]:$o.push(f),f=x;do{switch(f.tag){case 3:f.flags|=65536,t&=-t,f.lanes|=t;var D=Uc(f,M,t);xc(f,D);break e;case 1:z=M;var C=f.type,I=f.stateNode;if((f.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(yr===null||!yr.has(I)))){f.flags|=65536,t&=-t,f.lanes|=t;var oe=Vc(f,z,t);xc(f,oe);break e}}f=f.return}while(f!==null)}T1(i)}catch(we){t=we,pt===i&&i!==null&&(pt=i=i.return);continue}break}while(!0)}function z1(){var e=P0.current;return P0.current=M0,e===null?M0:e}function nl(){(yt===0||yt===3||yt===2)&&(yt=4),wt===null||(Vr&268435455)===0&&(D0&268435455)===0||wr(wt,kt)}function O0(e,t){var i=Le;Le|=2;var l=z1();(wt!==e||kt!==t)&&(On=null,Qr(e,t));do try{yp();break}catch(c){k1(e,c)}while(!0);if(ha(),Le=i,P0.current=l,pt!==null)throw Error(r(261));return wt=null,kt=0,yt}function yp(){for(;pt!==null;)S1(pt)}function xp(){for(;pt!==null&&!Ge();)S1(pt)}function S1(e){var t=j1(e.alternate,e,Qt);e.memoizedProps=e.pendingProps,t===null?T1(e):pt=t,Va.current=null}function T1(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=dp(i,t,Qt),i!==null){pt=i;return}}else{if(i=mp(i,t),i!==null){i.flags&=32767,pt=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,pt=null;return}}if(t=t.sibling,t!==null){pt=t;return}pt=t=e}while(t!==null);yt===0&&(yt=5)}function Yr(e,t,i){var l=Ke,c=on.transition;try{on.transition=null,Ke=1,bp(e,t,i,l)}finally{on.transition=c,Ke=l}return null}function bp(e,t,i,l){do Ti();while(xr!==null);if((Le&6)!==0)throw Error(r(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(Jm(e,f),e===wt&&(pt=wt=null,kt=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||B0||(B0=!0,A1(Uo,function(){return Ti(),null})),f=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||f){f=on.transition,on.transition=null;var x=Ke;Ke=1;var z=Le;Le|=4,Va.current=null,pp(e,i),v1(i,e),Ff(na),Jo=!!ta,na=ta=null,e.current=i,hp(i),Wi(),Le=z,Ke=x,on.transition=f}else e.current=i;if(B0&&(B0=!1,xr=e,I0=c),f=e.pendingLanes,f===0&&(yr=null),Vm(i.stateNode),Ft(e,ut()),t!==null)for(l=e.onRecoverableError,i=0;i<t.length;i++)c=t[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(N0)throw N0=!1,e=Ya,Ya=null,e;return(I0&1)!==0&&e.tag!==0&&Ti(),f=e.pendingLanes,(f&1)!==0?e===Xa?ko++:(ko=0,Xa=e):ko=0,pr(),null}function Ti(){if(xr!==null){var e=hu(I0),t=on.transition,i=Ke;try{if(on.transition=null,Ke=16>e?16:e,xr===null)var l=!1;else{if(e=xr,xr=null,I0=0,(Le&6)!==0)throw Error(r(331));var c=Le;for(Le|=4,pe=e.current;pe!==null;){var f=pe,x=f.child;if((pe.flags&16)!==0){var z=f.deletions;if(z!==null){for(var M=0;M<z.length;M++){var O=z[M];for(pe=O;pe!==null;){var J=pe;switch(J.tag){case 0:case 11:case 15:wo(8,J,f)}var ne=J.child;if(ne!==null)ne.return=J,pe=ne;else for(;pe!==null;){J=pe;var X=J.sibling,me=J.return;if(m1(J),J===O){pe=null;break}if(X!==null){X.return=me,pe=X;break}pe=me}}}var ge=f.alternate;if(ge!==null){var xe=ge.child;if(xe!==null){ge.child=null;do{var ct=xe.sibling;xe.sibling=null,xe=ct}while(xe!==null)}}pe=f}}if((f.subtreeFlags&2064)!==0&&x!==null)x.return=f,pe=x;else e:for(;pe!==null;){if(f=pe,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:wo(9,f,f.return)}var D=f.sibling;if(D!==null){D.return=f.return,pe=D;break e}pe=f.return}}var C=e.current;for(pe=C;pe!==null;){x=pe;var I=x.child;if((x.subtreeFlags&2064)!==0&&I!==null)I.return=x,pe=I;else e:for(x=C;pe!==null;){if(z=pe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:E0(9,z)}}catch(we){at(z,z.return,we)}if(z===x){pe=null;break e}var oe=z.sibling;if(oe!==null){oe.return=z.return,pe=oe;break e}pe=z.return}}if(Le=c,pr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Vo,e)}catch{}l=!0}return l}finally{Ke=i,on.transition=t}}return!1}function q1(e,t,i){t=$i(i,t),t=Uc(e,t,1),e=gr(e,t,1),t=At(),e!==null&&(Vi(e,1,t),Ft(e,t))}function at(e,t,i){if(e.tag===3)q1(e,e,i);else for(;t!==null;){if(t.tag===3){q1(t,e,i);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yr===null||!yr.has(l))){e=$i(i,e),e=Vc(t,e,1),t=gr(t,e,1),e=At(),t!==null&&(Vi(t,1,e),Ft(t,e));break}}t=t.return}}function wp(e,t,i){var l=e.pingCache;l!==null&&l.delete(t),t=At(),e.pingedLanes|=e.suspendedLanes&i,wt===e&&(kt&i)===i&&(yt===4||yt===3&&(kt&130023424)===kt&&500>ut()-Qa?Qr(e,0):Ka|=i),Ft(e,t)}function M1(e,t){t===0&&((e.mode&1)===0?t=1:(t=Qo,Qo<<=1,(Qo&130023424)===0&&(Qo=4194304)));var i=At();e=In(e,t),e!==null&&(Vi(e,t,i),Ft(e,i))}function _p(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),M1(e,i)}function $p(e,t){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(t),M1(e,i)}var j1;j1=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Dt.current)Bt=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return Bt=!1,cp(e,t,i);Bt=(e.flags&131072)!==0}else Bt=!1,tt&&(t.flags&1048576)!==0&&uc(t,v0,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;C0(e,t),e=t.pendingProps;var c=hi(t,zt.current);wi(t,i),c=Sa(null,t,l,e,c,i);var f=Ta();return t.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Nt(l)?(f=!0,p0(t)):f=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,xa(t),c.updater=j0,t.stateNode=c,c._reactInternals=t,Ra(t,l,e,i),t=Na(null,t,l,!0,f,i)):(t.tag=0,tt&&f&&ua(t),jt(null,t,c,i),t=t.child),t;case 16:l=t.elementType;e:{switch(C0(e,t),e=t.pendingProps,c=l._init,l=c(l._payload),t.type=l,c=t.tag=zp(l),e=fn(l,e),c){case 0:t=Da(null,t,l,e,i);break e;case 1:t=n1(null,t,l,e,i);break e;case 11:t=Xc(null,t,l,e,i);break e;case 14:t=Zc(null,t,l,fn(l.type,e),i);break e}throw Error(r(306,l,""))}return t;case 0:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:fn(l,c),Da(e,t,l,c,i);case 1:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:fn(l,c),n1(e,t,l,c,i);case 3:e:{if(r1(t),e===null)throw Error(r(387));l=t.pendingProps,f=t.memoizedState,c=f.element,yc(e,t),$0(t,l,null,i);var x=t.memoizedState;if(l=x.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){c=$i(Error(r(423)),t),t=i1(e,t,l,i,c);break e}else if(l!==c){c=$i(Error(r(424)),t),t=i1(e,t,l,i,c);break e}else for(Kt=dr(t.stateNode.containerInfo.firstChild),Vt=t,tt=!0,mn=null,i=gc(t,null,l,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(yi(),l===c){t=Ln(e,t,i);break e}jt(e,t,l,i)}t=t.child}return t;case 5:return wc(t),e===null&&ma(t),l=t.type,c=t.pendingProps,f=e!==null?e.memoizedProps:null,x=c.children,ra(l,c)?x=null:f!==null&&ra(l,f)&&(t.flags|=32),t1(e,t),jt(e,t,x,i),t.child;case 6:return e===null&&ma(t),null;case 13:return o1(e,t,i);case 4:return ba(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=xi(t,null,l,i):jt(e,t,l,i),t.child;case 11:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:fn(l,c),Xc(e,t,l,c,i);case 7:return jt(e,t,t.pendingProps,i),t.child;case 8:return jt(e,t,t.pendingProps.children,i),t.child;case 12:return jt(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(l=t.type._context,c=t.pendingProps,f=t.memoizedProps,x=c.value,Xe(b0,l._currentValue),l._currentValue=x,f!==null)if(dn(f.value,x)){if(f.children===c.children&&!Dt.current){t=Ln(e,t,i);break e}}else for(f=t.child,f!==null&&(f.return=t);f!==null;){var z=f.dependencies;if(z!==null){x=f.child;for(var M=z.firstContext;M!==null;){if(M.context===l){if(f.tag===1){M=Fn(-1,i&-i),M.tag=2;var O=f.updateQueue;if(O!==null){O=O.shared;var J=O.pending;J===null?M.next=M:(M.next=J.next,J.next=M),O.pending=M}}f.lanes|=i,M=f.alternate,M!==null&&(M.lanes|=i),va(f.return,i,t),z.lanes|=i;break}M=M.next}}else if(f.tag===10)x=f.type===t.type?null:f.child;else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=i,z=x.alternate,z!==null&&(z.lanes|=i),va(x,i,t),x=f.sibling}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===t){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}jt(e,t,c.children,i),t=t.child}return t;case 9:return c=t.type,l=t.pendingProps.children,wi(t,i),c=nn(c),l=l(c),t.flags|=1,jt(e,t,l,i),t.child;case 14:return l=t.type,c=fn(l,t.pendingProps),c=fn(l.type,c),Zc(e,t,l,c,i);case 15:return Jc(e,t,t.type,t.pendingProps,i);case 17:return l=t.type,c=t.pendingProps,c=t.elementType===l?c:fn(l,c),C0(e,t),t.tag=1,Nt(l)?(e=!0,p0(t)):e=!1,wi(t,i),Gc(t,l,c),Ra(t,l,c,i),Na(null,t,l,!0,e,i);case 19:return a1(e,t,i);case 22:return e1(e,t,i)}throw Error(r(156,t.tag))};function A1(e,t){return Y(e,t)}function kp(e,t,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(e,t,i,l){return new kp(e,t,i,l)}function rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zp(e){if(typeof e=="function")return rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ue)return 11;if(e===He)return 14}return 2}function _r(e,t){var i=e.alternate;return i===null?(i=sn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function H0(e,t,i,l,c,f){var x=2;if(l=e,typeof e=="function")rl(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case B:return Xr(i.children,c,f,t);case U:x=8,c|=8;break;case K:return e=sn(12,i,t,c|2),e.elementType=K,e.lanes=f,e;case ye:return e=sn(13,i,t,c),e.elementType=ye,e.lanes=f,e;case $e:return e=sn(19,i,t,c),e.elementType=$e,e.lanes=f,e;case Fe:return G0(i,c,f,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case be:x=10;break e;case ve:x=9;break e;case ue:x=11;break e;case He:x=14;break e;case Qe:x=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return t=sn(x,i,t,c),t.elementType=e,t.type=l,t.lanes=f,t}function Xr(e,t,i,l){return e=sn(7,e,l,t),e.lanes=i,e}function G0(e,t,i,l){return e=sn(22,e,l,t),e.elementType=Fe,e.lanes=i,e.stateNode={isHidden:!1},e}function il(e,t,i){return e=sn(6,e,null,t),e.lanes=i,e}function ol(e,t,i){return t=sn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sp(e,t,i,l,c){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cs(0),this.expirationTimes=Cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cs(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function sl(e,t,i,l,c,f,x,z,M){return e=new Sp(e,t,i,z,M),t===1?(t=1,f===!0&&(t|=8)):t=0,f=sn(3,null,null,t),e.current=f,f.stateNode=e,f.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(f),e}function Tp(e,t,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:l==null?null:""+l,children:e,containerInfo:t,implementation:i}}function C1(e){if(!e)return fr;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Nt(i))return sc(e,i,t)}return t}function R1(e,t,i,l,c,f,x,z,M){return e=sl(i,l,!0,e,c,f,x,z,M),e.context=C1(null),i=e.current,l=At(),c=br(i),f=Fn(l,c),f.callback=t??null,gr(i,f,c),e.current.lanes=c,Vi(e,c,l),Ft(e,l),e}function W0(e,t,i,l){var c=t.current,f=At(),x=br(c);return i=C1(i),t.context===null?t.context=i:t.pendingContext=i,t=Fn(f,x),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=gr(c,t,x),e!==null&&(gn(e,c,x,f),_0(e,c,x)),x}function U0(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function E1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function al(e,t){E1(e,t),(e=e.alternate)&&E1(e,t)}function qp(){return null}var P1=typeof reportError=="function"?reportError:function(e){console.error(e)};function ll(e){this._internalRoot=e}V0.prototype.render=ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));W0(e,t,null,null)},V0.prototype.unmount=ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kr(function(){W0(null,e,null,null)}),t[Pn]=null}};function V0(e){this._internalRoot=e}V0.prototype.unstable_scheduleHydration=function(e){if(e){var t=yu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<lr.length&&t!==0&&t<lr[i].priority;i++);lr.splice(i,0,e),i===0&&wu(e)}};function ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function D1(){}function Mp(e,t,i,l,c){if(c){if(typeof l=="function"){var f=l;l=function(){var O=U0(x);f.call(O)}}var x=R1(t,l,e,0,null,!1,!1,"",D1);return e._reactRootContainer=x,e[Pn]=x.current,ao(e.nodeType===8?e.parentNode:e),Kr(),x}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var z=l;l=function(){var O=U0(M);z.call(O)}}var M=sl(e,0,!1,null,null,!1,!1,"",D1);return e._reactRootContainer=M,e[Pn]=M.current,ao(e.nodeType===8?e.parentNode:e),Kr(function(){W0(t,M,i,l)}),M}function Q0(e,t,i,l,c){var f=i._reactRootContainer;if(f){var x=f;if(typeof c=="function"){var z=c;c=function(){var M=U0(x);z.call(M)}}W0(t,x,e,c)}else x=Mp(i,t,e,c,l);return U0(x)}gu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Ui(t.pendingLanes);i!==0&&(Rs(t,i|1),Ft(t,ut()),(Le&6)===0&&(Si=ut()+500,pr()))}break;case 13:Kr(function(){var l=In(e,1);if(l!==null){var c=At();gn(l,e,1,c)}}),al(e,1)}},Es=function(e){if(e.tag===13){var t=In(e,134217728);if(t!==null){var i=At();gn(t,e,134217728,i)}al(e,134217728)}},vu=function(e){if(e.tag===13){var t=br(e),i=In(e,t);if(i!==null){var l=At();gn(i,e,t,l)}al(e,t)}},yu=function(){return Ke},xu=function(e,t){var i=Ke;try{return Ke=e,t()}finally{Ke=i}},Dr=function(e,t,i){switch(t){case"input":if(An(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var l=i[t];if(l!==e&&l.form===e.form){var c=m0(l);if(!c)throw Error(r(90));ni(l),An(l,c)}}}break;case"textarea":Jn(e,i);break;case"select":t=i.value,t!=null&&Ve(e,!!i.multiple,t,!1)}},Oo=el,Rn=Kr;var jp={usingClientEntryPoint:!1,Events:[co,fi,m0,Br,ri,el]},zo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ap={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wo(e),e===null?null:e.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||qp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Y0=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Y0.isDisabled&&Y0.supportsFiber)try{Vo=Y0.inject(Ap),yn=Y0}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jp,Lt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ul(t))throw Error(r(200));return Tp(e,t,null,i)},Lt.createRoot=function(e,t){if(!ul(e))throw Error(r(299));var i=!1,l="",c=P1;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=sl(e,1,!1,null,null,i,!1,l,c),e[Pn]=t.current,ao(e.nodeType===8?e.parentNode:e),new ll(t)},Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=Wo(t),e=e===null?null:e.stateNode,e},Lt.flushSync=function(e){return Kr(e)},Lt.hydrate=function(e,t,i){if(!K0(t))throw Error(r(200));return Q0(null,e,t,!0,i)},Lt.hydrateRoot=function(e,t,i){if(!ul(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,c=!1,f="",x=P1;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),t=R1(t,null,e,1,i??null,c,!1,f,x),e[Pn]=t.current,ao(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,c]:t.mutableSourceEagerHydrationData.push(i,c);return new V0(t)},Lt.render=function(e,t,i){if(!K0(t))throw Error(r(200));return Q0(null,e,t,!1,i)},Lt.unmountComponentAtNode=function(e){if(!K0(e))throw Error(r(40));return e._reactRootContainer?(Kr(function(){Q0(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1},Lt.unstable_batchedUpdates=el,Lt.unstable_renderSubtreeIntoContainer=function(e,t,i,l){if(!K0(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return Q0(e,t,i,!1,l)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var G1;function Ip(){if(G1)return ml.exports;G1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),ml.exports=Bp(),ml.exports}var W1;function Fp(){if(W1)return X0;W1=1;var o=Ip();return X0.createRoot=o.createRoot,X0.hydrateRoot=o.hydrateRoot,X0}var Lp=Fp();const Op=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,Hp=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,Gp=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,Wp=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,Up=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
---
`,Vp=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
---
`,Kp=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,Qp=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
---
`,Yp=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,Xp=`---
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
`,Zp=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,Jp=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
---
`,eh=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
`,th=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,nh=`---
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
`,rh=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,ih=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
---
`,oh=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,sh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
`,ah=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,lh=`---
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
`,uh=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,ch=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,dh=`---
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
`,mh=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,fh=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
`,ph=`---
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
`,gh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,vh=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
---
`,yh=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
---
`,xh=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,bh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,wh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,_h=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,$h=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,kh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
---
`,zh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,Sh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
---
`,Th=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,qh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,Mh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
---
`,jh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
---
`,Ah=`---
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
`,Ch=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,Rh=`---
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
`,Ph=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
---
`,Dh=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
---
`,Nh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Bh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Ih=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
---
`,Fh=`---
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
`,Hh=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,Gh=`---
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
`,Wh=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,Uh=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,Vh=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,Kh=`---
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
`,Qh=`---
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
tests:
  abs_value: 1.0
  linear_eq: 0.5
---
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,Xh=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,Zh=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,Jh=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,e4=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,t4=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,n4=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,r4=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,i4=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,o4=`---
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
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,s4=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,a4=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,l4=`---
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
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,u4=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,c4=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,d4=`---
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
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,m4=`---
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
Rozwiń $(a + b)^3$:`,f4=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,p4=`---
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
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,h4=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,g4=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,v4=`---
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
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,y4=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,x4=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,b4=`---
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
Moduł liczby zespolonej z = 3 + 4i wynosi:`,w4=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,_4=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,$4=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,k4=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,z4=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,S4=`---
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
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,T4=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,q4=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,M4=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,j4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,A4=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,C4=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,R4=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,P4=`---
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
Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:`,D4=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,N4=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,B4=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,I4=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,F4=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,L4=`---
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
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,O4=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,H4=`---
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
Wykres rozkładu normalnego ma kształt:`,G4=`---
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
Rozkład na czynniki: x² − 5x + 6 =`,W4=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,U4=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,V4=`---
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
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,K4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,Q4=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,Y4=`---
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
Która z poniższych relacji NIE jest funkcją?`,X4=`---
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
Funkcja to takie przyporządkowanie, że:`,Z4=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,J4=`---
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
Funkcja f(x) = 2ˣ jest:`,e2=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,t2=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,n2=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,r2=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,i2=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,o2=`---
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
Dziedzina funkcji f(x) = log(x − 2) to:`,s2=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,a2=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,l2=`---
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
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,u2=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,c2=`---
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
Funkcja $f(x) = x^3$ jest:`,d2=`---
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
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,m2=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,f2=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,p2=`---
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
Okres funkcji f(x) = sin(2x) wynosi:`,h2=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,g2=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,v2=`---
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
Uproszczona postać ułamka 45/60 to:`,y2=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,x2=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,b2=`---
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
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,w2=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,_2=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,$2=`---
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
Ile wynosi NWD(84, 56)?`,k2=`---
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
Oblicz: $(-3) \\cdot 4 =$`,z2=`---
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
Oblicz: $3 - 8 =$`,S2=`---
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
$\\displaystyle \\int 2x \\, dx =$`,T2=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,q2=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,M2=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,j2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,A2=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,C2=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,R2=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,P2=`---
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
Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:`,D2=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,N2=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,B2=`---
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
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,I2=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,F2=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,L2=`---
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
Rozwiązaniem równania log₂(x) = 3 jest:`,O2=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,H2=`---
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
Rozwiąż równanie: $2^x = 16$`,G2=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,W2=`---
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
Oblicz: $\\log_2 8 =$`,U2=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,V2=`---
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
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,K2=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,Q2=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,Y2=`---
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
Prostokąt o obwodzie 20 ma największe pole gdy:`,X2=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,Z2=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,J2=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,e3=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,t3=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,n3=`---
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
Liczba permutacji zbioru {A, B, C, D} wynosi:`,r3=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,i3=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,o3=`---
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
Kąt wpisany w okrąg oparty na średnicy mierzy:`,s3=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,a3=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,l3=`---
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
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,u3=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,c3=`---
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
Wielomian stopnia $n$ ma:`,d3=`---
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
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,m3=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,f3=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,p3=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,h3=`---
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
Oblicz: $2^3 =$`,g3=`---
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
Uprość: $a^2 \\cdot a^3 =$`,v3=`---
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
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,y3=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,x3=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,b3=`---
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
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,w3=`---
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
Dowód nie wprost polega na tym, że:`,_3=`---
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
Dowód przez indukcję matematyczną składa się z:`,$3=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,k3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,z3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,S3=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,T3=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,q3=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,M3=`---
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
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,j3=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,A3=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,C3=`---
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
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,R3=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,P3=`---
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
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,D3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,N3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,B3=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,I3=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,F3=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,L3=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,O3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,H3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,G3=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,W3=`---
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
Twierdzenie cosinusów brzmi:`,U3=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,V3=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,K3=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,Q3=`---
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
Wzór na objętość kuli o promieniu $r$:`,Y3=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,X3=`---
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
Dominanta (moda) zbioru danych to:`,Z3=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,J3=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,e5=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,t5=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,n5=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,r5=`---
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
Wartość $\\sin 30°$ wynosi:`,i5=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,o5=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,s5=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,a5=`---
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
Rozwiąż równanie: $\\tan x = 1$`,l5=`---
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
sin(2α) jest równe:`,u5=`---
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
Wzór na $\\sin 2\\alpha$:`,c5=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,d5=`---
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
Wartość sin(120°) jest równa:`,m5=`---
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
Wartość $\\cos 30°$ wynosi:`,f5=`---
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
Wartość $\\sin 45°$ wynosi:`,p5=`---
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
Długość wektora v = [3, 4] wynosi:`,h5=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,g5=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,v5=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,y5=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,x5=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`;function Nd(o){const n=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!n)return{meta:{},body:o.trim()};const r=n[1],s=n[2].trim(),a={},u=r.split(/\r?\n/);let m=0;for(;m<u.length;){const h=u[m];if(h.startsWith("  ")){m++;continue}const g=h.match(/^(\w+):\s*(.*)/);if(!g){m++;continue}const y=g[1];let w=g[2].trim();if(w===""||w===null){const $=u[m+1]??"";if($.startsWith("  - ")){const k=[];for(m++;m<u.length&&u[m].startsWith("  - ");){let q=u[m].replace(/^  - /,"").trim();q=q.replace(/^["']|["']$/g,""),k.push(q),m++}a[y]=k.length>0?k:null}else if($.match(/^  \w+:/)){const k={};for(m++;m<u.length&&u[m].match(/^  \w+:/);){const q=u[m].match(/^  (\w+):\s*(.*)/);if(q){const R=q[1];let E=q[2].trim().replace(/^["']|["']$/g,"");k[R]=!isNaN(E)&&E!==""?Number(E):E}m++}a[y]=k}else a[y]=null,m++}else w=w.replace(/^["']|["']$/g,""),!isNaN(w)&&w!==""?a[y]=Number(w):w==="true"?a[y]=!0:w==="false"?a[y]=!1:a[y]=w,m++}return{meta:a,body:s}}function Bd(o,n){return Object.entries(o).map(([r,s])=>{var m;const a=(m=r.match(n))==null?void 0:m[1],{meta:u}=Nd(s);return{id:a,label:u.label??a,labelPl:u.labelPl??u.label??a,scope:u.scope??"default",section:u.section??"default",level:u.level??1,x:u.x??0,y:u.y??0,resources:Array.isArray(u.resources)?u.resources.map(h=>{if(typeof h!="string")return null;const[g,y,w,$]=h.split("|").map(q=>q.trim()),k=y&&!y.includes("/")&&!y.startsWith("http")?`resources/${a}/${y}`:y??"";return{type:g??"article",url:k,titleEn:w??"",titlePl:$??w??""}}).filter(Boolean):[]}})}function Id(o,n){var s;const r={};for(const[a,u]of Object.entries(o)){const m=(s=a.match(n))==null?void 0:s[1];if(!m)continue;const{meta:h,body:g}=Nd(u);r[m]||(r[m]=[]),r[m].push({q:g,options:h.options??[],correct:h.correct??0,hint:h.hint??"",tests:h.tests&&typeof h.tests=="object"&&Object.keys(h.tests).length>0?h.tests:{[m]:1}})}return r}function b5(o,n,r=[]){const s=o[n];if(!s||s.length===0||r.includes(-1))return null;const a=s.map((m,h)=>({q:m,i:h})).filter(({i:m})=>!r.includes(m));if(a.length===0)return null;const u=a[Math.floor(Math.random()*a.length)];return{...u.q,index:u.i}}const w5=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],_5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},$5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},k5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Fd={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},z5=Object.assign({"./nodes/abs_value/node.md":Op,"./nodes/analytic_geom/node.md":Hp,"./nodes/area_perimeter/node.md":Gp,"./nodes/arith_geom/node.md":Wp,"./nodes/bernoulli/node.md":Up,"./nodes/binom_theorem/node.md":Vp,"./nodes/circle_eq/node.md":Kp,"./nodes/combinations/node.md":Qp,"./nodes/complex/node.md":Yp,"./nodes/cond_prob/node.md":Xp,"./nodes/conic_sections/node.md":Zp,"./nodes/counting/node.md":Jp,"./nodes/data_basics/node.md":eh,"./nodes/deriv_apps/node.md":th,"./nodes/derivative/node.md":nh,"./nodes/distributions/node.md":rh,"./nodes/factoring/node.md":ih,"./nodes/fn_compositions/node.md":oh,"./nodes/fn_concept/node.md":sh,"./nodes/fn_exp/node.md":ah,"./nodes/fn_linear/node.md":lh,"./nodes/fn_log/node.md":uh,"./nodes/fn_poly/node.md":ch,"./nodes/fn_quadratic/node.md":dh,"./nodes/fn_trig/node.md":mh,"./nodes/fractions/node.md":fh,"./nodes/geo_series/node.md":ph,"./nodes/integers/node.md":hh,"./nodes/integral/node.md":gh,"./nodes/limits/node.md":vh,"./nodes/linear_eq/node.md":yh,"./nodes/linear_ineq/node.md":xh,"./nodes/linear_sys/node.md":bh,"./nodes/log_eq/node.md":wh,"./nodes/log_exp/node.md":_h,"./nodes/logic_basics/node.md":$h,"./nodes/optimization_lp/node.md":kh,"./nodes/param_eq/node.md":zh,"./nodes/permutations/node.md":Sh,"./nodes/planimetria_lp/node.md":Th,"./nodes/poly_roots/node.md":qh,"./nodes/polynomials/node.md":Mh,"./nodes/powers/node.md":jh,"./nodes/probability/node.md":Ah,"./nodes/proof/node.md":Ch,"./nodes/pythagoras/node.md":Rh,"./nodes/quadratic_eq/node.md":Eh,"./nodes/quadratic_ineq/node.md":Ph,"./nodes/rational_expr/node.md":Dh,"./nodes/seq_limits/node.md":Nh,"./nodes/sequences/node.md":Bh,"./nodes/sets/node.md":Ih,"./nodes/sin_cos_law/node.md":Fh,"./nodes/solid_geom/node.md":Lh,"./nodes/stat_lp/node.md":Oh,"./nodes/thales/node.md":Hh,"./nodes/trig_basic/node.md":Gh,"./nodes/trig_eq/node.md":Wh,"./nodes/trig_formulas/node.md":Uh,"./nodes/trig_lp/node.md":Vh,"./nodes/vectors/node.md":Kh,"./nodes/vieta/node.md":Qh}),S5=Bd(z5,/\.\/nodes\/([^/]+)\/node\.md$/),T5=Object.assign({"./nodes/abs_value/questions/01.md":Yh,"./nodes/abs_value/questions/02.md":Xh,"./nodes/abs_value/questions/03.md":Zh,"./nodes/analytic_geom/questions/01.md":Jh,"./nodes/analytic_geom/questions/02.md":e4,"./nodes/analytic_geom/questions/03.md":t4,"./nodes/area_perimeter/questions/01.md":n4,"./nodes/area_perimeter/questions/02.md":r4,"./nodes/area_perimeter/questions/03.md":i4,"./nodes/arith_geom/questions/01.md":o4,"./nodes/arith_geom/questions/02.md":s4,"./nodes/arith_geom/questions/03.md":a4,"./nodes/bernoulli/questions/01.md":l4,"./nodes/bernoulli/questions/02.md":u4,"./nodes/bernoulli/questions/03.md":c4,"./nodes/binom_theorem/questions/01.md":d4,"./nodes/binom_theorem/questions/02.md":m4,"./nodes/binom_theorem/questions/03.md":f4,"./nodes/circle_eq/questions/01.md":p4,"./nodes/circle_eq/questions/02.md":h4,"./nodes/circle_eq/questions/03.md":g4,"./nodes/combinations/questions/01.md":v4,"./nodes/combinations/questions/02.md":y4,"./nodes/combinations/questions/03.md":x4,"./nodes/complex/questions/01.md":b4,"./nodes/complex/questions/02.md":w4,"./nodes/complex/questions/03.md":_4,"./nodes/cond_prob/questions/01.md":$4,"./nodes/cond_prob/questions/02.md":k4,"./nodes/cond_prob/questions/03.md":z4,"./nodes/conic_sections/questions/01.md":S4,"./nodes/conic_sections/questions/02.md":T4,"./nodes/conic_sections/questions/03.md":q4,"./nodes/counting/questions/01.md":M4,"./nodes/counting/questions/02.md":j4,"./nodes/counting/questions/03.md":A4,"./nodes/data_basics/questions/01.md":C4,"./nodes/data_basics/questions/02.md":R4,"./nodes/data_basics/questions/03.md":E4,"./nodes/deriv_apps/questions/01.md":P4,"./nodes/deriv_apps/questions/02.md":D4,"./nodes/deriv_apps/questions/03.md":N4,"./nodes/derivative/questions/01.md":B4,"./nodes/derivative/questions/02.md":I4,"./nodes/derivative/questions/03.md":F4,"./nodes/distributions/questions/01.md":L4,"./nodes/distributions/questions/02.md":O4,"./nodes/distributions/questions/03.md":H4,"./nodes/factoring/questions/01.md":G4,"./nodes/factoring/questions/02.md":W4,"./nodes/factoring/questions/03.md":U4,"./nodes/fn_compositions/questions/01.md":V4,"./nodes/fn_compositions/questions/02.md":K4,"./nodes/fn_compositions/questions/03.md":Q4,"./nodes/fn_concept/questions/01.md":Y4,"./nodes/fn_concept/questions/02.md":X4,"./nodes/fn_concept/questions/03.md":Z4,"./nodes/fn_exp/questions/01.md":J4,"./nodes/fn_exp/questions/02.md":e2,"./nodes/fn_exp/questions/03.md":t2,"./nodes/fn_linear/questions/01.md":n2,"./nodes/fn_linear/questions/02.md":r2,"./nodes/fn_linear/questions/03.md":i2,"./nodes/fn_log/questions/01.md":o2,"./nodes/fn_log/questions/02.md":s2,"./nodes/fn_log/questions/03.md":a2,"./nodes/fn_poly/questions/01.md":l2,"./nodes/fn_poly/questions/02.md":u2,"./nodes/fn_poly/questions/03.md":c2,"./nodes/fn_quadratic/questions/01.md":d2,"./nodes/fn_quadratic/questions/02.md":m2,"./nodes/fn_quadratic/questions/03.md":f2,"./nodes/fn_trig/questions/01.md":p2,"./nodes/fn_trig/questions/02.md":h2,"./nodes/fn_trig/questions/03.md":g2,"./nodes/fractions/questions/01.md":v2,"./nodes/fractions/questions/02.md":y2,"./nodes/fractions/questions/03.md":x2,"./nodes/geo_series/questions/01.md":b2,"./nodes/geo_series/questions/02.md":w2,"./nodes/geo_series/questions/03.md":_2,"./nodes/integers/questions/01.md":$2,"./nodes/integers/questions/02.md":k2,"./nodes/integers/questions/03.md":z2,"./nodes/integral/questions/01.md":S2,"./nodes/integral/questions/02.md":T2,"./nodes/integral/questions/03.md":q2,"./nodes/limits/questions/01.md":M2,"./nodes/limits/questions/02.md":j2,"./nodes/limits/questions/03.md":A2,"./nodes/linear_eq/questions/01.md":C2,"./nodes/linear_eq/questions/02.md":R2,"./nodes/linear_eq/questions/03.md":E2,"./nodes/linear_ineq/questions/01.md":P2,"./nodes/linear_ineq/questions/02.md":D2,"./nodes/linear_ineq/questions/03.md":N2,"./nodes/linear_sys/questions/01.md":B2,"./nodes/linear_sys/questions/02.md":I2,"./nodes/linear_sys/questions/03.md":F2,"./nodes/log_eq/questions/01.md":L2,"./nodes/log_eq/questions/02.md":O2,"./nodes/log_eq/questions/03.md":H2,"./nodes/log_exp/questions/01.md":G2,"./nodes/log_exp/questions/02.md":W2,"./nodes/log_exp/questions/03.md":U2,"./nodes/logic_basics/questions/01.md":V2,"./nodes/logic_basics/questions/02.md":K2,"./nodes/logic_basics/questions/03.md":Q2,"./nodes/optimization_lp/questions/01.md":Y2,"./nodes/optimization_lp/questions/02.md":X2,"./nodes/optimization_lp/questions/03.md":Z2,"./nodes/param_eq/questions/01.md":J2,"./nodes/param_eq/questions/02.md":e3,"./nodes/param_eq/questions/03.md":t3,"./nodes/permutations/questions/01.md":n3,"./nodes/permutations/questions/02.md":r3,"./nodes/permutations/questions/03.md":i3,"./nodes/planimetria_lp/questions/01.md":o3,"./nodes/planimetria_lp/questions/02.md":s3,"./nodes/planimetria_lp/questions/03.md":a3,"./nodes/poly_roots/questions/01.md":l3,"./nodes/poly_roots/questions/02.md":u3,"./nodes/poly_roots/questions/03.md":c3,"./nodes/polynomials/questions/01.md":d3,"./nodes/polynomials/questions/02.md":m3,"./nodes/polynomials/questions/03.md":f3,"./nodes/powers/questions/01.md":p3,"./nodes/powers/questions/02.md":h3,"./nodes/powers/questions/03.md":g3,"./nodes/probability/questions/01.md":v3,"./nodes/probability/questions/02.md":y3,"./nodes/probability/questions/03.md":x3,"./nodes/proof/questions/01.md":b3,"./nodes/proof/questions/02.md":w3,"./nodes/proof/questions/03.md":_3,"./nodes/pythagoras/questions/01.md":$3,"./nodes/pythagoras/questions/02.md":k3,"./nodes/pythagoras/questions/03.md":z3,"./nodes/quadratic_eq/questions/01.md":S3,"./nodes/quadratic_eq/questions/02.md":T3,"./nodes/quadratic_eq/questions/03.md":q3,"./nodes/quadratic_ineq/questions/01.md":M3,"./nodes/quadratic_ineq/questions/02.md":j3,"./nodes/quadratic_ineq/questions/03.md":A3,"./nodes/rational_expr/questions/01.md":C3,"./nodes/rational_expr/questions/02.md":R3,"./nodes/rational_expr/questions/03.md":E3,"./nodes/seq_limits/questions/01.md":P3,"./nodes/seq_limits/questions/02.md":D3,"./nodes/seq_limits/questions/03.md":N3,"./nodes/sequences/questions/01.md":B3,"./nodes/sequences/questions/02.md":I3,"./nodes/sequences/questions/03.md":F3,"./nodes/sets/questions/01.md":L3,"./nodes/sets/questions/02.md":O3,"./nodes/sets/questions/03.md":H3,"./nodes/sin_cos_law/questions/01.md":G3,"./nodes/sin_cos_law/questions/02.md":W3,"./nodes/sin_cos_law/questions/03.md":U3,"./nodes/solid_geom/questions/01.md":V3,"./nodes/solid_geom/questions/02.md":K3,"./nodes/solid_geom/questions/03.md":Q3,"./nodes/stat_lp/questions/01.md":Y3,"./nodes/stat_lp/questions/02.md":X3,"./nodes/stat_lp/questions/03.md":Z3,"./nodes/thales/questions/01.md":J3,"./nodes/thales/questions/02.md":e5,"./nodes/thales/questions/03.md":t5,"./nodes/trig_basic/questions/01.md":n5,"./nodes/trig_basic/questions/02.md":r5,"./nodes/trig_basic/questions/03.md":i5,"./nodes/trig_eq/questions/01.md":o5,"./nodes/trig_eq/questions/02.md":s5,"./nodes/trig_eq/questions/03.md":a5,"./nodes/trig_formulas/questions/01.md":l5,"./nodes/trig_formulas/questions/02.md":u5,"./nodes/trig_formulas/questions/03.md":c5,"./nodes/trig_lp/questions/01.md":d5,"./nodes/trig_lp/questions/02.md":m5,"./nodes/trig_lp/questions/03.md":f5,"./nodes/vectors/questions/01.md":p5,"./nodes/vectors/questions/02.md":h5,"./nodes/vectors/questions/03.md":g5,"./nodes/vieta/questions/01.md":v5,"./nodes/vieta/questions/02.md":y5,"./nodes/vieta/questions/03.md":x5}),q5=Id(T5,/\.\/nodes\/([^/]+)\/questions\//),M5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Fd,QUESTION_BANK:q5,RAW_EDGES:w5,RAW_NODES:S5,SCOPE_COLORS:$5,SCOPE_LABELS:k5,SECTIONS:_5},Symbol.toStringTag,{value:"Module"})),j5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,A5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,C5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,R5=`---
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
`,P5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,D5=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,N5=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,B5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,I5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,F5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,L5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,O5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,H5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,G5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,W5=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,U5=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,V5=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,K5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,Q5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,Y5=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,X5=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Z5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,J5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,e6=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,t6=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,n6=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,r6=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,i6=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,o6=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,s6=`---
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
`,a6=`---
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
`,l6=`---
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
`,u6=`---
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
`,c6=`---
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
`,d6=`---
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
`,m6=`---
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
`,f6=`---
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
`,p6=`---
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
`,h6=`---
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

`,g6=`---
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

`,v6=`---
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

`,y6=`---
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
`,x6=`---
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
`,b6=`---
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
`,w6=`---
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
`,_6=`---
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
`,$6=`---
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
`,k6=`---
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

`,z6=`---
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

`,S6=`---
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

`,T6=`---
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

`,q6=`---
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

`,M6=`---
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

`,j6=`---
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
`,A6=`---
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
`,C6=`---
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
`,R6=`---
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
`,P6=`---
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
`,D6=`---
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
`,N6=`---
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
`,B6=`---
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
`,I6=`---
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
`,F6=`---
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
`,L6=`---
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
`,O6=`---
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
`,H6=`---
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
`,G6=`---
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
`,W6=`---
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
`,U6=`---
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
`,V6=`---
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
`,K6=`---
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
`,Q6=`---
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
`,Y6=`---
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
`,X6=`---
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

`,Z6=`---
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

`,J6=`---
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

`,e7=`---
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

`,t7=`---
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

`,n7=`---
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

`,r7=`---
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

`,i7=`---
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

`,o7=`---
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

`,s7=`---
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
`,a7=`---
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
`,l7=`---
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
`,u7=`---
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
`,c7=`---
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
`,d7=`---
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
`,m7=`---
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

`,f7=`---
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

`,p7=`---
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

`,h7=`---
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

`,g7=`---
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

`,v7=`---
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

`,y7=`---
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
`,x7=`---
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
`,b7=`---
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
`,w7=`---
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
`,_7=`---
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
`,$7=`---
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
`,k7=`---
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
`,z7=`---
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
`,S7=`---
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
`,T7=`---
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
`,q7=`---
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

`,M7=`---
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

`,j7=`---
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
`,A7=`---
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
`,C7=`---
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
`,R7=`---
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

`,P7=`---
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

`,D7=`---
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
`,N7=`---
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
`,B7=`---
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
`,I7=`---
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

`,F7=`---
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

`,L7=`---
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

`,O7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],H7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},G7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},W7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},Ld={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},U7=Object.assign({"./nodes/binary_ops/node.md":j5,"./nodes/cosets/node.md":A5,"./nodes/cyclic_groups/node.md":C5,"./nodes/direct_sums/node.md":R5,"./nodes/field_extensions/node.md":E5,"./nodes/fields_intro/node.md":P5,"./nodes/finitely_generated/node.md":D5,"./nodes/free_modules/node.md":N5,"./nodes/group_actions/node.md":B5,"./nodes/group_homomorphisms/node.md":I5,"./nodes/groups_intro/node.md":F5,"./nodes/ideals/node.md":L5,"./nodes/induction/node.md":O5,"./nodes/integral_domains/node.md":H5,"./nodes/iso_theorem/node.md":G5,"./nodes/jordan_normal_form/node.md":W5,"./nodes/module_homs/node.md":U5,"./nodes/modules_intro/node.md":V5,"./nodes/normal_subgroups/node.md":K5,"./nodes/poly_rings/node.md":Q5,"./nodes/primary_decomp/node.md":Y5,"./nodes/rational_canonical/node.md":X5,"./nodes/relations/node.md":Z5,"./nodes/ring_homomorphisms/node.md":J5,"./nodes/rings_intro/node.md":e6,"./nodes/sets_functions/node.md":t6,"./nodes/subgroups/node.md":n6,"./nodes/submodules/node.md":r6,"./nodes/sylow/node.md":i6,"./nodes/torsion_modules/node.md":o6}),V7=Bd(U7,/\.\/nodes\/([^/]+)\/node\.md$/),K7=Object.assign({"./nodes/binary_ops/questions/01.md":s6,"./nodes/binary_ops/questions/02.md":a6,"./nodes/binary_ops/questions/03.md":l6,"./nodes/cosets/questions/01.md":u6,"./nodes/cosets/questions/02.md":c6,"./nodes/cosets/questions/03.md":d6,"./nodes/cyclic_groups/questions/01.md":m6,"./nodes/cyclic_groups/questions/02.md":f6,"./nodes/cyclic_groups/questions/03.md":p6,"./nodes/direct_sums/questions/01.md":h6,"./nodes/direct_sums/questions/02.md":g6,"./nodes/direct_sums/questions/03.md":v6,"./nodes/field_extensions/questions/01.md":y6,"./nodes/field_extensions/questions/02.md":x6,"./nodes/field_extensions/questions/03.md":b6,"./nodes/fields_intro/questions/01.md":w6,"./nodes/fields_intro/questions/02.md":_6,"./nodes/fields_intro/questions/03.md":$6,"./nodes/finitely_generated/questions/01.md":k6,"./nodes/finitely_generated/questions/02.md":z6,"./nodes/finitely_generated/questions/03.md":S6,"./nodes/free_modules/questions/01.md":T6,"./nodes/free_modules/questions/02.md":q6,"./nodes/free_modules/questions/03.md":M6,"./nodes/group_actions/questions/01.md":j6,"./nodes/group_actions/questions/02.md":A6,"./nodes/group_actions/questions/03.md":C6,"./nodes/group_homomorphisms/questions/01.md":R6,"./nodes/group_homomorphisms/questions/02.md":E6,"./nodes/group_homomorphisms/questions/03.md":P6,"./nodes/groups_intro/questions/01.md":D6,"./nodes/groups_intro/questions/02.md":N6,"./nodes/groups_intro/questions/03.md":B6,"./nodes/ideals/questions/01.md":I6,"./nodes/ideals/questions/02.md":F6,"./nodes/ideals/questions/03.md":L6,"./nodes/induction/questions/01.md":O6,"./nodes/induction/questions/02.md":H6,"./nodes/induction/questions/03.md":G6,"./nodes/integral_domains/questions/01.md":W6,"./nodes/integral_domains/questions/02.md":U6,"./nodes/integral_domains/questions/03.md":V6,"./nodes/iso_theorem/questions/01.md":K6,"./nodes/iso_theorem/questions/02.md":Q6,"./nodes/iso_theorem/questions/03.md":Y6,"./nodes/jordan_normal_form/questions/01.md":X6,"./nodes/jordan_normal_form/questions/02.md":Z6,"./nodes/jordan_normal_form/questions/03.md":J6,"./nodes/module_homs/questions/01.md":e7,"./nodes/module_homs/questions/02.md":t7,"./nodes/module_homs/questions/03.md":n7,"./nodes/modules_intro/questions/01.md":r7,"./nodes/modules_intro/questions/02.md":i7,"./nodes/modules_intro/questions/03.md":o7,"./nodes/normal_subgroups/questions/01.md":s7,"./nodes/normal_subgroups/questions/02.md":a7,"./nodes/normal_subgroups/questions/03.md":l7,"./nodes/poly_rings/questions/01.md":u7,"./nodes/poly_rings/questions/02.md":c7,"./nodes/poly_rings/questions/03.md":d7,"./nodes/primary_decomp/questions/01.md":m7,"./nodes/primary_decomp/questions/02.md":f7,"./nodes/primary_decomp/questions/03.md":p7,"./nodes/rational_canonical/questions/01.md":h7,"./nodes/rational_canonical/questions/02.md":g7,"./nodes/rational_canonical/questions/03.md":v7,"./nodes/relations/questions/01.md":y7,"./nodes/relations/questions/02.md":x7,"./nodes/relations/questions/03.md":b7,"./nodes/ring_homomorphisms/questions/01.md":w7,"./nodes/ring_homomorphisms/questions/02.md":_7,"./nodes/ring_homomorphisms/questions/03.md":$7,"./nodes/rings_intro/questions/01.md":k7,"./nodes/rings_intro/questions/02.md":z7,"./nodes/rings_intro/questions/03.md":S7,"./nodes/sets_functions/questions/01.md":T7,"./nodes/sets_functions/questions/02.md":q7,"./nodes/sets_functions/questions/03.md":M7,"./nodes/subgroups/questions/01.md":j7,"./nodes/subgroups/questions/02.md":A7,"./nodes/subgroups/questions/03.md":C7,"./nodes/submodules/questions/01.md":R7,"./nodes/submodules/questions/02.md":E7,"./nodes/submodules/questions/03.md":P7,"./nodes/sylow/questions/01.md":D7,"./nodes/sylow/questions/02.md":N7,"./nodes/sylow/questions/03.md":B7,"./nodes/torsion_modules/questions/01.md":I7,"./nodes/torsion_modules/questions/02.md":F7,"./nodes/torsion_modules/questions/03.md":L7}),Q7=Id(K7,/\.\/nodes\/([^/]+)\/questions\//),Y7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Ld,QUESTION_BANK:Q7,RAW_EDGES:O7,RAW_NODES:V7,SCOPE_COLORS:G7,SCOPE_LABELS:W7,SECTIONS:H7},Symbol.toStringTag,{value:"Module"})),X7={math_pl:M5,abstract_algebra:Y7},Z7=[Fd,Ld],J7="math_pl",eg={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. System zaproponuje najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). System przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Skuteczność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Skuteczność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do zbadania)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niezklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź co umiesz — algorytm zaproponuje najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — system przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."}};function te(o,n="pl"){const r=eg[o];return r?r[n]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function tg(o,n){const r={},s={};return o.forEach(a=>{r[a.id]=[],s[a.id]=[]}),n.forEach(([a,u])=>{var m,h;(m=r[u])==null||m.push(a),(h=s[a])==null||h.push(u)}),{prereqs:r,dependents:s}}function Gl(o,n){const r=Object.fromEntries(o.map(m=>[m.id,0])),s=Object.fromEntries(o.map(m=>[m.id,[]]));for(const[m,h]of n)r[h]!==void 0&&r[h]++,s[m]!==void 0&&s[m].push(h);const a=Object.fromEntries(o.map(m=>[m.id,0])),u=o.filter(m=>r[m.id]===0).map(m=>m.id);for(;u.length;){const m=u.shift();for(const h of s[m])a[h]=Math.max(a[h],a[m]+1),--r[h]===0&&u.push(h)}return a}const ng={id:"spectral",label:"Spectral"};function rg(o,n,r,s,a=80){const u=o.length,m=Object.fromEntries(o.map((B,U)=>[B.id,U])),h=Array.from({length:u},()=>new Float64Array(u));n.forEach(([B,U])=>{const K=m[B],be=m[U];K==null||be==null||(h[K][be]=1,h[be][K]=1)});const g=h.map(B=>B.reduce((U,K)=>U+K,0)),y=B=>B.map((U,K)=>{let be=0;for(let ve=0;ve<u;ve++)be+=h[K][ve]*B[ve];return g[K]*B[K]-be}),w=(B,U)=>B.reduce((K,be,ve)=>K+be*U[ve],0),$=B=>{const U=Math.sqrt(w(B,B))||1;return B.map(K=>K/U)},k=(B,U)=>{let K=[...B];return U.forEach(be=>{const ve=w(K,be);K=K.map((ue,ye)=>ue-ve*be[ye])}),$(K)},q=(B,U=400)=>{let K=$(Array.from({length:u},()=>Math.random()-.5));K=k(K,B);for(let be=0;be<U;be++){const ve=Math.max(...g)+1;K=k(K.map((ue,ye)=>ve*ue-y(K)[ye]),B)}return K},R=$(new Array(u).fill(1)),E=q([R]),L=q([R,E]),P=Math.min(...E),H=Math.max(...E),W=Math.min(...L),N=Math.max(...L),F=H-P<1e-6?1:(r-2*a)/(H-P),V=N-W<1e-6?1:(s-2*a)/(N-W);return o.map((B,U)=>({id:B.id,x:a+(E[U]-P)*F,y:a+(L[U]-W)*V,vx:0,vy:0}))}const ig=Object.freeze(Object.defineProperty({__proto__:null,apply:rg,meta:ng},Symbol.toStringTag,{value:"Module"})),og={id:"topoRank",label:"Topo Rank"},U1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function sg(o,n,r,s,a=80){const u=Gl(o,n),m=Math.max(...o.map(w=>u[w.id]??0),0),h={};for(const w of o){const $=u[w.id]??0;(h[$]??(h[$]=[])).push(w)}for(const w of Object.values(h))w.sort(($,k)=>{const q=U1.indexOf($.scope),R=U1.indexOf(k.scope);return(q===-1?999:q)-(R===-1?999:R)});const g=r-2*a,y=s-2*a;return o.map(w=>{const $=u[w.id]??0,k=h[$],q=k.indexOf(w);return{id:w.id,x:a+(q+.5)/k.length*g,y:a+$/Math.max(m,1)*y,vx:0,vy:0}})}const ag=Object.freeze(Object.defineProperty({__proto__:null,apply:sg,meta:og},Symbol.toStringTag,{value:"Module"})),lg={id:"nPartite",label:"N-Partite Grid"};function ug(o,n,r,s,a=80){const u=Gl(o,n),m=Math.max(...o.map(q=>u[q.id]??0),0),h={};for(const q of o){const R=u[q.id]??0;(h[R]??(h[R]=[])).push(q)}const g={};for(const q of o)g[q.id]=[];for(const[q,R]of n)g[R]&&g[R].push(q);const y=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],w={},$=r-2*a,k=s-2*a;for(let q=0;q<=m;q++){const R=h[q]??[];q===0?R.sort((L,P)=>{const H=y.indexOf(L.scope),W=y.indexOf(P.scope);return(H===-1?999:H)-(W===-1?999:W)}):R.sort((L,P)=>{const H=W=>{const N=g[W.id]??[];return N.length===0?r/2:N.reduce((F,V)=>{var B;return F+(((B=w[V])==null?void 0:B.x)??r/2)},0)/N.length};return H(L)-H(P)});const E=a+q/Math.max(m,1)*k;R.forEach((L,P)=>{const H=R.length===1?r/2:a+P/(R.length-1)*$;w[L.id]={x:H,y:E}})}return o.map(q=>{var R,E;return{id:q.id,x:((R=w[q.id])==null?void 0:R.x)??r/2,y:((E=w[q.id])==null?void 0:E.y)??s/2,vx:0,vy:0}})}const Od=Object.freeze(Object.defineProperty({__proto__:null,apply:ug,meta:lg},Symbol.toStringTag,{value:"Module"})),Hd=[Od,ag,ig],Gd="nPartite";function cg(o){return Hd.find(n=>n.meta.id===o)??Od}const us=1400,Wl=1e3,Ao=80,dg=.4,V1=6,mg=.35,K1=.012;function fg(o,n){const r=Gl(o,n),s=Math.max(...o.map(u=>r[u.id]??0),0),a=Object.fromEntries(o.map(u=>[u.id,Ao+(r[u.id]??0)/Math.max(s,1)*(Wl-2*Ao)]));return{ranks:r,rankY:a}}function pg(o,n){const r=Object.fromEntries(o.map((s,a)=>[s.id,a]));return n.map(([s,a])=>[r[s],r[a]]).filter(([s,a])=>s!=null&&a!=null)}function hg(o){return Math.sqrt(us*Wl/Math.max(o.length,1))*.9}function gg(o,n,r,s){return cg(o).apply(n,r,us,Wl,Ao).map(m=>({id:m.id,x:m.x+(Math.random()-.5)*20,y:s[m.id]??m.y,vx:0,vy:0}))}function vg(o,n,r,s,{ranks:a,rankY:u,simEdges:m,idealK:h}){const g=o.length,y=new Float64Array(g);for(let w=0;w<g;w++)for(let $=w+1;$<g;$++){if(a[o[w].id]!==a[o[$].id])continue;const k=o[w].x-o[$].x,q=Math.abs(k)||.1,R=h*h/(q*q),E=k<0?-1:1;y[w]+=E*R,y[$]-=E*R}for(const[w,$]of m){const k=o[$].x-o[w].x;y[w]+=k*K1,y[$]-=k*K1}for(let w=0;w<g;w++)y[w]+=(us/2-o[w].x)*.003;return o.map((w,$)=>{if(w.id===n)return{...w,x:r,y:s,vx:0,vy:0};let k=(w.vx+y[$])*dg;Math.abs(k)>V1&&(k*=V1/Math.abs(k));const q=u[w.id]??w.y,R=w.y+(q-w.y)*mg;return{...w,vx:k,vy:0,x:Math.max(Ao,Math.min(us-Ao,w.x+k)),y:R}})}function hl(o=Gd,n=300,r,s){if(!r||r.length===0)return{};const{ranks:a,rankY:u}=fg(r,s??[]),m=pg(r,s??[]),h=hg(r),g={ranks:a,rankY:u,simEdges:m,idealK:h};let y=gg(o,r,s??[],u);for(let w=0;w<n;w++)y=vg(y,null,0,0,g);return Object.fromEntries(y.map(w=>[w.id,{x:w.x,y:w.y}]))}const se={bg:"#0a0e17",surface:"#0d1520",surfaceHi:"#0d1520ee",border:"#1e2d45",borderSubtle:"#1a2235",textPrimary:"#f5f6fa",textBody:"#c8d6e5",textMuted:"#8a9dbe",textDim:"#6b7d9a",textFaint:"#3a4d63",knownHi:"#2ecc71",unknownHi:"#e74c3c",frontier:"#f39c12"},Eo="'JetBrains Mono','SF Mono','Fira Code',monospace",qi=(o,n)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${n}`:`1px solid ${se.border}`,background:o?`${n}22`:"transparent",color:o?n:se.textDim,minHeight:32}),To=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44});function yg(o){const n=typeof window<"u"&&window.innerWidth<600,[r,s]=Q.useState(n?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[a,u]=Q.useState("grab"),m=Q.useRef(!1),h=Q.useRef({x:0,y:0}),g=Q.useRef(null),y=Q.useRef(null),w=Q.useCallback(N=>{N.preventDefault();const F=N.deltaY>0?.9:1.1;s(V=>{const B=Math.max(.15,Math.min(5,V.scale*F)),U=N.clientX,K=N.clientY,be=U-(U-V.x)/V.scale*B,ve=K-(K-V.y)/V.scale*B;return{x:be,y:ve,scale:B}})},[]),$=Q.useCallback((N,F)=>({x:(N-r.x)/r.scale,y:(F-r.y)/r.scale}),[r]),k=Q.useCallback((N,F)=>{m.current=!0,u("grabbing"),h.current={x:N-r.x,y:F-r.y}},[r]),q=Q.useCallback(N=>m.current?(s(F=>({...F,x:N.clientX-h.current.x,y:N.clientY-h.current.y})),!0):!1,[]),R=Q.useCallback(()=>{m.current=!1,u("grab")},[]),E=(N,F)=>{const V=N.clientX-F.clientX,B=N.clientY-F.clientY;return Math.sqrt(V*V+B*B)},L=(N,F)=>({x:(N.clientX+F.clientX)/2,y:(N.clientY+F.clientY)/2}),P=Q.useCallback(N=>{N.touches.length===1?(m.current=!0,s(F=>(h.current={x:N.touches[0].clientX-F.x,y:N.touches[0].clientY-F.y},F)),g.current=null,y.current=null):N.touches.length===2&&(m.current=!1,g.current=E(N.touches[0],N.touches[1]),y.current=L(N.touches[0],N.touches[1]))},[]),H=Q.useCallback(N=>{if(N.preventDefault(),N.touches.length===1&&m.current)s(F=>({...F,x:N.touches[0].clientX-h.current.x,y:N.touches[0].clientY-h.current.y}));else if(N.touches.length===2&&g.current!==null){const F=E(N.touches[0],N.touches[1]),V=L(N.touches[0],N.touches[1]),B=F/g.current;s(U=>{const K=Math.max(.15,Math.min(5,U.scale*B)),be=y.current.x,ve=y.current.y,ue=be-(be-U.x)/U.scale*K,ye=ve-(ve-U.y)/U.scale*K;return{x:ue,y:ye,scale:K}}),g.current=F,y.current=V}},[]),W=Q.useCallback(()=>{m.current=!1,g.current=null,y.current=null},[]);return Q.useEffect(()=>{const N=o.current;if(N)return N.addEventListener("wheel",w,{passive:!1}),N.addEventListener("touchstart",P,{passive:!1}),N.addEventListener("touchmove",H,{passive:!1}),N.addEventListener("touchend",W,{passive:!1}),()=>{N.removeEventListener("wheel",w),N.removeEventListener("touchstart",P),N.removeEventListener("touchmove",H),N.removeEventListener("touchend",W)}},[o,w,P,H,W]),{viewTransform:r,setViewTransform:s,toCanvas:$,isPanning:m,panStart:h,startPan:k,cursorStyle:a,setCursorStyle:u,handleMouseMove:q,handleMouseUp:R,handleWheel:w}}function xg(o,n,r,s){const a=Q.useRef(null),u=Q.useRef({x:0,y:0}),m=Q.useCallback((y,w,$)=>{const k=o(w,$),q=n.find(R=>R.id===y);q&&(a.current=y,u.current={x:k.x-q.x,y:k.y-q.y},s==null||s("grabbing"))},[o,n,s]),h=Q.useCallback((y,w)=>{if(!a.current)return!1;const $=o(y,w),k=a.current;return r(q=>({...q,[k]:{x:$.x-u.current.x,y:$.y-u.current.y}})),!0},[o,r]),g=Q.useCallback(()=>{a.current=null,s==null||s("grab")},[s]);return{draggingNode:a,startNodeDrag:m,handleDragMove:h,handleDragEnd:g}}const Wd="wizmat_v1_";function bg(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function wg(o,n){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return n}}function $n(o,n){const r=Wd+o,[s,a]=Q.useState(()=>{try{const m=localStorage.getItem(r);return m===null?n:wg(m,n)}catch{return n}});Q.useEffect(()=>{try{localStorage.setItem(r,bg(s))}catch{}},[r,s]);const u=Q.useCallback(m=>{a(h=>typeof m=="function"?m(h):m)},[]);return[s,u]}function _g(){try{Object.keys(localStorage).filter(o=>o.startsWith(Wd)).forEach(o=>localStorage.removeItem(o))}catch{}}const ei={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function $g(o,n,r){var u;const s={...n},a=[o];for(;a.length;){const m=a.shift();s[m]!=="known"&&(s[m]="known",(u=r.prereqs[m])==null||u.forEach(h=>{s[h]!=="known"&&a.push(h)}))}return s}function Ud(o,n,r){var u;const s={...n},a=[o];for(;a.length;){const m=a.shift();s[m]!=="unknown"&&(s[m]="unknown",(u=r.dependents[m])==null||u.forEach(h=>{s[h]!=="unknown"&&a.push(h)}))}return s}function kg(o,n,r,s,a){let u={...s};if(n){for(const m of Object.keys(r))u[m]="known";for(const m of Object.keys(r))u=$g(m,u,a)}else{for(const m of Object.keys(r))u[m]="unknown";for(const m of Object.keys(r))u=Ud(m,u,a)}return u}function zg(o,n,r){return o.filter(s=>n[s.id]!=="known"&&n[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(a=>n[a]==="known")).map(s=>s.id)}function Sg(o,n,r,s=.5){var a,u,m;try{const h=1-s,g=o.filter($=>n[$.id]!=="known"&&n[$.id]!=="unknown");if(g.length===0)return null;const y=g.map($=>{const k=Vd($.id,n,r),q=Kd($.id,n,r),R=s*k+h*q;return{id:$.id,erv:R||0,ancestorsToReveal:k,descendantsToReveal:q}});return y.sort(($,k)=>k.erv-$.erv),((a=y[0])==null?void 0:a.id)||((u=g[0])==null?void 0:u.id)||null}catch(h){return console.error("pickNextQuestion error:",h),((m=o.filter(y=>n[y.id]!=="known"&&n[y.id]!=="unknown")[0])==null?void 0:m.id)||null}}function Vd(o,n,r){const s=new Set,a=[...r.prereqs[o]??[]];let u=0;for(;a.length>0;){const m=a.shift();if(s.has(m))continue;s.add(m),n[m]!=="known"&&n[m]!=="unknown"&&u++;const h=r.prereqs[m]??[];for(const g of h)s.has(g)||a.push(g)}return u}function Kd(o,n,r){const s=new Set,a=[...r.dependents[o]??[]];let u=0;for(;a.length>0;){const m=a.shift();if(s.has(m))continue;s.add(m),n[m]!=="known"&&n[m]!=="unknown"&&u++;const h=r.dependents[m]??[];for(const g of h)s.has(g)||a.push(g)}return u}function Tg(o,n,r,s=.5){try{const a=o.filter(y=>n[y.id]!=="known"&&n[y.id]!=="unknown");if(a.length===0)return 0;const u=1-s;let m=0;for(const y of a){const w=Vd(y.id,n,r),$=Kd(y.id,n,r),k=s*w+u*$;m+=k||0}if(!m||m===0)return a.length;const h=a.length,g=h*h/m;return isNaN(g)?a.length:Math.ceil(g)}catch(a){return console.error("estimateRemainingQuestions error:",a),null}}function qg(o,n,r){const s={...o};for(const[a,u]of Object.entries(n)){const m=s[a]??{alpha:1,beta:1};s[a]={alpha:m.alpha+(r?u:0),beta:m.beta+(r?0:u)}}return s}function Mg(o,n){const r={};for(const s of o){const a=n[s]??{alpha:1,beta:1},u=a.alpha+a.beta,m=a.alpha/u;m>ei.deepKnownThreshold&&u>ei.deepMinStrength?r[s]="known":m<ei.deepUnknownThreshold&&u>ei.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function jg(o,n,r){const s=new Set,a=new Set(r.map(m=>m.id)),u=[o];for(;u.length;){const m=u.shift();if(!s.has(m)&&a.has(m)){s.add(m);for(const h of n.prereqs[m]??[])s.has(h)||u.push(h)}}return s}function Ag(o,n,r,s,a){var h;const u=o.filter(g=>r[g]==="uncertain");if(u.length===0)return null;const m=u.map(g=>{const y=n[g]??{alpha:1,beta:1},w=y.alpha+y.beta,$=y.alpha/w,k=1-$,q=new Set(o);let R=0;const E=[...s.prereqs[g]??[]],L=new Set;for(;E.length;){const F=E.shift();if(!L.has(F)){L.add(F),q.has(F)&&r[F]==="uncertain"&&R++;for(const V of s.prereqs[F]??[])L.has(V)||E.push(V)}}let P=0;const H=[...s.dependents[g]??[]],W=new Set;for(;H.length;){const F=H.shift();if(!W.has(F)){W.add(F),q.has(F)&&r[F]==="uncertain"&&P++;for(const V of s.dependents[F]??[])W.has(V)||H.push(V)}}const N=$*R+k*P;return{id:g,erv:N,strength:w}});return m.sort((g,y)=>Math.abs(g.erv-y.erv)>.01?y.erv-g.erv:g.strength-y.strength),((h=m[0])==null?void 0:h.id)??u[0]}function Cg(o,n,r=0){return!!(o.every(s=>n[s]!=="uncertain")||r>=ei.deepMaxQuestions)}function Rg(o,n,r=0){const s=o.length;if(s===0)return!0;const a=o.filter(u=>n[u.id]!=="known"&&n[u.id]!=="unknown").length;return a===0||r>=ei.quickMaxQuestions||a/s<=ei.quickCompletionRatio}function Eg(o,n,r){const s=r?`${r}_`:"",[a,u]=$n(`${s}diagMode`,!1),[m,h]=$n(`${s}diagSubMode`,"quick"),[g,y]=$n(`${s}belief`,{}),[w,$]=$n(`${s}targetNode`,null),[k,q]=$n(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[R,E]=$n(`${s}answeredQuestions`,new Set),[L,P]=$n(`${s}betaBeliefs`,{}),[H,W]=$n(`${s}quizNode`,null),N=Q.useMemo(()=>{const j=k.correct+k.incorrect;return j===0?.5:(k.correct+.5)/(j+1)},[k]),F=k.questionsAnswered,V=Q.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(n)])].map(G=>({id:G})),[o,n]),B=Q.useMemo(()=>a&&m==="quick"?zg(V,g,o):[],[a,m,g,o,V]),U=Q.useMemo(()=>Object.keys(g).length>0||k.questionsAnswered>0,[g,k]),K=U?B:[],be=Q.useMemo(()=>a&&m==="quick"?Sg(V,g,o,N):null,[a,m,g,o,N,V]),ve=Q.useMemo(()=>a&&m==="quick"?Tg(V,g,o,N):null,[a,m,g,o,N,V]),ue=Q.useMemo(()=>a&&m==="quick"&&U&&Rg(V,g,F),[a,m,U,g,V,F]),ye=Q.useMemo(()=>!a||m!=="deepdive"||!w?[]:[...jg(w,o,V)],[a,m,w,o,V]),$e=Q.useMemo(()=>m!=="deepdive"?{}:Mg(ye,L),[m,ye,L]),He=Q.useMemo(()=>!a||m!=="deepdive"||ye.length===0?null:Ag(ye,L,$e,o),[a,m,ye,L,$e,o,V]),Qe=Q.useMemo(()=>!a||m!=="deepdive"||ye.length===0?!1:Cg(ye,$e,F),[a,m,ye,$e,F]),Fe=Q.useCallback((j,G)=>a?m==="deepdive"?ye.includes(j)?($e[j]!=="uncertain"||W(j),!0):!1:g[j]==="unknown"?!0:G?(y(he=>Ud(j,he,o)),W(null),!0):g[j]==="known"?(y(he=>{const ze={...he};return delete ze[j],ze}),W(null),!0):(W(j),!0):!1,[a,m,g,o,ye,$e]),ae=Q.useCallback((j,G,he,ze)=>{if(m==="deepdive"){const ke=(he==null?void 0:he.tests)??{[j]:1};P(Me=>qg(Me,ke,G))}else{const ke=(he==null?void 0:he.tests)??{[j]:1};y(Me=>kg(j,G,ke,Me,o))}typeof ze=="number"&&E(ke=>new Set([...ke,`${j}:${ze}`])),q(ke=>({correct:ke.correct+(G?1:0),incorrect:ke.incorrect+(G?0:1),questionsAnswered:ke.questionsAnswered+1})),W(null)},[m,o]),_e=Q.useCallback(()=>{_g(),u(!1),h("quick"),y({}),P({}),W(null),$(null),q({correct:0,incorrect:0,questionsAnswered:0}),E(new Set)},[]),ce=Q.useCallback(j=>{h("deepdive"),$(j),P({}),y({}),W(null),q({correct:0,incorrect:0,questionsAnswered:0}),E(new Set),u(!0)},[]);return{diagMode:a,setDiagMode:u,mode:m,setMode:h,quizNode:H,setQuizNode:W,questionsAnswered:F,answeredQuestions:R,setAnsweredQuestions:E,getAnsweredIndices:j=>{const G=[];return R.forEach(he=>{const[ze,ke]=he.split(":");ze===j&&G.push(parseInt(ke,10))}),G},handleDiagClick:Fe,handleQuizAnswer:ae,resetDiagnostic:_e,startDeepDive:ce,targetNode:w,belief:g,frontier:B,visibleFrontier:K,hasStarted:U,nextSuggestedId:be,expectedRemaining:ve,pCorrect:N,sessionComplete:ue,betaBeliefs:L,subgraphIds:ye,ddClassification:$e,ddNextNodeId:He,ddComplete:Qe}}const Q1=640;function Pg(){const[o,n]=Q.useState(()=>typeof window<"u"&&window.innerWidth<Q1);return Q.useEffect(()=>{const r=window.matchMedia(`(max-width: ${Q1-1}px)`),s=a=>n(a.matches);return r.addEventListener("change",s),n(r.matches),()=>r.removeEventListener("change",s)},[]),o}const Dg=new Set(["pl","en"]);function Y1(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let s="pl",a=r;if(r.length>0&&Dg.has(r[0])&&(s=r[0],a=r.slice(1)),a[0]==="node"&&a[1]){const u=decodeURIComponent(a[1]);return a[2]==="resource"&&a[3]!=null?{view:"resource",nodeId:u,resourceIndex:parseInt(a[3],10),lang:s}:{view:"node",nodeId:u,lang:s}}if(a[0]==="diagnostic"){if(a[1]==="deepdive"&&a[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(a[2]),lang:s};if(a[1]==="quick")return{view:"diagnostic",mode:"quick",lang:s}}return{view:"graph",lang:s}}function Ng(o){const n=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${n}`;switch(o.view){case"node":return`#/${n}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${n}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${n}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${n}/diagnostic/quick`;default:return`#/${n}`}}function Bg(o){const n=Q.useRef(o);n.current=o;const r=Q.useRef(!1),s=Q.useCallback(a=>{const u=Ng(a);window.location.hash!==u&&(r.current=!0,window.location.hash=u)},[]);return Q.useEffect(()=>{const a=()=>{if(r.current){r.current=!1;return}n.current(Y1(window.location.hash))};window.addEventListener("hashchange",a);const u=Y1(window.location.hash);return Promise.resolve().then(()=>n.current(u)),()=>window.removeEventListener("hashchange",a)},[]),{setRoute:s}}function X1(o){return 6+o.level*2}function Ig({edges:o,nodes:n,highlightedIds:r}){const s=Q.useMemo(()=>Object.fromEntries(n.map(a=>[a.id,a])),[n]);return _.jsx("g",{children:o.map(([a,u])=>{const m=s[a],h=s[u];if(!m||!h)return null;const g=(r==null?void 0:r.has(a))&&(r==null?void 0:r.has(u)),y=r&&!g,w=h.x-m.x,$=h.y-m.y,k=Math.sqrt(w*w+$*$)||1,q=X1(h)+3,R=h.x-w/k*q,E=h.y-$/k*q,L=X1(m)+2,P=m.x+w/k*L,H=m.y+$/k*L,W=y?"#0f1825":g?"#4a9eff":"#2a3f5a",N=g?1.8:1,F=y?.15:g?1:.55,V=y?"url(#arrow-dim)":g?"url(#arrow-hi)":"url(#arrow-default)";return _.jsx("line",{x1:P,y1:H,x2:R,y2:E,stroke:W,strokeWidth:N,opacity:F,markerEnd:V},`${a}-${u}`)})})}function Fg(o){return 6+o.level*2}function Lg(o){return o<.4?8:o<.65?13:o<1?18:28}function Og({nodes:o,filteredIds:n,highlightedIds:r,selected:s,onSelect:a,onHover:u,lang:m,diagMode:h,belief:g,frontier:y,scale:w,scopeColors:$}){return _.jsx("g",{children:o.map(k=>{const q=Fg(k),R=($==null?void 0:$[k.scope])||"#4a9eff",E=n&&!n.has(k.id),L=r==null?void 0:r.has(k.id),P=s===k.id,H=r&&!L||E,W=m==="pl"?k.labelPl:k.label,N=Lg(w??1);let F=R,V=H?.15:.9,B=H?.2:.85,U=null,K=2;if(h){const be=g[k.id],ve=y.includes(k.id);V=E?.1:.9,B=E?.15:.9,be==="known"?(F="#27ae60",U="#2ecc71"):be==="unknown"?(F="#c0392b",V=E?.1:.5,U="#e74c3c"):ve?(F="#f39c12",U="#f1c40f",K=3):(F=R,V=E?.1:.35)}return _.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>a(k.id===s?null:k.id),onMouseEnter:()=>u(k.id),onMouseLeave:()=>u(null),children:[(P||h&&U)&&_.jsx("circle",{cx:k.x,cy:k.y,r:q+(P?5:4),fill:"none",stroke:P?R:U,strokeWidth:P?2:K,opacity:P?.5:.9}),_.jsx("circle",{cx:k.x,cy:k.y,r:q,fill:F,fillOpacity:V,stroke:!h&&(L||P)?R:"none",strokeWidth:1.5}),_.jsx("text",{x:k.x,y:k.y+q+10,textAnchor:"middle",fontSize:8,fill:"#c8d6e5",opacity:B,style:{pointerEvents:"none",userSelect:"none"},children:W.length>N?W.slice(0,N-1)+"…":W})]},k.id)})})}function Hg({resource:o,lang:n,onClose:r}){const s=Q.useRef(null);if(Q.useEffect(()=>{const $=k=>{k.key==="Escape"&&r()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[r]),Q.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const a=n==="pl"?o.titlePl:o.titleEn,u=o.type==="interactive",m={interactive:te("resourceInteractive",n),video:te("resourceVideo",n),article:te("resourceArticle",n)}[o.type]??o.type,h={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!u)return window.open(o.url,"_blank","noopener"),r(),null;const y=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,w=y+(y.includes("?")?"&":"?")+"lang="+n;return _.jsxs("div",{ref:s,onClick:$=>{$.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[_.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),_.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${h}33`,boxShadow:`0 0 48px ${h}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#0d1520f8",borderBottom:`1px solid ${h}22`,flexShrink:0,fontFamily:Eo},children:[_.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:h,background:`${h}18`,border:`1px solid ${h}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:m}),_.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:se.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),_.jsx("button",{onClick:()=>window.open(w,"_blank","noopener"),title:te("openInTab",n),style:Z1,children:"↗"}),_.jsx("button",{onClick:r,title:te("closeResource",n),style:{...Z1,fontSize:18,lineHeight:1},children:"×"})]}),_.jsx("iframe",{src:w,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:a,loading:"eager"})]})]})}const Z1={background:"none",border:`1px solid ${se.border}`,borderRadius:5,color:se.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:Eo,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};function Gg({nodeId:o,nodes:n,adjacency:r,lang:s,SCOPE_COLORS:a,SCOPE_LABELS:u,SECTIONS:m,isMobile:h,onClose:g,openResourceIdx:y,setOpenResourceIdx:w}){var B,U;const $=n.find(K=>K.id===o),k=($==null?void 0:$.resources)??[],q=y!=null?k[y]??null:null;if(!$)return null;const R=(a==null?void 0:a[$.scope])??"#4a9eff",E=s==="pl"?$.labelPl:$.label,L=r.prereqs[o]||[],P=r.dependents[o]||[],H=Object.fromEntries(n.map(K=>[K.id,K])),W=K=>{var be,ve;return s==="pl"?(be=H[K])==null?void 0:be.labelPl:(ve=H[K])==null?void 0:ve.label},N=h?12:10,F={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"},V=_.jsxs(_.Fragment,{children:[h&&_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[_.jsx("div",{style:{color:R,fontWeight:700,fontSize:h?16:13,marginBottom:4},children:E}),h&&_.jsx("button",{onClick:g,style:{background:"none",border:"none",color:se.textDim,fontSize:22,cursor:"pointer",lineHeight:1,padding:"0 4px"},children:"×"})]}),_.jsxs("div",{style:{color:se.textDim,fontSize:N,marginBottom:12,lineHeight:1.6},children:[(B=m==null?void 0:m[$.section])==null?void 0:B.label," · ",(U=u==null?void 0:u[$.scope])==null?void 0:U[s==="pl"?"pl":"en"]," · ",te("level",s)," ",$.level]}),L.length>0?_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:N,fontWeight:600,marginBottom:6},children:te("prerequisites",s)}),L.map(K=>_.jsxs("div",{style:{color:"#7a9cc8",paddingLeft:8,fontSize:N,lineHeight:h?2:1.7},children:["← ",W(K)]},K))]}):_.jsx("div",{style:{color:se.textFaint,fontSize:N,fontStyle:"italic"},children:te("noPrereqs",s)}),P.length>0?_.jsxs("div",{style:{marginTop:12},children:[_.jsx("div",{style:{color:"#3dc9b0",fontSize:N,fontWeight:600,marginBottom:6},children:te("enables",s)}),P.map(K=>_.jsxs("div",{style:{color:"#7ac8b0",paddingLeft:8,fontSize:N,lineHeight:h?2:1.7},children:["→ ",W(K)]},K))]}):_.jsx("div",{style:{color:se.textFaint,fontSize:N,fontStyle:"italic",marginTop:10},children:te("noDependents",s)}),k.length>0&&_.jsxs("div",{style:{marginTop:14,borderTop:`1px solid ${se.border}`,paddingTop:12},children:[_.jsx("div",{style:{color:"#FFD166",fontSize:N,fontWeight:600,marginBottom:8,letterSpacing:"0.02em"},children:te("learningResources",s)}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:k.map((K,be)=>{const ve=s==="pl"?K.titlePl:K.titleEn,ue=F[K.type]??"#8a9dbe",ye=K.type==="interactive"?"resourceInteractive":K.type==="video"?"resourceVideo":"resourceArticle";return _.jsxs("button",{onClick:()=>w(be),style:{display:"flex",alignItems:"flex-start",gap:8,background:`${ue}0f`,border:`1px solid ${ue}30`,borderRadius:6,padding:h?"10px 12px":"7px 10px",cursor:"pointer",textAlign:"left",width:"100%",transition:"background 0.15s, border-color 0.15s",fontFamily:Eo},onMouseEnter:$e=>{$e.currentTarget.style.background=`${ue}1e`,$e.currentTarget.style.borderColor=`${ue}60`},onMouseLeave:$e=>{$e.currentTarget.style.background=`${ue}0f`,$e.currentTarget.style.borderColor=`${ue}30`},children:[_.jsx("span",{style:{fontSize:h?16:13,flexShrink:0,marginTop:1},children:K.type==="interactive"?"⬡":K.type==="video"?"▶":"📄"}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontSize:N,color:se.textBody,lineHeight:1.4,fontWeight:500},children:ve}),_.jsx("div",{style:{fontSize:Math.max(N-1,9),color:ue,marginTop:2,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:te(ye,s)})]}),_.jsx("span",{style:{fontSize:12,color:se.textDim,alignSelf:"center",flexShrink:0},children:"→"})]},be)})})]})]});return _.jsxs(_.Fragment,{children:[h?_.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:`1px solid ${R}40`,borderRadius:"14px 14px 0 0",padding:"16px 16px 32px",zIndex:30,maxHeight:"60vh",overflowY:"auto"},children:V}):_.jsx("div",{style:{position:"absolute",right:16,top:16,width:240,background:"#0d1520ee",backdropFilter:"blur(6px)",border:`1px solid ${R}40`,borderRadius:8,padding:"12px 14px",fontSize:11,color:se.textBody,lineHeight:1.6,zIndex:10,maxHeight:"80vh",overflowY:"auto"},children:V}),q&&_.jsx(Hg,{resource:q,lang:s,onClose:()=>w(null)})]})}class Ot{constructor(n,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=r,this.end=s}static range(n,r){return r?!n||!n.loc||!r.loc||n.loc.lexer!==r.loc.lexer?null:new Ot(n.loc.lexer,n.loc.start,r.loc.end):n&&n.loc}}class Yt{constructor(n,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=r}range(n,r){return new Yt(r,Ot.range(this,n))}}class re{constructor(n,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+n,a,u,m=r&&r.loc;if(m&&m.start<=m.end){var h=m.lexer.input;a=m.start,u=m.end,a===h.length?s+=" at end of input: ":s+=" at position "+(a+1)+": ";var g=h.slice(a,u).replace(/[^]/g,"$&̲"),y;a>15?y="…"+h.slice(a-15,a):y=h.slice(0,a);var w;u+15<h.length?w=h.slice(u,u+15)+"…":w=h.slice(u),s+=y+g+w}var $=new Error(s);return $.name="ParseError",$.__proto__=re.prototype,$.position=a,a!=null&&u!=null&&($.length=u-a),$.rawMessage=n,$}}re.prototype.__proto__=Error.prototype;var Wg=/([A-Z])/g,Ul=o=>o.replace(Wg,"-$1").toLowerCase(),Ug={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Vg=/[&><"']/g,Mt=o=>String(o).replace(Vg,n=>Ug[n]),Mo=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Mo(o.body[0]):o:o.type==="font"?Mo(o.body):o,Kg=new Set(["mathord","textord","atom"]),Vn=o=>Kg.has(Mo(o).type),Qg=o=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},as={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,n)=>(n.push(o),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Yg(o){if(o.default)return o.default;var n=o.type,r=Array.isArray(n)?n[0]:n;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Vl{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var r in as)if(as.hasOwnProperty(r)){var s=as[r];this[r]=n[r]!==void 0?s.processor?s.processor(n[r]):n[r]:Yg(s)}}reportNonstrict(n,r,s){var a=this.strict;if(typeof a=="function"&&(a=a(n,r,s)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new re("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+n+"]"),s);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+n+"]"))}}useStrictBehavior(n,r,s){var a=this.strict;if(typeof a=="function")try{a=a(n,r,s)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var r=Qg(n.url);if(r==null)return!1;n.protocol=r}var s=typeof this.trust=="function"?this.trust(n):this.trust;return!!s}}class kr{constructor(n,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=r,this.cramped=s}sup(){return kn[Xg[this.id]]}sub(){return kn[Zg[this.id]]}fracNum(){return kn[Jg[this.id]]}fracDen(){return kn[ev[this.id]]}cramp(){return kn[tv[this.id]]}text(){return kn[nv[this.id]]}isTight(){return this.size>=2}}var Kl=0,cs=1,ji=2,Wn=3,Co=4,an=5,Ai=6,Et=7,kn=[new kr(Kl,0,!1),new kr(cs,0,!0),new kr(ji,1,!1),new kr(Wn,1,!0),new kr(Co,2,!1),new kr(an,2,!0),new kr(Ai,3,!1),new kr(Et,3,!0)],Xg=[Co,an,Co,an,Ai,Et,Ai,Et],Zg=[an,an,an,an,Et,Et,Et,Et],Jg=[ji,Wn,Co,an,Ai,Et,Ai,Et],ev=[Wn,Wn,an,an,Et,Et,Et,Et],tv=[cs,cs,Wn,Wn,an,an,Et,Et],nv=[Kl,cs,ji,Wn,ji,Wn,ji,Wn],Ce={DISPLAY:kn[Kl],TEXT:kn[ji],SCRIPT:kn[Co],SCRIPTSCRIPT:kn[Ai]},Cl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function rv(o){for(var n=0;n<Cl.length;n++)for(var r=Cl[n],s=0;s<r.blocks.length;s++){var a=r.blocks[s];if(o>=a[0]&&o<=a[1])return r.name}return null}var ls=[];Cl.forEach(o=>o.blocks.forEach(n=>ls.push(...n)));function Qd(o){for(var n=0;n<ls.length;n+=2)if(o>=ls[n]&&o<=ls[n+1])return!0;return!1}var Mi=80,iv=function(n,r){return"M95,"+(622+n+r)+`
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
M`+(834+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},ov=function(n,r){return"M263,"+(601+n+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},sv=function(n,r){return"M983 "+(10+n+r)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+r+"h400000v"+(40+n)+"h-400000z"},av=function(n,r){return"M424,"+(2398+n+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+r+`
h400000v`+(40+n)+"h-400000z"},lv=function(n,r){return"M473,"+(2713+n+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+r+"h400000v"+(40+n)+"H1017.7z"},uv=function(n){var r=n/2;return"M400000 "+n+" H0 L"+r+" 0 l65 45 L145 "+(n-80)+" H400000z"},cv=function(n,r,s){var a=s-54-r-n;return"M702 "+(n+r)+"H400000"+(40+n)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+n)+"H742z"},dv=function(n,r,s){r=1e3*r;var a="";switch(n){case"sqrtMain":a=iv(r,Mi);break;case"sqrtSize1":a=ov(r,Mi);break;case"sqrtSize2":a=sv(r,Mi);break;case"sqrtSize3":a=av(r,Mi);break;case"sqrtSize4":a=lv(r,Mi);break;case"sqrtTall":a=cv(r,Mi,s)}return a},mv=function(n,r){switch(n){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},J1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},fv=function(n,r){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Po{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),r=0;r<this.children.length;r++)n.appendChild(this.children[r].toNode());return n}toMarkup(){for(var n="",r=0;r<this.children.length;r++)n+=this.children[r].toMarkup();return n}toText(){var n=r=>r.toText();return this.children.map(n).join("")}}var zn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Z0={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},ed={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function pv(o,n){zn[o]=n}function Ql(o,n,r){if(!zn[n])throw new Error("Font metrics not found for font: "+n+".");var s=o.charCodeAt(0),a=zn[n][s];if(!a&&o[0]in ed&&(s=ed[o[0]].charCodeAt(0),a=zn[n][s]),!a&&r==="text"&&Qd(s)&&(a=zn[n][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var gl={};function hv(o){var n;if(o>=5?n=0:o>=3?n=1:n=2,!gl[n]){var r=gl[n]={cssEmPerMu:Z0.quad[n]/18};for(var s in Z0)Z0.hasOwnProperty(s)&&(r[s]=Z0[s][n])}return gl[n]}var gv=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],td=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],nd=function(n,r){return r.size<2?n:gv[n-1][r.size-1]};class Gn{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||Gn.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=td[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return new Gn(r)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:nd(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:td[n-1]})}havingBaseStyle(n){n=n||this.style.text();var r=nd(Gn.BASESIZE,n);return this.size===r&&this.textSize===Gn.BASESIZE&&this.style===n?this:this.extend({style:n,size:r})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Gn.BASESIZE?["sizing","reset-size"+this.size,"size"+Gn.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=hv(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Gn.BASESIZE=6;var Rl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},vv={ex:!0,em:!0,mu:!0},Yd=function(n){return typeof n!="string"&&(n=n.unit),n in Rl||n in vv||n==="ex"},st=function(n,r){var s;if(n.unit in Rl)s=Rl[n.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(n.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,n.unit==="ex")s=a.fontMetrics().xHeight;else if(n.unit==="em")s=a.fontMetrics().quad;else throw new re("Invalid unit: '"+n.unit+"'");a!==r&&(s*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(n.number*s,r.maxSize)},le=function(n){return+n.toFixed(4)+"em"},Tr=function(n){return n.filter(r=>r).join(" ")},Xd=function(n,r,s){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},Zd=function(n){var r=document.createElement(n);r.className=Tr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var u=0;u<this.children.length;u++)r.appendChild(this.children[u].toNode());return r},yv=/[\s"'>/=\x00-\x1f]/,Jd=function(n){var r="<"+n;this.classes.length&&(r+=' class="'+Mt(Tr(this.classes))+'"');var s="";for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=Ul(a)+":"+this.style[a]+";");s&&(r+=' style="'+Mt(s)+'"');for(var u in this.attributes)if(this.attributes.hasOwnProperty(u)){if(yv.test(u))throw new re("Invalid attribute name '"+u+"'");r+=" "+u+'="'+Mt(this.attributes[u])+'"'}r+=">";for(var m=0;m<this.children.length;m++)r+=this.children[m].toMarkup();return r+="</"+n+">",r};class Do{constructor(n,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,Xd.call(this,n,s,a),this.children=r||[]}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Zd.call(this,"span")}toMarkup(){return Jd.call(this,"span")}}class Yl{constructor(n,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,Xd.call(this,r,a),this.children=s||[],this.setAttribute("href",n)}setAttribute(n,r){this.attributes[n]=r}hasClass(n){return this.classes.includes(n)}toNode(){return Zd.call(this,"a")}toMarkup(){return Jd.call(this,"a")}}class xv{constructor(n,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=n,this.classes=["mord"],this.style=s}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(n.style[r]=this.style[r]);return n}toMarkup(){var n='<img src="'+Mt(this.src)+'"'+(' alt="'+Mt(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=Ul(s)+":"+this.style[s]+";");return r&&(n+=' style="'+Mt(r)+'"'),n+="'/>",n}}var bv={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class ln{constructor(n,r,s,a,u,m,h,g){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=r||0,this.depth=s||0,this.italic=a||0,this.skew=u||0,this.width=m||0,this.classes=h||[],this.style=g||{},this.maxFontSize=0;var y=rv(this.text.charCodeAt(0));y&&this.classes.push(y+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=bv[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=le(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Tr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(n),r):n}toMarkup(){var n=!1,r="<span";this.classes.length&&(n=!0,r+=' class="',r+=Mt(Tr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=Ul(a)+":"+this.style[a]+";");s&&(n=!0,r+=' style="'+Mt(s)+'"');var u=Mt(this.text);return n?(r+=">",r+=u,r+="</span>",r):u}}class Un{constructor(n,r){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=r||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</svg>",n}}class qr{constructor(n,r){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=r}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",J1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Mt(this.alternate)+'"/>':'<path d="'+Mt(J1[this.pathName])+'"/>'}}class El{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var n="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="'+Mt(this.attributes[r])+'"');return n+="/>",n}}function rd(o){if(o instanceof ln)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function wv(o){if(o instanceof Do)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var _v={bin:1,close:1,inner:1,open:1,punct:1,rel:1},$v={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Ze={math:{},text:{}};function d(o,n,r,s,a,u){Ze[o][a]={font:n,group:r,replace:s},u&&s&&(Ze[o][s]=Ze[o][a])}var p="math",Z="text",v="main",S="ams",nt="accent-token",fe="bin",Pt="close",Ei="inner",qe="mathord",gt="op-token",Xt="open",gs="punct",T="rel",Kn="spacing",A="textord";d(p,v,T,"≡","\\equiv",!0);d(p,v,T,"≺","\\prec",!0);d(p,v,T,"≻","\\succ",!0);d(p,v,T,"∼","\\sim",!0);d(p,v,T,"⊥","\\perp");d(p,v,T,"⪯","\\preceq",!0);d(p,v,T,"⪰","\\succeq",!0);d(p,v,T,"≃","\\simeq",!0);d(p,v,T,"∣","\\mid",!0);d(p,v,T,"≪","\\ll",!0);d(p,v,T,"≫","\\gg",!0);d(p,v,T,"≍","\\asymp",!0);d(p,v,T,"∥","\\parallel");d(p,v,T,"⋈","\\bowtie",!0);d(p,v,T,"⌣","\\smile",!0);d(p,v,T,"⊑","\\sqsubseteq",!0);d(p,v,T,"⊒","\\sqsupseteq",!0);d(p,v,T,"≐","\\doteq",!0);d(p,v,T,"⌢","\\frown",!0);d(p,v,T,"∋","\\ni",!0);d(p,v,T,"∝","\\propto",!0);d(p,v,T,"⊢","\\vdash",!0);d(p,v,T,"⊣","\\dashv",!0);d(p,v,T,"∋","\\owns");d(p,v,gs,".","\\ldotp");d(p,v,gs,"⋅","\\cdotp");d(p,v,A,"#","\\#");d(Z,v,A,"#","\\#");d(p,v,A,"&","\\&");d(Z,v,A,"&","\\&");d(p,v,A,"ℵ","\\aleph",!0);d(p,v,A,"∀","\\forall",!0);d(p,v,A,"ℏ","\\hbar",!0);d(p,v,A,"∃","\\exists",!0);d(p,v,A,"∇","\\nabla",!0);d(p,v,A,"♭","\\flat",!0);d(p,v,A,"ℓ","\\ell",!0);d(p,v,A,"♮","\\natural",!0);d(p,v,A,"♣","\\clubsuit",!0);d(p,v,A,"℘","\\wp",!0);d(p,v,A,"♯","\\sharp",!0);d(p,v,A,"♢","\\diamondsuit",!0);d(p,v,A,"ℜ","\\Re",!0);d(p,v,A,"♡","\\heartsuit",!0);d(p,v,A,"ℑ","\\Im",!0);d(p,v,A,"♠","\\spadesuit",!0);d(p,v,A,"§","\\S",!0);d(Z,v,A,"§","\\S");d(p,v,A,"¶","\\P",!0);d(Z,v,A,"¶","\\P");d(p,v,A,"†","\\dag");d(Z,v,A,"†","\\dag");d(Z,v,A,"†","\\textdagger");d(p,v,A,"‡","\\ddag");d(Z,v,A,"‡","\\ddag");d(Z,v,A,"‡","\\textdaggerdbl");d(p,v,Pt,"⎱","\\rmoustache",!0);d(p,v,Xt,"⎰","\\lmoustache",!0);d(p,v,Pt,"⟯","\\rgroup",!0);d(p,v,Xt,"⟮","\\lgroup",!0);d(p,v,fe,"∓","\\mp",!0);d(p,v,fe,"⊖","\\ominus",!0);d(p,v,fe,"⊎","\\uplus",!0);d(p,v,fe,"⊓","\\sqcap",!0);d(p,v,fe,"∗","\\ast");d(p,v,fe,"⊔","\\sqcup",!0);d(p,v,fe,"◯","\\bigcirc",!0);d(p,v,fe,"∙","\\bullet",!0);d(p,v,fe,"‡","\\ddagger");d(p,v,fe,"≀","\\wr",!0);d(p,v,fe,"⨿","\\amalg");d(p,v,fe,"&","\\And");d(p,v,T,"⟵","\\longleftarrow",!0);d(p,v,T,"⇐","\\Leftarrow",!0);d(p,v,T,"⟸","\\Longleftarrow",!0);d(p,v,T,"⟶","\\longrightarrow",!0);d(p,v,T,"⇒","\\Rightarrow",!0);d(p,v,T,"⟹","\\Longrightarrow",!0);d(p,v,T,"↔","\\leftrightarrow",!0);d(p,v,T,"⟷","\\longleftrightarrow",!0);d(p,v,T,"⇔","\\Leftrightarrow",!0);d(p,v,T,"⟺","\\Longleftrightarrow",!0);d(p,v,T,"↦","\\mapsto",!0);d(p,v,T,"⟼","\\longmapsto",!0);d(p,v,T,"↗","\\nearrow",!0);d(p,v,T,"↩","\\hookleftarrow",!0);d(p,v,T,"↪","\\hookrightarrow",!0);d(p,v,T,"↘","\\searrow",!0);d(p,v,T,"↼","\\leftharpoonup",!0);d(p,v,T,"⇀","\\rightharpoonup",!0);d(p,v,T,"↙","\\swarrow",!0);d(p,v,T,"↽","\\leftharpoondown",!0);d(p,v,T,"⇁","\\rightharpoondown",!0);d(p,v,T,"↖","\\nwarrow",!0);d(p,v,T,"⇌","\\rightleftharpoons",!0);d(p,S,T,"≮","\\nless",!0);d(p,S,T,"","\\@nleqslant");d(p,S,T,"","\\@nleqq");d(p,S,T,"⪇","\\lneq",!0);d(p,S,T,"≨","\\lneqq",!0);d(p,S,T,"","\\@lvertneqq");d(p,S,T,"⋦","\\lnsim",!0);d(p,S,T,"⪉","\\lnapprox",!0);d(p,S,T,"⊀","\\nprec",!0);d(p,S,T,"⋠","\\npreceq",!0);d(p,S,T,"⋨","\\precnsim",!0);d(p,S,T,"⪹","\\precnapprox",!0);d(p,S,T,"≁","\\nsim",!0);d(p,S,T,"","\\@nshortmid");d(p,S,T,"∤","\\nmid",!0);d(p,S,T,"⊬","\\nvdash",!0);d(p,S,T,"⊭","\\nvDash",!0);d(p,S,T,"⋪","\\ntriangleleft");d(p,S,T,"⋬","\\ntrianglelefteq",!0);d(p,S,T,"⊊","\\subsetneq",!0);d(p,S,T,"","\\@varsubsetneq");d(p,S,T,"⫋","\\subsetneqq",!0);d(p,S,T,"","\\@varsubsetneqq");d(p,S,T,"≯","\\ngtr",!0);d(p,S,T,"","\\@ngeqslant");d(p,S,T,"","\\@ngeqq");d(p,S,T,"⪈","\\gneq",!0);d(p,S,T,"≩","\\gneqq",!0);d(p,S,T,"","\\@gvertneqq");d(p,S,T,"⋧","\\gnsim",!0);d(p,S,T,"⪊","\\gnapprox",!0);d(p,S,T,"⊁","\\nsucc",!0);d(p,S,T,"⋡","\\nsucceq",!0);d(p,S,T,"⋩","\\succnsim",!0);d(p,S,T,"⪺","\\succnapprox",!0);d(p,S,T,"≆","\\ncong",!0);d(p,S,T,"","\\@nshortparallel");d(p,S,T,"∦","\\nparallel",!0);d(p,S,T,"⊯","\\nVDash",!0);d(p,S,T,"⋫","\\ntriangleright");d(p,S,T,"⋭","\\ntrianglerighteq",!0);d(p,S,T,"","\\@nsupseteqq");d(p,S,T,"⊋","\\supsetneq",!0);d(p,S,T,"","\\@varsupsetneq");d(p,S,T,"⫌","\\supsetneqq",!0);d(p,S,T,"","\\@varsupsetneqq");d(p,S,T,"⊮","\\nVdash",!0);d(p,S,T,"⪵","\\precneqq",!0);d(p,S,T,"⪶","\\succneqq",!0);d(p,S,T,"","\\@nsubseteqq");d(p,S,fe,"⊴","\\unlhd");d(p,S,fe,"⊵","\\unrhd");d(p,S,T,"↚","\\nleftarrow",!0);d(p,S,T,"↛","\\nrightarrow",!0);d(p,S,T,"⇍","\\nLeftarrow",!0);d(p,S,T,"⇏","\\nRightarrow",!0);d(p,S,T,"↮","\\nleftrightarrow",!0);d(p,S,T,"⇎","\\nLeftrightarrow",!0);d(p,S,T,"△","\\vartriangle");d(p,S,A,"ℏ","\\hslash");d(p,S,A,"▽","\\triangledown");d(p,S,A,"◊","\\lozenge");d(p,S,A,"Ⓢ","\\circledS");d(p,S,A,"®","\\circledR");d(Z,S,A,"®","\\circledR");d(p,S,A,"∡","\\measuredangle",!0);d(p,S,A,"∄","\\nexists");d(p,S,A,"℧","\\mho");d(p,S,A,"Ⅎ","\\Finv",!0);d(p,S,A,"⅁","\\Game",!0);d(p,S,A,"‵","\\backprime");d(p,S,A,"▲","\\blacktriangle");d(p,S,A,"▼","\\blacktriangledown");d(p,S,A,"■","\\blacksquare");d(p,S,A,"⧫","\\blacklozenge");d(p,S,A,"★","\\bigstar");d(p,S,A,"∢","\\sphericalangle",!0);d(p,S,A,"∁","\\complement",!0);d(p,S,A,"ð","\\eth",!0);d(Z,v,A,"ð","ð");d(p,S,A,"╱","\\diagup");d(p,S,A,"╲","\\diagdown");d(p,S,A,"□","\\square");d(p,S,A,"□","\\Box");d(p,S,A,"◊","\\Diamond");d(p,S,A,"¥","\\yen",!0);d(Z,S,A,"¥","\\yen",!0);d(p,S,A,"✓","\\checkmark",!0);d(Z,S,A,"✓","\\checkmark");d(p,S,A,"ℶ","\\beth",!0);d(p,S,A,"ℸ","\\daleth",!0);d(p,S,A,"ℷ","\\gimel",!0);d(p,S,A,"ϝ","\\digamma",!0);d(p,S,A,"ϰ","\\varkappa");d(p,S,Xt,"┌","\\@ulcorner",!0);d(p,S,Pt,"┐","\\@urcorner",!0);d(p,S,Xt,"└","\\@llcorner",!0);d(p,S,Pt,"┘","\\@lrcorner",!0);d(p,S,T,"≦","\\leqq",!0);d(p,S,T,"⩽","\\leqslant",!0);d(p,S,T,"⪕","\\eqslantless",!0);d(p,S,T,"≲","\\lesssim",!0);d(p,S,T,"⪅","\\lessapprox",!0);d(p,S,T,"≊","\\approxeq",!0);d(p,S,fe,"⋖","\\lessdot");d(p,S,T,"⋘","\\lll",!0);d(p,S,T,"≶","\\lessgtr",!0);d(p,S,T,"⋚","\\lesseqgtr",!0);d(p,S,T,"⪋","\\lesseqqgtr",!0);d(p,S,T,"≑","\\doteqdot");d(p,S,T,"≓","\\risingdotseq",!0);d(p,S,T,"≒","\\fallingdotseq",!0);d(p,S,T,"∽","\\backsim",!0);d(p,S,T,"⋍","\\backsimeq",!0);d(p,S,T,"⫅","\\subseteqq",!0);d(p,S,T,"⋐","\\Subset",!0);d(p,S,T,"⊏","\\sqsubset",!0);d(p,S,T,"≼","\\preccurlyeq",!0);d(p,S,T,"⋞","\\curlyeqprec",!0);d(p,S,T,"≾","\\precsim",!0);d(p,S,T,"⪷","\\precapprox",!0);d(p,S,T,"⊲","\\vartriangleleft");d(p,S,T,"⊴","\\trianglelefteq");d(p,S,T,"⊨","\\vDash",!0);d(p,S,T,"⊪","\\Vvdash",!0);d(p,S,T,"⌣","\\smallsmile");d(p,S,T,"⌢","\\smallfrown");d(p,S,T,"≏","\\bumpeq",!0);d(p,S,T,"≎","\\Bumpeq",!0);d(p,S,T,"≧","\\geqq",!0);d(p,S,T,"⩾","\\geqslant",!0);d(p,S,T,"⪖","\\eqslantgtr",!0);d(p,S,T,"≳","\\gtrsim",!0);d(p,S,T,"⪆","\\gtrapprox",!0);d(p,S,fe,"⋗","\\gtrdot");d(p,S,T,"⋙","\\ggg",!0);d(p,S,T,"≷","\\gtrless",!0);d(p,S,T,"⋛","\\gtreqless",!0);d(p,S,T,"⪌","\\gtreqqless",!0);d(p,S,T,"≖","\\eqcirc",!0);d(p,S,T,"≗","\\circeq",!0);d(p,S,T,"≜","\\triangleq",!0);d(p,S,T,"∼","\\thicksim");d(p,S,T,"≈","\\thickapprox");d(p,S,T,"⫆","\\supseteqq",!0);d(p,S,T,"⋑","\\Supset",!0);d(p,S,T,"⊐","\\sqsupset",!0);d(p,S,T,"≽","\\succcurlyeq",!0);d(p,S,T,"⋟","\\curlyeqsucc",!0);d(p,S,T,"≿","\\succsim",!0);d(p,S,T,"⪸","\\succapprox",!0);d(p,S,T,"⊳","\\vartriangleright");d(p,S,T,"⊵","\\trianglerighteq");d(p,S,T,"⊩","\\Vdash",!0);d(p,S,T,"∣","\\shortmid");d(p,S,T,"∥","\\shortparallel");d(p,S,T,"≬","\\between",!0);d(p,S,T,"⋔","\\pitchfork",!0);d(p,S,T,"∝","\\varpropto");d(p,S,T,"◀","\\blacktriangleleft");d(p,S,T,"∴","\\therefore",!0);d(p,S,T,"∍","\\backepsilon");d(p,S,T,"▶","\\blacktriangleright");d(p,S,T,"∵","\\because",!0);d(p,S,T,"⋘","\\llless");d(p,S,T,"⋙","\\gggtr");d(p,S,fe,"⊲","\\lhd");d(p,S,fe,"⊳","\\rhd");d(p,S,T,"≂","\\eqsim",!0);d(p,v,T,"⋈","\\Join");d(p,S,T,"≑","\\Doteq",!0);d(p,S,fe,"∔","\\dotplus",!0);d(p,S,fe,"∖","\\smallsetminus");d(p,S,fe,"⋒","\\Cap",!0);d(p,S,fe,"⋓","\\Cup",!0);d(p,S,fe,"⩞","\\doublebarwedge",!0);d(p,S,fe,"⊟","\\boxminus",!0);d(p,S,fe,"⊞","\\boxplus",!0);d(p,S,fe,"⋇","\\divideontimes",!0);d(p,S,fe,"⋉","\\ltimes",!0);d(p,S,fe,"⋊","\\rtimes",!0);d(p,S,fe,"⋋","\\leftthreetimes",!0);d(p,S,fe,"⋌","\\rightthreetimes",!0);d(p,S,fe,"⋏","\\curlywedge",!0);d(p,S,fe,"⋎","\\curlyvee",!0);d(p,S,fe,"⊝","\\circleddash",!0);d(p,S,fe,"⊛","\\circledast",!0);d(p,S,fe,"⋅","\\centerdot");d(p,S,fe,"⊺","\\intercal",!0);d(p,S,fe,"⋒","\\doublecap");d(p,S,fe,"⋓","\\doublecup");d(p,S,fe,"⊠","\\boxtimes",!0);d(p,S,T,"⇢","\\dashrightarrow",!0);d(p,S,T,"⇠","\\dashleftarrow",!0);d(p,S,T,"⇇","\\leftleftarrows",!0);d(p,S,T,"⇆","\\leftrightarrows",!0);d(p,S,T,"⇚","\\Lleftarrow",!0);d(p,S,T,"↞","\\twoheadleftarrow",!0);d(p,S,T,"↢","\\leftarrowtail",!0);d(p,S,T,"↫","\\looparrowleft",!0);d(p,S,T,"⇋","\\leftrightharpoons",!0);d(p,S,T,"↶","\\curvearrowleft",!0);d(p,S,T,"↺","\\circlearrowleft",!0);d(p,S,T,"↰","\\Lsh",!0);d(p,S,T,"⇈","\\upuparrows",!0);d(p,S,T,"↿","\\upharpoonleft",!0);d(p,S,T,"⇃","\\downharpoonleft",!0);d(p,v,T,"⊶","\\origof",!0);d(p,v,T,"⊷","\\imageof",!0);d(p,S,T,"⊸","\\multimap",!0);d(p,S,T,"↭","\\leftrightsquigarrow",!0);d(p,S,T,"⇉","\\rightrightarrows",!0);d(p,S,T,"⇄","\\rightleftarrows",!0);d(p,S,T,"↠","\\twoheadrightarrow",!0);d(p,S,T,"↣","\\rightarrowtail",!0);d(p,S,T,"↬","\\looparrowright",!0);d(p,S,T,"↷","\\curvearrowright",!0);d(p,S,T,"↻","\\circlearrowright",!0);d(p,S,T,"↱","\\Rsh",!0);d(p,S,T,"⇊","\\downdownarrows",!0);d(p,S,T,"↾","\\upharpoonright",!0);d(p,S,T,"⇂","\\downharpoonright",!0);d(p,S,T,"⇝","\\rightsquigarrow",!0);d(p,S,T,"⇝","\\leadsto");d(p,S,T,"⇛","\\Rrightarrow",!0);d(p,S,T,"↾","\\restriction");d(p,v,A,"‘","`");d(p,v,A,"$","\\$");d(Z,v,A,"$","\\$");d(Z,v,A,"$","\\textdollar");d(p,v,A,"%","\\%");d(Z,v,A,"%","\\%");d(p,v,A,"_","\\_");d(Z,v,A,"_","\\_");d(Z,v,A,"_","\\textunderscore");d(p,v,A,"∠","\\angle",!0);d(p,v,A,"∞","\\infty",!0);d(p,v,A,"′","\\prime");d(p,v,A,"△","\\triangle");d(p,v,A,"Γ","\\Gamma",!0);d(p,v,A,"Δ","\\Delta",!0);d(p,v,A,"Θ","\\Theta",!0);d(p,v,A,"Λ","\\Lambda",!0);d(p,v,A,"Ξ","\\Xi",!0);d(p,v,A,"Π","\\Pi",!0);d(p,v,A,"Σ","\\Sigma",!0);d(p,v,A,"Υ","\\Upsilon",!0);d(p,v,A,"Φ","\\Phi",!0);d(p,v,A,"Ψ","\\Psi",!0);d(p,v,A,"Ω","\\Omega",!0);d(p,v,A,"A","Α");d(p,v,A,"B","Β");d(p,v,A,"E","Ε");d(p,v,A,"Z","Ζ");d(p,v,A,"H","Η");d(p,v,A,"I","Ι");d(p,v,A,"K","Κ");d(p,v,A,"M","Μ");d(p,v,A,"N","Ν");d(p,v,A,"O","Ο");d(p,v,A,"P","Ρ");d(p,v,A,"T","Τ");d(p,v,A,"X","Χ");d(p,v,A,"¬","\\neg",!0);d(p,v,A,"¬","\\lnot");d(p,v,A,"⊤","\\top");d(p,v,A,"⊥","\\bot");d(p,v,A,"∅","\\emptyset");d(p,S,A,"∅","\\varnothing");d(p,v,qe,"α","\\alpha",!0);d(p,v,qe,"β","\\beta",!0);d(p,v,qe,"γ","\\gamma",!0);d(p,v,qe,"δ","\\delta",!0);d(p,v,qe,"ϵ","\\epsilon",!0);d(p,v,qe,"ζ","\\zeta",!0);d(p,v,qe,"η","\\eta",!0);d(p,v,qe,"θ","\\theta",!0);d(p,v,qe,"ι","\\iota",!0);d(p,v,qe,"κ","\\kappa",!0);d(p,v,qe,"λ","\\lambda",!0);d(p,v,qe,"μ","\\mu",!0);d(p,v,qe,"ν","\\nu",!0);d(p,v,qe,"ξ","\\xi",!0);d(p,v,qe,"ο","\\omicron",!0);d(p,v,qe,"π","\\pi",!0);d(p,v,qe,"ρ","\\rho",!0);d(p,v,qe,"σ","\\sigma",!0);d(p,v,qe,"τ","\\tau",!0);d(p,v,qe,"υ","\\upsilon",!0);d(p,v,qe,"ϕ","\\phi",!0);d(p,v,qe,"χ","\\chi",!0);d(p,v,qe,"ψ","\\psi",!0);d(p,v,qe,"ω","\\omega",!0);d(p,v,qe,"ε","\\varepsilon",!0);d(p,v,qe,"ϑ","\\vartheta",!0);d(p,v,qe,"ϖ","\\varpi",!0);d(p,v,qe,"ϱ","\\varrho",!0);d(p,v,qe,"ς","\\varsigma",!0);d(p,v,qe,"φ","\\varphi",!0);d(p,v,fe,"∗","*",!0);d(p,v,fe,"+","+");d(p,v,fe,"−","-",!0);d(p,v,fe,"⋅","\\cdot",!0);d(p,v,fe,"∘","\\circ",!0);d(p,v,fe,"÷","\\div",!0);d(p,v,fe,"±","\\pm",!0);d(p,v,fe,"×","\\times",!0);d(p,v,fe,"∩","\\cap",!0);d(p,v,fe,"∪","\\cup",!0);d(p,v,fe,"∖","\\setminus",!0);d(p,v,fe,"∧","\\land");d(p,v,fe,"∨","\\lor");d(p,v,fe,"∧","\\wedge",!0);d(p,v,fe,"∨","\\vee",!0);d(p,v,A,"√","\\surd");d(p,v,Xt,"⟨","\\langle",!0);d(p,v,Xt,"∣","\\lvert");d(p,v,Xt,"∥","\\lVert");d(p,v,Pt,"?","?");d(p,v,Pt,"!","!");d(p,v,Pt,"⟩","\\rangle",!0);d(p,v,Pt,"∣","\\rvert");d(p,v,Pt,"∥","\\rVert");d(p,v,T,"=","=");d(p,v,T,":",":");d(p,v,T,"≈","\\approx",!0);d(p,v,T,"≅","\\cong",!0);d(p,v,T,"≥","\\ge");d(p,v,T,"≥","\\geq",!0);d(p,v,T,"←","\\gets");d(p,v,T,">","\\gt",!0);d(p,v,T,"∈","\\in",!0);d(p,v,T,"","\\@not");d(p,v,T,"⊂","\\subset",!0);d(p,v,T,"⊃","\\supset",!0);d(p,v,T,"⊆","\\subseteq",!0);d(p,v,T,"⊇","\\supseteq",!0);d(p,S,T,"⊈","\\nsubseteq",!0);d(p,S,T,"⊉","\\nsupseteq",!0);d(p,v,T,"⊨","\\models");d(p,v,T,"←","\\leftarrow",!0);d(p,v,T,"≤","\\le");d(p,v,T,"≤","\\leq",!0);d(p,v,T,"<","\\lt",!0);d(p,v,T,"→","\\rightarrow",!0);d(p,v,T,"→","\\to");d(p,S,T,"≱","\\ngeq",!0);d(p,S,T,"≰","\\nleq",!0);d(p,v,Kn," ","\\ ");d(p,v,Kn," ","\\space");d(p,v,Kn," ","\\nobreakspace");d(Z,v,Kn," ","\\ ");d(Z,v,Kn," "," ");d(Z,v,Kn," ","\\space");d(Z,v,Kn," ","\\nobreakspace");d(p,v,Kn,null,"\\nobreak");d(p,v,Kn,null,"\\allowbreak");d(p,v,gs,",",",");d(p,v,gs,";",";");d(p,S,fe,"⊼","\\barwedge",!0);d(p,S,fe,"⊻","\\veebar",!0);d(p,v,fe,"⊙","\\odot",!0);d(p,v,fe,"⊕","\\oplus",!0);d(p,v,fe,"⊗","\\otimes",!0);d(p,v,A,"∂","\\partial",!0);d(p,v,fe,"⊘","\\oslash",!0);d(p,S,fe,"⊚","\\circledcirc",!0);d(p,S,fe,"⊡","\\boxdot",!0);d(p,v,fe,"△","\\bigtriangleup");d(p,v,fe,"▽","\\bigtriangledown");d(p,v,fe,"†","\\dagger");d(p,v,fe,"⋄","\\diamond");d(p,v,fe,"⋆","\\star");d(p,v,fe,"◃","\\triangleleft");d(p,v,fe,"▹","\\triangleright");d(p,v,Xt,"{","\\{");d(Z,v,A,"{","\\{");d(Z,v,A,"{","\\textbraceleft");d(p,v,Pt,"}","\\}");d(Z,v,A,"}","\\}");d(Z,v,A,"}","\\textbraceright");d(p,v,Xt,"{","\\lbrace");d(p,v,Pt,"}","\\rbrace");d(p,v,Xt,"[","\\lbrack",!0);d(Z,v,A,"[","\\lbrack",!0);d(p,v,Pt,"]","\\rbrack",!0);d(Z,v,A,"]","\\rbrack",!0);d(p,v,Xt,"(","\\lparen",!0);d(p,v,Pt,")","\\rparen",!0);d(Z,v,A,"<","\\textless",!0);d(Z,v,A,">","\\textgreater",!0);d(p,v,Xt,"⌊","\\lfloor",!0);d(p,v,Pt,"⌋","\\rfloor",!0);d(p,v,Xt,"⌈","\\lceil",!0);d(p,v,Pt,"⌉","\\rceil",!0);d(p,v,A,"\\","\\backslash");d(p,v,A,"∣","|");d(p,v,A,"∣","\\vert");d(Z,v,A,"|","\\textbar",!0);d(p,v,A,"∥","\\|");d(p,v,A,"∥","\\Vert");d(Z,v,A,"∥","\\textbardbl");d(Z,v,A,"~","\\textasciitilde");d(Z,v,A,"\\","\\textbackslash");d(Z,v,A,"^","\\textasciicircum");d(p,v,T,"↑","\\uparrow",!0);d(p,v,T,"⇑","\\Uparrow",!0);d(p,v,T,"↓","\\downarrow",!0);d(p,v,T,"⇓","\\Downarrow",!0);d(p,v,T,"↕","\\updownarrow",!0);d(p,v,T,"⇕","\\Updownarrow",!0);d(p,v,gt,"∐","\\coprod");d(p,v,gt,"⋁","\\bigvee");d(p,v,gt,"⋀","\\bigwedge");d(p,v,gt,"⨄","\\biguplus");d(p,v,gt,"⋂","\\bigcap");d(p,v,gt,"⋃","\\bigcup");d(p,v,gt,"∫","\\int");d(p,v,gt,"∫","\\intop");d(p,v,gt,"∬","\\iint");d(p,v,gt,"∭","\\iiint");d(p,v,gt,"∏","\\prod");d(p,v,gt,"∑","\\sum");d(p,v,gt,"⨂","\\bigotimes");d(p,v,gt,"⨁","\\bigoplus");d(p,v,gt,"⨀","\\bigodot");d(p,v,gt,"∮","\\oint");d(p,v,gt,"∯","\\oiint");d(p,v,gt,"∰","\\oiiint");d(p,v,gt,"⨆","\\bigsqcup");d(p,v,gt,"∫","\\smallint");d(Z,v,Ei,"…","\\textellipsis");d(p,v,Ei,"…","\\mathellipsis");d(Z,v,Ei,"…","\\ldots",!0);d(p,v,Ei,"…","\\ldots",!0);d(p,v,Ei,"⋯","\\@cdots",!0);d(p,v,Ei,"⋱","\\ddots",!0);d(p,v,A,"⋮","\\varvdots");d(Z,v,A,"⋮","\\varvdots");d(p,v,nt,"ˊ","\\acute");d(p,v,nt,"ˋ","\\grave");d(p,v,nt,"¨","\\ddot");d(p,v,nt,"~","\\tilde");d(p,v,nt,"ˉ","\\bar");d(p,v,nt,"˘","\\breve");d(p,v,nt,"ˇ","\\check");d(p,v,nt,"^","\\hat");d(p,v,nt,"⃗","\\vec");d(p,v,nt,"˙","\\dot");d(p,v,nt,"˚","\\mathring");d(p,v,qe,"","\\@imath");d(p,v,qe,"","\\@jmath");d(p,v,A,"ı","ı");d(p,v,A,"ȷ","ȷ");d(Z,v,A,"ı","\\i",!0);d(Z,v,A,"ȷ","\\j",!0);d(Z,v,A,"ß","\\ss",!0);d(Z,v,A,"æ","\\ae",!0);d(Z,v,A,"œ","\\oe",!0);d(Z,v,A,"ø","\\o",!0);d(Z,v,A,"Æ","\\AE",!0);d(Z,v,A,"Œ","\\OE",!0);d(Z,v,A,"Ø","\\O",!0);d(Z,v,nt,"ˊ","\\'");d(Z,v,nt,"ˋ","\\`");d(Z,v,nt,"ˆ","\\^");d(Z,v,nt,"˜","\\~");d(Z,v,nt,"ˉ","\\=");d(Z,v,nt,"˘","\\u");d(Z,v,nt,"˙","\\.");d(Z,v,nt,"¸","\\c");d(Z,v,nt,"˚","\\r");d(Z,v,nt,"ˇ","\\v");d(Z,v,nt,"¨",'\\"');d(Z,v,nt,"˝","\\H");d(Z,v,nt,"◯","\\textcircled");var em={"--":!0,"---":!0,"``":!0,"''":!0};d(Z,v,A,"–","--",!0);d(Z,v,A,"–","\\textendash");d(Z,v,A,"—","---",!0);d(Z,v,A,"—","\\textemdash");d(Z,v,A,"‘","`",!0);d(Z,v,A,"‘","\\textquoteleft");d(Z,v,A,"’","'",!0);d(Z,v,A,"’","\\textquoteright");d(Z,v,A,"“","``",!0);d(Z,v,A,"“","\\textquotedblleft");d(Z,v,A,"”","''",!0);d(Z,v,A,"”","\\textquotedblright");d(p,v,A,"°","\\degree",!0);d(Z,v,A,"°","\\degree");d(Z,v,A,"°","\\textdegree",!0);d(p,v,A,"£","\\pounds");d(p,v,A,"£","\\mathsterling",!0);d(Z,v,A,"£","\\pounds");d(Z,v,A,"£","\\textsterling",!0);d(p,S,A,"✠","\\maltese");d(Z,S,A,"✠","\\maltese");var id='0123456789/@."';for(var vl=0;vl<id.length;vl++){var od=id.charAt(vl);d(p,v,A,od,od)}var sd='0123456789!@*()-=+";:?/.,';for(var yl=0;yl<sd.length;yl++){var ad=sd.charAt(yl);d(Z,v,A,ad,ad)}var ds="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var xl=0;xl<ds.length;xl++){var J0=ds.charAt(xl);d(p,v,qe,J0,J0),d(Z,v,A,J0,J0)}d(p,S,A,"C","ℂ");d(Z,S,A,"C","ℂ");d(p,S,A,"H","ℍ");d(Z,S,A,"H","ℍ");d(p,S,A,"N","ℕ");d(Z,S,A,"N","ℕ");d(p,S,A,"P","ℙ");d(Z,S,A,"P","ℙ");d(p,S,A,"Q","ℚ");d(Z,S,A,"Q","ℚ");d(p,S,A,"R","ℝ");d(Z,S,A,"R","ℝ");d(p,S,A,"Z","ℤ");d(Z,S,A,"Z","ℤ");d(p,v,qe,"h","ℎ");d(Z,v,qe,"h","ℎ");var je="";for(var Ct=0;Ct<ds.length;Ct++){var lt=ds.charAt(Ct);je=String.fromCharCode(55349,56320+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56372+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56424+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56580+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56684+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56736+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56788+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56840+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56944+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),Ct<26&&(je=String.fromCharCode(55349,56632+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je),je=String.fromCharCode(55349,56476+Ct),d(p,v,qe,lt,je),d(Z,v,A,lt,je))}je="𝕜";d(p,v,qe,"k",je);d(Z,v,A,"k",je);for(var Zr=0;Zr<10;Zr++){var zr=Zr.toString();je=String.fromCharCode(55349,57294+Zr),d(p,v,qe,zr,je),d(Z,v,A,zr,je),je=String.fromCharCode(55349,57314+Zr),d(p,v,qe,zr,je),d(Z,v,A,zr,je),je=String.fromCharCode(55349,57324+Zr),d(p,v,qe,zr,je),d(Z,v,A,zr,je),je=String.fromCharCode(55349,57334+Zr),d(p,v,qe,zr,je),d(Z,v,A,zr,je)}var Pl="ÐÞþ";for(var bl=0;bl<Pl.length;bl++){var es=Pl.charAt(bl);d(p,v,qe,es,es),d(Z,v,A,es,es)}var ts=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],ld=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],kv=function(n,r){var s=n.charCodeAt(0),a=n.charCodeAt(1),u=(s-55296)*1024+(a-56320)+65536,m=r==="math"?0:1;if(119808<=u&&u<120484){var h=Math.floor((u-119808)/26);return[ts[h][2],ts[h][m]]}else if(120782<=u&&u<=120831){var g=Math.floor((u-120782)/10);return[ld[g][2],ld[g][m]]}else{if(u===120485||u===120486)return[ts[0][2],ts[0][m]];if(120486<u&&u<120782)return["",""];throw new re("Unsupported character: "+n)}},vs=function(n,r,s){return Ze[s][n]&&Ze[s][n].replace&&(n=Ze[s][n].replace),{value:n,metrics:Ql(n,r,s)}},Rt=function(n,r,s,a,u){var m=vs(n,r,s),h=m.metrics;n=m.value;var g;if(h){var y=h.italic;(s==="text"||a&&a.font==="mathit")&&(y=0),g=new ln(n,h.height,h.depth,y,h.skew,h.width,u)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+r+"' and mode '"+s+"'")),g=new ln(n,0,0,0,0,0,u);if(a){g.maxFontSize=a.sizeMultiplier,a.style.isTight()&&g.classes.push("mtight");var w=a.getColor();w&&(g.style.color=w)}return g},Xl=function(n,r,s,a){return a===void 0&&(a=[]),s.font==="boldsymbol"&&vs(n,"Main-Bold",r).metrics?Rt(n,"Main-Bold",r,s,a.concat(["mathbf"])):n==="\\"||Ze[r][n].font==="main"?Rt(n,"Main-Regular",r,s,a):Rt(n,"AMS-Regular",r,s,a.concat(["amsrm"]))},zv=function(n,r,s,a,u){return u!=="textord"&&vs(n,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ys=function(n,r,s){var a=n.mode,u=n.text,m=["mord"],h=a==="math"||a==="text"&&r.font,g=h?r.font:r.fontFamily,y="",w="";if(u.charCodeAt(0)===55349&&([y,w]=kv(u,a)),y.length>0)return Rt(u,y,a,r,m.concat(w));if(g){var $,k;if(g==="boldsymbol"){var q=zv(u,a,r,m,s);$=q.fontName,k=[q.fontClass]}else h?($=Dl[g].fontName,k=[g]):($=ns(g,r.fontWeight,r.fontShape),k=[g,r.fontWeight,r.fontShape]);if(vs(u,$,a).metrics)return Rt(u,$,a,r,m.concat(k));if(em.hasOwnProperty(u)&&$.slice(0,10)==="Typewriter"){for(var R=[],E=0;E<u.length;E++)R.push(Rt(u[E],$,a,r,m.concat(k)));return Qn(R)}}if(s==="mathord")return Rt(u,"Math-Italic",a,r,m.concat(["mathnormal"]));if(s==="textord"){var L=Ze[a][u]&&Ze[a][u].font;if(L==="ams"){var P=ns("amsrm",r.fontWeight,r.fontShape);return Rt(u,P,a,r,m.concat("amsrm",r.fontWeight,r.fontShape))}else if(L==="main"||!L){var H=ns("textrm",r.fontWeight,r.fontShape);return Rt(u,H,a,r,m.concat(r.fontWeight,r.fontShape))}else{var W=ns(L,r.fontWeight,r.fontShape);return Rt(u,W,a,r,m.concat(W,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},Sv=(o,n)=>{if(Tr(o.classes)!==Tr(n.classes)||o.skew!==n.skew||o.maxFontSize!==n.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==n.style[s])return!1;for(var a in n.style)if(n.style.hasOwnProperty(a)&&o.style[a]!==n.style[a])return!1;return!0},tm=o=>{for(var n=0;n<o.length-1;n++){var r=o[n],s=o[n+1];r instanceof ln&&s instanceof ln&&Sv(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(n+1,1),n--)}return o},Zl=function(n){for(var r=0,s=0,a=0,u=0;u<n.children.length;u++){var m=n.children[u];m.height>r&&(r=m.height),m.depth>s&&(s=m.depth),m.maxFontSize>a&&(a=m.maxFontSize)}n.height=r,n.depth=s,n.maxFontSize=a},ee=function(n,r,s,a){var u=new Do(n,r,s,a);return Zl(u),u},Mr=(o,n,r,s)=>new Do(o,n,r,s),Ci=function(n,r,s){var a=ee([n],[],r);return a.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=le(a.height),a.maxFontSize=1,a},Tv=function(n,r,s,a){var u=new Yl(n,r,s,a);return Zl(u),u},Qn=function(n){var r=new Po(n);return Zl(r),r},Ri=function(n,r){return n instanceof Po?ee([],[n],r):n},qv=function(n){if(n.positionType==="individualShift"){for(var r=n.children,s=[r[0]],a=-r[0].shift-r[0].elem.depth,u=a,m=1;m<r.length;m++){var h=-r[m].shift-u-r[m].elem.depth,g=h-(r[m-1].elem.height+r[m-1].elem.depth);u=u+h,s.push({type:"kern",size:g}),s.push(r[m])}return{children:s,depth:a}}var y;if(n.positionType==="top"){for(var w=n.positionData,$=0;$<n.children.length;$++){var k=n.children[$];w-=k.type==="kern"?k.size:k.elem.height+k.elem.depth}y=w}else if(n.positionType==="bottom")y=-n.positionData;else{var q=n.children[0];if(q.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")y=-q.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")y=-q.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:y}},Ue=function(n,r){for(var{children:s,depth:a}=qv(n),u=0,m=0;m<s.length;m++){var h=s[m];if(h.type==="elem"){var g=h.elem;u=Math.max(u,g.maxFontSize,g.height)}}u+=2;var y=ee(["pstrut"],[]);y.style.height=le(u);for(var w=[],$=a,k=a,q=a,R=0;R<s.length;R++){var E=s[R];if(E.type==="kern")q+=E.size;else{var L=E.elem,P=E.wrapperClasses||[],H=E.wrapperStyle||{},W=ee(P,[y,L],void 0,H);W.style.top=le(-u-q-L.depth),E.marginLeft&&(W.style.marginLeft=E.marginLeft),E.marginRight&&(W.style.marginRight=E.marginRight),w.push(W),q+=L.height+L.depth}$=Math.min($,q),k=Math.max(k,q)}var N=ee(["vlist"],w);N.style.height=le(k);var F;if($<0){var V=ee([],[]),B=ee(["vlist"],[V]);B.style.height=le(-$);var U=ee(["vlist-s"],[new ln("​")]);F=[ee(["vlist-r"],[N,U]),ee(["vlist-r"],[B])]}else F=[ee(["vlist-r"],[N])];var K=ee(["vlist-t"],F);return F.length===2&&K.classes.push("vlist-t2"),K.height=k,K.depth=-$,K},nm=(o,n)=>{var r=ee(["mspace"],[],n),s=st(o,n);return r.style.marginRight=le(s),r},ns=function(n,r,s){var a="";switch(n){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=n}var u;return r==="textbf"&&s==="textit"?u="BoldItalic":r==="textbf"?u="Bold":r==="textit"?u="Italic":u="Regular",a+"-"+u},Dl={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},rm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},im=function(n,r){var[s,a,u]=rm[n],m=new qr(s),h=new Un([m],{width:le(a),height:le(u),style:"width:"+le(a),viewBox:"0 0 "+1e3*a+" "+1e3*u,preserveAspectRatio:"xMinYMin"}),g=Mr(["overlay"],[h],r);return g.height=u,g.style.height=le(u),g.style.width=le(a),g},ot={number:3,unit:"mu"},Jr={number:4,unit:"mu"},Hn={number:5,unit:"mu"},Mv={mord:{mop:ot,mbin:Jr,mrel:Hn,minner:ot},mop:{mord:ot,mop:ot,mrel:Hn,minner:ot},mbin:{mord:Jr,mop:Jr,mopen:Jr,minner:Jr},mrel:{mord:Hn,mop:Hn,mopen:Hn,minner:Hn},mopen:{},mclose:{mop:ot,mbin:Jr,mrel:Hn,minner:ot},mpunct:{mord:ot,mop:ot,mrel:Hn,mopen:ot,mclose:ot,mpunct:ot,minner:ot},minner:{mord:ot,mop:ot,mbin:Jr,mrel:Hn,mopen:ot,mpunct:ot,minner:ot}},jv={mord:{mop:ot},mop:{mord:ot,mop:ot},mbin:{},mrel:{},mopen:{},mclose:{mop:ot},mpunct:{},minner:{mop:ot}},om={},ms={},fs={};function de(o){for(var{type:n,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:m}=o,h={type:n,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:a},g=0;g<r.length;++g)om[r[g]]=h;n&&(u&&(ms[n]=u),m&&(fs[n]=m))}function ti(o){var{type:n,htmlBuilder:r,mathmlBuilder:s}=o;de({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var ps=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},dt=function(n){return n.type==="ordgroup"?n.body:[n]},Av=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Cv=new Set(["rightmost","mrel","mclose","mpunct"]),Rv={display:Ce.DISPLAY,text:Ce.TEXT,script:Ce.SCRIPT,scriptscript:Ce.SCRIPTSCRIPT},Ev={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},xt=function(n,r,s,a){a===void 0&&(a=[null,null]);for(var u=[],m=0;m<n.length;m++){var h=Oe(n[m],r);if(h instanceof Po){var g=h.children;u.push(...g)}else u.push(h)}if(tm(u),!s)return u;var y=r;if(n.length===1){var w=n[0];w.type==="sizing"?y=r.havingSize(w.size):w.type==="styling"&&(y=r.havingStyle(Rv[w.style]))}var $=ee([a[0]||"leftmost"],[],r),k=ee([a[1]||"rightmost"],[],r),q=s==="root";return ud(u,(R,E)=>{var L=E.classes[0],P=R.classes[0];L==="mbin"&&Cv.has(P)?E.classes[0]="mord":P==="mbin"&&Av.has(L)&&(R.classes[0]="mord")},{node:$},k,q),ud(u,(R,E)=>{var L=Nl(E),P=Nl(R),H=L&&P?R.hasClass("mtight")?jv[L][P]:Mv[L][P]:null;if(H)return nm(H,y)},{node:$},k,q),u},ud=function o(n,r,s,a,u){a&&n.push(a);for(var m=0;m<n.length;m++){var h=n[m],g=sm(h);if(g){o(g.children,r,s,null,u);continue}var y=!h.hasClass("mspace");if(y){var w=r(h,s.node);w&&(s.insertAfter?s.insertAfter(w):(n.unshift(w),m++))}y?s.node=h:u&&h.hasClass("newline")&&(s.node=ee(["leftmost"])),s.insertAfter=($=>k=>{n.splice($+1,0,k),m++})(m)}a&&n.pop()},sm=function(n){return n instanceof Po||n instanceof Yl||n instanceof Do&&n.hasClass("enclosing")?n:null},Pv=function o(n,r){var s=sm(n);if(s){var a=s.children;if(a.length){if(r==="right")return o(a[a.length-1],"right");if(r==="left")return o(a[0],"left")}}return n},Nl=function(n,r){return n?(r&&(n=Pv(n,r)),Ev[n.classes[0]]||null):null},Ro=function(n,r){var s=["nulldelimiter"].concat(n.baseSizingClasses());return ee(r.concat(s))},Oe=function(n,r,s){if(!n)return ee();if(ms[n.type]){var a=ms[n.type](n,r);if(s&&r.size!==s.size){a=ee(r.sizingClasses(s),[a],r);var u=r.sizeMultiplier/s.sizeMultiplier;a.height*=u,a.depth*=u}return a}else throw new re("Got group of unknown type: '"+n.type+"'")};function rs(o,n){var r=ee(["base"],o,n),s=ee(["strut"]);return s.style.height=le(r.height+r.depth),r.depth&&(s.style.verticalAlign=le(-r.depth)),r.children.unshift(s),r}function Bl(o,n){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=xt(o,n,"root"),a;s.length===2&&s[1].hasClass("tag")&&(a=s.pop());for(var u=[],m=[],h=0;h<s.length;h++)if(m.push(s[h]),s[h].hasClass("mbin")||s[h].hasClass("mrel")||s[h].hasClass("allowbreak")){for(var g=!1;h<s.length-1&&s[h+1].hasClass("mspace")&&!s[h+1].hasClass("newline");)h++,m.push(s[h]),s[h].hasClass("nobreak")&&(g=!0);g||(u.push(rs(m,n)),m=[])}else s[h].hasClass("newline")&&(m.pop(),m.length>0&&(u.push(rs(m,n)),m=[]),u.push(s[h]));m.length>0&&u.push(rs(m,n));var y;r?(y=rs(xt(r,n,!0)),y.classes=["tag"],u.push(y)):a&&u.push(a);var w=ee(["katex-html"],u);if(w.setAttribute("aria-hidden","true"),y){var $=y.children[0];$.style.height=le(w.height+w.depth),w.depth&&($.style.verticalAlign=le(-w.depth))}return w}function am(o){return new Po(o)}class ie{constructor(n,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(n,r){this.attributes[n]=r}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&n.setAttribute(r,this.attributes[r]);this.classes.length>0&&(n.className=Tr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof ht&&this.children[s+1]instanceof ht){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof ht;)a+=this.children[++s].toText();n.appendChild(new ht(a).toNode())}else n.appendChild(this.children[s].toNode());return n}toMarkup(){var n="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(n+=" "+r+'="',n+=Mt(this.attributes[r]),n+='"');this.classes.length>0&&(n+=' class ="'+Mt(Tr(this.classes))+'"'),n+=">";for(var s=0;s<this.children.length;s++)n+=this.children[s].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class ht{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return Mt(this.toText())}toText(){return this.text}}class lm{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",le(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+le(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Dv=new Set(["\\imath","\\jmath"]),Nv=new Set(["mrow","mtable"]),un=function(n,r,s){return Ze[r][n]&&Ze[r][n].replace&&n.charCodeAt(0)!==55349&&!(em.hasOwnProperty(n)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(n=Ze[r][n].replace),new ht(n)},Jl=function(n){return n.length===1?n[0]:new ie("mrow",n)},eu=function(n,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var a=n.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var u=n.text;if(Dv.has(u))return null;Ze[a][u]&&Ze[a][u].replace&&(u=Ze[a][u].replace);var m=Dl[s].fontName;return Ql(u,m,a)?Dl[s].variant:null};function wl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var n=o.children[0];return n instanceof ht&&n.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof ht&&r.text===","}else return!1}var Ht=function(n,r,s){if(n.length===1){var a=Ye(n[0],r);return s&&a instanceof ie&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var u=[],m,h=0;h<n.length;h++){var g=Ye(n[h],r);if(g instanceof ie&&m instanceof ie){if(g.type==="mtext"&&m.type==="mtext"&&g.getAttribute("mathvariant")===m.getAttribute("mathvariant")){m.children.push(...g.children);continue}else if(g.type==="mn"&&m.type==="mn"){m.children.push(...g.children);continue}else if(wl(g)&&m.type==="mn"){m.children.push(...g.children);continue}else if(g.type==="mn"&&wl(m))g.children=[...m.children,...g.children],u.pop();else if((g.type==="msup"||g.type==="msub")&&g.children.length>=1&&(m.type==="mn"||wl(m))){var y=g.children[0];y instanceof ie&&y.type==="mn"&&(y.children=[...m.children,...y.children],u.pop())}else if(m.type==="mi"&&m.children.length===1){var w=m.children[0];if(w instanceof ht&&w.text==="̸"&&(g.type==="mo"||g.type==="mi"||g.type==="mn")){var $=g.children[0];$ instanceof ht&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),u.pop())}}}u.push(g),m=g}return u},jr=function(n,r,s){return Jl(Ht(n,r,s))},Ye=function(n,r){if(!n)return new ie("mrow");if(fs[n.type]){var s=fs[n.type](n,r);return s}else throw new re("Got group of unknown type: '"+n.type+"'")};function cd(o,n,r,s,a){var u=Ht(o,r),m;u.length===1&&u[0]instanceof ie&&Nv.has(u[0].type)?m=u[0]:m=new ie("mrow",u);var h=new ie("annotation",[new ht(n)]);h.setAttribute("encoding","application/x-tex");var g=new ie("semantics",[m,h]),y=new ie("math",[g]);y.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&y.setAttribute("display","block");var w=a?"katex":"katex-mathml";return ee([w],[y])}var um=function(n){return new Gn({style:n.displayMode?Ce.DISPLAY:Ce.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},cm=function(n,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),n=ee(s,[n])}return n},Bv=function(n,r,s){var a=um(s),u;if(s.output==="mathml")return cd(n,r,a,s.displayMode,!0);if(s.output==="html"){var m=Bl(n,a);u=ee(["katex"],[m])}else{var h=cd(n,r,a,s.displayMode,!1),g=Bl(n,a);u=ee(["katex"],[h,g])}return cm(u,s)},Iv=function(n,r,s){var a=um(s),u=Bl(n,a),m=ee(["katex"],[u]);return cm(m,s)},Fv={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},xs=function(n){var r=new ie("mo",[new ht(Fv[n.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Lv={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},Ov=new Set(["widehat","widecheck","widetilde","utilde"]),bs=function(n,r){function s(){var h=4e5,g=n.label.slice(1);if(Ov.has(g)){var y=n,w=y.base.type==="ordgroup"?y.base.body.length:1,$,k,q;if(w>5)g==="widehat"||g==="widecheck"?($=420,h=2364,q=.42,k=g+"4"):($=312,h=2340,q=.34,k="tilde4");else{var R=[1,1,2,2,3,3][w];g==="widehat"||g==="widecheck"?(h=[0,1062,2364,2364,2364][R],$=[0,239,300,360,420][R],q=[0,.24,.3,.3,.36,.42][R],k=g+R):(h=[0,600,1033,2339,2340][R],$=[0,260,286,306,312][R],q=[0,.26,.286,.3,.306,.34][R],k="tilde"+R)}var E=new qr(k),L=new Un([E],{width:"100%",height:le(q),viewBox:"0 0 "+h+" "+$,preserveAspectRatio:"none"});return{span:Mr([],[L],r),minWidth:0,height:q}}else{var P=[],H=Lv[g],[W,N,F]=H,V=F/1e3,B=W.length,U,K;if(B===1){var be=H[3];U=["hide-tail"],K=[be]}else if(B===2)U=["halfarrow-left","halfarrow-right"],K=["xMinYMin","xMaxYMin"];else if(B===3)U=["brace-left","brace-center","brace-right"],K=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+B+" children.");for(var ve=0;ve<B;ve++){var ue=new qr(W[ve]),ye=new Un([ue],{width:"400em",height:le(V),viewBox:"0 0 "+h+" "+F,preserveAspectRatio:K[ve]+" slice"}),$e=Mr([U[ve]],[ye],r);if(B===1)return{span:$e,minWidth:N,height:V};$e.style.height=le(V),P.push($e)}return{span:ee(["stretchy"],P,r),minWidth:N,height:V}}}var{span:a,minWidth:u,height:m}=s();return a.height=m,a.style.height=le(m),u>0&&(a.style.minWidth=le(u)),a},Hv=function(n,r,s,a,u){var m,h=n.height+n.depth+s+a;if(/fbox|color|angl/.test(r)){if(m=ee(["stretchy",r],[],u),r==="fbox"){var g=u.color&&u.getColor();g&&(m.style.borderColor=g)}}else{var y=[];/^[bx]cancel$/.test(r)&&y.push(new El({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&y.push(new El({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var w=new Un(y,{width:"100%",height:le(h)});m=Mr([],[w],u)}return m.height=h,m.style.height=le(h),m};function Re(o,n){if(!o||o.type!==n)throw new Error("Expected node of type "+n+", but got "+(o?"node of type "+o.type:String(o)));return o}function tu(o){var n=ws(o);if(!n)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return n}function ws(o){return o&&(o.type==="atom"||$v.hasOwnProperty(o.type))?o:null}var nu=(o,n)=>{var r,s,a;o&&o.type==="supsub"?(s=Re(o.base,"accent"),r=s.base,o.base=r,a=wv(Oe(o,n)),o.base=s):(s=Re(o,"accent"),r=s.base);var u=Oe(r,n.havingCrampedStyle()),m=s.isShifty&&Vn(r),h=0;if(m){var g=Mo(r),y=Oe(g,n.havingCrampedStyle());h=rd(y).skew}var w=s.label==="\\c",$=w?u.height+u.depth:Math.min(u.height,n.fontMetrics().xHeight),k;if(s.isStretchy)k=bs(s,n),k=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"elem",elem:k,wrapperClasses:["svg-align"],wrapperStyle:h>0?{width:"calc(100% - "+le(2*h)+")",marginLeft:le(2*h)}:void 0}]});else{var q,R;s.label==="\\vec"?(q=im("vec",n),R=rm.vec[1]):(q=ys({mode:s.mode,text:s.label},n,"textord"),q=rd(q),q.italic=0,R=q.width,w&&($+=q.depth)),k=ee(["accent-body"],[q]);var E=s.label==="\\textcircled";E&&(k.classes.push("accent-full"),$=u.height);var L=h;E||(L-=R/2),k.style.left=le(L),s.label==="\\textcircled"&&(k.style.top=".2em"),k=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:-$},{type:"elem",elem:k}]})}var P=ee(["mord","accent"],[k],n);return a?(a.children[0]=P,a.height=Math.max(P.height,a.height),a.classes[0]="mord",a):P},dm=(o,n)=>{var r=o.isStretchy?xs(o.label):new ie("mo",[un(o.label,o.mode)]),s=new ie("mover",[Ye(o.base,n),r]);return s.setAttribute("accent","true"),s},Gv=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));de({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,n)=>{var r=ps(n[0]),s=!Gv.test(o.funcName),a=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:a,base:r}},htmlBuilder:nu,mathmlBuilder:dm});de({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,n)=>{var r=n[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:nu,mathmlBuilder:dm});de({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0];return{type:"accentUnder",mode:r.mode,label:s,base:a}},htmlBuilder:(o,n)=>{var r=Oe(o.base,n),s=bs(o,n),a=o.label==="\\utilde"?.12:0,u=Ue({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return ee(["mord","accentunder"],[u],n)},mathmlBuilder:(o,n)=>{var r=xs(o.label),s=new ie("munder",[Ye(o.base,n),r]);return s.setAttribute("accentunder","true"),s}});var is=o=>{var n=new ie("mpadded",o?[o]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};de({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s,funcName:a}=o;return{type:"xArrow",mode:s.mode,label:a,body:n[0],below:r[0]}},htmlBuilder(o,n){var r=n.style,s=n.havingStyle(r.sup()),a=Ri(Oe(o.body,s,n),n),u=o.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(u+"-arrow-pad");var m;o.below&&(s=n.havingStyle(r.sub()),m=Ri(Oe(o.below,s,n),n),m.classes.push(u+"-arrow-pad"));var h=bs(o,n),g=-n.fontMetrics().axisHeight+.5*h.height,y=-n.fontMetrics().axisHeight-.5*h.height-.111;(a.depth>.25||o.label==="\\xleftequilibrium")&&(y-=a.depth);var w;if(m){var $=-n.fontMetrics().axisHeight+m.height+.5*h.height+.111;w=Ue({positionType:"individualShift",children:[{type:"elem",elem:a,shift:y},{type:"elem",elem:h,shift:g},{type:"elem",elem:m,shift:$}]})}else w=Ue({positionType:"individualShift",children:[{type:"elem",elem:a,shift:y},{type:"elem",elem:h,shift:g}]});return w.children[0].children[0].children[1].classes.push("svg-align"),ee(["mrel","x-arrow"],[w],n)},mathmlBuilder(o,n){var r=xs(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var a=is(Ye(o.body,n));if(o.below){var u=is(Ye(o.below,n));s=new ie("munderover",[r,u,a])}else s=new ie("mover",[r,a])}else if(o.below){var m=is(Ye(o.below,n));s=new ie("munder",[r,m])}else s=is(),s=new ie("mover",[r,s]);return s}});function mm(o,n){var r=xt(o.body,n,!0);return ee([o.mclass],r,n)}function fm(o,n){var r,s=Ht(o.body,n);return o.mclass==="minner"?r=new ie("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new ie("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new ie("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}de({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:dt(a),isCharacterBox:Vn(a)}},htmlBuilder:mm,mathmlBuilder:fm});var _s=o=>{var n=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};de({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,n){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:_s(n[0]),body:dt(n[1]),isCharacterBox:Vn(n[1])}}});de({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,n){var{parser:r,funcName:s}=o,a=n[1],u=n[0],m;s!=="\\stackrel"?m=_s(a):m="mrel";var h={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:dt(a)},g={type:"supsub",mode:u.mode,base:h,sup:s==="\\underset"?null:u,sub:s==="\\underset"?u:null};return{type:"mclass",mode:r.mode,mclass:m,body:[g],isCharacterBox:Vn(g)}},htmlBuilder:mm,mathmlBuilder:fm});de({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:_s(n[0]),body:dt(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!0),s=ee([o.mclass],r,n);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,n){var r=Ht(o.body,n),s=new ie("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var Wv={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},dd=()=>({type:"styling",body:[],mode:"math",style:"display"}),md=o=>o.type==="textord"&&o.text==="@",Uv=(o,n)=>(o.type==="mathord"||o.type==="atom")&&o.text===n;function Vv(o,n,r){var s=Wv[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[n[0]],[]),u={type:"atom",text:s,mode:"math",family:"rel"},m=r.callFunction("\\Big",[u],[]),h=r.callFunction("\\\\cdright",[n[1]],[]),g={type:"ordgroup",mode:"math",body:[a,m,h]};return r.callFunction("\\\\cdparent",[g],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var y={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[y],[])}default:return{type:"textord",text:" ",mode:"math"}}}function Kv(o){var n=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){n.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new re("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],a=[s],u=0;u<n.length;u++){for(var m=n[u],h=dd(),g=0;g<m.length;g++)if(!md(m[g]))h.body.push(m[g]);else{s.push(h),g+=1;var y=tu(m[g]).text,w=new Array(2);if(w[0]={type:"ordgroup",mode:"math",body:[]},w[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(y))if("<>AV".includes(y))for(var $=0;$<2;$++){for(var k=!0,q=g+1;q<m.length;q++){if(Uv(m[q],y)){k=!1,g=q;break}if(md(m[q]))throw new re("Missing a "+y+" character to complete a CD arrow.",m[q]);w[$].body.push(m[q])}if(k)throw new re("Missing a "+y+" character to complete a CD arrow.",m[g])}else throw new re('Expected one of "<>AV=|." after @',m[g]);var R=Vv(y,w,o),E={type:"styling",body:[R],mode:"math",style:"display"};s.push(E),h=dd()}u%2===0?s.push(h):s.shift(),s=[],a.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var L=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:L,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}de({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:n[0]}},htmlBuilder(o,n){var r=n.havingStyle(n.style.sup()),s=Ri(Oe(o.label,r,n),n);return s.classes.push("cd-label-"+o.side),s.style.bottom=le(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,n){var r=new ie("mrow",[Ye(o.label,n)]);return r=new ie("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new ie("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});de({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,n){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:n[0]}},htmlBuilder(o,n){var r=Ri(Oe(o.fragment,n),n);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,n){return new ie("mrow",[Ye(o.fragment,n)])}});de({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,n){for(var{parser:r}=o,s=Re(n[0],"ordgroup"),a=s.body,u="",m=0;m<a.length;m++){var h=Re(a[m],"textord");u+=h.text}var g=parseInt(u),y;if(isNaN(g))throw new re("\\@char has non-numeric argument "+u);if(g<0||g>=1114111)throw new re("\\@char with invalid code point "+u);return g<=65535?y=String.fromCharCode(g):(g-=65536,y=String.fromCharCode((g>>10)+55296,(g&1023)+56320)),{type:"textord",mode:r.mode,text:y}}});var pm=(o,n)=>{var r=xt(o.body,n.withColor(o.color),!1);return Qn(r)},hm=(o,n)=>{var r=Ht(o.body,n.withColor(o.color)),s=new ie("mstyle",r);return s.setAttribute("mathcolor",o.color),s};de({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,n){var{parser:r}=o,s=Re(n[0],"color-token").color,a=n[1];return{type:"color",mode:r.mode,color:s,body:dt(a)}},htmlBuilder:pm,mathmlBuilder:hm});de({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,n){var{parser:r,breakOnTokenText:s}=o,a=Re(n[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var u=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:a,body:u}},htmlBuilder:pm,mathmlBuilder:hm});de({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,n,r){var{parser:s}=o,a=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,u=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:u,size:a&&Re(a,"size").value}},htmlBuilder(o,n){var r=ee(["mspace"],[],n);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=le(st(o.size,n)))),r},mathmlBuilder(o,n){var r=new ie("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",le(st(o.size,n)))),r}});var Il={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},gm=o=>{var n=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new re("Expected a control sequence",o);return n},Qv=o=>{var n=o.gullet.popToken();return n.text==="="&&(n=o.gullet.popToken(),n.text===" "&&(n=o.gullet.popToken())),n},vm=(o,n,r,s)=>{var a=o.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(n,a,s)};de({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:n,funcName:r}=o;n.consumeSpaces();var s=n.fetch();if(Il[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Il[s.text]),Re(n.parseFunction(),"internal");throw new re("Invalid token after macro prefix",s)}});de({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=n.gullet.popToken(),a=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new re("Expected a control sequence",s);for(var u=0,m,h=[[]];n.gullet.future().text!=="{";)if(s=n.gullet.popToken(),s.text==="#"){if(n.gullet.future().text==="{"){m=n.gullet.future(),h[u].push("{");break}if(s=n.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new re('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==u+1)throw new re('Argument number "'+s.text+'" out of order');u++,h.push([])}else{if(s.text==="EOF")throw new re("Expected a macro definition");h[u].push(s.text)}var{tokens:g}=n.gullet.consumeArg();return m&&g.unshift(m),(r==="\\edef"||r==="\\xdef")&&(g=n.gullet.expandTokens(g),g.reverse()),n.gullet.macros.set(a,{tokens:g,numArgs:u,delimiters:h},r===Il[r]),{type:"internal",mode:n.mode}}});de({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=gm(n.gullet.popToken());n.gullet.consumeSpaces();var a=Qv(n);return vm(n,s,a,r==="\\\\globallet"),{type:"internal",mode:n.mode}}});de({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:n,funcName:r}=o,s=gm(n.gullet.popToken()),a=n.gullet.popToken(),u=n.gullet.popToken();return vm(n,s,u,r==="\\\\globalfuture"),n.gullet.pushToken(u),n.gullet.pushToken(a),{type:"internal",mode:n.mode}}});var qo=function(n,r,s){var a=Ze.math[n]&&Ze.math[n].replace,u=Ql(a||n,r,s);if(!u)throw new Error("Unsupported symbol "+n+" and font size "+r+".");return u},ru=function(n,r,s,a){var u=s.havingBaseStyle(r),m=ee(a.concat(u.sizingClasses(s)),[n],s),h=u.sizeMultiplier/s.sizeMultiplier;return m.height*=h,m.depth*=h,m.maxFontSize=u.sizeMultiplier,m},ym=function(n,r,s){var a=r.havingBaseStyle(s),u=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=le(u),n.height-=u,n.depth+=u},Yv=function(n,r,s,a,u,m){var h=Rt(n,"Main-Regular",u,a),g=ru(h,r,a,m);return ym(g,a,r),g},Xv=function(n,r,s,a){return Rt(n,"Size"+r+"-Regular",s,a)},xm=function(n,r,s,a,u,m){var h=Xv(n,r,u,a),g=ru(ee(["delimsizing","size"+r],[h],a),Ce.TEXT,a,m);return s&&ym(g,a,Ce.TEXT),g},_l=function(n,r,s){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var u=ee(["delimsizinginner",a],[ee([],[Rt(n,r,s)])]);return{type:"elem",elem:u}},$l=function(n,r,s){var a=zn["Size4-Regular"][n.charCodeAt(0)]?zn["Size4-Regular"][n.charCodeAt(0)][4]:zn["Size1-Regular"][n.charCodeAt(0)][4],u=new qr("inner",mv(n,Math.round(1e3*r))),m=new Un([u],{width:le(a),height:le(r),style:"width:"+le(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),h=Mr([],[m],s);return h.height=r,h.style.height=le(r),h.style.width=le(a),{type:"elem",elem:h}},Fl=.008,os={type:"kern",size:-1*Fl},Zv=new Set(["|","\\lvert","\\rvert","\\vert"]),Jv=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),bm=function(n,r,s,a,u,m){var h,g,y,w,$="",k=0;h=y=w=n,g=null;var q="Size1-Regular";n==="\\uparrow"?y=w="⏐":n==="\\Uparrow"?y=w="‖":n==="\\downarrow"?h=y="⏐":n==="\\Downarrow"?h=y="‖":n==="\\updownarrow"?(h="\\uparrow",y="⏐",w="\\downarrow"):n==="\\Updownarrow"?(h="\\Uparrow",y="‖",w="\\Downarrow"):Zv.has(n)?(y="∣",$="vert",k=333):Jv.has(n)?(y="∥",$="doublevert",k=556):n==="["||n==="\\lbrack"?(h="⎡",y="⎢",w="⎣",q="Size4-Regular",$="lbrack",k=667):n==="]"||n==="\\rbrack"?(h="⎤",y="⎥",w="⎦",q="Size4-Regular",$="rbrack",k=667):n==="\\lfloor"||n==="⌊"?(y=h="⎢",w="⎣",q="Size4-Regular",$="lfloor",k=667):n==="\\lceil"||n==="⌈"?(h="⎡",y=w="⎢",q="Size4-Regular",$="lceil",k=667):n==="\\rfloor"||n==="⌋"?(y=h="⎥",w="⎦",q="Size4-Regular",$="rfloor",k=667):n==="\\rceil"||n==="⌉"?(h="⎤",y=w="⎥",q="Size4-Regular",$="rceil",k=667):n==="("||n==="\\lparen"?(h="⎛",y="⎜",w="⎝",q="Size4-Regular",$="lparen",k=875):n===")"||n==="\\rparen"?(h="⎞",y="⎟",w="⎠",q="Size4-Regular",$="rparen",k=875):n==="\\{"||n==="\\lbrace"?(h="⎧",g="⎨",w="⎩",y="⎪",q="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(h="⎫",g="⎬",w="⎭",y="⎪",q="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(h="⎧",w="⎩",y="⎪",q="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(h="⎫",w="⎭",y="⎪",q="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(h="⎧",w="⎭",y="⎪",q="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(h="⎫",w="⎩",y="⎪",q="Size4-Regular");var R=qo(h,q,u),E=R.height+R.depth,L=qo(y,q,u),P=L.height+L.depth,H=qo(w,q,u),W=H.height+H.depth,N=0,F=1;if(g!==null){var V=qo(g,q,u);N=V.height+V.depth,F=2}var B=E+W+N,U=Math.max(0,Math.ceil((r-B)/(F*P))),K=B+U*F*P,be=a.fontMetrics().axisHeight;s&&(be*=a.sizeMultiplier);var ve=K/2-be,ue=[];if($.length>0){var ye=K-E-W,$e=Math.round(K*1e3),He=fv($,Math.round(ye*1e3)),Qe=new qr($,He),Fe=(k/1e3).toFixed(3)+"em",ae=($e/1e3).toFixed(3)+"em",_e=new Un([Qe],{width:Fe,height:ae,viewBox:"0 0 "+k+" "+$e}),ce=Mr([],[_e],a);ce.height=$e/1e3,ce.style.width=Fe,ce.style.height=ae,ue.push({type:"elem",elem:ce})}else{if(ue.push(_l(w,q,u)),ue.push(os),g===null){var j=K-E-W+2*Fl;ue.push($l(y,j,a))}else{var G=(K-E-W-N)/2+2*Fl;ue.push($l(y,G,a)),ue.push(os),ue.push(_l(g,q,u)),ue.push(os),ue.push($l(y,G,a))}ue.push(os),ue.push(_l(h,q,u))}var he=a.havingBaseStyle(Ce.TEXT),ze=Ue({positionType:"bottom",positionData:ve,children:ue});return ru(ee(["delimsizing","mult"],[ze],he),Ce.TEXT,a,m)},kl=80,zl=.08,Sl=function(n,r,s,a,u){var m=dv(n,a,s),h=new qr(n,m),g=new Un([h],{width:"400em",height:le(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Mr(["hide-tail"],[g],u)},e8=function(n,r){var s=r.havingBaseSizing(),a=zm("\\surd",n*s.sizeMultiplier,km,s),u=s.sizeMultiplier,m=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),h,g=0,y=0,w=0,$;return a.type==="small"?(w=1e3+1e3*m+kl,n<1?u=1:n<1.4&&(u=.7),g=(1+m+zl)/u,y=(1+m)/u,h=Sl("sqrtMain",g,w,m,r),h.style.minWidth="0.853em",$=.833/u):a.type==="large"?(w=(1e3+kl)*jo[a.size],y=(jo[a.size]+m)/u,g=(jo[a.size]+m+zl)/u,h=Sl("sqrtSize"+a.size,g,w,m,r),h.style.minWidth="1.02em",$=1/u):(g=n+m+zl,y=n+m,w=Math.floor(1e3*n+m)+kl,h=Sl("sqrtTall",g,w,m,r),h.style.minWidth="0.742em",$=1.056),h.height=y,h.style.height=le(g),{span:h,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+m)*u}},wm=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),t8=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),_m=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),jo=[0,1.2,1.8,2.4,3],$m=function(n,r,s,a,u){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),wm.has(n)||_m.has(n))return xm(n,r,!1,s,a,u);if(t8.has(n))return bm(n,jo[r],!1,s,a,u);throw new re("Illegal delimiter: '"+n+"'")},n8=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],r8=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"stack"}],km=[{type:"small",style:Ce.SCRIPTSCRIPT},{type:"small",style:Ce.SCRIPT},{type:"small",style:Ce.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],i8=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},zm=function(n,r,s,a){for(var u=Math.min(2,3-a.style.size),m=u;m<s.length&&s[m].type!=="stack";m++){var h=qo(n,i8(s[m]),"math"),g=h.height+h.depth;if(s[m].type==="small"){var y=a.havingBaseStyle(s[m].style);g*=y.sizeMultiplier}if(g>r)return s[m]}return s[s.length-1]},Ll=function(n,r,s,a,u,m){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var h;_m.has(n)?h=n8:wm.has(n)?h=km:h=r8;var g=zm(n,r,h,a);return g.type==="small"?Yv(n,g.style,s,a,u,m):g.type==="large"?xm(n,g.size,s,a,u,m):bm(n,r,s,a,u,m)},Tl=function(n,r,s,a,u,m){var h=a.fontMetrics().axisHeight*a.sizeMultiplier,g=901,y=5/a.fontMetrics().ptPerEm,w=Math.max(r-h,s+h),$=Math.max(w/500*g,2*w-y);return Ll(n,$,!0,a,u,m)},fd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},o8=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function $s(o,n){var r=ws(o);if(r&&o8.has(r.text))return r;throw r?new re("Invalid delimiter '"+r.text+"' after '"+n.funcName+"'",o):new re("Invalid delimiter type '"+o.type+"'",o)}de({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,n)=>{var r=$s(n[0],o);return{type:"delimsizing",mode:o.parser.mode,size:fd[o.funcName].size,mclass:fd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,n)=>o.delim==="."?ee([o.mclass]):$m(o.delim,o.size,n,o.mode,[o.mclass]),mathmlBuilder:o=>{var n=[];o.delim!=="."&&n.push(un(o.delim,o.mode));var r=new ie("mo",n);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=le(jo[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function pd(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}de({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new re("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:$s(n[0],o).text,color:r}}});de({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=$s(n[0],o),s=o.parser;++s.leftrightDepth;var a=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var u=Re(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:a,left:r.text,right:u.delim,rightColor:u.color}},htmlBuilder:(o,n)=>{pd(o);for(var r=xt(o.body,n,!0,["mopen","mclose"]),s=0,a=0,u=!1,m=0;m<r.length;m++)r[m].isMiddle?u=!0:(s=Math.max(r[m].height,s),a=Math.max(r[m].depth,a));s*=n.sizeMultiplier,a*=n.sizeMultiplier;var h;if(o.left==="."?h=Ro(n,["mopen"]):h=Tl(o.left,s,a,n,o.mode,["mopen"]),r.unshift(h),u)for(var g=1;g<r.length;g++){var y=r[g],w=y.isMiddle;w&&(r[g]=Tl(w.delim,s,a,w.options,o.mode,[]))}var $;if(o.right===".")$=Ro(n,["mclose"]);else{var k=o.rightColor?n.withColor(o.rightColor):n;$=Tl(o.right,s,a,k,o.mode,["mclose"])}return r.push($),ee(["minner"],r,n)},mathmlBuilder:(o,n)=>{pd(o);var r=Ht(o.body,n);if(o.left!=="."){var s=new ie("mo",[un(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var a=new ie("mo",[un(o.right,o.mode)]);a.setAttribute("fence","true"),o.rightColor&&a.setAttribute("mathcolor",o.rightColor),r.push(a)}return Jl(r)}});de({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var r=$s(n[0],o);if(!o.parser.leftrightDepth)throw new re("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,n)=>{var r;if(o.delim===".")r=Ro(n,[]);else{r=$m(o.delim,1,n,o.mode,[]);var s={delim:o.delim,options:n};r.isMiddle=s}return r},mathmlBuilder:(o,n)=>{var r=o.delim==="\\vert"||o.delim==="|"?un("|","text"):un(o.delim,o.mode),s=new ie("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var iu=(o,n)=>{var r=Ri(Oe(o.body,n),n),s=o.label.slice(1),a=n.sizeMultiplier,u,m=0,h=Vn(o.body);if(s==="sout")u=ee(["stretchy","sout"]),u.height=n.fontMetrics().defaultRuleThickness/a,m=-.5*n.fontMetrics().xHeight;else if(s==="phase"){var g=st({number:.6,unit:"pt"},n),y=st({number:.35,unit:"ex"},n),w=n.havingBaseSizing();a=a/w.sizeMultiplier;var $=r.height+r.depth+g+y;r.style.paddingLeft=le($/2+g);var k=Math.floor(1e3*$*a),q=uv(k),R=new Un([new qr("phase",q)],{width:"400em",height:le(k/1e3),viewBox:"0 0 400000 "+k,preserveAspectRatio:"xMinYMin slice"});u=Mr(["hide-tail"],[R],n),u.style.height=le($),m=r.depth+g+y}else{/cancel/.test(s)?h||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var E=0,L=0,P=0;/box/.test(s)?(P=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),E=n.fontMetrics().fboxsep+(s==="colorbox"?0:P),L=E):s==="angl"?(P=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),E=4*P,L=Math.max(0,.25-r.depth)):(E=h?.2:0,L=E),u=Hv(r,s,E,L,n),/fbox|boxed|fcolorbox/.test(s)?(u.style.borderStyle="solid",u.style.borderWidth=le(P)):s==="angl"&&P!==.049&&(u.style.borderTopWidth=le(P),u.style.borderRightWidth=le(P)),m=r.depth+L,o.backgroundColor&&(u.style.backgroundColor=o.backgroundColor,o.borderColor&&(u.style.borderColor=o.borderColor))}var H;if(o.backgroundColor)H=Ue({positionType:"individualShift",children:[{type:"elem",elem:u,shift:m},{type:"elem",elem:r,shift:0}]});else{var W=/cancel|phase/.test(s)?["svg-align"]:[];H=Ue({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:u,shift:m,wrapperClasses:W}]})}return/cancel/.test(s)&&(H.height=r.height,H.depth=r.depth),/cancel/.test(s)&&!h?ee(["mord","cancel-lap"],[H],n):ee(["mord"],[H],n)},ou=(o,n)=>{var r=0,s=new ie(o.label.includes("colorbox")?"mpadded":"menclose",[Ye(o.body,n)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var a=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);s.setAttribute("style","border: "+a+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};de({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,n,r){var{parser:s,funcName:a}=o,u=Re(n[0],"color-token").color,m=n[1];return{type:"enclose",mode:s.mode,label:a,backgroundColor:u,body:m}},htmlBuilder:iu,mathmlBuilder:ou});de({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,n,r){var{parser:s,funcName:a}=o,u=Re(n[0],"color-token").color,m=Re(n[1],"color-token").color,h=n[2];return{type:"enclose",mode:s.mode,label:a,backgroundColor:m,borderColor:u,body:h}},htmlBuilder:iu,mathmlBuilder:ou});de({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:n[0]}}});de({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];return{type:"enclose",mode:r.mode,label:s,body:a}},htmlBuilder:iu,mathmlBuilder:ou});de({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:n[0]}}});var Sm={};function Sn(o){for(var{type:n,names:r,props:s,handler:a,htmlBuilder:u,mathmlBuilder:m}=o,h={type:n,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},g=0;g<r.length;++g)Sm[r[g]]=h;u&&(ms[n]=u),m&&(fs[n]=m)}var Tm={};function b(o,n){Tm[o]=n}function hd(o){var n=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),n.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return n}var ks=o=>{var n=o.parser.settings;if(!n.displayMode)throw new re("{"+o.envName+"} can be used only in display mode.")},s8=new Set(["gather","gather*"]);function su(o){if(!o.includes("ed"))return!o.includes("*")}function Ar(o,n,r){var{hskipBeforeAndAfter:s,addJot:a,cols:u,arraystretch:m,colSeparationType:h,autoTag:g,singleRow:y,emptySingleRow:w,maxNumCols:$,leqno:k}=n;if(o.gullet.beginGroup(),y||o.gullet.macros.set("\\cr","\\\\\\relax"),!m){var q=o.gullet.expandMacroAsText("\\arraystretch");if(q==null)m=1;else if(m=parseFloat(q),!m||m<0)throw new re("Invalid \\arraystretch: "+q)}o.gullet.beginGroup();var R=[],E=[R],L=[],P=[],H=g!=null?[]:void 0;function W(){g&&o.gullet.macros.set("\\@eqnsw","1",!0)}function N(){H&&(o.gullet.macros.get("\\df@tag")?(H.push(o.subparse([new Yt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):H.push(!!g&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(W(),P.push(hd(o));;){var F=o.parseExpression(!1,y?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),F={type:"ordgroup",mode:o.mode,body:F},r&&(F={type:"styling",mode:o.mode,style:r,body:[F]}),R.push(F);var V=o.fetch().text;if(V==="&"){if($&&R.length===$){if(y||h)throw new re("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(V==="\\end"){N(),R.length===1&&F.type==="styling"&&F.body[0].body.length===0&&(E.length>1||!w)&&E.pop(),P.length<E.length+1&&P.push([]);break}else if(V==="\\\\"){o.consume();var B=void 0;o.gullet.future().text!==" "&&(B=o.parseSizeGroup(!0)),L.push(B?B.value:null),N(),P.push(hd(o)),R=[],E.push(R),W()}else throw new re("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:a,arraystretch:m,body:E,cols:u,rowGaps:L,hskipBeforeAndAfter:s,hLinesBeforeRow:P,colSeparationType:h,tags:H,leqno:k}}function au(o){return o.slice(0,1)==="d"?"display":"text"}var Tn=function(n,r){var s,a,u=n.body.length,m=n.hLinesBeforeRow,h=0,g=new Array(u),y=[],w=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,k=5*$;if(n.colSeparationType&&n.colSeparationType==="small"){var q=r.havingStyle(Ce.SCRIPT).sizeMultiplier;k=.2778*(q/r.sizeMultiplier)}var R=n.colSeparationType==="CD"?st({number:3,unit:"ex"},r):12*$,E=3*$,L=n.arraystretch*R,P=.7*L,H=.3*L,W=0;function N(ft){for(var Ve=0;Ve<ft.length;++Ve)Ve>0&&(W+=.25),y.push({pos:W,isDashed:ft[Ve]})}for(N(m[0]),s=0;s<n.body.length;++s){var F=n.body[s],V=P,B=H;h<F.length&&(h=F.length);var U=new Array(F.length);for(a=0;a<F.length;++a){var K=Oe(F[a],r);B<K.depth&&(B=K.depth),V<K.height&&(V=K.height),U[a]=K}var be=n.rowGaps[s],ve=0;be&&(ve=st(be,r),ve>0&&(ve+=H,B<ve&&(B=ve),ve=0)),n.addJot&&(B+=E),U.height=V,U.depth=B,W+=V,U.pos=W,W+=B+ve,g[s]=U,N(m[s+1])}var ue=W/2+r.fontMetrics().axisHeight,ye=n.cols||[],$e=[],He,Qe,Fe=[];if(n.tags&&n.tags.some(ft=>ft))for(s=0;s<u;++s){var ae=g[s],_e=ae.pos-ue,ce=n.tags[s],j=void 0;ce===!0?j=ee(["eqn-num"],[],r):ce===!1?j=ee([],[],r):j=ee([],xt(ce,r,!0),r),j.depth=ae.depth,j.height=ae.height,Fe.push({type:"elem",elem:j,shift:_e})}for(a=0,Qe=0;a<h||Qe<ye.length;++a,++Qe){for(var G=ye[Qe]||{},he=!0;G.type==="separator";){if(he||(He=ee(["arraycolsep"],[]),He.style.width=le(r.fontMetrics().doubleRuleSep),$e.push(He)),G.separator==="|"||G.separator===":"){var ze=G.separator==="|"?"solid":"dashed",ke=ee(["vertical-separator"],[],r);ke.style.height=le(W),ke.style.borderRightWidth=le(w),ke.style.borderRightStyle=ze,ke.style.margin="0 "+le(-w/2);var Me=W-ue;Me&&(ke.style.verticalAlign=le(-Me)),$e.push(ke)}else throw new re("Invalid separator type: "+G.separator);Qe++,G=ye[Qe]||{},he=!1}if(!(a>=h)){var Be=void 0;if(a>0||n.hskipBeforeAndAfter){var De;Be=(De=G.pregap)!=null?De:k,Be!==0&&(He=ee(["arraycolsep"],[]),He.style.width=le(Be),$e.push(He))}var Ie=[];for(s=0;s<u;++s){var mt=g[s],Zt=mt[a];if(Zt){var ni=mt.pos-ue;Zt.depth=mt.depth,Zt.height=mt.height,Ie.push({type:"elem",elem:Zt,shift:ni})}}if(Ie=Ue({positionType:"individualShift",children:Ie}),Ie=ee(["col-align-"+(G.align||"c")],[Ie]),$e.push(Ie),a<h-1||n.hskipBeforeAndAfter){var Mn;Be=(Mn=G.postgap)!=null?Mn:k,Be!==0&&(He=ee(["arraycolsep"],[]),He.style.width=le(Be),$e.push(He))}}}if(g=ee(["mtable"],$e),y.length>0){for(var Yn=Ci("hline",r,w),Cr=Ci("hdashline",r,w),jn=[{type:"elem",elem:g,shift:0}];y.length>0;){var An=y.pop(),Xn=An.pos-ue;An.isDashed?jn.push({type:"elem",elem:Cr,shift:Xn}):jn.push({type:"elem",elem:Yn,shift:Xn})}g=Ue({positionType:"individualShift",children:jn})}if(Fe.length===0)return ee(["mord"],[g],r);var Ee=Ue({positionType:"individualShift",children:Fe});return Ee=ee(["tag"],[Ee],r),Qn([g,Ee])},a8={c:"center ",l:"left ",r:"right "},qn=function(n,r){for(var s=[],a=new ie("mtd",[],["mtr-glue"]),u=new ie("mtd",[],["mml-eqn-num"]),m=0;m<n.body.length;m++){for(var h=n.body[m],g=[],y=0;y<h.length;y++)g.push(new ie("mtd",[Ye(h[y],r)]));n.tags&&n.tags[m]&&(g.unshift(a),g.push(a),n.leqno?g.unshift(u):g.push(u)),s.push(new ie("mtr",g))}var w=new ie("mtable",s),$=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);w.setAttribute("rowspacing",le($));var k="",q="";if(n.cols&&n.cols.length>0){var R=n.cols,E="",L=!1,P=0,H=R.length;R[0].type==="separator"&&(k+="top ",P=1),R[R.length-1].type==="separator"&&(k+="bottom ",H-=1);for(var W=P;W<H;W++)R[W].type==="align"?(q+=a8[R[W].align],L&&(E+="none "),L=!0):R[W].type==="separator"&&L&&(E+=R[W].separator==="|"?"solid ":"dashed ",L=!1);w.setAttribute("columnalign",q.trim()),/[sd]/.test(E)&&w.setAttribute("columnlines",E.trim())}if(n.colSeparationType==="align"){for(var N=n.cols||[],F="",V=1;V<N.length;V++)F+=V%2?"0em ":"1em ";w.setAttribute("columnspacing",F.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?w.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?w.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?w.setAttribute("columnspacing","0.5em"):w.setAttribute("columnspacing","1em");var B="",U=n.hLinesBeforeRow;k+=U[0].length>0?"left ":"",k+=U[U.length-1].length>0?"right ":"";for(var K=1;K<U.length-1;K++)B+=U[K].length===0?"none ":U[K][0]?"dashed ":"solid ";return/[sd]/.test(B)&&w.setAttribute("rowlines",B.trim()),k!==""&&(w=new ie("menclose",[w]),w.setAttribute("notation",k.trim())),n.arraystretch&&n.arraystretch<1&&(w=new ie("mstyle",[w]),w.setAttribute("scriptlevel","1")),w},qm=function(n,r){n.envName.includes("ed")||ks(n);var s=[],a=n.envName.includes("at")?"alignat":"align",u=n.envName==="split",m=Ar(n.parser,{cols:s,addJot:!0,autoTag:u?void 0:su(n.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:u?2:void 0,leqno:n.parser.settings.leqno},"display"),h,g=0,y={type:"ordgroup",mode:n.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var w="",$=0;$<r[0].body.length;$++){var k=Re(r[0].body[$],"textord");w+=k.text}h=Number(w),g=h*2}var q=!g;m.body.forEach(function(P){for(var H=1;H<P.length;H+=2){var W=Re(P[H],"styling"),N=Re(W.body[0],"ordgroup");N.body.unshift(y)}if(q)g<P.length&&(g=P.length);else{var F=P.length/2;if(h<F)throw new re("Too many math in a row: "+("expected "+h+", but got "+F),P[0])}});for(var R=0;R<g;++R){var E="r",L=0;R%2===1?E="l":R>0&&q&&(L=1),s[R]={type:"align",align:E,pregap:L,postgap:0}}return m.colSeparationType=q?"align":"alignat",m};Sn({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,n){var r=ws(n[0]),s=r?[n[0]]:Re(n[0],"ordgroup").body,a=s.map(function(m){var h=tu(m),g=h.text;if("lcr".includes(g))return{type:"align",align:g};if(g==="|")return{type:"separator",separator:"|"};if(g===":")return{type:"separator",separator:":"};throw new re("Unknown column alignment: "+g,m)}),u={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Ar(o.parser,u,au(o.envName))},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var a=o.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new re("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),s.cols=[{type:"align",align:r}]}}var u=Ar(o.parser,s,au(o.envName)),m=Math.max(0,...u.body.map(h=>h.length));return u.cols=new Array(m).fill({type:"align",align:r}),n?{type:"leftright",mode:o.mode,body:[u],left:n[0],right:n[1],rightColor:void 0}:u},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var n={arraystretch:.5},r=Ar(o.parser,n,"script");return r.colSeparationType="small",r},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["subarray"],props:{numArgs:1},handler(o,n){var r=ws(n[0]),s=r?[n[0]]:Re(n[0],"ordgroup").body,a=s.map(function(m){var h=tu(m),g=h.text;if("lc".includes(g))return{type:"align",align:g};throw new re("Unknown column alignment: "+g,m)});if(a.length>1)throw new re("{subarray} can contain only one column");var u={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(u=Ar(o.parser,u,"script"),u.body.length>0&&u.body[0].length>1)throw new re("{subarray} can contain only one column");return u},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Ar(o.parser,n,au(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:qm,htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){s8.has(o.envName)&&ks(o);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:su(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Ar(o.parser,n,"display")},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:qm,htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){ks(o);var n={autoTag:su(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Ar(o.parser,n,"display")},htmlBuilder:Tn,mathmlBuilder:qn});Sn({type:"array",names:["CD"],props:{numArgs:0},handler(o){return ks(o),Kv(o.parser)},htmlBuilder:Tn,mathmlBuilder:qn});b("\\nonumber","\\gdef\\@eqnsw{0}");b("\\notag","\\nonumber");de({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,n){throw new re(o.funcName+" valid only within array environment")}});var gd=Sm;de({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];if(a.type!=="ordgroup")throw new re("Invalid environment name",a);for(var u="",m=0;m<a.body.length;++m)u+=Re(a.body[m],"textord").text;if(s==="\\begin"){if(!gd.hasOwnProperty(u))throw new re("No such environment: "+u,a);var h=gd[u],{args:g,optArgs:y}=r.parseArguments("\\begin{"+u+"}",h),w={mode:r.mode,envName:u,parser:r},$=h.handler(w,g,y);r.expect("\\end",!1);var k=r.nextToken,q=Re(r.parseFunction(),"environment");if(q.name!==u)throw new re("Mismatch: \\begin{"+u+"} matched by \\end{"+q.name+"}",k);return $}return{type:"environment",mode:r.mode,name:u,nameGroup:a}}});var Mm=(o,n)=>{var r=o.font,s=n.withFont(r);return Oe(o.body,s)},jm=(o,n)=>{var r=o.font,s=n.withFont(r);return Ye(o.body,s)},vd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};de({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=ps(n[0]),u=s;return u in vd&&(u=vd[u]),{type:"font",mode:r.mode,font:u.slice(1),body:a}},htmlBuilder:Mm,mathmlBuilder:jm});de({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"mclass",mode:r.mode,mclass:_s(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:Vn(s)}}});de({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,breakOnTokenText:a}=o,{mode:u}=r,m=r.parseExpression(!0,a),h="math"+s.slice(1);return{type:"font",mode:u,font:h,body:{type:"ordgroup",mode:r.mode,body:m}}},htmlBuilder:Mm,mathmlBuilder:jm});var l8=(o,n)=>{var r=n.style,s=r.fracNum(),a=r.fracDen(),u;u=n.havingStyle(s);var m=Oe(o.numer,u,n);if(o.continued){var h=8.5/n.fontMetrics().ptPerEm,g=3.5/n.fontMetrics().ptPerEm;m.height=m.height<h?h:m.height,m.depth=m.depth<g?g:m.depth}u=n.havingStyle(a);var y=Oe(o.denom,u,n),w,$,k;o.hasBarLine?(o.barSize?($=st(o.barSize,n),w=Ci("frac-line",n,$)):w=Ci("frac-line",n),$=w.height,k=w.height):(w=null,$=0,k=n.fontMetrics().defaultRuleThickness);var q,R,E;r.size===Ce.DISPLAY.size?(q=n.fontMetrics().num1,$>0?R=3*k:R=7*k,E=n.fontMetrics().denom1):($>0?(q=n.fontMetrics().num2,R=k):(q=n.fontMetrics().num3,R=3*k),E=n.fontMetrics().denom2);var L;if(w){var H=n.fontMetrics().axisHeight;q-m.depth-(H+.5*$)<R&&(q+=R-(q-m.depth-(H+.5*$))),H-.5*$-(y.height-E)<R&&(E+=R-(H-.5*$-(y.height-E)));var W=-(H-.5*$);L=Ue({positionType:"individualShift",children:[{type:"elem",elem:y,shift:E},{type:"elem",elem:w,shift:W},{type:"elem",elem:m,shift:-q}]})}else{var P=q-m.depth-(y.height-E);P<R&&(q+=.5*(R-P),E+=.5*(R-P)),L=Ue({positionType:"individualShift",children:[{type:"elem",elem:y,shift:E},{type:"elem",elem:m,shift:-q}]})}u=n.havingStyle(r),L.height*=u.sizeMultiplier/n.sizeMultiplier,L.depth*=u.sizeMultiplier/n.sizeMultiplier;var N;r.size===Ce.DISPLAY.size?N=n.fontMetrics().delim1:r.size===Ce.SCRIPTSCRIPT.size?N=n.havingStyle(Ce.SCRIPT).fontMetrics().delim2:N=n.fontMetrics().delim2;var F,V;return o.leftDelim==null?F=Ro(n,["mopen"]):F=Ll(o.leftDelim,N,!0,n.havingStyle(r),o.mode,["mopen"]),o.continued?V=ee([]):o.rightDelim==null?V=Ro(n,["mclose"]):V=Ll(o.rightDelim,N,!0,n.havingStyle(r),o.mode,["mclose"]),ee(["mord"].concat(u.sizingClasses(n)),[F,ee(["mfrac"],[L]),V],n)},u8=(o,n)=>{var r=new ie("mfrac",[Ye(o.numer,n),Ye(o.denom,n)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=st(o.barSize,n);r.setAttribute("linethickness",le(s))}if(o.leftDelim!=null||o.rightDelim!=null){var a=[];if(o.leftDelim!=null){var u=new ie("mo",[new ht(o.leftDelim.replace("\\",""))]);u.setAttribute("fence","true"),a.push(u)}if(a.push(r),o.rightDelim!=null){var m=new ie("mo",[new ht(o.rightDelim.replace("\\",""))]);m.setAttribute("fence","true"),a.push(m)}return Jl(a)}return r},Am=(o,n)=>{if(!n)return o;var r={type:"styling",mode:o.mode,style:n,body:[o]};return r};de({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0],u=n[1],m,h=null,g=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":m=!0;break;case"\\\\atopfrac":m=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":m=!1,h="(",g=")";break;case"\\\\bracefrac":m=!1,h="\\{",g="\\}";break;case"\\\\brackfrac":m=!1,h="[",g="]";break;default:throw new Error("Unrecognized genfrac command")}var y=s==="\\cfrac",w=null;return y||s.startsWith("\\d")?w="display":s.startsWith("\\t")&&(w="text"),Am({type:"genfrac",mode:r.mode,numer:a,denom:u,continued:y,hasBarLine:m,leftDelim:h,rightDelim:g,barSize:null},w)},htmlBuilder:l8,mathmlBuilder:u8});de({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:n,funcName:r,token:s}=o,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:a,token:s}}});var yd=["display","text","script","scriptscript"],xd=function(n){var r=null;return n.length>0&&(r=n,r=r==="."?null:r),r};de({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,n){var{parser:r}=o,s=n[4],a=n[5],u=ps(n[0]),m=u.type==="atom"&&u.family==="open"?xd(u.text):null,h=ps(n[1]),g=h.type==="atom"&&h.family==="close"?xd(h.text):null,y=Re(n[2],"size"),w,$=null;y.isBlank?w=!0:($=y.value,w=$.number>0);var k=null,q=n[3];if(q.type==="ordgroup"){if(q.body.length>0){var R=Re(q.body[0],"textord");k=yd[Number(R.text)]}}else q=Re(q,"textord"),k=yd[Number(q.text)];return Am({type:"genfrac",mode:r.mode,numer:s,denom:a,continued:!1,hasBarLine:w,barSize:$,leftDelim:m,rightDelim:g},k)}});de({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,n){var{parser:r,funcName:s,token:a}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Re(n[0],"size").value,token:a}}});de({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0],u=Re(n[1],"infix").size;if(!u)throw new Error("\\\\abovefrac expected size, but got "+String(u));var m=n[2],h=u.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:m,continued:!1,hasBarLine:h,barSize:u,leftDelim:null,rightDelim:null}}});var Cm=(o,n)=>{var r=n.style,s,a;o.type==="supsub"?(s=o.sup?Oe(o.sup,n.havingStyle(r.sup()),n):Oe(o.sub,n.havingStyle(r.sub()),n),a=Re(o.base,"horizBrace")):a=Re(o,"horizBrace");var u=Oe(a.base,n.havingBaseStyle(Ce.DISPLAY)),m=bs(a,n),h;if(a.isOver?(h=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:m}]}),h.children[0].children[0].children[1].classes.push("svg-align")):(h=Ue({positionType:"bottom",positionData:u.depth+.1+m.height,children:[{type:"elem",elem:m},{type:"kern",size:.1},{type:"elem",elem:u}]}),h.children[0].children[0].children[0].classes.push("svg-align")),s){var g=ee(["mord",a.isOver?"mover":"munder"],[h],n);a.isOver?h=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:g},{type:"kern",size:.2},{type:"elem",elem:s}]}):h=Ue({positionType:"bottom",positionData:g.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:g}]})}return ee(["mord",a.isOver?"mover":"munder"],[h],n)},c8=(o,n)=>{var r=xs(o.label);return new ie(o.isOver?"mover":"munder",[Ye(o.base,n),r])};de({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,n){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:n[0]}},htmlBuilder:Cm,mathmlBuilder:c8});de({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[1],a=Re(n[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:dt(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1);return Tv(o.href,[],r,n)},mathmlBuilder:(o,n)=>{var r=jr(o.body,n);return r instanceof ie||(r=new ie("mrow",[r])),r.setAttribute("href",o.href),r}});de({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=Re(n[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var a=[],u=0;u<s.length;u++){var m=s[u];m==="~"&&(m="\\textasciitilde"),a.push({type:"textord",mode:"text",text:m})}var h={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:s,body:dt(h)}}});de({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,n){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:dt(n[0])}},htmlBuilder(o,n){var r=xt(o.body,n,!1);return Qn(r)},mathmlBuilder(o,n){return new ie("mrow",Ht(o.body,n))}});de({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s,token:a}=o,u=Re(n[0],"raw").string,m=n[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var h,g={};switch(s){case"\\htmlClass":g.class=u,h={command:"\\htmlClass",class:u};break;case"\\htmlId":g.id=u,h={command:"\\htmlId",id:u};break;case"\\htmlStyle":g.style=u,h={command:"\\htmlStyle",style:u};break;case"\\htmlData":{for(var y=u.split(","),w=0;w<y.length;w++){var $=y[w],k=$.indexOf("=");if(k<0)throw new re("\\htmlData key/value '"+$+"' missing equals sign");var q=$.slice(0,k),R=$.slice(k+1);g["data-"+q.trim()]=R}h={command:"\\htmlData",attributes:g};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(h)?{type:"html",mode:r.mode,attributes:g,body:dt(m)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,n)=>{var r=xt(o.body,n,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var a=ee(s,r,n);for(var u in o.attributes)u!=="class"&&o.attributes.hasOwnProperty(u)&&a.setAttribute(u,o.attributes[u]);return a},mathmlBuilder:(o,n)=>jr(o.body,n)});de({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:dt(n[0]),mathml:dt(n[1])}},htmlBuilder:(o,n)=>{var r=xt(o.html,n,!1);return Qn(r)},mathmlBuilder:(o,n)=>jr(o.mathml,n)});var ql=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!r)throw new re("Invalid size: '"+n+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!Yd(s))throw new re("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};de({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,n,r)=>{var{parser:s}=o,a={number:0,unit:"em"},u={number:.9,unit:"em"},m={number:0,unit:"em"},h="";if(r[0])for(var g=Re(r[0],"raw").string,y=g.split(","),w=0;w<y.length;w++){var $=y[w].split("=");if($.length===2){var k=$[1].trim();switch($[0].trim()){case"alt":h=k;break;case"width":a=ql(k);break;case"height":u=ql(k);break;case"totalheight":m=ql(k);break;default:throw new re("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var q=Re(n[0],"url").url;return h===""&&(h=q,h=h.replace(/^.*[\\/]/,""),h=h.substring(0,h.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:q})?{type:"includegraphics",mode:s.mode,alt:h,width:a,height:u,totalheight:m,src:q}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,n)=>{var r=st(o.height,n),s=0;o.totalheight.number>0&&(s=st(o.totalheight,n)-r);var a=0;o.width.number>0&&(a=st(o.width,n));var u={height:le(r+s)};a>0&&(u.width=le(a)),s>0&&(u.verticalAlign=le(-s));var m=new xv(o.src,o.alt,u);return m.height=r,m.depth=s,m},mathmlBuilder:(o,n)=>{var r=new ie("mglyph",[]);r.setAttribute("alt",o.alt);var s=st(o.height,n),a=0;if(o.totalheight.number>0&&(a=st(o.totalheight,n)-s,r.setAttribute("valign",le(-a))),r.setAttribute("height",le(s+a)),o.width.number>0){var u=st(o.width,n);r.setAttribute("width",le(u))}return r.setAttribute("src",o.src),r}});de({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,a=Re(n[0],"size");if(r.settings.strict){var u=s[1]==="m",m=a.value.unit==="mu";u?(m||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):m&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(o,n){return nm(o.dimension,n)},mathmlBuilder(o,n){var r=st(o.dimension,n);return new lm(r)}});de({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:a}},htmlBuilder:(o,n)=>{var r;o.alignment==="clap"?(r=ee([],[Oe(o.body,n)]),r=ee(["inner"],[r],n)):r=ee(["inner"],[Oe(o.body,n)]);var s=ee(["fix"],[]),a=ee([o.alignment],[r,s],n),u=ee(["strut"]);return u.style.height=le(a.height+a.depth),a.depth&&(u.style.verticalAlign=le(-a.depth)),a.children.unshift(u),a=ee(["thinbox"],[a],n),ee(["mord","vbox"],[a],n)},mathmlBuilder:(o,n)=>{var r=new ie("mpadded",[Ye(o.body,n)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});de({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){var{funcName:r,parser:s}=o,a=s.mode;s.switchMode("math");var u=r==="\\("?"\\)":"$",m=s.parseExpression(!1,u);return s.expect(u),s.switchMode(a),{type:"styling",mode:s.mode,style:"text",body:m}}});de({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,n){throw new re("Mismatched "+o.funcName)}});var bd=(o,n)=>{switch(n.style.size){case Ce.DISPLAY.size:return o.display;case Ce.TEXT.size:return o.text;case Ce.SCRIPT.size:return o.script;case Ce.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};de({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,n)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:dt(n[0]),text:dt(n[1]),script:dt(n[2]),scriptscript:dt(n[3])}},htmlBuilder:(o,n)=>{var r=bd(o,n),s=xt(r,n,!1);return Qn(s)},mathmlBuilder:(o,n)=>{var r=bd(o,n);return jr(r,n)}});var Rm=(o,n,r,s,a,u,m)=>{o=ee([],[o]);var h=r&&Vn(r),g,y;if(n){var w=Oe(n,s.havingStyle(a.sup()),s);y={elem:w,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-w.depth)}}if(r){var $=Oe(r,s.havingStyle(a.sub()),s);g={elem:$,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-$.height)}}var k;if(y&&g){var q=s.fontMetrics().bigOpSpacing5+g.elem.height+g.elem.depth+g.kern+o.depth+m;k=Ue({positionType:"bottom",positionData:q,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:le(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o},{type:"kern",size:y.kern},{type:"elem",elem:y.elem,marginLeft:le(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(g){var R=o.height-m;k=Ue({positionType:"top",positionData:R,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:g.elem,marginLeft:le(-u)},{type:"kern",size:g.kern},{type:"elem",elem:o}]})}else if(y){var E=o.depth+m;k=Ue({positionType:"bottom",positionData:E,children:[{type:"elem",elem:o},{type:"kern",size:y.kern},{type:"elem",elem:y.elem,marginLeft:le(u)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var L=[k];if(g&&u!==0&&!h){var P=ee(["mspace"],[],s);P.style.marginRight=le(u),L.unshift(P)}return ee(["mop","op-limits"],L,s)},Em=new Set(["\\smallint"]),Pi=(o,n)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Re(o.base,"op"),a=!0):u=Re(o,"op");var m=n.style,h=!1;m.size===Ce.DISPLAY.size&&u.symbol&&!Em.has(u.name)&&(h=!0);var g;if(u.symbol){var y=h?"Size2-Regular":"Size1-Regular",w="";if((u.name==="\\oiint"||u.name==="\\oiiint")&&(w=u.name.slice(1),u.name=w==="oiint"?"\\iint":"\\iiint"),g=Rt(u.name,y,"math",n,["mop","op-symbol",h?"large-op":"small-op"]),w.length>0){var $=g.italic,k=im(w+"Size"+(h?"2":"1"),n);g=Ue({positionType:"individualShift",children:[{type:"elem",elem:g,shift:0},{type:"elem",elem:k,shift:h?.08:0}]}),u.name="\\"+w,g.classes.unshift("mop"),g.italic=$}}else if(u.body){var q=xt(u.body,n,!0);q.length===1&&q[0]instanceof ln?(g=q[0],g.classes[0]="mop"):g=ee(["mop"],q,n)}else{for(var R=[],E=1;E<u.name.length;E++)R.push(Xl(u.name[E],u.mode,n));g=ee(["mop"],R,n)}var L=0,P=0;return(g instanceof ln||u.name==="\\oiint"||u.name==="\\oiiint")&&!u.suppressBaseShift&&(L=(g.height-g.depth)/2-n.fontMetrics().axisHeight,P=g.italic),a?Rm(g,r,s,n,m,P,L):(L&&(g.style.position="relative",g.style.top=le(L)),g)},No=(o,n)=>{var r;if(o.symbol)r=new ie("mo",[un(o.name,o.mode)]),Em.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new ie("mo",Ht(o.body,n));else{r=new ie("mi",[new ht(o.name.slice(1))]);var s=new ie("mo",[un("⁡","text")]);o.parentIsSupSub?r=new ie("mrow",[r,s]):r=am([r,s])}return r},d8={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};de({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=s;return a.length===1&&(a=d8[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Pi,mathmlBuilder:No});de({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:dt(s)}},htmlBuilder:Pi,mathmlBuilder:No});var m8={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};de({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Pi,mathmlBuilder:No});de({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:n,funcName:r}=o;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Pi,mathmlBuilder:No});de({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:n,funcName:r}=o,s=r;return s.length===1&&(s=m8[s]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Pi,mathmlBuilder:No});var Pm=(o,n)=>{var r,s,a=!1,u;o.type==="supsub"?(r=o.sup,s=o.sub,u=Re(o.base,"operatorname"),a=!0):u=Re(o,"operatorname");var m;if(u.body.length>0){for(var h=u.body.map($=>{var k=$.text;return typeof k=="string"?{type:"textord",mode:$.mode,text:k}:$}),g=xt(h,n.withFont("mathrm"),!0),y=0;y<g.length;y++){var w=g[y];w instanceof ln&&(w.text=w.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}m=ee(["mop"],g,n)}else m=ee(["mop"],[],n);return a?Rm(m,r,s,n,n.style,0,0):m},f8=(o,n)=>{for(var r=Ht(o.body,n.withFont("mathrm")),s=!0,a=0;a<r.length;a++){var u=r[a];if(!(u instanceof lm))if(u instanceof ie)switch(u.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var m=u.children[0];u.children.length===1&&m instanceof ht?m.text=m.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var h=r.map(w=>w.toText()).join("");r=[new ht(h)]}var g=new ie("mi",r);g.setAttribute("mathvariant","normal");var y=new ie("mo",[un("⁡","text")]);return o.parentIsSupSub?new ie("mrow",[g,y]):am([g,y])};de({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,n)=>{var{parser:r,funcName:s}=o,a=n[0];return{type:"operatorname",mode:r.mode,body:dt(a),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Pm,mathmlBuilder:f8});b("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ti({type:"ordgroup",htmlBuilder(o,n){return o.semisimple?Qn(xt(o.body,n,!1)):ee(["mord"],xt(o.body,n,!0),n)},mathmlBuilder(o,n){return jr(o.body,n,!0)}});de({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,n){var{parser:r}=o,s=n[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,n){var r=Oe(o.body,n.havingCrampedStyle()),s=Ci("overline-line",n),a=n.fontMetrics().defaultRuleThickness,u=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}]});return ee(["mord","overline"],[u],n)},mathmlBuilder(o,n){var r=new ie("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var s=new ie("mover",[Ye(o.body,n),r]);return s.setAttribute("accent","true"),s}});de({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"phantom",mode:r.mode,body:dt(s)}},htmlBuilder:(o,n)=>{var r=xt(o.body,n.withPhantom(),!1);return Qn(r)},mathmlBuilder:(o,n)=>{var r=Ht(o.body,n);return new ie("mphantom",r)}});de({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=ee([],[Oe(o.body,n.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),ee(["mord"],[r],n)},mathmlBuilder:(o,n)=>{var r=Ht(dt(o.body),n),s=new ie("mphantom",r),a=new ie("mpadded",[s]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});de({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,n)=>{var{parser:r}=o,s=n[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,n)=>{var r=ee(["inner"],[Oe(o.body,n.withPhantom())]),s=ee(["fix"],[]);return ee(["mord","rlap"],[r,s],n)},mathmlBuilder:(o,n)=>{var r=Ht(dt(o.body),n),s=new ie("mphantom",r),a=new ie("mpadded",[s]);return a.setAttribute("width","0px"),a}});de({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,n){var{parser:r}=o,s=Re(n[0],"size").value,a=n[1];return{type:"raisebox",mode:r.mode,dy:s,body:a}},htmlBuilder(o,n){var r=Oe(o.body,n),s=st(o.dy,n);return Ue({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){var r=new ie("mpadded",[Ye(o.body,n)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});de({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:n}=o;return{type:"internal",mode:n.mode}}});de({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,n,r){var{parser:s}=o,a=r[0],u=Re(n[0],"size"),m=Re(n[1],"size");return{type:"rule",mode:s.mode,shift:a&&Re(a,"size").value,width:u.value,height:m.value}},htmlBuilder(o,n){var r=ee(["mord","rule"],[],n),s=st(o.width,n),a=st(o.height,n),u=o.shift?st(o.shift,n):0;return r.style.borderRightWidth=le(s),r.style.borderTopWidth=le(a),r.style.bottom=le(u),r.width=s,r.height=a+u,r.depth=-u,r.maxFontSize=a*1.125*n.sizeMultiplier,r},mathmlBuilder(o,n){var r=st(o.width,n),s=st(o.height,n),a=o.shift?st(o.shift,n):0,u=n.color&&n.getColor()||"black",m=new ie("mspace");m.setAttribute("mathbackground",u),m.setAttribute("width",le(r)),m.setAttribute("height",le(s));var h=new ie("mpadded",[m]);return a>=0?h.setAttribute("height",le(a)):(h.setAttribute("height",le(a)),h.setAttribute("depth",le(-a))),h.setAttribute("voffset",le(a)),h}});function Dm(o,n,r){for(var s=xt(o,n,!1),a=n.sizeMultiplier/r.sizeMultiplier,u=0;u<s.length;u++){var m=s[u].classes.indexOf("sizing");m<0?Array.prototype.push.apply(s[u].classes,n.sizingClasses(r)):s[u].classes[m+1]==="reset-size"+n.size&&(s[u].classes[m+1]="reset-size"+r.size),s[u].height*=a,s[u].depth*=a}return Qn(s)}var wd=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],p8=(o,n)=>{var r=n.havingSize(o.size);return Dm(o.body,r,n)};de({type:"sizing",names:wd,props:{numArgs:0,allowedInText:!0},handler:(o,n)=>{var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:wd.indexOf(s)+1,body:u}},htmlBuilder:p8,mathmlBuilder:(o,n)=>{var r=n.havingSize(o.size),s=Ht(o.body,r),a=new ie("mstyle",s);return a.setAttribute("mathsize",le(r.sizeMultiplier)),a}});de({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,n,r)=>{var{parser:s}=o,a=!1,u=!1,m=r[0]&&Re(r[0],"ordgroup");if(m)for(var h="",g=0;g<m.body.length;++g){var y=m.body[g];if(h=y.text,h==="t")a=!0;else if(h==="b")u=!0;else{a=!1,u=!1;break}}else a=!0,u=!0;var w=n[0];return{type:"smash",mode:s.mode,body:w,smashHeight:a,smashDepth:u}},htmlBuilder:(o,n)=>{var r=ee([],[Oe(o.body,n)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var u=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return ee(["mord"],[u],n)},mathmlBuilder:(o,n)=>{var r=new ie("mpadded",[Ye(o.body,n)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});de({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,n,r){var{parser:s}=o,a=r[0],u=n[0];return{type:"sqrt",mode:s.mode,body:u,index:a}},htmlBuilder(o,n){var r=Oe(o.body,n.havingCrampedStyle());r.height===0&&(r.height=n.fontMetrics().xHeight),r=Ri(r,n);var s=n.fontMetrics(),a=s.defaultRuleThickness,u=a;n.style.id<Ce.TEXT.id&&(u=n.fontMetrics().xHeight);var m=a+u/4,h=r.height+r.depth+m+a,{span:g,ruleWidth:y,advanceWidth:w}=e8(h,n),$=g.height-y;$>r.height+r.depth+m&&(m=(m+$-r.height-r.depth)/2);var k=g.height-r.height-m-y;r.style.paddingLeft=le(w);var q=Ue({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+k)},{type:"elem",elem:g},{type:"kern",size:y}]});if(o.index){var R=n.havingStyle(Ce.SCRIPTSCRIPT),E=Oe(o.index,R,n),L=.6*(q.height-q.depth),P=Ue({positionType:"shift",positionData:-L,children:[{type:"elem",elem:E}]}),H=ee(["root"],[P]);return ee(["mord","sqrt"],[H,q],n)}else return ee(["mord","sqrt"],[q],n)},mathmlBuilder(o,n){var{body:r,index:s}=o;return s?new ie("mroot",[Ye(r,n),Ye(s,n)]):new ie("msqrt",[Ye(r,n)])}});var _d={display:Ce.DISPLAY,text:Ce.TEXT,script:Ce.SCRIPT,scriptscript:Ce.SCRIPTSCRIPT};de({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,n){var{breakOnTokenText:r,funcName:s,parser:a}=o,u=a.parseExpression(!0,r),m=s.slice(1,s.length-5);return{type:"styling",mode:a.mode,style:m,body:u}},htmlBuilder(o,n){var r=_d[o.style],s=n.havingStyle(r).withFont("");return Dm(o.body,s,n)},mathmlBuilder(o,n){var r=_d[o.style],s=n.havingStyle(r),a=Ht(o.body,s),u=new ie("mstyle",a),m={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},h=m[o.style];return u.setAttribute("scriptlevel",h[0]),u.setAttribute("displaystyle",h[1]),u}});var h8=function(n,r){var s=n.base;if(s)if(s.type==="op"){var a=s.limits&&(r.style.size===Ce.DISPLAY.size||s.alwaysHandleSupSub);return a?Pi:null}else if(s.type==="operatorname"){var u=s.alwaysHandleSupSub&&(r.style.size===Ce.DISPLAY.size||s.limits);return u?Pm:null}else{if(s.type==="accent")return Vn(s.base)?nu:null;if(s.type==="horizBrace"){var m=!n.sub;return m===s.isOver?Cm:null}else return null}else return null};ti({type:"supsub",htmlBuilder(o,n){var r=h8(o,n);if(r)return r(o,n);var{base:s,sup:a,sub:u}=o,m=Oe(s,n),h,g,y=n.fontMetrics(),w=0,$=0,k=s&&Vn(s);if(a){var q=n.havingStyle(n.style.sup());h=Oe(a,q,n),k||(w=m.height-q.fontMetrics().supDrop*q.sizeMultiplier/n.sizeMultiplier)}if(u){var R=n.havingStyle(n.style.sub());g=Oe(u,R,n),k||($=m.depth+R.fontMetrics().subDrop*R.sizeMultiplier/n.sizeMultiplier)}var E;n.style===Ce.DISPLAY?E=y.sup1:n.style.cramped?E=y.sup3:E=y.sup2;var L=n.sizeMultiplier,P=le(.5/y.ptPerEm/L),H=null;if(g){var W=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(m instanceof ln||W)&&(H=le(-m.italic))}var N;if(h&&g){w=Math.max(w,E,h.depth+.25*y.xHeight),$=Math.max($,y.sub2);var F=y.defaultRuleThickness,V=4*F;if(w-h.depth-(g.height-$)<V){$=V-(w-h.depth)+g.height;var B=.8*y.xHeight-(w-h.depth);B>0&&(w+=B,$-=B)}var U=[{type:"elem",elem:g,shift:$,marginRight:P,marginLeft:H},{type:"elem",elem:h,shift:-w,marginRight:P}];N=Ue({positionType:"individualShift",children:U})}else if(g){$=Math.max($,y.sub1,g.height-.8*y.xHeight);var K=[{type:"elem",elem:g,marginLeft:H,marginRight:P}];N=Ue({positionType:"shift",positionData:$,children:K})}else if(h)w=Math.max(w,E,h.depth+.25*y.xHeight),N=Ue({positionType:"shift",positionData:-w,children:[{type:"elem",elem:h,marginRight:P}]});else throw new Error("supsub must have either sup or sub.");var be=Nl(m,"right")||"mord";return ee([be],[m,ee(["msupsub"],[N])],n)},mathmlBuilder(o,n){var r=!1,s,a;o.base&&o.base.type==="horizBrace"&&(a=!!o.sup,a===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var u=[Ye(o.base,n)];o.sub&&u.push(Ye(o.sub,n)),o.sup&&u.push(Ye(o.sup,n));var m;if(r)m=s?"mover":"munder";else if(o.sub)if(o.sup){var y=o.base;y&&y.type==="op"&&y.limits&&n.style===Ce.DISPLAY||y&&y.type==="operatorname"&&y.alwaysHandleSupSub&&(n.style===Ce.DISPLAY||y.limits)?m="munderover":m="msubsup"}else{var g=o.base;g&&g.type==="op"&&g.limits&&(n.style===Ce.DISPLAY||g.alwaysHandleSupSub)||g&&g.type==="operatorname"&&g.alwaysHandleSupSub&&(g.limits||n.style===Ce.DISPLAY)?m="munder":m="msub"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(n.style===Ce.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||n.style===Ce.DISPLAY)?m="mover":m="msup"}return new ie(m,u)}});ti({type:"atom",htmlBuilder(o,n){return Xl(o.text,o.mode,n,["m"+o.family])},mathmlBuilder(o,n){var r=new ie("mo",[un(o.text,o.mode)]);if(o.family==="bin"){var s=eu(o,n);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Nm={mi:"italic",mn:"normal",mtext:"normal"};ti({type:"mathord",htmlBuilder(o,n){return ys(o,n,"mathord")},mathmlBuilder(o,n){var r=new ie("mi",[un(o.text,o.mode,n)]),s=eu(o,n)||"italic";return s!==Nm[r.type]&&r.setAttribute("mathvariant",s),r}});ti({type:"textord",htmlBuilder(o,n){return ys(o,n,"textord")},mathmlBuilder(o,n){var r=un(o.text,o.mode,n),s=eu(o,n)||"normal",a;return o.mode==="text"?a=new ie("mtext",[r]):/[0-9]/.test(o.text)?a=new ie("mn",[r]):o.text==="\\prime"?a=new ie("mo",[r]):a=new ie("mi",[r]),s!==Nm[a.type]&&a.setAttribute("mathvariant",s),a}});var Ml={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},jl={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ti({type:"spacing",htmlBuilder(o,n){if(jl.hasOwnProperty(o.text)){var r=jl[o.text].className||"";if(o.mode==="text"){var s=ys(o,n,"textord");return s.classes.push(r),s}else return ee(["mspace",r],[Xl(o.text,o.mode,n)],n)}else{if(Ml.hasOwnProperty(o.text))return ee(["mspace",Ml[o.text]],[],n);throw new re('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,n){var r;if(jl.hasOwnProperty(o.text))r=new ie("mtext",[new ht(" ")]);else{if(Ml.hasOwnProperty(o.text))return new ie("mspace");throw new re('Unknown type of space "'+o.text+'"')}return r}});var $d=()=>{var o=new ie("mtd",[]);return o.setAttribute("width","50%"),o};ti({type:"tag",mathmlBuilder(o,n){var r=new ie("mtable",[new ie("mtr",[$d(),new ie("mtd",[jr(o.body,n)]),$d(),new ie("mtd",[jr(o.tag,n)])])]);return r.setAttribute("width","100%"),r}});var kd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},zd={"\\textbf":"textbf","\\textmd":"textmd"},g8={"\\textit":"textit","\\textup":"textup"},Sd=(o,n)=>{var r=o.font;if(r){if(kd[r])return n.withTextFontFamily(kd[r]);if(zd[r])return n.withTextFontWeight(zd[r]);if(r==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(g8[r])};de({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,n){var{parser:r,funcName:s}=o,a=n[0];return{type:"text",mode:r.mode,body:dt(a),font:s}},htmlBuilder(o,n){var r=Sd(o,n),s=xt(o.body,r,!0);return ee(["mord","text"],s,r)},mathmlBuilder(o,n){var r=Sd(o,n);return jr(o.body,r)}});de({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,n){var{parser:r}=o;return{type:"underline",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Oe(o.body,n),s=Ci("underline-line",n),a=n.fontMetrics().defaultRuleThickness,u=Ue({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:s},{type:"kern",size:3*a},{type:"elem",elem:r}]});return ee(["mord","underline"],[u],n)},mathmlBuilder(o,n){var r=new ie("mo",[new ht("‾")]);r.setAttribute("stretchy","true");var s=new ie("munder",[Ye(o.body,n),r]);return s.setAttribute("accentunder","true"),s}});de({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,n){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:n[0]}},htmlBuilder(o,n){var r=Oe(o.body,n),s=n.fontMetrics().axisHeight,a=.5*(r.height-s-(r.depth+s));return Ue({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,n){return new ie("mpadded",[Ye(o.body,n)],["vcenter"])}});de({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,n,r){throw new re("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,n){for(var r=Td(o),s=[],a=n.havingStyle(n.style.text()),u=0;u<r.length;u++){var m=r[u];m==="~"&&(m="\\textasciitilde"),s.push(Rt(m,"Typewriter-Regular",o.mode,a,["mord","texttt"]))}return ee(["mord","text"].concat(a.sizingClasses(n)),tm(s),a)},mathmlBuilder(o,n){var r=new ht(Td(o)),s=new ie("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var Td=o=>o.body.replace(/ /g,o.star?"␣":" "),Sr=om,Bm=`[ \r
	]`,v8="\\\\[a-zA-Z@]+",y8="\\\\[^\uD800-\uDFFF]",x8="("+v8+")"+Bm+"*",b8=`\\\\(
|[ \r	]+
?)[ \r	]*`,Ol="[̀-ͯ]",w8=new RegExp(Ol+"+$"),_8="("+Bm+"+)|"+(b8+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Ol+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Ol+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+x8)+("|"+y8+")");class qd{constructor(n,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=r,this.tokenRegex=new RegExp(_8,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,r){this.catcodes[n]=r}lex(){var n=this.input,r=this.tokenRegex.lastIndex;if(r===n.length)return new Yt("EOF",new Ot(this,r,r));var s=this.tokenRegex.exec(n);if(s===null||s.index!==r)throw new re("Unexpected character: '"+n[r]+"'",new Yt(n[r],new Ot(this,r,r+1)));var a=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[a]===14){var u=n.indexOf(`
`,this.tokenRegex.lastIndex);return u===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=u+1,this.lex()}return new Yt(a,new Ot(this,r,this.tokenRegex.lastIndex))}}class $8{constructor(n,r){n===void 0&&(n={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new re("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var r in n)n.hasOwnProperty(r)&&(n[r]==null?delete this.current[r]:this.current[r]=n[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,r,s){if(s===void 0&&(s=!1),s){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=r)}else{var u=this.undefStack[this.undefStack.length-1];u&&!u.hasOwnProperty(n)&&(u[n]=this.current[n])}r==null?delete this.current[n]:this.current[n]=r}}var k8=Tm;b("\\noexpand",function(o){var n=o.popToken();return o.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});b("\\expandafter",function(o){var n=o.popToken();return o.expandOnce(!0),{tokens:[n],numArgs:0}});b("\\@firstoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[0],numArgs:0}});b("\\@secondoftwo",function(o){var n=o.consumeArgs(2);return{tokens:n[1],numArgs:0}});b("\\@ifnextchar",function(o){var n=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return n[0].length===1&&n[0][0].text===r.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});b("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");b("\\TextOrMath",function(o){var n=o.consumeArgs(2);return o.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var Md={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};b("\\char",function(o){var n=o.popToken(),r,s="";if(n.text==="'")r=8,n=o.popToken();else if(n.text==='"')r=16,n=o.popToken();else if(n.text==="`")if(n=o.popToken(),n.text[0]==="\\")s=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new re("\\char` missing argument");s=n.text.charCodeAt(0)}else r=10;if(r){if(s=Md[n.text],s==null||s>=r)throw new re("Invalid base-"+r+" digit "+n.text);for(var a;(a=Md[o.future().text])!=null&&a<r;)s*=r,s+=a,o.popToken()}return"\\@char{"+s+"}"});var lu=(o,n,r,s)=>{var a=o.consumeArg().tokens;if(a.length!==1)throw new re("\\newcommand's first argument must be a macro name");var u=a[0].text,m=o.isDefined(u);if(m&&!n)throw new re("\\newcommand{"+u+"} attempting to redefine "+(u+"; use \\renewcommand"));if(!m&&!r)throw new re("\\renewcommand{"+u+"} when command "+u+" does not yet exist; use \\newcommand");var h=0;if(a=o.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var g="",y=o.expandNextToken();y.text!=="]"&&y.text!=="EOF";)g+=y.text,y=o.expandNextToken();if(!g.match(/^\s*[0-9]+\s*$/))throw new re("Invalid number of arguments: "+g);h=parseInt(g),a=o.consumeArg().tokens}return m&&s||o.macros.set(u,{tokens:a,numArgs:h}),""};b("\\newcommand",o=>lu(o,!1,!0,!1));b("\\renewcommand",o=>lu(o,!0,!1,!1));b("\\providecommand",o=>lu(o,!0,!0,!0));b("\\message",o=>{var n=o.consumeArgs(1)[0];return console.log(n.reverse().map(r=>r.text).join("")),""});b("\\errmessage",o=>{var n=o.consumeArgs(1)[0];return console.error(n.reverse().map(r=>r.text).join("")),""});b("\\show",o=>{var n=o.popToken(),r=n.text;return console.log(n,o.macros.get(r),Sr[r],Ze.math[r],Ze.text[r]),""});b("\\bgroup","{");b("\\egroup","}");b("~","\\nobreakspace");b("\\lq","`");b("\\rq","'");b("\\aa","\\r a");b("\\AA","\\r A");b("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");b("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");b("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");b("ℬ","\\mathscr{B}");b("ℰ","\\mathscr{E}");b("ℱ","\\mathscr{F}");b("ℋ","\\mathscr{H}");b("ℐ","\\mathscr{I}");b("ℒ","\\mathscr{L}");b("ℳ","\\mathscr{M}");b("ℛ","\\mathscr{R}");b("ℭ","\\mathfrak{C}");b("ℌ","\\mathfrak{H}");b("ℨ","\\mathfrak{Z}");b("\\Bbbk","\\Bbb{k}");b("·","\\cdotp");b("\\llap","\\mathllap{\\textrm{#1}}");b("\\rlap","\\mathrlap{\\textrm{#1}}");b("\\clap","\\mathclap{\\textrm{#1}}");b("\\mathstrut","\\vphantom{(}");b("\\underbar","\\underline{\\text{#1}}");b("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');b("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");b("\\ne","\\neq");b("≠","\\neq");b("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");b("∉","\\notin");b("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");b("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");b("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");b("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");b("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");b("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");b("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");b("⟂","\\perp");b("‼","\\mathclose{!\\mkern-0.8mu!}");b("∌","\\notni");b("⌜","\\ulcorner");b("⌝","\\urcorner");b("⌞","\\llcorner");b("⌟","\\lrcorner");b("©","\\copyright");b("®","\\textregistered");b("️","\\textregistered");b("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');b("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');b("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');b("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');b("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");b("⋮","\\vdots");b("\\varGamma","\\mathit{\\Gamma}");b("\\varDelta","\\mathit{\\Delta}");b("\\varTheta","\\mathit{\\Theta}");b("\\varLambda","\\mathit{\\Lambda}");b("\\varXi","\\mathit{\\Xi}");b("\\varPi","\\mathit{\\Pi}");b("\\varSigma","\\mathit{\\Sigma}");b("\\varUpsilon","\\mathit{\\Upsilon}");b("\\varPhi","\\mathit{\\Phi}");b("\\varPsi","\\mathit{\\Psi}");b("\\varOmega","\\mathit{\\Omega}");b("\\substack","\\begin{subarray}{c}#1\\end{subarray}");b("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");b("\\boxed","\\fbox{$\\displaystyle{#1}$}");b("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");b("\\implies","\\DOTSB\\;\\Longrightarrow\\;");b("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");b("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");b("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var jd={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},z8=new Set(["bin","rel"]);b("\\dots",function(o){var n="\\dotso",r=o.expandAfterFuture().text;return r in jd?n=jd[r]:(r.slice(0,4)==="\\not"||r in Ze.math&&z8.has(Ze.math[r].group))&&(n="\\dotsb"),n});var uu={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};b("\\dotso",function(o){var n=o.future().text;return n in uu?"\\ldots\\,":"\\ldots"});b("\\dotsc",function(o){var n=o.future().text;return n in uu&&n!==","?"\\ldots\\,":"\\ldots"});b("\\cdots",function(o){var n=o.future().text;return n in uu?"\\@cdots\\,":"\\@cdots"});b("\\dotsb","\\cdots");b("\\dotsm","\\cdots");b("\\dotsi","\\!\\cdots");b("\\dotsx","\\ldots\\,");b("\\DOTSI","\\relax");b("\\DOTSB","\\relax");b("\\DOTSX","\\relax");b("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");b("\\,","\\tmspace+{3mu}{.1667em}");b("\\thinspace","\\,");b("\\>","\\mskip{4mu}");b("\\:","\\tmspace+{4mu}{.2222em}");b("\\medspace","\\:");b("\\;","\\tmspace+{5mu}{.2777em}");b("\\thickspace","\\;");b("\\!","\\tmspace-{3mu}{.1667em}");b("\\negthinspace","\\!");b("\\negmedspace","\\tmspace-{4mu}{.2222em}");b("\\negthickspace","\\tmspace-{5mu}{.277em}");b("\\enspace","\\kern.5em ");b("\\enskip","\\hskip.5em\\relax");b("\\quad","\\hskip1em\\relax");b("\\qquad","\\hskip2em\\relax");b("\\tag","\\@ifstar\\tag@literal\\tag@paren");b("\\tag@paren","\\tag@literal{({#1})}");b("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new re("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});b("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");b("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");b("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");b("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");b("\\newline","\\\\\\relax");b("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Im=le(zn["Main-Regular"][84][1]-.7*zn["Main-Regular"][65][1]);b("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Im+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");b("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Im+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");b("\\hspace","\\@ifstar\\@hspacer\\@hspace");b("\\@hspace","\\hskip #1\\relax");b("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");b("\\ordinarycolon",":");b("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");b("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');b("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');b("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');b("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');b("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');b("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');b("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');b("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');b("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');b("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');b("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');b("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');b("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');b("∷","\\dblcolon");b("∹","\\eqcolon");b("≔","\\coloneqq");b("≕","\\eqqcolon");b("⩴","\\Coloneqq");b("\\ratio","\\vcentcolon");b("\\coloncolon","\\dblcolon");b("\\colonequals","\\coloneqq");b("\\coloncolonequals","\\Coloneqq");b("\\equalscolon","\\eqqcolon");b("\\equalscoloncolon","\\Eqqcolon");b("\\colonminus","\\coloneq");b("\\coloncolonminus","\\Coloneq");b("\\minuscolon","\\eqcolon");b("\\minuscoloncolon","\\Eqcolon");b("\\coloncolonapprox","\\Colonapprox");b("\\coloncolonsim","\\Colonsim");b("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");b("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");b("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");b("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");b("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");b("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");b("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");b("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");b("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");b("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");b("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");b("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");b("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");b("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");b("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");b("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");b("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");b("\\nleqq","\\html@mathml{\\@nleqq}{≰}");b("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");b("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");b("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");b("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");b("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");b("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");b("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");b("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");b("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");b("\\imath","\\html@mathml{\\@imath}{ı}");b("\\jmath","\\html@mathml{\\@jmath}{ȷ}");b("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");b("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");b("⟦","\\llbracket");b("⟧","\\rrbracket");b("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");b("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");b("⦃","\\lBrace");b("⦄","\\rBrace");b("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");b("⦵","\\minuso");b("\\darr","\\downarrow");b("\\dArr","\\Downarrow");b("\\Darr","\\Downarrow");b("\\lang","\\langle");b("\\rang","\\rangle");b("\\uarr","\\uparrow");b("\\uArr","\\Uparrow");b("\\Uarr","\\Uparrow");b("\\N","\\mathbb{N}");b("\\R","\\mathbb{R}");b("\\Z","\\mathbb{Z}");b("\\alef","\\aleph");b("\\alefsym","\\aleph");b("\\Alpha","\\mathrm{A}");b("\\Beta","\\mathrm{B}");b("\\bull","\\bullet");b("\\Chi","\\mathrm{X}");b("\\clubs","\\clubsuit");b("\\cnums","\\mathbb{C}");b("\\Complex","\\mathbb{C}");b("\\Dagger","\\ddagger");b("\\diamonds","\\diamondsuit");b("\\empty","\\emptyset");b("\\Epsilon","\\mathrm{E}");b("\\Eta","\\mathrm{H}");b("\\exist","\\exists");b("\\harr","\\leftrightarrow");b("\\hArr","\\Leftrightarrow");b("\\Harr","\\Leftrightarrow");b("\\hearts","\\heartsuit");b("\\image","\\Im");b("\\infin","\\infty");b("\\Iota","\\mathrm{I}");b("\\isin","\\in");b("\\Kappa","\\mathrm{K}");b("\\larr","\\leftarrow");b("\\lArr","\\Leftarrow");b("\\Larr","\\Leftarrow");b("\\lrarr","\\leftrightarrow");b("\\lrArr","\\Leftrightarrow");b("\\Lrarr","\\Leftrightarrow");b("\\Mu","\\mathrm{M}");b("\\natnums","\\mathbb{N}");b("\\Nu","\\mathrm{N}");b("\\Omicron","\\mathrm{O}");b("\\plusmn","\\pm");b("\\rarr","\\rightarrow");b("\\rArr","\\Rightarrow");b("\\Rarr","\\Rightarrow");b("\\real","\\Re");b("\\reals","\\mathbb{R}");b("\\Reals","\\mathbb{R}");b("\\Rho","\\mathrm{P}");b("\\sdot","\\cdot");b("\\sect","\\S");b("\\spades","\\spadesuit");b("\\sub","\\subset");b("\\sube","\\subseteq");b("\\supe","\\supseteq");b("\\Tau","\\mathrm{T}");b("\\thetasym","\\vartheta");b("\\weierp","\\wp");b("\\Zeta","\\mathrm{Z}");b("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");b("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");b("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");b("\\bra","\\mathinner{\\langle{#1}|}");b("\\ket","\\mathinner{|{#1}\\rangle}");b("\\braket","\\mathinner{\\langle{#1}\\rangle}");b("\\Bra","\\left\\langle#1\\right|");b("\\Ket","\\left|#1\\right\\rangle");var Fm=o=>n=>{var r=n.consumeArg().tokens,s=n.consumeArg().tokens,a=n.consumeArg().tokens,u=n.consumeArg().tokens,m=n.macros.get("|"),h=n.macros.get("\\|");n.macros.beginGroup();var g=$=>k=>{o&&(k.macros.set("|",m),a.length&&k.macros.set("\\|",h));var q=$;if(!$&&a.length){var R=k.future();R.text==="|"&&(k.popToken(),q=!0)}return{tokens:q?a:s,numArgs:0}};n.macros.set("|",g(!1)),a.length&&n.macros.set("\\|",g(!0));var y=n.consumeArg().tokens,w=n.expandTokens([...u,...y,...r]);return n.macros.endGroup(),{tokens:w.reverse(),numArgs:0}};b("\\bra@ket",Fm(!1));b("\\bra@set",Fm(!0));b("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");b("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");b("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");b("\\angln","{\\angl n}");b("\\blue","\\textcolor{##6495ed}{#1}");b("\\orange","\\textcolor{##ffa500}{#1}");b("\\pink","\\textcolor{##ff00af}{#1}");b("\\red","\\textcolor{##df0030}{#1}");b("\\green","\\textcolor{##28ae7b}{#1}");b("\\gray","\\textcolor{gray}{#1}");b("\\purple","\\textcolor{##9d38bd}{#1}");b("\\blueA","\\textcolor{##ccfaff}{#1}");b("\\blueB","\\textcolor{##80f6ff}{#1}");b("\\blueC","\\textcolor{##63d9ea}{#1}");b("\\blueD","\\textcolor{##11accd}{#1}");b("\\blueE","\\textcolor{##0c7f99}{#1}");b("\\tealA","\\textcolor{##94fff5}{#1}");b("\\tealB","\\textcolor{##26edd5}{#1}");b("\\tealC","\\textcolor{##01d1c1}{#1}");b("\\tealD","\\textcolor{##01a995}{#1}");b("\\tealE","\\textcolor{##208170}{#1}");b("\\greenA","\\textcolor{##b6ffb0}{#1}");b("\\greenB","\\textcolor{##8af281}{#1}");b("\\greenC","\\textcolor{##74cf70}{#1}");b("\\greenD","\\textcolor{##1fab54}{#1}");b("\\greenE","\\textcolor{##0d923f}{#1}");b("\\goldA","\\textcolor{##ffd0a9}{#1}");b("\\goldB","\\textcolor{##ffbb71}{#1}");b("\\goldC","\\textcolor{##ff9c39}{#1}");b("\\goldD","\\textcolor{##e07d10}{#1}");b("\\goldE","\\textcolor{##a75a05}{#1}");b("\\redA","\\textcolor{##fca9a9}{#1}");b("\\redB","\\textcolor{##ff8482}{#1}");b("\\redC","\\textcolor{##f9685d}{#1}");b("\\redD","\\textcolor{##e84d39}{#1}");b("\\redE","\\textcolor{##bc2612}{#1}");b("\\maroonA","\\textcolor{##ffbde0}{#1}");b("\\maroonB","\\textcolor{##ff92c6}{#1}");b("\\maroonC","\\textcolor{##ed5fa6}{#1}");b("\\maroonD","\\textcolor{##ca337c}{#1}");b("\\maroonE","\\textcolor{##9e034e}{#1}");b("\\purpleA","\\textcolor{##ddd7ff}{#1}");b("\\purpleB","\\textcolor{##c6b9fc}{#1}");b("\\purpleC","\\textcolor{##aa87ff}{#1}");b("\\purpleD","\\textcolor{##7854ab}{#1}");b("\\purpleE","\\textcolor{##543b78}{#1}");b("\\mintA","\\textcolor{##f5f9e8}{#1}");b("\\mintB","\\textcolor{##edf2df}{#1}");b("\\mintC","\\textcolor{##e0e5cc}{#1}");b("\\grayA","\\textcolor{##f6f7f7}{#1}");b("\\grayB","\\textcolor{##f0f1f2}{#1}");b("\\grayC","\\textcolor{##e3e5e6}{#1}");b("\\grayD","\\textcolor{##d6d8da}{#1}");b("\\grayE","\\textcolor{##babec2}{#1}");b("\\grayF","\\textcolor{##888d93}{#1}");b("\\grayG","\\textcolor{##626569}{#1}");b("\\grayH","\\textcolor{##3b3e40}{#1}");b("\\grayI","\\textcolor{##21242c}{#1}");b("\\kaBlue","\\textcolor{##314453}{#1}");b("\\kaGreen","\\textcolor{##71B307}{#1}");var Lm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class S8{constructor(n,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(n),this.macros=new $8(k8,r.macros),this.mode=s,this.stack=[]}feed(n){this.lexer=new qd(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var r,s,a;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:s}=this.consumeArg(["]"])}else({tokens:a,start:r,end:s}=this.consumeArg());return this.pushToken(new Yt("EOF",s.loc)),this.pushTokens(a),new Yt("",Ot.range(r,s))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var r=[],s=n&&n.length>0;s||this.consumeSpaces();var a=this.future(),u,m=0,h=0;do{if(u=this.popToken(),r.push(u),u.text==="{")++m;else if(u.text==="}"){if(--m,m===-1)throw new re("Extra }",u)}else if(u.text==="EOF")throw new re("Unexpected end of input in a macro argument, expected '"+(n&&s?n[h]:"}")+"'",u);if(n&&s)if((m===0||m===1&&n[h]==="{")&&u.text===n[h]){if(++h,h===n.length){r.splice(-h,h);break}}else h=0}while(m!==0||s);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:u}}consumeArgs(n,r){if(r){if(r.length!==n+1)throw new re("The length of delimiters doesn't match the number of args!");for(var s=r[0],a=0;a<s.length;a++){var u=this.popToken();if(s[a]!==u.text)throw new re("Use of the macro doesn't match its definition",u)}}for(var m=[],h=0;h<n;h++)m.push(this.consumeArg(r&&r[h+1]).tokens);return m}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new re("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var r=this.popToken(),s=r.text,a=r.noexpand?null:this._getExpansion(s);if(a==null||n&&a.unexpandable){if(n&&a==null&&s[0]==="\\"&&!this.isDefined(s))throw new re("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var u=a.tokens,m=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){u=u.slice();for(var h=u.length-1;h>=0;--h){var g=u[h];if(g.text==="#"){if(h===0)throw new re("Incomplete placeholder at end of macro body",g);if(g=u[--h],g.text==="#")u.splice(h+1,1);else if(/^[1-9]$/.test(g.text))u.splice(h,2,...m[+g.text-1]);else throw new re("Not a valid argument number",g)}}}return this.pushTokens(u),u.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Yt(n)]):void 0}expandTokens(n){var r=[],s=this.stack.length;for(this.pushTokens(n);this.stack.length>s;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(n){var r=this.expandMacro(n);return r&&r.map(s=>s.text).join("")}_getExpansion(n){var r=this.macros.get(n);if(r==null)return r;if(n.length===1){var s=this.lexer.catcodes[n];if(s!=null&&s!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var u=0;if(a.includes("#"))for(var m=a.replace(/##/g,"");m.includes("#"+(u+1));)++u;for(var h=new qd(a,this.settings),g=[],y=h.lex();y.text!=="EOF";)g.push(y),y=h.lex();g.reverse();var w={tokens:g,numArgs:u};return w}return a}isDefined(n){return this.macros.has(n)||Sr.hasOwnProperty(n)||Ze.math.hasOwnProperty(n)||Ze.text.hasOwnProperty(n)||Lm.hasOwnProperty(n)}isExpandable(n){var r=this.macros.get(n);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Sr.hasOwnProperty(n)&&!Sr[n].primitive}}var Ad=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ss=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Al={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Cd={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class zs{constructor(n,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new S8(n,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(n,r){if(r===void 0&&(r=!0),this.fetch().text!==n)throw new re("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var r=this.nextToken;this.consume(),this.gullet.pushToken(new Yt("}")),this.gullet.pushTokens(n);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(n,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(zs.endOfExpression.has(a.text)||r&&a.text===r||n&&Sr[a.text]&&Sr[a.text].infix)break;var u=this.parseAtom(r);if(u){if(u.type==="internal")continue}else break;s.push(u)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(n){for(var r=-1,s,a=0;a<n.length;a++)if(n[a].type==="infix"){if(r!==-1)throw new re("only one infix operator per group",n[a].token);r=a,s=n[a].replaceWith}if(r!==-1&&s){var u,m,h=n.slice(0,r),g=n.slice(r+1);h.length===1&&h[0].type==="ordgroup"?u=h[0]:u={type:"ordgroup",mode:this.mode,body:h},g.length===1&&g[0].type==="ordgroup"?m=g[0]:m={type:"ordgroup",mode:this.mode,body:g};var y;return s==="\\\\abovefrac"?y=this.callFunction(s,[u,n[r],m],[]):y=this.callFunction(s,[u,m],[]),[y]}else return n}handleSupSubscript(n){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var a;do{var u;a=this.parseGroup(n)}while(((u=a)==null?void 0:u.type)==="internal");if(!a)throw new re("Expected group after '"+s+"'",r);return a}formatUnsupportedCmd(n){for(var r=[],s=0;s<n.length;s++)r.push({type:"textord",mode:"text",text:n[s]});var a={type:"text",mode:this.mode,body:r},u={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return u}parseAtom(n){var r=this.parseGroup("atom",n);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,a;;){this.consumeSpaces();var u=this.fetch();if(u.text==="\\limits"||u.text==="\\nolimits"){if(r&&r.type==="op"){var m=u.text==="\\limits";r.limits=m,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=u.text==="\\limits");else throw new re("Limit controls must follow a math operator",u);this.consume()}else if(u.text==="^"){if(s)throw new re("Double superscript",u);s=this.handleSupSubscript("superscript")}else if(u.text==="_"){if(a)throw new re("Double subscript",u);a=this.handleSupSubscript("subscript")}else if(u.text==="'"){if(s)throw new re("Double superscript",u);var h={type:"textord",mode:this.mode,text:"\\prime"},g=[h];for(this.consume();this.fetch().text==="'";)g.push(h),this.consume();this.fetch().text==="^"&&g.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:g}}else if(ss[u.text]){var y=Ad.test(u.text),w=[];for(w.push(new Yt(ss[u.text])),this.consume();;){var $=this.fetch().text;if(!ss[$]||Ad.test($)!==y)break;w.unshift(new Yt(ss[$])),this.consume()}var k=this.subparse(w);y?a={type:"ordgroup",mode:"math",body:k}:s={type:"ordgroup",mode:"math",body:k}}else break}return s||a?{type:"supsub",mode:this.mode,base:r,sup:s,sub:a}:r}parseFunction(n,r){var s=this.fetch(),a=s.text,u=Sr[a];if(!u)return null;if(this.consume(),r&&r!=="atom"&&!u.allowedInArgument)throw new re("Got function '"+a+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!u.allowedInText)throw new re("Can't use function '"+a+"' in text mode",s);if(this.mode==="math"&&u.allowedInMath===!1)throw new re("Can't use function '"+a+"' in math mode",s);var{args:m,optArgs:h}=this.parseArguments(a,u);return this.callFunction(a,m,h,s,n)}callFunction(n,r,s,a,u){var m={funcName:n,parser:this,token:a,breakOnTokenText:u},h=Sr[n];if(h&&h.handler)return h.handler(m,r,s);throw new re("No function handler for "+n)}parseArguments(n,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var a=[],u=[],m=0;m<s;m++){var h=r.argTypes&&r.argTypes[m],g=m<r.numOptionalArgs;(r.primitive&&h==null||r.type==="sqrt"&&m===1&&u[0]==null)&&(h="primitive");var y=this.parseGroupOfType("argument to '"+n+"'",h,g);if(g)u.push(y);else if(y!=null)a.push(y);else throw new re("Null argument, please report this as a bug")}return{args:a,optArgs:u}}parseGroupOfType(n,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var a=this.parseArgumentGroup(s,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var u=this.parseStringGroup("raw",s);return u!=null?{type:"raw",mode:"text",string:u.text}:null}case"primitive":{if(s)throw new re("A primitive argument cannot be optional");var m=this.parseGroup(n);if(m==null)throw new re("Expected group as "+n,this.fetch());return m}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new re("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var a="",u;(u=this.fetch()).text!=="EOF";)a+=u.text,this.consume();return this.consume(),s.text=a,s}parseRegexGroup(n,r){for(var s=this.fetch(),a=s,u="",m;(m=this.fetch()).text!=="EOF"&&n.test(u+m.text);)a=m,u+=a.text,this.consume();if(u==="")throw new re("Invalid "+r+": '"+s.text+"'",s);return s.range(a,u)}parseColorGroup(n){var r=this.parseStringGroup("color",n);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new re("Invalid color: '"+r.text+"'",r);var a=s[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(n){var r,s=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",n),!r)return null;!n&&r.text.length===0&&(r.text="0pt",s=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new re("Invalid size: '"+r.text+"'",r);var u={number:+(a[1]+a[2]),unit:a[3]};if(!Yd(u))throw new re("Invalid unit: '"+u.unit+"'",r);return{type:"size",mode:this.mode,value:u,isBlank:s}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(n,r){var s=this.gullet.scanArgument(n);if(s==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var u=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var m={type:"ordgroup",mode:this.mode,loc:s.loc,body:u};return r&&this.switchMode(a),m}parseGroup(n,r){var s=this.fetch(),a=s.text,u;if(a==="{"||a==="\\begingroup"){this.consume();var m=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var h=this.parseExpression(!1,m),g=this.fetch();this.expect(m),this.gullet.endGroup(),u={type:"ordgroup",mode:this.mode,loc:Ot.range(s,g),body:h,semisimple:a==="\\begingroup"||void 0}}else if(u=this.parseFunction(r,n)||this.parseSymbol(),u==null&&a[0]==="\\"&&!Lm.hasOwnProperty(a)){if(this.settings.throwOnError)throw new re("Undefined control sequence: "+a,s);u=this.formatUnsupportedCmd(a),this.consume()}return u}formLigatures(n){for(var r=n.length-1,s=0;s<r;++s){var a=n[s],u=a.text;u==="-"&&n[s+1].text==="-"&&(s+1<r&&n[s+2].text==="-"?(n.splice(s,3,{type:"textord",mode:"text",loc:Ot.range(a,n[s+2]),text:"---"}),r-=2):(n.splice(s,2,{type:"textord",mode:"text",loc:Ot.range(a,n[s+1]),text:"--"}),r-=1)),(u==="'"||u==="`")&&n[s+1].text===u&&(n.splice(s,2,{type:"textord",mode:"text",loc:Ot.range(a,n[s+1]),text:u+u}),r-=1)}}parseSymbol(){var n=this.fetch(),r=n.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),a=s.charAt(0)==="*";if(a&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new re(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:a}}Cd.hasOwnProperty(r[0])&&!Ze[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',n),r=Cd[r[0]]+r.slice(1));var u=w8.exec(r);u&&(r=r.substring(0,u.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var m;if(Ze[this.mode][r]){this.settings.strict&&this.mode==="math"&&Pl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',n);var h=Ze[this.mode][r].group,g=Ot.range(n),y;if(_v.hasOwnProperty(h)){var w=h;y={type:"atom",mode:this.mode,family:w,loc:g,text:r}}else y={type:h,mode:this.mode,loc:g,text:r};m=y}else if(r.charCodeAt(0)>=128)this.settings.strict&&(Qd(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),n)),m={type:"textord",mode:"text",loc:Ot.range(n),text:r};else return null;if(this.consume(),u)for(var $=0;$<u[0].length;$++){var k=u[0][$];if(!Al[k])throw new re("Unknown accent ' "+k+"'",n);var q=Al[k][this.mode]||Al[k].text;if(!q)throw new re("Accent "+k+" unsupported in "+this.mode+" mode",n);m={type:"accent",mode:this.mode,loc:Ot.range(n),label:q,isStretchy:!1,isShifty:!0,base:m}}return m}}zs.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var cu=function(n,r){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new zs(n,r);delete s.gullet.macros.current["\\df@tag"];var a=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new re("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:s.subparse([new Yt("\\df@tag")])}]}return a},Om=function(n,r,s){r.textContent="";var a=du(n,s).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Om=function(){throw new re("KaTeX doesn't work in quirks mode.")});var T8=function(n,r){var s=du(n,r).toMarkup();return s},q8=function(n,r){var s=new Vl(r);return cu(n,s)},Hm=function(n,r,s){if(s.throwOnError||!(n instanceof re))throw n;var a=ee(["katex-error"],[new ln(r)]);return a.setAttribute("title",n.toString()),a.setAttribute("style","color:"+s.errorColor),a},du=function(n,r){var s=new Vl(r);try{var a=cu(n,s);return Bv(a,n,s)}catch(u){return Hm(u,n,s)}},M8=function(n,r){var s=new Vl(r);try{var a=cu(n,s);return Iv(a,n,s)}catch(u){return Hm(u,n,s)}},j8="0.16.33",A8={Span:Do,Anchor:Yl,SymbolNode:ln,SvgNode:Un,PathNode:qr,LineNode:El},Rd={version:j8,render:Om,renderToString:T8,ParseError:re,SETTINGS_SCHEMA:as,__parse:q8,__renderToDomTree:du,__renderToHTMLTree:M8,__setFontMetrics:pv,__defineSymbol:d,__defineFunction:de,__defineMacro:b,__domTree:A8};function C8(o){if(!o)return"";let n=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Rd.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}});return n=n.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Rd.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}}),n}class hs{constructor(n){this._perm=n}get length(){return this._perm.length}originalIndex(n){return this._perm[n]}displayIndex(n){return this._perm.indexOf(n)}apply(n){return this._perm.map(r=>n[r])}static random(n){const r=Array.from({length:n},(s,a)=>a);for(let s=n-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return new hs(r)}static identity(n){return new hs(Array.from({length:n},(r,s)=>s))}}function R8({nodeId:o,nodes:n,questionBank:r,onAnswer:s,onSkip:a,lang:u,excludeIndices:m=[],isMobile:h}){const g=n.find(B=>B.id===o),y=Q.useMemo(()=>b5(r,o,m),[o,m]),w="#4a9eff",$=g?u==="pl"?g.labelPl:g.label:o,k=Q.useMemo(()=>y?hs.random(y.options.length):null,[y]),q=Q.useMemo(()=>k?k.apply(y.options):[],[k,y]),R=Q.useMemo(()=>k?k.displayIndex(y.correct):-1,[k,y]),[E,L]=Q.useState(null),[P,H]=Q.useState(!1),W=()=>{E!==null&&H(!0)},N=()=>{s(E===R,y,y.index),L(null),H(!1)};Q.useEffect(()=>{const B=U=>{U.key==="Escape"&&a((y==null?void 0:y.index)??-1)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[a,y]);const F=B=>_.jsx("span",{dangerouslySetInnerHTML:{__html:C8(B)}}),V=h?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:se.surface,border:`1px solid ${w}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:se.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:se.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${w}40`,borderRadius:10,padding:"14px 16px",color:se.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return _.jsxs("div",{style:V,children:[h&&_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[_.jsx("div",{style:{color:w,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:$}),_.jsx("button",{onClick:()=>a((y==null?void 0:y.index)??-1),style:{background:`${se.textDim}22`,border:`1px solid ${se.border}`,color:se.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:te("close",u)})]}),y?_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{fontSize:13,color:se.textBody,marginBottom:12,lineHeight:1.65},children:F(y.q)}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:q.map((B,U)=>{let K=se.bg,be=se.border,ve=se.textBody;return E===U&&!P&&(K=`${w}22`,be=w,ve=w),P&&(U===R?(K="#27ae6022",be="#27ae60",ve="#2ecc71"):U===E&&(K="#e74c3c22",be="#e74c3c",ve="#ff6b6b")),_.jsxs("button",{onClick:()=>{P||L(U)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:P?"default":"pointer",background:K,border:`1px solid ${be}`,color:ve,lineHeight:1.5,minHeight:38},children:[_.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][U],"."]}),F(B)]},U)})}),P&&y.hint&&_.jsx("div",{style:{fontSize:11,color:se.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:F(y.hint)}),P?_.jsx("button",{onClick:N,style:{...To(E===R?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:te(E===R?"knownConfirm":"unknownConfirm",u)}):_.jsx("button",{onClick:W,disabled:E===null,style:{...To(w),width:"100%",opacity:E===null?.4:1,fontSize:13},children:te("checkAnswer",u)})]}):_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:se.textDim,fontSize:12,marginBottom:12},children:te("noQuestion",u)}),_.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[_.jsx("button",{onClick:()=>s(!0,null,-1),style:{...To("#27ae60"),fontSize:12,padding:"8px 14px"},children:te("yesKnow",u)}),_.jsx("button",{onClick:()=>s(!1,null,-1),style:{...To("#e74c3c"),fontSize:12,padding:"8px 14px"},children:te("noKnow",u)}),_.jsx("button",{onClick:()=>a(-1),style:{...To("#3a4d63"),fontSize:12,padding:"8px 14px"},children:te("skipBtn",u)})]})]})]})}const E8={position:"absolute",right:16,top:16,width:230,background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function P8({belief:o,frontier:n,visibleFrontier:r,hasStarted:s,nextSuggestedId:a,sessionComplete:u,adjacency:m,expectedRemaining:h,pCorrect:g,questionsAnswered:y,nodes:w,lang:$,onReset:k,onNodeClick:q,SCOPE_LABELS:R,isMobile:E}){var be,ve;const L=Object.fromEntries(w.map(ue=>[ue.id,ue])),P=ue=>{var ye,$e;return $==="pl"?(ye=L[ue])==null?void 0:ye.labelPl:($e=L[ue])==null?void 0:$e.label},H=w.filter(ue=>o[ue.id]==="known"),W=w.filter(ue=>o[ue.id]==="unknown"),N=w.length,F=[{label:te("statKnown",$),count:H.length,color:"#27ae60"},{label:te("statUnknown",$),count:W.length,color:"#e74c3c"},{label:te("statRemaining",$),count:h??"-",color:"#4a9eff"}],V=g?Math.round(g*100):50,B=E?13:11,U=E?11:9,K=_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{fontWeight:700,fontSize:E?14:12,marginBottom:10,color:se.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{children:[te("diagHeader",$)," ",u?"✓":""]}),_.jsx("button",{onClick:k,style:{fontSize:U,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${se.textFaint}`,color:se.textDim,minHeight:E?32:"auto"},children:te("reset",$)})]}),_.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:F.map(({label:ue,count:ye,color:$e})=>_.jsxs("div",{style:{flex:1,textAlign:"center",background:`${$e}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${$e}40`},children:[_.jsx("div",{style:{color:$e,fontWeight:700,fontSize:E?20:15},children:ye}),_.jsx("div",{style:{color:se.textDim,fontSize:U},children:ue})]},ue))}),!u&&s&&_.jsxs("div",{style:{fontSize:U,color:se.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[_.jsxs("span",{children:[te("answered",$),": ",_.jsx("span",{style:{color:se.textPrimary},children:y})]}),_.jsxs("span",{children:[te("estimated",$),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:["~",h??"-"]})]}),_.jsxs("span",{children:[te("accuracy",$),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:[V,"%"]})]})]}),u&&_.jsxs("div",{children:[_.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[_.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:E?14:12,marginBottom:4},children:te("sessionDone",$)}),_.jsxs("div",{style:{color:se.textDim,fontSize:U,lineHeight:1.6},children:[te("sessionDoneSub",$)," ",_.jsx("span",{style:{color:se.textPrimary},children:y})," ",te("sessionDoneQ",$),"."," ",te("sessionDoneClass",$)," ",H.length+W.length,"/",N,".",_.jsx("br",{}),te("sessionDoneAcc",$),": ",_.jsxs("span",{style:{color:"#4a9eff"},children:[V,"%"]}),"."," ",te("sessionDoneKnown",$)," ",_.jsx("span",{style:{color:"#2ecc71"},children:H.length}),","," ",te("sessionDoneStudy",$)," ",_.jsx("span",{style:{color:"#e74c3c"},children:W.length}),"."]})]}),W.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#e74c3c",fontSize:B,fontWeight:600,marginBottom:5},children:[te("toStudy",$)," (",W.length,")"]}),w.filter(ue=>o[ue.id]==="unknown").filter(ue=>(m.prereqs[ue.id]??[]).every(ye=>o[ye]==="known")).slice(0,8).map(ue=>{var ye,$e;return _.jsxs("div",{style:{padding:E?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:B,color:"#ff8a8a",lineHeight:1.4},children:[P(ue.id),_.jsx("div",{style:{fontSize:U,color:se.textDim,marginTop:1},children:($e=R==null?void 0:R[(ye=L[ue.id])==null?void 0:ye.scope])==null?void 0:$e[$==="pl"?"pl":"en"]})]},ue.id)})]}),H.length>0&&_.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:B},children:["✓ ",te("knownList",$)," ",H.length]})]}),!u&&!s&&_.jsxs("div",{style:{marginBottom:10},children:[a&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:B,fontWeight:600,marginBottom:5},children:te("startHere",$)}),_.jsxs("div",{onClick:()=>q==null?void 0:q(a),style:{padding:E?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:B,color:"#a8d4ff",minHeight:E?44:"auto"},children:[_.jsx("div",{style:{fontWeight:600},children:P(a)}),_.jsxs("div",{style:{fontSize:U,color:se.textDim,marginTop:2},children:[(ve=R==null?void 0:R[(be=L[a])==null?void 0:be.scope])==null?void 0:ve[$==="pl"?"pl":"en"]," · ",te("startHereSub",$)]})]})]}),_.jsx("div",{style:{fontSize:U,color:se.textFaint,marginTop:8,lineHeight:1.5},children:te("clickAnyNode",$)})]}),!u&&s&&r.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#f39c12",fontSize:B,fontWeight:600,marginBottom:5},children:te("whatNext",$)}),r.map(ue=>{var $e,He;const ye=ue===a;return _.jsxs("div",{onClick:()=>q==null?void 0:q(ue),style:{padding:E?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:ye?"#4a9eff18":"#f39c1215",border:`1px solid ${ye?"#4a9eff55":"#f39c1240"}`,fontSize:B,color:ye?"#a8d4ff":"#f5d78e",minHeight:E?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[_.jsxs("div",{children:[_.jsx("div",{children:P(ue)}),_.jsxs("div",{style:{fontSize:U,color:se.textDim,marginTop:1},children:[(He=R==null?void 0:R[($e=L[ue])==null?void 0:$e.scope])==null?void 0:He[$==="pl"?"pl":"en"],ye&&_.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:te("best",$)})]})]}),_.jsx("span",{style:{opacity:.7},children:ye?"★":"→"})]},ue)})]}),!u&&H.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#27ae60",fontSize:B,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",te("knownList",$)," (",H.length,")"]}),H.map(ue=>_.jsx("div",{style:{fontSize:U,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:P(ue.id)},ue.id))]}),!u&&!E&&_.jsxs("div",{style:{marginTop:12,color:se.textFaint,fontSize:U,lineHeight:1.5},children:[te("hintClick",$),_.jsx("br",{}),te("hintShift",$),_.jsx("br",{}),te("hintGreen",$)]})]});return E?_.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),K]}):_.jsx("div",{style:E8,children:K})}function D8({nodes:o,lang:n,targetNode:r,subgraphIds:s,ddClassification:a,betaBeliefs:u,ddComplete:m,ddNextNodeId:h,questionsAnswered:g,onNodeClick:y,onReset:w,isMobile:$}){const k=Object.fromEntries(o.map(B=>[B.id,B])),q=B=>{var U,K;return n==="pl"?(U=k[B])==null?void 0:U.labelPl:(K=k[B])==null?void 0:K.label},R=s.filter(B=>a[B]==="known"),E=s.filter(B=>a[B]==="unknown"),L=s.filter(B=>a[B]==="uncertain"),P=s.length,H=R.length+E.length,W=P>0?Math.round(H/P*100):0,N=q(r),F=$?11:9,V=$?{position:"fixed",left:0,right:0,bottom:0,background:"#0d1520f5",backdropFilter:"blur(8px)",borderTop:"1px solid #1e2d45",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#0d1520ee",backdropFilter:"blur(6px)",border:"1px solid #1e2d45",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return _.jsxs("div",{style:V,children:[$&&_.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:_.jsx("div",{style:{width:36,height:4,borderRadius:2,background:se.textFaint}})}),_.jsxs("div",{style:{fontWeight:700,fontSize:$?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{children:[te("deepDiveHeader",n)," ",m?"✓":""]}),_.jsx("button",{onClick:w,style:{fontSize:F,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${se.textFaint}`,color:se.textDim,minHeight:$?32:"auto"},children:te("reset",n)})]}),_.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[_.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:te("deepDiveTarget",n)}),_.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:N}),_.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[P," ",te("deepDiveNodes",n)]})]}),_.jsxs("div",{style:{marginBottom:10},children:[_.jsx("div",{style:{height:5,borderRadius:3,background:"#0a0e17",overflow:"hidden",marginBottom:4},children:_.jsx("div",{style:{height:"100%",borderRadius:3,width:`${W}%`,background:m?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[_.jsxs("span",{children:[te("classified",n),": ",_.jsxs("span",{style:{color:"#f5f6fa"},children:[H,"/",P]})]}),_.jsxs("span",{children:[te("questions",n),": ",_.jsx("span",{style:{color:"#f5f6fa"},children:g})]})]})]}),m&&_.jsxs("div",{children:[_.jsxs("div",{style:{background:R.length>E.length?"#27ae6018":"#e74c3c18",border:`1px solid ${R.length>E.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[_.jsx("div",{style:{color:R.length>E.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:te("diagReady",n)}),_.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[te("diagKnown",n),": ",_.jsx("span",{style:{color:"#2ecc71"},children:R.length})," / ",te("diagStudy",n),": ",_.jsx("span",{style:{color:"#ff6b6b"},children:E.length})," / ",te("diagTotal",n),": ",P]})]}),E.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:te("studyThese",n)}),s.filter(B=>a[B]==="unknown").slice(0,8).map(B=>{var U;return _.jsx(Ed,{id:B,label:q(B),scope:(U=k[B])==null?void 0:U.scope,classification:"unknown",beta:u[B]},B)})]}),R.length>0&&_.jsxs(_.Fragment,{children:[_.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:te("mastered",n)}),s.filter(B=>a[B]==="known").map(B=>{var U;return _.jsx(Ed,{id:B,label:q(B),scope:(U=k[B])==null?void 0:U.scope,classification:"known",beta:u[B]},B)})]})]}),!m&&_.jsxs(_.Fragment,{children:[h&&_.jsxs("div",{style:{marginBottom:10},children:[_.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:te("nextQuestion",n)}),_.jsxs("div",{onClick:()=>y==null?void 0:y(h),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[q(h),_.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[te("confidence",n),": ",N8(u[h])]})]})]}),L.length>0&&_.jsxs(_.Fragment,{children:[_.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[te("unclassified",n)," (",L.length,")"]}),L.map(B=>_.jsxs("div",{onClick:()=>y==null?void 0:y(B),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:B===h?"#4a9eff18":"#f39c1212",border:`1px solid ${B===h?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:B===h?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:q(B)}),_.jsx(Gm,{beta:u[B]})]},B))]})]})]})}function N8(o){if(!o)return"50%";const n=o.alpha/(o.alpha+o.beta);return`${Math.round(n*100)}%`}function Gm({beta:o}){const n=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),a=n>.6?"#27ae60":n<.4?"#e74c3c":"#f39c12";return _.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#0a0e17",overflow:"hidden",flexShrink:0},children:_.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(n*100)}%`,background:a,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function Ed({id:o,label:n,scope:r,classification:s,beta:a}){const u=s==="known"?"#27ae60":"#e74c3c";return _.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${u}10`,border:`1px solid ${u}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("span",{children:n}),_.jsx(Gm,{beta:a})]})}function B8({lang:o,diagMode:n,SCOPE_COLORS:r,SCOPE_LABELS:s,SECTIONS:a}){const[u,m]=Q.useState(!1),h=Object.entries(r).map(([g,y])=>{var w;return{color:y,label:(w=s[g])==null?void 0:w[o==="pl"?"pl":"en"]}});return _.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#0d152095",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[_.jsxs("button",{onClick:()=>m(g=>!g),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[_.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),te("legendTitle",o)]}),u&&_.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[n&&_.jsxs("div",{style:{marginBottom:8},children:[[{color:se.knownHi,label:te("legendKnown",o)},{color:se.unknownHi,label:te("legendUnknown",o)},{color:se.frontier,label:te("legendFrontier",o)},{color:"#4a5568",label:te("legendUnclassified",o)}].map(({color:g,label:y})=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:y})]},y)),_.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),_.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:te("legendScopes",o)}),h.map(({color:g,label:y})=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:y})]},y)),_.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[_.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:te("legendStages",o)}),Object.entries(a).map(([g,y])=>_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[_.jsx("div",{style:{width:8,height:3,borderRadius:1,background:y.color,flexShrink:0}}),_.jsx("span",{style:{color:"#8a9dbe"},children:y.label})]},g))]})]})]})}function I8({nodes:o,lang:n,onSelect:r,onClose:s,SECTIONS:a,SCOPE_COLORS:u}){const[m,h]=Q.useState(""),[g,y]=Q.useState(-1),w=Q.useRef([]),$=Q.useMemo(()=>Object.keys(a??{}),[a]),k=Q.useMemo(()=>{const P=m.toLowerCase();return o.filter(H=>!P||H.label.toLowerCase().includes(P)||H.labelPl.toLowerCase().includes(P))},[o,m]),q=Q.useMemo(()=>{const P={};for(const W of $)P[W]=[];for(const W of k){const N=W.section??$[0]??"default";P[N]||(P[N]=[]),P[N].push(W)}const H=[];for(const W of $)for(const N of P[W]??[])H.push(N);return H},[k,$]),R=Q.useMemo(()=>{const P={};for(const H of $)P[H]=[];for(const H of k){const W=H.section??$[0]??"default";P[W]||(P[W]=[]),P[W].push(H)}return P},[k,$]),E=P=>n==="pl"?P.labelPl:P.label;Q.useEffect(()=>{const P=H=>{if(H.key==="Escape"){s();return}H.key==="ArrowDown"&&(H.preventDefault(),y(W=>Math.min(W+1,q.length-1))),H.key==="ArrowUp"&&(H.preventDefault(),y(W=>Math.max(W-1,0))),H.key==="Enter"&&g>=0&&q[g]&&(H.preventDefault(),r(q[g].id))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[q,g,s,r]),Q.useEffect(()=>{g>=0&&w.current[g]&&w.current[g].scrollIntoView({block:"nearest"})},[g]),Q.useEffect(()=>{y(-1)},[m]);const L={title:n==="pl"?"Wybierz cel":"Select Goal",subtitle:n==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:n==="pl"?"Szukaj tematu...":"Search topics...",noResults:n==="pl"?"Brak wyników":"No results",footer:`${k.length} / ${o.length} ${n==="pl"?"tematów":"topics"}`,cancel:n==="pl"?"Anuluj":"Cancel"};return _.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:P=>{P.target===P.currentTarget&&s()},children:_.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #1e2d45",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:L.title}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:L.subtitle})]}),_.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),_.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:_.jsx("input",{autoFocus:!0,value:m,onChange:P=>h(P.target.value),placeholder:L.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#0a0e17",border:"1px solid #1e2d45",color:"#c8d6e5",outline:"none"}})}),_.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[$.map(P=>{const H=R[P];if(!H||H.length===0)return null;const W=a==null?void 0:a[P];return _.jsxs("div",{style:{marginBottom:12},children:[_.jsx("div",{style:{fontSize:9,fontWeight:700,color:(W==null?void 0:W.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(W==null?void 0:W.label)??P}),_.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:H.map(N=>{const F=q.indexOf(N),V=(u==null?void 0:u[N.scope])??"#4a9eff",B=g===F;return _.jsxs("button",{ref:U=>w.current[F]=U,onClick:()=>r(N.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:B?`${V}35`:`${V}15`,border:`1px solid ${B?V:`${V}40`}`,color:"#c8d6e5",cursor:"pointer",outline:B?`2px solid ${V}`:"none",outlineOffset:1},onMouseEnter:U=>{U.currentTarget.style.background=`${V}30`,U.currentTarget.style.borderColor=`${V}90`},onMouseLeave:U=>{q.indexOf(N)!==g&&(U.currentTarget.style.background=`${V}15`,U.currentTarget.style.borderColor=`${V}40`)},children:[_.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:V,verticalAlign:"middle"}}),E(N)]},N.id)})})]},P)}),k.length===0&&_.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:L.noResults})]}),_.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:L.footer}),_.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:L.cancel})]})]})})}function F8({isOpen:o,onSelect:n,onClose:r,lang:s="pl"}){const a=[{id:"quick",icon:"⚡",color:"#4a9eff",label:te("modeQuickLabel",s),description:te("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:te("modeDeepLabel",s),description:te("modeDeepDesc",s)}],[u,m]=Q.useState(null),h=Q.useRef(null);return Q.useEffect(()=>{o&&(m(null),setTimeout(()=>{var g;return(g=h.current)==null?void 0:g.focus()},100))},[o]),Q.useEffect(()=>{if(!o)return;const g=y=>{y.key==="Escape"&&r(),y.key==="Enter"&&u&&n(u)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[o,u,r,n]),o?_.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:g=>{g.target===g.currentTarget&&r()},children:_.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#0d1520",border:"1px solid #1e2d45",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #1e2d45"},children:[_.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:te("modePickerTitle",s)}),_.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:te("modePickerSub",s)})]}),_.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:a.map((g,y)=>_.jsxs("button",{ref:y===0?h:null,onClick:()=>m(g.id),onDoubleClick:()=>n(g.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:u===g.id?`${g.color}18`:"#0a0e17",border:`1px solid ${u===g.id?g.color:"#1e2d45"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:w=>{w.currentTarget.style.background=`${g.color}18`,w.currentTarget.style.borderColor=`${g.color}60`},onMouseLeave:w=>{u!==g.id&&(w.currentTarget.style.background="#0a0e17",w.currentTarget.style.borderColor="#1e2d45")},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[_.jsx("span",{style:{fontSize:16},children:g.icon}),_.jsx("span",{style:{fontWeight:600,color:u===g.id?g.color:"#f5f6fa"},children:g.label})]}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:g.description})]},g.id))}),_.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #1e2d45",color:"#6b7d9a"},children:te("cancel",s)}),_.jsx("button",{onClick:()=>u&&n(u),disabled:!u,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:u?"pointer":"not-allowed",background:u?"#4a9eff":"#1e2d45",border:"none",color:u?"#fff":"#3a4d63",opacity:u?1:.5},children:te("next",s)})]})]})}):null}const L8=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function O8({isOpen:o,onSelect:n,onClose:r,lang:s}){return Q.useEffect(()=>{if(!o)return;const a=u=>{u.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,r]),o?_.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&r()},children:_.jsxs("div",{style:{width:"100%",maxWidth:480,background:se.surface,border:"1px solid #1e2d45",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[_.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #0a1628 100%)",borderBottom:"1px solid #1e2d45",textAlign:"center"},children:[_.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),_.jsx("div",{style:{fontWeight:700,fontSize:18,color:se.textPrimary,marginBottom:8},children:te("onboardingTitle",s)}),_.jsx("div",{style:{fontSize:12,color:se.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:te("onboardingSub",s)})]}),_.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[_.jsx("div",{style:{fontSize:11,color:se.textFaint,marginBottom:2},children:te("onboardingChoose",s)}),L8.map(({id:a,key:u,descKey:m,color:h})=>_.jsxs("button",{onClick:()=>n(a),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${h}0e`,border:`1px solid ${h}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${h}1c`,g.currentTarget.style.borderColor=`${h}70`},onMouseLeave:g=>{g.currentTarget.style.background=`${h}0e`,g.currentTarget.style.borderColor=`${h}30`},children:[_.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0,marginTop:5}}),_.jsxs("div",{style:{flex:1},children:[_.jsx("div",{style:{fontWeight:600,fontSize:13,color:se.textPrimary,marginBottom:3},children:te(u,s)}),_.jsx("div",{style:{fontSize:11,color:se.textDim,lineHeight:1.5},children:te(m,s)})]}),_.jsx("div",{style:{color:h,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},a))]}),_.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:se.textFaint,textAlign:"center"},children:te("onboardingLangHint",s)})]})}):null}function H8({lang:o,setLang:n,layoutId:r,layouts:s,onLayoutChange:a,searchTerm:u,setSearchTerm:m,filterScope:h,toggleScope:g,clearScope:y,filterSection:w,toggleSection:$,clearSection:k,SECTIONS:q,SCOPE_COLORS:R,SCOPE_LABELS:E,isMobile:L}){const[P,H]=Q.useState(!1),W=Q.useRef(null);Q.useEffect(()=>{if(!P)return;const F=B=>{W.current&&!W.current.contains(B.target)&&H(!1)},V=B=>{B.key==="Escape"&&H(!1)};return document.addEventListener("mousedown",F),document.addEventListener("keydown",V),()=>{document.removeEventListener("mousedown",F),document.removeEventListener("keydown",V)}},[P]);const N=h.size+w.size+(u?1:0);return _.jsxs("div",{ref:W,style:{position:"relative"},children:[_.jsxs("button",{onClick:()=>H(F=>!F),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:P||N>0?"1px solid #4a9eff":`1px solid ${se.border}`,background:P?"#4a9eff22":"transparent",color:P||N>0?"#4a9eff":se.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:te("moreOptions",o),children:[_.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[_.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),_.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),_.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),N>0&&_.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:N})]}),P&&_.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:L?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:se.surface,border:`1px solid ${se.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:te("search",o)}),_.jsx("input",{value:u,onChange:F=>m(F.target.value),placeholder:te("search",o),style:{width:"100%",boxSizing:"border-box",background:se.bg,border:`1px solid ${se.border}`,borderRadius:6,color:se.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),_.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(F=>_.jsx("button",{onClick:()=>n(F),style:{...qi(o===F,F==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:F.toUpperCase()},F))})]}),_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:te("layoutLabel",o)}),_.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(F=>_.jsx("button",{onClick:()=>a(F.meta.id),style:{...qi(r===F.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:F.meta.label},F.meta.id))})]}),_.jsxs("div",{style:{marginBottom:14},children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:te("filterSection",o)}),_.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[_.jsx("button",{style:{...qi(w.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:k,children:te("all",o)}),Object.entries(q).map(([F,V])=>_.jsx("button",{style:{...qi(w.has(F),V.color),fontSize:11,padding:"4px 10px"},onClick:()=>$(F),children:V.label},F))]})]}),_.jsxs("div",{children:[_.jsx("label",{style:{fontSize:11,color:se.textDim,fontWeight:600,marginBottom:6,display:"block"},children:te("filterScope",o)}),_.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[_.jsx("button",{style:{...qi(h.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:y,children:te("all",o)}),Object.entries(R).map(([F,V])=>{var B;return _.jsx("button",{style:{...qi(h.has(F),V),fontSize:11,padding:"4px 10px"},onClick:()=>g(F),children:(B=E[F])==null?void 0:B[o==="pl"?"pl":"en"]},F)})]})]})]})]})}const Pd={x:40,y:40,scale:.72},Dd={x:20,y:20,scale:.42};function G8({courseId:o,RAW_NODES:n,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:m,COURSE_META:h,onBackToCourses:g}){const y=Pg(),[w,$]=Q.useState(Gd),[k,q]=$n("lang","pl"),[R,E]=Q.useState(new Set),[L,P]=Q.useState(new Set),[H,W]=Q.useState(""),[N,F]=Q.useState(null),[V,B]=Q.useState(null),[U,K]=Q.useState(null),[be,ve]=Q.useState(!1),[ue,ye]=Q.useState(!1),[$e,He]=$n("onboardingSeen",!1),[Qe,Fe]=Q.useState(!$e),ae=Q.useCallback(()=>{He(!0),Fe(!1)},[He]),_e=Q.useCallback(Y=>E(Ne=>{const Ge=new Set(Ne);return Ge.has(Y)?Ge.delete(Y):Ge.add(Y),Ge}),[]),ce=Q.useCallback(Y=>P(Ne=>{const Ge=new Set(Ne);return Ge.has(Y)?Ge.delete(Y):Ge.add(Y),Ge}),[]),j=Q.useCallback(()=>E(new Set),[]),G=Q.useCallback(()=>P(new Set),[]),he=Q.useMemo(()=>tg(n,r),[n,r]),[ze,ke]=Q.useState(()=>hl(w,300,n,r)),Me=Q.useMemo(()=>n.map(Y=>{var Ne,Ge;return{...Y,x:((Ne=ze[Y.id])==null?void 0:Ne.x)??Y.x,y:((Ge=ze[Y.id])==null?void 0:Ge.y)??Y.y}}),[n,ze]),Be=Q.useRef(null),{viewTransform:De,setViewTransform:Ie,toCanvas:mt,startPan:Zt,cursorStyle:ni,setCursorStyle:Mn,handleMouseMove:Yn,handleMouseUp:Cr}=yg(Be),{startNodeDrag:jn,handleDragMove:An,handleDragEnd:Xn}=xg(mt,Me,ke,Mn),{diagMode:Ee,setDiagMode:ft,mode:Ve,setMode:Zn,quizNode:Gt,setQuizNode:Jn,questionsAnswered:Di,setAnsweredQuestions:Bo,getAnsweredIndices:Ni,handleDiagClick:Rr,handleQuizAnswer:Io,resetDiagnostic:Wt,startDeepDive:Cn,targetNode:Er,belief:Bi,frontier:Fo,visibleFrontier:Lo,hasStarted:Pr,nextSuggestedId:er,expectedRemaining:Ii,pCorrect:Fi,sessionComplete:Dr,betaBeliefs:tr,subgraphIds:Jt,ddClassification:Nr,ddNextNodeId:Br,ddComplete:ri}=Eg(he,s,o),Oo=Q.useCallback(Y=>{Y.lang&&q(Y.lang),Y.view==="node"?(F(Y.nodeId),K(null)):Y.view==="resource"?(F(Y.nodeId),K(Y.resourceIndex)):Y.view==="diagnostic"?Y.mode==="quick"?(ft(!0),Zn("quick"),F(null)):Y.mode==="deepdive"&&Y.goalNode&&(ft(!0),Cn(Y.goalNode)):(F(null),K(null))},[q,ft,Zn,Cn]),{setRoute:Rn}=Bg(Oo);Q.useEffect(()=>{Ee?Rn(Ve==="deepdive"&&Er?{view:"diagnostic",mode:"deepdive",goalNode:Er,lang:k}:{view:"diagnostic",mode:"quick",lang:k}):N?U!=null?Rn({view:"resource",nodeId:N,resourceIndex:U,lang:k}):Rn({view:"node",nodeId:N,lang:k}):Rn({view:"graph",lang:k})},[N,U,Ee,Ve,Er,k,Rn]);const Li=Q.useMemo(()=>{const Y=H.toLowerCase(),Ne=n.filter(Ge=>!(R.size>0&&!R.has(Ge.scope)||L.size>0&&!L.has(Ge.section)||Y&&!Ge.label.toLowerCase().includes(Y)&&!Ge.labelPl.toLowerCase().includes(Y)));return Ne.length<n.length?new Set(Ne.map(Ge=>Ge.id)):null},[n,R,L,H]),nr=N||V,rr=Q.useMemo(()=>{var Ne,Ge;if(!nr)return null;const Y=new Set([nr]);return(Ne=he.prereqs[nr])==null||Ne.forEach(Wi=>Y.add(Wi)),(Ge=he.dependents[nr])==null||Ge.forEach(Wi=>Y.add(Wi)),Y},[nr,he]),ii=Q.useMemo(()=>!Ee||Ve!=="deepdive"||Jt.length===0?null:new Set(Jt),[Ee,Ve,Jt]),Ir=Q.useCallback(Y=>{const Ne=Y.target.closest("[data-node-id]");if(Ne){jn(Ne.getAttribute("data-node-id"),Y.clientX,Y.clientY),Y.stopPropagation();return}Zt(Y.clientX,Y.clientY)},[jn,Zt]),Ss=Q.useCallback(Y=>{An(Y.clientX,Y.clientY)||Yn(Y)},[An,Yn]),ir=Q.useCallback(()=>{Xn(),Cr()},[Xn,Cr]),oi=Q.useCallback(Y=>{y&&!Y.target.closest("[data-node-id]")&&F(null)},[y]),vn=Q.useRef(!1);Q.useEffect(()=>{if(!(!Ee||Ve!=="quick")&&!Gt&&er&&!Dr&&Pr&&vn.current){vn.current=!1;const Y=setTimeout(()=>Jn(er),400);return()=>clearTimeout(Y)}},[Ee,Ve,Gt,er,Dr,Pr]),Q.useEffect(()=>{if(!(!Ee||Ve!=="deepdive")&&!Gt&&Br&&!ri&&vn.current){vn.current=!1;const Y=setTimeout(()=>Jn(Br),400);return()=>clearTimeout(Y)}},[Ee,Ve,Gt,Br,ri]),Q.useEffect(()=>{const Y=Ne=>{Ne.key==="Escape"&&(F(null),ve(!1))};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[]);const Oi=Q.useCallback(Y=>{$(Y),ke(hl(Y,300,n,r)),Ie(y?Dd:Pd)},[Ie,n,r,y]),Ts=Q.useCallback(()=>{Ee?(ft(!1),Wt(),F(null)):ye(!0)},[Ee,ft,Wt]),Hi=Q.useCallback(Y=>{ye(!1),Wt(),Y==="deepdive"?(ft(!0),ve(!0)):(ft(!0),Zn("quick"),F(null))},[ft,Zn,Wt]),qs=Q.useCallback(Y=>{He(!0),Fe(!1),(Y==="quick"||Y==="deepdive")&&Hi(Y)},[He,Hi]),En=Q.useMemo(()=>{if(Ve!=="deepdive")return{};const Y={};for(const[Ne,Ge]of Object.entries(Nr))Ge==="known"?Y[Ne]="known":Ge==="unknown"&&(Y[Ne]="unknown");return Y},[Ve,Nr]),Ho=Ve==="deepdive"?En:Bi,Go=Ve==="deepdive"?Jt.filter(Y=>Nr[Y]==="uncertain"):Lo,Ms=k==="pl"?h.title??h.titleEn:h.titleEn??h.title,Wo=Qe||ue||be,Gi=(Y,Ne="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:Y?`1px solid ${Ne}`:`1px solid ${se.border}`,background:Y?`${Ne}22`:"transparent",color:Y?Ne:se.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:Y?600:400});return _.jsxs("div",{style:{width:"100%",height:"100dvh",background:se.bg,fontFamily:Eo,color:se.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[_.jsxs("div",{style:{padding:y?"8px 12px":"8px 16px",borderBottom:`1px solid ${se.borderSubtle}`,display:"flex",alignItems:"center",gap:y?8:10,flexShrink:0},children:[g&&_.jsx("button",{onClick:g,style:{...Gi(!1),padding:"7px 10px"},children:"←"}),_.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:se.textPrimary,letterSpacing:y?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:Ms}),_.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${se.border}`},children:[_.jsx("button",{onClick:()=>{Ee&&(ft(!1),Wt(),F(null))},style:{padding:y?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Ee?400:700,background:Ee?"transparent":"#4a9eff22",color:Ee?se.textDim:"#4a9eff"},children:te("exploreMode",k)}),_.jsx("button",{onClick:()=>{Ee||ye(!0)},style:{padding:y?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${se.border}`,fontWeight:Ee?700:400,background:Ee?"#f39c1222":"transparent",color:Ee?"#f39c12":se.textDim},children:te(Ee?Ve==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",k)})]}),Ee&&_.jsx("button",{onClick:()=>ve(!0),style:Gi(Ve==="deepdive","#8e44ad"),children:te("goalBtn",k)}),_.jsx(H8,{lang:k,setLang:Y=>q(Y),layoutId:w,layouts:Hd,onLayoutChange:Oi,searchTerm:H,setSearchTerm:W,filterScope:R,toggleScope:_e,clearScope:j,filterSection:L,toggleSection:ce,clearSection:G,SECTIONS:a,SCOPE_COLORS:u,SCOPE_LABELS:m,isMobile:y})]}),_.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[_.jsxs("svg",{ref:Be,width:"100%",height:"100%",style:{cursor:ni,touchAction:"none",pointerEvents:Wo?"none":"auto"},onMouseDown:Ir,onMouseMove:Ss,onMouseUp:ir,onMouseLeave:ir,onClick:Y=>{if(oi(Y),!Ee)return;const Ne=Y.target.closest("[data-node-id]");Ne&&Rr(Ne.getAttribute("data-node-id"),Y.shiftKey)},children:[_.jsxs("defs",{children:[_.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),_.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),_.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:_.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#0f1825"})})]}),_.jsxs("g",{transform:`translate(${De.x},${De.y}) scale(${De.scale})`,children:[_.jsx(Ig,{edges:r,nodes:Me,highlightedIds:Ee&&Ve==="deepdive"?ii:rr}),_.jsx(Og,{nodes:Me,filteredIds:Ee&&Ve==="deepdive"?ii:Li,highlightedIds:Ee?null:rr,selected:N,onSelect:Y=>{if(Ee){Rr(Y,!1);return}K(null),F(Y===N?null:Y)},onHover:B,lang:k,diagMode:Ee,belief:Ho,frontier:Go,scale:De.scale,scopeColors:u})]})]}),N&&!Ee&&_.jsx(Gg,{nodeId:N,nodes:Me,adjacency:he,lang:k,SCOPE_COLORS:u,SCOPE_LABELS:m,SECTIONS:a,isMobile:y,onClose:()=>F(null),openResourceIdx:U,setOpenResourceIdx:K}),Ee&&Gt&&_.jsx(R8,{nodeId:Gt,nodes:Me,lang:k,questionBank:s,excludeIndices:Ni(Gt),isMobile:y,onAnswer:(Y,Ne,Ge)=>{vn.current=!0,Io(Gt,Y,Ne,Ge)},onSkip:Y=>{typeof Y=="number"&&Bo(Ne=>new Set([...Ne,`${Gt}:${Y}`])),Jn(null)}}),Ee&&Ve==="quick"&&_.jsx(P8,{belief:Bi,frontier:Fo,visibleFrontier:Lo,hasStarted:Pr,nextSuggestedId:er,sessionComplete:Dr,adjacency:he,expectedRemaining:Ii,pCorrect:Fi,questionsAnswered:Di,nodes:Me,lang:k,onNodeClick:Y=>Jn(Y),onReset:Wt,SCOPE_LABELS:m,isMobile:y}),Ee&&Ve==="deepdive"&&Er&&_.jsx(D8,{nodes:Me,lang:k,targetNode:Er,subgraphIds:Jt,ddClassification:Nr,betaBeliefs:tr,ddComplete:ri,ddNextNodeId:Br,questionsAnswered:Di,onNodeClick:Y=>Jn(Y),onReset:Wt,isMobile:y}),!y&&_.jsx(B8,{lang:k,diagMode:Ee,SCOPE_COLORS:u,SCOPE_LABELS:m,SECTIONS:a}),_.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([Y,Ne])=>_.jsx("button",{onClick:()=>{Ne===null?(ke(hl(w,300,n,r)),Ie(y?Dd:Pd)):Ie(Ge=>({...Ge,scale:Math.max(.15,Math.min(5,Ge.scale*Ne))}))},style:{width:44,height:44,background:se.surface,border:`1px solid ${se.border}`,color:se.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:Y},Y))}),y&&Ee&&!Gt&&_.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${se.surface}ee`,borderTop:`1px solid ${se.border}`,display:"flex",gap:0,zIndex:20},children:[_.jsx("button",{onClick:()=>ve(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${se.border}`,color:Ve==="deepdive"?"#c39bd3":se.textDim,cursor:"pointer"},children:te("goalBtn",k)}),_.jsx("button",{onClick:Ts,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:te("reset",k)})]})]}),be&&_.jsx(I8,{nodes:Me,lang:k,SECTIONS:a,SCOPE_COLORS:u,onSelect:Y=>{ve(!1),Cn(Y)},onClose:()=>ve(!1)}),_.jsx(F8,{isOpen:ue,onSelect:Hi,onClose:()=>ye(!1),lang:k}),_.jsx(O8,{isOpen:Qe,onSelect:qs,onClose:ae,lang:k})]})}function W8(){const[o,n]=Q.useState(J7),[r,s]=Q.useState(!1),a=X7[o];return a?r?_.jsx(U8,{courses:Z7,activeCourseId:o,onSelect:u=>{n(u),s(!1)},onClose:()=>s(!1)}):_.jsx(G8,{courseId:o,RAW_NODES:a.RAW_NODES,RAW_EDGES:a.RAW_EDGES,QUESTION_BANK:a.QUESTION_BANK,SECTIONS:a.SECTIONS,SCOPE_COLORS:a.SCOPE_COLORS,SCOPE_LABELS:a.SCOPE_LABELS,COURSE_META:a.COURSE_META,onBackToCourses:()=>s(!0)},o):_.jsxs("div",{style:{color:"#ff6b6b",padding:20},children:["Unknown course: ",o]})}function U8({courses:o,activeCourseId:n,onSelect:r,onClose:s}){return _.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#0a0e17",fontFamily:Eo,color:"#c8d6e5",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:32},children:[_.jsxs("div",{style:{textAlign:"center"},children:[_.jsx("div",{style:{fontSize:28,fontWeight:700,color:"#f5f6fa",marginBottom:6},children:"oczochodzi.pl"}),_.jsx("div",{style:{fontSize:12,color:"#3a4d63"},children:"Select a course"})]}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:"min(340px, calc(100vw - 32px))"},children:o.map(a=>_.jsxs("button",{onClick:()=>r(a.id),style:{display:"flex",alignItems:"center",gap:16,padding:"16px 20px",borderRadius:10,cursor:"pointer",border:a.id===n?`1px solid ${a.color}`:"1px solid #1a2235",background:a.id===n?`${a.color}18`:"#0d1520",color:"#c8d6e5",textAlign:"left",transition:"border-color 0.15s, background 0.15s"},children:[_.jsx("span",{style:{fontSize:28,lineHeight:1},children:a.icon}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:a.titleEn??a.title}),_.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:3,lineHeight:1.4},children:a.descriptionEn??a.description})]})]},a.id))}),_.jsx("button",{onClick:s,style:{fontSize:11,color:"#3a4d63",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"},children:"Cancel"})]})}Lp.createRoot(document.getElementById("root")).render(_.jsx(Q.StrictMode,{children:_.jsx(W8,{})}));
