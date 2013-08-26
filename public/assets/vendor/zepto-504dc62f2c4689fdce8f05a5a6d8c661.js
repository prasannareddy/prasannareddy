!function(t){String.prototype.trim===t&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.reduce===t&&(Array.prototype.reduce=function(e){if(void 0===this||null===this)throw new TypeError;var n,i=Object(this),s=i.length>>>0,r=0;if("function"!=typeof e)throw new TypeError;if(0==s&&1==arguments.length)throw new TypeError;if(arguments.length>=2)n=arguments[1];else for(;;){if(r in i){n=i[r++];break}if(++r>=s)throw new TypeError}for(;s>r;)r in i&&(n=e.call(t,n,i[r],r,i)),r++;return n})}();var Zepto=function(){function t(t){return null==t?String(t):V[J.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function s(e){return"object"==t(e)}function r(t){return s(t)&&!n(t)&&t.__proto__==Object.prototype}function o(t){return t instanceof Array}function a(t){return"number"==typeof t.length}function l(t){return N.call(t,function(t){return null!=t})}function c(t){return t.length>0?T.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function d(t){return t in $?$[t]:$[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||H[u(t)]?e:e+"px"}function h(t){var e,n;return D[t]||(e=A.createElement(t),A.body.appendChild(e),n=L(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),D[t]=n),D[t]}function p(t){return"children"in t?F.call(t.children):T.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function g(t,e,n){for(C in e)n&&(r(e[C])||o(e[C]))?(r(e[C])&&!r(t[C])&&(t[C]={}),o(e[C])&&!o(t[C])&&(t[C]=[]),g(t[C],e[C],n)):e[C]!==w&&(t[C]=e[C])}function m(t,e){return e===w?T(t):T(t).filter(e)}function v(t,n,i,s){return e(n)?n.call(t,i,s):n}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className,i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:(i?n.baseVal=e:t.className=e,void 0)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:isNaN(e=Number(t))?/^[\[\{]/.test(t)?T.parseJSON(t):t:e):t}catch(n){return t}}function _(t,e){e(t);for(var n in t.childNodes)_(t.childNodes[n],e)}var w,C,T,k,E,j,S=[],F=S.slice,N=S.filter,A=window.document,D={},$={},L=A.defaultView.getComputedStyle,H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},M=/^\s*<(\w+|!)[^>]*>/,z=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,O=/^(?:body|html)$/i,P=["val","css","html","text","data","width","height","offset"],q=["after","prepend","before","append"],R=A.createElement("table"),I=A.createElement("tr"),B={tr:A.createElement("tbody"),tbody:R,thead:R,tfoot:R,td:I,th:I,"*":A.createElement("div")},W=/complete|loaded|interactive/,Z=/^\.([\w-]+)$/,X=/^#([\w-]*)$/,U=/^[\w-]+$/,V={},J=V.toString,Y={},G=A.createElement("div");return Y.matches=function(t,e){if(!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,s=t.parentNode,r=!s;return r&&(s=G).appendChild(t),i=~Y.qsa(s,e).indexOf(t),r&&G.removeChild(t),i},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},j=function(t){return N.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){t.replace&&(t=t.replace(z,"<$1></$2>")),e===w&&(e=M.test(t)&&RegExp.$1),e in B||(e="*");var i,s,o=B[e];return o.innerHTML=""+t,s=T.each(F.call(o.childNodes),function(){o.removeChild(this)}),r(n)&&(i=T(s),T.each(n,function(t,e){P.indexOf(t)>-1?i[t](e):i.attr(t,e)})),s},Y.Z=function(t,e){return t=t||[],t.__proto__=T.fn,t.selector=e||"",t},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){if(t){if(e(t))return T(A).ready(t);if(Y.isZ(t))return t;var i;if(o(t))i=l(t);else if(s(t))i=[r(t)?T.extend({},t):t],t=null;else if(M.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return T(n).find(t);i=Y.qsa(A,t)}return Y.Z(i,t)}return Y.Z()},T=function(t,e){return Y.init(t,e)},T.extend=function(t){var e,n=F.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){g(t,n,e)}),t},Y.qsa=function(t,e){var n;return i(t)&&X.test(e)?(n=t.getElementById(RegExp.$1))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:F.call(Z.test(e)?t.getElementsByClassName(RegExp.$1):U.test(e)?t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=function(t,e){return t!==e&&t.contains(e)},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=o,T.isPlainObject=r,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},T.camelCase=E,T.trim=function(t){return t.trim()},T.uuid=0,T.support={},T.expr={},T.map=function(t,e){var n,i,s,r=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(s in t)n=e(t[s],s),null!=n&&r.push(n);return c(r)},T.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},T.grep=function(t,e){return N.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){V["[object "+e+"]"]=e.toLowerCase()}),T.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(F.apply(this,arguments))},ready:function(t){return W.test(A.readyState)?t(T):A.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===w?F.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return S.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(N.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return T(j(this.concat(T(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?F.call(t):T(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return s(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!s(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!s(t)?t:T(t)},find:function(t){var e,n=this;return e="object"==typeof t?T(t).filter(function(){var t=this;return S.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)})},closest:function(t,e){var n=this[0],s=!1;for("object"==typeof t&&(s=T(t));n&&!(s?s.indexOf(n)>=0:Y.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(j(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return F.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return N.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=null),"none"==L(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=T(t).get(0),s=i.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):s?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=T(this),s=i.contents(),r=n?t.call(this,e):t;s.length?s.wrapAll(r):i.append(r)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return t===w?this.length>0?this[0].innerHTML:null:this.each(function(e){var n=this.innerHTML;T(this).empty().append(v(this,t,e,n))})},text:function(t){return t===w?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(t,e){var n;return"string"==typeof t&&e===w?0==this.length||1!==this[0].nodeType?w:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:this.each(function(n){if(1===this.nodeType)if(s(t))for(C in t)y(this,C,t[C]);else y(this,t,v(this,e,n,this.getAttribute(t)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&y(this,t)})},prop:function(t,e){return e===w?this[0]&&this[0][t]:this.each(function(n){this[t]=v(this,e,n,this[t])})},data:function(t,e){var n=this.attr("data-"+u(t),e);return null!==n?x(n):w},val:function(t){return t===w?this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=v(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var n=T(this),i=v(this,t,e,n.offset()),s=n.offsetParent().offset(),r={top:i.top-s.top,left:i.left-s.left};"static"==n.css("position")&&(r.position="relative"),n.css(r)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2&&"string"==typeof e)return this[0]&&(this[0].style[E(e)]||L(this[0],"").getPropertyValue(e));var i="";if("string"==t(e))n||0===n?i=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for(C in e)e[C]||0===e[C]?i+=u(C)+":"+f(C,e[C])+";":this.each(function(){this.style.removeProperty(u(C))});return this.each(function(){this.style.cssText+=";"+i})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return S.some.call(this,function(t){return this.test(b(t))},d(t))},addClass:function(t){return this.each(function(e){k=[];var n=b(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||k.push(t)},this),k.length&&b(this,n+(n?" ":"")+k.join(" "))})},removeClass:function(t){return this.each(function(e){return t===w?b(this,""):(k=b(this),v(this,t,e,k).split(/\s+/g).forEach(function(t){k=k.replace(d(t)," ")}),b(this,k.trim()),void 0)})},toggleClass:function(t,e){return this.each(function(n){var i=T(this),s=v(this,t,n,b(this));s.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})})},scrollTop:function(){return this.length?"scrollTop"in this[0]?this[0].scrollTop:this[0].scrollY:void 0},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=O.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,i.top+=parseFloat(T(e[0]).css("border-top-width"))||0,i.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!O.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){T.fn[t]=function(e){var s,r=this[0],o=t.replace(/./,function(t){return t[0].toUpperCase()});return e===w?n(r)?r["inner"+o]:i(r)?r.documentElement["offset"+o]:(s=this.offset())&&s[t]:this.each(function(n){r=T(this),r.css(t,v(this,e,n,r[t]()))})}}),q.forEach(function(e,n){var i=n%2;T.fn[e]=function(){var e,s,r=T.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:Y.fragment(n)}),o=this.length>1;return r.length<1?this:this.each(function(t,e){s=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null,r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!s)return T(t).remove();_(s.insertBefore(t,e),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},T.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),Y.Z.prototype=T.fn,Y.uniq=j,Y.deserializeValue=x,T.zepto=Y,T}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/WebKit\/([\d.]+)/),s=t.match(/(Android)\s+([\d.]+)/),r=t.match(/(iPad).*OS\s([\d_]+)/),o=!r&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=a&&t.match(/TouchPad/),c=t.match(/Kindle\/([\d.]+)/),u=t.match(/Silk\/([\d._]+)/),d=t.match(/(BlackBerry).*Version\/([\d.]+)/),f=t.match(/(BB10).*Version\/([\d.]+)/),h=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),p=t.match(/PlayBook/),g=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),m=t.match(/Firefox\/([\d.]+)/);(n.webkit=!!i)&&(n.version=i[1]),s&&(e.android=!0,e.version=s[2]),o&&(e.ios=e.iphone=!0,e.version=o[2].replace(/_/g,".")),r&&(e.ios=e.ipad=!0,e.version=r[2].replace(/_/g,".")),a&&(e.webos=!0,e.version=a[2]),l&&(e.touchpad=!0),d&&(e.blackberry=!0,e.version=d[2]),f&&(e.bb10=!0,e.version=f[2]),h&&(e.rimtabletos=!0,e.version=h[2]),p&&(n.playbook=!0),c&&(e.kindle=!0,e.version=c[1]),u&&(n.silk=!0,n.version=u[1]),!u&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),g&&(n.chrome=!0,n.version=g[1]),m&&(n.firefox=!0,n.version=m[1]),e.tablet=!!(r||p||s&&!t.match(/Mobile/)||m&&t.match(/Tablet/)),e.phone=!(e.tablet||!(s||o||a||d||f||g&&t.match(/Android/)||g&&t.match(/CriOS\/([\d.]+)/)||m&&t.match(/Mobile/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,r,o){if(n=i(n),n.ns)var a=s(n.ns);return(f[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!a.test(t.ns)||r&&e(t.fn)!==e(r)||o&&t.sel!=o)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function s(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function r(e,n,i){"string"!=t.type(e)?t.each(e,i):e.split(/\s/).forEach(function(t){i(t,n)})}function o(t,e){return t.del&&("focus"==t.e||"blur"==t.e)||!!e}function a(t){return g[t]||t}function l(n,s,l,c,u,d){var h=e(n),p=f[h]||(f[h]=[]);r(s,l,function(e,s){var r=i(e);r.fn=s,r.sel=c,r.e in g&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=u&&u(s,e);var l=r.del||s;r.proxy=function(t){var e=l.apply(n,[t].concat(t.data));return e===!1&&(t.preventDefault(),t.stopPropagation()),e},r.i=p.length,p.push(r),n.addEventListener(a(r.e),r.proxy,o(r,d))})}function c(t,i,s,l,c){var u=e(t);r(i||"",s,function(e,i){n(t,e,i,l).forEach(function(e){delete f[u][e.i],t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e){var n,i={originalEvent:e};for(n in e)y.test(n)||void 0===e[n]||(i[n]=e[n]);return t.each(b,function(t,n){i[t]=function(){return this[n]=m,e[t].apply(e,arguments)},i[n]=v}),i}function d(t){if(!("defaultPrevented"in t)){t.defaultPrevented=!1;var e=t.preventDefault;t.preventDefault=function(){this.defaultPrevented=!0,e.call(this)}}}var f=(t.zepto.qsa,{}),h=1,p={},g={mouseenter:"mouseover",mouseleave:"mouseout"};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",t.event={add:l,remove:c},t.proxy=function(n,i){if(t.isFunction(n)){var s=function(){return n.apply(i,arguments)};return s._zid=e(n),s}if("string"==typeof i)return t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e){return this.each(function(){l(this,t,e)})},t.fn.unbind=function(t,e){return this.each(function(){c(this,t,e)})},t.fn.one=function(t,e){return this.each(function(n,i){l(this,t,e,null,function(t,e){return function(){var n=t.apply(i,arguments);return c(i,e,t),n}})})};var m=function(){return!0},v=function(){return!1},y=/^([A-Z]|layer[XY]$)/,b={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(e,n,i){return this.each(function(s,r){l(r,n,i,e,function(n){return function(i){var s,o=t(i.target).closest(e,r).get(0);return o?(s=t.extend(u(i),{currentTarget:o,liveFired:r}),n.apply(o,[s].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,e,n){return this.each(function(){c(this,e,n,t)})},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i){return!n||t.isFunction(n)?this.bind(e,n||i):this.delegate(n,e,i)},t.fn.off=function(e,n,i){return!n||t.isFunction(n)?this.unbind(e,n||i):this.undelegate(n,e,i)},t.fn.trigger=function(e,n){return("string"==typeof e||t.isPlainObject(e))&&(e=t.Event(e)),d(e),e.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(e)})},t.fn.triggerHandler=function(e,i){var s,r;return this.each(function(o,a){s=u("string"==typeof e?t.Event(e):e),s.data=i,s.target=a,t.each(n(a,e.type||e),function(t,e){return r=e.proxy(s),s.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){"string"!=typeof t&&(e=t,t=e.type);var n=document.createEvent(p[t]||"Events"),i=!0;if(e)for(var s in e)"bubbles"==s?i=!!e[s]:n[s]=e[s];return n.initEvent(t,i,!0,null,null,null,null,null,null,null,null,null,null,null,null),n.isDefaultPrevented=function(){return this.defaultPrevented},n}}(Zepto),function(t){function e(e,n,i){var s=t.Event(n);return t(e).trigger(s,i),!s.defaultPrevented}function n(t,n,i,s){return t.global?e(n||y,i,s):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function s(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function r(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:(n(e,i,"ajaxSend",[t,e]),void 0)}function o(t,e,i){var s=i.context,r="success";i.success.call(s,t,r,e),n(i,s,"ajaxSuccess",[e,i,t]),l(r,e,i)}function a(t,e,i,s){var r=s.context;s.error.call(r,i,e,t),n(s,r,"ajaxError",[i,s,t]),l(e,i,s)}function l(t,e,i){var r=i.context;i.complete.call(r,e,t),n(i,r,"ajaxComplete",[e,i]),s(i)}function c(){}function u(t){return t&&(t=t.split(";",2)[0]),t&&(t==C?"html":t==w?"json":x.test(t)?"script":_.test(t)&&"xml")||"text"}function d(t,e){return(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=d(e.url,e.data))}function h(e,n,i,s){var r=!t.isFunction(n);return{url:e,data:r?n:void 0,success:r?t.isFunction(i)?i:void 0:n,dataType:r?s||i:i}}function p(e,n,i,s){var r,o=t.isArray(n);t.each(n,function(n,a){r=t.type(a),s&&(n=i?s:s+"["+(o?"":n)+"]"),!s&&o?e.add(a.name,a.value):"array"==r||!i&&"object"==r?p(e,a,i,n):e.add(n,a)})}var g,m,v=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,_=/^(?:text|application)\/xml/i,w="application/json",C="text/html",T=/^\s*$/;t.active=0,t.ajaxJSONP=function(e){if(!("type"in e))return t.ajax(e);var n,i="jsonp"+ ++v,s=y.createElement("script"),l=function(){clearTimeout(n),t(s).remove(),delete window[i]},u=function(t){l(),t&&"timeout"!=t||(window[i]=c),a(null,t||"abort",d,e)},d={abort:u};return r(d,e)===!1?(u("abort"),!1):(window[i]=function(t){l(),o(t,d,e)},s.onerror=function(){u("error")},s.src=e.url.replace(/=\?/,"="+i),t("head").append(s),e.timeout>0&&(n=setTimeout(function(){u("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:w,xml:"application/xml, text/xml",html:C,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{});for(g in t.ajaxSettings)void 0===n[g]&&(n[g]=t.ajaxSettings[g]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),f(n),n.cache===!1&&(n.url=d(n.url,"_="+Date.now()));var s=n.dataType,l=/=\?/.test(n.url);if("jsonp"==s||l)return l||(n.url=d(n.url,"callback=?")),t.ajaxJSONP(n);var h,p=n.accepts[s],v={},y=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,b=n.xhr();n.crossDomain||(v["X-Requested-With"]="XMLHttpRequest"),p&&(v.Accept=p,p.indexOf(",")>-1&&(p=p.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(p)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&(v["Content-Type"]=n.contentType||"application/x-www-form-urlencoded"),n.headers=t.extend(v,n.headers||{}),b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(h);var e,i=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==y){s=s||u(b.getResponseHeader("content-type")),e=b.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=b.responseXML:"json"==s&&(e=T.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?a(i,"parsererror",b,n):o(e,b,n)}else a(null,b.status?"error":"abort",b,n)}};var x="async"in n?n.async:!0;b.open(n.type,n.url,x);for(m in n.headers)b.setRequestHeader(m,n.headers[m]);return r(b,n)===!1?(b.abort(),!1):(n.timeout>0&&(h=setTimeout(function(){b.onreadystatechange=c,b.abort(),a(null,"timeout",b,n)},n.timeout)),b.send(n.data?n.data:null),b)},t.get=function(){return t.ajax(h.apply(null,arguments))},t.post=function(){var e=h.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=h.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var s,r=this,o=e.split(/\s/),a=h(e,n,i),l=a.success;return o.length>1&&(a.url=o[0],s=o[1]),a.success=function(e){r.html(s?t("<div>").html(e.replace(b,"")).find(s):e),l&&l.apply(r,arguments)},t.ajax(a),this};var k=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(k(t)+"="+k(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n=[];return t(Array.prototype.slice.call(this.get(0).elements)).each(function(){e=t(this);var i=e.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&n.push({name:e.attr("name"),value:e.val()})}),n},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(t,e){function n(t){return i(t.replace(/([a-z])([A-Z])/,"$1-$2"))}function i(t){return t.toLowerCase()}function s(t){return r?r+t:i(t)}var r,o,a,l,c,u,d,f,h="",p={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},g=window.document,m=g.createElement("div"),v=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(p,function(t,n){return m.style[t+"TransitionProperty"]!==e?(h="-"+i(t)+"-",r=n,!1):void 0}),o=h+"transform",y[a=h+"transition-property"]=y[l=h+"transition-duration"]=y[c=h+"transition-timing-function"]=y[u=h+"animation-name"]=y[d=h+"animation-duration"]=y[f=h+"animation-timing-function"]="",t.fx={off:r===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:h,transitionEnd:s("TransitionEnd"),animationEnd:s("AnimationEnd")},t.fn.animate=function(e,n,i,s){return t.isPlainObject(n)&&(i=n.easing,s=n.complete,n=n.duration),n&&(n=("number"==typeof n?n:t.fx.speeds[n]||t.fx.speeds._default)/1e3),this.anim(e,n,i,s)},t.fn.anim=function(i,s,r,h){var p,g,m,b={},x="",_=this,w=t.fx.transitionEnd;if(s===e&&(s=.4),t.fx.off&&(s=0),"string"==typeof i)b[u]=i,b[d]=s+"s",b[f]=r||"linear",w=t.fx.animationEnd;else{g=[];for(p in i)v.test(p)?x+=p+"("+i[p]+") ":(b[p]=i[p],g.push(n(p)));x&&(b[o]=x,g.push(o)),s>0&&"object"==typeof i&&(b[a]=g.join(", "),b[l]=s+"s",b[c]=r||"linear")}return m=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(w,m)}t(this).css(y),h&&h.call(this)},s>0&&this.bind(w,m),this.size()&&this.get(0).clientLeft,this.css(b),0>=s&&setTimeout(function(){_.each(function(){m.call(this)})},0),this},m=null}(Zepto),function(t,e){function n(n,i,s,r,o){"function"!=typeof i||o||(o=i,i=e);var a={opacity:s};return r&&(a.scale=r,n.css(t.fx.cssPrefix+"transform-origin","0 0")),n.animate(a,i,null,o)}function i(e,i,s,r){return n(e,i,0,s,function(){o.call(t(this)),r&&r.call(this)})}var s=window.document,r=(s.documentElement,t.fn.show),o=t.fn.hide,a=t.fn.toggle;t.fn.show=function(t,i){return r.call(this),t===e?t=0:this.css("opacity",0),n(this,t,1,"1,1",i)},t.fn.hide=function(t,n){return t===e?o.call(this):i(this,t,"0,0",n)},t.fn.toggle=function(n,i){return n===e||"boolean"==typeof n?a.call(this,n):this.each(function(){var e=t(this);e["none"==e.css("display")?"show":"hide"](n,i)})},t.fn.fadeTo=function(t,e,i){return n(this,t,e,null,i)},t.fn.fadeIn=function(t,e){var n=this.css("opacity");return n>0?this.css("opacity",0):n=1,r.call(this).fadeTo(t,n,e)},t.fn.fadeOut=function(t,e){return i(this,t,null,e)},t.fn.fadeToggle=function(e,n){return this.each(function(){var i=t(this);i[0==i.css("opacity")||"none"==i.css("display")?"fadeIn":"fadeOut"](e,n)})}}(Zepto),function(t){var e,n=[];t.fn.remove=function(){return this.each(function(){this.parentNode&&("IMG"===this.tagName&&(n.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",e&&clearTimeout(e),e=setTimeout(function(){n=[]},6e4)),this.parentNode.removeChild(this))})}}(Zepto),function(t){function e(e,i){var l=e[a],c=l&&s[l];if(void 0===i)return c||n(e);if(c){if(i in c)return c[i];var u=o(i);if(u in c)return c[u]}return r.call(t(e),i)}function n(e,n,r){var l=e[a]||(e[a]=++t.uuid),c=s[l]||(s[l]=i(e));return void 0!==n&&(c[o(n)]=r),c}function i(e){var n={};return t.each(e.attributes,function(e,i){0==i.name.indexOf("data-")&&(n[o(i.name.replace("data-",""))]=t.zepto.deserializeValue(i.value))}),n}var s={},r=t.fn.data,o=t.camelCase,a=t.expando="Zepto"+ +new Date;t.fn.data=function(i,s){return void 0===s?t.isPlainObject(i)?this.each(function(e,s){t.each(i,function(t,e){n(s,t,e)})}):0==this.length?void 0:e(this[0],i):this.each(function(){n(this,i,s)})},t.fn.removeData=function(e){return"string"==typeof e&&(e=e.split(/\s+/)),this.each(function(){var n=this[a],i=n&&s[n];i&&t.each(e,function(){delete i[o(this)]})})}}(Zepto),function(t){function e(e){return e=t(e),!(!e.width()&&!e.height())&&"none"!==e.css("display")}function n(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,s=a.exec(t);if(s&&s[2]in o&&(n=o[s[2]],i=s[3],t=s[1],i)){var r=Number(i);i=isNaN(r)?i.replace(/^["']|["']$/g,""):r}return e(t,n,i)}var i=t.zepto,s=i.qsa,r=i.matches,o=t.expr[":"]={visible:function(){return e(this)?this:void 0},hidden:function(){return e(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(e,n,i){return t(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},a=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),l=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(e,r){return n(r,function(n,o,a){try{var u;!n&&o?n="*":l.test(n)&&(u=t(e).addClass(c),n="."+c+" "+n);var d=s(e,n)}catch(f){throw console.error("error performing selector: %o",r),f}finally{u&&u.removeClass(c)}return o?i.uniq(t.map(d,function(t,e){return o.call(t,e,d,a)})):d})},i.matches=function(t,e){return n(e,function(e,n,i){return!(e&&!r(t,e)||n&&n.call(t,null,i)!==t)})}}(Zepto),function(t){t.fn.end=function(){return this.prevObject||t()},t.fn.andSelf=function(){return this.add(this.prevObject||t())},"filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e){var n=t.fn[e];t.fn[e]=function(){var t=n.apply(this,arguments);return t.prevObject=this,t}})}(Zepto),function(t){function e(t){return"tagName"in t?t:t.parentNode}function n(t,e,n,i){var s=Math.abs(t-e),r=Math.abs(n-i);return s>=r?t-e>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){c=null,u.last&&(u.el.trigger("longTap"),u={})}function s(){c&&clearTimeout(c),c=null}function r(){o&&clearTimeout(o),a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),o=a=l=c=null,u={}}var o,a,l,c,u={},d=750;t(document).ready(function(){var f,h;t(document.body).bind("touchstart",function(n){f=Date.now(),h=f-(u.last||f),u.el=t(e(n.touches[0].target)),o&&clearTimeout(o),u.x1=n.touches[0].pageX,u.y1=n.touches[0].pageY,h>0&&250>=h&&(u.isDoubleTap=!0),u.last=f,c=setTimeout(i,d)}).bind("touchmove",function(t){s(),u.x2=t.touches[0].pageX,u.y2=t.touches[0].pageY,Math.abs(u.x1-u.x2)>10&&t.preventDefault()}).bind("touchend",function(){s(),u.x2&&Math.abs(u.x1-u.x2)>30||u.y2&&Math.abs(u.y1-u.y2)>30?l=setTimeout(function(){u.el.trigger("swipe"),u.el.trigger("swipe"+n(u.x1,u.x2,u.y1,u.y2)),u={}},0):"last"in u&&(a=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=r,u.el.trigger(e),u.isDoubleTap?(u.el.trigger("doubleTap"),u={}):o=setTimeout(function(){o=null,u.el.trigger("singleTap"),u={}},250)},0))}).bind("touchcancel",r),t(window).bind("scroll",r)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(t){return this.bind(e,t)}})}(Zepto),this.Zepto&&!function(t){var e,n;return e=function(t,e,n,i,s){var r,o;return t?(o=t[n](),r={width:["left","right"],height:["top","bottom"]},r[n].forEach(function(e){return o+=parseInt(t.css("padding-"+e),10),i&&(o+=parseInt(t.css("border-"+e+"-width"),10)),s?o+=parseInt(t.css("margin-"+e),10):void 0}),o):null},["width","height"].forEach(function(n){var i,s,r,o,a;return i=n.replace(/./,function(t){return t[0].toUpperCase()}),(s=t.fn)[o="inner"+i]||(s[o]=function(t){return e(this,i,n,!1,t)}),(r=t.fn)[a="outer"+i]||(r[a]=function(t){return e(this,i,n,!0,t)})}),(n=t.fn).detach||(n.detach=function(t){var e,n;return n=this,null!=t&&(n=n.filter(t)),e=n.clone(!0),n.remove(),e})}(Zepto);