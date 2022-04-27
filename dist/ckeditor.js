/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):"object"==typeof exports?exports.CKEditor=e(require("vue")):t.CKEditor=e(t.Vue)}(window,(function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=10)}([function(t,e,r){"use strict";var n=r(3),o="object"==typeof self&&self&&self.Object===Object&&self,i=n.a||o||Function("return this")();e.a=i},function(t,e,r){"use strict";(function(t){var n=r(3),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.a.process,s=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();e.a=s}).call(this,r(5)(t))},function(e,r){e.exports=t},function(t,e,r){"use strict";(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.a=r}).call(this,r(9))},function(t,e,r){"use strict";(function(t){var n=r(0),o=r(6),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=a&&a.exports===i?n.a.Buffer:void 0,c=(s?s.isBuffer:void 0)||o.a;e.a=c}).call(this,r(5)(t))},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e,r){"use strict";e.a=function(){return!1}},function(t,e,r){"use strict";(function(t){var n=r(0),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o?n.a.Buffer:void 0,s=a?a.allocUnsafe:void 0;e.a=function(t,e){if(e)return t.slice();var r=t.length,n=s?s(r):new t.constructor(r);return t.copy(n),n}}).call(this,r(5)(t))},,function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n);var i=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},a=r(0),s=function(){return a.a.Date.now()},c=/\s/;var u=function(t){for(var e=t.length;e--&&c.test(t.charAt(e)););return e},l=/^\s+/;var f=function(t){return t?t.slice(0,u(t)+1).replace(l,""):t},h=a.a.Symbol,d=Object.prototype,p=d.hasOwnProperty,v=d.toString,b=h?h.toStringTag:void 0;var y=function(t){var e=p.call(t,b),r=t[b];try{t[b]=void 0;var n=!0}catch(t){}var o=v.call(t);return n&&(e?t[b]=r:delete t[b]),o},_=Object.prototype.toString;var g=function(t){return _.call(t)},j=h?h.toStringTag:void 0;var m=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":j&&j in Object(t)?y(t):g(t)};var w=function(t){return null!=t&&"object"==typeof t};var O=function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==m(t)},E=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,A=/^0o[0-7]+$/i,S=parseInt;var P=function(t){if("number"==typeof t)return t;if(O(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=f(t);var r=x.test(t);return r||A.test(t)?S(t.slice(2),r?2:8):E.test(t)?NaN:+t},T=Math.max,D=Math.min;var I=function(t,e,r){var n,o,a,c,u,l,f=0,h=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var r=n,i=o;return n=o=void 0,f=e,c=t.apply(i,r)}function b(t){return f=t,u=setTimeout(_,e),h?v(t):c}function y(t){var r=t-l;return void 0===l||r>=e||r<0||d&&t-f>=a}function _(){var t=s();if(y(t))return g(t);u=setTimeout(_,function(t){var r=e-(t-l);return d?D(r,a-(t-f)):r}(t))}function g(t){return u=void 0,p&&n?v(t):(n=o=void 0,c)}function j(){var t=s(),r=y(t);if(n=arguments,o=this,l=t,r){if(void 0===u)return b(l);if(d)return clearTimeout(u),u=setTimeout(_,e),v(l)}return void 0===u&&(u=setTimeout(_,e)),c}return e=P(e)||0,i(r)&&(h=!!r.leading,a=(d="maxWait"in r)?T(P(r.maxWait)||0,e):a,p="trailing"in r?!!r.trailing:p),j.cancel=function(){void 0!==u&&clearTimeout(u),f=0,n=l=o=u=void 0},j.flush=function(){return void 0===u?c:g(s())},j};var C=function(t,e,r){var n=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),I(t,e,{leading:n,maxWait:e,trailing:o})};var z=function(){this.__data__=[],this.size=0};var N=function(t,e){return t===e||t!=t&&e!=e};var M=function(t,e){for(var r=t.length;r--;)if(N(t[r][0],e))return r;return-1},F=Array.prototype.splice;var R=function(t){var e=this.__data__,r=M(e,t);return!(r<0)&&(r==e.length-1?e.pop():F.call(e,r,1),--this.size,!0)};var V=function(t){var e=this.__data__,r=M(e,t);return r<0?void 0:e[r][1]};var $=function(t){return M(this.__data__,t)>-1};var k=function(t,e){var r=this.__data__,n=M(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};function U(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}U.prototype.clear=z,U.prototype.delete=R,U.prototype.get=V,U.prototype.has=$,U.prototype.set=k;var W=U;var L=function(){this.__data__=new W,this.size=0};var B=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};var H=function(t){return this.__data__.get(t)};var K=function(t){return this.__data__.has(t)};var q,G=function(t){if(!i(t))return!1;var e=m(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},J=a.a["__core-js_shared__"],Q=(q=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"";var X=function(t){return!!Q&&Q in t},Y=Function.prototype.toString;var Z=function(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""},tt=/^\[object .+?Constructor\]$/,et=Function.prototype,rt=Object.prototype,nt=et.toString,ot=rt.hasOwnProperty,it=RegExp("^"+nt.call(ot).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var at=function(t){return!(!i(t)||X(t))&&(G(t)?it:tt).test(Z(t))};var st=function(t,e){return null==t?void 0:t[e]};var ct=function(t,e){var r=st(t,e);return at(r)?r:void 0},ut=ct(a.a,"Map"),lt=ct(Object,"create");var ft=function(){this.__data__=lt?lt(null):{},this.size=0};var ht=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},dt=Object.prototype.hasOwnProperty;var pt=function(t){var e=this.__data__;if(lt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return dt.call(e,t)?e[t]:void 0},vt=Object.prototype.hasOwnProperty;var bt=function(t){var e=this.__data__;return lt?void 0!==e[t]:vt.call(e,t)};var yt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=lt&&void 0===e?"__lodash_hash_undefined__":e,this};function _t(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}_t.prototype.clear=ft,_t.prototype.delete=ht,_t.prototype.get=pt,_t.prototype.has=bt,_t.prototype.set=yt;var gt=_t;var jt=function(){this.size=0,this.__data__={hash:new gt,map:new(ut||W),string:new gt}};var mt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var wt=function(t,e){var r=t.__data__;return mt(e)?r["string"==typeof e?"string":"hash"]:r.map};var Ot=function(t){var e=wt(this,t).delete(t);return this.size-=e?1:0,e};var Et=function(t){return wt(this,t).get(t)};var xt=function(t){return wt(this,t).has(t)};var At=function(t,e){var r=wt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};function St(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}St.prototype.clear=jt,St.prototype.delete=Ot,St.prototype.get=Et,St.prototype.has=xt,St.prototype.set=At;var Pt=St;var Tt=function(t,e){var r=this.__data__;if(r instanceof W){var n=r.__data__;if(!ut||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Pt(n)}return r.set(t,e),this.size=r.size,this};function Dt(t){var e=this.__data__=new W(t);this.size=e.size}Dt.prototype.clear=L,Dt.prototype.delete=B,Dt.prototype.get=H,Dt.prototype.has=K,Dt.prototype.set=Tt;var It=Dt;var Ct=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t},zt=function(){try{var t=ct(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Nt=function(t,e,r){"__proto__"==e&&zt?zt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},Mt=Object.prototype.hasOwnProperty;var Ft=function(t,e,r){var n=t[e];Mt.call(t,e)&&N(n,r)&&(void 0!==r||e in t)||Nt(t,e,r)};var Rt=function(t,e,r,n){var o=!r;r||(r={});for(var i=-1,a=e.length;++i<a;){var s=e[i],c=n?n(r[s],t[s],s,r,t):void 0;void 0===c&&(c=t[s]),o?Nt(r,s,c):Ft(r,s,c)}return r};var Vt=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};var $t=function(t){return w(t)&&"[object Arguments]"==m(t)},kt=Object.prototype,Ut=kt.hasOwnProperty,Wt=kt.propertyIsEnumerable,Lt=$t(function(){return arguments}())?$t:function(t){return w(t)&&Ut.call(t,"callee")&&!Wt.call(t,"callee")},Bt=Array.isArray,Ht=r(4),Kt=/^(?:0|[1-9]\d*)$/;var qt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&Kt.test(t))&&t>-1&&t%1==0&&t<e};var Gt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Jt={};Jt["[object Float32Array]"]=Jt["[object Float64Array]"]=Jt["[object Int8Array]"]=Jt["[object Int16Array]"]=Jt["[object Int32Array]"]=Jt["[object Uint8Array]"]=Jt["[object Uint8ClampedArray]"]=Jt["[object Uint16Array]"]=Jt["[object Uint32Array]"]=!0,Jt["[object Arguments]"]=Jt["[object Array]"]=Jt["[object ArrayBuffer]"]=Jt["[object Boolean]"]=Jt["[object DataView]"]=Jt["[object Date]"]=Jt["[object Error]"]=Jt["[object Function]"]=Jt["[object Map]"]=Jt["[object Number]"]=Jt["[object Object]"]=Jt["[object RegExp]"]=Jt["[object Set]"]=Jt["[object String]"]=Jt["[object WeakMap]"]=!1;var Qt=function(t){return w(t)&&Gt(t.length)&&!!Jt[m(t)]};var Xt=function(t){return function(e){return t(e)}},Yt=r(1),Zt=Yt.a&&Yt.a.isTypedArray,te=Zt?Xt(Zt):Qt,ee=Object.prototype.hasOwnProperty;var re=function(t,e){var r=Bt(t),n=!r&&Lt(t),o=!r&&!n&&Object(Ht.a)(t),i=!r&&!n&&!o&&te(t),a=r||n||o||i,s=a?Vt(t.length,String):[],c=s.length;for(var u in t)!e&&!ee.call(t,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||qt(u,c))||s.push(u);return s},ne=Object.prototype;var oe=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ne)};var ie=function(t,e){return function(r){return t(e(r))}},ae=ie(Object.keys,Object),se=Object.prototype.hasOwnProperty;var ce=function(t){if(!oe(t))return ae(t);var e=[];for(var r in Object(t))se.call(t,r)&&"constructor"!=r&&e.push(r);return e};var ue=function(t){return null!=t&&Gt(t.length)&&!G(t)};var le=function(t){return ue(t)?re(t):ce(t)};var fe=function(t,e){return t&&Rt(e,le(e),t)};var he=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e},de=Object.prototype.hasOwnProperty;var pe=function(t){if(!i(t))return he(t);var e=oe(t),r=[];for(var n in t)("constructor"!=n||!e&&de.call(t,n))&&r.push(n);return r};var ve=function(t){return ue(t)?re(t,!0):pe(t)};var be=function(t,e){return t&&Rt(e,ve(e),t)},ye=r(7);var _e=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e};var ge=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var je=function(){return[]},me=Object.prototype.propertyIsEnumerable,we=Object.getOwnPropertySymbols,Oe=we?function(t){return null==t?[]:(t=Object(t),ge(we(t),(function(e){return me.call(t,e)})))}:je;var Ee=function(t,e){return Rt(t,Oe(t),e)};var xe=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},Ae=ie(Object.getPrototypeOf,Object),Se=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)xe(e,Oe(t)),t=Ae(t);return e}:je;var Pe=function(t,e){return Rt(t,Se(t),e)};var Te=function(t,e,r){var n=e(t);return Bt(t)?n:xe(n,r(t))};var De=function(t){return Te(t,le,Oe)};var Ie=function(t){return Te(t,ve,Se)},Ce=ct(a.a,"DataView"),ze=ct(a.a,"Promise"),Ne=ct(a.a,"Set"),Me=ct(a.a,"WeakMap"),Fe=Z(Ce),Re=Z(ut),Ve=Z(ze),$e=Z(Ne),ke=Z(Me),Ue=m;(Ce&&"[object DataView]"!=Ue(new Ce(new ArrayBuffer(1)))||ut&&"[object Map]"!=Ue(new ut)||ze&&"[object Promise]"!=Ue(ze.resolve())||Ne&&"[object Set]"!=Ue(new Ne)||Me&&"[object WeakMap]"!=Ue(new Me))&&(Ue=function(t){var e=m(t),r="[object Object]"==e?t.constructor:void 0,n=r?Z(r):"";if(n)switch(n){case Fe:return"[object DataView]";case Re:return"[object Map]";case Ve:return"[object Promise]";case $e:return"[object Set]";case ke:return"[object WeakMap]"}return e});var We=Ue,Le=Object.prototype.hasOwnProperty;var Be=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&Le.call(t,"index")&&(r.index=t.index,r.input=t.input),r},He=a.a.Uint8Array;var Ke=function(t){var e=new t.constructor(t.byteLength);return new He(e).set(new He(t)),e};var qe=function(t,e){var r=e?Ke(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)},Ge=/\w*$/;var Je=function(t){var e=new t.constructor(t.source,Ge.exec(t));return e.lastIndex=t.lastIndex,e},Qe=h?h.prototype:void 0,Xe=Qe?Qe.valueOf:void 0;var Ye=function(t){return Xe?Object(Xe.call(t)):{}};var Ze=function(t,e){var r=e?Ke(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};var tr=function(t,e,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return Ke(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return qe(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ze(t,r);case"[object Map]":return new n;case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return Je(t);case"[object Set]":return new n;case"[object Symbol]":return Ye(t)}},er=Object.create,rr=function(){function t(){}return function(e){if(!i(e))return{};if(er)return er(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();var nr=function(t){return"function"!=typeof t.constructor||oe(t)?{}:rr(Ae(t))};var or=function(t){return w(t)&&"[object Map]"==We(t)},ir=Yt.a&&Yt.a.isMap,ar=ir?Xt(ir):or;var sr=function(t){return w(t)&&"[object Set]"==We(t)},cr=Yt.a&&Yt.a.isSet,ur=cr?Xt(cr):sr,lr={};lr["[object Arguments]"]=lr["[object Array]"]=lr["[object ArrayBuffer]"]=lr["[object DataView]"]=lr["[object Boolean]"]=lr["[object Date]"]=lr["[object Float32Array]"]=lr["[object Float64Array]"]=lr["[object Int8Array]"]=lr["[object Int16Array]"]=lr["[object Int32Array]"]=lr["[object Map]"]=lr["[object Number]"]=lr["[object Object]"]=lr["[object RegExp]"]=lr["[object Set]"]=lr["[object String]"]=lr["[object Symbol]"]=lr["[object Uint8Array]"]=lr["[object Uint8ClampedArray]"]=lr["[object Uint16Array]"]=lr["[object Uint32Array]"]=!0,lr["[object Error]"]=lr["[object Function]"]=lr["[object WeakMap]"]=!1;var fr=function t(e,r,n,o,a,s){var c,u=1&r,l=2&r,f=4&r;if(n&&(c=a?n(e,o,a,s):n(e)),void 0!==c)return c;if(!i(e))return e;var h=Bt(e);if(h){if(c=Be(e),!u)return _e(e,c)}else{var d=We(e),p="[object Function]"==d||"[object GeneratorFunction]"==d;if(Object(Ht.a)(e))return Object(ye.a)(e,u);if("[object Object]"==d||"[object Arguments]"==d||p&&!a){if(c=l||p?{}:nr(e),!u)return l?Pe(e,be(c,e)):Ee(e,fe(c,e))}else{if(!lr[d])return a?e:{};c=tr(e,d,u)}}s||(s=new It);var v=s.get(e);if(v)return v;s.set(e,c),ur(e)?e.forEach((function(o){c.add(t(o,r,n,o,e,s))})):ar(e)&&e.forEach((function(o,i){c.set(i,t(o,r,n,i,e,s))}));var b=h?void 0:(f?l?Ie:De:l?ve:le)(e);return Ct(b||e,(function(o,i){b&&(o=e[i=o]),Ft(c,i,t(o,r,n,i,e,s))})),c};var hr=function(t,e){return fr(t,5,e="function"==typeof e?e:void 0)},dr=Function.prototype,pr=Object.prototype,vr=dr.toString,br=pr.hasOwnProperty,yr=vr.call(Object);var _r=function(t){if(!w(t)||"[object Object]"!=m(t))return!1;var e=Ae(t);if(null===e)return!0;var r=br.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&vr.call(r)==yr};var gr=function(t){return w(t)&&1===t.nodeType&&!_r(t)};function jr(t,e=new Set){const r=[t],n=new Set;let o=0;for(;r.length>o;){const t=r[o++];if(!(n.has(t)||mr(t)||e.has(t)))if(n.add(t),t[Symbol.iterator])try{for(const e of t)r.push(e)}catch(t){}else for(const e in t)"defaultValue"!==e&&r.push(t[e])}return n}function mr(t){const e=Object.prototype.toString.call(t),r=typeof t;return"number"===r||"boolean"===r||"string"===r||"symbol"===r||"function"===r||"[object Date]"===e||"[object RegExp]"===e||"[object Module]"===e||null==t||t instanceof EventTarget||t instanceof Event}class wr extends class{constructor(t){if(this.crashes=[],this.state="initializing",this._crashNumberLimit="number"==typeof t.crashNumberLimit?t.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod="number"==typeof t.minimumNonErrorTimePeriod?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const e=t.error||t.reason;e instanceof Error&&this._handleError(e,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(t=>t!==e)}_fire(t,...e){const r=this._listeners[t]||[];for(const t of r)t.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e.filename,lineno:e.lineno,colno:e.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&void 0!==t.context&&null!==t.context&&"ready"===this.state&&this._isErrorComingFromThisItem(t)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;return(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}{constructor(t,e={}){super(e),this._editor=null,this._throttledSave=C(this._save.bind(this),"number"==typeof e.saveInterval?e.saveInterval:5e3),this._creator=(e,r)=>t.create(e,r),this._destructor=t=>t.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{if("string"==typeof this._elementOrData)return this.create(this._data,this._config,this._config.context);{const t=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,t,t.context)}}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=t,this._config=this._cloneEditorConfiguration(e)||{},this._config.context=r,this._creator(t,this._config))).then(t=>{this._editor=t,t.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=t.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;if(t!==this._lastDocumentVersion)try{this._data=this._getData(),this._lastDocumentVersion=t}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t={};for(const e of this._editor.model.document.getRootNames())t[e]=this._editor.data.get({rootName:e});return t}_isErrorComingFromThisItem(t){return function(t,e,r=new Set){if(t===e&&("object"==typeof(n=t)&&null!==n))return!0;var n;const o=jr(t,r),i=jr(e,r);for(const t of o)if(i.has(t))return!0;return!1}(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return hr(t,(t,e)=>gr(t)||"context"===e?t:void 0)}}var Or={name:"ckeditor",created(){this.watchdog=null;const{CKEDITOR_VERSION:t}=window;if(t){const[e]=t.split(".").map(Number);e<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(n.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","input","focus","blur","error","ready","destroy"],props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({lastEditorData:{type:String,default:""}}),mounted(){this._initializeEditor()},beforeUnmount(){const t=this.getEditor();this._destroyEditor(),this.$emit("destroy",t)},watch:{modelValue(t,e){const r=this.getEditor();r&&t!==e&&t!==this.lastEditorData&&r.setData(t)},disabled(t){const e=this.getEditor();e&&(t?e.enableReadOnlyMode("Integration Sample"):e.disableReadOnlyMode("Integration Sample"))}},methods:{setUpEditorEvents(t){const e=I(e=>{const r=this.lastEditorData=t.getData();this.$emit("update:modelValue",r,e,t),this.$emit("input",r,e,t)},300,{leading:!0});t.model.document.on("change:data",e),t.editing.view.document.on("focus",e=>{this.$emit("focus",e,t)}),t.editing.view.document.on("blur",e=>{this.$emit("blur",e,t)})},getWatchdog:()=>wr,getEditor(){return this.watchdog?this.watchdog.editor:null},_initializeEditor(){const t=this.getWatchdog();this.watchdog=new t(this.editor),this.watchdog.setCreator((t,e)=>this._createEditor(t,e)),this.watchdog.on("error",(t,{error:e,causesRestart:r})=>{console.error(e),this.$emit("error",{phase:"runtime",willEditorRestart:r,error:e})}),this.watchdog.create(this.$el,this._getConfig()).catch(t=>{console.error(t),this.$emit("error",{phase:"initialization",willEditorRestart:!1,error:t})})},_destroyEditor(){this.watchdog&&(this.watchdog.destroy(),this.watchdog=null)},_createEditor(t,e){return this.editor.create(t,e).then(t=>(this.disabled&&t.enableReadOnlyMode("Integration Sample"),this.setUpEditorEvents(t),this.$emit("ready",t),t))},_getConfig(){const t=Object.assign({},this.config);return this.modelValue&&(t.initialData=this.modelValue),t}}};const Er=o.a?o.a.version:n.version,[xr]=Er.split(".").map(t=>parseInt(t,10));if(xr<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Ar={install(t){t.component("ckeditor",Or)},component:Or};e.default=Ar}]).default}));
//# sourceMappingURL=ckeditor.js.map