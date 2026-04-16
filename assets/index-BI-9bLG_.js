(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();var gl={exports:{}},Po={},yl={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1;function Wf(){if(G1)return Le;G1=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.iterator;function z(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function F(C,Y,$e){this.props=C,this.context=Y,this.refs=M,this.updater=$e||k}F.prototype.isReactComponent={},F.prototype.setState=function(C,Y){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Y,"setState")},F.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function P(){}P.prototype=F.prototype;function G(C,Y,$e){this.props=C,this.context=Y,this.refs=M,this.updater=$e||k}var L=G.prototype=new P;L.constructor=G,T(L,F.prototype),L.isPureReactComponent=!0;var N=Array.isArray,E=Object.prototype.hasOwnProperty,U={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function Z(C,Y,$e){var Se,ze={},Be=null,Fe=null;if(Y!=null)for(Se in Y.ref!==void 0&&(Fe=Y.ref),Y.key!==void 0&&(Be=""+Y.key),Y)E.call(Y,Se)&&!B.hasOwnProperty(Se)&&(ze[Se]=Y[Se]);var Oe=arguments.length-2;if(Oe===1)ze.children=$e;else if(1<Oe){for(var be=Array(Oe),Ie=0;Ie<Oe;Ie++)be[Ie]=arguments[Ie+2];ze.children=be}if(C&&C.defaultProps)for(Se in Oe=C.defaultProps,Oe)ze[Se]===void 0&&(ze[Se]=Oe[Se]);return{$$typeof:o,type:C,key:Be,ref:Fe,props:ze,_owner:U.current}}function X(C,Y){return{$$typeof:o,type:C.type,key:Y,ref:C.ref,props:C.props,_owner:C._owner}}function Q(C){return typeof C=="object"&&C!==null&&C.$$typeof===o}function pe(C){var Y={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function($e){return Y[$e]})}var ee=/\/+/g;function oe(C,Y){return typeof C=="object"&&C!==null&&C.key!=null?pe(""+C.key):Y.toString(36)}function fe(C,Y,$e,Se,ze){var Be=typeof C;(Be==="undefined"||Be==="boolean")&&(C=null);var Fe=!1;if(C===null)Fe=!0;else switch(Be){case"string":case"number":Fe=!0;break;case"object":switch(C.$$typeof){case o:case t:Fe=!0}}if(Fe)return Fe=C,ze=ze(Fe),C=Se===""?"."+oe(Fe,0):Se,N(ze)?($e="",C!=null&&($e=C.replace(ee,"$&/")+"/"),fe(ze,Y,$e,"",function(Ie){return Ie})):ze!=null&&(Q(ze)&&(ze=X(ze,$e+(!ze.key||Fe&&Fe.key===ze.key?"":(""+ze.key).replace(ee,"$&/")+"/")+C)),Y.push(ze)),1;if(Fe=0,Se=Se===""?".":Se+":",N(C))for(var Oe=0;Oe<C.length;Oe++){Be=C[Oe];var be=Se+oe(Be,Oe);Fe+=fe(Be,Y,$e,be,ze)}else if(be=z(C),typeof be=="function")for(C=be.call(C),Oe=0;!(Be=C.next()).done;)Be=Be.value,be=Se+oe(Be,Oe++),Fe+=fe(Be,Y,$e,be,ze);else if(Be==="object")throw Y=String(C),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Fe}function Ce(C,Y,$e){if(C==null)return C;var Se=[],ze=0;return fe(C,Se,"","",function(Be){return Y.call($e,Be,ze++)}),Se}function De(C){if(C._status===-1){var Y=C._result;Y=Y(),Y.then(function($e){(C._status===0||C._status===-1)&&(C._status=1,C._result=$e)},function($e){(C._status===0||C._status===-1)&&(C._status=2,C._result=$e)}),C._status===-1&&(C._status=0,C._result=Y)}if(C._status===1)return C._result.default;throw C._result}var Ee={current:null},re={transition:null},ve={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:re,ReactCurrentOwner:U};function de(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Ce,forEach:function(C,Y,$e){Ce(C,function(){Y.apply(this,arguments)},$e)},count:function(C){var Y=0;return Ce(C,function(){Y++}),Y},toArray:function(C){return Ce(C,function(Y){return Y})||[]},only:function(C){if(!Q(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},Le.Component=F,Le.Fragment=r,Le.Profiler=a,Le.PureComponent=G,Le.StrictMode=s,Le.Suspense=f,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,Le.act=de,Le.cloneElement=function(C,Y,$e){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var Se=T({},C.props),ze=C.key,Be=C.ref,Fe=C._owner;if(Y!=null){if(Y.ref!==void 0&&(Be=Y.ref,Fe=U.current),Y.key!==void 0&&(ze=""+Y.key),C.type&&C.type.defaultProps)var Oe=C.type.defaultProps;for(be in Y)E.call(Y,be)&&!B.hasOwnProperty(be)&&(Se[be]=Y[be]===void 0&&Oe!==void 0?Oe[be]:Y[be])}var be=arguments.length-2;if(be===1)Se.children=$e;else if(1<be){Oe=Array(be);for(var Ie=0;Ie<be;Ie++)Oe[Ie]=arguments[Ie+2];Se.children=Oe}return{$$typeof:o,type:C.type,key:ze,ref:Be,props:Se,_owner:Fe}},Le.createContext=function(C){return C={$$typeof:d,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:c,_context:C},C.Consumer=C},Le.createElement=Z,Le.createFactory=function(C){var Y=Z.bind(null,C);return Y.type=C,Y},Le.createRef=function(){return{current:null}},Le.forwardRef=function(C){return{$$typeof:h,render:C}},Le.isValidElement=Q,Le.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:De}},Le.memo=function(C,Y){return{$$typeof:v,type:C,compare:Y===void 0?null:Y}},Le.startTransition=function(C){var Y=re.transition;re.transition={};try{C()}finally{re.transition=Y}},Le.unstable_act=de,Le.useCallback=function(C,Y){return Ee.current.useCallback(C,Y)},Le.useContext=function(C){return Ee.current.useContext(C)},Le.useDebugValue=function(){},Le.useDeferredValue=function(C){return Ee.current.useDeferredValue(C)},Le.useEffect=function(C,Y){return Ee.current.useEffect(C,Y)},Le.useId=function(){return Ee.current.useId()},Le.useImperativeHandle=function(C,Y,$e){return Ee.current.useImperativeHandle(C,Y,$e)},Le.useInsertionEffect=function(C,Y){return Ee.current.useInsertionEffect(C,Y)},Le.useLayoutEffect=function(C,Y){return Ee.current.useLayoutEffect(C,Y)},Le.useMemo=function(C,Y){return Ee.current.useMemo(C,Y)},Le.useReducer=function(C,Y,$e){return Ee.current.useReducer(C,Y,$e)},Le.useRef=function(C){return Ee.current.useRef(C)},Le.useState=function(C){return Ee.current.useState(C)},Le.useSyncExternalStore=function(C,Y,$e){return Ee.current.useSyncExternalStore(C,Y,$e)},Le.useTransition=function(){return Ee.current.useTransition()},Le.version="18.3.1",Le}var U1;function Ql(){return U1||(U1=1,yl.exports=Wf()),yl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1;function Gf(){if(V1)return Po;V1=1;var o=Ql(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,f,v){var b,_={},z=null,k=null;v!==void 0&&(z=""+v),f.key!==void 0&&(z=""+f.key),f.ref!==void 0&&(k=f.ref);for(b in f)s.call(f,b)&&!c.hasOwnProperty(b)&&(_[b]=f[b]);if(h&&h.defaultProps)for(b in f=h.defaultProps,f)_[b]===void 0&&(_[b]=f[b]);return{$$typeof:t,type:h,key:z,ref:k,props:_,_owner:a.current}}return Po.Fragment=r,Po.jsx=d,Po.jsxs=d,Po}var K1;function Uf(){return K1||(K1=1,gl.exports=Gf()),gl.exports}var y=Uf(),H=Ql(),ta={},vl={exports:{}},Zn={},xl={exports:{}},$l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1;function Vf(){return Z1||(Z1=1,(function(o){function t(re,ve){var de=re.length;re.push(ve);e:for(;0<de;){var C=de-1>>>1,Y=re[C];if(0<a(Y,ve))re[C]=ve,re[de]=Y,de=C;else break e}}function r(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var ve=re[0],de=re.pop();if(de!==ve){re[0]=de;e:for(var C=0,Y=re.length,$e=Y>>>1;C<$e;){var Se=2*(C+1)-1,ze=re[Se],Be=Se+1,Fe=re[Be];if(0>a(ze,de))Be<Y&&0>a(Fe,ze)?(re[C]=Fe,re[Be]=de,C=Be):(re[C]=ze,re[Se]=de,C=Se);else if(Be<Y&&0>a(Fe,de))re[C]=Fe,re[Be]=de,C=Be;else break e}}return ve}function a(re,ve){var de=re.sortIndex-ve.sortIndex;return de!==0?de:re.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var f=[],v=[],b=1,_=null,z=3,k=!1,T=!1,M=!1,F=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(re){for(var ve=r(v);ve!==null;){if(ve.callback===null)s(v);else if(ve.startTime<=re)s(v),ve.sortIndex=ve.expirationTime,t(f,ve);else break;ve=r(v)}}function N(re){if(M=!1,L(re),!T)if(r(f)!==null)T=!0,De(E);else{var ve=r(v);ve!==null&&Ee(N,ve.startTime-re)}}function E(re,ve){T=!1,M&&(M=!1,P(Z),Z=-1),k=!0;var de=z;try{for(L(ve),_=r(f);_!==null&&(!(_.expirationTime>ve)||re&&!pe());){var C=_.callback;if(typeof C=="function"){_.callback=null,z=_.priorityLevel;var Y=C(_.expirationTime<=ve);ve=o.unstable_now(),typeof Y=="function"?_.callback=Y:_===r(f)&&s(f),L(ve)}else s(f);_=r(f)}if(_!==null)var $e=!0;else{var Se=r(v);Se!==null&&Ee(N,Se.startTime-ve),$e=!1}return $e}finally{_=null,z=de,k=!1}}var U=!1,B=null,Z=-1,X=5,Q=-1;function pe(){return!(o.unstable_now()-Q<X)}function ee(){if(B!==null){var re=o.unstable_now();Q=re;var ve=!0;try{ve=B(!0,re)}finally{ve?oe():(U=!1,B=null)}}else U=!1}var oe;if(typeof G=="function")oe=function(){G(ee)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Ce=fe.port2;fe.port1.onmessage=ee,oe=function(){Ce.postMessage(null)}}else oe=function(){F(ee,0)};function De(re){B=re,U||(U=!0,oe())}function Ee(re,ve){Z=F(function(){re(o.unstable_now())},ve)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(re){re.callback=null},o.unstable_continueExecution=function(){T||k||(T=!0,De(E))},o.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<re?Math.floor(1e3/re):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return r(f)},o.unstable_next=function(re){switch(z){case 1:case 2:case 3:var ve=3;break;default:ve=z}var de=z;z=ve;try{return re()}finally{z=de}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(re,ve){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var de=z;z=re;try{return ve()}finally{z=de}},o.unstable_scheduleCallback=function(re,ve,de){var C=o.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?C+de:C):de=C,re){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=de+Y,re={id:b++,callback:ve,priorityLevel:re,startTime:de,expirationTime:Y,sortIndex:-1},de>C?(re.sortIndex=de,t(v,re),r(f)===null&&re===r(v)&&(M?(P(Z),Z=-1):M=!0,Ee(N,de-C))):(re.sortIndex=Y,t(f,re),T||k||(T=!0,De(E))),re},o.unstable_shouldYield=pe,o.unstable_wrapCallback=function(re){var ve=z;return function(){var de=z;z=ve;try{return re.apply(this,arguments)}finally{z=de}}}})($l)),$l}var Y1;function Kf(){return Y1||(Y1=1,xl.exports=Vf()),xl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1;function Zf(){if(Q1)return Zn;Q1=1;var o=Ql(),t=Kf();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(a[e]=n,e=0;e<n.length;e++)s.add(n[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},_={};function z(e){return f.call(_,e)?!0:f.call(b,e)?!1:v.test(e)?_[e]=!0:(b[e]=!0,!1)}function k(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,n,i,l){if(n===null||typeof n>"u"||k(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function M(e,n,i,l,u,p,$){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=$}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];F[n]=new M(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(P,G);F[n]=new M(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(P,G);F[n]=new M(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(P,G);F[n]=new M(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function L(e,n,i,l){var u=F.hasOwnProperty(n)?F[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T(n,i,u,l)&&(i=null),l||u===null?z(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(n=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(n):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var N=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),pe=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),re=Symbol.iterator;function ve(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,C;function Y(e){if(C===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);C=n&&n[1]||""}return`
`+C+e}var $e=!1;function Se(e,n){if(!e||$e)return"";$e=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(V){var l=V}Reflect.construct(e,[],n)}else{try{n.call()}catch(V){l=V}e.call(n.prototype)}else{try{throw Error()}catch(V){l=V}e()}}catch(V){if(V&&l&&typeof V.stack=="string"){for(var u=V.stack.split(`
`),p=l.stack.split(`
`),$=u.length-1,S=p.length-1;1<=$&&0<=S&&u[$]!==p[S];)S--;for(;1<=$&&0<=S;$--,S--)if(u[$]!==p[S]){if($!==1||S!==1)do if($--,S--,0>S||u[$]!==p[S]){var A=`
`+u[$].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=$&&0<=S);break}}}finally{$e=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Y(e):""}function ze(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=Se(e.type,!1),e;case 11:return e=Se(e.type.render,!1),e;case 1:return e=Se(e.type,!0),e;default:return""}}function Be(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case B:return"Fragment";case U:return"Portal";case X:return"Profiler";case Z:return"StrictMode";case oe:return"Suspense";case fe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case Q:return(e._context.displayName||"Context")+".Provider";case ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return n=e.displayName||null,n!==null?n:Be(e.type)||"Memo";case De:n=e._payload,e=e._init;try{return Be(e(n))}catch{}}return null}function Fe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(n);case 8:return n===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ie(e){var n=be(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,p=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function($){l=""+$,p.call(this,$)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function($){l=""+$},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ae(e){e._valueTracker||(e._valueTracker=Ie(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=be(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ln(e,n){var i=n.checked;return de({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Rr(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=Oe(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function gt(e,n){n=n.checked,n!=null&&L(e,"checked",n,!1)}function yt(e,n){gt(e,n);var i=Oe(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?jt(e,n.type,i):n.hasOwnProperty("defaultValue")&&jt(e,n.type,Oe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Dr(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function jt(e,n,i){(n!=="number"||zn(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var ot=Array.isArray;function Xn(e,n,i,l){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Oe(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ii(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return de({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Li(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(ot(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:Oe(i)}}function Oi(e,n){var i=Oe(n.value),l=Oe(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Hi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wi(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var On,dn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(On=On||document.createElement("div"),On.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=On.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function qt(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Er=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){Er.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),qn[n]=qn[e]})});function Gi(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||qn.hasOwnProperty(e)&&qn[e]?(""+n).trim():n+"px"}function Wo(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=Gi(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var Pa=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oi(e,n){if(n){if(Pa[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Ui(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function Br(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var It=null,Ft=null,or=null;function Go(e){if(e=yo(e)){if(typeof It!="function")throw Error(r(280));var n=e.stateNode;n&&(n=ys(n),It(e.stateNode,e.type,n))}}function Vi(e){Ft?or?or.push(e):or=[e]:Ft=e}function si(){if(Ft){var e=Ft,n=or;if(or=Ft=null,Go(e),n)for(e=0;e<n.length;e++)Go(n[e])}}function Nr(e,n){return e(n)}function Uo(){}var Ki=!1;function ai(e,n,i){if(Ki)return e(n,i);Ki=!0;try{return Nr(e,n,i)}finally{Ki=!1,(Ft!==null||or!==null)&&(Uo(),si())}}function Ir(e,n){var i=e.stateNode;if(i===null)return null;var l=ys(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var Lt=!1;if(h)try{var Tt={};Object.defineProperty(Tt,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",Tt,Tt),window.removeEventListener("test",Tt,Tt)}catch{Lt=!1}function li(e,n,i,l,u,p,$,S,A){var V=Array.prototype.slice.call(arguments,3);try{n.apply(i,V)}catch(ie){this.onError(ie)}}var Ot=!1,ci=null,xt=!1,Zi=null,Fr={onError:function(e){Ot=!0,ci=e}};function Vo(e,n,i,l,u,p,$,S,A){Ot=!1,ci=null,li.apply(Fr,arguments)}function Ko(e,n,i,l,u,p,$,S,A){if(Vo.apply(this,arguments),Ot){if(Ot){var V=ci;Ot=!1,ci=null}else throw Error(r(198));xt||(xt=!0,Zi=V)}}function Ht(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function Zo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yi(e){if(Ht(e)!==e)throw Error(r(188))}function Ca(e){var n=e.alternate;if(!n){if(n=Ht(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,l=n;;){var u=i.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===i)return Yi(u),e;if(p===l)return Yi(u),n;p=p.sibling}throw Error(r(188))}if(i.return!==l.return)i=u,l=p;else{for(var $=!1,S=u.child;S;){if(S===i){$=!0,i=u,l=p;break}if(S===l){$=!0,l=u,i=p;break}S=S.sibling}if(!$){for(S=p.child;S;){if(S===i){$=!0,i=p,l=u;break}if(S===l){$=!0,l=p,i=u;break}S=S.sibling}if(!$)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function sr(e){return e=Ca(e),e!==null?Yo(e):null}function Yo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Yo(e);if(n!==null)return n;e=e.sibling}return null}var Qo=t.unstable_scheduleCallback,ui=t.unstable_cancelCallback,Ra=t.unstable_shouldYield,Da=t.unstable_requestPaint,Je=t.unstable_now,Ea=t.unstable_getCurrentPriorityLevel,Qi=t.unstable_ImmediatePriority,Xo=t.unstable_UserBlockingPriority,Lr=t.unstable_NormalPriority,J=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ge=null,Hn=null;function ip(e){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Ge,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:ap,op=Math.log,sp=Math.LN2;function ap(e){return e>>>=0,e===0?32:31-(op(e)/sp|0)|0}var Jo=64,es=4194304;function Xi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,p=e.pingedLanes,$=i&268435455;if($!==0){var S=$&~u;S!==0?l=Xi(S):(p&=$,p!==0&&(l=Xi(p)))}else $=i&~u,$!==0?l=Xi($):p!==0&&(l=Xi(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-$t(n),u=1<<i,l|=e[i],n&=~u;return l}function lp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cp(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes;0<p;){var $=31-$t(p),S=1<<$,A=u[$];A===-1?((S&i)===0||(S&l)!==0)&&(u[$]=lp(S,n)):A<=n&&(e.expiredLanes|=S),p&=~S}}function Ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Jo;return Jo<<=1,(Jo&4194240)===0&&(Jo=64),e}function Na(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Ji(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$t(n),e[n]=i}function up(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-$t(i),p=1<<u;n[u]=0,l[u]=-1,e[u]=-1,i&=~p}}function Ia(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-$t(i),u=1<<l;u&n|e[l]&n&&(e[l]|=n),i&=~u}}var Ye=0;function _c(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var kc,Fa,zc,Sc,jc,La=!1,ts=[],ar=null,lr=null,cr=null,eo=new Map,no=new Map,ur=[],dp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(e,n){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(n.pointerId)}}function to(e,n,i,l,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},n!==null&&(n=yo(n),n!==null&&Fa(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function mp(e,n,i,l,u){switch(n){case"focusin":return ar=to(ar,e,n,i,l,u),!0;case"dragenter":return lr=to(lr,e,n,i,l,u),!0;case"mouseover":return cr=to(cr,e,n,i,l,u),!0;case"pointerover":var p=u.pointerId;return eo.set(p,to(eo.get(p)||null,e,n,i,l,u)),!0;case"gotpointercapture":return p=u.pointerId,no.set(p,to(no.get(p)||null,e,n,i,l,u)),!0}return!1}function Tc(e){var n=Or(e.target);if(n!==null){var i=Ht(n);if(i!==null){if(n=i.tag,n===13){if(n=Zo(i),n!==null){e.blockedOn=n,jc(e.priority,function(){zc(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Ha(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);vt=l,i.target.dispatchEvent(l),vt=null}else return n=yo(i),n!==null&&Fa(n),e.blockedOn=i,!1;n.shift()}return!0}function Ac(e,n,i){rs(e)&&i.delete(n)}function pp(){La=!1,ar!==null&&rs(ar)&&(ar=null),lr!==null&&rs(lr)&&(lr=null),cr!==null&&rs(cr)&&(cr=null),eo.forEach(Ac),no.forEach(Ac)}function ro(e,n){e.blockedOn===n&&(e.blockedOn=null,La||(La=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,pp)))}function io(e){function n(u){return ro(u,e)}if(0<ts.length){ro(ts[0],e);for(var i=1;i<ts.length;i++){var l=ts[i];l.blockedOn===e&&(l.blockedOn=null)}}for(ar!==null&&ro(ar,e),lr!==null&&ro(lr,e),cr!==null&&ro(cr,e),eo.forEach(n),no.forEach(n),i=0;i<ur.length;i++)l=ur[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<ur.length&&(i=ur[0],i.blockedOn===null);)Tc(i),i.blockedOn===null&&ur.shift()}var di=N.ReactCurrentBatchConfig,is=!0;function fp(e,n,i,l){var u=Ye,p=di.transition;di.transition=null;try{Ye=1,Oa(e,n,i,l)}finally{Ye=u,di.transition=p}}function hp(e,n,i,l){var u=Ye,p=di.transition;di.transition=null;try{Ye=4,Oa(e,n,i,l)}finally{Ye=u,di.transition=p}}function Oa(e,n,i,l){if(is){var u=Ha(e,n,i,l);if(u===null)s0(e,n,l,os,i),qc(e,l);else if(mp(u,e,n,i,l))l.stopPropagation();else if(qc(e,l),n&4&&-1<dp.indexOf(e)){for(;u!==null;){var p=yo(u);if(p!==null&&kc(p),p=Ha(e,n,i,l),p===null&&s0(e,n,l,os,i),p===u)break;u=p}u!==null&&l.stopPropagation()}else s0(e,n,l,null,i)}}var os=null;function Ha(e,n,i,l){if(os=null,e=Br(l),e=Or(e),e!==null)if(n=Ht(e),n===null)e=null;else if(i=n.tag,i===13){if(e=Zo(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return os=e,null}function Mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ea()){case Qi:return 1;case Xo:return 4;case Lr:case J:return 16;case He:return 536870912;default:return 16}default:return 16}}var dr=null,Wa=null,ss=null;function Pc(){if(ss)return ss;var e,n=Wa,i=n.length,l,u="value"in dr?dr.value:dr.textContent,p=u.length;for(e=0;e<i&&n[e]===u[e];e++);var $=i-e;for(l=1;l<=$&&n[i-l]===u[p-l];l++);return ss=u.slice(e,1<l?1-l:void 0)}function as(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function Cc(){return!1}function Jn(e){function n(i,l,u,p,$){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=$,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(i=e[S],this[S]=i?i(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ls:Cc,this.isPropagationStopped=Cc,this}return de(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),n}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=Jn(mi),oo=de({},mi,{view:0,detail:0}),gp=Jn(oo),Ua,Va,so,cs=de({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Ua=e.screenX-so.screenX,Va=e.screenY-so.screenY):Va=Ua=0,so=e),Ua)},movementY:function(e){return"movementY"in e?e.movementY:Va}}),Rc=Jn(cs),yp=de({},cs,{dataTransfer:0}),vp=Jn(yp),xp=de({},oo,{relatedTarget:0}),Ka=Jn(xp),$p=de({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=Jn($p),wp=de({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=Jn(wp),kp=de({},mi,{data:0}),Dc=Jn(kp),zp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jp[e])?!!n[e]:!1}function Za(){return qp}var Tp=de({},oo,{key:function(e){if(e.key){var n=zp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=as(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(e){return e.type==="keypress"?as(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?as(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=Jn(Tp),Mp=de({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Jn(Mp),Pp=de({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),Cp=Jn(Pp),Rp=de({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=Jn(Rp),Ep=de({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bp=Jn(Ep),Np=[9,13,27,32],Ya=h&&"CompositionEvent"in window,ao=null;h&&"documentMode"in document&&(ao=document.documentMode);var Ip=h&&"TextEvent"in window&&!ao,Bc=h&&(!Ya||ao&&8<ao&&11>=ao),Nc=" ",Ic=!1;function Fc(e,n){switch(e){case"keyup":return Np.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pi=!1;function Fp(e,n){switch(e){case"compositionend":return Lc(n);case"keypress":return n.which!==32?null:(Ic=!0,Nc);case"textInput":return e=n.data,e===Nc&&Ic?null:e;default:return null}}function Lp(e,n){if(pi)return e==="compositionend"||!Ya&&Fc(e,n)?(e=Pc(),ss=Wa=dr=null,pi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bc&&n.locale!=="ko"?null:n.data;default:return null}}var Op={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Op[e.type]:n==="textarea"}function Hc(e,n,i,l){Vi(l),n=fs(n,"onChange"),0<n.length&&(i=new Ga("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var lo=null,co=null;function Hp(e){au(e,0)}function us(e){var n=vi(e);if(Rn(n))return e}function Wp(e,n){if(e==="change")return n}var Wc=!1;if(h){var Qa;if(h){var Xa="oninput"in document;if(!Xa){var Gc=document.createElement("div");Gc.setAttribute("oninput","return;"),Xa=typeof Gc.oninput=="function"}Qa=Xa}else Qa=!1;Wc=Qa&&(!document.documentMode||9<document.documentMode)}function Uc(){lo&&(lo.detachEvent("onpropertychange",Vc),co=lo=null)}function Vc(e){if(e.propertyName==="value"&&us(co)){var n=[];Hc(n,co,e,Br(e)),ai(Hp,n)}}function Gp(e,n,i){e==="focusin"?(Uc(),lo=n,co=i,lo.attachEvent("onpropertychange",Vc)):e==="focusout"&&Uc()}function Up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(co)}function Vp(e,n){if(e==="click")return us(n)}function Kp(e,n){if(e==="input"||e==="change")return us(n)}function Zp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bt=typeof Object.is=="function"?Object.is:Zp;function uo(e,n){if(bt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!f.call(n,u)||!bt(e[u],n[u]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,n){var i=Kc(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Kc(i)}}function Yc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Yc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qc(){for(var e=window,n=zn();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=zn(e.document)}return n}function Ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Yp(e){var n=Qc(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Yc(i.ownerDocument.documentElement,i)){if(l!==null&&Ja(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!e.extend&&p>l&&(u=l,l=p,p=u),u=Zc(i,p);var $=Zc(i,l);u&&$&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==$.node||e.focusOffset!==$.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),p>l?(e.addRange(n),e.extend($.node,$.offset)):(n.setEnd($.node,$.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qp=h&&"documentMode"in document&&11>=document.documentMode,fi=null,e0=null,mo=null,n0=!1;function Xc(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;n0||fi==null||fi!==zn(l)||(l=fi,"selectionStart"in l&&Ja(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),mo&&uo(mo,l)||(mo=l,l=fs(e0,"onSelect"),0<l.length&&(n=new Ga("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=fi)))}function ds(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var hi={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionend:ds("Transition","TransitionEnd")},t0={},Jc={};h&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function ms(e){if(t0[e])return t0[e];if(!hi[e])return e;var n=hi[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Jc)return t0[e]=n[i];return e}var eu=ms("animationend"),nu=ms("animationiteration"),tu=ms("animationstart"),ru=ms("transitionend"),iu=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(e,n){iu.set(e,n),c(n,[e])}for(var r0=0;r0<ou.length;r0++){var i0=ou[r0],Xp=i0.toLowerCase(),Jp=i0[0].toUpperCase()+i0.slice(1);mr(Xp,"on"+Jp)}mr(eu,"onAnimationEnd"),mr(nu,"onAnimationIteration"),mr(tu,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(ru,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function su(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,Ko(l,n,void 0,e),e.currentTarget=null}function au(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var $=l.length-1;0<=$;$--){var S=l[$],A=S.instance,V=S.currentTarget;if(S=S.listener,A!==p&&u.isPropagationStopped())break e;su(u,S,V),p=A}else for($=0;$<l.length;$++){if(S=l[$],A=S.instance,V=S.currentTarget,S=S.listener,A!==p&&u.isPropagationStopped())break e;su(u,S,V),p=A}}}if(xt)throw e=Zi,xt=!1,Zi=null,e}function tn(e,n){var i=n[m0];i===void 0&&(i=n[m0]=new Set);var l=e+"__bubble";i.has(l)||(lu(n,e,2,!1),i.add(l))}function o0(e,n,i){var l=0;n&&(l|=4),lu(i,e,l,n)}var ps="_reactListening"+Math.random().toString(36).slice(2);function fo(e){if(!e[ps]){e[ps]=!0,s.forEach(function(i){i!=="selectionchange"&&(ef.has(i)||o0(i,!1,e),o0(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ps]||(n[ps]=!0,o0("selectionchange",!1,n))}}function lu(e,n,i,l){switch(Mc(n)){case 1:var u=fp;break;case 4:u=hp;break;default:u=Oa}i=u.bind(null,n,i,e),u=void 0,!Lt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function s0(e,n,i,l,u){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var $=l.tag;if($===3||$===4){var S=l.stateNode.containerInfo;if(S===u||S.nodeType===8&&S.parentNode===u)break;if($===4)for($=l.return;$!==null;){var A=$.tag;if((A===3||A===4)&&(A=$.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;$=$.return}for(;S!==null;){if($=Or(S),$===null)return;if(A=$.tag,A===5||A===6){l=p=$;continue e}S=S.parentNode}}l=l.return}ai(function(){var V=p,ie=Br(i),ae=[];e:{var ne=iu.get(e);if(ne!==void 0){var ge=Ga,we=e;switch(e){case"keypress":if(as(i)===0)break e;case"keydown":case"keyup":ge=Ap;break;case"focusin":we="focus",ge=Ka;break;case"focusout":we="blur",ge=Ka;break;case"beforeblur":case"afterblur":ge=Ka;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Cp;break;case eu:case nu:case tu:ge=bp;break;case ru:ge=Dp;break;case"scroll":ge=gp;break;case"wheel":ge=Bp;break;case"copy":case"cut":case"paste":ge=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Ec}var _e=(n&4)!==0,fn=!_e&&e==="scroll",O=_e?ne!==null?ne+"Capture":null:ne;_e=[];for(var D=V,W;D!==null;){W=D;var ue=W.stateNode;if(W.tag===5&&ue!==null&&(W=ue,O!==null&&(ue=Ir(D,O),ue!=null&&_e.push(ho(D,ue,W)))),fn)break;D=D.return}0<_e.length&&(ne=new ge(ne,we,null,i,ie),ae.push({event:ne,listeners:_e}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",ge=e==="mouseout"||e==="pointerout",ne&&i!==vt&&(we=i.relatedTarget||i.fromElement)&&(Or(we)||we[Wt]))break e;if((ge||ne)&&(ne=ie.window===ie?ie:(ne=ie.ownerDocument)?ne.defaultView||ne.parentWindow:window,ge?(we=i.relatedTarget||i.toElement,ge=V,we=we?Or(we):null,we!==null&&(fn=Ht(we),we!==fn||we.tag!==5&&we.tag!==6)&&(we=null)):(ge=null,we=V),ge!==we)){if(_e=Rc,ue="onMouseLeave",O="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(_e=Ec,ue="onPointerLeave",O="onPointerEnter",D="pointer"),fn=ge==null?ne:vi(ge),W=we==null?ne:vi(we),ne=new _e(ue,D+"leave",ge,i,ie),ne.target=fn,ne.relatedTarget=W,ue=null,Or(ie)===V&&(_e=new _e(O,D+"enter",we,i,ie),_e.target=W,_e.relatedTarget=fn,ue=_e),fn=ue,ge&&we)n:{for(_e=ge,O=we,D=0,W=_e;W;W=gi(W))D++;for(W=0,ue=O;ue;ue=gi(ue))W++;for(;0<D-W;)_e=gi(_e),D--;for(;0<W-D;)O=gi(O),W--;for(;D--;){if(_e===O||O!==null&&_e===O.alternate)break n;_e=gi(_e),O=gi(O)}_e=null}else _e=null;ge!==null&&cu(ae,ne,ge,_e,!1),we!==null&&fn!==null&&cu(ae,fn,we,_e,!0)}}e:{if(ne=V?vi(V):window,ge=ne.nodeName&&ne.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ne.type==="file")var ke=Wp;else if(Oc(ne))if(Wc)ke=Kp;else{ke=Up;var je=Gp}else(ge=ne.nodeName)&&ge.toLowerCase()==="input"&&(ne.type==="checkbox"||ne.type==="radio")&&(ke=Vp);if(ke&&(ke=ke(e,V))){Hc(ae,ke,i,ie);break e}je&&je(e,ne,V),e==="focusout"&&(je=ne._wrapperState)&&je.controlled&&ne.type==="number"&&jt(ne,"number",ne.value)}switch(je=V?vi(V):window,e){case"focusin":(Oc(je)||je.contentEditable==="true")&&(fi=je,e0=V,mo=null);break;case"focusout":mo=e0=fi=null;break;case"mousedown":n0=!0;break;case"contextmenu":case"mouseup":case"dragend":n0=!1,Xc(ae,i,ie);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":Xc(ae,i,ie)}var qe;if(Ya)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else pi?Fc(e,i)&&(Pe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Pe="onCompositionStart");Pe&&(Bc&&i.locale!=="ko"&&(pi||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&pi&&(qe=Pc()):(dr=ie,Wa="value"in dr?dr.value:dr.textContent,pi=!0)),je=fs(V,Pe),0<je.length&&(Pe=new Dc(Pe,e,null,i,ie),ae.push({event:Pe,listeners:je}),qe?Pe.data=qe:(qe=Lc(i),qe!==null&&(Pe.data=qe)))),(qe=Ip?Fp(e,i):Lp(e,i))&&(V=fs(V,"onBeforeInput"),0<V.length&&(ie=new Dc("onBeforeInput","beforeinput",null,i,ie),ae.push({event:ie,listeners:V}),ie.data=qe))}au(ae,n)})}function ho(e,n,i){return{instance:e,listener:n,currentTarget:i}}function fs(e,n){for(var i=n+"Capture",l=[];e!==null;){var u=e,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=Ir(e,i),p!=null&&l.unshift(ho(e,p,u)),p=Ir(e,n),p!=null&&l.push(ho(e,p,u))),e=e.return}return l}function gi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,n,i,l,u){for(var p=n._reactName,$=[];i!==null&&i!==l;){var S=i,A=S.alternate,V=S.stateNode;if(A!==null&&A===l)break;S.tag===5&&V!==null&&(S=V,u?(A=Ir(i,p),A!=null&&$.unshift(ho(i,A,S))):u||(A=Ir(i,p),A!=null&&$.push(ho(i,A,S)))),i=i.return}$.length!==0&&e.push({event:n,listeners:$})}var nf=/\r\n?/g,tf=/\u0000|\uFFFD/g;function uu(e){return(typeof e=="string"?e:""+e).replace(nf,`
`).replace(tf,"")}function hs(e,n,i){if(n=uu(n),uu(e)!==n&&i)throw Error(r(425))}function gs(){}var a0=null,l0=null;function c0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var u0=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,du=typeof Promise=="function"?Promise:void 0,of=typeof queueMicrotask=="function"?queueMicrotask:typeof du<"u"?function(e){return du.resolve(null).then(e).catch(sf)}:u0;function sf(e){setTimeout(function(){throw e})}function d0(e,n){var i=n,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),io(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);io(n)}function pr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var yi=Math.random().toString(36).slice(2),At="__reactFiber$"+yi,go="__reactProps$"+yi,Wt="__reactContainer$"+yi,m0="__reactEvents$"+yi,af="__reactListeners$"+yi,lf="__reactHandles$"+yi;function Or(e){var n=e[At];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Wt]||i[At]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=mu(e);e!==null;){if(i=e[At])return i;e=mu(e)}return n}e=i,i=e.parentNode}return null}function yo(e){return e=e[At]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function ys(e){return e[go]||null}var p0=[],xi=-1;function fr(e){return{current:e}}function rn(e){0>xi||(e.current=p0[xi],p0[xi]=null,xi--)}function en(e,n){xi++,p0[xi]=e.current,e.current=n}var hr={},Tn=fr(hr),Wn=fr(!1),Hr=hr;function $i(e,n){var i=e.type.contextTypes;if(!i)return hr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in i)u[p]=n[p];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Gn(e){return e=e.childContextTypes,e!=null}function vs(){rn(Wn),rn(Tn)}function pu(e,n,i){if(Tn.current!==hr)throw Error(r(168));en(Tn,n),en(Wn,i)}function fu(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(r(108,Fe(e)||"Unknown",u));return de({},i,l)}function xs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hr,Hr=Tn.current,en(Tn,e),en(Wn,Wn.current),!0}function hu(e,n,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=fu(e,n,Hr),l.__reactInternalMemoizedMergedChildContext=e,rn(Wn),rn(Tn),en(Tn,e)):rn(Wn),en(Wn,i)}var Gt=null,$s=!1,f0=!1;function gu(e){Gt===null?Gt=[e]:Gt.push(e)}function cf(e){$s=!0,gu(e)}function gr(){if(!f0&&Gt!==null){f0=!0;var e=0,n=Ye;try{var i=Gt;for(Ye=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Gt=null,$s=!1}catch(u){throw Gt!==null&&(Gt=Gt.slice(e+1)),Qo(Qi,gr),u}finally{Ye=n,f0=!1}}return null}var bi=[],wi=0,bs=null,ws=0,st=[],at=0,Wr=null,Ut=1,Vt="";function Gr(e,n){bi[wi++]=ws,bi[wi++]=bs,bs=e,ws=n}function yu(e,n,i){st[at++]=Ut,st[at++]=Vt,st[at++]=Wr,Wr=e;var l=Ut;e=Vt;var u=32-$t(l)-1;l&=~(1<<u),i+=1;var p=32-$t(n)+u;if(30<p){var $=u-u%5;p=(l&(1<<$)-1).toString(32),l>>=$,u-=$,Ut=1<<32-$t(n)+u|i<<u|l,Vt=p+e}else Ut=1<<p|i<<u|l,Vt=e}function h0(e){e.return!==null&&(Gr(e,1),yu(e,1,0))}function g0(e){for(;e===bs;)bs=bi[--wi],bi[wi]=null,ws=bi[--wi],bi[wi]=null;for(;e===Wr;)Wr=st[--at],st[at]=null,Vt=st[--at],st[at]=null,Ut=st[--at],st[at]=null}var et=null,nt=null,on=!1,wt=null;function vu(e,n){var i=dt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function xu(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,et=e,nt=pr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,et=e,nt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Wr!==null?{id:Ut,overflow:Vt}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=dt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,et=e,nt=null,!0):!1;default:return!1}}function y0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function v0(e){if(on){var n=nt;if(n){var i=n;if(!xu(e,n)){if(y0(e))throw Error(r(418));n=pr(i.nextSibling);var l=et;n&&xu(e,n)?vu(l,i):(e.flags=e.flags&-4097|2,on=!1,et=e)}}else{if(y0(e))throw Error(r(418));e.flags=e.flags&-4097|2,on=!1,et=e}}}function $u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function _s(e){if(e!==et)return!1;if(!on)return $u(e),on=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!c0(e.type,e.memoizedProps)),n&&(n=nt)){if(y0(e))throw bu(),Error(r(418));for(;n;)vu(e,n),n=pr(n.nextSibling)}if($u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){nt=pr(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}nt=null}}else nt=et?pr(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=nt;e;)e=pr(e.nextSibling)}function _i(){nt=et=null,on=!1}function x0(e){wt===null?wt=[e]:wt.push(e)}var uf=N.ReactCurrentBatchConfig;function vo(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var u=l,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function($){var S=u.refs;$===null?delete S[p]:S[p]=$},n._stringRef=p,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function ks(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function wu(e){var n=e._init;return n(e._payload)}function _u(e){function n(O,D){if(e){var W=O.deletions;W===null?(O.deletions=[D],O.flags|=16):W.push(D)}}function i(O,D){if(!e)return null;for(;D!==null;)n(O,D),D=D.sibling;return null}function l(O,D){for(O=new Map;D!==null;)D.key!==null?O.set(D.key,D):O.set(D.index,D),D=D.sibling;return O}function u(O,D){return O=kr(O,D),O.index=0,O.sibling=null,O}function p(O,D,W){return O.index=W,e?(W=O.alternate,W!==null?(W=W.index,W<D?(O.flags|=2,D):W):(O.flags|=2,D)):(O.flags|=1048576,D)}function $(O){return e&&O.alternate===null&&(O.flags|=2),O}function S(O,D,W,ue){return D===null||D.tag!==6?(D=ul(W,O.mode,ue),D.return=O,D):(D=u(D,W),D.return=O,D)}function A(O,D,W,ue){var ke=W.type;return ke===B?ie(O,D,W.props.children,ue,W.key):D!==null&&(D.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===De&&wu(ke)===D.type)?(ue=u(D,W.props),ue.ref=vo(O,D,W),ue.return=O,ue):(ue=Ks(W.type,W.key,W.props,null,O.mode,ue),ue.ref=vo(O,D,W),ue.return=O,ue)}function V(O,D,W,ue){return D===null||D.tag!==4||D.stateNode.containerInfo!==W.containerInfo||D.stateNode.implementation!==W.implementation?(D=dl(W,O.mode,ue),D.return=O,D):(D=u(D,W.children||[]),D.return=O,D)}function ie(O,D,W,ue,ke){return D===null||D.tag!==7?(D=Jr(W,O.mode,ue,ke),D.return=O,D):(D=u(D,W),D.return=O,D)}function ae(O,D,W){if(typeof D=="string"&&D!==""||typeof D=="number")return D=ul(""+D,O.mode,W),D.return=O,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case E:return W=Ks(D.type,D.key,D.props,null,O.mode,W),W.ref=vo(O,null,D),W.return=O,W;case U:return D=dl(D,O.mode,W),D.return=O,D;case De:var ue=D._init;return ae(O,ue(D._payload),W)}if(ot(D)||ve(D))return D=Jr(D,O.mode,W,null),D.return=O,D;ks(O,D)}return null}function ne(O,D,W,ue){var ke=D!==null?D.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return ke!==null?null:S(O,D,""+W,ue);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case E:return W.key===ke?A(O,D,W,ue):null;case U:return W.key===ke?V(O,D,W,ue):null;case De:return ke=W._init,ne(O,D,ke(W._payload),ue)}if(ot(W)||ve(W))return ke!==null?null:ie(O,D,W,ue,null);ks(O,W)}return null}function ge(O,D,W,ue,ke){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return O=O.get(W)||null,S(D,O,""+ue,ke);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case E:return O=O.get(ue.key===null?W:ue.key)||null,A(D,O,ue,ke);case U:return O=O.get(ue.key===null?W:ue.key)||null,V(D,O,ue,ke);case De:var je=ue._init;return ge(O,D,W,je(ue._payload),ke)}if(ot(ue)||ve(ue))return O=O.get(W)||null,ie(D,O,ue,ke,null);ks(D,ue)}return null}function we(O,D,W,ue){for(var ke=null,je=null,qe=D,Pe=D=0,kn=null;qe!==null&&Pe<W.length;Pe++){qe.index>Pe?(kn=qe,qe=null):kn=qe.sibling;var Ke=ne(O,qe,W[Pe],ue);if(Ke===null){qe===null&&(qe=kn);break}e&&qe&&Ke.alternate===null&&n(O,qe),D=p(Ke,D,Pe),je===null?ke=Ke:je.sibling=Ke,je=Ke,qe=kn}if(Pe===W.length)return i(O,qe),on&&Gr(O,Pe),ke;if(qe===null){for(;Pe<W.length;Pe++)qe=ae(O,W[Pe],ue),qe!==null&&(D=p(qe,D,Pe),je===null?ke=qe:je.sibling=qe,je=qe);return on&&Gr(O,Pe),ke}for(qe=l(O,qe);Pe<W.length;Pe++)kn=ge(qe,O,Pe,W[Pe],ue),kn!==null&&(e&&kn.alternate!==null&&qe.delete(kn.key===null?Pe:kn.key),D=p(kn,D,Pe),je===null?ke=kn:je.sibling=kn,je=kn);return e&&qe.forEach(function(zr){return n(O,zr)}),on&&Gr(O,Pe),ke}function _e(O,D,W,ue){var ke=ve(W);if(typeof ke!="function")throw Error(r(150));if(W=ke.call(W),W==null)throw Error(r(151));for(var je=ke=null,qe=D,Pe=D=0,kn=null,Ke=W.next();qe!==null&&!Ke.done;Pe++,Ke=W.next()){qe.index>Pe?(kn=qe,qe=null):kn=qe.sibling;var zr=ne(O,qe,Ke.value,ue);if(zr===null){qe===null&&(qe=kn);break}e&&qe&&zr.alternate===null&&n(O,qe),D=p(zr,D,Pe),je===null?ke=zr:je.sibling=zr,je=zr,qe=kn}if(Ke.done)return i(O,qe),on&&Gr(O,Pe),ke;if(qe===null){for(;!Ke.done;Pe++,Ke=W.next())Ke=ae(O,Ke.value,ue),Ke!==null&&(D=p(Ke,D,Pe),je===null?ke=Ke:je.sibling=Ke,je=Ke);return on&&Gr(O,Pe),ke}for(qe=l(O,qe);!Ke.done;Pe++,Ke=W.next())Ke=ge(qe,O,Pe,Ke.value,ue),Ke!==null&&(e&&Ke.alternate!==null&&qe.delete(Ke.key===null?Pe:Ke.key),D=p(Ke,D,Pe),je===null?ke=Ke:je.sibling=Ke,je=Ke);return e&&qe.forEach(function(Hf){return n(O,Hf)}),on&&Gr(O,Pe),ke}function fn(O,D,W,ue){if(typeof W=="object"&&W!==null&&W.type===B&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case E:e:{for(var ke=W.key,je=D;je!==null;){if(je.key===ke){if(ke=W.type,ke===B){if(je.tag===7){i(O,je.sibling),D=u(je,W.props.children),D.return=O,O=D;break e}}else if(je.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===De&&wu(ke)===je.type){i(O,je.sibling),D=u(je,W.props),D.ref=vo(O,je,W),D.return=O,O=D;break e}i(O,je);break}else n(O,je);je=je.sibling}W.type===B?(D=Jr(W.props.children,O.mode,ue,W.key),D.return=O,O=D):(ue=Ks(W.type,W.key,W.props,null,O.mode,ue),ue.ref=vo(O,D,W),ue.return=O,O=ue)}return $(O);case U:e:{for(je=W.key;D!==null;){if(D.key===je)if(D.tag===4&&D.stateNode.containerInfo===W.containerInfo&&D.stateNode.implementation===W.implementation){i(O,D.sibling),D=u(D,W.children||[]),D.return=O,O=D;break e}else{i(O,D);break}else n(O,D);D=D.sibling}D=dl(W,O.mode,ue),D.return=O,O=D}return $(O);case De:return je=W._init,fn(O,D,je(W._payload),ue)}if(ot(W))return we(O,D,W,ue);if(ve(W))return _e(O,D,W,ue);ks(O,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,D!==null&&D.tag===6?(i(O,D.sibling),D=u(D,W),D.return=O,O=D):(i(O,D),D=ul(W,O.mode,ue),D.return=O,O=D),$(O)):i(O,D)}return fn}var ki=_u(!0),ku=_u(!1),zs=fr(null),Ss=null,zi=null,$0=null;function b0(){$0=zi=Ss=null}function w0(e){var n=zs.current;rn(zs),e._currentValue=n}function _0(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function Si(e,n){Ss=e,$0=zi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Un=!0),e.firstContext=null)}function lt(e){var n=e._currentValue;if($0!==e)if(e={context:e,memoizedValue:n,next:null},zi===null){if(Ss===null)throw Error(r(308));zi=e,Ss.dependencies={lanes:0,firstContext:e}}else zi=zi.next=e;return n}var Ur=null;function k0(e){Ur===null?Ur=[e]:Ur.push(e)}function zu(e,n,i,l){var u=n.interleaved;return u===null?(i.next=i,k0(n)):(i.next=u.next,u.next=i),n.interleaved=i,Kt(e,l)}function Kt(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var yr=!1;function z0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Su(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function vr(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Kt(e,i)}return u=l.interleaved,u===null?(n.next=n,k0(l)):(n.next=u.next,u.next=n),l.interleaved=n,Kt(e,i)}function js(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Ia(e,i)}}function ju(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var $={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};p===null?u=p=$:p=p.next=$,i=i.next}while(i!==null);p===null?u=p=n:p=p.next=n}else u=p=n;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function qs(e,n,i,l){var u=e.updateQueue;yr=!1;var p=u.firstBaseUpdate,$=u.lastBaseUpdate,S=u.shared.pending;if(S!==null){u.shared.pending=null;var A=S,V=A.next;A.next=null,$===null?p=V:$.next=V,$=A;var ie=e.alternate;ie!==null&&(ie=ie.updateQueue,S=ie.lastBaseUpdate,S!==$&&(S===null?ie.firstBaseUpdate=V:S.next=V,ie.lastBaseUpdate=A))}if(p!==null){var ae=u.baseState;$=0,ie=V=A=null,S=p;do{var ne=S.lane,ge=S.eventTime;if((l&ne)===ne){ie!==null&&(ie=ie.next={eventTime:ge,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var we=e,_e=S;switch(ne=n,ge=i,_e.tag){case 1:if(we=_e.payload,typeof we=="function"){ae=we.call(ge,ae,ne);break e}ae=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=_e.payload,ne=typeof we=="function"?we.call(ge,ae,ne):we,ne==null)break e;ae=de({},ae,ne);break e;case 2:yr=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,ne=u.effects,ne===null?u.effects=[S]:ne.push(S))}else ge={eventTime:ge,lane:ne,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ie===null?(V=ie=ge,A=ae):ie=ie.next=ge,$|=ne;if(S=S.next,S===null){if(S=u.shared.pending,S===null)break;ne=S,S=ne.next,ne.next=null,u.lastBaseUpdate=ne,u.shared.pending=null}}while(!0);if(ie===null&&(A=ae),u.baseState=A,u.firstBaseUpdate=V,u.lastBaseUpdate=ie,n=u.shared.interleaved,n!==null){u=n;do $|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);Zr|=$,e.lanes=$,e.memoizedState=ae}}function qu(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var xo={},Mt=fr(xo),$o=fr(xo),bo=fr(xo);function Vr(e){if(e===xo)throw Error(r(174));return e}function S0(e,n){switch(en(bo,n),en($o,e),en(Mt,xo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:We(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=We(n,e)}rn(Mt),en(Mt,n)}function ji(){rn(Mt),rn($o),rn(bo)}function Tu(e){Vr(bo.current);var n=Vr(Mt.current),i=We(n,e.type);n!==i&&(en($o,e),en(Mt,i))}function j0(e){$o.current===e&&(rn(Mt),rn($o))}var an=fr(0);function Ts(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var q0=[];function T0(){for(var e=0;e<q0.length;e++)q0[e]._workInProgressVersionPrimary=null;q0.length=0}var As=N.ReactCurrentDispatcher,A0=N.ReactCurrentBatchConfig,Kr=0,ln=null,xn=null,wn=null,Ms=!1,wo=!1,_o=0,df=0;function An(){throw Error(r(321))}function M0(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!bt(e[i],n[i]))return!1;return!0}function P0(e,n,i,l,u,p){if(Kr=p,ln=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,As.current=e===null||e.memoizedState===null?hf:gf,e=i(l,u),wo){p=0;do{if(wo=!1,_o=0,25<=p)throw Error(r(301));p+=1,wn=xn=null,n.updateQueue=null,As.current=yf,e=i(l,u)}while(wo)}if(As.current=Rs,n=xn!==null&&xn.next!==null,Kr=0,wn=xn=ln=null,Ms=!1,n)throw Error(r(300));return e}function C0(){var e=_o!==0;return _o=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?ln.memoizedState=wn=e:wn=wn.next=e,wn}function ct(){if(xn===null){var e=ln.alternate;e=e!==null?e.memoizedState:null}else e=xn.next;var n=wn===null?ln.memoizedState:wn.next;if(n!==null)wn=n,xn=e;else{if(e===null)throw Error(r(310));xn=e,e={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},wn===null?ln.memoizedState=wn=e:wn=wn.next=e}return wn}function ko(e,n){return typeof n=="function"?n(e):n}function R0(e){var n=ct(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=xn,u=l.baseQueue,p=i.pending;if(p!==null){if(u!==null){var $=u.next;u.next=p.next,p.next=$}l.baseQueue=u=p,i.pending=null}if(u!==null){p=u.next,l=l.baseState;var S=$=null,A=null,V=p;do{var ie=V.lane;if((Kr&ie)===ie)A!==null&&(A=A.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),l=V.hasEagerState?V.eagerState:e(l,V.action);else{var ae={lane:ie,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};A===null?(S=A=ae,$=l):A=A.next=ae,ln.lanes|=ie,Zr|=ie}V=V.next}while(V!==null&&V!==p);A===null?$=l:A.next=S,bt(l,n.memoizedState)||(Un=!0),n.memoizedState=l,n.baseState=$,n.baseQueue=A,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do p=u.lane,ln.lanes|=p,Zr|=p,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function D0(e){var n=ct(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,p=n.memoizedState;if(u!==null){i.pending=null;var $=u=u.next;do p=e(p,$.action),$=$.next;while($!==u);bt(p,n.memoizedState)||(Un=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,l]}function Au(){}function Mu(e,n){var i=ln,l=ct(),u=n(),p=!bt(l.memoizedState,u);if(p&&(l.memoizedState=u,Un=!0),l=l.queue,E0(Ru.bind(null,i,l,e),[e]),l.getSnapshot!==n||p||wn!==null&&wn.memoizedState.tag&1){if(i.flags|=2048,zo(9,Cu.bind(null,i,l,u,n),void 0,null),_n===null)throw Error(r(349));(Kr&30)!==0||Pu(i,n,u)}return u}function Pu(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ln.updateQueue,n===null?(n={lastEffect:null,stores:null},ln.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Cu(e,n,i,l){n.value=i,n.getSnapshot=l,Du(n)&&Eu(e)}function Ru(e,n,i){return i(function(){Du(n)&&Eu(e)})}function Du(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!bt(e,i)}catch{return!0}}function Eu(e){var n=Kt(e,1);n!==null&&St(n,e,1,-1)}function Bu(e){var n=Pt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},n.queue=e,e=e.dispatch=ff.bind(null,ln,e),[n.memoizedState,e]}function zo(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=ln.updateQueue,n===null?(n={lastEffect:null,stores:null},ln.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function Nu(){return ct().memoizedState}function Ps(e,n,i,l){var u=Pt();ln.flags|=e,u.memoizedState=zo(1|n,i,void 0,l===void 0?null:l)}function Cs(e,n,i,l){var u=ct();l=l===void 0?null:l;var p=void 0;if(xn!==null){var $=xn.memoizedState;if(p=$.destroy,l!==null&&M0(l,$.deps)){u.memoizedState=zo(n,i,p,l);return}}ln.flags|=e,u.memoizedState=zo(1|n,i,p,l)}function Iu(e,n){return Ps(8390656,8,e,n)}function E0(e,n){return Cs(2048,8,e,n)}function Fu(e,n){return Cs(4,2,e,n)}function Lu(e,n){return Cs(4,4,e,n)}function Ou(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hu(e,n,i){return i=i!=null?i.concat([e]):null,Cs(4,4,Ou.bind(null,n,e),i)}function B0(){}function Wu(e,n){var i=ct();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&M0(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Gu(e,n){var i=ct();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&M0(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function Uu(e,n,i){return(Kr&21)===0?(e.baseState&&(e.baseState=!1,Un=!0),e.memoizedState=i):(bt(i,n)||(i=wc(),ln.lanes|=i,Zr|=i,e.baseState=!0),n)}function mf(e,n){var i=Ye;Ye=i!==0&&4>i?i:4,e(!0);var l=A0.transition;A0.transition={};try{e(!1),n()}finally{Ye=i,A0.transition=l}}function Vu(){return ct().memoizedState}function pf(e,n,i){var l=wr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},Ku(e))Zu(n,i);else if(i=zu(e,n,i,l),i!==null){var u=En();St(i,e,l,u),Yu(i,n,l)}}function ff(e,n,i){var l=wr(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Zu(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var $=n.lastRenderedState,S=p($,i);if(u.hasEagerState=!0,u.eagerState=S,bt(S,$)){var A=n.interleaved;A===null?(u.next=u,k0(n)):(u.next=A.next,A.next=u),n.interleaved=u;return}}catch{}finally{}i=zu(e,n,u,l),i!==null&&(u=En(),St(i,e,l,u),Yu(i,n,l))}}function Ku(e){var n=e.alternate;return e===ln||n!==null&&n===ln}function Zu(e,n){wo=Ms=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Yu(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Ia(e,i)}}var Rs={readContext:lt,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},hf={readContext:lt,useCallback:function(e,n){return Pt().memoizedState=[e,n===void 0?null:n],e},useContext:lt,useEffect:Iu,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Ps(4194308,4,Ou.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Ps(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ps(4,2,e,n)},useMemo:function(e,n){var i=Pt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=Pt();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=pf.bind(null,ln,e),[l.memoizedState,e]},useRef:function(e){var n=Pt();return e={current:e},n.memoizedState=e},useState:Bu,useDebugValue:B0,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Bu(!1),n=e[0];return e=mf.bind(null,e[1]),Pt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=ln,u=Pt();if(on){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),_n===null)throw Error(r(349));(Kr&30)!==0||Pu(l,n,i)}u.memoizedState=i;var p={value:i,getSnapshot:n};return u.queue=p,Iu(Ru.bind(null,l,p,e),[e]),l.flags|=2048,zo(9,Cu.bind(null,l,p,i,n),void 0,null),i},useId:function(){var e=Pt(),n=_n.identifierPrefix;if(on){var i=Vt,l=Ut;i=(l&~(1<<32-$t(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=_o++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=df++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},gf={readContext:lt,useCallback:Wu,useContext:lt,useEffect:E0,useImperativeHandle:Hu,useInsertionEffect:Fu,useLayoutEffect:Lu,useMemo:Gu,useReducer:R0,useRef:Nu,useState:function(){return R0(ko)},useDebugValue:B0,useDeferredValue:function(e){var n=ct();return Uu(n,xn.memoizedState,e)},useTransition:function(){var e=R0(ko)[0],n=ct().memoizedState;return[e,n]},useMutableSource:Au,useSyncExternalStore:Mu,useId:Vu,unstable_isNewReconciler:!1},yf={readContext:lt,useCallback:Wu,useContext:lt,useEffect:E0,useImperativeHandle:Hu,useInsertionEffect:Fu,useLayoutEffect:Lu,useMemo:Gu,useReducer:D0,useRef:Nu,useState:function(){return D0(ko)},useDebugValue:B0,useDeferredValue:function(e){var n=ct();return xn===null?n.memoizedState=e:Uu(n,xn.memoizedState,e)},useTransition:function(){var e=D0(ko)[0],n=ct().memoizedState;return[e,n]},useMutableSource:Au,useSyncExternalStore:Mu,useId:Vu,unstable_isNewReconciler:!1};function _t(e,n){if(e&&e.defaultProps){n=de({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function N0(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:de({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ds={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=En(),u=wr(e),p=Zt(l,u);p.payload=n,i!=null&&(p.callback=i),n=vr(e,p,u),n!==null&&(St(n,e,u,l),js(n,e,u))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=En(),u=wr(e),p=Zt(l,u);p.tag=1,p.payload=n,i!=null&&(p.callback=i),n=vr(e,p,u),n!==null&&(St(n,e,u,l),js(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=En(),l=wr(e),u=Zt(i,l);u.tag=2,n!=null&&(u.callback=n),n=vr(e,u,l),n!==null&&(St(n,e,l,i),js(n,e,l))}};function Qu(e,n,i,l,u,p,$){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,$):n.prototype&&n.prototype.isPureReactComponent?!uo(i,l)||!uo(u,p):!0}function Xu(e,n,i){var l=!1,u=hr,p=n.contextType;return typeof p=="object"&&p!==null?p=lt(p):(u=Gn(n)?Hr:Tn.current,l=n.contextTypes,p=(l=l!=null)?$i(e,u):hr),n=new n(i,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ds,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=p),n}function Ju(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&Ds.enqueueReplaceState(n,n.state,null)}function I0(e,n,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},z0(e);var p=n.contextType;typeof p=="object"&&p!==null?u.context=lt(p):(p=Gn(n)?Hr:Tn.current,u.context=$i(e,p)),u.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(N0(e,n,p,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ds.enqueueReplaceState(u,u.state,null),qs(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function qi(e,n){try{var i="",l=n;do i+=ze(l),l=l.return;while(l);var u=i}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:u,digest:null}}function F0(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function L0(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function e1(e,n,i){i=Zt(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Os||(Os=!0,tl=l),L0(e,n)},i}function n1(e,n,i){i=Zt(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;i.payload=function(){return l(u)},i.callback=function(){L0(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(i.callback=function(){L0(e,n),typeof l!="function"&&($r===null?$r=new Set([this]):$r.add(this));var $=n.stack;this.componentDidCatch(n.value,{componentStack:$!==null?$:""})}),i}function t1(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new vf;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(i)||(u.add(i),e=Pf.bind(null,e,n,i),n.then(e,e))}function r1(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function i1(e,n,i,l,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Zt(-1,1),n.tag=2,vr(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var xf=N.ReactCurrentOwner,Un=!1;function Dn(e,n,i,l){n.child=e===null?ku(n,null,i,l):ki(n,e.child,i,l)}function o1(e,n,i,l,u){i=i.render;var p=n.ref;return Si(n,u),l=P0(e,n,i,l,p,u),i=C0(),e!==null&&!Un?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Yt(e,n,u)):(on&&i&&h0(n),n.flags|=1,Dn(e,n,l,u),n.child)}function s1(e,n,i,l,u){if(e===null){var p=i.type;return typeof p=="function"&&!cl(p)&&p.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=p,a1(e,n,p,l,u)):(e=Ks(i.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&u)===0){var $=p.memoizedProps;if(i=i.compare,i=i!==null?i:uo,i($,l)&&e.ref===n.ref)return Yt(e,n,u)}return n.flags|=1,e=kr(p,l),e.ref=n.ref,e.return=n,n.child=e}function a1(e,n,i,l,u){if(e!==null){var p=e.memoizedProps;if(uo(p,l)&&e.ref===n.ref)if(Un=!1,n.pendingProps=l=p,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Un=!0);else return n.lanes=e.lanes,Yt(e,n,u)}return O0(e,n,i,l,u)}function l1(e,n,i){var l=n.pendingProps,u=l.children,p=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Ai,tt),tt|=i;else{if((i&1073741824)===0)return e=p!==null?p.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,en(Ai,tt),tt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:i,en(Ai,tt),tt|=l}else p!==null?(l=p.baseLanes|i,n.memoizedState=null):l=i,en(Ai,tt),tt|=l;return Dn(e,n,u,i),n.child}function c1(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function O0(e,n,i,l,u){var p=Gn(i)?Hr:Tn.current;return p=$i(n,p),Si(n,u),i=P0(e,n,i,l,p,u),l=C0(),e!==null&&!Un?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Yt(e,n,u)):(on&&l&&h0(n),n.flags|=1,Dn(e,n,i,u),n.child)}function u1(e,n,i,l,u){if(Gn(i)){var p=!0;xs(n)}else p=!1;if(Si(n,u),n.stateNode===null)Bs(e,n),Xu(n,i,l),I0(n,i,l,u),l=!0;else if(e===null){var $=n.stateNode,S=n.memoizedProps;$.props=S;var A=$.context,V=i.contextType;typeof V=="object"&&V!==null?V=lt(V):(V=Gn(i)?Hr:Tn.current,V=$i(n,V));var ie=i.getDerivedStateFromProps,ae=typeof ie=="function"||typeof $.getSnapshotBeforeUpdate=="function";ae||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(S!==l||A!==V)&&Ju(n,$,l,V),yr=!1;var ne=n.memoizedState;$.state=ne,qs(n,l,$,u),A=n.memoizedState,S!==l||ne!==A||Wn.current||yr?(typeof ie=="function"&&(N0(n,i,ie,l),A=n.memoizedState),(S=yr||Qu(n,i,S,l,ne,A,V))?(ae||typeof $.UNSAFE_componentWillMount!="function"&&typeof $.componentWillMount!="function"||(typeof $.componentWillMount=="function"&&$.componentWillMount(),typeof $.UNSAFE_componentWillMount=="function"&&$.UNSAFE_componentWillMount()),typeof $.componentDidMount=="function"&&(n.flags|=4194308)):(typeof $.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=A),$.props=l,$.state=A,$.context=V,l=S):(typeof $.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{$=n.stateNode,Su(e,n),S=n.memoizedProps,V=n.type===n.elementType?S:_t(n.type,S),$.props=V,ae=n.pendingProps,ne=$.context,A=i.contextType,typeof A=="object"&&A!==null?A=lt(A):(A=Gn(i)?Hr:Tn.current,A=$i(n,A));var ge=i.getDerivedStateFromProps;(ie=typeof ge=="function"||typeof $.getSnapshotBeforeUpdate=="function")||typeof $.UNSAFE_componentWillReceiveProps!="function"&&typeof $.componentWillReceiveProps!="function"||(S!==ae||ne!==A)&&Ju(n,$,l,A),yr=!1,ne=n.memoizedState,$.state=ne,qs(n,l,$,u);var we=n.memoizedState;S!==ae||ne!==we||Wn.current||yr?(typeof ge=="function"&&(N0(n,i,ge,l),we=n.memoizedState),(V=yr||Qu(n,i,V,l,ne,we,A)||!1)?(ie||typeof $.UNSAFE_componentWillUpdate!="function"&&typeof $.componentWillUpdate!="function"||(typeof $.componentWillUpdate=="function"&&$.componentWillUpdate(l,we,A),typeof $.UNSAFE_componentWillUpdate=="function"&&$.UNSAFE_componentWillUpdate(l,we,A)),typeof $.componentDidUpdate=="function"&&(n.flags|=4),typeof $.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof $.componentDidUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=we),$.props=l,$.state=we,$.context=A,l=V):(typeof $.componentDidUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof $.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),l=!1)}return H0(e,n,i,l,p,u)}function H0(e,n,i,l,u,p){c1(e,n);var $=(n.flags&128)!==0;if(!l&&!$)return u&&hu(n,i,!1),Yt(e,n,p);l=n.stateNode,xf.current=n;var S=$&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&$?(n.child=ki(n,e.child,null,p),n.child=ki(n,null,S,p)):Dn(e,n,S,p),n.memoizedState=l.state,u&&hu(n,i,!0),n.child}function d1(e){var n=e.stateNode;n.pendingContext?pu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&pu(e,n.context,!1),S0(e,n.containerInfo)}function m1(e,n,i,l,u){return _i(),x0(u),n.flags|=256,Dn(e,n,i,l),n.child}var W0={dehydrated:null,treeContext:null,retryLane:0};function G0(e){return{baseLanes:e,cachePool:null,transitions:null}}function p1(e,n,i){var l=n.pendingProps,u=an.current,p=!1,$=(n.flags&128)!==0,S;if((S=$)||(S=e!==null&&e.memoizedState===null?!1:(u&2)!==0),S?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),en(an,u&1),e===null)return v0(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):($=l.children,e=l.fallback,p?(l=n.mode,p=n.child,$={mode:"hidden",children:$},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=$):p=Zs($,l,0,null),e=Jr(e,l,i,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=G0(i),n.memoizedState=W0,e):U0(n,$));if(u=e.memoizedState,u!==null&&(S=u.dehydrated,S!==null))return $f(e,n,$,l,S,u,i);if(p){p=l.fallback,$=n.mode,u=e.child,S=u.sibling;var A={mode:"hidden",children:l.children};return($&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=A,n.deletions=null):(l=kr(u,A),l.subtreeFlags=u.subtreeFlags&14680064),S!==null?p=kr(S,p):(p=Jr(p,$,i,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,$=e.child.memoizedState,$=$===null?G0(i):{baseLanes:$.baseLanes|i,cachePool:null,transitions:$.transitions},p.memoizedState=$,p.childLanes=e.childLanes&~i,n.memoizedState=W0,l}return p=e.child,e=p.sibling,l=kr(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function U0(e,n){return n=Zs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Es(e,n,i,l){return l!==null&&x0(l),ki(n,e.child,null,i),e=U0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $f(e,n,i,l,u,p,$){if(i)return n.flags&256?(n.flags&=-257,l=F0(Error(r(422))),Es(e,n,$,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=l.fallback,u=n.mode,l=Zs({mode:"visible",children:l.children},u,0,null),p=Jr(p,u,$,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&ki(n,e.child,null,$),n.child.memoizedState=G0($),n.memoizedState=W0,p);if((n.mode&1)===0)return Es(e,n,$,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var S=l.dgst;return l=S,p=Error(r(419)),l=F0(p,l,void 0),Es(e,n,$,l)}if(S=($&e.childLanes)!==0,Un||S){if(l=_n,l!==null){switch($&-$){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|$))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Kt(e,u),St(l,e,u,-1))}return ll(),l=F0(Error(r(421))),Es(e,n,$,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),u._reactRetry=n,null):(e=p.treeContext,nt=pr(u.nextSibling),et=n,on=!0,wt=null,e!==null&&(st[at++]=Ut,st[at++]=Vt,st[at++]=Wr,Ut=e.id,Vt=e.overflow,Wr=n),n=U0(n,l.children),n.flags|=4096,n)}function f1(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),_0(e.return,n,i)}function V0(e,n,i,l,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=i,p.tailMode=u)}function h1(e,n,i){var l=n.pendingProps,u=l.revealOrder,p=l.tail;if(Dn(e,n,l.children,i),l=an.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f1(e,i,n);else if(e.tag===19)f1(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(en(an,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&Ts(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),V0(n,!1,u,i,p);break;case"backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ts(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}V0(n,!0,i,null,p);break;case"together":V0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bs(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Yt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Zr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=kr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=kr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function bf(e,n,i){switch(n.tag){case 3:d1(n),_i();break;case 5:Tu(n);break;case 1:Gn(n.type)&&xs(n);break;case 4:S0(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;en(zs,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(en(an,an.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?p1(e,n,i):(en(an,an.current&1),e=Yt(e,n,i),e!==null?e.sibling:null);en(an,an.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return h1(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),en(an,an.current),l)break;return null;case 22:case 23:return n.lanes=0,l1(e,n,i)}return Yt(e,n,i)}var g1,K0,y1,v1;g1=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},K0=function(){},y1=function(e,n,i,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,Vr(Mt.current);var p=null;switch(i){case"input":u=Ln(e,u),l=Ln(e,l),p=[];break;case"select":u=de({},u,{value:void 0}),l=de({},l,{value:void 0}),p=[];break;case"textarea":u=ii(e,u),l=ii(e,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=gs)}oi(i,l);var $;i=null;for(V in u)if(!l.hasOwnProperty(V)&&u.hasOwnProperty(V)&&u[V]!=null)if(V==="style"){var S=u[V];for($ in S)S.hasOwnProperty($)&&(i||(i={}),i[$]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(a.hasOwnProperty(V)?p||(p=[]):(p=p||[]).push(V,null));for(V in l){var A=l[V];if(S=u!=null?u[V]:void 0,l.hasOwnProperty(V)&&A!==S&&(A!=null||S!=null))if(V==="style")if(S){for($ in S)!S.hasOwnProperty($)||A&&A.hasOwnProperty($)||(i||(i={}),i[$]="");for($ in A)A.hasOwnProperty($)&&S[$]!==A[$]&&(i||(i={}),i[$]=A[$])}else i||(p||(p=[]),p.push(V,i)),i=A;else V==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,S=S?S.__html:void 0,A!=null&&S!==A&&(p=p||[]).push(V,A)):V==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(V,""+A):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(a.hasOwnProperty(V)?(A!=null&&V==="onScroll"&&tn("scroll",e),p||S===A||(p=[])):(p=p||[]).push(V,A))}i&&(p=p||[]).push("style",i);var V=p;(n.updateQueue=V)&&(n.flags|=4)}},v1=function(e,n,i,l){i!==l&&(n.flags|=4)};function So(e,n){if(!on)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Mn(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function wf(e,n,i){var l=n.pendingProps;switch(g0(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(n),null;case 1:return Gn(n.type)&&vs(),Mn(n),null;case 3:return l=n.stateNode,ji(),rn(Wn),rn(Tn),T0(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(_s(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wt!==null&&(ol(wt),wt=null))),K0(e,n),Mn(n),null;case 5:j0(n);var u=Vr(bo.current);if(i=n.type,e!==null&&n.stateNode!=null)y1(e,n,i,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Mn(n),null}if(e=Vr(Mt.current),_s(n)){l=n.stateNode,i=n.type;var p=n.memoizedProps;switch(l[At]=n,l[go]=p,e=(n.mode&1)!==0,i){case"dialog":tn("cancel",l),tn("close",l);break;case"iframe":case"object":case"embed":tn("load",l);break;case"video":case"audio":for(u=0;u<po.length;u++)tn(po[u],l);break;case"source":tn("error",l);break;case"img":case"image":case"link":tn("error",l),tn("load",l);break;case"details":tn("toggle",l);break;case"input":Rr(l,p),tn("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},tn("invalid",l);break;case"textarea":Li(l,p),tn("invalid",l)}oi(i,p),u=null;for(var $ in p)if(p.hasOwnProperty($)){var S=p[$];$==="children"?typeof S=="string"?l.textContent!==S&&(p.suppressHydrationWarning!==!0&&hs(l.textContent,S,e),u=["children",S]):typeof S=="number"&&l.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&hs(l.textContent,S,e),u=["children",""+S]):a.hasOwnProperty($)&&S!=null&&$==="onScroll"&&tn("scroll",l)}switch(i){case"input":Ae(l),Dr(l,p,!0);break;case"textarea":Ae(l),Hi(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=gs)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{$=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wi(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=$.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=$.createElement(i,{is:l.is}):(e=$.createElement(i),i==="select"&&($=e,l.multiple?$.multiple=!0:l.size&&($.size=l.size))):e=$.createElementNS(e,i),e[At]=n,e[go]=l,g1(e,n,!1,!1),n.stateNode=e;e:{switch($=Ui(i,l),i){case"dialog":tn("cancel",e),tn("close",e),u=l;break;case"iframe":case"object":case"embed":tn("load",e),u=l;break;case"video":case"audio":for(u=0;u<po.length;u++)tn(po[u],e);u=l;break;case"source":tn("error",e),u=l;break;case"img":case"image":case"link":tn("error",e),tn("load",e),u=l;break;case"details":tn("toggle",e),u=l;break;case"input":Rr(e,l),u=Ln(e,l),tn("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=de({},l,{value:void 0}),tn("invalid",e);break;case"textarea":Li(e,l),u=ii(e,l),tn("invalid",e);break;default:u=l}oi(i,u),S=u;for(p in S)if(S.hasOwnProperty(p)){var A=S[p];p==="style"?Wo(e,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&dn(e,A)):p==="children"?typeof A=="string"?(i!=="textarea"||A!=="")&&qt(e,A):typeof A=="number"&&qt(e,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?A!=null&&p==="onScroll"&&tn("scroll",e):A!=null&&L(e,p,A,$))}switch(i){case"input":Ae(e),Dr(e,l,!1);break;case"textarea":Ae(e),Hi(e);break;case"option":l.value!=null&&e.setAttribute("value",""+Oe(l.value));break;case"select":e.multiple=!!l.multiple,p=l.value,p!=null?Xn(e,!!l.multiple,p,!1):l.defaultValue!=null&&Xn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=gs)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Mn(n),null;case 6:if(e&&n.stateNode!=null)v1(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=Vr(bo.current),Vr(Mt.current),_s(n)){if(l=n.stateNode,i=n.memoizedProps,l[At]=n,(p=l.nodeValue!==i)&&(e=et,e!==null))switch(e.tag){case 3:hs(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hs(l.nodeValue,i,(e.mode&1)!==0)}p&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[At]=n,n.stateNode=l}return Mn(n),null;case 13:if(rn(an),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(on&&nt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)bu(),_i(),n.flags|=98560,p=!1;else if(p=_s(n),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(r(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(r(317));p[At]=n}else _i(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Mn(n),p=!1}else wt!==null&&(ol(wt),wt=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(an.current&1)!==0?$n===0&&($n=3):ll())),n.updateQueue!==null&&(n.flags|=4),Mn(n),null);case 4:return ji(),K0(e,n),e===null&&fo(n.stateNode.containerInfo),Mn(n),null;case 10:return w0(n.type._context),Mn(n),null;case 17:return Gn(n.type)&&vs(),Mn(n),null;case 19:if(rn(an),p=n.memoizedState,p===null)return Mn(n),null;if(l=(n.flags&128)!==0,$=p.rendering,$===null)if(l)So(p,!1);else{if($n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if($=Ts(e),$!==null){for(n.flags|=128,So(p,!1),l=$.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)p=i,e=l,p.flags&=14680066,$=p.alternate,$===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=$.childLanes,p.lanes=$.lanes,p.child=$.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=$.memoizedProps,p.memoizedState=$.memoizedState,p.updateQueue=$.updateQueue,p.type=$.type,e=$.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return en(an,an.current&1|2),n.child}e=e.sibling}p.tail!==null&&Je()>Mi&&(n.flags|=128,l=!0,So(p,!1),n.lanes=4194304)}else{if(!l)if(e=Ts($),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),So(p,!0),p.tail===null&&p.tailMode==="hidden"&&!$.alternate&&!on)return Mn(n),null}else 2*Je()-p.renderingStartTime>Mi&&i!==1073741824&&(n.flags|=128,l=!0,So(p,!1),n.lanes=4194304);p.isBackwards?($.sibling=n.child,n.child=$):(i=p.last,i!==null?i.sibling=$:n.child=$,p.last=$)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=Je(),n.sibling=null,i=an.current,en(an,l?i&1|2:i&1),n):(Mn(n),null);case 22:case 23:return al(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(tt&1073741824)!==0&&(Mn(n),n.subtreeFlags&6&&(n.flags|=8192)):Mn(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function _f(e,n){switch(g0(n),n.tag){case 1:return Gn(n.type)&&vs(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(),rn(Wn),rn(Tn),T0(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return j0(n),null;case 13:if(rn(an),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));_i()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rn(an),null;case 4:return ji(),null;case 10:return w0(n.type._context),null;case 22:case 23:return al(),null;case 24:return null;default:return null}}var Ns=!1,Pn=!1,kf=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ti(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){mn(e,n,l)}else i.current=null}function Z0(e,n,i){try{i()}catch(l){mn(e,n,l)}}var x1=!1;function zf(e,n){if(a0=is,e=Qc(),Ja(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var $=0,S=-1,A=-1,V=0,ie=0,ae=e,ne=null;n:for(;;){for(var ge;ae!==i||u!==0&&ae.nodeType!==3||(S=$+u),ae!==p||l!==0&&ae.nodeType!==3||(A=$+l),ae.nodeType===3&&($+=ae.nodeValue.length),(ge=ae.firstChild)!==null;)ne=ae,ae=ge;for(;;){if(ae===e)break n;if(ne===i&&++V===u&&(S=$),ne===p&&++ie===l&&(A=$),(ge=ae.nextSibling)!==null)break;ae=ne,ne=ae.parentNode}ae=ge}i=S===-1||A===-1?null:{start:S,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(l0={focusedElem:e,selectionRange:i},is=!1,xe=n;xe!==null;)if(n=xe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xe=e;else for(;xe!==null;){n=xe;try{var we=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(we!==null){var _e=we.memoizedProps,fn=we.memoizedState,O=n.stateNode,D=O.getSnapshotBeforeUpdate(n.elementType===n.type?_e:_t(n.type,_e),fn);O.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var W=n.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ue){mn(n,n.return,ue)}if(e=n.sibling,e!==null){e.return=n.return,xe=e;break}xe=n.return}return we=x1,x1=!1,we}function jo(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var p=u.destroy;u.destroy=void 0,p!==void 0&&Z0(n,i,p)}u=u.next}while(u!==l)}}function Is(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function Y0(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function $1(e){var n=e.alternate;n!==null&&(e.alternate=null,$1(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[At],delete n[go],delete n[m0],delete n[af],delete n[lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function b1(e){return e.tag===5||e.tag===3||e.tag===4}function w1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||b1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Q0(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=gs));else if(l!==4&&(e=e.child,e!==null))for(Q0(e,n,i),e=e.sibling;e!==null;)Q0(e,n,i),e=e.sibling}function X0(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(X0(e,n,i),e=e.sibling;e!==null;)X0(e,n,i),e=e.sibling}var Sn=null,kt=!1;function xr(e,n,i){for(i=i.child;i!==null;)_1(e,n,i),i=i.sibling}function _1(e,n,i){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Ge,i)}catch{}switch(i.tag){case 5:Pn||Ti(i,n);case 6:var l=Sn,u=kt;Sn=null,xr(e,n,i),Sn=l,kt=u,Sn!==null&&(kt?(e=Sn,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Sn.removeChild(i.stateNode));break;case 18:Sn!==null&&(kt?(e=Sn,i=i.stateNode,e.nodeType===8?d0(e.parentNode,i):e.nodeType===1&&d0(e,i),io(e)):d0(Sn,i.stateNode));break;case 4:l=Sn,u=kt,Sn=i.stateNode.containerInfo,kt=!0,xr(e,n,i),Sn=l,kt=u;break;case 0:case 11:case 14:case 15:if(!Pn&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,$=p.destroy;p=p.tag,$!==void 0&&((p&2)!==0||(p&4)!==0)&&Z0(i,n,$),u=u.next}while(u!==l)}xr(e,n,i);break;case 1:if(!Pn&&(Ti(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(S){mn(i,n,S)}xr(e,n,i);break;case 21:xr(e,n,i);break;case 22:i.mode&1?(Pn=(l=Pn)||i.memoizedState!==null,xr(e,n,i),Pn=l):xr(e,n,i);break;default:xr(e,n,i)}}function k1(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new kf),n.forEach(function(l){var u=Rf.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function zt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var p=e,$=n,S=$;e:for(;S!==null;){switch(S.tag){case 5:Sn=S.stateNode,kt=!1;break e;case 3:Sn=S.stateNode.containerInfo,kt=!0;break e;case 4:Sn=S.stateNode.containerInfo,kt=!0;break e}S=S.return}if(Sn===null)throw Error(r(160));_1(p,$,u),Sn=null,kt=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(V){mn(u,n,V)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)z1(n,e),n=n.sibling}function z1(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(n,e),Ct(e),l&4){try{jo(3,e,e.return),Is(3,e)}catch(_e){mn(e,e.return,_e)}try{jo(5,e,e.return)}catch(_e){mn(e,e.return,_e)}}break;case 1:zt(n,e),Ct(e),l&512&&i!==null&&Ti(i,i.return);break;case 5:if(zt(n,e),Ct(e),l&512&&i!==null&&Ti(i,i.return),e.flags&32){var u=e.stateNode;try{qt(u,"")}catch(_e){mn(e,e.return,_e)}}if(l&4&&(u=e.stateNode,u!=null)){var p=e.memoizedProps,$=i!==null?i.memoizedProps:p,S=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&gt(u,p),Ui(S,$);var V=Ui(S,p);for($=0;$<A.length;$+=2){var ie=A[$],ae=A[$+1];ie==="style"?Wo(u,ae):ie==="dangerouslySetInnerHTML"?dn(u,ae):ie==="children"?qt(u,ae):L(u,ie,ae,V)}switch(S){case"input":yt(u,p);break;case"textarea":Oi(u,p);break;case"select":var ne=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var ge=p.value;ge!=null?Xn(u,!!p.multiple,ge,!1):ne!==!!p.multiple&&(p.defaultValue!=null?Xn(u,!!p.multiple,p.defaultValue,!0):Xn(u,!!p.multiple,p.multiple?[]:"",!1))}u[go]=p}catch(_e){mn(e,e.return,_e)}}break;case 6:if(zt(n,e),Ct(e),l&4){if(e.stateNode===null)throw Error(r(162));u=e.stateNode,p=e.memoizedProps;try{u.nodeValue=p}catch(_e){mn(e,e.return,_e)}}break;case 3:if(zt(n,e),Ct(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{io(n.containerInfo)}catch(_e){mn(e,e.return,_e)}break;case 4:zt(n,e),Ct(e);break;case 13:zt(n,e),Ct(e),u=e.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(nl=Je())),l&4&&k1(e);break;case 22:if(ie=i!==null&&i.memoizedState!==null,e.mode&1?(Pn=(V=Pn)||ie,zt(n,e),Pn=V):zt(n,e),Ct(e),l&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!ie&&(e.mode&1)!==0)for(xe=e,ie=e.child;ie!==null;){for(ae=xe=ie;xe!==null;){switch(ne=xe,ge=ne.child,ne.tag){case 0:case 11:case 14:case 15:jo(4,ne,ne.return);break;case 1:Ti(ne,ne.return);var we=ne.stateNode;if(typeof we.componentWillUnmount=="function"){l=ne,i=ne.return;try{n=l,we.props=n.memoizedProps,we.state=n.memoizedState,we.componentWillUnmount()}catch(_e){mn(l,i,_e)}}break;case 5:Ti(ne,ne.return);break;case 22:if(ne.memoizedState!==null){q1(ae);continue}}ge!==null?(ge.return=ne,xe=ge):q1(ae)}ie=ie.sibling}e:for(ie=null,ae=e;;){if(ae.tag===5){if(ie===null){ie=ae;try{u=ae.stateNode,V?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=ae.stateNode,A=ae.memoizedProps.style,$=A!=null&&A.hasOwnProperty("display")?A.display:null,S.style.display=Gi("display",$))}catch(_e){mn(e,e.return,_e)}}}else if(ae.tag===6){if(ie===null)try{ae.stateNode.nodeValue=V?"":ae.memoizedProps}catch(_e){mn(e,e.return,_e)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===e)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===e)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===e)break e;ie===ae&&(ie=null),ae=ae.return}ie===ae&&(ie=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:zt(n,e),Ct(e),l&4&&k1(e);break;case 21:break;default:zt(n,e),Ct(e)}}function Ct(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(b1(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(qt(u,""),l.flags&=-33);var p=w1(e);X0(e,p,u);break;case 3:case 4:var $=l.stateNode.containerInfo,S=w1(e);Q0(e,S,$);break;default:throw Error(r(161))}}catch(A){mn(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sf(e,n,i){xe=e,S1(e)}function S1(e,n,i){for(var l=(e.mode&1)!==0;xe!==null;){var u=xe,p=u.child;if(u.tag===22&&l){var $=u.memoizedState!==null||Ns;if(!$){var S=u.alternate,A=S!==null&&S.memoizedState!==null||Pn;S=Ns;var V=Pn;if(Ns=$,(Pn=A)&&!V)for(xe=u;xe!==null;)$=xe,A=$.child,$.tag===22&&$.memoizedState!==null?T1(u):A!==null?(A.return=$,xe=A):T1(u);for(;p!==null;)xe=p,S1(p),p=p.sibling;xe=u,Ns=S,Pn=V}j1(e)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,xe=p):j1(e)}}function j1(e){for(;xe!==null;){var n=xe;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Pn||Is(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Pn)if(i===null)l.componentDidMount();else{var u=n.elementType===n.type?i.memoizedProps:_t(n.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&qu(n,p,l);break;case 3:var $=n.updateQueue;if($!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}qu(n,$,i)}break;case 5:var S=n.stateNode;if(i===null&&n.flags&4){i=S;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&i.focus();break;case"img":A.src&&(i.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var V=n.alternate;if(V!==null){var ie=V.memoizedState;if(ie!==null){var ae=ie.dehydrated;ae!==null&&io(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Pn||n.flags&512&&Y0(n)}catch(ne){mn(n,n.return,ne)}}if(n===e){xe=null;break}if(i=n.sibling,i!==null){i.return=n.return,xe=i;break}xe=n.return}}function q1(e){for(;xe!==null;){var n=xe;if(n===e){xe=null;break}var i=n.sibling;if(i!==null){i.return=n.return,xe=i;break}xe=n.return}}function T1(e){for(;xe!==null;){var n=xe;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Is(4,n)}catch(A){mn(n,i,A)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(A){mn(n,u,A)}}var p=n.return;try{Y0(n)}catch(A){mn(n,p,A)}break;case 5:var $=n.return;try{Y0(n)}catch(A){mn(n,$,A)}}}catch(A){mn(n,n.return,A)}if(n===e){xe=null;break}var S=n.sibling;if(S!==null){S.return=n.return,xe=S;break}xe=n.return}}var jf=Math.ceil,Fs=N.ReactCurrentDispatcher,J0=N.ReactCurrentOwner,ut=N.ReactCurrentBatchConfig,Ue=0,_n=null,gn=null,jn=0,tt=0,Ai=fr(0),$n=0,qo=null,Zr=0,Ls=0,el=0,To=null,Vn=null,nl=0,Mi=1/0,Qt=null,Os=!1,tl=null,$r=null,Hs=!1,br=null,Ws=0,Ao=0,rl=null,Gs=-1,Us=0;function En(){return(Ue&6)!==0?Je():Gs!==-1?Gs:Gs=Je()}function wr(e){return(e.mode&1)===0?1:(Ue&2)!==0&&jn!==0?jn&-jn:uf.transition!==null?(Us===0&&(Us=wc()),Us):(e=Ye,e!==0||(e=window.event,e=e===void 0?16:Mc(e.type)),e)}function St(e,n,i,l){if(50<Ao)throw Ao=0,rl=null,Error(r(185));Ji(e,i,l),((Ue&2)===0||e!==_n)&&(e===_n&&((Ue&2)===0&&(Ls|=i),$n===4&&_r(e,jn)),Kn(e,l),i===1&&Ue===0&&(n.mode&1)===0&&(Mi=Je()+500,$s&&gr()))}function Kn(e,n){var i=e.callbackNode;cp(e,n);var l=ns(e,e===_n?jn:0);if(l===0)i!==null&&ui(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&ui(i),n===1)e.tag===0?cf(M1.bind(null,e)):gu(M1.bind(null,e)),of(function(){(Ue&6)===0&&gr()}),i=null;else{switch(_c(l)){case 1:i=Qi;break;case 4:i=Xo;break;case 16:i=Lr;break;case 536870912:i=He;break;default:i=Lr}i=I1(i,A1.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function A1(e,n){if(Gs=-1,Us=0,(Ue&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Pi()&&e.callbackNode!==i)return null;var l=ns(e,e===_n?jn:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=Vs(e,l);else{n=l;var u=Ue;Ue|=2;var p=C1();(_n!==e||jn!==n)&&(Qt=null,Mi=Je()+500,Qr(e,n));do try{Af();break}catch(S){P1(e,S)}while(!0);b0(),Fs.current=p,Ue=u,gn!==null?n=0:(_n=null,jn=0,n=$n)}if(n!==0){if(n===2&&(u=Ba(e),u!==0&&(l=u,n=il(e,u))),n===1)throw i=qo,Qr(e,0),_r(e,l),Kn(e,Je()),i;if(n===6)_r(e,l);else{if(u=e.current.alternate,(l&30)===0&&!qf(u)&&(n=Vs(e,l),n===2&&(p=Ba(e),p!==0&&(l=p,n=il(e,p))),n===1))throw i=qo,Qr(e,0),_r(e,l),Kn(e,Je()),i;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:Xr(e,Vn,Qt);break;case 3:if(_r(e,l),(l&130023424)===l&&(n=nl+500-Je(),10<n)){if(ns(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){En(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=u0(Xr.bind(null,e,Vn,Qt),n);break}Xr(e,Vn,Qt);break;case 4:if(_r(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var $=31-$t(l);p=1<<$,$=n[$],$>u&&(u=$),l&=~p}if(l=u,l=Je()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*jf(l/1960))-l,10<l){e.timeoutHandle=u0(Xr.bind(null,e,Vn,Qt),l);break}Xr(e,Vn,Qt);break;case 5:Xr(e,Vn,Qt);break;default:throw Error(r(329))}}}return Kn(e,Je()),e.callbackNode===i?A1.bind(null,e):null}function il(e,n){var i=To;return e.current.memoizedState.isDehydrated&&(Qr(e,n).flags|=256),e=Vs(e,n),e!==2&&(n=Vn,Vn=i,n!==null&&ol(n)),e}function ol(e){Vn===null?Vn=e:Vn.push.apply(Vn,e)}function qf(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],p=u.getSnapshot;u=u.value;try{if(!bt(p(),u))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _r(e,n){for(n&=~el,n&=~Ls,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-$t(n),l=1<<i;e[i]=-1,n&=~l}}function M1(e){if((Ue&6)!==0)throw Error(r(327));Pi();var n=ns(e,0);if((n&1)===0)return Kn(e,Je()),null;var i=Vs(e,n);if(e.tag!==0&&i===2){var l=Ba(e);l!==0&&(n=l,i=il(e,l))}if(i===1)throw i=qo,Qr(e,0),_r(e,n),Kn(e,Je()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Xr(e,Vn,Qt),Kn(e,Je()),null}function sl(e,n){var i=Ue;Ue|=1;try{return e(n)}finally{Ue=i,Ue===0&&(Mi=Je()+500,$s&&gr())}}function Yr(e){br!==null&&br.tag===0&&(Ue&6)===0&&Pi();var n=Ue;Ue|=1;var i=ut.transition,l=Ye;try{if(ut.transition=null,Ye=1,e)return e()}finally{Ye=l,ut.transition=i,Ue=n,(Ue&6)===0&&gr()}}function al(){tt=Ai.current,rn(Ai)}function Qr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,rf(i)),gn!==null)for(i=gn.return;i!==null;){var l=i;switch(g0(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&vs();break;case 3:ji(),rn(Wn),rn(Tn),T0();break;case 5:j0(l);break;case 4:ji();break;case 13:rn(an);break;case 19:rn(an);break;case 10:w0(l.type._context);break;case 22:case 23:al()}i=i.return}if(_n=e,gn=e=kr(e.current,null),jn=tt=n,$n=0,qo=null,el=Ls=Zr=0,Vn=To=null,Ur!==null){for(n=0;n<Ur.length;n++)if(i=Ur[n],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,p=i.pending;if(p!==null){var $=p.next;p.next=u,l.next=$}i.pending=l}Ur=null}return e}function P1(e,n){do{var i=gn;try{if(b0(),As.current=Rs,Ms){for(var l=ln.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ms=!1}if(Kr=0,wn=xn=ln=null,wo=!1,_o=0,J0.current=null,i===null||i.return===null){$n=1,qo=n,gn=null;break}e:{var p=e,$=i.return,S=i,A=n;if(n=jn,S.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var V=A,ie=S,ae=ie.tag;if((ie.mode&1)===0&&(ae===0||ae===11||ae===15)){var ne=ie.alternate;ne?(ie.updateQueue=ne.updateQueue,ie.memoizedState=ne.memoizedState,ie.lanes=ne.lanes):(ie.updateQueue=null,ie.memoizedState=null)}var ge=r1($);if(ge!==null){ge.flags&=-257,i1(ge,$,S,p,n),ge.mode&1&&t1(p,V,n),n=ge,A=V;var we=n.updateQueue;if(we===null){var _e=new Set;_e.add(A),n.updateQueue=_e}else we.add(A);break e}else{if((n&1)===0){t1(p,V,n),ll();break e}A=Error(r(426))}}else if(on&&S.mode&1){var fn=r1($);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),i1(fn,$,S,p,n),x0(qi(A,S));break e}}p=A=qi(A,S),$n!==4&&($n=2),To===null?To=[p]:To.push(p),p=$;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var O=e1(p,A,n);ju(p,O);break e;case 1:S=A;var D=p.type,W=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&($r===null||!$r.has(W)))){p.flags|=65536,n&=-n,p.lanes|=n;var ue=n1(p,S,n);ju(p,ue);break e}}p=p.return}while(p!==null)}D1(i)}catch(ke){n=ke,gn===i&&i!==null&&(gn=i=i.return);continue}break}while(!0)}function C1(){var e=Fs.current;return Fs.current=Rs,e===null?Rs:e}function ll(){($n===0||$n===3||$n===2)&&($n=4),_n===null||(Zr&268435455)===0&&(Ls&268435455)===0||_r(_n,jn)}function Vs(e,n){var i=Ue;Ue|=2;var l=C1();(_n!==e||jn!==n)&&(Qt=null,Qr(e,n));do try{Tf();break}catch(u){P1(e,u)}while(!0);if(b0(),Ue=i,Fs.current=l,gn!==null)throw Error(r(261));return _n=null,jn=0,$n}function Tf(){for(;gn!==null;)R1(gn)}function Af(){for(;gn!==null&&!Ra();)R1(gn)}function R1(e){var n=N1(e.alternate,e,tt);e.memoizedProps=e.pendingProps,n===null?D1(e):gn=n,J0.current=null}function D1(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=wf(i,n,tt),i!==null){gn=i;return}}else{if(i=_f(i,n),i!==null){i.flags&=32767,gn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$n=6,gn=null;return}}if(n=n.sibling,n!==null){gn=n;return}gn=n=e}while(n!==null);$n===0&&($n=5)}function Xr(e,n,i){var l=Ye,u=ut.transition;try{ut.transition=null,Ye=1,Mf(e,n,i,l)}finally{ut.transition=u,Ye=l}return null}function Mf(e,n,i,l){do Pi();while(br!==null);if((Ue&6)!==0)throw Error(r(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var p=i.lanes|i.childLanes;if(up(e,p),e===_n&&(gn=_n=null,jn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Hs||(Hs=!0,I1(Lr,function(){return Pi(),null})),p=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||p){p=ut.transition,ut.transition=null;var $=Ye;Ye=1;var S=Ue;Ue|=4,J0.current=null,zf(e,i),z1(i,e),Yp(l0),is=!!a0,l0=a0=null,e.current=i,Sf(i),Da(),Ue=S,Ye=$,ut.transition=p}else e.current=i;if(Hs&&(Hs=!1,br=e,Ws=u),p=e.pendingLanes,p===0&&($r=null),ip(i.stateNode),Kn(e,Je()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)u=n[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(Os)throw Os=!1,e=tl,tl=null,e;return(Ws&1)!==0&&e.tag!==0&&Pi(),p=e.pendingLanes,(p&1)!==0?e===rl?Ao++:(Ao=0,rl=e):Ao=0,gr(),null}function Pi(){if(br!==null){var e=_c(Ws),n=ut.transition,i=Ye;try{if(ut.transition=null,Ye=16>e?16:e,br===null)var l=!1;else{if(e=br,br=null,Ws=0,(Ue&6)!==0)throw Error(r(331));var u=Ue;for(Ue|=4,xe=e.current;xe!==null;){var p=xe,$=p.child;if((xe.flags&16)!==0){var S=p.deletions;if(S!==null){for(var A=0;A<S.length;A++){var V=S[A];for(xe=V;xe!==null;){var ie=xe;switch(ie.tag){case 0:case 11:case 15:jo(8,ie,p)}var ae=ie.child;if(ae!==null)ae.return=ie,xe=ae;else for(;xe!==null;){ie=xe;var ne=ie.sibling,ge=ie.return;if($1(ie),ie===V){xe=null;break}if(ne!==null){ne.return=ge,xe=ne;break}xe=ge}}}var we=p.alternate;if(we!==null){var _e=we.child;if(_e!==null){we.child=null;do{var fn=_e.sibling;_e.sibling=null,_e=fn}while(_e!==null)}}xe=p}}if((p.subtreeFlags&2064)!==0&&$!==null)$.return=p,xe=$;else e:for(;xe!==null;){if(p=xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:jo(9,p,p.return)}var O=p.sibling;if(O!==null){O.return=p.return,xe=O;break e}xe=p.return}}var D=e.current;for(xe=D;xe!==null;){$=xe;var W=$.child;if(($.subtreeFlags&2064)!==0&&W!==null)W.return=$,xe=W;else e:for($=D;xe!==null;){if(S=xe,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Is(9,S)}}catch(ke){mn(S,S.return,ke)}if(S===$){xe=null;break e}var ue=S.sibling;if(ue!==null){ue.return=S.return,xe=ue;break e}xe=S.return}}if(Ue=u,gr(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Ge,e)}catch{}l=!0}return l}finally{Ye=i,ut.transition=n}}return!1}function E1(e,n,i){n=qi(i,n),n=e1(e,n,1),e=vr(e,n,1),n=En(),e!==null&&(Ji(e,1,n),Kn(e,n))}function mn(e,n,i){if(e.tag===3)E1(e,e,i);else for(;n!==null;){if(n.tag===3){E1(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&($r===null||!$r.has(l))){e=qi(i,e),e=n1(n,e,1),n=vr(n,e,1),e=En(),n!==null&&(Ji(n,1,e),Kn(n,e));break}}n=n.return}}function Pf(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=En(),e.pingedLanes|=e.suspendedLanes&i,_n===e&&(jn&i)===i&&($n===4||$n===3&&(jn&130023424)===jn&&500>Je()-nl?Qr(e,0):el|=i),Kn(e,n)}function B1(e,n){n===0&&((e.mode&1)===0?n=1:(n=es,es<<=1,(es&130023424)===0&&(es=4194304)));var i=En();e=Kt(e,n),e!==null&&(Ji(e,n,i),Kn(e,i))}function Cf(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),B1(e,i)}function Rf(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),B1(e,i)}var N1;N1=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Wn.current)Un=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return Un=!1,bf(e,n,i);Un=(e.flags&131072)!==0}else Un=!1,on&&(n.flags&1048576)!==0&&yu(n,ws,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Bs(e,n),e=n.pendingProps;var u=$i(n,Tn.current);Si(n,i),u=P0(null,n,l,e,u,i);var p=C0();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Gn(l)?(p=!0,xs(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,z0(n),u.updater=Ds,n.stateNode=u,u._reactInternals=n,I0(n,l,e,i),n=H0(null,n,l,!0,p,i)):(n.tag=0,on&&p&&h0(n),Dn(null,n,u,i),n=n.child),n;case 16:l=n.elementType;e:{switch(Bs(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=Ef(l),e=_t(l,e),u){case 0:n=O0(null,n,l,e,i);break e;case 1:n=u1(null,n,l,e,i);break e;case 11:n=o1(null,n,l,e,i);break e;case 14:n=s1(null,n,l,_t(l.type,e),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:_t(l,u),O0(e,n,l,u,i);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:_t(l,u),u1(e,n,l,u,i);case 3:e:{if(d1(n),e===null)throw Error(r(387));l=n.pendingProps,p=n.memoizedState,u=p.element,Su(e,n),qs(n,l,null,i);var $=n.memoizedState;if(l=$.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:$.cache,pendingSuspenseBoundaries:$.pendingSuspenseBoundaries,transitions:$.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=qi(Error(r(423)),n),n=m1(e,n,l,i,u);break e}else if(l!==u){u=qi(Error(r(424)),n),n=m1(e,n,l,i,u);break e}else for(nt=pr(n.stateNode.containerInfo.firstChild),et=n,on=!0,wt=null,i=ku(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(_i(),l===u){n=Yt(e,n,i);break e}Dn(e,n,l,i)}n=n.child}return n;case 5:return Tu(n),e===null&&v0(n),l=n.type,u=n.pendingProps,p=e!==null?e.memoizedProps:null,$=u.children,c0(l,u)?$=null:p!==null&&c0(l,p)&&(n.flags|=32),c1(e,n),Dn(e,n,$,i),n.child;case 6:return e===null&&v0(n),null;case 13:return p1(e,n,i);case 4:return S0(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=ki(n,null,l,i):Dn(e,n,l,i),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:_t(l,u),o1(e,n,l,u,i);case 7:return Dn(e,n,n.pendingProps,i),n.child;case 8:return Dn(e,n,n.pendingProps.children,i),n.child;case 12:return Dn(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,p=n.memoizedProps,$=u.value,en(zs,l._currentValue),l._currentValue=$,p!==null)if(bt(p.value,$)){if(p.children===u.children&&!Wn.current){n=Yt(e,n,i);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var S=p.dependencies;if(S!==null){$=p.child;for(var A=S.firstContext;A!==null;){if(A.context===l){if(p.tag===1){A=Zt(-1,i&-i),A.tag=2;var V=p.updateQueue;if(V!==null){V=V.shared;var ie=V.pending;ie===null?A.next=A:(A.next=ie.next,ie.next=A),V.pending=A}}p.lanes|=i,A=p.alternate,A!==null&&(A.lanes|=i),_0(p.return,i,n),S.lanes|=i;break}A=A.next}}else if(p.tag===10)$=p.type===n.type?null:p.child;else if(p.tag===18){if($=p.return,$===null)throw Error(r(341));$.lanes|=i,S=$.alternate,S!==null&&(S.lanes|=i),_0($,i,n),$=p.sibling}else $=p.child;if($!==null)$.return=p;else for($=p;$!==null;){if($===n){$=null;break}if(p=$.sibling,p!==null){p.return=$.return,$=p;break}$=$.return}p=$}Dn(e,n,u.children,i),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,Si(n,i),u=lt(u),l=l(u),n.flags|=1,Dn(e,n,l,i),n.child;case 14:return l=n.type,u=_t(l,n.pendingProps),u=_t(l.type,u),s1(e,n,l,u,i);case 15:return a1(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:_t(l,u),Bs(e,n),n.tag=1,Gn(l)?(e=!0,xs(n)):e=!1,Si(n,i),Xu(n,l,u),I0(n,l,u,i),H0(null,n,l,!0,e,i);case 19:return h1(e,n,i);case 22:return l1(e,n,i)}throw Error(r(156,n.tag))};function I1(e,n){return Qo(e,n)}function Df(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,n,i,l){return new Df(e,n,i,l)}function cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ef(e){if(typeof e=="function")return cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ee)return 11;if(e===Ce)return 14}return 2}function kr(e,n){var i=e.alternate;return i===null?(i=dt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ks(e,n,i,l,u,p){var $=2;if(l=e,typeof e=="function")cl(e)&&($=1);else if(typeof e=="string")$=5;else e:switch(e){case B:return Jr(i.children,u,p,n);case Z:$=8,u|=8;break;case X:return e=dt(12,i,n,u|2),e.elementType=X,e.lanes=p,e;case oe:return e=dt(13,i,n,u),e.elementType=oe,e.lanes=p,e;case fe:return e=dt(19,i,n,u),e.elementType=fe,e.lanes=p,e;case Ee:return Zs(i,u,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:$=10;break e;case pe:$=9;break e;case ee:$=11;break e;case Ce:$=14;break e;case De:$=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=dt($,i,n,u),n.elementType=e,n.type=l,n.lanes=p,n}function Jr(e,n,i,l){return e=dt(7,e,l,n),e.lanes=i,e}function Zs(e,n,i,l){return e=dt(22,e,l,n),e.elementType=Ee,e.lanes=i,e.stateNode={isHidden:!1},e}function ul(e,n,i){return e=dt(6,e,null,n),e.lanes=i,e}function dl(e,n,i){return n=dt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Bf(e,n,i,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Na(0),this.expirationTimes=Na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Na(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ml(e,n,i,l,u,p,$,S,A){return e=new Bf(e,n,i,S,A),n===1?(n=1,p===!0&&(n|=8)):n=0,p=dt(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},z0(p),e}function Nf(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function F1(e){if(!e)return hr;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Gn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Gn(i))return fu(e,i,n)}return n}function L1(e,n,i,l,u,p,$,S,A){return e=ml(i,l,!0,e,u,p,$,S,A),e.context=F1(null),i=e.current,l=En(),u=wr(i),p=Zt(l,u),p.callback=n??null,vr(i,p,u),e.current.lanes=u,Ji(e,u,l),Kn(e,l),e}function Ys(e,n,i,l){var u=n.current,p=En(),$=wr(u);return i=F1(i),n.context===null?n.context=i:n.pendingContext=i,n=Zt(p,$),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=vr(u,n,$),e!==null&&(St(e,u,$,p),js(e,u,$)),$}function Qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function O1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function pl(e,n){O1(e,n),(e=e.alternate)&&O1(e,n)}function If(){return null}var H1=typeof reportError=="function"?reportError:function(e){console.error(e)};function fl(e){this._internalRoot=e}Xs.prototype.render=fl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));Ys(e,n,null,null)},Xs.prototype.unmount=fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yr(function(){Ys(null,e,null,null)}),n[Wt]=null}};function Xs(e){this._internalRoot=e}Xs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Sc();e={blockedOn:null,target:e,priority:n};for(var i=0;i<ur.length&&n!==0&&n<ur[i].priority;i++);ur.splice(i,0,e),i===0&&Tc(e)}};function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Js(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function W1(){}function Ff(e,n,i,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var V=Qs($);p.call(V)}}var $=L1(n,l,e,0,null,!1,!1,"",W1);return e._reactRootContainer=$,e[Wt]=$.current,fo(e.nodeType===8?e.parentNode:e),Yr(),$}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var S=l;l=function(){var V=Qs(A);S.call(V)}}var A=ml(e,0,!1,null,null,!1,!1,"",W1);return e._reactRootContainer=A,e[Wt]=A.current,fo(e.nodeType===8?e.parentNode:e),Yr(function(){Ys(n,A,i,l)}),A}function ea(e,n,i,l,u){var p=i._reactRootContainer;if(p){var $=p;if(typeof u=="function"){var S=u;u=function(){var A=Qs($);S.call(A)}}Ys(n,$,e,u)}else $=Ff(i,n,e,u,l);return Qs($)}kc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Xi(n.pendingLanes);i!==0&&(Ia(n,i|1),Kn(n,Je()),(Ue&6)===0&&(Mi=Je()+500,gr()))}break;case 13:Yr(function(){var l=Kt(e,1);if(l!==null){var u=En();St(l,e,1,u)}}),pl(e,1)}},Fa=function(e){if(e.tag===13){var n=Kt(e,134217728);if(n!==null){var i=En();St(n,e,134217728,i)}pl(e,134217728)}},zc=function(e){if(e.tag===13){var n=wr(e),i=Kt(e,n);if(i!==null){var l=En();St(i,e,n,l)}pl(e,n)}},Sc=function(){return Ye},jc=function(e,n){var i=Ye;try{return Ye=e,n()}finally{Ye=i}},It=function(e,n,i){switch(n){case"input":if(yt(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var u=ys(l);if(!u)throw Error(r(90));Rn(l),yt(l,u)}}}break;case"textarea":Oi(e,i);break;case"select":n=i.value,n!=null&&Xn(e,!!i.multiple,n,!1)}},Nr=sl,Uo=Yr;var Lf={usingClientEntryPoint:!1,Events:[yo,vi,ys,Vi,si,sl]},Mo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sr(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||If,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!na.isDisabled&&na.supportsFiber)try{Ge=na.inject(Of),Hn=na}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf,Zn.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hl(n))throw Error(r(200));return Nf(e,n,null,i)},Zn.createRoot=function(e,n){if(!hl(e))throw Error(r(299));var i=!1,l="",u=H1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ml(e,1,!1,null,null,i,!1,l,u),e[Wt]=n.current,fo(e.nodeType===8?e.parentNode:e),new fl(n)},Zn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=sr(n),e=e===null?null:e.stateNode,e},Zn.flushSync=function(e){return Yr(e)},Zn.hydrate=function(e,n,i){if(!Js(n))throw Error(r(200));return ea(null,e,n,!0,i)},Zn.hydrateRoot=function(e,n,i){if(!hl(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,u=!1,p="",$=H1;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onRecoverableError!==void 0&&($=i.onRecoverableError)),n=L1(n,null,e,1,i??null,u,!1,p,$),e[Wt]=n.current,fo(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,u]:n.mutableSourceEagerHydrationData.push(i,u);return new Xs(n)},Zn.render=function(e,n,i){if(!Js(n))throw Error(r(200));return ea(null,e,n,!1,i)},Zn.unmountComponentAtNode=function(e){if(!Js(e))throw Error(r(40));return e._reactRootContainer?(Yr(function(){ea(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},Zn.unstable_batchedUpdates=sl,Zn.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!Js(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return ea(e,n,i,!1,l)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var X1;function Yf(){if(X1)return vl.exports;X1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vl.exports=Zf(),vl.exports}var J1;function Qf(){if(J1)return ta;J1=1;var o=Yf();return ta.createRoot=o.createRoot,ta.hydrateRoot=o.hydrateRoot,ta}var Xf=Qf();const Jf=`---
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
`,ch=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,uh=`---
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
resources:
  - "interactive|sign-chart-explorer.html|Sign Chart Explorer — Quadratic Inequalities|Tabelka znaków — nierówności kwadratowe"
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
resources:
  - "interactive|resources/quadratic_ineq/sign-chart-explorer.html|Sign Chart Method|Metoda tabelki znaków"
---
Wyrażenie wymierne to iloraz dwóch wielomianów, np. (x²−1)/(x+3). Kluczowe umiejętności: skracanie (rozkład na czynniki!), dodawanie/odejmowanie (wspólny mianownik), mnożenie/dzielenie, oraz rozwiązywanie nierówności wymiernych metodą przedziałów.

<!-- example -->
Na przykład: (x²−4)/(x−2). Rozkładasz licznik: x²−4 = (x−2)(x+2). Skracasz (x−2) i dostajesz x+2 (dla x≠2). Nierówność wymierna: (x+1)/(x−3) > 0 → miejsca zerowe: x=−1 (licznik), x=3 (mianownik, wyłączony z dziedziny). Tabelka znaków: (−∞,−1): +, (−1,3): −, (3,+∞): +. Odpowiedź: x ∈ (−∞,−1) ∪ (3,+∞).
`,Kh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,Zh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,Yh=`---
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
`,Qh=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,c2=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,u2=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,Z2=`---
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
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,Y2=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,c4=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,u4=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,Z4=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,Y4=`---
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
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,c3=`---
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
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,u3=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,Z3=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,Y3=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,c5=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,u5=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,Z5=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,Y5=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,c6=`---
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
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,u6=`---
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
  - "$(-\\infty, -1) \\cup (3, +\\infty)$"
  - "$(-1, 3)$"
  - "$[-1, 3]$"
  - "$(-\\infty, -1] \\cup [3, +\\infty)$"
correct: 0
hint: "Metoda rozwiązywania nierówności wymiernych — krok po kroku:\\n\\n① ROZŁÓŻ na czynniki: licznik = (x+1), mianownik = (x−3). Już rozłożone.\\n\\n② ZNAJDŹ MIEJSCA ZEROWE: licznik = 0 → x = −1. Mianownik = 0 → x = 3.\\n\\n③ DZIEDZINA: mianownik ≠ 0, więc x ≠ 3. Punkt x = 3 jest WYŁĄCZONY (kółko puste).\\n\\n④ TABELKA ZNAKÓW — zaznacz −1 i 3 na osi, sprawdź znak w każdym przedziale:\\n• x < −1 (np. x=−2): (−2+1)/(−2−3) = (−1)/(−5) = + ✓\\n• −1 < x < 3 (np. x=0): (0+1)/(0−3) = 1/(−3) = − ✗\\n• x > 3 (np. x=4): (4+1)/(4−3) = 5/1 = + ✓\\n\\n⑤ ODPOWIEDŹ: nierówność > 0 (ostra), więc nie włączamy punktów: x ∈ (−∞, −1) ∪ (3, +∞)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.25
---
Rozwiąż nierówność: $\\dfrac{x+1}{x-3} > 0$
`,v6=`---
options:
  - "$[-2, 0) \\\\cup [4, +\\\\infty)$"
  - "$(-2, 0) \\\\cup (4, +\\\\infty)$"
  - "$(-\\\\infty, -2] \\\\cup (0, 4]$"
  - "$(-\\\\infty, -2) \\\\cup (0, 4)$"
correct: 0
hint: "Krok po kroku:\\n\\n① PRZENIEŚ na jedną stronę: (x²−2x−8)/x ≥ 0.\\n\\n② ROZŁÓŻ LICZNIK: x²−2x−8 = (x−4)(x+2). Szukasz dwóch liczb: iloczyn = −8, suma = −2 → to 4 i −2... nie, to −4 i 2... Δ = 4+32 = 36, x = (2±6)/2 → x=4 lub x=−2. Więc (x−4)(x+2).\\n\\n③ MIANOWNIK: x. Miejsce zerowe: x = 0. Wyłączone z dziedziny (x ≠ 0).\\n\\n④ MIEJSCA ZEROWE LICZNIKA: x = −2, x = 4. Te WŁĄCZAMY (bo ≥ 0, i ułamek = 0 gdy licznik = 0).\\n\\n⑤ TABELKA ZNAKÓW — punkty krytyczne: −2, 0, 4:\\n• x < −2 (np. x=−3): (−7)(−1)/(−3) = 7/(−3) = − ✗\\n• −2 < x < 0 (np. x=−1): (−5)(1)/(−1) = −5/(−1) = + ✓\\n• 0 < x < 4 (np. x=1): (−3)(3)/1 = −9 = − ✗\\n• x > 4 (np. x=5): (1)(7)/5 = 7/5 = + ✓\\n\\n⑥ ODPOWIEDŹ: ≥ 0, więc włączamy −2 i 4 (licznik=0), ale NIE 0 (mianownik=0): x ∈ [−2, 0) ∪ [4, +∞)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 - 2x - 8}{x} \\geq 0$
`,x6=`---
options:
  - "$(2, 5]$"
  - "$[2, 5]$"
  - "$(2, 5)$"
  - "$(-\\\\infty, 2) \\\\cup [5, +\\\\infty)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ: licznik = (x−5), mianownik = (x−2). Już rozłożone.\\n\\n② MIEJSCA ZEROWE: licznik = 0 → x = 5. Mianownik = 0 → x = 2 (WYŁĄCZONY — dzielenie przez 0!).\\n\\n③ CZY WŁĄCZAMY PUNKTY?\\n• x = 5: ułamek = 0/3 = 0, a 0 ≤ 0 ✓ → WŁĄCZAMY (nawias kwadratowy]\\n• x = 2: mianownik = 0 → WYŁĄCZAMY zawsze (nawias okrągły)\\n\\n④ TABELKA ZNAKÓW — punkty krytyczne: 2 i 5:\\n• x < 2 (np. x=0): (0−5)/(0−2) = (−5)/(−2) = +2.5 → dodatni ✗\\n• 2 < x < 5 (np. x=3): (3−5)/(3−2) = (−2)/(1) = −2 → ujemny ✓\\n• x > 5 (np. x=6): (6−5)/(6−2) = 1/4 → dodatni ✗\\n\\n⑤ ODPOWIEDŹ: ujemny lub zero w przedziale (2, 5]. Nawias okrągły przy 2 (mianownik=0), kwadratowy przy 5 (licznik=0, ułamek=0 ✓)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
---
Rozwiąż nierówność: $\\dfrac{x-5}{x-2} \\leq 0$
`,$6=`---
options:
  - "$(-\\\\infty, -3] \\\\cup (-1, 2]$"
  - "$[-3, -1) \\\\cup [2, +\\\\infty)$"
  - "$(-3, -1) \\\\cup (2, +\\\\infty)$"
  - "$(-\\\\infty, -3) \\\\cup (-1, 2)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ LICZNIK NA CZYNNIKI:\\nx² + x − 6 = ? Szukamy dwóch liczb: iloczyn = −6, suma = 1.\\nTo 3 i −2: x² + x − 6 = (x+3)(x−2). Sprawdź: (x+3)(x−2) = x² −2x +3x −6 = x² + x − 6 ✓\\n\\n② MIANOWNIK: (x+1). Miejsce zerowe: x = −1 (WYŁĄCZONY z dziedziny).\\n\\n③ WSZYSTKIE PUNKTY KRYTYCZNE: x = −3 (licznik), x = −1 (mianownik), x = 2 (licznik).\\n\\n④ CZY WŁĄCZAMY?\\n• x = −3: ułamek = 0/(−3+1) = 0 ≤ 0 ✓ → WŁĄCZAMY [-3\\n• x = −1: mianownik = 0 → WYŁĄCZAMY )\\n• x = 2: ułamek = 0/(2+1) = 0 ≤ 0 ✓ → WŁĄCZAMY 2]\\n\\n⑤ TABELKA ZNAKÓW — 4 przedziały:\\n• x < −3 (np. x=−4): (−1)(−6)/(−3) = 6/(−3) = −2 → ujemny ✓\\n• −3 < x < −1 (np. x=−2): (1)(−4)/(−1) = −4/(−1) = +4 → dodatni ✗\\n• −1 < x < 2 (np. x=0): (3)(−2)/(1) = −6 → ujemny ✓\\n• x > 2 (np. x=3): (6)(1)/(4) = 1.5 → dodatni ✗\\n\\n⑥ ODPOWIEDŹ: ujemny lub zero → x ∈ (−∞, −3] ∪ (−1, 2].\\n\\nWskazówka systematyczna: przy nierównościach wymiernych ZAWSZE rób tabelkę znaków. Nigdy nie mnóż obu stron przez mianownik (bo nie wiesz, czy jest dodatni czy ujemny!)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 + x - 6}{x + 1} \\leq 0$
`,b6=`---
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
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,w6=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,_6=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,k6=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,z6=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,S6=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,j6=`---
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
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,q6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,T6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,A6=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,M6=`---
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
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,P6=`---
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
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,C6=`---
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
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,R6=`---
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
Które z poniższych jest poprawnym prawem De Morgana?`,D6=`---
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
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,E6=`---
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
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,B6=`---
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
W trójkącie a=5, b=7, C=60°. Wartość c² =`,N6=`---
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
Twierdzenie cosinusów brzmi:`,I6=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,F6=`---
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
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,L6=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,O6=`---
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
Wzór na objętość kuli o promieniu $r$:`,H6=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,W6=`---
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
Dominanta (moda) zbioru danych to:`,G6=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,U6=`---
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
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,V6=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,K6=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,Z6=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,Y6=`---
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
Wartość $\\sin 30°$ wynosi:`,Q6=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,X6=`---
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
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,J6=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,eg=`---
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
Rozwiąż równanie: $\\tan x = 1$`,ng=`---
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
sin(2α) jest równe:`,tg=`---
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
Wzór na $\\sin 2\\alpha$:`,rg=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,ig=`---
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
Wartość sin(120°) jest równa:`,og=`---
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
Wartość $\\cos 30°$ wynosi:`,sg=`---
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
Wartość $\\sin 45°$ wynosi:`,ag=`---
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
Długość wektora v = [3, 4] wynosi:`,lg=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,cg=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,ug=`---
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
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,dg=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,mg=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,pg=`---
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
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,fg=`---
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
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,hg=`---
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
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,gg=`---
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
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,yg=`---
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
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`;function Zd(o){const t=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:o.trim()};const r=t[1],s=t[2].trim(),a={},c=r.split(/\r?\n/);let d=0;for(;d<c.length;){const h=c[d];if(h.startsWith("  ")){d++;continue}const f=h.match(/^(\w+):\s*(.*)/);if(!f){d++;continue}const v=f[1];let b=f[2].trim();if(b===""||b===null){const _=c[d+1]??"";if(_.startsWith("  - ")){const z=[];for(d++;d<c.length&&c[d].startsWith("  - ");){let k=c[d].replace(/^  - /,"").trim();k=k.replace(/^["']|["']$/g,""),z.push(k),d++}a[v]=z.length>0?z:null}else if(_.match(/^  \w+:/)){const z={};for(d++;d<c.length&&c[d].match(/^  \w+:/);){const k=c[d].match(/^  (\w+):\s*(.*)/);if(k){const T=k[1];let M=k[2].trim().replace(/^["']|["']$/g,"");z[T]=!isNaN(M)&&M!==""?Number(M):M}d++}a[v]=z}else a[v]=null,d++}else b=b.replace(/^["']|["']$/g,""),!isNaN(b)&&b!==""?a[v]=Number(b):b==="true"?a[v]=!0:b==="false"?a[v]=!1:a[v]=b,d++}return{meta:a,body:s}}function Yd(o,t){return Object.entries(o).map(([r,s])=>{var h;const a=(h=r.match(t))==null?void 0:h[1],{meta:c,body:d}=Zd(s);return{id:a,body:d||"",label:c.label??a,labelPl:c.labelPl??c.label??a,scope:c.scope??"default",section:c.section??"default",level:c.level??1,x:c.x??0,y:c.y??0,resources:Array.isArray(c.resources)?c.resources.map(f=>{if(typeof f!="string")return null;const[v,b,_,z]=f.split("|").map(T=>T.trim()),k=b&&!b.includes("/")&&!b.startsWith("http")?`resources/${a}/${b}`:b??"";return{type:v??"article",url:k,titleEn:_??"",titlePl:z??_??""}}).filter(Boolean):[]}})}function Qd(o,t){var s;const r={};for(const[a,c]of Object.entries(o)){const d=(s=a.match(t))==null?void 0:s[1];if(!d)continue;const{meta:h,body:f}=Zd(c);r[d]||(r[d]=[]),r[d].push({q:f,options:h.options??[],correct:h.correct??0,hint:h.hint??"",tests:h.tests&&typeof h.tests=="object"&&Object.keys(h.tests).length>0?h.tests:{[d]:1}})}return r}function Xd(o,t,r=[]){const s=o[t];if(!s||s.length===0||r.includes(-1))return null;const a=s.map((d,h)=>({q:d,i:h})).filter(({i:d})=>!r.includes(d));if(a.length===0)return null;const c=a[Math.floor(Math.random()*a.length)];return{...c.q,index:c.i}}const vg=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],xg={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},$g={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},bg={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},wg={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},_g=Object.assign({"./nodes/abs_value/node.md":Jf,"./nodes/analytic_geom/node.md":eh,"./nodes/area_perimeter/node.md":nh,"./nodes/arith_geom/node.md":th,"./nodes/bernoulli/node.md":rh,"./nodes/binom_theorem/node.md":ih,"./nodes/circle_eq/node.md":oh,"./nodes/combinations/node.md":sh,"./nodes/complex/node.md":ah,"./nodes/cond_prob/node.md":lh,"./nodes/conic_sections/node.md":ch,"./nodes/counting/node.md":uh,"./nodes/data_basics/node.md":dh,"./nodes/deriv_apps/node.md":mh,"./nodes/derivative/node.md":ph,"./nodes/distributions/node.md":fh,"./nodes/factoring/node.md":hh,"./nodes/fn_compositions/node.md":gh,"./nodes/fn_concept/node.md":yh,"./nodes/fn_exp/node.md":vh,"./nodes/fn_linear/node.md":xh,"./nodes/fn_log/node.md":$h,"./nodes/fn_poly/node.md":bh,"./nodes/fn_quadratic/node.md":wh,"./nodes/fn_trig/node.md":_h,"./nodes/fractions/node.md":kh,"./nodes/geo_series/node.md":zh,"./nodes/integers/node.md":Sh,"./nodes/integral/node.md":jh,"./nodes/limits/node.md":qh,"./nodes/linear_eq/node.md":Th,"./nodes/linear_ineq/node.md":Ah,"./nodes/linear_sys/node.md":Mh,"./nodes/log_eq/node.md":Ph,"./nodes/log_exp/node.md":Ch,"./nodes/logic_basics/node.md":Rh,"./nodes/optimization_lp/node.md":Dh,"./nodes/param_eq/node.md":Eh,"./nodes/permutations/node.md":Bh,"./nodes/planimetria_lp/node.md":Nh,"./nodes/poly_roots/node.md":Ih,"./nodes/polynomials/node.md":Fh,"./nodes/powers/node.md":Lh,"./nodes/probability/node.md":Oh,"./nodes/proof/node.md":Hh,"./nodes/pythagoras/node.md":Wh,"./nodes/quadratic_eq/node.md":Gh,"./nodes/quadratic_ineq/node.md":Uh,"./nodes/rational_expr/node.md":Vh,"./nodes/seq_limits/node.md":Kh,"./nodes/sequences/node.md":Zh,"./nodes/sets/node.md":Yh,"./nodes/sin_cos_law/node.md":Qh,"./nodes/solid_geom/node.md":Xh,"./nodes/stat_lp/node.md":Jh,"./nodes/thales/node.md":e2,"./nodes/trig_basic/node.md":n2,"./nodes/trig_eq/node.md":t2,"./nodes/trig_formulas/node.md":r2,"./nodes/trig_lp/node.md":i2,"./nodes/vectors/node.md":o2,"./nodes/vieta/node.md":s2}),kg=Yd(_g,/\.\/nodes\/([^/]+)\/node\.md$/),zg=Object.assign({"./nodes/abs_value/questions/01.md":a2,"./nodes/abs_value/questions/02.md":l2,"./nodes/abs_value/questions/03.md":c2,"./nodes/analytic_geom/questions/01.md":u2,"./nodes/analytic_geom/questions/02.md":d2,"./nodes/analytic_geom/questions/03.md":m2,"./nodes/area_perimeter/questions/01.md":p2,"./nodes/area_perimeter/questions/02.md":f2,"./nodes/area_perimeter/questions/03.md":h2,"./nodes/arith_geom/questions/01.md":g2,"./nodes/arith_geom/questions/02.md":y2,"./nodes/arith_geom/questions/03.md":v2,"./nodes/bernoulli/questions/01.md":x2,"./nodes/bernoulli/questions/02.md":$2,"./nodes/bernoulli/questions/03.md":b2,"./nodes/bernoulli/questions/04.md":w2,"./nodes/bernoulli/questions/05.md":_2,"./nodes/bernoulli/questions/06.md":k2,"./nodes/bernoulli/questions/07.md":z2,"./nodes/bernoulli/questions/08.md":S2,"./nodes/binom_theorem/questions/01.md":j2,"./nodes/binom_theorem/questions/02.md":q2,"./nodes/binom_theorem/questions/03.md":T2,"./nodes/binom_theorem/questions/04.md":A2,"./nodes/binom_theorem/questions/05.md":M2,"./nodes/binom_theorem/questions/06.md":P2,"./nodes/binom_theorem/questions/07.md":C2,"./nodes/binom_theorem/questions/08.md":R2,"./nodes/circle_eq/questions/01.md":D2,"./nodes/circle_eq/questions/02.md":E2,"./nodes/circle_eq/questions/03.md":B2,"./nodes/combinations/questions/01.md":N2,"./nodes/combinations/questions/02.md":I2,"./nodes/combinations/questions/03.md":F2,"./nodes/combinations/questions/04.md":L2,"./nodes/combinations/questions/05.md":O2,"./nodes/combinations/questions/06.md":H2,"./nodes/combinations/questions/07.md":W2,"./nodes/combinations/questions/08.md":G2,"./nodes/complex/questions/01.md":U2,"./nodes/complex/questions/02.md":V2,"./nodes/complex/questions/03.md":K2,"./nodes/cond_prob/questions/01.md":Z2,"./nodes/cond_prob/questions/02.md":Y2,"./nodes/cond_prob/questions/03.md":Q2,"./nodes/cond_prob/questions/04.md":X2,"./nodes/cond_prob/questions/05.md":J2,"./nodes/cond_prob/questions/06.md":e4,"./nodes/cond_prob/questions/07.md":n4,"./nodes/cond_prob/questions/08.md":t4,"./nodes/cond_prob/questions/09.md":r4,"./nodes/cond_prob/questions/10.md":i4,"./nodes/conic_sections/questions/01.md":o4,"./nodes/conic_sections/questions/02.md":s4,"./nodes/conic_sections/questions/03.md":a4,"./nodes/counting/questions/01.md":l4,"./nodes/counting/questions/02.md":c4,"./nodes/counting/questions/03.md":u4,"./nodes/counting/questions/04.md":d4,"./nodes/counting/questions/05.md":m4,"./nodes/counting/questions/06.md":p4,"./nodes/counting/questions/07.md":f4,"./nodes/counting/questions/08.md":h4,"./nodes/counting/questions/09.md":g4,"./nodes/counting/questions/10.md":y4,"./nodes/data_basics/questions/01.md":v4,"./nodes/data_basics/questions/02.md":x4,"./nodes/data_basics/questions/03.md":$4,"./nodes/deriv_apps/questions/01.md":b4,"./nodes/deriv_apps/questions/02.md":w4,"./nodes/deriv_apps/questions/03.md":_4,"./nodes/derivative/questions/01.md":k4,"./nodes/derivative/questions/02.md":z4,"./nodes/derivative/questions/03.md":S4,"./nodes/distributions/questions/01.md":j4,"./nodes/distributions/questions/02.md":q4,"./nodes/distributions/questions/03.md":T4,"./nodes/factoring/questions/01.md":A4,"./nodes/factoring/questions/02.md":M4,"./nodes/factoring/questions/03.md":P4,"./nodes/factoring/questions/04.md":C4,"./nodes/factoring/questions/05.md":R4,"./nodes/factoring/questions/06.md":D4,"./nodes/factoring/questions/07.md":E4,"./nodes/factoring/questions/08.md":B4,"./nodes/factoring/questions/09.md":N4,"./nodes/factoring/questions/10.md":I4,"./nodes/fn_compositions/questions/01.md":F4,"./nodes/fn_compositions/questions/02.md":L4,"./nodes/fn_compositions/questions/03.md":O4,"./nodes/fn_concept/questions/01.md":H4,"./nodes/fn_concept/questions/02.md":W4,"./nodes/fn_concept/questions/03.md":G4,"./nodes/fn_exp/questions/01.md":U4,"./nodes/fn_exp/questions/02.md":V4,"./nodes/fn_exp/questions/03.md":K4,"./nodes/fn_linear/questions/01.md":Z4,"./nodes/fn_linear/questions/02.md":Y4,"./nodes/fn_linear/questions/03.md":Q4,"./nodes/fn_log/questions/01.md":X4,"./nodes/fn_log/questions/02.md":J4,"./nodes/fn_log/questions/03.md":e3,"./nodes/fn_poly/questions/01.md":n3,"./nodes/fn_poly/questions/02.md":t3,"./nodes/fn_poly/questions/03.md":r3,"./nodes/fn_quadratic/questions/01.md":i3,"./nodes/fn_quadratic/questions/02.md":o3,"./nodes/fn_quadratic/questions/03.md":s3,"./nodes/fn_quadratic/questions/04.md":a3,"./nodes/fn_quadratic/questions/05.md":l3,"./nodes/fn_quadratic/questions/06.md":c3,"./nodes/fn_quadratic/questions/07.md":u3,"./nodes/fn_quadratic/questions/08.md":d3,"./nodes/fn_quadratic/questions/09.md":m3,"./nodes/fn_quadratic/questions/10.md":p3,"./nodes/fn_trig/questions/01.md":f3,"./nodes/fn_trig/questions/02.md":h3,"./nodes/fn_trig/questions/03.md":g3,"./nodes/fractions/questions/01.md":y3,"./nodes/fractions/questions/02.md":v3,"./nodes/fractions/questions/03.md":x3,"./nodes/geo_series/questions/01.md":$3,"./nodes/geo_series/questions/02.md":b3,"./nodes/geo_series/questions/03.md":w3,"./nodes/integers/questions/01.md":_3,"./nodes/integers/questions/02.md":k3,"./nodes/integers/questions/03.md":z3,"./nodes/integral/questions/01.md":S3,"./nodes/integral/questions/02.md":j3,"./nodes/integral/questions/03.md":q3,"./nodes/limits/questions/01.md":T3,"./nodes/limits/questions/02.md":A3,"./nodes/limits/questions/03.md":M3,"./nodes/linear_eq/questions/01.md":P3,"./nodes/linear_eq/questions/02.md":C3,"./nodes/linear_eq/questions/03.md":R3,"./nodes/linear_ineq/questions/01.md":D3,"./nodes/linear_ineq/questions/02.md":E3,"./nodes/linear_ineq/questions/03.md":B3,"./nodes/linear_sys/questions/01.md":N3,"./nodes/linear_sys/questions/02.md":I3,"./nodes/linear_sys/questions/03.md":F3,"./nodes/log_eq/questions/01.md":L3,"./nodes/log_eq/questions/02.md":O3,"./nodes/log_eq/questions/03.md":H3,"./nodes/log_exp/questions/01.md":W3,"./nodes/log_exp/questions/02.md":G3,"./nodes/log_exp/questions/03.md":U3,"./nodes/logic_basics/questions/01.md":V3,"./nodes/logic_basics/questions/02.md":K3,"./nodes/logic_basics/questions/03.md":Z3,"./nodes/optimization_lp/questions/01.md":Y3,"./nodes/optimization_lp/questions/02.md":Q3,"./nodes/optimization_lp/questions/03.md":X3,"./nodes/optimization_lp/questions/04.md":J3,"./nodes/optimization_lp/questions/05.md":e5,"./nodes/optimization_lp/questions/06.md":n5,"./nodes/optimization_lp/questions/07.md":t5,"./nodes/optimization_lp/questions/08.md":r5,"./nodes/param_eq/questions/01.md":i5,"./nodes/param_eq/questions/02.md":o5,"./nodes/param_eq/questions/03.md":s5,"./nodes/permutations/questions/01.md":a5,"./nodes/permutations/questions/02.md":l5,"./nodes/permutations/questions/03.md":c5,"./nodes/permutations/questions/04.md":u5,"./nodes/permutations/questions/05.md":d5,"./nodes/permutations/questions/06.md":m5,"./nodes/permutations/questions/07.md":p5,"./nodes/permutations/questions/08.md":f5,"./nodes/planimetria_lp/questions/01.md":h5,"./nodes/planimetria_lp/questions/02.md":g5,"./nodes/planimetria_lp/questions/03.md":y5,"./nodes/poly_roots/questions/01.md":v5,"./nodes/poly_roots/questions/02.md":x5,"./nodes/poly_roots/questions/03.md":$5,"./nodes/polynomials/questions/01.md":b5,"./nodes/polynomials/questions/02.md":w5,"./nodes/polynomials/questions/03.md":_5,"./nodes/polynomials/questions/04.md":k5,"./nodes/polynomials/questions/05.md":z5,"./nodes/polynomials/questions/06.md":S5,"./nodes/polynomials/questions/07.md":j5,"./nodes/polynomials/questions/08.md":q5,"./nodes/polynomials/questions/09.md":T5,"./nodes/polynomials/questions/10.md":A5,"./nodes/powers/questions/01.md":M5,"./nodes/powers/questions/02.md":P5,"./nodes/powers/questions/03.md":C5,"./nodes/probability/questions/01.md":R5,"./nodes/probability/questions/02.md":D5,"./nodes/probability/questions/03.md":E5,"./nodes/probability/questions/04.md":B5,"./nodes/probability/questions/05.md":N5,"./nodes/probability/questions/06.md":I5,"./nodes/probability/questions/07.md":F5,"./nodes/probability/questions/08.md":L5,"./nodes/probability/questions/09.md":O5,"./nodes/probability/questions/10.md":H5,"./nodes/proof/questions/01.md":W5,"./nodes/proof/questions/02.md":G5,"./nodes/proof/questions/03.md":U5,"./nodes/pythagoras/questions/01.md":V5,"./nodes/pythagoras/questions/02.md":K5,"./nodes/pythagoras/questions/03.md":Z5,"./nodes/quadratic_eq/questions/01.md":Y5,"./nodes/quadratic_eq/questions/02.md":Q5,"./nodes/quadratic_eq/questions/03.md":X5,"./nodes/quadratic_eq/questions/04.md":J5,"./nodes/quadratic_eq/questions/05.md":e6,"./nodes/quadratic_eq/questions/06.md":n6,"./nodes/quadratic_eq/questions/07.md":t6,"./nodes/quadratic_eq/questions/08.md":r6,"./nodes/quadratic_eq/questions/09.md":i6,"./nodes/quadratic_eq/questions/10.md":o6,"./nodes/quadratic_ineq/questions/01.md":s6,"./nodes/quadratic_ineq/questions/02.md":a6,"./nodes/quadratic_ineq/questions/03.md":l6,"./nodes/quadratic_ineq/questions/04.md":c6,"./nodes/quadratic_ineq/questions/05.md":u6,"./nodes/quadratic_ineq/questions/06.md":d6,"./nodes/quadratic_ineq/questions/07.md":m6,"./nodes/quadratic_ineq/questions/08.md":p6,"./nodes/rational_expr/questions/01.md":f6,"./nodes/rational_expr/questions/02.md":h6,"./nodes/rational_expr/questions/03.md":g6,"./nodes/rational_expr/questions/04.md":y6,"./nodes/rational_expr/questions/05.md":v6,"./nodes/rational_expr/questions/06.md":x6,"./nodes/rational_expr/questions/07.md":$6,"./nodes/seq_limits/questions/01.md":b6,"./nodes/seq_limits/questions/02.md":w6,"./nodes/seq_limits/questions/03.md":_6,"./nodes/sequences/questions/01.md":k6,"./nodes/sequences/questions/02.md":z6,"./nodes/sequences/questions/03.md":S6,"./nodes/sets/questions/01.md":j6,"./nodes/sets/questions/02.md":q6,"./nodes/sets/questions/03.md":T6,"./nodes/sets/questions/04.md":A6,"./nodes/sets/questions/05.md":M6,"./nodes/sets/questions/06.md":P6,"./nodes/sets/questions/07.md":C6,"./nodes/sets/questions/08.md":R6,"./nodes/sets/questions/09.md":D6,"./nodes/sets/questions/10.md":E6,"./nodes/sin_cos_law/questions/01.md":B6,"./nodes/sin_cos_law/questions/02.md":N6,"./nodes/sin_cos_law/questions/03.md":I6,"./nodes/solid_geom/questions/01.md":F6,"./nodes/solid_geom/questions/02.md":L6,"./nodes/solid_geom/questions/03.md":O6,"./nodes/stat_lp/questions/01.md":H6,"./nodes/stat_lp/questions/02.md":W6,"./nodes/stat_lp/questions/03.md":G6,"./nodes/thales/questions/01.md":U6,"./nodes/thales/questions/02.md":V6,"./nodes/thales/questions/03.md":K6,"./nodes/trig_basic/questions/01.md":Z6,"./nodes/trig_basic/questions/02.md":Y6,"./nodes/trig_basic/questions/03.md":Q6,"./nodes/trig_eq/questions/01.md":X6,"./nodes/trig_eq/questions/02.md":J6,"./nodes/trig_eq/questions/03.md":eg,"./nodes/trig_formulas/questions/01.md":ng,"./nodes/trig_formulas/questions/02.md":tg,"./nodes/trig_formulas/questions/03.md":rg,"./nodes/trig_lp/questions/01.md":ig,"./nodes/trig_lp/questions/02.md":og,"./nodes/trig_lp/questions/03.md":sg,"./nodes/vectors/questions/01.md":ag,"./nodes/vectors/questions/02.md":lg,"./nodes/vectors/questions/03.md":cg,"./nodes/vieta/questions/01.md":ug,"./nodes/vieta/questions/02.md":dg,"./nodes/vieta/questions/03.md":mg,"./nodes/vieta/questions/04.md":pg,"./nodes/vieta/questions/05.md":fg,"./nodes/vieta/questions/06.md":hg,"./nodes/vieta/questions/07.md":gg,"./nodes/vieta/questions/08.md":yg}),Sg=Qd(zg,/\.\/nodes\/([^/]+)\/questions\//),jg=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:wg,QUESTION_BANK:Sg,RAW_EDGES:vg,RAW_NODES:kg,SCOPE_COLORS:$g,SCOPE_LABELS:bg,SECTIONS:xg},Symbol.toStringTag,{value:"Module"})),qg=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,Tg=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,Ag=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,Mg=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Pg=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,Cg=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,Rg=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Dg=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Eg=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,Bg=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,Ng=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,Ig=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,Fg=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,Lg=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,Og=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,Hg=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Wg=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Gg=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Ug=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,Vg=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,Kg=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Zg=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Yg=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,Qg=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,Xg=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,Jg=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,ey=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,ny=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,ty=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,ry=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,iy=`---
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
`,oy=`---
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
`,sy=`---
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
`,ay=`---
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
`,ly=`---
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
`,cy=`---
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
`,uy=`---
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
`,dy=`---
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
`,my=`---
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
`,py=`---
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

`,fy=`---
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

`,hy=`---
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

`,gy=`---
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
`,yy=`---
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
`,vy=`---
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
`,xy=`---
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
`,$y=`---
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
`,by=`---
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
`,wy=`---
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

`,_y=`---
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

`,ky=`---
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

`,zy=`---
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

`,Sy=`---
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

`,jy=`---
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

`,qy=`---
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
`,Ty=`---
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
`,Ay=`---
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
`,My=`---
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
`,Py=`---
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
`,Cy=`---
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
`,Ry=`---
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
`,Dy=`---
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
`,Ey=`---
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
`,By=`---
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
`,Ny=`---
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
`,Iy=`---
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
`,Fy=`---
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
`,Ly=`---
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
`,Oy=`---
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
`,Hy=`---
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
`,Wy=`---
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
`,Gy=`---
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
`,Uy=`---
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
`,Vy=`---
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
`,Ky=`---
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
`,Zy=`---
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

`,Yy=`---
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

`,Qy=`---
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

`,Xy=`---
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

`,Jy=`---
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

`,e7=`---
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

`,r7=`---
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

`,i7=`---
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
`,o7=`---
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
`,s7=`---
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
`,a7=`---
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
`,l7=`---
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

`,d7=`---
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

`,m7=`---
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

`,h7=`---
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

`,g7=`---
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
`,x7=`---
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
`,$7=`---
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
`,w7=`---
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
`,_7=`---
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
`,k7=`---
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
`,z7=`---
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
`,S7=`---
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

`,j7=`---
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

`,q7=`---
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
`,T7=`---
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
`,M7=`---
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

`,P7=`---
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

`,R7=`---
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

`,I7=`---
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

`,F7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],L7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},O7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},H7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},W7={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},G7=Object.assign({"./nodes/binary_ops/node.md":qg,"./nodes/cosets/node.md":Tg,"./nodes/cyclic_groups/node.md":Ag,"./nodes/direct_sums/node.md":Mg,"./nodes/field_extensions/node.md":Pg,"./nodes/fields_intro/node.md":Cg,"./nodes/finitely_generated/node.md":Rg,"./nodes/free_modules/node.md":Dg,"./nodes/group_actions/node.md":Eg,"./nodes/group_homomorphisms/node.md":Bg,"./nodes/groups_intro/node.md":Ng,"./nodes/ideals/node.md":Ig,"./nodes/induction/node.md":Fg,"./nodes/integral_domains/node.md":Lg,"./nodes/iso_theorem/node.md":Og,"./nodes/jordan_normal_form/node.md":Hg,"./nodes/module_homs/node.md":Wg,"./nodes/modules_intro/node.md":Gg,"./nodes/normal_subgroups/node.md":Ug,"./nodes/poly_rings/node.md":Vg,"./nodes/primary_decomp/node.md":Kg,"./nodes/rational_canonical/node.md":Zg,"./nodes/relations/node.md":Yg,"./nodes/ring_homomorphisms/node.md":Qg,"./nodes/rings_intro/node.md":Xg,"./nodes/sets_functions/node.md":Jg,"./nodes/subgroups/node.md":ey,"./nodes/submodules/node.md":ny,"./nodes/sylow/node.md":ty,"./nodes/torsion_modules/node.md":ry}),U7=Yd(G7,/\.\/nodes\/([^/]+)\/node\.md$/),V7=Object.assign({"./nodes/binary_ops/questions/01.md":iy,"./nodes/binary_ops/questions/02.md":oy,"./nodes/binary_ops/questions/03.md":sy,"./nodes/cosets/questions/01.md":ay,"./nodes/cosets/questions/02.md":ly,"./nodes/cosets/questions/03.md":cy,"./nodes/cyclic_groups/questions/01.md":uy,"./nodes/cyclic_groups/questions/02.md":dy,"./nodes/cyclic_groups/questions/03.md":my,"./nodes/direct_sums/questions/01.md":py,"./nodes/direct_sums/questions/02.md":fy,"./nodes/direct_sums/questions/03.md":hy,"./nodes/field_extensions/questions/01.md":gy,"./nodes/field_extensions/questions/02.md":yy,"./nodes/field_extensions/questions/03.md":vy,"./nodes/fields_intro/questions/01.md":xy,"./nodes/fields_intro/questions/02.md":$y,"./nodes/fields_intro/questions/03.md":by,"./nodes/finitely_generated/questions/01.md":wy,"./nodes/finitely_generated/questions/02.md":_y,"./nodes/finitely_generated/questions/03.md":ky,"./nodes/free_modules/questions/01.md":zy,"./nodes/free_modules/questions/02.md":Sy,"./nodes/free_modules/questions/03.md":jy,"./nodes/group_actions/questions/01.md":qy,"./nodes/group_actions/questions/02.md":Ty,"./nodes/group_actions/questions/03.md":Ay,"./nodes/group_homomorphisms/questions/01.md":My,"./nodes/group_homomorphisms/questions/02.md":Py,"./nodes/group_homomorphisms/questions/03.md":Cy,"./nodes/groups_intro/questions/01.md":Ry,"./nodes/groups_intro/questions/02.md":Dy,"./nodes/groups_intro/questions/03.md":Ey,"./nodes/ideals/questions/01.md":By,"./nodes/ideals/questions/02.md":Ny,"./nodes/ideals/questions/03.md":Iy,"./nodes/induction/questions/01.md":Fy,"./nodes/induction/questions/02.md":Ly,"./nodes/induction/questions/03.md":Oy,"./nodes/integral_domains/questions/01.md":Hy,"./nodes/integral_domains/questions/02.md":Wy,"./nodes/integral_domains/questions/03.md":Gy,"./nodes/iso_theorem/questions/01.md":Uy,"./nodes/iso_theorem/questions/02.md":Vy,"./nodes/iso_theorem/questions/03.md":Ky,"./nodes/jordan_normal_form/questions/01.md":Zy,"./nodes/jordan_normal_form/questions/02.md":Yy,"./nodes/jordan_normal_form/questions/03.md":Qy,"./nodes/module_homs/questions/01.md":Xy,"./nodes/module_homs/questions/02.md":Jy,"./nodes/module_homs/questions/03.md":e7,"./nodes/modules_intro/questions/01.md":n7,"./nodes/modules_intro/questions/02.md":t7,"./nodes/modules_intro/questions/03.md":r7,"./nodes/normal_subgroups/questions/01.md":i7,"./nodes/normal_subgroups/questions/02.md":o7,"./nodes/normal_subgroups/questions/03.md":s7,"./nodes/poly_rings/questions/01.md":a7,"./nodes/poly_rings/questions/02.md":l7,"./nodes/poly_rings/questions/03.md":c7,"./nodes/primary_decomp/questions/01.md":u7,"./nodes/primary_decomp/questions/02.md":d7,"./nodes/primary_decomp/questions/03.md":m7,"./nodes/rational_canonical/questions/01.md":p7,"./nodes/rational_canonical/questions/02.md":f7,"./nodes/rational_canonical/questions/03.md":h7,"./nodes/relations/questions/01.md":g7,"./nodes/relations/questions/02.md":y7,"./nodes/relations/questions/03.md":v7,"./nodes/ring_homomorphisms/questions/01.md":x7,"./nodes/ring_homomorphisms/questions/02.md":$7,"./nodes/ring_homomorphisms/questions/03.md":b7,"./nodes/rings_intro/questions/01.md":w7,"./nodes/rings_intro/questions/02.md":_7,"./nodes/rings_intro/questions/03.md":k7,"./nodes/sets_functions/questions/01.md":z7,"./nodes/sets_functions/questions/02.md":S7,"./nodes/sets_functions/questions/03.md":j7,"./nodes/subgroups/questions/01.md":q7,"./nodes/subgroups/questions/02.md":T7,"./nodes/subgroups/questions/03.md":A7,"./nodes/submodules/questions/01.md":M7,"./nodes/submodules/questions/02.md":P7,"./nodes/submodules/questions/03.md":C7,"./nodes/sylow/questions/01.md":R7,"./nodes/sylow/questions/02.md":D7,"./nodes/sylow/questions/03.md":E7,"./nodes/torsion_modules/questions/01.md":B7,"./nodes/torsion_modules/questions/02.md":N7,"./nodes/torsion_modules/questions/03.md":I7}),K7=Qd(V7,/\.\/nodes\/([^/]+)\/questions\//),Z7=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:W7,QUESTION_BANK:K7,RAW_EDGES:F7,RAW_NODES:U7,SCOPE_COLORS:O7,SCOPE_LABELS:H7,SECTIONS:L7},Symbol.toStringTag,{value:"Module"})),Y7={math_pl:jg,abstract_algebra:Z7},Q7="math_pl",Jd="wizmat_v1_";function X7(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function J7(o,t){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function mt(o,t){const r=Jd+o,[s,a]=H.useState(()=>{try{const d=localStorage.getItem(r);return d===null?t:J7(d,t)}catch{return t}});H.useEffect(()=>{try{localStorage.setItem(r,X7(s))}catch{}},[r,s]);const c=H.useCallback(d=>{a(h=>typeof d=="function"?d(h):d)},[]);return[s,c]}function ev(){try{Object.keys(localStorage).filter(o=>o.startsWith(Jd)).forEach(o=>localStorage.removeItem(o))}catch{}}const Xl={midnight:{name:"Midnight",bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",edgeDefault:"#334766",edgeHighlighted:"#4a9eff",edgeDimmed:"#151b26"},highContrast:{name:"High Contrast",bg:"#08090d",surface:"#111318",surfaceHi:"#111318ee",border:"#2e3a50",borderSubtle:"#1c2436",textPrimary:"#ffffff",textBody:"#dce4ef",textMuted:"#a3b5cc",textDim:"#8899b3",textFaint:"#556a85",edgeDefault:"#3d5577",edgeHighlighted:"#5ab0ff",edgeDimmed:"#0d1118"},warm:{name:"Warm",bg:"#131110",surface:"#1c1916",surfaceHi:"#1c1916ee",border:"#33291f",borderSubtle:"#28211a",textPrimary:"#f2ede6",textBody:"#d4cabb",textMuted:"#a89d8e",textDim:"#8a7e6f",textFaint:"#5c5347",edgeDefault:"#4a3f32",edgeHighlighted:"#e8a84c",edgeDimmed:"#1a1614"},bright:{name:"Bright",bg:"#f7f7f2",surface:"#ffffff",surfaceHi:"#ffffffee",border:"#e0ddd5",borderSubtle:"#ebe8e2",textPrimary:"#1a1a1a",textBody:"#3a3a3a",textMuted:"#6b6b6b",textDim:"#8a8a8a",textFaint:"#b5b5b5",edgeDefault:"#c5c0b6",edgeHighlighted:"#58cc02",edgeDimmed:"#edebe6"}},I={...Xl.midnight,known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",frontierHi:"#f1c40f"};function ed(o){const t=Xl[o];t&&Object.assign(I,t)}const Qe="'JetBrains Mono','SF Mono','Fira Code',monospace",Ci=(o,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${t}`:`1px solid ${I.border}`,background:o?`${t}22`:"transparent",color:o?t:I.textDim,minHeight:32}),Co=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44}),nv={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie, aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. Algorytm dobierze najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). Algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Zbadamy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Trafność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Trafność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do sprawdzenia)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niesklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, a połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź, co umiesz — algorytm dobierze najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Matura coraz bliżej — co jeszcze powtórzyć?",en:"Find your gaps in mathematics"},heroSub:{pl:"Odpowiedz na kilkanaście pytań. Pokażemy, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",en:"Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations."},heroStart:{pl:"Sprawdź się",en:"Start assessment"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki przegląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizProcessing:{pl:"Analizuję wyniki…",en:"Analyzing results…"},quizExitConfirm:{pl:"Na pewno chcesz przerwać? Postęp zostanie utracony.",en:"Are you sure you want to quit? Progress will be lost."},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your biggest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsShare:{pl:"Udostępnij wynik",en:"Share results"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},coffeeText:{pl:"Pomogło? Możesz postawić mi kawę.",en:"Found it helpful? You can buy me a coffee."},coffeeBtn:{pl:"Postaw kawę ☕",en:"Buy me a coffee ☕"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicLearnPath:{pl:"Ścieżka do tego tematu",en:"Path to this topic"},pathLabel:{pl:"Ścieżka nauki",en:"Learning path"},pathTopics:{pl:"tematów w ścieżce",en:"topics in path"},pathKnown:{pl:"znasz",en:"known"},pathToStudy:{pl:"do nauki",en:"to study"},pathGoal:{pl:"— cel",en:"— goal"}};function K(o,t="pl"){const r=nv[o];return r?r[t]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function ba(o,t){const r={},s={};return o.forEach(a=>{r[a.id]=[],s[a.id]=[]}),t.forEach(([a,c])=>{var d,h;(d=r[c])==null||d.push(a),(h=s[a])==null||h.push(c)}),{prereqs:r,dependents:s}}function Jl(o,t){const r=Object.fromEntries(o.map(d=>[d.id,0])),s=Object.fromEntries(o.map(d=>[d.id,[]]));for(const[d,h]of t)r[h]!==void 0&&r[h]++,s[d]!==void 0&&s[d].push(h);const a=Object.fromEntries(o.map(d=>[d.id,0])),c=o.filter(d=>r[d.id]===0).map(d=>d.id);for(;c.length;){const d=c.shift();for(const h of s[d])a[h]=Math.max(a[h],a[d]+1),--r[h]===0&&c.push(h)}return a}const tv={id:"spectral",label:"Spectral"};function rv(o,t,r,s,a=80){const c=o.length,d=Object.fromEntries(o.map((B,Z)=>[B.id,Z])),h=Array.from({length:c},()=>new Float64Array(c));t.forEach(([B,Z])=>{const X=d[B],Q=d[Z];X==null||Q==null||(h[X][Q]=1,h[Q][X]=1)});const f=h.map(B=>B.reduce((Z,X)=>Z+X,0)),v=B=>B.map((Z,X)=>{let Q=0;for(let pe=0;pe<c;pe++)Q+=h[X][pe]*B[pe];return f[X]*B[X]-Q}),b=(B,Z)=>B.reduce((X,Q,pe)=>X+Q*Z[pe],0),_=B=>{const Z=Math.sqrt(b(B,B))||1;return B.map(X=>X/Z)},z=(B,Z)=>{let X=[...B];return Z.forEach(Q=>{const pe=b(X,Q);X=X.map((ee,oe)=>ee-pe*Q[oe])}),_(X)},k=(B,Z=400)=>{let X=_(Array.from({length:c},()=>Math.random()-.5));X=z(X,B);for(let Q=0;Q<Z;Q++){const pe=Math.max(...f)+1;X=z(X.map((ee,oe)=>pe*ee-v(X)[oe]),B)}return X},T=_(new Array(c).fill(1)),M=k([T]),F=k([T,M]),P=Math.min(...M),G=Math.max(...M),L=Math.min(...F),N=Math.max(...F),E=G-P<1e-6?1:(r-2*a)/(G-P),U=N-L<1e-6?1:(s-2*a)/(N-L);return o.map((B,Z)=>({id:B.id,x:a+(M[Z]-P)*E,y:a+(F[Z]-L)*U,vx:0,vy:0}))}const iv=Object.freeze(Object.defineProperty({__proto__:null,apply:rv,meta:tv},Symbol.toStringTag,{value:"Module"})),ov={id:"topoRank",label:"Topo Rank"},nd=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function sv(o,t,r,s,a=80){const c=Jl(o,t),d=Math.max(...o.map(b=>c[b.id]??0),0),h={};for(const b of o){const _=c[b.id]??0;(h[_]??(h[_]=[])).push(b)}for(const b of Object.values(h))b.sort((_,z)=>{const k=nd.indexOf(_.scope),T=nd.indexOf(z.scope);return(k===-1?999:k)-(T===-1?999:T)});const f=r-2*a,v=s-2*a;return o.map(b=>{const _=c[b.id]??0,z=h[_],k=z.indexOf(b);return{id:b.id,x:a+(k+.5)/z.length*f,y:a+_/Math.max(d,1)*v,vx:0,vy:0}})}const av=Object.freeze(Object.defineProperty({__proto__:null,apply:sv,meta:ov},Symbol.toStringTag,{value:"Module"})),lv={id:"nPartite",label:"N-Partite Grid"};function cv(o,t,r,s,a=80){const c=Jl(o,t),d=Math.max(...o.map(k=>c[k.id]??0),0),h={};for(const k of o){const T=c[k.id]??0;(h[T]??(h[T]=[])).push(k)}const f={};for(const k of o)f[k.id]=[];for(const[k,T]of t)f[T]&&f[T].push(k);const v=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],b={},_=r-2*a,z=s-2*a;for(let k=0;k<=d;k++){const T=h[k]??[];k===0?T.sort((F,P)=>{const G=v.indexOf(F.scope),L=v.indexOf(P.scope);return(G===-1?999:G)-(L===-1?999:L)}):T.sort((F,P)=>{const G=L=>{const N=f[L.id]??[];return N.length===0?r/2:N.reduce((E,U)=>{var B;return E+(((B=b[U])==null?void 0:B.x)??r/2)},0)/N.length};return G(F)-G(P)});const M=a+k/Math.max(d,1)*z;T.forEach((F,P)=>{const G=T.length===1?r/2:a+P/(T.length-1)*_;b[F.id]={x:G,y:M}})}return o.map(k=>{var T,M;return{id:k.id,x:((T=b[k.id])==null?void 0:T.x)??r/2,y:((M=b[k.id])==null?void 0:M.y)??s/2,vx:0,vy:0}})}const em=Object.freeze(Object.defineProperty({__proto__:null,apply:cv,meta:lv},Symbol.toStringTag,{value:"Module"})),nm=[em,av,iv],tm="nPartite";function uv(o){return nm.find(t=>t.meta.id===o)??em}const ha=1400,ec=1e3,Bo=80,dv=.4,td=6,mv=.35,rd=.012;function pv(o,t){const r=Jl(o,t),s=Math.max(...o.map(c=>r[c.id]??0),0),a=Object.fromEntries(o.map(c=>[c.id,Bo+(r[c.id]??0)/Math.max(s,1)*(ec-2*Bo)]));return{ranks:r,rankY:a}}function fv(o,t){const r=Object.fromEntries(o.map((s,a)=>[s.id,a]));return t.map(([s,a])=>[r[s],r[a]]).filter(([s,a])=>s!=null&&a!=null)}function hv(o){return Math.sqrt(ha*ec/Math.max(o.length,1))*.9}function gv(o,t,r,s){return uv(o).apply(t,r,ha,ec,Bo).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:s[d.id]??d.y,vx:0,vy:0}))}function yv(o,t,r,s,{ranks:a,rankY:c,simEdges:d,idealK:h}){const f=o.length,v=new Float64Array(f);for(let b=0;b<f;b++)for(let _=b+1;_<f;_++){if(a[o[b].id]!==a[o[_].id])continue;const z=o[b].x-o[_].x,k=Math.abs(z)||.1,T=h*h/(k*k),M=z<0?-1:1;v[b]+=M*T,v[_]-=M*T}for(const[b,_]of d){const z=o[_].x-o[b].x;v[b]+=z*rd,v[_]-=z*rd}for(let b=0;b<f;b++)v[b]+=(ha/2-o[b].x)*.003;return o.map((b,_)=>{if(b.id===t)return{...b,x:r,y:s,vx:0,vy:0};let z=(b.vx+v[_])*dv;Math.abs(z)>td&&(z*=td/Math.abs(z));const k=c[b.id]??b.y,T=b.y+(k-b.y)*mv;return{...b,vx:z,vy:0,x:Math.max(Bo,Math.min(ha-Bo,b.x+z)),y:T}})}function bl(o=tm,t=300,r,s){if(!r||r.length===0)return{};const{ranks:a,rankY:c}=pv(r,s??[]),d=fv(r,s??[]),h=hv(r),f={ranks:a,rankY:c,simEdges:d,idealK:h};let v=gv(o,r,s??[],c);for(let b=0;b<t;b++)v=yv(v,null,0,0,f);return Object.fromEntries(v.map(b=>[b.id,{x:b.x,y:b.y}]))}function vv(o){const t=typeof window<"u"&&window.innerWidth<600,[r,s]=H.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[a,c]=H.useState("grab"),d=H.useRef(!1),h=H.useRef({x:0,y:0}),f=H.useRef(null),v=H.useRef(null),b=H.useCallback(N=>{N.preventDefault();const E=N.deltaY>0?.9:1.1;s(U=>{const B=Math.max(.15,Math.min(5,U.scale*E)),Z=N.clientX,X=N.clientY,Q=Z-(Z-U.x)/U.scale*B,pe=X-(X-U.y)/U.scale*B;return{x:Q,y:pe,scale:B}})},[]),_=H.useCallback((N,E)=>({x:(N-r.x)/r.scale,y:(E-r.y)/r.scale}),[r]),z=H.useCallback((N,E)=>{d.current=!0,c("grabbing"),h.current={x:N-r.x,y:E-r.y}},[r]),k=H.useCallback(N=>d.current?(s(E=>({...E,x:N.clientX-h.current.x,y:N.clientY-h.current.y})),!0):!1,[]),T=H.useCallback(()=>{d.current=!1,c("grab")},[]),M=(N,E)=>{const U=N.clientX-E.clientX,B=N.clientY-E.clientY;return Math.sqrt(U*U+B*B)},F=(N,E)=>({x:(N.clientX+E.clientX)/2,y:(N.clientY+E.clientY)/2}),P=H.useCallback(N=>{N.touches.length===1?(d.current=!0,s(E=>(h.current={x:N.touches[0].clientX-E.x,y:N.touches[0].clientY-E.y},E)),f.current=null,v.current=null):N.touches.length===2&&(d.current=!1,f.current=M(N.touches[0],N.touches[1]),v.current=F(N.touches[0],N.touches[1]))},[]),G=H.useCallback(N=>{if(N.preventDefault(),N.touches.length===1&&d.current)s(E=>({...E,x:N.touches[0].clientX-h.current.x,y:N.touches[0].clientY-h.current.y}));else if(N.touches.length===2&&f.current!==null){const E=M(N.touches[0],N.touches[1]),U=F(N.touches[0],N.touches[1]),B=E/f.current;s(Z=>{const X=Math.max(.15,Math.min(5,Z.scale*B)),Q=v.current.x,pe=v.current.y,ee=Q-(Q-Z.x)/Z.scale*X,oe=pe-(pe-Z.y)/Z.scale*X;return{x:ee,y:oe,scale:X}}),f.current=E,v.current=U}},[]),L=H.useCallback(()=>{d.current=!1,f.current=null,v.current=null},[]);return H.useEffect(()=>{const N=o.current;if(N)return N.addEventListener("wheel",b,{passive:!1}),N.addEventListener("touchstart",P,{passive:!1}),N.addEventListener("touchmove",G,{passive:!1}),N.addEventListener("touchend",L,{passive:!1}),()=>{N.removeEventListener("wheel",b),N.removeEventListener("touchstart",P),N.removeEventListener("touchmove",G),N.removeEventListener("touchend",L)}},[o,b,P,G,L]),{viewTransform:r,setViewTransform:s,toCanvas:_,isPanning:d,panStart:h,startPan:z,cursorStyle:a,setCursorStyle:c,handleMouseMove:k,handleMouseUp:T,handleWheel:b}}function xv(o,t,r,s){const a=H.useRef(null),c=H.useRef({x:0,y:0}),d=H.useCallback((v,b,_)=>{const z=o(b,_),k=t.find(T=>T.id===v);k&&(a.current=v,c.current={x:z.x-k.x,y:z.y-k.y},s==null||s("grabbing"))},[o,t,s]),h=H.useCallback((v,b)=>{if(!a.current)return!1;const _=o(v,b),z=a.current;return r(k=>({...k,[z]:{x:_.x-c.current.x,y:_.y-c.current.y}})),!0},[o,r]),f=H.useCallback(()=>{a.current=null,s==null||s("grab")},[s]);return{draggingNode:a,startNodeDrag:d,handleDragMove:h,handleDragEnd:f}}const ti={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function $v(o,t,r){var c;const s={...t},a=[o];for(;a.length;){const d=a.shift();s[d]!=="known"&&(s[d]="known",(c=r.prereqs[d])==null||c.forEach(h=>{s[h]!=="known"&&a.push(h)}))}return s}function rm(o,t,r){var c;const s={...t},a=[o];for(;a.length;){const d=a.shift();s[d]!=="unknown"&&(s[d]="unknown",(c=r.dependents[d])==null||c.forEach(h=>{s[h]!=="unknown"&&a.push(h)}))}return s}function Nl(o,t,r,s,a){let c={...s};if(t){for(const d of Object.keys(r))c[d]="known";for(const d of Object.keys(r))c=$v(d,c,a)}else{for(const d of Object.keys(r))c[d]="unknown";for(const d of Object.keys(r))c=rm(d,c,a)}return c}function bv(o,t,r){return o.filter(s=>t[s.id]!=="known"&&t[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(a=>t[a]==="known")).map(s=>s.id)}function im(o,t,r,s=.5){var a,c,d;try{const h=1-s,f=o.filter(_=>t[_.id]!=="known"&&t[_.id]!=="unknown");if(f.length===0)return null;const v=f.map(_=>{const z=om(_.id,t,r),k=sm(_.id,t,r),T=s*z+h*k;return{id:_.id,erv:T||0,ancestorsToReveal:z,descendantsToReveal:k}});return v.sort((_,z)=>z.erv-_.erv),((a=v[0])==null?void 0:a.id)||((c=f[0])==null?void 0:c.id)||null}catch(h){return console.error("pickNextQuestion error:",h),((d=o.filter(v=>t[v.id]!=="known"&&t[v.id]!=="unknown")[0])==null?void 0:d.id)||null}}function om(o,t,r){const s=new Set,a=[...r.prereqs[o]??[]];let c=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const h=r.prereqs[d]??[];for(const f of h)s.has(f)||a.push(f)}return c}function sm(o,t,r){const s=new Set,a=[...r.dependents[o]??[]];let c=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const h=r.dependents[d]??[];for(const f of h)s.has(f)||a.push(f)}return c}function wv(o,t,r,s=.5){try{const a=o.filter(v=>t[v.id]!=="known"&&t[v.id]!=="unknown");if(a.length===0)return 0;const c=1-s;let d=0;for(const v of a){const b=om(v.id,t,r),_=sm(v.id,t,r),z=s*b+c*_;d+=z||0}if(!d||d===0)return a.length;const h=a.length,f=h*h/d;return isNaN(f)?a.length:Math.ceil(f)}catch(a){return console.error("estimateRemainingQuestions error:",a),null}}function _v(o,t,r){const s={...o};for(const[a,c]of Object.entries(t)){const d=s[a]??{alpha:1,beta:1};s[a]={alpha:d.alpha+(r?c:0),beta:d.beta+(r?0:c)}}return s}function kv(o,t){const r={};for(const s of o){const a=t[s]??{alpha:1,beta:1},c=a.alpha+a.beta,d=a.alpha/c;d>ti.deepKnownThreshold&&c>ti.deepMinStrength?r[s]="known":d<ti.deepUnknownThreshold&&c>ti.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function zv(o,t,r){const s=new Set,a=new Set(r.map(d=>d.id)),c=[o];for(;c.length;){const d=c.shift();if(!s.has(d)&&a.has(d)){s.add(d);for(const h of t.prereqs[d]??[])s.has(h)||c.push(h)}}return s}function Sv(o,t,r,s,a){var h;const c=o.filter(f=>r[f]==="uncertain");if(c.length===0)return null;const d=c.map(f=>{const v=t[f]??{alpha:1,beta:1},b=v.alpha+v.beta,_=v.alpha/b,z=1-_,k=new Set(o);let T=0;const M=[...s.prereqs[f]??[]],F=new Set;for(;M.length;){const E=M.shift();if(!F.has(E)){F.add(E),k.has(E)&&r[E]==="uncertain"&&T++;for(const U of s.prereqs[E]??[])F.has(U)||M.push(U)}}let P=0;const G=[...s.dependents[f]??[]],L=new Set;for(;G.length;){const E=G.shift();if(!L.has(E)){L.add(E),k.has(E)&&r[E]==="uncertain"&&P++;for(const U of s.dependents[E]??[])L.has(U)||G.push(U)}}const N=_*T+z*P;return{id:f,erv:N,strength:b}});return d.sort((f,v)=>Math.abs(f.erv-v.erv)>.01?v.erv-f.erv:f.strength-v.strength),((h=d[0])==null?void 0:h.id)??c[0]}function jv(o,t,r=0){return!!(o.every(s=>t[s]!=="uncertain")||r>=ti.deepMaxQuestions)}function am(o,t,r=0,s){const a=(s==null?void 0:s.maxQuestions)??ti.quickMaxQuestions,c=(s==null?void 0:s.completionRatio)??ti.quickCompletionRatio,d=o.length;if(d===0)return!0;const h=o.filter(f=>t[f.id]!=="known"&&t[f.id]!=="unknown").length;return h===0||r>=a||h/d<=c}const Il={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function qv(o,t,r){const s=r?`${r}_`:"",[a,c]=mt(`${s}diagMode`,!1),[d,h]=mt(`${s}diagSubMode`,"quick"),[f,v]=mt(`${s}belief`,{}),[b,_]=mt(`${s}targetNode`,null),[z,k]=mt(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[T,M]=mt(`${s}answeredQuestions`,new Set),[F,P]=mt(`${s}betaBeliefs`,{}),[G,L]=mt(`${s}quizNode`,null),N=H.useMemo(()=>{const C=z.correct+z.incorrect;return C===0?.5:(z.correct+.5)/(C+1)},[z]),E=z.questionsAnswered,U=H.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(t)])].map(Y=>({id:Y})),[o,t]),B=H.useMemo(()=>Object.keys(f).length>0||z.questionsAnswered>0,[f,z]),Z=H.useMemo(()=>B?bv(U,f,o):[],[B,f,o,U]),X=B?Z:[],Q=H.useMemo(()=>a&&d==="quick"?im(U,f,o,N):null,[a,d,f,o,N,U]),pe=H.useMemo(()=>a&&d==="quick"?wv(U,f,o,N):null,[a,d,f,o,N,U]),ee=H.useMemo(()=>a&&d==="quick"&&B&&am(U,f,E),[a,d,B,f,U,E]),oe=H.useMemo(()=>!a||d!=="deepdive"||!b?[]:[...zv(b,o,U)],[a,d,b,o,U]),fe=H.useMemo(()=>d!=="deepdive"?{}:kv(oe,F),[d,oe,F]),Ce=H.useMemo(()=>!a||d!=="deepdive"||oe.length===0?null:Sv(oe,F,fe,o),[a,d,oe,F,fe,o,U]),De=H.useMemo(()=>!a||d!=="deepdive"||oe.length===0?!1:jv(oe,fe,E),[a,d,oe,fe,E]),Ee=H.useCallback((C,Y)=>a?d==="deepdive"?oe.includes(C)?(fe[C]!=="uncertain"||L(C),!0):!1:f[C]==="unknown"?!0:Y?(v($e=>rm(C,$e,o)),L(null),!0):f[C]==="known"?(v($e=>{const Se={...$e};return delete Se[C],Se}),L(null),!0):(L(C),!0):!1,[a,d,f,o,oe,fe]),re=H.useCallback((C,Y,$e,Se)=>{if(d==="deepdive"){const ze=($e==null?void 0:$e.tests)??{[C]:1};P(Be=>_v(Be,ze,Y))}else{const ze=($e==null?void 0:$e.tests)??{[C]:1};v(Be=>Nl(C,Y,ze,Be,o))}typeof Se=="number"&&M(ze=>new Set([...ze,`${C}:${Se}`])),k(ze=>({correct:ze.correct+(Y?1:0),incorrect:ze.incorrect+(Y?0:1),questionsAnswered:ze.questionsAnswered+1})),L(null)},[d,o]),ve=H.useCallback(()=>{ev(),c(!1),h("quick"),v({}),P({}),L(null),_(null),k({correct:0,incorrect:0,questionsAnswered:0}),M(new Set)},[]),de=H.useCallback(C=>{h("deepdive"),_(C),P({}),v({}),L(null),k({correct:0,incorrect:0,questionsAnswered:0}),M(new Set),c(!0)},[]);return{diagMode:a,setDiagMode:c,mode:d,setMode:h,quizNode:G,setQuizNode:L,questionsAnswered:E,answeredQuestions:T,setAnsweredQuestions:M,getAnsweredIndices:C=>{const Y=[];return T.forEach($e=>{const[Se,ze]=$e.split(":");Se===C&&Y.push(parseInt(ze,10))}),Y},handleDiagClick:Ee,handleQuizAnswer:re,resetDiagnostic:ve,startDeepDive:de,targetNode:b,belief:f,setBelief:v,frontier:Z,visibleFrontier:X,hasStarted:B,nextSuggestedId:Q,expectedRemaining:pe,pCorrect:N,sessionComplete:ee,betaBeliefs:F,subgraphIds:oe,ddClassification:fe,ddNextNodeId:Ce,ddComplete:De}}const id=640;function Tv(){const[o,t]=H.useState(()=>typeof window<"u"&&window.innerWidth<id);return H.useEffect(()=>{const r=window.matchMedia(`(max-width: ${id-1}px)`),s=a=>t(a.matches);return r.addEventListener("change",s),t(r.matches),()=>r.removeEventListener("change",s)},[]),o}const Av=new Set(["pl","en"]);function od(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let s="pl",a=r;if(r.length>0&&Av.has(r[0])&&(s=r[0],a=r.slice(1)),a[0]==="node"&&a[1]){const c=decodeURIComponent(a[1]);return a[2]==="resource"&&a[3]!=null?{view:"resource",nodeId:c,resourceIndex:parseInt(a[3],10),lang:s}:{view:"node",nodeId:c,lang:s}}if(a[0]==="diagnostic"){if(a[1]==="deepdive"&&a[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(a[2]),lang:s};if(a[1]==="quick")return{view:"diagnostic",mode:"quick",lang:s}}return{view:"graph",lang:s}}function Mv(o){const t=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${t}`;switch(o.view){case"node":return`#/${t}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function Pv(o){const t=H.useRef(o);t.current=o;const r=H.useRef(!1),s=H.useCallback(a=>{const c=Mv(a);window.location.hash!==c&&(r.current=!0,window.location.hash=c)},[]);return H.useEffect(()=>{const a=()=>{if(r.current){r.current=!1;return}t.current(od(window.location.hash))};window.addEventListener("hashchange",a);const c=od(window.location.hash);return Promise.resolve().then(()=>t.current(c)),()=>window.removeEventListener("hashchange",a)},[]),{setRoute:s}}function sd(o){return 6+o.level*2}function Cv({edges:o,nodes:t,highlightedIds:r}){const s=H.useMemo(()=>Object.fromEntries(t.map(a=>[a.id,a])),[t]);return y.jsx("g",{children:o.map(([a,c])=>{const d=s[a],h=s[c];if(!d||!h)return null;const f=(r==null?void 0:r.has(a))&&(r==null?void 0:r.has(c)),v=r&&!f,b=h.x-d.x,_=h.y-d.y,z=Math.sqrt(b*b+_*_)||1,k=sd(h)+3,T=h.x-b/z*k,M=h.y-_/z*k,F=sd(d)+2,P=d.x+b/z*F,G=d.y+_/z*F,L=v?"#151b26":f?"#4a9eff":"#334766",N=f?1.8:1,E=v?.15:f?1:.55,U=v?"url(#arrow-dim)":f?"url(#arrow-hi)":"url(#arrow-default)";return y.jsx("line",{x1:P,y1:G,x2:T,y2:M,stroke:L,strokeWidth:N,opacity:E,markerEnd:U},`${a}-${c}`)})})}function Rv(o){return 6+o.level*2}function Dv(o){return o<.4?8:o<.65?13:o<1?18:28}function Ev({nodes:o,filteredIds:t,highlightedIds:r,selected:s,onSelect:a,onHover:c,lang:d,diagMode:h,belief:f,frontier:v,scale:b,scopeColors:_}){const z=f&&Object.keys(f).length>0;return y.jsx("g",{children:o.map(k=>{const T=Rv(k),M=(_==null?void 0:_[k.scope])||"#4a9eff",F=t&&!t.has(k.id),P=r==null?void 0:r.has(k.id),G=s===k.id,L=r&&!P||F,N=d==="pl"?k.labelPl:k.label,E=Dv(b??1);let U=M,B=L?.15:.9,Z=L?.2:.85,X=null,Q=2;if(z){const pe=f[k.id],ee=v==null?void 0:v.includes(k.id);pe==="known"?(U="#27ae60",X="#2ecc71",B=F?.1:.85,Z=F?.15:.9):pe==="unknown"?(U="#c0392b",B=F?.1:.45,X="#e74c3c",Z=F?.15:.7):ee?(U="#f39c12",X="#f1c40f",Q=3,B=F?.1:.9,Z=F?.15:.9):(B=F?.1:h?.35:.5,Z=F?.15:.7)}return y.jsxs("g",{"data-node-id":k.id,style:{cursor:"pointer"},onClick:()=>a(k.id===s?null:k.id),onMouseEnter:()=>c(k.id),onMouseLeave:()=>c(null),children:[(G||X)&&y.jsx("circle",{cx:k.x,cy:k.y,r:T+(G?5:4),fill:"none",stroke:G?M:X,strokeWidth:G?2:Q,opacity:G?.5:.9}),y.jsx("circle",{cx:k.x,cy:k.y,r:T,fill:U,fillOpacity:B,stroke:(P||G)&&!z?M:"none",strokeWidth:1.5}),y.jsx("text",{x:k.x,y:k.y+T+10,textAnchor:"middle",fontSize:8,fill:I.textBody,opacity:Z,style:{pointerEvents:"none",userSelect:"none"},children:N.length>E?N.slice(0,E-1)+"…":N})]},k.id)})})}function Bv({resource:o,lang:t,onClose:r}){const s=H.useRef(null);if(H.useEffect(()=>{const _=z=>{z.key==="Escape"&&r()};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[r]),H.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const a=t==="pl"?o.titlePl:o.titleEn,c=o.type==="interactive",d={interactive:K("resourceInteractive",t),video:K("resourceVideo",t),article:K("resourceArticle",t)}[o.type]??o.type,h={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!c)return window.open(o.url,"_blank","noopener"),r(),null;const v=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,b=v+(v.includes("?")?"&":"?")+"lang="+t;return y.jsxs("div",{ref:s,onClick:_=>{_.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[y.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),y.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${h}33`,boxShadow:`0 0 48px ${h}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#161c28f8",borderBottom:`1px solid ${h}22`,flexShrink:0,fontFamily:Qe},children:[y.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:h,background:`${h}18`,border:`1px solid ${h}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),y.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:I.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),y.jsx("button",{onClick:()=>window.open(b,"_blank","noopener"),title:K("openInTab",t),style:ad,children:"↗"}),y.jsx("button",{onClick:r,title:K("closeResource",t),style:{...ad,fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("iframe",{src:b,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:a,loading:"eager"})]})]})}const ad={background:"none",border:`1px solid ${I.border}`,borderRadius:5,color:I.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:Qe,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};class Yn{constructor(t,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=s}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Yn(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class rt{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new rt(r,Yn.range(this,t))}}class le{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+t,a,c,d=r&&r.loc;if(d&&d.start<=d.end){var h=d.lexer.input;a=d.start,c=d.end,a===h.length?s+=" at end of input: ":s+=" at position "+(a+1)+": ";var f=h.slice(a,c).replace(/[^]/g,"$&̲"),v;a>15?v="…"+h.slice(a-15,a):v=h.slice(0,a);var b;c+15<h.length?b=h.slice(c,c+15)+"…":b=h.slice(c),s+=v+f+b}var _=new Error(s);return _.name="ParseError",_.__proto__=le.prototype,_.position=a,a!=null&&c!=null&&(_.length=c-a),_.rawMessage=t,_}}le.prototype.__proto__=Error.prototype;var Nv=/([A-Z])/g,nc=o=>o.replace(Nv,"-$1").toLowerCase(),Iv={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Fv=/[&><"']/g,Cn=o=>String(o).replace(Fv,t=>Iv[t]),Do=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Do(o.body[0]):o:o.type==="font"?Do(o.body):o,Lv=new Set(["mathord","textord","atom"]),tr=o=>Lv.has(Do(o).type),Ov=o=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},pa={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,t)=>(t.push(o),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function Hv(o){if(o.default)return o.default;var t=o.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class tc{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in pa)if(pa.hasOwnProperty(r)){var s=pa[r];this[r]=t[r]!==void 0?s.processor?s.processor(t[r]):t[r]:Hv(s)}}reportNonstrict(t,r,s){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,s)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new le("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),s);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,s){var a=this.strict;if(typeof a=="function")try{a=a(t,r,s)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=Ov(t.url);if(r==null)return!1;t.protocol=r}var s=typeof this.trust=="function"?this.trust(t):this.trust;return!!s}}class Sr{constructor(t,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=s}sup(){return Rt[Wv[this.id]]}sub(){return Rt[Gv[this.id]]}fracNum(){return Rt[Uv[this.id]]}fracDen(){return Rt[Vv[this.id]]}cramp(){return Rt[Kv[this.id]]}text(){return Rt[Zv[this.id]]}isTight(){return this.size>=2}}var rc=0,ga=1,Di=2,er=3,No=4,pt=5,Ei=6,In=7,Rt=[new Sr(rc,0,!1),new Sr(ga,0,!0),new Sr(Di,1,!1),new Sr(er,1,!0),new Sr(No,2,!1),new Sr(pt,2,!0),new Sr(Ei,3,!1),new Sr(In,3,!0)],Wv=[No,pt,No,pt,Ei,In,Ei,In],Gv=[pt,pt,pt,pt,In,In,In,In],Uv=[Di,er,No,pt,Ei,In,Ei,In],Vv=[er,er,pt,pt,In,In,In,In],Kv=[ga,ga,er,er,pt,pt,In,In],Zv=[rc,ga,Di,er,Di,er,Di,er],Re={DISPLAY:Rt[rc],TEXT:Rt[Di],SCRIPT:Rt[No],SCRIPTSCRIPT:Rt[Ei]},Fl=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Yv(o){for(var t=0;t<Fl.length;t++)for(var r=Fl[t],s=0;s<r.blocks.length;s++){var a=r.blocks[s];if(o>=a[0]&&o<=a[1])return r.name}return null}var fa=[];Fl.forEach(o=>o.blocks.forEach(t=>fa.push(...t)));function lm(o){for(var t=0;t<fa.length;t+=2)if(o>=fa[t]&&o<=fa[t+1])return!0;return!1}var Ri=80,Qv=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Xv=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},Jv=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},e8=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},n8=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},t8=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},r8=function(t,r,s){var a=s-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},i8=function(t,r,s){r=1e3*r;var a="";switch(t){case"sqrtMain":a=Qv(r,Ri);break;case"sqrtSize1":a=Xv(r,Ri);break;case"sqrtSize2":a=Jv(r,Ri);break;case"sqrtSize3":a=e8(r,Ri);break;case"sqrtSize4":a=n8(r,Ri);break;case"sqrtTall":a=r8(r,Ri,s)}return a},o8=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},ld={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},s8=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Lo{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Dt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},ra={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},cd={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function a8(o,t){Dt[o]=t}function ic(o,t,r){if(!Dt[t])throw new Error("Font metrics not found for font: "+t+".");var s=o.charCodeAt(0),a=Dt[t][s];if(!a&&o[0]in cd&&(s=cd[o[0]].charCodeAt(0),a=Dt[t][s]),!a&&r==="text"&&lm(s)&&(a=Dt[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var wl={};function l8(o){var t;if(o>=5?t=0:o>=3?t=1:t=2,!wl[t]){var r=wl[t]={cssEmPerMu:ra.quad[t]/18};for(var s in ra)ra.hasOwnProperty(s)&&(r[s]=ra[s][t])}return wl[t]}var c8=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],ud=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],dd=function(t,r){return r.size<2?t:c8[t-1][r.size-1]};class Jt{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||Jt.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=ud[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in t)t.hasOwnProperty(s)&&(r[s]=t[s]);return new Jt(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:dd(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:ud[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=dd(Jt.BASESIZE,t);return this.size===r&&this.textSize===Jt.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==Jt.BASESIZE?["sizing","reset-size"+this.size,"size"+Jt.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=l8(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}Jt.BASESIZE=6;var Ll={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},u8={ex:!0,em:!0,mu:!0},cm=function(t){return typeof t!="string"&&(t=t.unit),t in Ll||t in u8||t==="ex"},un=function(t,r){var s;if(t.unit in Ll)s=Ll[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")s=a.fontMetrics().xHeight;else if(t.unit==="em")s=a.fontMetrics().quad;else throw new le("Invalid unit: '"+t.unit+"'");a!==r&&(s*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*s,r.maxSize)},me=function(t){return+t.toFixed(4)+"em"},Tr=function(t){return t.filter(r=>r).join(" ")},um=function(t,r,s){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},dm=function(t){var r=document.createElement(t);r.className=Tr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r},d8=/[\s"'>/=\x00-\x1f]/,mm=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Cn(Tr(this.classes))+'"');var s="";for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=nc(a)+":"+this.style[a]+";");s&&(r+=' style="'+Cn(s)+'"');for(var c in this.attributes)if(this.attributes.hasOwnProperty(c)){if(d8.test(c))throw new le("Invalid attribute name '"+c+"'");r+=" "+c+'="'+Cn(this.attributes[c])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+t+">",r};class Oo{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,um.call(this,t,s,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return dm.call(this,"span")}toMarkup(){return mm.call(this,"span")}}class oc{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,um.call(this,r,a),this.children=s||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return dm.call(this,"a")}toMarkup(){return mm.call(this,"a")}}class m8{constructor(t,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=s}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+Cn(this.src)+'"'+(' alt="'+Cn(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=nc(s)+":"+this.style[s]+";");return r&&(t+=' style="'+Cn(r)+'"'),t+="'/>",t}}var p8={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class ft{constructor(t,r,s,a,c,d,h,f){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=s||0,this.italic=a||0,this.skew=c||0,this.width=d||0,this.classes=h||[],this.style=f||{},this.maxFontSize=0;var v=Yv(this.text.charCodeAt(0));v&&this.classes.push(v+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=p8[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=me(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Tr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Cn(Tr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=nc(a)+":"+this.style[a]+";");s&&(t=!0,r+=' style="'+Cn(s)+'"');var c=Cn(this.text);return t?(r+=">",r+=c,r+="</span>",r):c}}class nr{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Cn(this.attributes[r])+'"');t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</svg>",t}}class Ar{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",ld[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Cn(this.alternate)+'"/>':'<path d="'+Cn(ld[this.pathName])+'"/>'}}class Ol{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Cn(this.attributes[r])+'"');return t+="/>",t}}function md(o){if(o instanceof ft)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function f8(o){if(o instanceof Oo)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var h8={bin:1,close:1,inner:1,open:1,punct:1,rel:1},g8={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},nn={math:{},text:{}};function m(o,t,r,s,a,c){nn[o][a]={font:t,group:r,replace:s},c&&s&&(nn[o][s]=nn[o][a])}var g="math",te="text",x="main",j="ams",sn="accent-token",ye="bin",Fn="close",Ii="inner",Te="mathord",vn="op-token",it="open",wa="punct",q="rel",rr="spacing",R="textord";m(g,x,q,"≡","\\equiv",!0);m(g,x,q,"≺","\\prec",!0);m(g,x,q,"≻","\\succ",!0);m(g,x,q,"∼","\\sim",!0);m(g,x,q,"⊥","\\perp");m(g,x,q,"⪯","\\preceq",!0);m(g,x,q,"⪰","\\succeq",!0);m(g,x,q,"≃","\\simeq",!0);m(g,x,q,"∣","\\mid",!0);m(g,x,q,"≪","\\ll",!0);m(g,x,q,"≫","\\gg",!0);m(g,x,q,"≍","\\asymp",!0);m(g,x,q,"∥","\\parallel");m(g,x,q,"⋈","\\bowtie",!0);m(g,x,q,"⌣","\\smile",!0);m(g,x,q,"⊑","\\sqsubseteq",!0);m(g,x,q,"⊒","\\sqsupseteq",!0);m(g,x,q,"≐","\\doteq",!0);m(g,x,q,"⌢","\\frown",!0);m(g,x,q,"∋","\\ni",!0);m(g,x,q,"∝","\\propto",!0);m(g,x,q,"⊢","\\vdash",!0);m(g,x,q,"⊣","\\dashv",!0);m(g,x,q,"∋","\\owns");m(g,x,wa,".","\\ldotp");m(g,x,wa,"⋅","\\cdotp");m(g,x,R,"#","\\#");m(te,x,R,"#","\\#");m(g,x,R,"&","\\&");m(te,x,R,"&","\\&");m(g,x,R,"ℵ","\\aleph",!0);m(g,x,R,"∀","\\forall",!0);m(g,x,R,"ℏ","\\hbar",!0);m(g,x,R,"∃","\\exists",!0);m(g,x,R,"∇","\\nabla",!0);m(g,x,R,"♭","\\flat",!0);m(g,x,R,"ℓ","\\ell",!0);m(g,x,R,"♮","\\natural",!0);m(g,x,R,"♣","\\clubsuit",!0);m(g,x,R,"℘","\\wp",!0);m(g,x,R,"♯","\\sharp",!0);m(g,x,R,"♢","\\diamondsuit",!0);m(g,x,R,"ℜ","\\Re",!0);m(g,x,R,"♡","\\heartsuit",!0);m(g,x,R,"ℑ","\\Im",!0);m(g,x,R,"♠","\\spadesuit",!0);m(g,x,R,"§","\\S",!0);m(te,x,R,"§","\\S");m(g,x,R,"¶","\\P",!0);m(te,x,R,"¶","\\P");m(g,x,R,"†","\\dag");m(te,x,R,"†","\\dag");m(te,x,R,"†","\\textdagger");m(g,x,R,"‡","\\ddag");m(te,x,R,"‡","\\ddag");m(te,x,R,"‡","\\textdaggerdbl");m(g,x,Fn,"⎱","\\rmoustache",!0);m(g,x,it,"⎰","\\lmoustache",!0);m(g,x,Fn,"⟯","\\rgroup",!0);m(g,x,it,"⟮","\\lgroup",!0);m(g,x,ye,"∓","\\mp",!0);m(g,x,ye,"⊖","\\ominus",!0);m(g,x,ye,"⊎","\\uplus",!0);m(g,x,ye,"⊓","\\sqcap",!0);m(g,x,ye,"∗","\\ast");m(g,x,ye,"⊔","\\sqcup",!0);m(g,x,ye,"◯","\\bigcirc",!0);m(g,x,ye,"∙","\\bullet",!0);m(g,x,ye,"‡","\\ddagger");m(g,x,ye,"≀","\\wr",!0);m(g,x,ye,"⨿","\\amalg");m(g,x,ye,"&","\\And");m(g,x,q,"⟵","\\longleftarrow",!0);m(g,x,q,"⇐","\\Leftarrow",!0);m(g,x,q,"⟸","\\Longleftarrow",!0);m(g,x,q,"⟶","\\longrightarrow",!0);m(g,x,q,"⇒","\\Rightarrow",!0);m(g,x,q,"⟹","\\Longrightarrow",!0);m(g,x,q,"↔","\\leftrightarrow",!0);m(g,x,q,"⟷","\\longleftrightarrow",!0);m(g,x,q,"⇔","\\Leftrightarrow",!0);m(g,x,q,"⟺","\\Longleftrightarrow",!0);m(g,x,q,"↦","\\mapsto",!0);m(g,x,q,"⟼","\\longmapsto",!0);m(g,x,q,"↗","\\nearrow",!0);m(g,x,q,"↩","\\hookleftarrow",!0);m(g,x,q,"↪","\\hookrightarrow",!0);m(g,x,q,"↘","\\searrow",!0);m(g,x,q,"↼","\\leftharpoonup",!0);m(g,x,q,"⇀","\\rightharpoonup",!0);m(g,x,q,"↙","\\swarrow",!0);m(g,x,q,"↽","\\leftharpoondown",!0);m(g,x,q,"⇁","\\rightharpoondown",!0);m(g,x,q,"↖","\\nwarrow",!0);m(g,x,q,"⇌","\\rightleftharpoons",!0);m(g,j,q,"≮","\\nless",!0);m(g,j,q,"","\\@nleqslant");m(g,j,q,"","\\@nleqq");m(g,j,q,"⪇","\\lneq",!0);m(g,j,q,"≨","\\lneqq",!0);m(g,j,q,"","\\@lvertneqq");m(g,j,q,"⋦","\\lnsim",!0);m(g,j,q,"⪉","\\lnapprox",!0);m(g,j,q,"⊀","\\nprec",!0);m(g,j,q,"⋠","\\npreceq",!0);m(g,j,q,"⋨","\\precnsim",!0);m(g,j,q,"⪹","\\precnapprox",!0);m(g,j,q,"≁","\\nsim",!0);m(g,j,q,"","\\@nshortmid");m(g,j,q,"∤","\\nmid",!0);m(g,j,q,"⊬","\\nvdash",!0);m(g,j,q,"⊭","\\nvDash",!0);m(g,j,q,"⋪","\\ntriangleleft");m(g,j,q,"⋬","\\ntrianglelefteq",!0);m(g,j,q,"⊊","\\subsetneq",!0);m(g,j,q,"","\\@varsubsetneq");m(g,j,q,"⫋","\\subsetneqq",!0);m(g,j,q,"","\\@varsubsetneqq");m(g,j,q,"≯","\\ngtr",!0);m(g,j,q,"","\\@ngeqslant");m(g,j,q,"","\\@ngeqq");m(g,j,q,"⪈","\\gneq",!0);m(g,j,q,"≩","\\gneqq",!0);m(g,j,q,"","\\@gvertneqq");m(g,j,q,"⋧","\\gnsim",!0);m(g,j,q,"⪊","\\gnapprox",!0);m(g,j,q,"⊁","\\nsucc",!0);m(g,j,q,"⋡","\\nsucceq",!0);m(g,j,q,"⋩","\\succnsim",!0);m(g,j,q,"⪺","\\succnapprox",!0);m(g,j,q,"≆","\\ncong",!0);m(g,j,q,"","\\@nshortparallel");m(g,j,q,"∦","\\nparallel",!0);m(g,j,q,"⊯","\\nVDash",!0);m(g,j,q,"⋫","\\ntriangleright");m(g,j,q,"⋭","\\ntrianglerighteq",!0);m(g,j,q,"","\\@nsupseteqq");m(g,j,q,"⊋","\\supsetneq",!0);m(g,j,q,"","\\@varsupsetneq");m(g,j,q,"⫌","\\supsetneqq",!0);m(g,j,q,"","\\@varsupsetneqq");m(g,j,q,"⊮","\\nVdash",!0);m(g,j,q,"⪵","\\precneqq",!0);m(g,j,q,"⪶","\\succneqq",!0);m(g,j,q,"","\\@nsubseteqq");m(g,j,ye,"⊴","\\unlhd");m(g,j,ye,"⊵","\\unrhd");m(g,j,q,"↚","\\nleftarrow",!0);m(g,j,q,"↛","\\nrightarrow",!0);m(g,j,q,"⇍","\\nLeftarrow",!0);m(g,j,q,"⇏","\\nRightarrow",!0);m(g,j,q,"↮","\\nleftrightarrow",!0);m(g,j,q,"⇎","\\nLeftrightarrow",!0);m(g,j,q,"△","\\vartriangle");m(g,j,R,"ℏ","\\hslash");m(g,j,R,"▽","\\triangledown");m(g,j,R,"◊","\\lozenge");m(g,j,R,"Ⓢ","\\circledS");m(g,j,R,"®","\\circledR");m(te,j,R,"®","\\circledR");m(g,j,R,"∡","\\measuredangle",!0);m(g,j,R,"∄","\\nexists");m(g,j,R,"℧","\\mho");m(g,j,R,"Ⅎ","\\Finv",!0);m(g,j,R,"⅁","\\Game",!0);m(g,j,R,"‵","\\backprime");m(g,j,R,"▲","\\blacktriangle");m(g,j,R,"▼","\\blacktriangledown");m(g,j,R,"■","\\blacksquare");m(g,j,R,"⧫","\\blacklozenge");m(g,j,R,"★","\\bigstar");m(g,j,R,"∢","\\sphericalangle",!0);m(g,j,R,"∁","\\complement",!0);m(g,j,R,"ð","\\eth",!0);m(te,x,R,"ð","ð");m(g,j,R,"╱","\\diagup");m(g,j,R,"╲","\\diagdown");m(g,j,R,"□","\\square");m(g,j,R,"□","\\Box");m(g,j,R,"◊","\\Diamond");m(g,j,R,"¥","\\yen",!0);m(te,j,R,"¥","\\yen",!0);m(g,j,R,"✓","\\checkmark",!0);m(te,j,R,"✓","\\checkmark");m(g,j,R,"ℶ","\\beth",!0);m(g,j,R,"ℸ","\\daleth",!0);m(g,j,R,"ℷ","\\gimel",!0);m(g,j,R,"ϝ","\\digamma",!0);m(g,j,R,"ϰ","\\varkappa");m(g,j,it,"┌","\\@ulcorner",!0);m(g,j,Fn,"┐","\\@urcorner",!0);m(g,j,it,"└","\\@llcorner",!0);m(g,j,Fn,"┘","\\@lrcorner",!0);m(g,j,q,"≦","\\leqq",!0);m(g,j,q,"⩽","\\leqslant",!0);m(g,j,q,"⪕","\\eqslantless",!0);m(g,j,q,"≲","\\lesssim",!0);m(g,j,q,"⪅","\\lessapprox",!0);m(g,j,q,"≊","\\approxeq",!0);m(g,j,ye,"⋖","\\lessdot");m(g,j,q,"⋘","\\lll",!0);m(g,j,q,"≶","\\lessgtr",!0);m(g,j,q,"⋚","\\lesseqgtr",!0);m(g,j,q,"⪋","\\lesseqqgtr",!0);m(g,j,q,"≑","\\doteqdot");m(g,j,q,"≓","\\risingdotseq",!0);m(g,j,q,"≒","\\fallingdotseq",!0);m(g,j,q,"∽","\\backsim",!0);m(g,j,q,"⋍","\\backsimeq",!0);m(g,j,q,"⫅","\\subseteqq",!0);m(g,j,q,"⋐","\\Subset",!0);m(g,j,q,"⊏","\\sqsubset",!0);m(g,j,q,"≼","\\preccurlyeq",!0);m(g,j,q,"⋞","\\curlyeqprec",!0);m(g,j,q,"≾","\\precsim",!0);m(g,j,q,"⪷","\\precapprox",!0);m(g,j,q,"⊲","\\vartriangleleft");m(g,j,q,"⊴","\\trianglelefteq");m(g,j,q,"⊨","\\vDash",!0);m(g,j,q,"⊪","\\Vvdash",!0);m(g,j,q,"⌣","\\smallsmile");m(g,j,q,"⌢","\\smallfrown");m(g,j,q,"≏","\\bumpeq",!0);m(g,j,q,"≎","\\Bumpeq",!0);m(g,j,q,"≧","\\geqq",!0);m(g,j,q,"⩾","\\geqslant",!0);m(g,j,q,"⪖","\\eqslantgtr",!0);m(g,j,q,"≳","\\gtrsim",!0);m(g,j,q,"⪆","\\gtrapprox",!0);m(g,j,ye,"⋗","\\gtrdot");m(g,j,q,"⋙","\\ggg",!0);m(g,j,q,"≷","\\gtrless",!0);m(g,j,q,"⋛","\\gtreqless",!0);m(g,j,q,"⪌","\\gtreqqless",!0);m(g,j,q,"≖","\\eqcirc",!0);m(g,j,q,"≗","\\circeq",!0);m(g,j,q,"≜","\\triangleq",!0);m(g,j,q,"∼","\\thicksim");m(g,j,q,"≈","\\thickapprox");m(g,j,q,"⫆","\\supseteqq",!0);m(g,j,q,"⋑","\\Supset",!0);m(g,j,q,"⊐","\\sqsupset",!0);m(g,j,q,"≽","\\succcurlyeq",!0);m(g,j,q,"⋟","\\curlyeqsucc",!0);m(g,j,q,"≿","\\succsim",!0);m(g,j,q,"⪸","\\succapprox",!0);m(g,j,q,"⊳","\\vartriangleright");m(g,j,q,"⊵","\\trianglerighteq");m(g,j,q,"⊩","\\Vdash",!0);m(g,j,q,"∣","\\shortmid");m(g,j,q,"∥","\\shortparallel");m(g,j,q,"≬","\\between",!0);m(g,j,q,"⋔","\\pitchfork",!0);m(g,j,q,"∝","\\varpropto");m(g,j,q,"◀","\\blacktriangleleft");m(g,j,q,"∴","\\therefore",!0);m(g,j,q,"∍","\\backepsilon");m(g,j,q,"▶","\\blacktriangleright");m(g,j,q,"∵","\\because",!0);m(g,j,q,"⋘","\\llless");m(g,j,q,"⋙","\\gggtr");m(g,j,ye,"⊲","\\lhd");m(g,j,ye,"⊳","\\rhd");m(g,j,q,"≂","\\eqsim",!0);m(g,x,q,"⋈","\\Join");m(g,j,q,"≑","\\Doteq",!0);m(g,j,ye,"∔","\\dotplus",!0);m(g,j,ye,"∖","\\smallsetminus");m(g,j,ye,"⋒","\\Cap",!0);m(g,j,ye,"⋓","\\Cup",!0);m(g,j,ye,"⩞","\\doublebarwedge",!0);m(g,j,ye,"⊟","\\boxminus",!0);m(g,j,ye,"⊞","\\boxplus",!0);m(g,j,ye,"⋇","\\divideontimes",!0);m(g,j,ye,"⋉","\\ltimes",!0);m(g,j,ye,"⋊","\\rtimes",!0);m(g,j,ye,"⋋","\\leftthreetimes",!0);m(g,j,ye,"⋌","\\rightthreetimes",!0);m(g,j,ye,"⋏","\\curlywedge",!0);m(g,j,ye,"⋎","\\curlyvee",!0);m(g,j,ye,"⊝","\\circleddash",!0);m(g,j,ye,"⊛","\\circledast",!0);m(g,j,ye,"⋅","\\centerdot");m(g,j,ye,"⊺","\\intercal",!0);m(g,j,ye,"⋒","\\doublecap");m(g,j,ye,"⋓","\\doublecup");m(g,j,ye,"⊠","\\boxtimes",!0);m(g,j,q,"⇢","\\dashrightarrow",!0);m(g,j,q,"⇠","\\dashleftarrow",!0);m(g,j,q,"⇇","\\leftleftarrows",!0);m(g,j,q,"⇆","\\leftrightarrows",!0);m(g,j,q,"⇚","\\Lleftarrow",!0);m(g,j,q,"↞","\\twoheadleftarrow",!0);m(g,j,q,"↢","\\leftarrowtail",!0);m(g,j,q,"↫","\\looparrowleft",!0);m(g,j,q,"⇋","\\leftrightharpoons",!0);m(g,j,q,"↶","\\curvearrowleft",!0);m(g,j,q,"↺","\\circlearrowleft",!0);m(g,j,q,"↰","\\Lsh",!0);m(g,j,q,"⇈","\\upuparrows",!0);m(g,j,q,"↿","\\upharpoonleft",!0);m(g,j,q,"⇃","\\downharpoonleft",!0);m(g,x,q,"⊶","\\origof",!0);m(g,x,q,"⊷","\\imageof",!0);m(g,j,q,"⊸","\\multimap",!0);m(g,j,q,"↭","\\leftrightsquigarrow",!0);m(g,j,q,"⇉","\\rightrightarrows",!0);m(g,j,q,"⇄","\\rightleftarrows",!0);m(g,j,q,"↠","\\twoheadrightarrow",!0);m(g,j,q,"↣","\\rightarrowtail",!0);m(g,j,q,"↬","\\looparrowright",!0);m(g,j,q,"↷","\\curvearrowright",!0);m(g,j,q,"↻","\\circlearrowright",!0);m(g,j,q,"↱","\\Rsh",!0);m(g,j,q,"⇊","\\downdownarrows",!0);m(g,j,q,"↾","\\upharpoonright",!0);m(g,j,q,"⇂","\\downharpoonright",!0);m(g,j,q,"⇝","\\rightsquigarrow",!0);m(g,j,q,"⇝","\\leadsto");m(g,j,q,"⇛","\\Rrightarrow",!0);m(g,j,q,"↾","\\restriction");m(g,x,R,"‘","`");m(g,x,R,"$","\\$");m(te,x,R,"$","\\$");m(te,x,R,"$","\\textdollar");m(g,x,R,"%","\\%");m(te,x,R,"%","\\%");m(g,x,R,"_","\\_");m(te,x,R,"_","\\_");m(te,x,R,"_","\\textunderscore");m(g,x,R,"∠","\\angle",!0);m(g,x,R,"∞","\\infty",!0);m(g,x,R,"′","\\prime");m(g,x,R,"△","\\triangle");m(g,x,R,"Γ","\\Gamma",!0);m(g,x,R,"Δ","\\Delta",!0);m(g,x,R,"Θ","\\Theta",!0);m(g,x,R,"Λ","\\Lambda",!0);m(g,x,R,"Ξ","\\Xi",!0);m(g,x,R,"Π","\\Pi",!0);m(g,x,R,"Σ","\\Sigma",!0);m(g,x,R,"Υ","\\Upsilon",!0);m(g,x,R,"Φ","\\Phi",!0);m(g,x,R,"Ψ","\\Psi",!0);m(g,x,R,"Ω","\\Omega",!0);m(g,x,R,"A","Α");m(g,x,R,"B","Β");m(g,x,R,"E","Ε");m(g,x,R,"Z","Ζ");m(g,x,R,"H","Η");m(g,x,R,"I","Ι");m(g,x,R,"K","Κ");m(g,x,R,"M","Μ");m(g,x,R,"N","Ν");m(g,x,R,"O","Ο");m(g,x,R,"P","Ρ");m(g,x,R,"T","Τ");m(g,x,R,"X","Χ");m(g,x,R,"¬","\\neg",!0);m(g,x,R,"¬","\\lnot");m(g,x,R,"⊤","\\top");m(g,x,R,"⊥","\\bot");m(g,x,R,"∅","\\emptyset");m(g,j,R,"∅","\\varnothing");m(g,x,Te,"α","\\alpha",!0);m(g,x,Te,"β","\\beta",!0);m(g,x,Te,"γ","\\gamma",!0);m(g,x,Te,"δ","\\delta",!0);m(g,x,Te,"ϵ","\\epsilon",!0);m(g,x,Te,"ζ","\\zeta",!0);m(g,x,Te,"η","\\eta",!0);m(g,x,Te,"θ","\\theta",!0);m(g,x,Te,"ι","\\iota",!0);m(g,x,Te,"κ","\\kappa",!0);m(g,x,Te,"λ","\\lambda",!0);m(g,x,Te,"μ","\\mu",!0);m(g,x,Te,"ν","\\nu",!0);m(g,x,Te,"ξ","\\xi",!0);m(g,x,Te,"ο","\\omicron",!0);m(g,x,Te,"π","\\pi",!0);m(g,x,Te,"ρ","\\rho",!0);m(g,x,Te,"σ","\\sigma",!0);m(g,x,Te,"τ","\\tau",!0);m(g,x,Te,"υ","\\upsilon",!0);m(g,x,Te,"ϕ","\\phi",!0);m(g,x,Te,"χ","\\chi",!0);m(g,x,Te,"ψ","\\psi",!0);m(g,x,Te,"ω","\\omega",!0);m(g,x,Te,"ε","\\varepsilon",!0);m(g,x,Te,"ϑ","\\vartheta",!0);m(g,x,Te,"ϖ","\\varpi",!0);m(g,x,Te,"ϱ","\\varrho",!0);m(g,x,Te,"ς","\\varsigma",!0);m(g,x,Te,"φ","\\varphi",!0);m(g,x,ye,"∗","*",!0);m(g,x,ye,"+","+");m(g,x,ye,"−","-",!0);m(g,x,ye,"⋅","\\cdot",!0);m(g,x,ye,"∘","\\circ",!0);m(g,x,ye,"÷","\\div",!0);m(g,x,ye,"±","\\pm",!0);m(g,x,ye,"×","\\times",!0);m(g,x,ye,"∩","\\cap",!0);m(g,x,ye,"∪","\\cup",!0);m(g,x,ye,"∖","\\setminus",!0);m(g,x,ye,"∧","\\land");m(g,x,ye,"∨","\\lor");m(g,x,ye,"∧","\\wedge",!0);m(g,x,ye,"∨","\\vee",!0);m(g,x,R,"√","\\surd");m(g,x,it,"⟨","\\langle",!0);m(g,x,it,"∣","\\lvert");m(g,x,it,"∥","\\lVert");m(g,x,Fn,"?","?");m(g,x,Fn,"!","!");m(g,x,Fn,"⟩","\\rangle",!0);m(g,x,Fn,"∣","\\rvert");m(g,x,Fn,"∥","\\rVert");m(g,x,q,"=","=");m(g,x,q,":",":");m(g,x,q,"≈","\\approx",!0);m(g,x,q,"≅","\\cong",!0);m(g,x,q,"≥","\\ge");m(g,x,q,"≥","\\geq",!0);m(g,x,q,"←","\\gets");m(g,x,q,">","\\gt",!0);m(g,x,q,"∈","\\in",!0);m(g,x,q,"","\\@not");m(g,x,q,"⊂","\\subset",!0);m(g,x,q,"⊃","\\supset",!0);m(g,x,q,"⊆","\\subseteq",!0);m(g,x,q,"⊇","\\supseteq",!0);m(g,j,q,"⊈","\\nsubseteq",!0);m(g,j,q,"⊉","\\nsupseteq",!0);m(g,x,q,"⊨","\\models");m(g,x,q,"←","\\leftarrow",!0);m(g,x,q,"≤","\\le");m(g,x,q,"≤","\\leq",!0);m(g,x,q,"<","\\lt",!0);m(g,x,q,"→","\\rightarrow",!0);m(g,x,q,"→","\\to");m(g,j,q,"≱","\\ngeq",!0);m(g,j,q,"≰","\\nleq",!0);m(g,x,rr," ","\\ ");m(g,x,rr," ","\\space");m(g,x,rr," ","\\nobreakspace");m(te,x,rr," ","\\ ");m(te,x,rr," "," ");m(te,x,rr," ","\\space");m(te,x,rr," ","\\nobreakspace");m(g,x,rr,null,"\\nobreak");m(g,x,rr,null,"\\allowbreak");m(g,x,wa,",",",");m(g,x,wa,";",";");m(g,j,ye,"⊼","\\barwedge",!0);m(g,j,ye,"⊻","\\veebar",!0);m(g,x,ye,"⊙","\\odot",!0);m(g,x,ye,"⊕","\\oplus",!0);m(g,x,ye,"⊗","\\otimes",!0);m(g,x,R,"∂","\\partial",!0);m(g,x,ye,"⊘","\\oslash",!0);m(g,j,ye,"⊚","\\circledcirc",!0);m(g,j,ye,"⊡","\\boxdot",!0);m(g,x,ye,"△","\\bigtriangleup");m(g,x,ye,"▽","\\bigtriangledown");m(g,x,ye,"†","\\dagger");m(g,x,ye,"⋄","\\diamond");m(g,x,ye,"⋆","\\star");m(g,x,ye,"◃","\\triangleleft");m(g,x,ye,"▹","\\triangleright");m(g,x,it,"{","\\{");m(te,x,R,"{","\\{");m(te,x,R,"{","\\textbraceleft");m(g,x,Fn,"}","\\}");m(te,x,R,"}","\\}");m(te,x,R,"}","\\textbraceright");m(g,x,it,"{","\\lbrace");m(g,x,Fn,"}","\\rbrace");m(g,x,it,"[","\\lbrack",!0);m(te,x,R,"[","\\lbrack",!0);m(g,x,Fn,"]","\\rbrack",!0);m(te,x,R,"]","\\rbrack",!0);m(g,x,it,"(","\\lparen",!0);m(g,x,Fn,")","\\rparen",!0);m(te,x,R,"<","\\textless",!0);m(te,x,R,">","\\textgreater",!0);m(g,x,it,"⌊","\\lfloor",!0);m(g,x,Fn,"⌋","\\rfloor",!0);m(g,x,it,"⌈","\\lceil",!0);m(g,x,Fn,"⌉","\\rceil",!0);m(g,x,R,"\\","\\backslash");m(g,x,R,"∣","|");m(g,x,R,"∣","\\vert");m(te,x,R,"|","\\textbar",!0);m(g,x,R,"∥","\\|");m(g,x,R,"∥","\\Vert");m(te,x,R,"∥","\\textbardbl");m(te,x,R,"~","\\textasciitilde");m(te,x,R,"\\","\\textbackslash");m(te,x,R,"^","\\textasciicircum");m(g,x,q,"↑","\\uparrow",!0);m(g,x,q,"⇑","\\Uparrow",!0);m(g,x,q,"↓","\\downarrow",!0);m(g,x,q,"⇓","\\Downarrow",!0);m(g,x,q,"↕","\\updownarrow",!0);m(g,x,q,"⇕","\\Updownarrow",!0);m(g,x,vn,"∐","\\coprod");m(g,x,vn,"⋁","\\bigvee");m(g,x,vn,"⋀","\\bigwedge");m(g,x,vn,"⨄","\\biguplus");m(g,x,vn,"⋂","\\bigcap");m(g,x,vn,"⋃","\\bigcup");m(g,x,vn,"∫","\\int");m(g,x,vn,"∫","\\intop");m(g,x,vn,"∬","\\iint");m(g,x,vn,"∭","\\iiint");m(g,x,vn,"∏","\\prod");m(g,x,vn,"∑","\\sum");m(g,x,vn,"⨂","\\bigotimes");m(g,x,vn,"⨁","\\bigoplus");m(g,x,vn,"⨀","\\bigodot");m(g,x,vn,"∮","\\oint");m(g,x,vn,"∯","\\oiint");m(g,x,vn,"∰","\\oiiint");m(g,x,vn,"⨆","\\bigsqcup");m(g,x,vn,"∫","\\smallint");m(te,x,Ii,"…","\\textellipsis");m(g,x,Ii,"…","\\mathellipsis");m(te,x,Ii,"…","\\ldots",!0);m(g,x,Ii,"…","\\ldots",!0);m(g,x,Ii,"⋯","\\@cdots",!0);m(g,x,Ii,"⋱","\\ddots",!0);m(g,x,R,"⋮","\\varvdots");m(te,x,R,"⋮","\\varvdots");m(g,x,sn,"ˊ","\\acute");m(g,x,sn,"ˋ","\\grave");m(g,x,sn,"¨","\\ddot");m(g,x,sn,"~","\\tilde");m(g,x,sn,"ˉ","\\bar");m(g,x,sn,"˘","\\breve");m(g,x,sn,"ˇ","\\check");m(g,x,sn,"^","\\hat");m(g,x,sn,"⃗","\\vec");m(g,x,sn,"˙","\\dot");m(g,x,sn,"˚","\\mathring");m(g,x,Te,"","\\@imath");m(g,x,Te,"","\\@jmath");m(g,x,R,"ı","ı");m(g,x,R,"ȷ","ȷ");m(te,x,R,"ı","\\i",!0);m(te,x,R,"ȷ","\\j",!0);m(te,x,R,"ß","\\ss",!0);m(te,x,R,"æ","\\ae",!0);m(te,x,R,"œ","\\oe",!0);m(te,x,R,"ø","\\o",!0);m(te,x,R,"Æ","\\AE",!0);m(te,x,R,"Œ","\\OE",!0);m(te,x,R,"Ø","\\O",!0);m(te,x,sn,"ˊ","\\'");m(te,x,sn,"ˋ","\\`");m(te,x,sn,"ˆ","\\^");m(te,x,sn,"˜","\\~");m(te,x,sn,"ˉ","\\=");m(te,x,sn,"˘","\\u");m(te,x,sn,"˙","\\.");m(te,x,sn,"¸","\\c");m(te,x,sn,"˚","\\r");m(te,x,sn,"ˇ","\\v");m(te,x,sn,"¨",'\\"');m(te,x,sn,"˝","\\H");m(te,x,sn,"◯","\\textcircled");var pm={"--":!0,"---":!0,"``":!0,"''":!0};m(te,x,R,"–","--",!0);m(te,x,R,"–","\\textendash");m(te,x,R,"—","---",!0);m(te,x,R,"—","\\textemdash");m(te,x,R,"‘","`",!0);m(te,x,R,"‘","\\textquoteleft");m(te,x,R,"’","'",!0);m(te,x,R,"’","\\textquoteright");m(te,x,R,"“","``",!0);m(te,x,R,"“","\\textquotedblleft");m(te,x,R,"”","''",!0);m(te,x,R,"”","\\textquotedblright");m(g,x,R,"°","\\degree",!0);m(te,x,R,"°","\\degree");m(te,x,R,"°","\\textdegree",!0);m(g,x,R,"£","\\pounds");m(g,x,R,"£","\\mathsterling",!0);m(te,x,R,"£","\\pounds");m(te,x,R,"£","\\textsterling",!0);m(g,j,R,"✠","\\maltese");m(te,j,R,"✠","\\maltese");var pd='0123456789/@."';for(var _l=0;_l<pd.length;_l++){var fd=pd.charAt(_l);m(g,x,R,fd,fd)}var hd='0123456789!@*()-=+";:?/.,';for(var kl=0;kl<hd.length;kl++){var gd=hd.charAt(kl);m(te,x,R,gd,gd)}var ya="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var zl=0;zl<ya.length;zl++){var ia=ya.charAt(zl);m(g,x,Te,ia,ia),m(te,x,R,ia,ia)}m(g,j,R,"C","ℂ");m(te,j,R,"C","ℂ");m(g,j,R,"H","ℍ");m(te,j,R,"H","ℍ");m(g,j,R,"N","ℕ");m(te,j,R,"N","ℕ");m(g,j,R,"P","ℙ");m(te,j,R,"P","ℙ");m(g,j,R,"Q","ℚ");m(te,j,R,"Q","ℚ");m(g,j,R,"R","ℝ");m(te,j,R,"R","ℝ");m(g,j,R,"Z","ℤ");m(te,j,R,"Z","ℤ");m(g,x,Te,"h","ℎ");m(te,x,Te,"h","ℎ");var Me="";for(var Bn=0;Bn<ya.length;Bn++){var pn=ya.charAt(Bn);Me=String.fromCharCode(55349,56320+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56372+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56424+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56580+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56684+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56736+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56788+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56840+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56944+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Bn<26&&(Me=String.fromCharCode(55349,56632+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me),Me=String.fromCharCode(55349,56476+Bn),m(g,x,Te,pn,Me),m(te,x,R,pn,Me))}Me="𝕜";m(g,x,Te,"k",Me);m(te,x,R,"k",Me);for(var ei=0;ei<10;ei++){var jr=ei.toString();Me=String.fromCharCode(55349,57294+ei),m(g,x,Te,jr,Me),m(te,x,R,jr,Me),Me=String.fromCharCode(55349,57314+ei),m(g,x,Te,jr,Me),m(te,x,R,jr,Me),Me=String.fromCharCode(55349,57324+ei),m(g,x,Te,jr,Me),m(te,x,R,jr,Me),Me=String.fromCharCode(55349,57334+ei),m(g,x,Te,jr,Me),m(te,x,R,jr,Me)}var Hl="ÐÞþ";for(var Sl=0;Sl<Hl.length;Sl++){var oa=Hl.charAt(Sl);m(g,x,Te,oa,oa),m(te,x,R,oa,oa)}var sa=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],yd=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],y8=function(t,r){var s=t.charCodeAt(0),a=t.charCodeAt(1),c=(s-55296)*1024+(a-56320)+65536,d=r==="math"?0:1;if(119808<=c&&c<120484){var h=Math.floor((c-119808)/26);return[sa[h][2],sa[h][d]]}else if(120782<=c&&c<=120831){var f=Math.floor((c-120782)/10);return[yd[f][2],yd[f][d]]}else{if(c===120485||c===120486)return[sa[0][2],sa[0][d]];if(120486<c&&c<120782)return["",""];throw new le("Unsupported character: "+t)}},_a=function(t,r,s){return nn[s][t]&&nn[s][t].replace&&(t=nn[s][t].replace),{value:t,metrics:ic(t,r,s)}},Nn=function(t,r,s,a,c){var d=_a(t,r,s),h=d.metrics;t=d.value;var f;if(h){var v=h.italic;(s==="text"||a&&a.font==="mathit")&&(v=0),f=new ft(t,h.height,h.depth,v,h.skew,h.width,c)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+s+"'")),f=new ft(t,0,0,0,0,0,c);if(a){f.maxFontSize=a.sizeMultiplier,a.style.isTight()&&f.classes.push("mtight");var b=a.getColor();b&&(f.style.color=b)}return f},sc=function(t,r,s,a){return a===void 0&&(a=[]),s.font==="boldsymbol"&&_a(t,"Main-Bold",r).metrics?Nn(t,"Main-Bold",r,s,a.concat(["mathbf"])):t==="\\"||nn[r][t].font==="main"?Nn(t,"Main-Regular",r,s,a):Nn(t,"AMS-Regular",r,s,a.concat(["amsrm"]))},v8=function(t,r,s,a,c){return c!=="textord"&&_a(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ka=function(t,r,s){var a=t.mode,c=t.text,d=["mord"],h=a==="math"||a==="text"&&r.font,f=h?r.font:r.fontFamily,v="",b="";if(c.charCodeAt(0)===55349&&([v,b]=y8(c,a)),v.length>0)return Nn(c,v,a,r,d.concat(b));if(f){var _,z;if(f==="boldsymbol"){var k=v8(c,a,r,d,s);_=k.fontName,z=[k.fontClass]}else h?(_=Wl[f].fontName,z=[f]):(_=aa(f,r.fontWeight,r.fontShape),z=[f,r.fontWeight,r.fontShape]);if(_a(c,_,a).metrics)return Nn(c,_,a,r,d.concat(z));if(pm.hasOwnProperty(c)&&_.slice(0,10)==="Typewriter"){for(var T=[],M=0;M<c.length;M++)T.push(Nn(c[M],_,a,r,d.concat(z)));return ir(T)}}if(s==="mathord")return Nn(c,"Math-Italic",a,r,d.concat(["mathnormal"]));if(s==="textord"){var F=nn[a][c]&&nn[a][c].font;if(F==="ams"){var P=aa("amsrm",r.fontWeight,r.fontShape);return Nn(c,P,a,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(F==="main"||!F){var G=aa("textrm",r.fontWeight,r.fontShape);return Nn(c,G,a,r,d.concat(r.fontWeight,r.fontShape))}else{var L=aa(F,r.fontWeight,r.fontShape);return Nn(c,L,a,r,d.concat(L,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},x8=(o,t)=>{if(Tr(o.classes)!==Tr(t.classes)||o.skew!==t.skew||o.maxFontSize!==t.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in o.style)if(o.style.hasOwnProperty(s)&&o.style[s]!==t.style[s])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&o.style[a]!==t.style[a])return!1;return!0},fm=o=>{for(var t=0;t<o.length-1;t++){var r=o[t],s=o[t+1];r instanceof ft&&s instanceof ft&&x8(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,o.splice(t+1,1),t--)}return o},ac=function(t){for(var r=0,s=0,a=0,c=0;c<t.children.length;c++){var d=t.children[c];d.height>r&&(r=d.height),d.depth>s&&(s=d.depth),d.maxFontSize>a&&(a=d.maxFontSize)}t.height=r,t.depth=s,t.maxFontSize=a},se=function(t,r,s,a){var c=new Oo(t,r,s,a);return ac(c),c},Mr=(o,t,r,s)=>new Oo(o,t,r,s),Bi=function(t,r,s){var a=se([t],[],r);return a.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=me(a.height),a.maxFontSize=1,a},$8=function(t,r,s,a){var c=new oc(t,r,s,a);return ac(c),c},ir=function(t){var r=new Lo(t);return ac(r),r},Ni=function(t,r){return t instanceof Lo?se([],[t],r):t},b8=function(t){if(t.positionType==="individualShift"){for(var r=t.children,s=[r[0]],a=-r[0].shift-r[0].elem.depth,c=a,d=1;d<r.length;d++){var h=-r[d].shift-c-r[d].elem.depth,f=h-(r[d-1].elem.height+r[d-1].elem.depth);c=c+h,s.push({type:"kern",size:f}),s.push(r[d])}return{children:s,depth:a}}var v;if(t.positionType==="top"){for(var b=t.positionData,_=0;_<t.children.length;_++){var z=t.children[_];b-=z.type==="kern"?z.size:z.elem.height+z.elem.depth}v=b}else if(t.positionType==="bottom")v=-t.positionData;else{var k=t.children[0];if(k.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")v=-k.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")v=-k.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:v}},Ze=function(t,r){for(var{children:s,depth:a}=b8(t),c=0,d=0;d<s.length;d++){var h=s[d];if(h.type==="elem"){var f=h.elem;c=Math.max(c,f.maxFontSize,f.height)}}c+=2;var v=se(["pstrut"],[]);v.style.height=me(c);for(var b=[],_=a,z=a,k=a,T=0;T<s.length;T++){var M=s[T];if(M.type==="kern")k+=M.size;else{var F=M.elem,P=M.wrapperClasses||[],G=M.wrapperStyle||{},L=se(P,[v,F],void 0,G);L.style.top=me(-c-k-F.depth),M.marginLeft&&(L.style.marginLeft=M.marginLeft),M.marginRight&&(L.style.marginRight=M.marginRight),b.push(L),k+=F.height+F.depth}_=Math.min(_,k),z=Math.max(z,k)}var N=se(["vlist"],b);N.style.height=me(z);var E;if(_<0){var U=se([],[]),B=se(["vlist"],[U]);B.style.height=me(-_);var Z=se(["vlist-s"],[new ft("​")]);E=[se(["vlist-r"],[N,Z]),se(["vlist-r"],[B])]}else E=[se(["vlist-r"],[N])];var X=se(["vlist-t"],E);return E.length===2&&X.classes.push("vlist-t2"),X.height=z,X.depth=-_,X},hm=(o,t)=>{var r=se(["mspace"],[],t),s=un(o,t);return r.style.marginRight=me(s),r},aa=function(t,r,s){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var c;return r==="textbf"&&s==="textit"?c="BoldItalic":r==="textbf"?c="Bold":r==="textit"?c="Italic":c="Regular",a+"-"+c},Wl={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},gm={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},ym=function(t,r){var[s,a,c]=gm[t],d=new Ar(s),h=new nr([d],{width:me(a),height:me(c),style:"width:"+me(a),viewBox:"0 0 "+1e3*a+" "+1e3*c,preserveAspectRatio:"xMinYMin"}),f=Mr(["overlay"],[h],r);return f.height=c,f.style.height=me(c),f.style.width=me(a),f},cn={number:3,unit:"mu"},ni={number:4,unit:"mu"},Xt={number:5,unit:"mu"},w8={mord:{mop:cn,mbin:ni,mrel:Xt,minner:cn},mop:{mord:cn,mop:cn,mrel:Xt,minner:cn},mbin:{mord:ni,mop:ni,mopen:ni,minner:ni},mrel:{mord:Xt,mop:Xt,mopen:Xt,minner:Xt},mopen:{},mclose:{mop:cn,mbin:ni,mrel:Xt,minner:cn},mpunct:{mord:cn,mop:cn,mrel:Xt,mopen:cn,mclose:cn,mpunct:cn,minner:cn},minner:{mord:cn,mop:cn,mbin:ni,mrel:Xt,mopen:cn,mpunct:cn,minner:cn}},_8={mord:{mop:cn},mop:{mord:cn,mop:cn},mbin:{},mrel:{},mopen:{},mclose:{mop:cn},mpunct:{},minner:{mop:cn}},vm={},va={},xa={};function he(o){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:c,mathmlBuilder:d}=o,h={type:t,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:a},f=0;f<r.length;++f)vm[r[f]]=h;t&&(c&&(va[t]=c),d&&(xa[t]=d))}function ri(o){var{type:t,htmlBuilder:r,mathmlBuilder:s}=o;he({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var $a=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},hn=function(t){return t.type==="ordgroup"?t.body:[t]},k8=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),z8=new Set(["rightmost","mrel","mclose","mpunct"]),S8={display:Re.DISPLAY,text:Re.TEXT,script:Re.SCRIPT,scriptscript:Re.SCRIPTSCRIPT},j8={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},bn=function(t,r,s,a){a===void 0&&(a=[null,null]);for(var c=[],d=0;d<t.length;d++){var h=Ve(t[d],r);if(h instanceof Lo){var f=h.children;c.push(...f)}else c.push(h)}if(fm(c),!s)return c;var v=r;if(t.length===1){var b=t[0];b.type==="sizing"?v=r.havingSize(b.size):b.type==="styling"&&(v=r.havingStyle(S8[b.style]))}var _=se([a[0]||"leftmost"],[],r),z=se([a[1]||"rightmost"],[],r),k=s==="root";return vd(c,(T,M)=>{var F=M.classes[0],P=T.classes[0];F==="mbin"&&z8.has(P)?M.classes[0]="mord":P==="mbin"&&k8.has(F)&&(T.classes[0]="mord")},{node:_},z,k),vd(c,(T,M)=>{var F=Gl(M),P=Gl(T),G=F&&P?T.hasClass("mtight")?_8[F][P]:w8[F][P]:null;if(G)return hm(G,v)},{node:_},z,k),c},vd=function o(t,r,s,a,c){a&&t.push(a);for(var d=0;d<t.length;d++){var h=t[d],f=xm(h);if(f){o(f.children,r,s,null,c);continue}var v=!h.hasClass("mspace");if(v){var b=r(h,s.node);b&&(s.insertAfter?s.insertAfter(b):(t.unshift(b),d++))}v?s.node=h:c&&h.hasClass("newline")&&(s.node=se(["leftmost"])),s.insertAfter=(_=>z=>{t.splice(_+1,0,z),d++})(d)}a&&t.pop()},xm=function(t){return t instanceof Lo||t instanceof oc||t instanceof Oo&&t.hasClass("enclosing")?t:null},q8=function o(t,r){var s=xm(t);if(s){var a=s.children;if(a.length){if(r==="right")return o(a[a.length-1],"right");if(r==="left")return o(a[0],"left")}}return t},Gl=function(t,r){return t?(r&&(t=q8(t,r)),j8[t.classes[0]]||null):null},Io=function(t,r){var s=["nulldelimiter"].concat(t.baseSizingClasses());return se(r.concat(s))},Ve=function(t,r,s){if(!t)return se();if(va[t.type]){var a=va[t.type](t,r);if(s&&r.size!==s.size){a=se(r.sizingClasses(s),[a],r);var c=r.sizeMultiplier/s.sizeMultiplier;a.height*=c,a.depth*=c}return a}else throw new le("Got group of unknown type: '"+t.type+"'")};function la(o,t){var r=se(["base"],o,t),s=se(["strut"]);return s.style.height=me(r.height+r.depth),r.depth&&(s.style.verticalAlign=me(-r.depth)),r.children.unshift(s),r}function Ul(o,t){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var s=bn(o,t,"root"),a;s.length===2&&s[1].hasClass("tag")&&(a=s.pop());for(var c=[],d=[],h=0;h<s.length;h++)if(d.push(s[h]),s[h].hasClass("mbin")||s[h].hasClass("mrel")||s[h].hasClass("allowbreak")){for(var f=!1;h<s.length-1&&s[h+1].hasClass("mspace")&&!s[h+1].hasClass("newline");)h++,d.push(s[h]),s[h].hasClass("nobreak")&&(f=!0);f||(c.push(la(d,t)),d=[])}else s[h].hasClass("newline")&&(d.pop(),d.length>0&&(c.push(la(d,t)),d=[]),c.push(s[h]));d.length>0&&c.push(la(d,t));var v;r?(v=la(bn(r,t,!0)),v.classes=["tag"],c.push(v)):a&&c.push(a);var b=se(["katex-html"],c);if(b.setAttribute("aria-hidden","true"),v){var _=v.children[0];_.style.height=me(b.height+b.depth),b.depth&&(_.style.verticalAlign=me(-b.depth))}return b}function $m(o){return new Lo(o)}class ce{constructor(t,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Tr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof yn&&this.children[s+1]instanceof yn){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof yn;)a+=this.children[++s].toText();t.appendChild(new yn(a).toNode())}else t.appendChild(this.children[s].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Cn(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Cn(Tr(this.classes))+'"'),t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class yn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Cn(this.toText())}toText(){return this.text}}class bm{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",me(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+me(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var T8=new Set(["\\imath","\\jmath"]),A8=new Set(["mrow","mtable"]),ht=function(t,r,s){return nn[r][t]&&nn[r][t].replace&&t.charCodeAt(0)!==55349&&!(pm.hasOwnProperty(t)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(t=nn[r][t].replace),new yn(t)},lc=function(t){return t.length===1?t[0]:new ce("mrow",t)},cc=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var a=t.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var c=t.text;if(T8.has(c))return null;nn[a][c]&&nn[a][c].replace&&(c=nn[a][c].replace);var d=Wl[s].fontName;return ic(c,d,a)?Wl[s].variant:null};function jl(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var t=o.children[0];return t instanceof yn&&t.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof yn&&r.text===","}else return!1}var Qn=function(t,r,s){if(t.length===1){var a=Xe(t[0],r);return s&&a instanceof ce&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var c=[],d,h=0;h<t.length;h++){var f=Xe(t[h],r);if(f instanceof ce&&d instanceof ce){if(f.type==="mtext"&&d.type==="mtext"&&f.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...f.children);continue}else if(f.type==="mn"&&d.type==="mn"){d.children.push(...f.children);continue}else if(jl(f)&&d.type==="mn"){d.children.push(...f.children);continue}else if(f.type==="mn"&&jl(d))f.children=[...d.children,...f.children],c.pop();else if((f.type==="msup"||f.type==="msub")&&f.children.length>=1&&(d.type==="mn"||jl(d))){var v=f.children[0];v instanceof ce&&v.type==="mn"&&(v.children=[...d.children,...v.children],c.pop())}else if(d.type==="mi"&&d.children.length===1){var b=d.children[0];if(b instanceof yn&&b.text==="̸"&&(f.type==="mo"||f.type==="mi"||f.type==="mn")){var _=f.children[0];_ instanceof yn&&_.text.length>0&&(_.text=_.text.slice(0,1)+"̸"+_.text.slice(1),c.pop())}}}c.push(f),d=f}return c},Pr=function(t,r,s){return lc(Qn(t,r,s))},Xe=function(t,r){if(!t)return new ce("mrow");if(xa[t.type]){var s=xa[t.type](t,r);return s}else throw new le("Got group of unknown type: '"+t.type+"'")};function xd(o,t,r,s,a){var c=Qn(o,r),d;c.length===1&&c[0]instanceof ce&&A8.has(c[0].type)?d=c[0]:d=new ce("mrow",c);var h=new ce("annotation",[new yn(t)]);h.setAttribute("encoding","application/x-tex");var f=new ce("semantics",[d,h]),v=new ce("math",[f]);v.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&v.setAttribute("display","block");var b=a?"katex":"katex-mathml";return se([b],[v])}var wm=function(t){return new Jt({style:t.displayMode?Re.DISPLAY:Re.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},_m=function(t,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),t=se(s,[t])}return t},M8=function(t,r,s){var a=wm(s),c;if(s.output==="mathml")return xd(t,r,a,s.displayMode,!0);if(s.output==="html"){var d=Ul(t,a);c=se(["katex"],[d])}else{var h=xd(t,r,a,s.displayMode,!1),f=Ul(t,a);c=se(["katex"],[h,f])}return _m(c,s)},P8=function(t,r,s){var a=wm(s),c=Ul(t,a),d=se(["katex"],[c]);return _m(d,s)},C8={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},za=function(t){var r=new ce("mo",[new yn(C8[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},R8={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},D8=new Set(["widehat","widecheck","widetilde","utilde"]),Sa=function(t,r){function s(){var h=4e5,f=t.label.slice(1);if(D8.has(f)){var v=t,b=v.base.type==="ordgroup"?v.base.body.length:1,_,z,k;if(b>5)f==="widehat"||f==="widecheck"?(_=420,h=2364,k=.42,z=f+"4"):(_=312,h=2340,k=.34,z="tilde4");else{var T=[1,1,2,2,3,3][b];f==="widehat"||f==="widecheck"?(h=[0,1062,2364,2364,2364][T],_=[0,239,300,360,420][T],k=[0,.24,.3,.3,.36,.42][T],z=f+T):(h=[0,600,1033,2339,2340][T],_=[0,260,286,306,312][T],k=[0,.26,.286,.3,.306,.34][T],z="tilde"+T)}var M=new Ar(z),F=new nr([M],{width:"100%",height:me(k),viewBox:"0 0 "+h+" "+_,preserveAspectRatio:"none"});return{span:Mr([],[F],r),minWidth:0,height:k}}else{var P=[],G=R8[f],[L,N,E]=G,U=E/1e3,B=L.length,Z,X;if(B===1){var Q=G[3];Z=["hide-tail"],X=[Q]}else if(B===2)Z=["halfarrow-left","halfarrow-right"],X=["xMinYMin","xMaxYMin"];else if(B===3)Z=["brace-left","brace-center","brace-right"],X=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+B+" children.");for(var pe=0;pe<B;pe++){var ee=new Ar(L[pe]),oe=new nr([ee],{width:"400em",height:me(U),viewBox:"0 0 "+h+" "+E,preserveAspectRatio:X[pe]+" slice"}),fe=Mr([Z[pe]],[oe],r);if(B===1)return{span:fe,minWidth:N,height:U};fe.style.height=me(U),P.push(fe)}return{span:se(["stretchy"],P,r),minWidth:N,height:U}}}var{span:a,minWidth:c,height:d}=s();return a.height=d,a.style.height=me(d),c>0&&(a.style.minWidth=me(c)),a},E8=function(t,r,s,a,c){var d,h=t.height+t.depth+s+a;if(/fbox|color|angl/.test(r)){if(d=se(["stretchy",r],[],c),r==="fbox"){var f=c.color&&c.getColor();f&&(d.style.borderColor=f)}}else{var v=[];/^[bx]cancel$/.test(r)&&v.push(new Ol({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&v.push(new Ol({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var b=new nr(v,{width:"100%",height:me(h)});d=Mr([],[b],c)}return d.height=h,d.style.height=me(h),d};function Ne(o,t){if(!o||o.type!==t)throw new Error("Expected node of type "+t+", but got "+(o?"node of type "+o.type:String(o)));return o}function uc(o){var t=ja(o);if(!t)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return t}function ja(o){return o&&(o.type==="atom"||g8.hasOwnProperty(o.type))?o:null}var dc=(o,t)=>{var r,s,a;o&&o.type==="supsub"?(s=Ne(o.base,"accent"),r=s.base,o.base=r,a=f8(Ve(o,t)),o.base=s):(s=Ne(o,"accent"),r=s.base);var c=Ve(r,t.havingCrampedStyle()),d=s.isShifty&&tr(r),h=0;if(d){var f=Do(r),v=Ve(f,t.havingCrampedStyle());h=md(v).skew}var b=s.label==="\\c",_=b?c.height+c.depth:Math.min(c.height,t.fontMetrics().xHeight),z;if(s.isStretchy)z=Sa(s,t),z=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"elem",elem:z,wrapperClasses:["svg-align"],wrapperStyle:h>0?{width:"calc(100% - "+me(2*h)+")",marginLeft:me(2*h)}:void 0}]});else{var k,T;s.label==="\\vec"?(k=ym("vec",t),T=gm.vec[1]):(k=ka({mode:s.mode,text:s.label},t,"textord"),k=md(k),k.italic=0,T=k.width,b&&(_+=k.depth)),z=se(["accent-body"],[k]);var M=s.label==="\\textcircled";M&&(z.classes.push("accent-full"),_=c.height);var F=h;M||(F-=T/2),z.style.left=me(F),s.label==="\\textcircled"&&(z.style.top=".2em"),z=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:-_},{type:"elem",elem:z}]})}var P=se(["mord","accent"],[z],t);return a?(a.children[0]=P,a.height=Math.max(P.height,a.height),a.classes[0]="mord",a):P},km=(o,t)=>{var r=o.isStretchy?za(o.label):new ce("mo",[ht(o.label,o.mode)]),s=new ce("mover",[Xe(o.base,t),r]);return s.setAttribute("accent","true"),s},B8=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));he({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,t)=>{var r=$a(t[0]),s=!B8.test(o.funcName),a=!s||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:s,isShifty:a,base:r}},htmlBuilder:dc,mathmlBuilder:km});he({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,t)=>{var r=t[0],s=o.parser.mode;return s==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:dc,mathmlBuilder:km});he({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"accentUnder",mode:r.mode,label:s,base:a}},htmlBuilder:(o,t)=>{var r=Ve(o.base,t),s=Sa(o,t),a=o.label==="\\utilde"?.12:0,c=Ze({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return se(["mord","accentunder"],[c],t)},mathmlBuilder:(o,t)=>{var r=za(o.label),s=new ce("munder",[Xe(o.base,t),r]);return s.setAttribute("accentunder","true"),s}});var ca=o=>{var t=new ce("mpadded",o?[o]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};he({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:s,funcName:a}=o;return{type:"xArrow",mode:s.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(o,t){var r=t.style,s=t.havingStyle(r.sup()),a=Ni(Ve(o.body,s,t),t),c=o.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(c+"-arrow-pad");var d;o.below&&(s=t.havingStyle(r.sub()),d=Ni(Ve(o.below,s,t),t),d.classes.push(c+"-arrow-pad"));var h=Sa(o,t),f=-t.fontMetrics().axisHeight+.5*h.height,v=-t.fontMetrics().axisHeight-.5*h.height-.111;(a.depth>.25||o.label==="\\xleftequilibrium")&&(v-=a.depth);var b;if(d){var _=-t.fontMetrics().axisHeight+d.height+.5*h.height+.111;b=Ze({positionType:"individualShift",children:[{type:"elem",elem:a,shift:v},{type:"elem",elem:h,shift:f},{type:"elem",elem:d,shift:_}]})}else b=Ze({positionType:"individualShift",children:[{type:"elem",elem:a,shift:v},{type:"elem",elem:h,shift:f}]});return b.children[0].children[0].children[1].classes.push("svg-align"),se(["mrel","x-arrow"],[b],t)},mathmlBuilder(o,t){var r=za(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(o.body){var a=ca(Xe(o.body,t));if(o.below){var c=ca(Xe(o.below,t));s=new ce("munderover",[r,c,a])}else s=new ce("mover",[r,a])}else if(o.below){var d=ca(Xe(o.below,t));s=new ce("munder",[r,d])}else s=ca(),s=new ce("mover",[r,s]);return s}});function zm(o,t){var r=bn(o.body,t,!0);return se([o.mclass],r,t)}function Sm(o,t){var r,s=Qn(o.body,t);return o.mclass==="minner"?r=new ce("mpadded",s):o.mclass==="mord"?o.isCharacterBox?(r=s[0],r.type="mi"):r=new ce("mi",s):(o.isCharacterBox?(r=s[0],r.type="mo"):r=new ce("mo",s),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}he({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:hn(a),isCharacterBox:tr(a)}},htmlBuilder:zm,mathmlBuilder:Sm});var qa=o=>{var t=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};he({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,t){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:qa(t[0]),body:hn(t[1]),isCharacterBox:tr(t[1])}}});he({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,t){var{parser:r,funcName:s}=o,a=t[1],c=t[0],d;s!=="\\stackrel"?d=qa(a):d="mrel";var h={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:hn(a)},f={type:"supsub",mode:c.mode,base:h,sup:s==="\\underset"?null:c,sub:s==="\\underset"?c:null};return{type:"mclass",mode:r.mode,mclass:d,body:[f],isCharacterBox:tr(f)}},htmlBuilder:zm,mathmlBuilder:Sm});he({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:qa(t[0]),body:hn(t[0])}},htmlBuilder(o,t){var r=bn(o.body,t,!0),s=se([o.mclass],r,t);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(o,t){var r=Qn(o.body,t),s=new ce("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var N8={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},$d=()=>({type:"styling",body:[],mode:"math",style:"display"}),bd=o=>o.type==="textord"&&o.text==="@",I8=(o,t)=>(o.type==="mathord"||o.type==="atom")&&o.text===t;function F8(o,t,r){var s=N8[o];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),c={type:"atom",text:s,mode:"math",family:"rel"},d=r.callFunction("\\Big",[c],[]),h=r.callFunction("\\\\cdright",[t[1]],[]),f={type:"ordgroup",mode:"math",body:[a,d,h]};return r.callFunction("\\\\cdparent",[f],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var v={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[v],[])}default:return{type:"textord",text:" ",mode:"math"}}}function L8(o){var t=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){t.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new le("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var s=[],a=[s],c=0;c<t.length;c++){for(var d=t[c],h=$d(),f=0;f<d.length;f++)if(!bd(d[f]))h.body.push(d[f]);else{s.push(h),f+=1;var v=uc(d[f]).text,b=new Array(2);if(b[0]={type:"ordgroup",mode:"math",body:[]},b[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(v))if("<>AV".includes(v))for(var _=0;_<2;_++){for(var z=!0,k=f+1;k<d.length;k++){if(I8(d[k],v)){z=!1,f=k;break}if(bd(d[k]))throw new le("Missing a "+v+" character to complete a CD arrow.",d[k]);b[_].body.push(d[k])}if(z)throw new le("Missing a "+v+" character to complete a CD arrow.",d[f])}else throw new le('Expected one of "<>AV=|." after @',d[f]);var T=F8(v,b,o),M={type:"styling",body:[T],mode:"math",style:"display"};s.push(M),h=$d()}c%2===0?s.push(h):s.shift(),s=[],a.push(s)}o.gullet.endGroup(),o.gullet.endGroup();var F=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:F,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}he({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:t[0]}},htmlBuilder(o,t){var r=t.havingStyle(t.style.sup()),s=Ni(Ve(o.label,r,t),t);return s.classes.push("cd-label-"+o.side),s.style.bottom=me(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(o,t){var r=new ce("mrow",[Xe(o.label,t)]);return r=new ce("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new ce("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});he({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,t){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(o,t){var r=Ni(Ve(o.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,t){return new ce("mrow",[Xe(o.fragment,t)])}});he({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,t){for(var{parser:r}=o,s=Ne(t[0],"ordgroup"),a=s.body,c="",d=0;d<a.length;d++){var h=Ne(a[d],"textord");c+=h.text}var f=parseInt(c),v;if(isNaN(f))throw new le("\\@char has non-numeric argument "+c);if(f<0||f>=1114111)throw new le("\\@char with invalid code point "+c);return f<=65535?v=String.fromCharCode(f):(f-=65536,v=String.fromCharCode((f>>10)+55296,(f&1023)+56320)),{type:"textord",mode:r.mode,text:v}}});var jm=(o,t)=>{var r=bn(o.body,t.withColor(o.color),!1);return ir(r)},qm=(o,t)=>{var r=Qn(o.body,t.withColor(o.color)),s=new ce("mstyle",r);return s.setAttribute("mathcolor",o.color),s};he({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,t){var{parser:r}=o,s=Ne(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:s,body:hn(a)}},htmlBuilder:jm,mathmlBuilder:qm});he({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,t){var{parser:r,breakOnTokenText:s}=o,a=Ne(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var c=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:a,body:c}},htmlBuilder:jm,mathmlBuilder:qm});he({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,t,r){var{parser:s}=o,a=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,c=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:c,size:a&&Ne(a,"size").value}},htmlBuilder(o,t){var r=se(["mspace"],[],t);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=me(un(o.size,t)))),r},mathmlBuilder(o,t){var r=new ce("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",me(un(o.size,t)))),r}});var Vl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Tm=o=>{var t=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new le("Expected a control sequence",o);return t},O8=o=>{var t=o.gullet.popToken();return t.text==="="&&(t=o.gullet.popToken(),t.text===" "&&(t=o.gullet.popToken())),t},Am=(o,t,r,s)=>{var a=o.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(t,a,s)};he({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:t,funcName:r}=o;t.consumeSpaces();var s=t.fetch();if(Vl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Vl[s.text]),Ne(t.parseFunction(),"internal");throw new le("Invalid token after macro prefix",s)}});he({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=t.gullet.popToken(),a=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new le("Expected a control sequence",s);for(var c=0,d,h=[[]];t.gullet.future().text!=="{";)if(s=t.gullet.popToken(),s.text==="#"){if(t.gullet.future().text==="{"){d=t.gullet.future(),h[c].push("{");break}if(s=t.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new le('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==c+1)throw new le('Argument number "'+s.text+'" out of order');c++,h.push([])}else{if(s.text==="EOF")throw new le("Expected a macro definition");h[c].push(s.text)}var{tokens:f}=t.gullet.consumeArg();return d&&f.unshift(d),(r==="\\edef"||r==="\\xdef")&&(f=t.gullet.expandTokens(f),f.reverse()),t.gullet.macros.set(a,{tokens:f,numArgs:c,delimiters:h},r===Vl[r]),{type:"internal",mode:t.mode}}});he({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=Tm(t.gullet.popToken());t.gullet.consumeSpaces();var a=O8(t);return Am(t,s,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});he({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,s=Tm(t.gullet.popToken()),a=t.gullet.popToken(),c=t.gullet.popToken();return Am(t,s,c,r==="\\\\globalfuture"),t.gullet.pushToken(c),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var Ro=function(t,r,s){var a=nn.math[t]&&nn.math[t].replace,c=ic(a||t,r,s);if(!c)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return c},mc=function(t,r,s,a){var c=s.havingBaseStyle(r),d=se(a.concat(c.sizingClasses(s)),[t],s),h=c.sizeMultiplier/s.sizeMultiplier;return d.height*=h,d.depth*=h,d.maxFontSize=c.sizeMultiplier,d},Mm=function(t,r,s){var a=r.havingBaseStyle(s),c=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=me(c),t.height-=c,t.depth+=c},H8=function(t,r,s,a,c,d){var h=Nn(t,"Main-Regular",c,a),f=mc(h,r,a,d);return Mm(f,a,r),f},W8=function(t,r,s,a){return Nn(t,"Size"+r+"-Regular",s,a)},Pm=function(t,r,s,a,c,d){var h=W8(t,r,c,a),f=mc(se(["delimsizing","size"+r],[h],a),Re.TEXT,a,d);return s&&Mm(f,a,Re.TEXT),f},ql=function(t,r,s){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var c=se(["delimsizinginner",a],[se([],[Nn(t,r,s)])]);return{type:"elem",elem:c}},Tl=function(t,r,s){var a=Dt["Size4-Regular"][t.charCodeAt(0)]?Dt["Size4-Regular"][t.charCodeAt(0)][4]:Dt["Size1-Regular"][t.charCodeAt(0)][4],c=new Ar("inner",o8(t,Math.round(1e3*r))),d=new nr([c],{width:me(a),height:me(r),style:"width:"+me(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),h=Mr([],[d],s);return h.height=r,h.style.height=me(r),h.style.width=me(a),{type:"elem",elem:h}},Kl=.008,ua={type:"kern",size:-1*Kl},G8=new Set(["|","\\lvert","\\rvert","\\vert"]),U8=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Cm=function(t,r,s,a,c,d){var h,f,v,b,_="",z=0;h=v=b=t,f=null;var k="Size1-Regular";t==="\\uparrow"?v=b="⏐":t==="\\Uparrow"?v=b="‖":t==="\\downarrow"?h=v="⏐":t==="\\Downarrow"?h=v="‖":t==="\\updownarrow"?(h="\\uparrow",v="⏐",b="\\downarrow"):t==="\\Updownarrow"?(h="\\Uparrow",v="‖",b="\\Downarrow"):G8.has(t)?(v="∣",_="vert",z=333):U8.has(t)?(v="∥",_="doublevert",z=556):t==="["||t==="\\lbrack"?(h="⎡",v="⎢",b="⎣",k="Size4-Regular",_="lbrack",z=667):t==="]"||t==="\\rbrack"?(h="⎤",v="⎥",b="⎦",k="Size4-Regular",_="rbrack",z=667):t==="\\lfloor"||t==="⌊"?(v=h="⎢",b="⎣",k="Size4-Regular",_="lfloor",z=667):t==="\\lceil"||t==="⌈"?(h="⎡",v=b="⎢",k="Size4-Regular",_="lceil",z=667):t==="\\rfloor"||t==="⌋"?(v=h="⎥",b="⎦",k="Size4-Regular",_="rfloor",z=667):t==="\\rceil"||t==="⌉"?(h="⎤",v=b="⎥",k="Size4-Regular",_="rceil",z=667):t==="("||t==="\\lparen"?(h="⎛",v="⎜",b="⎝",k="Size4-Regular",_="lparen",z=875):t===")"||t==="\\rparen"?(h="⎞",v="⎟",b="⎠",k="Size4-Regular",_="rparen",z=875):t==="\\{"||t==="\\lbrace"?(h="⎧",f="⎨",b="⎩",v="⎪",k="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(h="⎫",f="⎬",b="⎭",v="⎪",k="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(h="⎧",b="⎩",v="⎪",k="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(h="⎫",b="⎭",v="⎪",k="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(h="⎧",b="⎭",v="⎪",k="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(h="⎫",b="⎩",v="⎪",k="Size4-Regular");var T=Ro(h,k,c),M=T.height+T.depth,F=Ro(v,k,c),P=F.height+F.depth,G=Ro(b,k,c),L=G.height+G.depth,N=0,E=1;if(f!==null){var U=Ro(f,k,c);N=U.height+U.depth,E=2}var B=M+L+N,Z=Math.max(0,Math.ceil((r-B)/(E*P))),X=B+Z*E*P,Q=a.fontMetrics().axisHeight;s&&(Q*=a.sizeMultiplier);var pe=X/2-Q,ee=[];if(_.length>0){var oe=X-M-L,fe=Math.round(X*1e3),Ce=s8(_,Math.round(oe*1e3)),De=new Ar(_,Ce),Ee=(z/1e3).toFixed(3)+"em",re=(fe/1e3).toFixed(3)+"em",ve=new nr([De],{width:Ee,height:re,viewBox:"0 0 "+z+" "+fe}),de=Mr([],[ve],a);de.height=fe/1e3,de.style.width=Ee,de.style.height=re,ee.push({type:"elem",elem:de})}else{if(ee.push(ql(b,k,c)),ee.push(ua),f===null){var C=X-M-L+2*Kl;ee.push(Tl(v,C,a))}else{var Y=(X-M-L-N)/2+2*Kl;ee.push(Tl(v,Y,a)),ee.push(ua),ee.push(ql(f,k,c)),ee.push(ua),ee.push(Tl(v,Y,a))}ee.push(ua),ee.push(ql(h,k,c))}var $e=a.havingBaseStyle(Re.TEXT),Se=Ze({positionType:"bottom",positionData:pe,children:ee});return mc(se(["delimsizing","mult"],[Se],$e),Re.TEXT,a,d)},Al=80,Ml=.08,Pl=function(t,r,s,a,c){var d=i8(t,a,s),h=new Ar(t,d),f=new nr([h],{width:"400em",height:me(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Mr(["hide-tail"],[f],c)},V8=function(t,r){var s=r.havingBaseSizing(),a=Nm("\\surd",t*s.sizeMultiplier,Bm,s),c=s.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),h,f=0,v=0,b=0,_;return a.type==="small"?(b=1e3+1e3*d+Al,t<1?c=1:t<1.4&&(c=.7),f=(1+d+Ml)/c,v=(1+d)/c,h=Pl("sqrtMain",f,b,d,r),h.style.minWidth="0.853em",_=.833/c):a.type==="large"?(b=(1e3+Al)*Eo[a.size],v=(Eo[a.size]+d)/c,f=(Eo[a.size]+d+Ml)/c,h=Pl("sqrtSize"+a.size,f,b,d,r),h.style.minWidth="1.02em",_=1/c):(f=t+d+Ml,v=t+d,b=Math.floor(1e3*t+d)+Al,h=Pl("sqrtTall",f,b,d,r),h.style.minWidth="0.742em",_=1.056),h.height=v,h.style.height=me(f),{span:h,advanceWidth:_,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*c}},Rm=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),K8=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Dm=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Eo=[0,1.2,1.8,2.4,3],Em=function(t,r,s,a,c){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Rm.has(t)||Dm.has(t))return Pm(t,r,!1,s,a,c);if(K8.has(t))return Cm(t,Eo[r],!1,s,a,c);throw new le("Illegal delimiter: '"+t+"'")},Z8=[{type:"small",style:Re.SCRIPTSCRIPT},{type:"small",style:Re.SCRIPT},{type:"small",style:Re.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Y8=[{type:"small",style:Re.SCRIPTSCRIPT},{type:"small",style:Re.SCRIPT},{type:"small",style:Re.TEXT},{type:"stack"}],Bm=[{type:"small",style:Re.SCRIPTSCRIPT},{type:"small",style:Re.SCRIPT},{type:"small",style:Re.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Q8=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Nm=function(t,r,s,a){for(var c=Math.min(2,3-a.style.size),d=c;d<s.length&&s[d].type!=="stack";d++){var h=Ro(t,Q8(s[d]),"math"),f=h.height+h.depth;if(s[d].type==="small"){var v=a.havingBaseStyle(s[d].style);f*=v.sizeMultiplier}if(f>r)return s[d]}return s[s.length-1]},Zl=function(t,r,s,a,c,d){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var h;Dm.has(t)?h=Z8:Rm.has(t)?h=Bm:h=Y8;var f=Nm(t,r,h,a);return f.type==="small"?H8(t,f.style,s,a,c,d):f.type==="large"?Pm(t,f.size,s,a,c,d):Cm(t,r,s,a,c,d)},Cl=function(t,r,s,a,c,d){var h=a.fontMetrics().axisHeight*a.sizeMultiplier,f=901,v=5/a.fontMetrics().ptPerEm,b=Math.max(r-h,s+h),_=Math.max(b/500*f,2*b-v);return Zl(t,_,!0,a,c,d)},wd={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},X8=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ta(o,t){var r=ja(o);if(r&&X8.has(r.text))return r;throw r?new le("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",o):new le("Invalid delimiter type '"+o.type+"'",o)}he({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,t)=>{var r=Ta(t[0],o);return{type:"delimsizing",mode:o.parser.mode,size:wd[o.funcName].size,mclass:wd[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,t)=>o.delim==="."?se([o.mclass]):Em(o.delim,o.size,t,o.mode,[o.mclass]),mathmlBuilder:o=>{var t=[];o.delim!=="."&&t.push(ht(o.delim,o.mode));var r=new ce("mo",t);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=me(Eo[o.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function _d(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}he({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new le("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:Ta(t[0],o).text,color:r}}});he({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ta(t[0],o),s=o.parser;++s.leftrightDepth;var a=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var c=Ne(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:a,left:r.text,right:c.delim,rightColor:c.color}},htmlBuilder:(o,t)=>{_d(o);for(var r=bn(o.body,t,!0,["mopen","mclose"]),s=0,a=0,c=!1,d=0;d<r.length;d++)r[d].isMiddle?c=!0:(s=Math.max(r[d].height,s),a=Math.max(r[d].depth,a));s*=t.sizeMultiplier,a*=t.sizeMultiplier;var h;if(o.left==="."?h=Io(t,["mopen"]):h=Cl(o.left,s,a,t,o.mode,["mopen"]),r.unshift(h),c)for(var f=1;f<r.length;f++){var v=r[f],b=v.isMiddle;b&&(r[f]=Cl(b.delim,s,a,b.options,o.mode,[]))}var _;if(o.right===".")_=Io(t,["mclose"]);else{var z=o.rightColor?t.withColor(o.rightColor):t;_=Cl(o.right,s,a,z,o.mode,["mclose"])}return r.push(_),se(["minner"],r,t)},mathmlBuilder:(o,t)=>{_d(o);var r=Qn(o.body,t);if(o.left!=="."){var s=new ce("mo",[ht(o.left,o.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(o.right!=="."){var a=new ce("mo",[ht(o.right,o.mode)]);a.setAttribute("fence","true"),o.rightColor&&a.setAttribute("mathcolor",o.rightColor),r.push(a)}return lc(r)}});he({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ta(t[0],o);if(!o.parser.leftrightDepth)throw new le("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,t)=>{var r;if(o.delim===".")r=Io(t,[]);else{r=Em(o.delim,1,t,o.mode,[]);var s={delim:o.delim,options:t};r.isMiddle=s}return r},mathmlBuilder:(o,t)=>{var r=o.delim==="\\vert"||o.delim==="|"?ht("|","text"):ht(o.delim,o.mode),s=new ce("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var pc=(o,t)=>{var r=Ni(Ve(o.body,t),t),s=o.label.slice(1),a=t.sizeMultiplier,c,d=0,h=tr(o.body);if(s==="sout")c=se(["stretchy","sout"]),c.height=t.fontMetrics().defaultRuleThickness/a,d=-.5*t.fontMetrics().xHeight;else if(s==="phase"){var f=un({number:.6,unit:"pt"},t),v=un({number:.35,unit:"ex"},t),b=t.havingBaseSizing();a=a/b.sizeMultiplier;var _=r.height+r.depth+f+v;r.style.paddingLeft=me(_/2+f);var z=Math.floor(1e3*_*a),k=t8(z),T=new nr([new Ar("phase",k)],{width:"400em",height:me(z/1e3),viewBox:"0 0 400000 "+z,preserveAspectRatio:"xMinYMin slice"});c=Mr(["hide-tail"],[T],t),c.style.height=me(_),d=r.depth+f+v}else{/cancel/.test(s)?h||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var M=0,F=0,P=0;/box/.test(s)?(P=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),M=t.fontMetrics().fboxsep+(s==="colorbox"?0:P),F=M):s==="angl"?(P=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),M=4*P,F=Math.max(0,.25-r.depth)):(M=h?.2:0,F=M),c=E8(r,s,M,F,t),/fbox|boxed|fcolorbox/.test(s)?(c.style.borderStyle="solid",c.style.borderWidth=me(P)):s==="angl"&&P!==.049&&(c.style.borderTopWidth=me(P),c.style.borderRightWidth=me(P)),d=r.depth+F,o.backgroundColor&&(c.style.backgroundColor=o.backgroundColor,o.borderColor&&(c.style.borderColor=o.borderColor))}var G;if(o.backgroundColor)G=Ze({positionType:"individualShift",children:[{type:"elem",elem:c,shift:d},{type:"elem",elem:r,shift:0}]});else{var L=/cancel|phase/.test(s)?["svg-align"]:[];G=Ze({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:c,shift:d,wrapperClasses:L}]})}return/cancel/.test(s)&&(G.height=r.height,G.depth=r.depth),/cancel/.test(s)&&!h?se(["mord","cancel-lap"],[G],t):se(["mord"],[G],t)},fc=(o,t)=>{var r=0,s=new ce(o.label.includes("colorbox")?"mpadded":"menclose",[Xe(o.body,t)]);switch(o.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);s.setAttribute("style","border: "+a+"em solid "+String(o.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&s.setAttribute("mathbackground",o.backgroundColor),s};he({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,t,r){var{parser:s,funcName:a}=o,c=Ne(t[0],"color-token").color,d=t[1];return{type:"enclose",mode:s.mode,label:a,backgroundColor:c,body:d}},htmlBuilder:pc,mathmlBuilder:fc});he({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,t,r){var{parser:s,funcName:a}=o,c=Ne(t[0],"color-token").color,d=Ne(t[1],"color-token").color,h=t[2];return{type:"enclose",mode:s.mode,label:a,backgroundColor:d,borderColor:c,body:h}},htmlBuilder:pc,mathmlBuilder:fc});he({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});he({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"enclose",mode:r.mode,label:s,body:a}},htmlBuilder:pc,mathmlBuilder:fc});he({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Im={};function Et(o){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:c,mathmlBuilder:d}=o,h={type:t,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},f=0;f<r.length;++f)Im[r[f]]=h;c&&(va[t]=c),d&&(xa[t]=d)}var Fm={};function w(o,t){Fm[o]=t}function kd(o){var t=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),t.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return t}var Aa=o=>{var t=o.parser.settings;if(!t.displayMode)throw new le("{"+o.envName+"} can be used only in display mode.")},J8=new Set(["gather","gather*"]);function hc(o){if(!o.includes("ed"))return!o.includes("*")}function Cr(o,t,r){var{hskipBeforeAndAfter:s,addJot:a,cols:c,arraystretch:d,colSeparationType:h,autoTag:f,singleRow:v,emptySingleRow:b,maxNumCols:_,leqno:z}=t;if(o.gullet.beginGroup(),v||o.gullet.macros.set("\\cr","\\\\\\relax"),!d){var k=o.gullet.expandMacroAsText("\\arraystretch");if(k==null)d=1;else if(d=parseFloat(k),!d||d<0)throw new le("Invalid \\arraystretch: "+k)}o.gullet.beginGroup();var T=[],M=[T],F=[],P=[],G=f!=null?[]:void 0;function L(){f&&o.gullet.macros.set("\\@eqnsw","1",!0)}function N(){G&&(o.gullet.macros.get("\\df@tag")?(G.push(o.subparse([new rt("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):G.push(!!f&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(L(),P.push(kd(o));;){var E=o.parseExpression(!1,v?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),E={type:"ordgroup",mode:o.mode,body:E},r&&(E={type:"styling",mode:o.mode,style:r,body:[E]}),T.push(E);var U=o.fetch().text;if(U==="&"){if(_&&T.length===_){if(v||h)throw new le("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(U==="\\end"){N(),T.length===1&&E.type==="styling"&&E.body[0].body.length===0&&(M.length>1||!b)&&M.pop(),P.length<M.length+1&&P.push([]);break}else if(U==="\\\\"){o.consume();var B=void 0;o.gullet.future().text!==" "&&(B=o.parseSizeGroup(!0)),F.push(B?B.value:null),N(),P.push(kd(o)),T=[],M.push(T),L()}else throw new le("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:a,arraystretch:d,body:M,cols:c,rowGaps:F,hskipBeforeAndAfter:s,hLinesBeforeRow:P,colSeparationType:h,tags:G,leqno:z}}function gc(o){return o.slice(0,1)==="d"?"display":"text"}var Bt=function(t,r){var s,a,c=t.body.length,d=t.hLinesBeforeRow,h=0,f=new Array(c),v=[],b=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),_=1/r.fontMetrics().ptPerEm,z=5*_;if(t.colSeparationType&&t.colSeparationType==="small"){var k=r.havingStyle(Re.SCRIPT).sizeMultiplier;z=.2778*(k/r.sizeMultiplier)}var T=t.colSeparationType==="CD"?un({number:3,unit:"ex"},r):12*_,M=3*_,F=t.arraystretch*T,P=.7*F,G=.3*F,L=0;function N(ot){for(var Xn=0;Xn<ot.length;++Xn)Xn>0&&(L+=.25),v.push({pos:L,isDashed:ot[Xn]})}for(N(d[0]),s=0;s<t.body.length;++s){var E=t.body[s],U=P,B=G;h<E.length&&(h=E.length);var Z=new Array(E.length);for(a=0;a<E.length;++a){var X=Ve(E[a],r);B<X.depth&&(B=X.depth),U<X.height&&(U=X.height),Z[a]=X}var Q=t.rowGaps[s],pe=0;Q&&(pe=un(Q,r),pe>0&&(pe+=G,B<pe&&(B=pe),pe=0)),t.addJot&&(B+=M),Z.height=U,Z.depth=B,L+=U,Z.pos=L,L+=B+pe,f[s]=Z,N(d[s+1])}var ee=L/2+r.fontMetrics().axisHeight,oe=t.cols||[],fe=[],Ce,De,Ee=[];if(t.tags&&t.tags.some(ot=>ot))for(s=0;s<c;++s){var re=f[s],ve=re.pos-ee,de=t.tags[s],C=void 0;de===!0?C=se(["eqn-num"],[],r):de===!1?C=se([],[],r):C=se([],bn(de,r,!0),r),C.depth=re.depth,C.height=re.height,Ee.push({type:"elem",elem:C,shift:ve})}for(a=0,De=0;a<h||De<oe.length;++a,++De){for(var Y=oe[De]||{},$e=!0;Y.type==="separator";){if($e||(Ce=se(["arraycolsep"],[]),Ce.style.width=me(r.fontMetrics().doubleRuleSep),fe.push(Ce)),Y.separator==="|"||Y.separator===":"){var Se=Y.separator==="|"?"solid":"dashed",ze=se(["vertical-separator"],[],r);ze.style.height=me(L),ze.style.borderRightWidth=me(b),ze.style.borderRightStyle=Se,ze.style.margin="0 "+me(-b/2);var Be=L-ee;Be&&(ze.style.verticalAlign=me(-Be)),fe.push(ze)}else throw new le("Invalid separator type: "+Y.separator);De++,Y=oe[De]||{},$e=!1}if(!(a>=h)){var Fe=void 0;if(a>0||t.hskipBeforeAndAfter){var Oe;Fe=(Oe=Y.pregap)!=null?Oe:z,Fe!==0&&(Ce=se(["arraycolsep"],[]),Ce.style.width=me(Fe),fe.push(Ce))}var be=[];for(s=0;s<c;++s){var Ie=f[s],Ae=Ie[a];if(Ae){var Rn=Ie.pos-ee;Ae.depth=Ie.depth,Ae.height=Ie.height,be.push({type:"elem",elem:Ae,shift:Rn})}}if(be=Ze({positionType:"individualShift",children:be}),be=se(["col-align-"+(Y.align||"c")],[be]),fe.push(be),a<h-1||t.hskipBeforeAndAfter){var zn;Fe=(zn=Y.postgap)!=null?zn:z,Fe!==0&&(Ce=se(["arraycolsep"],[]),Ce.style.width=me(Fe),fe.push(Ce))}}}if(f=se(["mtable"],fe),v.length>0){for(var Ln=Bi("hline",r,b),Rr=Bi("hdashline",r,b),gt=[{type:"elem",elem:f,shift:0}];v.length>0;){var yt=v.pop(),Dr=yt.pos-ee;yt.isDashed?gt.push({type:"elem",elem:Rr,shift:Dr}):gt.push({type:"elem",elem:Ln,shift:Dr})}f=Ze({positionType:"individualShift",children:gt})}if(Ee.length===0)return se(["mord"],[f],r);var jt=Ze({positionType:"individualShift",children:Ee});return jt=se(["tag"],[jt],r),ir([f,jt])},ex={c:"center ",l:"left ",r:"right "},Nt=function(t,r){for(var s=[],a=new ce("mtd",[],["mtr-glue"]),c=new ce("mtd",[],["mml-eqn-num"]),d=0;d<t.body.length;d++){for(var h=t.body[d],f=[],v=0;v<h.length;v++)f.push(new ce("mtd",[Xe(h[v],r)]));t.tags&&t.tags[d]&&(f.unshift(a),f.push(a),t.leqno?f.unshift(c):f.push(c)),s.push(new ce("mtr",f))}var b=new ce("mtable",s),_=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);b.setAttribute("rowspacing",me(_));var z="",k="";if(t.cols&&t.cols.length>0){var T=t.cols,M="",F=!1,P=0,G=T.length;T[0].type==="separator"&&(z+="top ",P=1),T[T.length-1].type==="separator"&&(z+="bottom ",G-=1);for(var L=P;L<G;L++)T[L].type==="align"?(k+=ex[T[L].align],F&&(M+="none "),F=!0):T[L].type==="separator"&&F&&(M+=T[L].separator==="|"?"solid ":"dashed ",F=!1);b.setAttribute("columnalign",k.trim()),/[sd]/.test(M)&&b.setAttribute("columnlines",M.trim())}if(t.colSeparationType==="align"){for(var N=t.cols||[],E="",U=1;U<N.length;U++)E+=U%2?"0em ":"1em ";b.setAttribute("columnspacing",E.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?b.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?b.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?b.setAttribute("columnspacing","0.5em"):b.setAttribute("columnspacing","1em");var B="",Z=t.hLinesBeforeRow;z+=Z[0].length>0?"left ":"",z+=Z[Z.length-1].length>0?"right ":"";for(var X=1;X<Z.length-1;X++)B+=Z[X].length===0?"none ":Z[X][0]?"dashed ":"solid ";return/[sd]/.test(B)&&b.setAttribute("rowlines",B.trim()),z!==""&&(b=new ce("menclose",[b]),b.setAttribute("notation",z.trim())),t.arraystretch&&t.arraystretch<1&&(b=new ce("mstyle",[b]),b.setAttribute("scriptlevel","1")),b},Lm=function(t,r){t.envName.includes("ed")||Aa(t);var s=[],a=t.envName.includes("at")?"alignat":"align",c=t.envName==="split",d=Cr(t.parser,{cols:s,addJot:!0,autoTag:c?void 0:hc(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:c?2:void 0,leqno:t.parser.settings.leqno},"display"),h,f=0,v={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var b="",_=0;_<r[0].body.length;_++){var z=Ne(r[0].body[_],"textord");b+=z.text}h=Number(b),f=h*2}var k=!f;d.body.forEach(function(P){for(var G=1;G<P.length;G+=2){var L=Ne(P[G],"styling"),N=Ne(L.body[0],"ordgroup");N.body.unshift(v)}if(k)f<P.length&&(f=P.length);else{var E=P.length/2;if(h<E)throw new le("Too many math in a row: "+("expected "+h+", but got "+E),P[0])}});for(var T=0;T<f;++T){var M="r",F=0;T%2===1?M="l":T>0&&k&&(F=1),s[T]={type:"align",align:M,pregap:F,postgap:0}}return d.colSeparationType=k?"align":"alignat",d};Et({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,t){var r=ja(t[0]),s=r?[t[0]]:Ne(t[0],"ordgroup").body,a=s.map(function(d){var h=uc(d),f=h.text;if("lcr".includes(f))return{type:"align",align:f};if(f==="|")return{type:"separator",separator:"|"};if(f===":")return{type:"separator",separator:":"};throw new le("Unknown column alignment: "+f,d)}),c={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Cr(o.parser,c,gc(o.envName))},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var a=o.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new le("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),s.cols=[{type:"align",align:r}]}}var c=Cr(o.parser,s,gc(o.envName)),d=Math.max(0,...c.body.map(h=>h.length));return c.cols=new Array(d).fill({type:"align",align:r}),t?{type:"leftright",mode:o.mode,body:[c],left:t[0],right:t[1],rightColor:void 0}:c},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var t={arraystretch:.5},r=Cr(o.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["subarray"],props:{numArgs:1},handler(o,t){var r=ja(t[0]),s=r?[t[0]]:Ne(t[0],"ordgroup").body,a=s.map(function(d){var h=uc(d),f=h.text;if("lc".includes(f))return{type:"align",align:f};throw new le("Unknown column alignment: "+f,d)});if(a.length>1)throw new le("{subarray} can contain only one column");var c={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(c=Cr(o.parser,c,"script"),c.body.length>0&&c.body[0].length>1)throw new le("{subarray} can contain only one column");return c},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Cr(o.parser,t,gc(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Lm,htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){J8.has(o.envName)&&Aa(o);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:hc(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Cr(o.parser,t,"display")},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Lm,htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){Aa(o);var t={autoTag:hc(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Cr(o.parser,t,"display")},htmlBuilder:Bt,mathmlBuilder:Nt});Et({type:"array",names:["CD"],props:{numArgs:0},handler(o){return Aa(o),L8(o.parser)},htmlBuilder:Bt,mathmlBuilder:Nt});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");he({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,t){throw new le(o.funcName+" valid only within array environment")}});var zd=Im;he({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];if(a.type!=="ordgroup")throw new le("Invalid environment name",a);for(var c="",d=0;d<a.body.length;++d)c+=Ne(a.body[d],"textord").text;if(s==="\\begin"){if(!zd.hasOwnProperty(c))throw new le("No such environment: "+c,a);var h=zd[c],{args:f,optArgs:v}=r.parseArguments("\\begin{"+c+"}",h),b={mode:r.mode,envName:c,parser:r},_=h.handler(b,f,v);r.expect("\\end",!1);var z=r.nextToken,k=Ne(r.parseFunction(),"environment");if(k.name!==c)throw new le("Mismatch: \\begin{"+c+"} matched by \\end{"+k.name+"}",z);return _}return{type:"environment",mode:r.mode,name:c,nameGroup:a}}});var Om=(o,t)=>{var r=o.font,s=t.withFont(r);return Ve(o.body,s)},Hm=(o,t)=>{var r=o.font,s=t.withFont(r);return Xe(o.body,s)},Sd={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};he({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=$a(t[0]),c=s;return c in Sd&&(c=Sd[c]),{type:"font",mode:r.mode,font:c.slice(1),body:a}},htmlBuilder:Om,mathmlBuilder:Hm});he({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"mclass",mode:r.mode,mclass:qa(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:tr(s)}}});he({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s,breakOnTokenText:a}=o,{mode:c}=r,d=r.parseExpression(!0,a),h="math"+s.slice(1);return{type:"font",mode:c,font:h,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:Om,mathmlBuilder:Hm});var nx=(o,t)=>{var r=t.style,s=r.fracNum(),a=r.fracDen(),c;c=t.havingStyle(s);var d=Ve(o.numer,c,t);if(o.continued){var h=8.5/t.fontMetrics().ptPerEm,f=3.5/t.fontMetrics().ptPerEm;d.height=d.height<h?h:d.height,d.depth=d.depth<f?f:d.depth}c=t.havingStyle(a);var v=Ve(o.denom,c,t),b,_,z;o.hasBarLine?(o.barSize?(_=un(o.barSize,t),b=Bi("frac-line",t,_)):b=Bi("frac-line",t),_=b.height,z=b.height):(b=null,_=0,z=t.fontMetrics().defaultRuleThickness);var k,T,M;r.size===Re.DISPLAY.size?(k=t.fontMetrics().num1,_>0?T=3*z:T=7*z,M=t.fontMetrics().denom1):(_>0?(k=t.fontMetrics().num2,T=z):(k=t.fontMetrics().num3,T=3*z),M=t.fontMetrics().denom2);var F;if(b){var G=t.fontMetrics().axisHeight;k-d.depth-(G+.5*_)<T&&(k+=T-(k-d.depth-(G+.5*_))),G-.5*_-(v.height-M)<T&&(M+=T-(G-.5*_-(v.height-M)));var L=-(G-.5*_);F=Ze({positionType:"individualShift",children:[{type:"elem",elem:v,shift:M},{type:"elem",elem:b,shift:L},{type:"elem",elem:d,shift:-k}]})}else{var P=k-d.depth-(v.height-M);P<T&&(k+=.5*(T-P),M+=.5*(T-P)),F=Ze({positionType:"individualShift",children:[{type:"elem",elem:v,shift:M},{type:"elem",elem:d,shift:-k}]})}c=t.havingStyle(r),F.height*=c.sizeMultiplier/t.sizeMultiplier,F.depth*=c.sizeMultiplier/t.sizeMultiplier;var N;r.size===Re.DISPLAY.size?N=t.fontMetrics().delim1:r.size===Re.SCRIPTSCRIPT.size?N=t.havingStyle(Re.SCRIPT).fontMetrics().delim2:N=t.fontMetrics().delim2;var E,U;return o.leftDelim==null?E=Io(t,["mopen"]):E=Zl(o.leftDelim,N,!0,t.havingStyle(r),o.mode,["mopen"]),o.continued?U=se([]):o.rightDelim==null?U=Io(t,["mclose"]):U=Zl(o.rightDelim,N,!0,t.havingStyle(r),o.mode,["mclose"]),se(["mord"].concat(c.sizingClasses(t)),[E,se(["mfrac"],[F]),U],t)},tx=(o,t)=>{var r=new ce("mfrac",[Xe(o.numer,t),Xe(o.denom,t)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var s=un(o.barSize,t);r.setAttribute("linethickness",me(s))}if(o.leftDelim!=null||o.rightDelim!=null){var a=[];if(o.leftDelim!=null){var c=new ce("mo",[new yn(o.leftDelim.replace("\\",""))]);c.setAttribute("fence","true"),a.push(c)}if(a.push(r),o.rightDelim!=null){var d=new ce("mo",[new yn(o.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),a.push(d)}return lc(a)}return r},Wm=(o,t)=>{if(!t)return o;var r={type:"styling",mode:o.mode,style:t,body:[o]};return r};he({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0],c=t[1],d,h=null,f=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,h="(",f=")";break;case"\\\\bracefrac":d=!1,h="\\{",f="\\}";break;case"\\\\brackfrac":d=!1,h="[",f="]";break;default:throw new Error("Unrecognized genfrac command")}var v=s==="\\cfrac",b=null;return v||s.startsWith("\\d")?b="display":s.startsWith("\\t")&&(b="text"),Wm({type:"genfrac",mode:r.mode,numer:a,denom:c,continued:v,hasBarLine:d,leftDelim:h,rightDelim:f,barSize:null},b)},htmlBuilder:nx,mathmlBuilder:tx});he({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:t,funcName:r,token:s}=o,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:s}}});var jd=["display","text","script","scriptscript"],qd=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};he({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,t){var{parser:r}=o,s=t[4],a=t[5],c=$a(t[0]),d=c.type==="atom"&&c.family==="open"?qd(c.text):null,h=$a(t[1]),f=h.type==="atom"&&h.family==="close"?qd(h.text):null,v=Ne(t[2],"size"),b,_=null;v.isBlank?b=!0:(_=v.value,b=_.number>0);var z=null,k=t[3];if(k.type==="ordgroup"){if(k.body.length>0){var T=Ne(k.body[0],"textord");z=jd[Number(T.text)]}}else k=Ne(k,"textord"),z=jd[Number(k.text)];return Wm({type:"genfrac",mode:r.mode,numer:s,denom:a,continued:!1,hasBarLine:b,barSize:_,leftDelim:d,rightDelim:f},z)}});he({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,t){var{parser:r,funcName:s,token:a}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Ne(t[0],"size").value,token:a}}});he({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0],c=Ne(t[1],"infix").size;if(!c)throw new Error("\\\\abovefrac expected size, but got "+String(c));var d=t[2],h=c.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:d,continued:!1,hasBarLine:h,barSize:c,leftDelim:null,rightDelim:null}}});var Gm=(o,t)=>{var r=t.style,s,a;o.type==="supsub"?(s=o.sup?Ve(o.sup,t.havingStyle(r.sup()),t):Ve(o.sub,t.havingStyle(r.sub()),t),a=Ne(o.base,"horizBrace")):a=Ne(o,"horizBrace");var c=Ve(a.base,t.havingBaseStyle(Re.DISPLAY)),d=Sa(a,t),h;if(a.isOver?(h=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:.1},{type:"elem",elem:d}]}),h.children[0].children[0].children[1].classes.push("svg-align")):(h=Ze({positionType:"bottom",positionData:c.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:c}]}),h.children[0].children[0].children[0].classes.push("svg-align")),s){var f=se(["mord",a.isOver?"mover":"munder"],[h],t);a.isOver?h=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:f},{type:"kern",size:.2},{type:"elem",elem:s}]}):h=Ze({positionType:"bottom",positionData:f.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:f}]})}return se(["mord",a.isOver?"mover":"munder"],[h],t)},rx=(o,t)=>{var r=za(o.label);return new ce(o.isOver?"mover":"munder",[Xe(o.base,t),r])};he({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:s}=o;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:t[0]}},htmlBuilder:Gm,mathmlBuilder:rx});he({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[1],a=Ne(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:hn(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,t)=>{var r=bn(o.body,t,!1);return $8(o.href,[],r,t)},mathmlBuilder:(o,t)=>{var r=Pr(o.body,t);return r instanceof ce||(r=new ce("mrow",[r])),r.setAttribute("href",o.href),r}});he({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=Ne(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var a=[],c=0;c<s.length;c++){var d=s[c];d==="~"&&(d="\\textasciitilde"),a.push({type:"textord",mode:"text",text:d})}var h={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:s,body:hn(h)}}});he({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,t){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:hn(t[0])}},htmlBuilder(o,t){var r=bn(o.body,t,!1);return ir(r)},mathmlBuilder(o,t){return new ce("mrow",Qn(o.body,t))}});he({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s,token:a}=o,c=Ne(t[0],"raw").string,d=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var h,f={};switch(s){case"\\htmlClass":f.class=c,h={command:"\\htmlClass",class:c};break;case"\\htmlId":f.id=c,h={command:"\\htmlId",id:c};break;case"\\htmlStyle":f.style=c,h={command:"\\htmlStyle",style:c};break;case"\\htmlData":{for(var v=c.split(","),b=0;b<v.length;b++){var _=v[b],z=_.indexOf("=");if(z<0)throw new le("\\htmlData key/value '"+_+"' missing equals sign");var k=_.slice(0,z),T=_.slice(z+1);f["data-"+k.trim()]=T}h={command:"\\htmlData",attributes:f};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(h)?{type:"html",mode:r.mode,attributes:f,body:hn(d)}:r.formatUnsupportedCmd(s)},htmlBuilder:(o,t)=>{var r=bn(o.body,t,!1),s=["enclosing"];o.attributes.class&&s.push(...o.attributes.class.trim().split(/\s+/));var a=se(s,r,t);for(var c in o.attributes)c!=="class"&&o.attributes.hasOwnProperty(c)&&a.setAttribute(c,o.attributes[c]);return a},mathmlBuilder:(o,t)=>Pr(o.body,t)});he({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:hn(t[0]),mathml:hn(t[1])}},htmlBuilder:(o,t)=>{var r=bn(o.html,t,!1);return ir(r)},mathmlBuilder:(o,t)=>Pr(o.mathml,t)});var Rl=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new le("Invalid size: '"+t+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!cm(s))throw new le("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};he({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,t,r)=>{var{parser:s}=o,a={number:0,unit:"em"},c={number:.9,unit:"em"},d={number:0,unit:"em"},h="";if(r[0])for(var f=Ne(r[0],"raw").string,v=f.split(","),b=0;b<v.length;b++){var _=v[b].split("=");if(_.length===2){var z=_[1].trim();switch(_[0].trim()){case"alt":h=z;break;case"width":a=Rl(z);break;case"height":c=Rl(z);break;case"totalheight":d=Rl(z);break;default:throw new le("Invalid key: '"+_[0]+"' in \\includegraphics.")}}}var k=Ne(t[0],"url").url;return h===""&&(h=k,h=h.replace(/^.*[\\/]/,""),h=h.substring(0,h.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:k})?{type:"includegraphics",mode:s.mode,alt:h,width:a,height:c,totalheight:d,src:k}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,t)=>{var r=un(o.height,t),s=0;o.totalheight.number>0&&(s=un(o.totalheight,t)-r);var a=0;o.width.number>0&&(a=un(o.width,t));var c={height:me(r+s)};a>0&&(c.width=me(a)),s>0&&(c.verticalAlign=me(-s));var d=new m8(o.src,o.alt,c);return d.height=r,d.depth=s,d},mathmlBuilder:(o,t)=>{var r=new ce("mglyph",[]);r.setAttribute("alt",o.alt);var s=un(o.height,t),a=0;if(o.totalheight.number>0&&(a=un(o.totalheight,t)-s,r.setAttribute("valign",me(-a))),r.setAttribute("height",me(s+a)),o.width.number>0){var c=un(o.width,t);r.setAttribute("width",me(c))}return r.setAttribute("src",o.src),r}});he({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:s}=o,a=Ne(t[0],"size");if(r.settings.strict){var c=s[1]==="m",d=a.value.unit==="mu";c?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(o,t){return hm(o.dimension,t)},mathmlBuilder(o,t){var r=un(o.dimension,t);return new bm(r)}});he({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:a}},htmlBuilder:(o,t)=>{var r;o.alignment==="clap"?(r=se([],[Ve(o.body,t)]),r=se(["inner"],[r],t)):r=se(["inner"],[Ve(o.body,t)]);var s=se(["fix"],[]),a=se([o.alignment],[r,s],t),c=se(["strut"]);return c.style.height=me(a.height+a.depth),a.depth&&(c.style.verticalAlign=me(-a.depth)),a.children.unshift(c),a=se(["thinbox"],[a],t),se(["mord","vbox"],[a],t)},mathmlBuilder:(o,t)=>{var r=new ce("mpadded",[Xe(o.body,t)]);if(o.alignment!=="rlap"){var s=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});he({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){var{funcName:r,parser:s}=o,a=s.mode;s.switchMode("math");var c=r==="\\("?"\\)":"$",d=s.parseExpression(!1,c);return s.expect(c),s.switchMode(a),{type:"styling",mode:s.mode,style:"text",body:d}}});he({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){throw new le("Mismatched "+o.funcName)}});var Td=(o,t)=>{switch(t.style.size){case Re.DISPLAY.size:return o.display;case Re.TEXT.size:return o.text;case Re.SCRIPT.size:return o.script;case Re.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};he({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:hn(t[0]),text:hn(t[1]),script:hn(t[2]),scriptscript:hn(t[3])}},htmlBuilder:(o,t)=>{var r=Td(o,t),s=bn(r,t,!1);return ir(s)},mathmlBuilder:(o,t)=>{var r=Td(o,t);return Pr(r,t)}});var Um=(o,t,r,s,a,c,d)=>{o=se([],[o]);var h=r&&tr(r),f,v;if(t){var b=Ve(t,s.havingStyle(a.sup()),s);v={elem:b,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-b.depth)}}if(r){var _=Ve(r,s.havingStyle(a.sub()),s);f={elem:_,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-_.height)}}var z;if(v&&f){var k=s.fontMetrics().bigOpSpacing5+f.elem.height+f.elem.depth+f.kern+o.depth+d;z=Ze({positionType:"bottom",positionData:k,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:f.elem,marginLeft:me(-c)},{type:"kern",size:f.kern},{type:"elem",elem:o},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:me(c)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(f){var T=o.height-d;z=Ze({positionType:"top",positionData:T,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:f.elem,marginLeft:me(-c)},{type:"kern",size:f.kern},{type:"elem",elem:o}]})}else if(v){var M=o.depth+d;z=Ze({positionType:"bottom",positionData:M,children:[{type:"elem",elem:o},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:me(c)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return o;var F=[z];if(f&&c!==0&&!h){var P=se(["mspace"],[],s);P.style.marginRight=me(c),F.unshift(P)}return se(["mop","op-limits"],F,s)},Vm=new Set(["\\smallint"]),Fi=(o,t)=>{var r,s,a=!1,c;o.type==="supsub"?(r=o.sup,s=o.sub,c=Ne(o.base,"op"),a=!0):c=Ne(o,"op");var d=t.style,h=!1;d.size===Re.DISPLAY.size&&c.symbol&&!Vm.has(c.name)&&(h=!0);var f;if(c.symbol){var v=h?"Size2-Regular":"Size1-Regular",b="";if((c.name==="\\oiint"||c.name==="\\oiiint")&&(b=c.name.slice(1),c.name=b==="oiint"?"\\iint":"\\iiint"),f=Nn(c.name,v,"math",t,["mop","op-symbol",h?"large-op":"small-op"]),b.length>0){var _=f.italic,z=ym(b+"Size"+(h?"2":"1"),t);f=Ze({positionType:"individualShift",children:[{type:"elem",elem:f,shift:0},{type:"elem",elem:z,shift:h?.08:0}]}),c.name="\\"+b,f.classes.unshift("mop"),f.italic=_}}else if(c.body){var k=bn(c.body,t,!0);k.length===1&&k[0]instanceof ft?(f=k[0],f.classes[0]="mop"):f=se(["mop"],k,t)}else{for(var T=[],M=1;M<c.name.length;M++)T.push(sc(c.name[M],c.mode,t));f=se(["mop"],T,t)}var F=0,P=0;return(f instanceof ft||c.name==="\\oiint"||c.name==="\\oiiint")&&!c.suppressBaseShift&&(F=(f.height-f.depth)/2-t.fontMetrics().axisHeight,P=f.italic),a?Um(f,r,s,t,d,P,F):(F&&(f.style.position="relative",f.style.top=me(F)),f)},Ho=(o,t)=>{var r;if(o.symbol)r=new ce("mo",[ht(o.name,o.mode)]),Vm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new ce("mo",Qn(o.body,t));else{r=new ce("mi",[new yn(o.name.slice(1))]);var s=new ce("mo",[ht("⁡","text")]);o.parentIsSupSub?r=new ce("mrow",[r,s]):r=$m([r,s])}return r},ix={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};he({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=s;return a.length===1&&(a=ix[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Fi,mathmlBuilder:Ho});he({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:hn(s)}},htmlBuilder:Fi,mathmlBuilder:Ho});var ox={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};he({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Fi,mathmlBuilder:Ho});he({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Fi,mathmlBuilder:Ho});he({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:t,funcName:r}=o,s=r;return s.length===1&&(s=ox[s]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Fi,mathmlBuilder:Ho});var Km=(o,t)=>{var r,s,a=!1,c;o.type==="supsub"?(r=o.sup,s=o.sub,c=Ne(o.base,"operatorname"),a=!0):c=Ne(o,"operatorname");var d;if(c.body.length>0){for(var h=c.body.map(_=>{var z=_.text;return typeof z=="string"?{type:"textord",mode:_.mode,text:z}:_}),f=bn(h,t.withFont("mathrm"),!0),v=0;v<f.length;v++){var b=f[v];b instanceof ft&&(b.text=b.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=se(["mop"],f,t)}else d=se(["mop"],[],t);return a?Um(d,r,s,t,t.style,0,0):d},sx=(o,t)=>{for(var r=Qn(o.body,t.withFont("mathrm")),s=!0,a=0;a<r.length;a++){var c=r[a];if(!(c instanceof bm))if(c instanceof ce)switch(c.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=c.children[0];c.children.length===1&&d instanceof yn?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var h=r.map(b=>b.toText()).join("");r=[new yn(h)]}var f=new ce("mi",r);f.setAttribute("mathvariant","normal");var v=new ce("mo",[ht("⁡","text")]);return o.parentIsSupSub?new ce("mrow",[f,v]):$m([f,v])};he({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:s}=o,a=t[0];return{type:"operatorname",mode:r.mode,body:hn(a),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:Km,mathmlBuilder:sx});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ri({type:"ordgroup",htmlBuilder(o,t){return o.semisimple?ir(bn(o.body,t,!1)):se(["mord"],bn(o.body,t,!0),t)},mathmlBuilder(o,t){return Pr(o.body,t,!0)}});he({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,t){var{parser:r}=o,s=t[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(o,t){var r=Ve(o.body,t.havingCrampedStyle()),s=Bi("overline-line",t),a=t.fontMetrics().defaultRuleThickness,c=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}]});return se(["mord","overline"],[c],t)},mathmlBuilder(o,t){var r=new ce("mo",[new yn("‾")]);r.setAttribute("stretchy","true");var s=new ce("mover",[Xe(o.body,t),r]);return s.setAttribute("accent","true"),s}});he({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"phantom",mode:r.mode,body:hn(s)}},htmlBuilder:(o,t)=>{var r=bn(o.body,t.withPhantom(),!1);return ir(r)},mathmlBuilder:(o,t)=>{var r=Qn(o.body,t);return new ce("mphantom",r)}});he({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(o,t)=>{var r=se([],[Ve(o.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),se(["mord"],[r],t)},mathmlBuilder:(o,t)=>{var r=Qn(hn(o.body),t),s=new ce("mphantom",r),a=new ce("mpadded",[s]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});he({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,s=t[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(o,t)=>{var r=se(["inner"],[Ve(o.body,t.withPhantom())]),s=se(["fix"],[]);return se(["mord","rlap"],[r,s],t)},mathmlBuilder:(o,t)=>{var r=Qn(hn(o.body),t),s=new ce("mphantom",r),a=new ce("mpadded",[s]);return a.setAttribute("width","0px"),a}});he({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o,s=Ne(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:s,body:a}},htmlBuilder(o,t){var r=Ve(o.body,t),s=un(o.dy,t);return Ze({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){var r=new ce("mpadded",[Xe(o.body,t)]),s=o.dy.number+o.dy.unit;return r.setAttribute("voffset",s),r}});he({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:t}=o;return{type:"internal",mode:t.mode}}});he({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,t,r){var{parser:s}=o,a=r[0],c=Ne(t[0],"size"),d=Ne(t[1],"size");return{type:"rule",mode:s.mode,shift:a&&Ne(a,"size").value,width:c.value,height:d.value}},htmlBuilder(o,t){var r=se(["mord","rule"],[],t),s=un(o.width,t),a=un(o.height,t),c=o.shift?un(o.shift,t):0;return r.style.borderRightWidth=me(s),r.style.borderTopWidth=me(a),r.style.bottom=me(c),r.width=s,r.height=a+c,r.depth=-c,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(o,t){var r=un(o.width,t),s=un(o.height,t),a=o.shift?un(o.shift,t):0,c=t.color&&t.getColor()||"black",d=new ce("mspace");d.setAttribute("mathbackground",c),d.setAttribute("width",me(r)),d.setAttribute("height",me(s));var h=new ce("mpadded",[d]);return a>=0?h.setAttribute("height",me(a)):(h.setAttribute("height",me(a)),h.setAttribute("depth",me(-a))),h.setAttribute("voffset",me(a)),h}});function Zm(o,t,r){for(var s=bn(o,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,c=0;c<s.length;c++){var d=s[c].classes.indexOf("sizing");d<0?Array.prototype.push.apply(s[c].classes,t.sizingClasses(r)):s[c].classes[d+1]==="reset-size"+t.size&&(s[c].classes[d+1]="reset-size"+r.size),s[c].height*=a,s[c].depth*=a}return ir(s)}var Ad=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],ax=(o,t)=>{var r=t.havingSize(o.size);return Zm(o.body,r,t)};he({type:"sizing",names:Ad,props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{breakOnTokenText:r,funcName:s,parser:a}=o,c=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:Ad.indexOf(s)+1,body:c}},htmlBuilder:ax,mathmlBuilder:(o,t)=>{var r=t.havingSize(o.size),s=Qn(o.body,r),a=new ce("mstyle",s);return a.setAttribute("mathsize",me(r.sizeMultiplier)),a}});he({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,t,r)=>{var{parser:s}=o,a=!1,c=!1,d=r[0]&&Ne(r[0],"ordgroup");if(d)for(var h="",f=0;f<d.body.length;++f){var v=d.body[f];if(h=v.text,h==="t")a=!0;else if(h==="b")c=!0;else{a=!1,c=!1;break}}else a=!0,c=!0;var b=t[0];return{type:"smash",mode:s.mode,body:b,smashHeight:a,smashDepth:c}},htmlBuilder:(o,t)=>{var r=se([],[Ve(o.body,t)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var c=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return se(["mord"],[c],t)},mathmlBuilder:(o,t)=>{var r=new ce("mpadded",[Xe(o.body,t)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});he({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:s}=o,a=r[0],c=t[0];return{type:"sqrt",mode:s.mode,body:c,index:a}},htmlBuilder(o,t){var r=Ve(o.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Ni(r,t);var s=t.fontMetrics(),a=s.defaultRuleThickness,c=a;t.style.id<Re.TEXT.id&&(c=t.fontMetrics().xHeight);var d=a+c/4,h=r.height+r.depth+d+a,{span:f,ruleWidth:v,advanceWidth:b}=V8(h,t),_=f.height-v;_>r.height+r.depth+d&&(d=(d+_-r.height-r.depth)/2);var z=f.height-r.height-d-v;r.style.paddingLeft=me(b);var k=Ze({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+z)},{type:"elem",elem:f},{type:"kern",size:v}]});if(o.index){var T=t.havingStyle(Re.SCRIPTSCRIPT),M=Ve(o.index,T,t),F=.6*(k.height-k.depth),P=Ze({positionType:"shift",positionData:-F,children:[{type:"elem",elem:M}]}),G=se(["root"],[P]);return se(["mord","sqrt"],[G,k],t)}else return se(["mord","sqrt"],[k],t)},mathmlBuilder(o,t){var{body:r,index:s}=o;return s?new ce("mroot",[Xe(r,t),Xe(s,t)]):new ce("msqrt",[Xe(r,t)])}});var Md={display:Re.DISPLAY,text:Re.TEXT,script:Re.SCRIPT,scriptscript:Re.SCRIPTSCRIPT};he({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,t){var{breakOnTokenText:r,funcName:s,parser:a}=o,c=a.parseExpression(!0,r),d=s.slice(1,s.length-5);return{type:"styling",mode:a.mode,style:d,body:c}},htmlBuilder(o,t){var r=Md[o.style],s=t.havingStyle(r).withFont("");return Zm(o.body,s,t)},mathmlBuilder(o,t){var r=Md[o.style],s=t.havingStyle(r),a=Qn(o.body,s),c=new ce("mstyle",a),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},h=d[o.style];return c.setAttribute("scriptlevel",h[0]),c.setAttribute("displaystyle",h[1]),c}});var lx=function(t,r){var s=t.base;if(s)if(s.type==="op"){var a=s.limits&&(r.style.size===Re.DISPLAY.size||s.alwaysHandleSupSub);return a?Fi:null}else if(s.type==="operatorname"){var c=s.alwaysHandleSupSub&&(r.style.size===Re.DISPLAY.size||s.limits);return c?Km:null}else{if(s.type==="accent")return tr(s.base)?dc:null;if(s.type==="horizBrace"){var d=!t.sub;return d===s.isOver?Gm:null}else return null}else return null};ri({type:"supsub",htmlBuilder(o,t){var r=lx(o,t);if(r)return r(o,t);var{base:s,sup:a,sub:c}=o,d=Ve(s,t),h,f,v=t.fontMetrics(),b=0,_=0,z=s&&tr(s);if(a){var k=t.havingStyle(t.style.sup());h=Ve(a,k,t),z||(b=d.height-k.fontMetrics().supDrop*k.sizeMultiplier/t.sizeMultiplier)}if(c){var T=t.havingStyle(t.style.sub());f=Ve(c,T,t),z||(_=d.depth+T.fontMetrics().subDrop*T.sizeMultiplier/t.sizeMultiplier)}var M;t.style===Re.DISPLAY?M=v.sup1:t.style.cramped?M=v.sup3:M=v.sup2;var F=t.sizeMultiplier,P=me(.5/v.ptPerEm/F),G=null;if(f){var L=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(d instanceof ft||L)&&(G=me(-d.italic))}var N;if(h&&f){b=Math.max(b,M,h.depth+.25*v.xHeight),_=Math.max(_,v.sub2);var E=v.defaultRuleThickness,U=4*E;if(b-h.depth-(f.height-_)<U){_=U-(b-h.depth)+f.height;var B=.8*v.xHeight-(b-h.depth);B>0&&(b+=B,_-=B)}var Z=[{type:"elem",elem:f,shift:_,marginRight:P,marginLeft:G},{type:"elem",elem:h,shift:-b,marginRight:P}];N=Ze({positionType:"individualShift",children:Z})}else if(f){_=Math.max(_,v.sub1,f.height-.8*v.xHeight);var X=[{type:"elem",elem:f,marginLeft:G,marginRight:P}];N=Ze({positionType:"shift",positionData:_,children:X})}else if(h)b=Math.max(b,M,h.depth+.25*v.xHeight),N=Ze({positionType:"shift",positionData:-b,children:[{type:"elem",elem:h,marginRight:P}]});else throw new Error("supsub must have either sup or sub.");var Q=Gl(d,"right")||"mord";return se([Q],[d,se(["msupsub"],[N])],t)},mathmlBuilder(o,t){var r=!1,s,a;o.base&&o.base.type==="horizBrace"&&(a=!!o.sup,a===o.base.isOver&&(r=!0,s=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var c=[Xe(o.base,t)];o.sub&&c.push(Xe(o.sub,t)),o.sup&&c.push(Xe(o.sup,t));var d;if(r)d=s?"mover":"munder";else if(o.sub)if(o.sup){var v=o.base;v&&v.type==="op"&&v.limits&&t.style===Re.DISPLAY||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(t.style===Re.DISPLAY||v.limits)?d="munderover":d="msubsup"}else{var f=o.base;f&&f.type==="op"&&f.limits&&(t.style===Re.DISPLAY||f.alwaysHandleSupSub)||f&&f.type==="operatorname"&&f.alwaysHandleSupSub&&(f.limits||t.style===Re.DISPLAY)?d="munder":d="msub"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(t.style===Re.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||t.style===Re.DISPLAY)?d="mover":d="msup"}return new ce(d,c)}});ri({type:"atom",htmlBuilder(o,t){return sc(o.text,o.mode,t,["m"+o.family])},mathmlBuilder(o,t){var r=new ce("mo",[ht(o.text,o.mode)]);if(o.family==="bin"){var s=cc(o,t);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var Ym={mi:"italic",mn:"normal",mtext:"normal"};ri({type:"mathord",htmlBuilder(o,t){return ka(o,t,"mathord")},mathmlBuilder(o,t){var r=new ce("mi",[ht(o.text,o.mode,t)]),s=cc(o,t)||"italic";return s!==Ym[r.type]&&r.setAttribute("mathvariant",s),r}});ri({type:"textord",htmlBuilder(o,t){return ka(o,t,"textord")},mathmlBuilder(o,t){var r=ht(o.text,o.mode,t),s=cc(o,t)||"normal",a;return o.mode==="text"?a=new ce("mtext",[r]):/[0-9]/.test(o.text)?a=new ce("mn",[r]):o.text==="\\prime"?a=new ce("mo",[r]):a=new ce("mi",[r]),s!==Ym[a.type]&&a.setAttribute("mathvariant",s),a}});var Dl={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},El={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ri({type:"spacing",htmlBuilder(o,t){if(El.hasOwnProperty(o.text)){var r=El[o.text].className||"";if(o.mode==="text"){var s=ka(o,t,"textord");return s.classes.push(r),s}else return se(["mspace",r],[sc(o.text,o.mode,t)],t)}else{if(Dl.hasOwnProperty(o.text))return se(["mspace",Dl[o.text]],[],t);throw new le('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,t){var r;if(El.hasOwnProperty(o.text))r=new ce("mtext",[new yn(" ")]);else{if(Dl.hasOwnProperty(o.text))return new ce("mspace");throw new le('Unknown type of space "'+o.text+'"')}return r}});var Pd=()=>{var o=new ce("mtd",[]);return o.setAttribute("width","50%"),o};ri({type:"tag",mathmlBuilder(o,t){var r=new ce("mtable",[new ce("mtr",[Pd(),new ce("mtd",[Pr(o.body,t)]),Pd(),new ce("mtd",[Pr(o.tag,t)])])]);return r.setAttribute("width","100%"),r}});var Cd={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Rd={"\\textbf":"textbf","\\textmd":"textmd"},cx={"\\textit":"textit","\\textup":"textup"},Dd=(o,t)=>{var r=o.font;if(r){if(Cd[r])return t.withTextFontFamily(Cd[r]);if(Rd[r])return t.withTextFontWeight(Rd[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(cx[r])};he({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:s}=o,a=t[0];return{type:"text",mode:r.mode,body:hn(a),font:s}},htmlBuilder(o,t){var r=Dd(o,t),s=bn(o.body,r,!0);return se(["mord","text"],s,r)},mathmlBuilder(o,t){var r=Dd(o,t);return Pr(o.body,r)}});he({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ve(o.body,t),s=Bi("underline-line",t),a=t.fontMetrics().defaultRuleThickness,c=Ze({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:s},{type:"kern",size:3*a},{type:"elem",elem:r}]});return se(["mord","underline"],[c],t)},mathmlBuilder(o,t){var r=new ce("mo",[new yn("‾")]);r.setAttribute("stretchy","true");var s=new ce("munder",[Xe(o.body,t),r]);return s.setAttribute("accentunder","true"),s}});he({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ve(o.body,t),s=t.fontMetrics().axisHeight,a=.5*(r.height-s-(r.depth+s));return Ze({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){return new ce("mpadded",[Xe(o.body,t)],["vcenter"])}});he({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,t,r){throw new le("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,t){for(var r=Ed(o),s=[],a=t.havingStyle(t.style.text()),c=0;c<r.length;c++){var d=r[c];d==="~"&&(d="\\textasciitilde"),s.push(Nn(d,"Typewriter-Regular",o.mode,a,["mord","texttt"]))}return se(["mord","text"].concat(a.sizingClasses(t)),fm(s),a)},mathmlBuilder(o,t){var r=new yn(Ed(o)),s=new ce("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var Ed=o=>o.body.replace(/ /g,o.star?"␣":" "),qr=vm,Qm=`[ \r
	]`,ux="\\\\[a-zA-Z@]+",dx="\\\\[^\uD800-\uDFFF]",mx="("+ux+")"+Qm+"*",px=`\\\\(
|[ \r	]+
?)[ \r	]*`,Yl="[̀-ͯ]",fx=new RegExp(Yl+"+$"),hx="("+Qm+"+)|"+(px+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Yl+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Yl+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+mx)+("|"+dx+")");class Bd{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(hx,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new rt("EOF",new Yn(this,r,r));var s=this.tokenRegex.exec(t);if(s===null||s.index!==r)throw new le("Unexpected character: '"+t[r]+"'",new rt(t[r],new Yn(this,r,r+1)));var a=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[a]===14){var c=t.indexOf(`
`,this.tokenRegex.lastIndex);return c===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=c+1,this.lex()}return new rt(a,new Yn(this,r,this.tokenRegex.lastIndex))}}class gx{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new le("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,s){if(s===void 0&&(s=!1),s){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var c=this.undefStack[this.undefStack.length-1];c&&!c.hasOwnProperty(t)&&(c[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var yx=Fm;w("\\noexpand",function(o){var t=o.popToken();return o.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});w("\\expandafter",function(o){var t=o.popToken();return o.expandOnce(!0),{tokens:[t],numArgs:0}});w("\\@firstoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[0],numArgs:0}});w("\\@secondoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[1],numArgs:0}});w("\\@ifnextchar",function(o){var t=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(o){var t=o.consumeArgs(2);return o.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Nd={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(o){var t=o.popToken(),r,s="";if(t.text==="'")r=8,t=o.popToken();else if(t.text==='"')r=16,t=o.popToken();else if(t.text==="`")if(t=o.popToken(),t.text[0]==="\\")s=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new le("\\char` missing argument");s=t.text.charCodeAt(0)}else r=10;if(r){if(s=Nd[t.text],s==null||s>=r)throw new le("Invalid base-"+r+" digit "+t.text);for(var a;(a=Nd[o.future().text])!=null&&a<r;)s*=r,s+=a,o.popToken()}return"\\@char{"+s+"}"});var yc=(o,t,r,s)=>{var a=o.consumeArg().tokens;if(a.length!==1)throw new le("\\newcommand's first argument must be a macro name");var c=a[0].text,d=o.isDefined(c);if(d&&!t)throw new le("\\newcommand{"+c+"} attempting to redefine "+(c+"; use \\renewcommand"));if(!d&&!r)throw new le("\\renewcommand{"+c+"} when command "+c+" does not yet exist; use \\newcommand");var h=0;if(a=o.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var f="",v=o.expandNextToken();v.text!=="]"&&v.text!=="EOF";)f+=v.text,v=o.expandNextToken();if(!f.match(/^\s*[0-9]+\s*$/))throw new le("Invalid number of arguments: "+f);h=parseInt(f),a=o.consumeArg().tokens}return d&&s||o.macros.set(c,{tokens:a,numArgs:h}),""};w("\\newcommand",o=>yc(o,!1,!0,!1));w("\\renewcommand",o=>yc(o,!0,!1,!1));w("\\providecommand",o=>yc(o,!0,!0,!0));w("\\message",o=>{var t=o.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});w("\\errmessage",o=>{var t=o.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});w("\\show",o=>{var t=o.popToken(),r=t.text;return console.log(t,o.macros.get(r),qr[r],nn.math[r],nn.text[r]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("·","\\cdotp");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("️","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var Id={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},vx=new Set(["bin","rel"]);w("\\dots",function(o){var t="\\dotso",r=o.expandAfterFuture().text;return r in Id?t=Id[r]:(r.slice(0,4)==="\\not"||r in nn.math&&vx.has(nn.math[r].group))&&(t="\\dotsb"),t});var vc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(o){var t=o.future().text;return t in vc?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(o){var t=o.future().text;return t in vc&&t!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(o){var t=o.future().text;return t in vc?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new le("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Xm=me(Dt["Main-Regular"][84][1]-.7*Dt["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Xm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Xm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var Jm=o=>t=>{var r=t.consumeArg().tokens,s=t.consumeArg().tokens,a=t.consumeArg().tokens,c=t.consumeArg().tokens,d=t.macros.get("|"),h=t.macros.get("\\|");t.macros.beginGroup();var f=_=>z=>{o&&(z.macros.set("|",d),a.length&&z.macros.set("\\|",h));var k=_;if(!_&&a.length){var T=z.future();T.text==="|"&&(z.popToken(),k=!0)}return{tokens:k?a:s,numArgs:0}};t.macros.set("|",f(!1)),a.length&&t.macros.set("\\|",f(!0));var v=t.consumeArg().tokens,b=t.expandTokens([...c,...v,...r]);return t.macros.endGroup(),{tokens:b.reverse(),numArgs:0}};w("\\bra@ket",Jm(!1));w("\\bra@set",Jm(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var ep={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class xx{constructor(t,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new gx(yx,r.macros),this.mode=s,this.stack=[]}feed(t){this.lexer=new Bd(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,s,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:s}=this.consumeArg(["]"])}else({tokens:a,start:r,end:s}=this.consumeArg());return this.pushToken(new rt("EOF",s.loc)),this.pushTokens(a),new rt("",Yn.range(r,s))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],s=t&&t.length>0;s||this.consumeSpaces();var a=this.future(),c,d=0,h=0;do{if(c=this.popToken(),r.push(c),c.text==="{")++d;else if(c.text==="}"){if(--d,d===-1)throw new le("Extra }",c)}else if(c.text==="EOF")throw new le("Unexpected end of input in a macro argument, expected '"+(t&&s?t[h]:"}")+"'",c);if(t&&s)if((d===0||d===1&&t[h]==="{")&&c.text===t[h]){if(++h,h===t.length){r.splice(-h,h);break}}else h=0}while(d!==0||s);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:c}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new le("The length of delimiters doesn't match the number of args!");for(var s=r[0],a=0;a<s.length;a++){var c=this.popToken();if(s[a]!==c.text)throw new le("Use of the macro doesn't match its definition",c)}}for(var d=[],h=0;h<t;h++)d.push(this.consumeArg(r&&r[h+1]).tokens);return d}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new le("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),s=r.text,a=r.noexpand?null:this._getExpansion(s);if(a==null||t&&a.unexpandable){if(t&&a==null&&s[0]==="\\"&&!this.isDefined(s))throw new le("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var c=a.tokens,d=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){c=c.slice();for(var h=c.length-1;h>=0;--h){var f=c[h];if(f.text==="#"){if(h===0)throw new le("Incomplete placeholder at end of macro body",f);if(f=c[--h],f.text==="#")c.splice(h+1,1);else if(/^[1-9]$/.test(f.text))c.splice(h,2,...d[+f.text-1]);else throw new le("Not a valid argument number",f)}}}return this.pushTokens(c),c.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new rt(t)]):void 0}expandTokens(t){var r=[],s=this.stack.length;for(this.pushTokens(t);this.stack.length>s;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(s=>s.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var s=this.lexer.catcodes[t];if(s!=null&&s!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var c=0;if(a.includes("#"))for(var d=a.replace(/##/g,"");d.includes("#"+(c+1));)++c;for(var h=new Bd(a,this.settings),f=[],v=h.lex();v.text!=="EOF";)f.push(v),v=h.lex();f.reverse();var b={tokens:f,numArgs:c};return b}return a}isDefined(t){return this.macros.has(t)||qr.hasOwnProperty(t)||nn.math.hasOwnProperty(t)||nn.text.hasOwnProperty(t)||ep.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:qr.hasOwnProperty(t)&&!qr[t].primitive}}var Fd=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,da=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Bl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Ld={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ma{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new xx(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new le("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new rt("}")),this.gullet.pushTokens(t);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(t,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(Ma.endOfExpression.has(a.text)||r&&a.text===r||t&&qr[a.text]&&qr[a.text].infix)break;var c=this.parseAtom(r);if(c){if(c.type==="internal")continue}else break;s.push(c)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(t){for(var r=-1,s,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new le("only one infix operator per group",t[a].token);r=a,s=t[a].replaceWith}if(r!==-1&&s){var c,d,h=t.slice(0,r),f=t.slice(r+1);h.length===1&&h[0].type==="ordgroup"?c=h[0]:c={type:"ordgroup",mode:this.mode,body:h},f.length===1&&f[0].type==="ordgroup"?d=f[0]:d={type:"ordgroup",mode:this.mode,body:f};var v;return s==="\\\\abovefrac"?v=this.callFunction(s,[c,t[r],d],[]):v=this.callFunction(s,[c,d],[]),[v]}else return t}handleSupSubscript(t){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var a;do{var c;a=this.parseGroup(t)}while(((c=a)==null?void 0:c.type)==="internal");if(!a)throw new le("Expected group after '"+s+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],s=0;s<t.length;s++)r.push({type:"textord",mode:"text",text:t[s]});var a={type:"text",mode:this.mode,body:r},c={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return c}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,a;;){this.consumeSpaces();var c=this.fetch();if(c.text==="\\limits"||c.text==="\\nolimits"){if(r&&r.type==="op"){var d=c.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=c.text==="\\limits");else throw new le("Limit controls must follow a math operator",c);this.consume()}else if(c.text==="^"){if(s)throw new le("Double superscript",c);s=this.handleSupSubscript("superscript")}else if(c.text==="_"){if(a)throw new le("Double subscript",c);a=this.handleSupSubscript("subscript")}else if(c.text==="'"){if(s)throw new le("Double superscript",c);var h={type:"textord",mode:this.mode,text:"\\prime"},f=[h];for(this.consume();this.fetch().text==="'";)f.push(h),this.consume();this.fetch().text==="^"&&f.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:f}}else if(da[c.text]){var v=Fd.test(c.text),b=[];for(b.push(new rt(da[c.text])),this.consume();;){var _=this.fetch().text;if(!da[_]||Fd.test(_)!==v)break;b.unshift(new rt(da[_])),this.consume()}var z=this.subparse(b);v?a={type:"ordgroup",mode:"math",body:z}:s={type:"ordgroup",mode:"math",body:z}}else break}return s||a?{type:"supsub",mode:this.mode,base:r,sup:s,sub:a}:r}parseFunction(t,r){var s=this.fetch(),a=s.text,c=qr[a];if(!c)return null;if(this.consume(),r&&r!=="atom"&&!c.allowedInArgument)throw new le("Got function '"+a+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!c.allowedInText)throw new le("Can't use function '"+a+"' in text mode",s);if(this.mode==="math"&&c.allowedInMath===!1)throw new le("Can't use function '"+a+"' in math mode",s);var{args:d,optArgs:h}=this.parseArguments(a,c);return this.callFunction(a,d,h,s,t)}callFunction(t,r,s,a,c){var d={funcName:t,parser:this,token:a,breakOnTokenText:c},h=qr[t];if(h&&h.handler)return h.handler(d,r,s);throw new le("No function handler for "+t)}parseArguments(t,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var a=[],c=[],d=0;d<s;d++){var h=r.argTypes&&r.argTypes[d],f=d<r.numOptionalArgs;(r.primitive&&h==null||r.type==="sqrt"&&d===1&&c[0]==null)&&(h="primitive");var v=this.parseGroupOfType("argument to '"+t+"'",h,f);if(f)c.push(v);else if(v!=null)a.push(v);else throw new le("Null argument, please report this as a bug")}return{args:a,optArgs:c}}parseGroupOfType(t,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var a=this.parseArgumentGroup(s,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var c=this.parseStringGroup("raw",s);return c!=null?{type:"raw",mode:"text",string:c.text}:null}case"primitive":{if(s)throw new le("A primitive argument cannot be optional");var d=this.parseGroup(t);if(d==null)throw new le("Expected group as "+t,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new le("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var a="",c;(c=this.fetch()).text!=="EOF";)a+=c.text,this.consume();return this.consume(),s.text=a,s}parseRegexGroup(t,r){for(var s=this.fetch(),a=s,c="",d;(d=this.fetch()).text!=="EOF"&&t.test(c+d.text);)a=d,c+=a.text,this.consume();if(c==="")throw new le("Invalid "+r+": '"+s.text+"'",s);return s.range(a,c)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new le("Invalid color: '"+r.text+"'",r);var a=s[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,s=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",s=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new le("Invalid size: '"+r.text+"'",r);var c={number:+(a[1]+a[2]),unit:a[3]};if(!cm(c))throw new le("Invalid unit: '"+c.unit+"'",r);return{type:"size",mode:this.mode,value:c,isBlank:s}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(t,r){var s=this.gullet.scanArgument(t);if(s==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var c=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:s.loc,body:c};return r&&this.switchMode(a),d}parseGroup(t,r){var s=this.fetch(),a=s.text,c;if(a==="{"||a==="\\begingroup"){this.consume();var d=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var h=this.parseExpression(!1,d),f=this.fetch();this.expect(d),this.gullet.endGroup(),c={type:"ordgroup",mode:this.mode,loc:Yn.range(s,f),body:h,semisimple:a==="\\begingroup"||void 0}}else if(c=this.parseFunction(r,t)||this.parseSymbol(),c==null&&a[0]==="\\"&&!ep.hasOwnProperty(a)){if(this.settings.throwOnError)throw new le("Undefined control sequence: "+a,s);c=this.formatUnsupportedCmd(a),this.consume()}return c}formLigatures(t){for(var r=t.length-1,s=0;s<r;++s){var a=t[s],c=a.text;c==="-"&&t[s+1].text==="-"&&(s+1<r&&t[s+2].text==="-"?(t.splice(s,3,{type:"textord",mode:"text",loc:Yn.range(a,t[s+2]),text:"---"}),r-=2):(t.splice(s,2,{type:"textord",mode:"text",loc:Yn.range(a,t[s+1]),text:"--"}),r-=1)),(c==="'"||c==="`")&&t[s+1].text===c&&(t.splice(s,2,{type:"textord",mode:"text",loc:Yn.range(a,t[s+1]),text:c+c}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),a=s.charAt(0)==="*";if(a&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new le(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:a}}Ld.hasOwnProperty(r[0])&&!nn[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=Ld[r[0]]+r.slice(1));var c=fx.exec(r);c&&(r=r.substring(0,c.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(nn[this.mode][r]){this.settings.strict&&this.mode==="math"&&Hl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var h=nn[this.mode][r].group,f=Yn.range(t),v;if(h8.hasOwnProperty(h)){var b=h;v={type:"atom",mode:this.mode,family:b,loc:f,text:r}}else v={type:h,mode:this.mode,loc:f,text:r};d=v}else if(r.charCodeAt(0)>=128)this.settings.strict&&(lm(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),d={type:"textord",mode:"text",loc:Yn.range(t),text:r};else return null;if(this.consume(),c)for(var _=0;_<c[0].length;_++){var z=c[0][_];if(!Bl[z])throw new le("Unknown accent ' "+z+"'",t);var k=Bl[z][this.mode]||Bl[z].text;if(!k)throw new le("Accent "+z+" unsupported in "+this.mode+" mode",t);d={type:"accent",mode:this.mode,loc:Yn.range(t),label:k,isStretchy:!1,isShifty:!0,base:d}}return d}}Ma.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var xc=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new Ma(t,r);delete s.gullet.macros.current["\\df@tag"];var a=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new le("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:s.subparse([new rt("\\df@tag")])}]}return a},np=function(t,r,s){r.textContent="";var a=$c(t,s).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),np=function(){throw new le("KaTeX doesn't work in quirks mode.")});var $x=function(t,r){var s=$c(t,r).toMarkup();return s},bx=function(t,r){var s=new tc(r);return xc(t,s)},tp=function(t,r,s){if(s.throwOnError||!(t instanceof le))throw t;var a=se(["katex-error"],[new ft(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+s.errorColor),a},$c=function(t,r){var s=new tc(r);try{var a=xc(t,s);return M8(a,t,s)}catch(c){return tp(c,t,s)}},wx=function(t,r){var s=new tc(r);try{var a=xc(t,s);return P8(a,t,s)}catch(c){return tp(c,t,s)}},_x="0.16.33",kx={Span:Oo,Anchor:oc,SymbolNode:ft,SvgNode:nr,PathNode:Ar,LineNode:Ol},Od={version:_x,render:np,renderToString:$x,ParseError:le,SETTINGS_SCHEMA:pa,__parse:bx,__renderToDomTree:$c,__renderToHTMLTree:wx,__setFontMetrics:a8,__defineSymbol:m,__defineFunction:he,__defineMacro:w,__domTree:kx};function bc(o){if(!o)return"";let t=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Od.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}});return t=t.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Od.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}}),t}function zx({nodeId:o,nodes:t,adjacency:r,lang:s,SCOPE_COLORS:a,SCOPE_LABELS:c,SECTIONS:d,belief:h,evidence:f,onClose:v,onNavigate:b,onShowPath:_}){var pe,ee;const[z,k]=H.useState(null),T=t.find(oe=>oe.id===o);if(!T)return null;const M=Object.fromEntries(t.map(oe=>[oe.id,oe])),F=oe=>{var fe,Ce;return s==="pl"?(fe=M[oe])==null?void 0:fe.labelPl:(Ce=M[oe])==null?void 0:Ce.label},P=s==="pl"?T.labelPl:T.label,G=(a==null?void 0:a[T.scope])??"#4a9eff",L=((pe=c==null?void 0:c[T.scope])==null?void 0:pe[s==="pl"?"pl":"en"])??"",N=((ee=d==null?void 0:d[T.section])==null?void 0:ee.label)??"",E=r.prereqs[o]??[],U=r.dependents[o]??[],B=T.resources??[],Z=h==null?void 0:h[o],X=z!=null?B[z]??null:null,Q={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return y.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:I.bg,fontFamily:Qe,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[y.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),y.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[y.jsxs("div",{style:{display:"flex",gap:8,marginBottom:28},children:[y.jsxs("button",{onClick:v,style:{padding:"10px 14px",fontSize:12,fontFamily:Qe,borderRadius:6,border:`1px solid ${I.border}`,background:"transparent",color:I.textDim,cursor:"pointer"},children:["← ",K("topicBack",s)]}),_&&E.length>0&&y.jsx("button",{onClick:()=>_(o),style:{padding:"10px 14px",fontSize:12,fontFamily:Qe,borderRadius:6,border:`1px solid ${G}30`,background:`${G}08`,color:G,cursor:"pointer"},children:K("topicLearnPath",s)})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[y.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:G,opacity:.8,flexShrink:0}}),y.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:I.textPrimary,lineHeight:1.3},children:P})]}),y.jsxs("div",{style:{fontSize:12,color:I.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[N," · ",L," · ",K("level",s)," ",T.level]}),Z&&y.jsx(Sx,{nodeId:o,status:Z,evidence:f,adjacency:r,belief:h,nodes:t,lang:s,onNavigate:b}),T.body&&y.jsx(jx,{body:T.body,lang:s}),y.jsx(Hd,{title:K("prerequisites",s),color:"#4a9eff",empty:E.length===0,emptyText:K("noPrereqs",s),children:E.map(oe=>{var fe;return y.jsx(Wd,{label:F(oe),color:(a==null?void 0:a[(fe=M[oe])==null?void 0:fe.scope])??"#4a9eff",status:h==null?void 0:h[oe],onClick:()=>b(oe)},oe)})}),y.jsx(Hd,{title:K("enables",s),color:"#3dc9b0",empty:U.length===0,emptyText:K("noDependents",s),children:U.map(oe=>{var fe;return y.jsx(Wd,{label:F(oe),color:(a==null?void 0:a[(fe=M[oe])==null?void 0:fe.scope])??"#4a9eff",status:h==null?void 0:h[oe],onClick:()=>b(oe)},oe)})}),B.length>0&&y.jsxs("div",{style:{marginTop:28},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:K("learningResources",s)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:B.map((oe,fe)=>{const Ce=s==="pl"?oe.titlePl:oe.titleEn,De=Q[oe.type]??"#8a9dbe",Ee=oe.type==="interactive"?"resourceInteractive":oe.type==="video"?"resourceVideo":"resourceArticle";return y.jsxs("button",{onClick:()=>k(fe),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${De}0a`,border:`1px solid ${De}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:Qe,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:re=>{re.currentTarget.style.background=`${De}18`,re.currentTarget.style.borderColor=`${De}50`},onMouseLeave:re=>{re.currentTarget.style.background=`${De}0a`,re.currentTarget.style.borderColor=`${De}25`},children:[y.jsx("span",{style:{fontSize:18,flexShrink:0},children:oe.type==="interactive"?"⬡":oe.type==="video"?"▶":"📄"}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:I.textBody,fontWeight:500,lineHeight:1.4},children:Ce}),y.jsx("div",{style:{fontSize:10,color:De,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:K(Ee,s)})]}),y.jsx("span",{style:{fontSize:14,color:I.textFaint},children:"→"})]},fe)})})]})]}),X&&y.jsx(Bv,{resource:X,lang:s,onClose:()=>k(null)})]})}function Sx({nodeId:o,status:t,evidence:r,adjacency:s,belief:a,nodes:c,lang:d,onNavigate:h}){const f=r==null?void 0:r[o],v=!!f,b=t==="known"?"#27ae60":"#e74c3c",_=t==="known"?"#2ecc71":"#ff6b6b",z=Object.fromEntries(c.map(M=>[M.id,M])),k=M=>{var F,P;return d==="pl"?(F=z[M])==null?void 0:F.labelPl:(P=z[M])==null?void 0:P.label};let T=null;return!v&&r&&(t==="known"?T=(s.dependents[o]??[]).find(F=>{var P;return((P=r[F])==null?void 0:P.correct)&&a[F]==="known"}):T=(s.prereqs[o]??[]).find(F=>r[F]&&!r[F].correct&&a[F]==="unknown")),y.jsxs("div",{style:{marginBottom:20,padding:"12px 14px",borderRadius:8,background:`${b}08`,border:`1px solid ${b}20`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:b}}),y.jsx("span",{style:{fontSize:13,fontWeight:600,color:_},children:K(t==="known"?"beliefKnown":"beliefUnknown",d)}),y.jsx("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:4,background:v?`${b}15`:"#ffffff08",color:v?_:I.textFaint,border:`1px solid ${v?b+"30":I.border}`},children:v?d==="pl"?"sprawdzone":"tested":d==="pl"?"wywnioskowane":"inferred"})]}),v&&y.jsxs("div",{style:{fontSize:12,color:I.textDim,lineHeight:1.6},children:[f.correct?d==="pl"?"Odpowiedź poprawna":"Answered correctly":d==="pl"?"Odpowiedź niepoprawna":"Answered incorrectly",f.questionText&&y.jsx("div",{style:{marginTop:8,padding:"8px 10px",borderRadius:6,background:"#ffffff06",borderLeft:`2px solid ${b}40`,fontSize:12,color:I.textBody,lineHeight:1.6},children:y.jsx("span",{dangerouslySetInnerHTML:{__html:bc(f.questionText)}})})]}),!v&&y.jsxs("div",{style:{fontSize:12,color:I.textDim,lineHeight:1.6},children:[t==="known"?d==="pl"?"Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten.":"Inferred — if you know a harder topic, you likely know this one too.":d==="pl"?"Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem.":"Inferred — if you don't know the foundation, topics that build on it may also be difficult.",T&&y.jsxs("button",{onClick:()=>h(T),style:{display:"block",marginTop:6,padding:"10px 14px",borderRadius:4,background:"#ffffff06",border:`1px solid ${I.border}`,color:"#4a9eff",cursor:"pointer",fontSize:11,fontFamily:Qe},children:[d==="pl"?"Na podstawie:":"Based on:"," ",k(T)," →"]})]})]})}function jx({body:o,lang:t}){var h,f;const[r,s]=H.useState(!1),a=o.split("<!-- example -->"),c=(h=a[0])==null?void 0:h.trim(),d=(f=a[1])==null?void 0:f.trim();return c?y.jsxs("div",{style:{marginBottom:20},children:[y.jsx("div",{style:{fontSize:13,color:I.textBody,lineHeight:1.7},children:c}),d&&y.jsxs(y.Fragment,{children:[y.jsx("button",{onClick:()=>s(v=>!v),style:{marginTop:10,padding:"10px 14px",fontSize:12,fontFamily:Qe,borderRadius:6,border:`1px solid ${r?"#FFD16640":I.border}`,background:r?"#FFD16610":"transparent",color:r?"#FFD166":I.textDim,cursor:"pointer",transition:"all 0.15s"},children:r?t==="pl"?"Schowaj przykład":"Hide example":t==="pl"?"Nie kumam — pokaż na liczbach":"Show me a concrete example"}),r&&y.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#FFD16608",border:"1px solid #FFD16620",color:"#e8d5a0",lineHeight:1.7},children:d})]})]}):null}function Hd({title:o,color:t,empty:r,emptyText:s,children:a}){return y.jsxs("div",{style:{marginTop:24},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:o}),r?y.jsx("div",{style:{fontSize:12,color:I.textFaint,fontStyle:"italic"},children:s}):y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:a})]})}function Wd({label:o,color:t,status:r,onClick:s}){const a=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return y.jsxs("button",{onClick:s,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:Qe,fontSize:12,color:I.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:c=>{c.currentTarget.style.background=`${t}1c`,c.currentTarget.style.borderColor=`${t}50`},onMouseLeave:c=>{c.currentTarget.style.background=`${t}0c`,c.currentTarget.style.borderColor=`${t}25`},children:[a&&y.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:a,flexShrink:0}}),o]})}function qx({goalId:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:s,SCOPE_LABELS:a,SECTIONS:c,belief:d,evidence:h,lang:f,onSelectTopic:v,onClose:b}){const _=H.useMemo(()=>ba(t,r),[t,r]),z=H.useMemo(()=>Object.fromEntries(t.map(L=>[L.id,L])),[t]),k=L=>{var N,E;return f==="pl"?(N=z[L])==null?void 0:N.labelPl:(E=z[L])==null?void 0:E.label};z[o];const T=H.useMemo(()=>{const L=new Set,N=[],E=[o];for(;E.length;){const Q=E.shift();if(!L.has(Q)&&z[Q]){L.add(Q),N.push(Q);for(const pe of _.prereqs[Q]??[])L.has(pe)||E.push(pe)}}const U=new Set(N),B={};for(const Q of U)B[Q]=0;for(const Q of U)for(const pe of _.dependents[Q]??[])U.has(pe)&&(B[pe]=(B[pe]||0)+1);const Z=[],X=[];for(const Q of U)B[Q]===0&&X.push(Q);for(;X.length;){X.sort((pe,ee)=>{var oe,fe;return(((oe=z[pe])==null?void 0:oe.level)??0)-(((fe=z[ee])==null?void 0:fe.level)??0)});const Q=X.shift();Z.push(Q);for(const pe of _.dependents[Q]??[])U.has(pe)&&(B[pe]--,B[pe]===0&&X.push(pe))}return Z},[o,_,z]),M=T.filter(L=>(d==null?void 0:d[L])==="known").length,F=T.filter(L=>(d==null?void 0:d[L])==="unknown").length,P=T.length,G=P>0?Math.round(M/P*100):0;return y.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:I.bg,fontFamily:Qe,overflowY:"auto",animation:"pathSlideIn 0.2s ease"},children:[y.jsx("style",{children:`
        @keyframes pathSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),y.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[y.jsxs("button",{onClick:b,style:{padding:"10px 14px",fontSize:12,fontFamily:Qe,borderRadius:6,border:`1px solid ${I.border}`,background:"transparent",color:I.textDim,cursor:"pointer",marginBottom:24},children:["← ",K("topicBack",f)]}),y.jsx("div",{style:{marginBottom:6},children:y.jsx("span",{style:{fontSize:10,color:I.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:K("pathLabel",f)})}),y.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:I.textPrimary,lineHeight:1.3},children:k(o)}),y.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:I.textDim},children:[P," ",K("pathTopics",f),d&&Object.keys(d).length>0&&y.jsxs(y.Fragment,{children:[" · ",y.jsx("span",{style:{color:I.known},children:M})," ",K("pathKnown",f)," · ",y.jsx("span",{style:{color:"#e74c3c"},children:F})," ",K("pathToStudy",f)]})]}),d&&Object.keys(d).length>0&&y.jsx("div",{style:{height:4,borderRadius:2,background:I.border,overflow:"hidden",marginBottom:28},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${G}%`,background:I.known,transition:"width 0.4s ease"}})}),y.jsxs("div",{style:{position:"relative"},children:[y.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:I.border,borderRadius:1}}),T.map((L,N)=>{var De,Ee,re;const E=z[L],U=L===o,B=d==null?void 0:d[L],Z=h==null?void 0:h[L],X=!!Z,Q=((De=E==null?void 0:E.resources)==null?void 0:De.length)>0,pe=(s==null?void 0:s[E==null?void 0:E.scope])??"#4a9eff",ee=((Ee=a==null?void 0:a[E==null?void 0:E.scope])==null?void 0:Ee[f==="pl"?"pl":"en"])??"",oe=((re=c==null?void 0:c[E==null?void 0:E.section])==null?void 0:re.label)??"";let fe=I.textFaint,Ce=I.border;return B==="known"?(fe=I.known,Ce=I.known):B==="unknown"&&(fe="#e74c3c",Ce="#e74c3c"),y.jsxs("div",{onClick:()=>v(L),style:{position:"relative",paddingLeft:40,paddingBottom:N<T.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[y.jsx("div",{style:{position:"absolute",left:8,top:12,width:U?16:12,height:U?16:12,borderRadius:"50%",background:B?fe:I.bg,border:`2px solid ${B?Ce:I.textFaint}`,marginLeft:U?-2:0,zIndex:1}}),y.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:U?`${pe}10`:"transparent",border:`1px solid ${U?pe+"30":I.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:ve=>{U||(ve.currentTarget.style.background=`${I.textFaint}10`,ve.currentTarget.style.borderColor=I.border)},onMouseLeave:ve=>{U||(ve.currentTarget.style.background="transparent",ve.currentTarget.style.borderColor=I.borderSubtle)},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[y.jsx("span",{style:{fontSize:13,fontWeight:U?700:500,color:U?I.textPrimary:I.textBody,flex:1},children:k(L)}),y.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[Q&&y.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#58C4DD15",color:"#58C4DD",border:"1px solid #58C4DD30"},children:"⬡"}),X&&y.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:Z.correct?"#27ae6015":"#e74c3c15",color:Z.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${Z.correct?"#27ae6030":"#e74c3c30"}`},children:Z.correct?"✓":"✗"})]})]}),y.jsxs("div",{style:{fontSize:10,color:I.textFaint,marginTop:3},children:[oe," · ",ee,U&&y.jsx("span",{style:{color:pe,marginLeft:6},children:K("pathGoal",f)})]})]})]},L)})]})]})]})}class Fo{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(s,a)=>a);for(let s=t-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return new Fo(r)}static identity(t){return new Fo(Array.from({length:t},(r,s)=>s))}}function Tx({nodeId:o,nodes:t,questionBank:r,onAnswer:s,onSkip:a,lang:c,excludeIndices:d=[],isMobile:h}){const f=t.find(B=>B.id===o),v=H.useMemo(()=>Xd(r,o,d),[o,d]),b="#4a9eff",_=f?c==="pl"?f.labelPl:f.label:o,z=H.useMemo(()=>v?Fo.random(v.options.length):null,[v]),k=H.useMemo(()=>z?z.apply(v.options):[],[z,v]),T=H.useMemo(()=>z?z.displayIndex(v.correct):-1,[z,v]),[M,F]=H.useState(null),[P,G]=H.useState(!1),L=()=>{M!==null&&G(!0)},N=()=>{s(M===T,v,v.index),F(null),G(!1)};H.useEffect(()=>{const B=Z=>{Z.key==="Escape"&&a((v==null?void 0:v.index)??-1)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[a,v]);const E=B=>y.jsx("span",{dangerouslySetInnerHTML:{__html:bc(B)}}),U=h?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:I.surface,border:`1px solid ${b}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:I.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:I.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${b}40`,borderRadius:10,padding:"14px 16px",color:I.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return y.jsxs("div",{style:U,children:[h&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:I.textFaint}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[y.jsx("div",{style:{color:b,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:_}),y.jsx("button",{onClick:()=>a((v==null?void 0:v.index)??-1),style:{background:`${I.textDim}22`,border:`1px solid ${I.border}`,color:I.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:K("close",c)})]}),v?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:13,color:I.textBody,marginBottom:12,lineHeight:1.65},children:E(v.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:k.map((B,Z)=>{let X=I.bg,Q=I.border,pe=I.textBody;return M===Z&&!P&&(X=`${b}22`,Q=b,pe=b),P&&(Z===T?(X="#27ae6022",Q="#27ae60",pe="#2ecc71"):Z===M&&(X="#e74c3c22",Q="#e74c3c",pe="#ff6b6b")),y.jsxs("button",{onClick:()=>{P||F(Z)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:P?"default":"pointer",background:X,border:`1px solid ${Q}`,color:pe,lineHeight:1.5,minHeight:38},children:[y.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][Z],"."]}),E(B)]},Z)})}),P&&v.hint&&y.jsx("div",{style:{fontSize:11,color:I.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:E(v.hint)}),P?y.jsx("button",{onClick:N,style:{...Co(M===T?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:K(M===T?"knownConfirm":"unknownConfirm",c)}):y.jsx("button",{onClick:L,disabled:M===null,style:{...Co(b),width:"100%",opacity:M===null?.4:1,fontSize:13},children:K("checkAnswer",c)})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:I.textDim,fontSize:12,marginBottom:12},children:K("noQuestion",c)}),y.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[y.jsx("button",{onClick:()=>s(!0,null,-1),style:{...Co("#27ae60"),fontSize:12,padding:"8px 14px"},children:K("yesKnow",c)}),y.jsx("button",{onClick:()=>s(!1,null,-1),style:{...Co("#e74c3c"),fontSize:12,padding:"8px 14px"},children:K("noKnow",c)}),y.jsx("button",{onClick:()=>a(-1),style:{...Co("#3a4d63"),fontSize:12,padding:"8px 14px"},children:K("skipBtn",c)})]})]})]})}const Ax={position:"absolute",right:16,top:16,width:230,background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function Mx({belief:o,frontier:t,visibleFrontier:r,hasStarted:s,nextSuggestedId:a,sessionComplete:c,adjacency:d,expectedRemaining:h,pCorrect:f,questionsAnswered:v,nodes:b,lang:_,onReset:z,onNodeClick:k,SCOPE_LABELS:T,isMobile:M}){var Q,pe;const F=Object.fromEntries(b.map(ee=>[ee.id,ee])),P=ee=>{var oe,fe;return _==="pl"?(oe=F[ee])==null?void 0:oe.labelPl:(fe=F[ee])==null?void 0:fe.label},G=b.filter(ee=>o[ee.id]==="known"),L=b.filter(ee=>o[ee.id]==="unknown"),N=b.length,E=[{label:K("statKnown",_),count:G.length,color:"#27ae60"},{label:K("statUnknown",_),count:L.length,color:"#e74c3c"},{label:K("statRemaining",_),count:h??"-",color:"#4a9eff"}],U=f?Math.round(f*100):50,B=M?13:11,Z=M?11:9,X=y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{fontWeight:700,fontSize:M?14:12,marginBottom:10,color:I.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[K("diagHeader",_)," ",c?"✓":""]}),y.jsx("button",{onClick:z,style:{fontSize:Z,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${I.textFaint}`,color:I.textDim,minHeight:M?32:"auto"},children:K("reset",_)})]}),y.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:E.map(({label:ee,count:oe,color:fe})=>y.jsxs("div",{style:{flex:1,textAlign:"center",background:`${fe}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${fe}40`},children:[y.jsx("div",{style:{color:fe,fontWeight:700,fontSize:M?20:15},children:oe}),y.jsx("div",{style:{color:I.textDim,fontSize:Z},children:ee})]},ee))}),!c&&s&&y.jsxs("div",{style:{fontSize:Z,color:I.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[y.jsxs("span",{children:[K("answered",_),": ",y.jsx("span",{style:{color:I.textPrimary},children:v})]}),y.jsxs("span",{children:[K("estimated",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:["~",h??"-"]})]}),y.jsxs("span",{children:[K("accuracy",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]})]})]}),c&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:M?14:12,marginBottom:4},children:K("sessionDone",_)}),y.jsxs("div",{style:{color:I.textDim,fontSize:Z,lineHeight:1.6},children:[K("sessionDoneSub",_)," ",y.jsx("span",{style:{color:I.textPrimary},children:v})," ",K("sessionDoneQ",_),"."," ",K("sessionDoneClass",_)," ",G.length+L.length,"/",N,".",y.jsx("br",{}),K("sessionDoneAcc",_),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]}),"."," ",K("sessionDoneKnown",_)," ",y.jsx("span",{style:{color:"#2ecc71"},children:G.length}),","," ",K("sessionDoneStudy",_)," ",y.jsx("span",{style:{color:"#e74c3c"},children:L.length}),"."]})]}),L.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#e74c3c",fontSize:B,fontWeight:600,marginBottom:5},children:[K("toStudy",_)," (",L.length,")"]}),b.filter(ee=>o[ee.id]==="unknown").filter(ee=>(d.prereqs[ee.id]??[]).every(oe=>o[oe]==="known")).slice(0,8).map(ee=>{var oe,fe;return y.jsxs("div",{style:{padding:M?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:B,color:"#ff8a8a",lineHeight:1.4},children:[P(ee.id),y.jsx("div",{style:{fontSize:Z,color:I.textDim,marginTop:1},children:(fe=T==null?void 0:T[(oe=F[ee.id])==null?void 0:oe.scope])==null?void 0:fe[_==="pl"?"pl":"en"]})]},ee.id)})]}),G.length>0&&y.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:B},children:["✓ ",K("knownList",_)," ",G.length]})]}),!c&&!s&&y.jsxs("div",{style:{marginBottom:10},children:[a&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:B,fontWeight:600,marginBottom:5},children:K("startHere",_)}),y.jsxs("div",{onClick:()=>k==null?void 0:k(a),style:{padding:M?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:B,color:"#a8d4ff",minHeight:M?44:"auto"},children:[y.jsx("div",{style:{fontWeight:600},children:P(a)}),y.jsxs("div",{style:{fontSize:Z,color:I.textDim,marginTop:2},children:[(pe=T==null?void 0:T[(Q=F[a])==null?void 0:Q.scope])==null?void 0:pe[_==="pl"?"pl":"en"]," · ",K("startHereSub",_)]})]})]}),y.jsx("div",{style:{fontSize:Z,color:I.textFaint,marginTop:8,lineHeight:1.5},children:K("clickAnyNode",_)})]}),!c&&s&&r.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#f39c12",fontSize:B,fontWeight:600,marginBottom:5},children:K("whatNext",_)}),r.map(ee=>{var fe,Ce;const oe=ee===a;return y.jsxs("div",{onClick:()=>k==null?void 0:k(ee),style:{padding:M?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:oe?"#4a9eff18":"#f39c1215",border:`1px solid ${oe?"#4a9eff55":"#f39c1240"}`,fontSize:B,color:oe?"#a8d4ff":"#f5d78e",minHeight:M?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{children:P(ee)}),y.jsxs("div",{style:{fontSize:Z,color:I.textDim,marginTop:1},children:[(Ce=T==null?void 0:T[(fe=F[ee])==null?void 0:fe.scope])==null?void 0:Ce[_==="pl"?"pl":"en"],oe&&y.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:K("best",_)})]})]}),y.jsx("span",{style:{opacity:.7},children:oe?"★":"→"})]},ee)})]}),!c&&G.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#27ae60",fontSize:B,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",K("knownList",_)," (",G.length,")"]}),G.map(ee=>y.jsx("div",{style:{fontSize:Z,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:P(ee.id)},ee.id))]}),!c&&!M&&y.jsxs("div",{style:{marginTop:12,color:I.textFaint,fontSize:Z,lineHeight:1.5},children:[K("hintClick",_),y.jsx("br",{}),K("hintShift",_),y.jsx("br",{}),K("hintGreen",_)]})]});return M?y.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:I.textFaint}})}),X]}):y.jsx("div",{style:Ax,children:X})}function Px({nodes:o,lang:t,targetNode:r,subgraphIds:s,ddClassification:a,betaBeliefs:c,ddComplete:d,ddNextNodeId:h,questionsAnswered:f,onNodeClick:v,onReset:b,isMobile:_}){const z=Object.fromEntries(o.map(B=>[B.id,B])),k=B=>{var Z,X;return t==="pl"?(Z=z[B])==null?void 0:Z.labelPl:(X=z[B])==null?void 0:X.label},T=s.filter(B=>a[B]==="known"),M=s.filter(B=>a[B]==="unknown"),F=s.filter(B=>a[B]==="uncertain"),P=s.length,G=T.length+M.length,L=P>0?Math.round(G/P*100):0,N=k(r),E=_?11:9,U=_?{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return y.jsxs("div",{style:U,children:[_&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:I.textFaint}})}),y.jsxs("div",{style:{fontWeight:700,fontSize:_?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[K("deepDiveHeader",t)," ",d?"✓":""]}),y.jsx("button",{onClick:b,style:{fontSize:E,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${I.textFaint}`,color:I.textDim,minHeight:_?32:"auto"},children:K("reset",t)})]}),y.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[y.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:K("deepDiveTarget",t)}),y.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:N}),y.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[P," ",K("deepDiveNodes",t)]})]}),y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{height:5,borderRadius:3,background:"#10141c",overflow:"hidden",marginBottom:4},children:y.jsx("div",{style:{height:"100%",borderRadius:3,width:`${L}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[y.jsxs("span",{children:[K("classified",t),": ",y.jsxs("span",{style:{color:"#f5f6fa"},children:[G,"/",P]})]}),y.jsxs("span",{children:[K("questions",t),": ",y.jsx("span",{style:{color:"#f5f6fa"},children:f})]})]})]}),d&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:T.length>M.length?"#27ae6018":"#e74c3c18",border:`1px solid ${T.length>M.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:T.length>M.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:K("diagReady",t)}),y.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[K("diagKnown",t),": ",y.jsx("span",{style:{color:"#2ecc71"},children:T.length})," / ",K("diagStudy",t),": ",y.jsx("span",{style:{color:"#ff6b6b"},children:M.length})," / ",K("diagTotal",t),": ",P]})]}),M.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:K("studyThese",t)}),s.filter(B=>a[B]==="unknown").slice(0,8).map(B=>{var Z;return y.jsx(Gd,{id:B,label:k(B),scope:(Z=z[B])==null?void 0:Z.scope,classification:"unknown",beta:c[B]},B)})]}),T.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:K("mastered",t)}),s.filter(B=>a[B]==="known").map(B=>{var Z;return y.jsx(Gd,{id:B,label:k(B),scope:(Z=z[B])==null?void 0:Z.scope,classification:"known",beta:c[B]},B)})]})]}),!d&&y.jsxs(y.Fragment,{children:[h&&y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:K("nextQuestion",t)}),y.jsxs("div",{onClick:()=>v==null?void 0:v(h),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[k(h),y.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[K("confidence",t),": ",Cx(c[h])]})]})]}),F.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[K("unclassified",t)," (",F.length,")"]}),F.map(B=>y.jsxs("div",{onClick:()=>v==null?void 0:v(B),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:B===h?"#4a9eff18":"#f39c1212",border:`1px solid ${B===h?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:B===h?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:k(B)}),y.jsx(rp,{beta:c[B]})]},B))]})]})]})}function Cx(o){if(!o)return"50%";const t=o.alpha/(o.alpha+o.beta);return`${Math.round(t*100)}%`}function rp({beta:o}){const t=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,s=Math.min(1,(r-2)/4),a=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return y.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#10141c",overflow:"hidden",flexShrink:0},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:a,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function Gd({id:o,label:t,scope:r,classification:s,beta:a}){const c=s==="known"?"#27ae60":"#e74c3c";return y.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${c}10`,border:`1px solid ${c}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:t}),y.jsx(rp,{beta:a})]})}function Rx({lang:o,diagMode:t,hasBelief:r,SCOPE_COLORS:s,SCOPE_LABELS:a,SECTIONS:c}){const[d,h]=H.useState(r),f=Object.entries(s).map(([v,b])=>{var _;return{color:b,label:(_=a[v])==null?void 0:_[o==="pl"?"pl":"en"]}});return y.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#161c2895",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[y.jsxs("button",{onClick:()=>h(v=>!v),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[y.jsx("span",{style:{opacity:.6},children:d?"▼":"▶"}),K("legendTitle",o)]}),d&&y.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[(t||r)&&y.jsxs("div",{style:{marginBottom:8},children:[[{color:I.knownHi,label:K("legendKnown",o)},{color:I.unknownHi,label:K("legendUnknown",o)},{color:I.frontier,label:K("legendFrontier",o)},{color:"#4a5568",label:K("legendUnclassified",o)}].map(({color:v,label:b})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:v,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:b})]},b)),y.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:K("legendScopes",o)}),f.map(({color:v,label:b})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:v,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:b})]},b)),y.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:K("legendStages",o)}),Object.entries(c).map(([v,b])=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:3,borderRadius:1,background:b.color,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:b.label})]},v))]})]})]})}function Dx({nodes:o,lang:t,onSelect:r,onClose:s,SECTIONS:a,SCOPE_COLORS:c}){const[d,h]=H.useState(""),[f,v]=H.useState(-1),b=H.useRef([]),_=H.useMemo(()=>Object.keys(a??{}),[a]),z=H.useMemo(()=>{const P=d.toLowerCase();return o.filter(G=>!P||G.label.toLowerCase().includes(P)||G.labelPl.toLowerCase().includes(P))},[o,d]),k=H.useMemo(()=>{const P={};for(const L of _)P[L]=[];for(const L of z){const N=L.section??_[0]??"default";P[N]||(P[N]=[]),P[N].push(L)}const G=[];for(const L of _)for(const N of P[L]??[])G.push(N);return G},[z,_]),T=H.useMemo(()=>{const P={};for(const G of _)P[G]=[];for(const G of z){const L=G.section??_[0]??"default";P[L]||(P[L]=[]),P[L].push(G)}return P},[z,_]),M=P=>t==="pl"?P.labelPl:P.label;H.useEffect(()=>{const P=G=>{if(G.key==="Escape"){s();return}G.key==="ArrowDown"&&(G.preventDefault(),v(L=>Math.min(L+1,k.length-1))),G.key==="ArrowUp"&&(G.preventDefault(),v(L=>Math.max(L-1,0))),G.key==="Enter"&&f>=0&&k[f]&&(G.preventDefault(),r(k[f].id))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[k,f,s,r]),H.useEffect(()=>{f>=0&&b.current[f]&&b.current[f].scrollIntoView({block:"nearest"})},[f]),H.useEffect(()=>{v(-1)},[d]);const F={title:t==="pl"?"Wybierz cel":"Select Goal",subtitle:t==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:t==="pl"?"Szukaj tematu...":"Search topics...",noResults:t==="pl"?"Brak wyników":"No results",footer:`${z.length} / ${o.length} ${t==="pl"?"tematów":"topics"}`,cancel:t==="pl"?"Anuluj":"Cancel"};return y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:P=>{P.target===P.currentTarget&&s()},children:y.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #263248",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:F.title}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:F.subtitle})]}),y.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:y.jsx("input",{autoFocus:!0,value:d,onChange:P=>h(P.target.value),placeholder:F.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#10141c",border:"1px solid #263248",color:"#c8d6e5",outline:"none"}})}),y.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[_.map(P=>{const G=T[P];if(!G||G.length===0)return null;const L=a==null?void 0:a[P];return y.jsxs("div",{style:{marginBottom:12},children:[y.jsx("div",{style:{fontSize:9,fontWeight:700,color:(L==null?void 0:L.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(L==null?void 0:L.label)??P}),y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:G.map(N=>{const E=k.indexOf(N),U=(c==null?void 0:c[N.scope])??"#4a9eff",B=f===E;return y.jsxs("button",{ref:Z=>b.current[E]=Z,onClick:()=>r(N.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:B?`${U}35`:`${U}15`,border:`1px solid ${B?U:`${U}40`}`,color:"#c8d6e5",cursor:"pointer",outline:B?`2px solid ${U}`:"none",outlineOffset:1},onMouseEnter:Z=>{Z.currentTarget.style.background=`${U}30`,Z.currentTarget.style.borderColor=`${U}90`},onMouseLeave:Z=>{k.indexOf(N)!==f&&(Z.currentTarget.style.background=`${U}15`,Z.currentTarget.style.borderColor=`${U}40`)},children:[y.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:U,verticalAlign:"middle"}}),M(N)]},N.id)})})]},P)}),z.length===0&&y.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:F.noResults})]}),y.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:F.footer}),y.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:F.cancel})]})]})})}function Ex({isOpen:o,onSelect:t,onClose:r,lang:s="pl"}){const a=[{id:"quick",icon:"⚡",color:"#4a9eff",label:K("modeQuickLabel",s),description:K("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:K("modeDeepLabel",s),description:K("modeDeepDesc",s)}],[c,d]=H.useState(null),h=H.useRef(null);return H.useEffect(()=>{o&&(d(null),setTimeout(()=>{var f;return(f=h.current)==null?void 0:f.focus()},100))},[o]),H.useEffect(()=>{if(!o)return;const f=v=>{v.key==="Escape"&&r(),v.key==="Enter"&&c&&t(c)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[o,c,r,t]),o?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:f=>{f.target===f.currentTarget&&r()},children:y.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #263248"},children:[y.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:K("modePickerTitle",s)}),y.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:K("modePickerSub",s)})]}),y.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:a.map((f,v)=>y.jsxs("button",{ref:v===0?h:null,onClick:()=>d(f.id),onDoubleClick:()=>t(f.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:c===f.id?`${f.color}18`:"#10141c",border:`1px solid ${c===f.id?f.color:"#263248"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:b=>{b.currentTarget.style.background=`${f.color}18`,b.currentTarget.style.borderColor=`${f.color}60`},onMouseLeave:b=>{c!==f.id&&(b.currentTarget.style.background="#10141c",b.currentTarget.style.borderColor="#263248")},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[y.jsx("span",{style:{fontSize:16},children:f.icon}),y.jsx("span",{style:{fontWeight:600,color:c===f.id?f.color:"#f5f6fa"},children:f.label})]}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:f.description})]},f.id))}),y.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:K("cancel",s)}),y.jsx("button",{onClick:()=>c&&t(c),disabled:!c,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:c?"pointer":"not-allowed",background:c?"#4a9eff":"#263248",border:"none",color:c?"#fff":"#3a4d63",opacity:c?1:.5},children:K("next",s)})]})]})}):null}const Bx=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function Nx({isOpen:o,onSelect:t,onClose:r,lang:s}){return H.useEffect(()=>{if(!o)return;const a=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[o,r]),o?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&r()},children:y.jsxs("div",{style:{width:"100%",maxWidth:480,background:I.surface,border:"1px solid #263248",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[y.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:"1px solid #263248",textAlign:"center"},children:[y.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),y.jsx("div",{style:{fontWeight:700,fontSize:18,color:I.textPrimary,marginBottom:8},children:K("onboardingTitle",s)}),y.jsx("div",{style:{fontSize:12,color:I.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:K("onboardingSub",s)})]}),y.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[y.jsx("div",{style:{fontSize:11,color:I.textFaint,marginBottom:2},children:K("onboardingChoose",s)}),Bx.map(({id:a,key:c,descKey:d,color:h})=>y.jsxs("button",{onClick:()=>t(a),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${h}0e`,border:`1px solid ${h}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:f=>{f.currentTarget.style.background=`${h}1c`,f.currentTarget.style.borderColor=`${h}70`},onMouseLeave:f=>{f.currentTarget.style.background=`${h}0e`,f.currentTarget.style.borderColor=`${h}30`},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:h,flexShrink:0,marginTop:5}}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontWeight:600,fontSize:13,color:I.textPrimary,marginBottom:3},children:K(c,s)}),y.jsx("div",{style:{fontSize:11,color:I.textDim,lineHeight:1.5},children:K(d,s)})]}),y.jsx("div",{style:{color:h,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},a))]}),y.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:I.textFaint,textAlign:"center"},children:K("onboardingLangHint",s)})]})}):null}function Ix({lang:o,setLang:t,layoutId:r,layouts:s,onLayoutChange:a,searchTerm:c,setSearchTerm:d,filterScope:h,toggleScope:f,clearScope:v,filterSection:b,toggleSection:_,clearSection:z,SECTIONS:k,SCOPE_COLORS:T,SCOPE_LABELS:M,isMobile:F}){const[P,G]=H.useState(!1),L=H.useRef(null);H.useEffect(()=>{if(!P)return;const E=B=>{L.current&&!L.current.contains(B.target)&&G(!1)},U=B=>{B.key==="Escape"&&G(!1)};return document.addEventListener("mousedown",E),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",E),document.removeEventListener("keydown",U)}},[P]);const N=h.size+b.size+(c?1:0);return y.jsxs("div",{ref:L,style:{position:"relative"},children:[y.jsxs("button",{onClick:()=>G(E=>!E),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:P||N>0?"1px solid #4a9eff":`1px solid ${I.border}`,background:P?"#4a9eff22":"transparent",color:P||N>0?"#4a9eff":I.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:K("moreOptions",o),children:[y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),N>0&&y.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:N})]}),P&&y.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:F?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:I.surface,border:`1px solid ${I.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:I.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("search",o)}),y.jsx("input",{value:c,onChange:E=>d(E.target.value),placeholder:K("search",o),style:{width:"100%",boxSizing:"border-box",background:I.bg,border:`1px solid ${I.border}`,borderRadius:6,color:I.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:I.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),y.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(E=>y.jsx("button",{onClick:()=>t(E),style:{...Ci(o===E,E==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:E.toUpperCase()},E))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:I.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("layoutLabel",o)}),y.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(E=>y.jsx("button",{onClick:()=>a(E.meta.id),style:{...Ci(r===E.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:E.meta.label},E.meta.id))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:I.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("filterSection",o)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Ci(b.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:z,children:K("all",o)}),Object.entries(k).map(([E,U])=>y.jsx("button",{style:{...Ci(b.has(E),U.color),fontSize:11,padding:"4px 10px"},onClick:()=>_(E),children:U.label},E))]})]}),y.jsxs("div",{children:[y.jsx("label",{style:{fontSize:11,color:I.textDim,fontWeight:600,marginBottom:6,display:"block"},children:K("filterScope",o)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Ci(h.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:v,children:K("all",o)}),Object.entries(T).map(([E,U])=>{var B;return y.jsx("button",{style:{...Ci(h.has(E),U),fontSize:11,padding:"4px 10px"},onClick:()=>f(E),children:(B=M[E])==null?void 0:B[o==="pl"?"pl":"en"]},E)})]})]})]})]})}const Ud={x:40,y:40,scale:.72},Vd={x:20,y:20,scale:.42};function Fx({courseId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:a,SCOPE_COLORS:c,SCOPE_LABELS:d,COURSE_META:h,onBackToCourses:f,initialBelief:v,initialEvidence:b,initialSelectedNode:_,initialLang:z,onBackToHome:k}){const T=Tv(),[M,F]=H.useState(tm),[P,G]=mt("lang",z??"pl"),[L,N]=H.useState(new Set),[E,U]=H.useState(new Set),[B,Z]=H.useState(""),[X,Q]=H.useState(_??null),[pe,ee]=H.useState(null),[oe,fe]=H.useState(null),[Ce,De]=H.useState(null),[Ee,re]=H.useState(!1),[ve,de]=H.useState(!1),C=!!v,[Y,$e]=mt("onboardingSeen",!1),[Se,ze]=H.useState(!Y&&!C),Be=H.useCallback(()=>{$e(!0),ze(!1)},[$e]),Fe=H.useCallback(J=>N(He=>{const Ge=new Set(He);return Ge.has(J)?Ge.delete(J):Ge.add(J),Ge}),[]),Oe=H.useCallback(J=>U(He=>{const Ge=new Set(He);return Ge.has(J)?Ge.delete(J):Ge.add(J),Ge}),[]),be=H.useCallback(()=>N(new Set),[]),Ie=H.useCallback(()=>U(new Set),[]),Ae=H.useMemo(()=>ba(t,r),[t,r]),[Rn,zn]=H.useState(()=>bl(M,300,t,r)),Ln=H.useMemo(()=>t.map(J=>{var He,Ge;return{...J,x:((He=Rn[J.id])==null?void 0:He.x)??J.x,y:((Ge=Rn[J.id])==null?void 0:Ge.y)??J.y}}),[t,Rn]),Rr=H.useRef(null),{viewTransform:gt,setViewTransform:yt,toCanvas:Dr,startPan:jt,cursorStyle:ot,setCursorStyle:Xn,handleMouseMove:ii,handleMouseUp:Li}=vv(Rr),{startNodeDrag:Oi,handleDragMove:Hi,handleDragEnd:Wi}=xv(Dr,Ln,zn,Xn),{diagMode:We,setDiagMode:On,mode:dn,setMode:qt,quizNode:qn,setQuizNode:Er,questionsAnswered:Gi,setAnsweredQuestions:Wo,getAnsweredIndices:Pa,handleDiagClick:oi,handleQuizAnswer:Ui,resetDiagnostic:vt,startDeepDive:Br,targetNode:It,belief:Ft,setBelief:or,frontier:Go,visibleFrontier:Vi,hasStarted:si,nextSuggestedId:Nr,expectedRemaining:Uo,pCorrect:Ki,sessionComplete:ai,betaBeliefs:Ir,subgraphIds:Lt,ddClassification:Tt,ddNextNodeId:li,ddComplete:Ot}=qv(Ae,s,o);H.useEffect(()=>{v&&Object.keys(v).length>0&&or(v)},[]);const ci=H.useCallback(J=>{J.lang&&G(J.lang),J.view==="node"?(Q(J.nodeId),fe(null)):J.view==="resource"?(Q(J.nodeId),fe(J.resourceIndex)):J.view==="diagnostic"?J.mode==="quick"?(On(!0),qt("quick"),Q(null)):J.mode==="deepdive"&&J.goalNode&&(On(!0),Br(J.goalNode)):(Q(null),fe(null))},[G,On,qt,Br]),{setRoute:xt}=Pv(ci);H.useEffect(()=>{We?xt(dn==="deepdive"&&It?{view:"diagnostic",mode:"deepdive",goalNode:It,lang:P}:{view:"diagnostic",mode:"quick",lang:P}):X?oe!=null?xt({view:"resource",nodeId:X,resourceIndex:oe,lang:P}):xt({view:"node",nodeId:X,lang:P}):xt({view:"graph",lang:P})},[X,oe,We,dn,It,P,xt]);const Zi=H.useMemo(()=>{const J=B.toLowerCase(),He=t.filter(Ge=>!(L.size>0&&!L.has(Ge.scope)||E.size>0&&!E.has(Ge.section)||J&&!Ge.label.toLowerCase().includes(J)&&!Ge.labelPl.toLowerCase().includes(J)));return He.length<t.length?new Set(He.map(Ge=>Ge.id)):null},[t,L,E,B]),Fr=X||pe,Vo=H.useMemo(()=>{var He,Ge;if(!Fr)return null;const J=new Set([Fr]);return(He=Ae.prereqs[Fr])==null||He.forEach(Hn=>J.add(Hn)),(Ge=Ae.dependents[Fr])==null||Ge.forEach(Hn=>J.add(Hn)),J},[Fr,Ae]),Ko=H.useMemo(()=>!We||dn!=="deepdive"||Lt.length===0?null:new Set(Lt),[We,dn,Lt]),Ht=H.useCallback(J=>{const He=J.target.closest("[data-node-id]");if(He){Oi(He.getAttribute("data-node-id"),J.clientX,J.clientY),J.stopPropagation();return}jt(J.clientX,J.clientY)},[Oi,jt]),Zo=H.useCallback(J=>{Hi(J.clientX,J.clientY)||ii(J)},[Hi,ii]),Yi=H.useCallback(()=>{Wi(),Li()},[Wi,Li]),Ca=H.useCallback(J=>{T&&!J.target.closest("[data-node-id]")&&Q(null)},[T]),sr=H.useRef(!1);H.useEffect(()=>{if(!(!We||dn!=="quick")&&!qn&&Nr&&!ai&&si&&sr.current){sr.current=!1;const J=setTimeout(()=>Er(Nr),400);return()=>clearTimeout(J)}},[We,dn,qn,Nr,ai,si]),H.useEffect(()=>{if(!(!We||dn!=="deepdive")&&!qn&&li&&!Ot&&sr.current){sr.current=!1;const J=setTimeout(()=>Er(li),400);return()=>clearTimeout(J)}},[We,dn,qn,li,Ot]),H.useEffect(()=>{const J=He=>{He.key==="Escape"&&(Q(null),re(!1))};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[]);const Yo=H.useCallback(J=>{F(J),zn(bl(J,300,t,r)),yt(T?Vd:Ud)},[yt,t,r,T]),Qo=H.useCallback(()=>{We?(On(!1),vt(),Q(null)):de(!0)},[We,On,vt]),ui=H.useCallback(J=>{de(!1),vt(),J==="deepdive"?(On(!0),re(!0)):(On(!0),qt("quick"),Q(null))},[On,qt,vt]),Ra=H.useCallback(J=>{$e(!0),ze(!1),(J==="quick"||J==="deepdive")&&ui(J)},[$e,ui]),Da=H.useMemo(()=>{if(dn!=="deepdive")return{};const J={};for(const[He,Ge]of Object.entries(Tt))Ge==="known"?J[He]="known":Ge==="unknown"&&(J[He]="unknown");return J},[dn,Tt]),Je=dn==="deepdive"?Da:Ft,Ea=dn==="deepdive"?Lt.filter(J=>Tt[J]==="uncertain"):Vi,Qi=P==="pl"?h.title??h.titleEn:h.titleEn??h.title,Xo=Se||ve||Ee,Lr=(J,He="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:J?`1px solid ${He}`:`1px solid ${I.border}`,background:J?`${He}22`:"transparent",color:J?He:I.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:J?600:400});return y.jsxs("div",{style:{width:"100%",height:"100dvh",background:I.bg,fontFamily:Qe,color:I.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:T?"8px 12px":"8px 16px",borderBottom:`1px solid ${I.borderSubtle}`,display:"flex",alignItems:"center",gap:T?8:10,flexShrink:0},children:[(k||f)&&y.jsx("button",{onClick:k??f,style:{...Lr(!1),padding:"7px 10px"},children:"←"}),y.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:I.textPrimary,letterSpacing:T?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:Qi}),y.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${I.border}`},children:[y.jsx("button",{onClick:()=>{We&&(On(!1),vt(),Q(null))},style:{padding:T?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:We?400:700,background:We?"transparent":"#4a9eff22",color:We?I.textDim:"#4a9eff",minHeight:36},children:K("exploreMode",P)}),y.jsx("button",{onClick:()=>{We||de(!0)},style:{padding:T?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${I.border}`,fontWeight:We?700:400,background:We?"#f39c1222":"transparent",color:We?"#f39c12":I.textDim,minHeight:36},children:K(We?dn==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",P)})]}),We&&y.jsx("button",{onClick:()=>re(!0),style:Lr(dn==="deepdive","#8e44ad"),children:K("goalBtn",P)}),y.jsx(Ix,{lang:P,setLang:J=>G(J),layoutId:M,layouts:nm,onLayoutChange:Yo,searchTerm:B,setSearchTerm:Z,filterScope:L,toggleScope:Fe,clearScope:be,filterSection:E,toggleSection:Oe,clearSection:Ie,SECTIONS:a,SCOPE_COLORS:c,SCOPE_LABELS:d,isMobile:T})]}),y.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[y.jsxs("svg",{ref:Rr,width:"100%",height:"100%",style:{cursor:ot,touchAction:"none",pointerEvents:Xo?"none":"auto"},onMouseDown:Ht,onMouseMove:Zo,onMouseUp:Yi,onMouseLeave:Yi,onClick:J=>{if(Ca(J),!We)return;const He=J.target.closest("[data-node-id]");He&&oi(He.getAttribute("data-node-id"),J.shiftKey)},children:[y.jsxs("defs",{children:[y.jsx("marker",{id:"arrow-default",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#3a5578"})}),y.jsx("marker",{id:"arrow-hi",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#4a9eff"})}),y.jsx("marker",{id:"arrow-dim",markerWidth:"6",markerHeight:"6",refX:"5",refY:"3",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L6,3 L0,6 L1.5,3 Z",fill:"#151b26"})})]}),y.jsxs("g",{transform:`translate(${gt.x},${gt.y}) scale(${gt.scale})`,children:[y.jsx(Cv,{edges:r,nodes:Ln,highlightedIds:We&&dn==="deepdive"?Ko:Vo}),y.jsx(Ev,{nodes:Ln,filteredIds:We&&dn==="deepdive"?Ko:Zi,highlightedIds:We?null:Vo,selected:X,onSelect:J=>{if(We){oi(J,!1);return}fe(null),Q(J===X?null:J)},onHover:ee,lang:P,diagMode:We,belief:Je,frontier:Ea,scale:gt.scale,scopeColors:c})]})]}),X&&!We&&!Ce&&y.jsx(zx,{nodeId:X,nodes:Ln,adjacency:Ae,lang:P,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:a,belief:Je,evidence:b,onClose:()=>Q(null),onNavigate:J=>Q(J),onShowPath:J=>{Q(null),De(J)}}),Ce&&y.jsx(qx,{goalId:Ce,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:a,belief:Je,evidence:b,lang:P,onSelectTopic:J=>{De(null),Q(J)},onClose:()=>De(null)}),We&&qn&&y.jsx(Tx,{nodeId:qn,nodes:Ln,lang:P,questionBank:s,excludeIndices:Pa(qn),isMobile:T,onAnswer:(J,He,Ge)=>{sr.current=!0,Ui(qn,J,He,Ge)},onSkip:J=>{typeof J=="number"&&Wo(He=>new Set([...He,`${qn}:${J}`])),Er(null)}}),We&&dn==="quick"&&y.jsx(Mx,{belief:Ft,frontier:Go,visibleFrontier:Vi,hasStarted:si,nextSuggestedId:Nr,sessionComplete:ai,adjacency:Ae,expectedRemaining:Uo,pCorrect:Ki,questionsAnswered:Gi,nodes:Ln,lang:P,onNodeClick:J=>Er(J),onReset:vt,SCOPE_LABELS:d,isMobile:T}),We&&dn==="deepdive"&&It&&y.jsx(Px,{nodes:Ln,lang:P,targetNode:It,subgraphIds:Lt,ddClassification:Tt,betaBeliefs:Ir,ddComplete:Ot,ddNextNodeId:li,questionsAnswered:Gi,onNodeClick:J=>Er(J),onReset:vt,isMobile:T}),!T&&y.jsx(Rx,{lang:P,diagMode:We,hasBelief:Object.keys(Je).length>0,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:a}),y.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([J,He])=>y.jsx("button",{onClick:()=>{He===null?(zn(bl(M,300,t,r)),yt(T?Vd:Ud)):yt(Ge=>({...Ge,scale:Math.max(.15,Math.min(5,Ge.scale*He))}))},style:{width:44,height:44,background:I.surface,border:`1px solid ${I.border}`,color:I.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:J},J))}),T&&We&&!qn&&y.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${I.surface}ee`,borderTop:`1px solid ${I.border}`,display:"flex",gap:0,zIndex:20},children:[y.jsx("button",{onClick:()=>re(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${I.border}`,color:dn==="deepdive"?"#c39bd3":I.textDim,cursor:"pointer"},children:K("goalBtn",P)}),y.jsx("button",{onClick:Qo,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:K("reset",P)})]})]}),Ee&&y.jsx(Dx,{nodes:Ln,lang:P,SECTIONS:a,SCOPE_COLORS:c,onSelect:J=>{re(!1),Br(J)},onClose:()=>re(!1)}),y.jsx(Ex,{isOpen:ve,onSelect:ui,onClose:()=>de(!1),lang:P}),y.jsx(Nx,{isOpen:Se,onSelect:Ra,onClose:Be,lang:P})]})}function Lx({lang:o,setLang:t,themeId:r,onThemeChange:s,onStartQuiz:a,onBrowseMap:c}){const[d,h]=H.useState("standard");return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:I.bg,fontFamily:Qe,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[y.jsxs("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:10,alignItems:"center"},children:[y.jsx("div",{style:{display:"flex",gap:5},children:Object.entries(Xl).map(([f,v])=>y.jsx("button",{onClick:()=>s(f),title:v.name,style:{width:18,height:18,borderRadius:"50%",background:v.bg,border:r===f?`2px solid ${v.textPrimary}`:`2px solid ${v.border}`,cursor:"pointer",padding:0,boxShadow:r===f?`0 0 6px ${v.textDim}`:"none"}},f))}),y.jsx("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${I.border}`},children:["pl","en"].map(f=>y.jsx("button",{onClick:()=>t(f),style:{padding:"10px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:f==="en"?`1px solid ${I.border}`:"none",background:o===f?"#4a9eff18":"transparent",color:o===f?"#4a9eff":I.textDim,fontWeight:o===f?600:400,fontFamily:Qe},children:f.toUpperCase()},f))})]}),y.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[y.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:I.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:I.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:I.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:I.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:I.edgeDefault,strokeWidth:"1.5"}),y.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),y.jsx("circle",{cx:"14",cy:"44",r:"5",fill:I.known,opacity:"0.8"}),y.jsx("circle",{cx:"40",cy:"44",r:"5",fill:I.frontier,opacity:"0.8"}),y.jsx("circle",{cx:"66",cy:"44",r:"5",fill:I.unknown,opacity:"0.6"})]}),y.jsx("div",{style:{fontSize:13,fontWeight:600,color:I.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:I.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:K("heroTitle",o)}),y.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:I.textDim,maxWidth:360},children:K("heroSub",o)}),y.jsx("button",{onClick:()=>a(d),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:Qe,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:f=>{f.currentTarget.style.background="#4a9eff28",f.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:f=>{f.currentTarget.style.background="#4a9eff18",f.currentTarget.style.borderColor="#4a9eff50"},children:K("heroStart",o)}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,fontSize:12},children:[y.jsx("span",{style:{color:I.textFaint},children:K("heroLength",o)}),y.jsx("select",{value:d,onChange:f=>h(f.target.value),style:{background:I.surface,border:`1px solid ${I.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:Qe,color:I.textBody,cursor:"pointer",outline:"none"},children:Object.entries(Il).map(([f,v])=>y.jsxs("option",{value:f,children:[K(v.labelKey,o)," (~",v.maxQuestions," ",K("heroQuestions",o),")"]},f))})]}),y.jsx("button",{onClick:c,style:{padding:"12px 24px",fontSize:13,fontFamily:Qe,borderRadius:8,border:"none",background:"transparent",color:I.textDim,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:f=>{f.currentTarget.style.color=I.textBody},onMouseLeave:f=>{f.currentTarget.style.color=I.textDim},children:K("heroBrowse",o)}),y.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:I.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:K("heroStep1",o)},{num:"2",text:K("heroStep2",o)},{num:"3",text:K("heroStep3",o)}].map(({num:f,text:v})=>y.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[y.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${I.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:I.textDim,flexShrink:0},children:f}),y.jsx("span",{children:v})]},f))})]})]})}function Ox({RAW_NODES:o,RAW_EDGES:t,QUESTION_BANK:r,lang:s,quizPreset:a="standard",onComplete:c,onExit:d}){var Fe,Oe;const h=Il[a]??Il.standard,f=H.useMemo(()=>ba(o,t),[o,t]),v=H.useMemo(()=>[...new Set([...Object.keys(f.prereqs),...Object.keys(f.dependents),...Object.keys(r)])].map(Ie=>({id:Ie})),[f,r]),b=H.useMemo(()=>Object.fromEntries(o.map(be=>[be.id,be])),[o]),[_,z]=H.useState({}),[k,T]=H.useState({correct:0,incorrect:0,questionsAnswered:0}),[M,F]=H.useState(new Set),[P,G]=H.useState({}),[L,N]=H.useState("answering"),[E,U]=H.useState(null),[B,Z]=H.useState(0),X=H.useMemo(()=>{const be=k.correct+k.incorrect;return be===0?.5:(k.correct+.5)/(be+1)},[k]),Q=H.useMemo(()=>im(v,_,f,X),[v,_,f,X]),pe=H.useMemo(()=>{const be=[];return M.forEach(Ie=>{const[Ae,Rn]=Ie.split(":");Ae===Q&&be.push(parseInt(Rn,10))}),be},[M,Q]),ee=H.useMemo(()=>Q?Xd(r,Q,pe):null,[r,Q,pe]),oe=H.useMemo(()=>ee?Fo.random(ee.options.length):null,[ee]),fe=H.useMemo(()=>oe?oe.apply(ee.options):[],[oe,ee]),Ce=H.useMemo(()=>oe?oe.displayIndex(ee.correct):-1,[oe,ee]),De=H.useMemo(()=>am(v,_,k.questionsAnswered,h),[v,_,k.questionsAnswered,h]);H.useEffect(()=>{De&&k.questionsAnswered>0&&N("done")},[De,k.questionsAnswered]);const Ee=H.useCallback(()=>{E!==null&&N("revealed")},[E]),re=H.useCallback(()=>{const be=E===Ce,Ie=(ee==null?void 0:ee.tests)??{[Q]:1};z(Ae=>Nl(Q,be,Ie,Ae,f)),G(Ae=>({...Ae,[Q]:{correct:be,questionText:(ee==null?void 0:ee.q)??null}})),(ee==null?void 0:ee.index)!=null&&F(Ae=>new Set([...Ae,`${Q}:${ee.index}`])),T(Ae=>({correct:Ae.correct+(be?1:0),incorrect:Ae.incorrect+(be?0:1),questionsAnswered:Ae.questionsAnswered+1})),U(null),N("answering"),Z(Ae=>Ae+1)},[E,Ce,ee,Q,f]),ve=H.useCallback(be=>{const Ie={[Q]:1};z(Ae=>Nl(Q,be,Ie,Ae,f)),G(Ae=>({...Ae,[Q]:{correct:be,questionText:null}})),F(Ae=>new Set([...Ae,`${Q}:-1`])),T(Ae=>({correct:Ae.correct+(be?1:0),incorrect:Ae.incorrect+(be?0:1),questionsAnswered:Ae.questionsAnswered+1})),Z(Ae=>Ae+1)},[Q,f]);H.useEffect(()=>{const be=Ie=>{if(Ie.key==="Enter"&&(L==="answering"&&E!==null?Ee():L==="revealed"&&re()),L==="answering"&&["1","2","3","4"].includes(Ie.key)){const Ae=parseInt(Ie.key)-1;Ae<fe.length&&U(Ae)}};return window.addEventListener("keydown",be),()=>window.removeEventListener("keydown",be)},[L,E,Ee,re,fe.length]),H.useEffect(()=>{L==="done"&&c(_,k,P)},[L]);const de=Q?(s==="pl"?(Fe=b[Q])==null?void 0:Fe.labelPl:(Oe=b[Q])==null?void 0:Oe.label)??Q:"",C=be=>y.jsx("span",{dangerouslySetInnerHTML:{__html:bc(be)}});if(L==="done"||!Q&&k.questionsAnswered>0)return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:I.bg,fontFamily:Qe,display:"flex",alignItems:"center",justifyContent:"center",color:I.textDim,fontSize:14},children:K("quizProcessing",s)});const Y=Object.values(_).filter(be=>be==="known").length,$e=Object.values(_).filter(be=>be==="unknown").length,Se=Y+$e,ze=v.length,Be=ze>0?Math.round(Se/ze*100):0;return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:I.bg,fontFamily:Qe,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("button",{onClick:()=>{(k.questionsAnswered===0||window.confirm(K("quizExitConfirm",s)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:Qe,borderRadius:6,border:`1px solid ${I.border}`,background:"transparent",color:I.textDim,cursor:"pointer"},children:K("quizExit",s)}),y.jsxs("span",{style:{fontSize:12,color:I.textFaint},children:[K("quizQuestion",s)," ",k.questionsAnswered+1]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16},children:[y.jsx("div",{style:{height:3,borderRadius:2,background:I.border,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Be}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:I.textFaint},children:[y.jsxs("span",{children:[Se,"/",ze," ",K("quizClassified",s)]}),y.jsxs("span",{children:[Math.round(X*100),"% ",K("quizAccuracy",s)]})]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:40,animation:"fadeIn 0.25s ease"},children:[y.jsx("div",{style:{fontSize:11,color:I.textFaint,marginBottom:16,letterSpacing:.5},children:de}),ee?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:16,color:I.textPrimary,lineHeight:1.7,marginBottom:28},children:C(ee.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:fe.map((be,Ie)=>{let Ae="transparent",Rn=I.border,zn=I.textBody;return E===Ie&&L==="answering"&&(Ae="#4a9eff12",Rn="#4a9eff60",zn="#4a9eff"),L==="revealed"&&(Ie===Ce?(Ae="#27ae6015",Rn="#27ae6060",zn="#2ecc71"):Ie===E?(Ae="#e74c3c15",Rn="#e74c3c60",zn="#ff6b6b"):zn=I.textFaint),y.jsxs("button",{onClick:()=>{L==="answering"&&U(Ie)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:Qe,cursor:L==="answering"?"pointer":"default",background:Ae,border:`1px solid ${Rn}`,color:zn,lineHeight:1.6,transition:"all 0.15s ease"},children:[y.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][Ie]}),C(be)]},Ie)})}),L==="revealed"&&ee.hint&&y.jsx("div",{style:{fontSize:12,color:I.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${I.border}`},children:C(ee.hint)}),L==="answering"?y.jsxs("button",{onClick:Ee,disabled:E===null,style:{...ma("#4a9eff"),width:"100%",opacity:E===null?.3:1},children:[K("quizCheck",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):y.jsxs("button",{onClick:re,style:{...ma(E===Ce?I.known:"#4a9eff"),width:"100%"},children:[K("quizContinue",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):y.jsxs("div",{children:[y.jsx("p",{style:{fontSize:15,color:I.textBody,lineHeight:1.7,marginBottom:24},children:K("quizNoQuestion",s)}),y.jsxs("div",{style:{display:"flex",gap:10},children:[y.jsx("button",{onClick:()=>ve(!0),style:{...ma(I.known),flex:1},children:K("quizYes",s)}),y.jsx("button",{onClick:()=>ve(!1),style:{...ma(I.unknown),flex:1},children:K("quizNo",s)})]})]})]},B),y.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function ma(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:Qe,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function Hx({RAW_NODES:o,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:s,belief:a,stats:c,evidence:d,lang:h,onSeeMap:f,onRetake:v,onSelectTopic:b}){const _=H.useMemo(()=>ba(o,t),[o,t]),z=H.useMemo(()=>Object.fromEntries(o.map(N=>[N.id,N])),[o]),k=N=>{var E,U;return h==="pl"?(E=z[N])==null?void 0:E.labelPl:(U=z[N])==null?void 0:U.label},T=o.filter(N=>a[N.id]==="known"),M=o.filter(N=>a[N.id]==="unknown"),F=o.length,P=H.useMemo(()=>M.filter(N=>(_.prereqs[N.id]??[]).every(E=>a[E]==="known")).slice(0,8),[M,_,a]),G=c.correct+c.incorrect>0?Math.round(c.correct/(c.correct+c.incorrect)*100):0,L=P.length>0;return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:I.bg,fontFamily:Qe,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:y.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%"},children:[y.jsx("div",{style:{fontSize:11,color:I.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:I.textPrimary,lineHeight:1.3},children:K("resultsTitle",h)}),y.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:I.textDim,lineHeight:1.6},children:[c.questionsAnswered," ",K("resultsAnswered",h)," · ",G,"% ",K("resultsAccuracy",h)]}),y.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[y.jsx(Kd,{count:T.length,label:K("resultsKnown",h),color:I.known,total:F}),y.jsx(Kd,{count:M.length,label:K("resultsToStudy",h),color:"#e74c3c",total:F})]}),L&&y.jsxs("div",{style:{marginBottom:32},children:[y.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:I.textPrimary},children:K("resultsGapsTitle",h)}),y.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:I.textDim,lineHeight:1.6},children:K("resultsGapsSub",h)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:P.map((N,E)=>{var X;const U=(r==null?void 0:r[N.scope])??I.textDim,B=((X=s==null?void 0:s[N.scope])==null?void 0:X[h==="pl"?"pl":"en"])??"",Z=N.resources&&N.resources.length>0;return y.jsxs("div",{onClick:()=>b==null?void 0:b(N.id),style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12,cursor:b?"pointer":"default",transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Q=>{b&&(Q.currentTarget.style.background="#e74c3c14",Q.currentTarget.style.borderColor="#e74c3c40")},onMouseLeave:Q=>{b&&(Q.currentTarget.style.background="#e74c3c08",Q.currentTarget.style.borderColor="#e74c3c20")},children:[y.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${U}18`,border:`1px solid ${U}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:U,flexShrink:0,fontWeight:600},children:E+1}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:I.textPrimary,fontWeight:500},children:k(N.id)}),y.jsxs("div",{style:{fontSize:10,color:I.textFaint,marginTop:2},children:[B,Z&&y.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:K("resultsHasResource",h)})]})]})]},N.id)})}),M.length>P.length&&y.jsxs("div",{style:{marginTop:8,fontSize:11,color:I.textFaint},children:["+",M.length-P.length," ",K("resultsMore",h)]})]}),!L&&M.length===0&&y.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:15,color:I.known,fontWeight:600,marginBottom:4},children:K("resultsAllGood",h)}),y.jsx("div",{style:{fontSize:12,color:I.textDim},children:K("resultsAllGoodSub",h)})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[y.jsx("button",{onClick:f,style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:Qe,borderRadius:8,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer"},children:K("resultsSeeMap",h)}),y.jsx("button",{onClick:()=>{const N=h==="pl"?`Sprawdziłem swoją wiedzę z matmy na oczochodzi.pl — ${T.length}/${F} tematów znanych! Sprawdź się też:`:`I tested my math knowledge on oczochodzi.pl — ${T.length}/${F} topics known! Try it:`,E="https://oczochodzi.pl";navigator.share?navigator.share({title:"oczochodzi.pl",text:N,url:E}).catch(()=>{}):navigator.clipboard.writeText(`${N} ${E}`).then(()=>{alert(h==="pl"?"Skopiowano do schowka!":"Copied to clipboard!")})},style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:Qe,borderRadius:8,border:`1px solid ${I.border}`,background:"transparent",color:I.textBody,cursor:"pointer"},children:K("resultsShare",h)}),y.jsx("button",{onClick:v,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:Qe,borderRadius:8,border:`1px solid ${I.border}`,background:"transparent",color:I.textDim,cursor:"pointer"},children:K("resultsRetake",h)})]}),y.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:`1px solid ${I.border}`,textAlign:"center"},children:[y.jsx("p",{style:{fontSize:12,color:I.textDim,marginBottom:8,lineHeight:1.6},children:K("coffeeText",h)}),y.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:13,fontFamily:Qe,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",textDecoration:"none",cursor:"pointer"},children:K("coffeeBtn",h)})]})]})})}function Kd({count:o,label:t,color:r,total:s}){const a=s>0?Math.round(o/s*100):0;return y.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),y.jsx("div",{style:{fontSize:11,color:I.textFaint,marginTop:6},children:t}),y.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${a}%`,background:r,opacity:.6}})}),y.jsxs("div",{style:{fontSize:10,color:I.textFaint,marginTop:4},children:[a,"% of ",s]})]})}function Wx(){var X;const o=Q7,t=Y7[o],[r,s]=mt("lang","pl"),a=typeof window<"u"&&((X=window.matchMedia)!=null&&X.call(window,"(prefers-color-scheme: light)").matches)?"bright":"midnight",[c,d]=mt("theme",a),[h,f]=H.useState("hero"),[v,b]=H.useState(null),_=H.useCallback(Q=>{ed(Q),d(Q)},[d]);ed(c);const[z,k]=H.useState(null),[T,M]=H.useState(null),[F,P]=H.useState(null),[G,L]=H.useState("standard"),N=H.useCallback((Q="standard")=>{L(Q),k(null),M(null),P(null),f("quiz")},[]),E=H.useCallback((Q,pe,ee)=>{k(Q),M(pe),P(ee??{}),f("results")},[]),U=H.useCallback(Q=>{b(Q??null),f("map")},[]),B=H.useCallback(()=>{k(null),M(null),P(null),f("map")},[]),Z=H.useCallback(()=>{f("hero")},[]);if(!t)return null;switch(h){case"hero":return y.jsx(Lx,{lang:r,setLang:s,themeId:c,onThemeChange:_,onStartQuiz:N,onBrowseMap:B});case"quiz":return y.jsx(Ox,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:G,onComplete:E,onExit:Z});case"results":return y.jsx(Hx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:z,stats:T,evidence:F,lang:r,onSeeMap:U,onRetake:()=>N(G),onSelectTopic:Q=>U(Q)});case"map":return y.jsx(Fx,{courseId:o,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:z,initialEvidence:F,initialSelectedNode:v,initialLang:r,onBackToHome:Z},o);default:return null}}Xf.createRoot(document.getElementById("root")).render(y.jsx(H.StrictMode,{children:y.jsx(Wx,{})}));
