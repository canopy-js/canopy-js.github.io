!function(t){var e={};function n(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(a,o,function(e){return t[e]}.bind(null,o));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=62)}({0:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o});var a=function(t){return t?t.replace(/ /g,"_"):t};function o(t){return t.replace(/([^\\]|^)_/g,"$1").replace(/([^\\]|^)\*/g,"$1").replace(/([^\\]|^)`/g,"$1").replace(/([^\\]|^)~/g,"$1")}},28:function(t,e){t.exports='<svg xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   version="1.0"\n   width="12"\n   height="12"\n   id="svg2">\n  <defs id="defs4"></defs>\n  <rect\n     width="5.9999995"\n     height="6"\n     x="1.5"\n     y="4.5"\n     id="rect3170"\n     style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:#0066cc;stroke-width:0.99999994;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"></rect>\n  <path\n     d="M 4,2.5 L 5,3.5 L 5.25,4.25 L 2.75,6.5 L 5.5,9.25 L 7.75,6.75 L 8.5,7 L 9.5,8 L 11,6.5 L 11,1 L 5.5,1 L 4,2.5 z"\n     id="path2395"\n     style="fill:#0066ff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"></path>\n  <path\n     d="M 6,2 L 10,2 L 10,6 L 9.5,6.75 L 8.25,4.75 L 5.25,8 L 4,6.75 L 7.25,3.75 L 5.25,2.5 L 6,2 z"\n     id="path2398"\n     style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" ></path>\n</svg>\n'},31:function(t,e,n){var a=n(32);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(34)(a,o);a.locals&&(t.exports=a.locals)},32:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,"#_canopy {\n  padding-top: 15px;\n  padding-bottom: 55px; }\n  #_canopy h1 {\n    text-align: center;\n    margin: auto;\n    width: 40%;\n    margin-top: 10px; }\n  #_canopy hr {\n    width: 9%;\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 5px solid #ccc;\n    margin: 0px auto;\n    padding-bottom: 30px; }\n  #_canopy section.canopy-topic-section {\n    padding-top: 40px; }\n  #_canopy section {\n    padding-top: 30px; }\n  #_canopy p {\n    font-size: 22px;\n    max-width: 700px;\n    margin: auto;\n    line-height: 1.3;\n    letter-spacing: -.003em;\n    font-weight: 400; }\n  #_canopy a.canopy-selectable-link {\n    text-decoration: underline #F0F0F0;\n    color: black;\n    cursor: pointer;\n    /*\n    &.canopy-dfs-previously-selected-link {\n      color: #ff0000;\n    }\n\n    &.canopy-reverse-dfs-previously-selected-link {\n      color: #0000ff;\n    }\n    */ }\n    #_canopy a.canopy-selectable-link:hover {\n      text-decoration: underline; }\n    #_canopy a.canopy-selectable-link:focus {\n      outline: 0; }\n    #_canopy a.canopy-selectable-link.canopy-open-link {\n      background-color: #f0ebff;\n      text-decoration: none; }\n    #_canopy a.canopy-selectable-link.canopy-selected-link.canopy-local-link, #_canopy a.canopy-selectable-link.canopy-selected-link.canopy-redundant-local-link {\n      text-shadow: .8px 0px 0px black;\n      text-decoration: underline black; }\n    #_canopy a.canopy-selectable-link.canopy-global-link:hover, #_canopy a.canopy-selectable-link.canopy-url-link:hover {\n      color: #4078c0; }\n    #_canopy a.canopy-selectable-link.canopy-global-link.canopy-selected-link, #_canopy a.canopy-selectable-link.canopy-url-link.canopy-selected-link {\n      text-decoration: underline #4078c0;\n      color: #4078c0;\n      text-shadow: .8px 0px 0px #4078c0; }\n    #_canopy a.canopy-selectable-link.canopy-global-link.canopy-open-link, #_canopy a.canopy-selectable-link.canopy-url-link.canopy-open-link {\n      color: #4078c0; }\n  #_canopy span.canopy-text-span {\n    display: block; }\n  #_canopy hr.footnote-rule {\n    width: 700px;\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 12px 0;\n    padding: 0; }\n  #_canopy sup {\n    font-size: 60%;\n    padding: 2px; }\n  #_canopy .footnote-span {\n    font-size: 80%; }\n  #_canopy blockquote {\n    margin: 7px 10px;\n    background-color: #eff0f1;\n    padding: 5px;\n    font-size: 90%; }\n    #_canopy blockquote a.canopy-selectable-link {\n      text-decoration: underline #D3D3D3; }\n  #_canopy pre {\n    margin: 7px 10px;\n    background-color: #eff0f1;\n    padding: 5px;\n    font-size: 85%; }\n  #_canopy code {\n    background-color: #eff0f1;\n    font-size: 90%; }\n  #_canopy table {\n    margin: 7px auto;\n    table-layout: fixed;\n    width: 70%;\n    border-collapse: collapse;\n    border: 2px solid black; }\n    #_canopy table td, #_canopy table th {\n      border: 2px solid black;\n      text-align: center;\n      padding: 6px; }\n  #_canopy img {\n    max-width: 200px;\n    max-height: 275px; }\n  #_canopy div.canopy-image-div {\n    float: right;\n    border: 1px solid #c8ccd1;\n    padding: 3px;\n    background-color: #f8f9fa;\n    font-size: 94%;\n    text-align: center;\n    overflow: hidden;\n    min-width: 172px;\n    min-height: 230px;\n    margin: 10px; }\n  #_canopy div.canopy-image-div > sup {\n    display: block; }\n  #_canopy .canopy-url-link-span > svg {\n    height: 15px;\n    width: 12px;\n    display: none; }\n  #_canopy .canopy-selected-link + svg, #_canopy .canopy-url-link-span:hover > svg {\n    display: inline;\n    vertical-align: middle; }\n  #_canopy ol, #_canopy ul {\n    margin: 7px 10px; }\n  #_canopy div.canopy-raw-html {\n    display: inline; }\n\n#_canopy > section.canopy-topic-section {\n  padding-top: 30px; }\n",""])},33:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),r=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(a[r]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},34:function(t,e,n){var a,o,r={},i=(a=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=a.apply(this,arguments)),o}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var a=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}}(),l=null,s=0,u=[],p=n(35);function d(t,e){for(var n=0;n<t.length;n++){var a=t[n],o=r[a.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](a.parts[i]);for(;i<a.parts.length;i++)o.parts.push(b(a.parts[i],e))}else{var c=[];for(i=0;i<a.parts.length;i++)c.push(b(a.parts[i],e));r[a.id]={id:a.id,refs:1,parts:c}}}}function f(t,e){for(var n=[],a={},o=0;o<t.length;o++){var r=t[o],i=e.base?r[0]+e.base:r[0],c={css:r[1],media:r[2],sourceMap:r[3]};a[i]?a[i].parts.push(c):n.push(a[i]={id:i,parts:[c]})}return n}function y(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var a=u[u.length-1];if("top"===t.insertAt)a?a.nextSibling?n.insertBefore(e,a.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var a=function(){0;return n.nc}();a&&(t.attrs.nonce=a)}return v(e,t.attrs),y(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function b(t,e){var n,a,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var i=s++;n=l||(l=m(e)),a=x.bind(null,n,i,!1),o=x.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),y(t,e),e}(e),a=function(t,e,n){var a=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(a=p(a));o&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([a],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(i),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),a=function(t,e){var n=e.css,a=e.media;a&&t.setAttribute("media",a);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return d(n,e),function(t){for(var a=[],o=0;o<n.length;o++){var i=n[o];(c=r[i.id]).refs--,a.push(c)}t&&d(f(t,e),e);for(o=0;o<a.length;o++){var c;if(0===(c=a[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete r[c.id]}}}};var g,k=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,a){var o=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=k(e,o);else{var r=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}},35:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,a=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},62:function(t,e,n){"use strict";n.r(e);n(31);var a=n(0);var o=document.getElementById("_canopy"),r=o&&o.dataset.defaultTopic,i=o&&o.dataset.pathPrefix,c=function(t){for(var e=o,n=0;n<t.length;n++){if(!e)return null;var a=t[n][0],r=t[n][1];e=e.querySelector('[data-topic-name="'.concat(a,'"]')+'[data-subtopic-name="'.concat(r,'"]')+'[data-path-depth="'.concat(n,'"]'))}return e},l=function(){var t=document.querySelectorAll('section[style="display: block;"');return t[t.length-1]},s=function(){return document.querySelector("a.canopy-selected-link")},u=function(){return document.querySelectorAll('section[style="display: block;"')[0]},p=function(t){return t.parentNode===o?null:D(t.parentNode,t.dataset.topicName,t.dataset.subtopicName)},d=function(t){return t.parentNode===o?null:function(t,e,n){return function(t,e){return L(t).filter(e)}(t,function(t){return t.dataset.targetTopic===e&&t.dataset.targetSubtopic===n})}(t.parentNode,t.dataset.topicName,t.dataset.subtopicName)},f=function(t){return Array.from(g(t,"SECTION").childNodes).find(function(e){return"SECTION"===e.tagName&&e.dataset.topicName===t.dataset.targetTopic&&e.dataset.subtopicName===t.dataset.targetSubtopic})};function y(t){return t?g(t,"SECTION"):null}function h(t){if(!t)return null;var e=y(t),n=Array.from(e.querySelectorAll(' a[data-text="'.concat(t.dataset.text,'"]'))).indexOf(t);return{sectionElementTopicName:e.dataset.topicName,sectionElementSubtopicName:e.dataset.subtopicName,sectionElementPathDepth:e.dataset.pathDepth,linkText:t.dataset.text,relativeLinkNumber:n}}function m(t){return t?O(t,function(t){return t.classList.contains("canopy-open-link")}):null}function v(t){return t?Array.from(t.childNodes).find(function(t){return"P"===t.tagName}):null}function b(t){if(!t)return null;var e=k(t).querySelectorAll(".canopy-selectable-link");return t!==e[e.length-1]?e[Array.prototype.slice.call(e).indexOf(t)+1]:null}function g(t,e){for(var n=t.parentNode;n.tagName!==e;)n=n.parentNode;return n}function k(t){return t?g(t,"P"):null}function x(t){if(!t)return null;var e=k(t).querySelectorAll("a.canopy-selectable-link");return t!==e[0]?e[Array.prototype.slice.call(e).indexOf(t)-1]:null}function S(t){if(!t)return null;var e=f(t);return e?L(e)[0]:null}function N(t){if(!t)return null;var e=f(t);if(!e)return null;var n=L(e);return n[n.length-1]}function L(t){return t?function(t){if(!t)return null;return Array.from(t.querySelectorAll("a.canopy-selectable-link"))}(v(t)):null}function E(t){return t&&L(t)[0]||null}function w(t){if(!t)return null;var e=L(t);return e[e.length-1]||null}function T(t){var e=y(t);if("0"===e.dataset.pathDepth)return u();for(var n=e;n.parentNode.dataset.pathDepth===e.dataset.pathDepth;)n=n.parentNode;return n}function C(t){return t?function(t){return y(t)===u()}(t)?null:p(y(t)):null}function O(t,e){return L(t).find(e)}function D(t,e,n){return O(t,function(t){return t.dataset.targetTopic===e&&t.dataset.targetSubtopic===n})}function _(t,e){for(var n=0;n<t.length;n++)e(t[n])}var A=function(t){var e=t||window.location.pathname+window.location.hash;0===e.indexOf(i)&&(e=e.slice(i.length));var n=e.replace(/_/g," ").split("/").filter(function(t){return""!==t});return(n=function(t,e){if(t.match(/\/#\w+/))for(var n=1;n<e.length;n++)if(e[n].match(/^#/)){if(e[n-1].match(/#/)){var a=e[n].slice(1),o=e.slice(0,n).concat([a]).concat(e.slice(n+1));return o}var r=e[n-1]+e[n],i=e.slice(0,n-1).concat([r]).concat(e.slice(n+1));return i}return e}(e,n)).map(function(t){var e=t.match(/([^#]*)(?:#([^#]*))?/);return[e[1]||e[2]||null,e[2]||e[1]||null]}).filter(function(t){return null!==t[0]})};var j=function(t){return(i?"/"+i:"")+"/"+t.map(function(t){return Object(a.b)(t[0])+(t[1]&&t[1]!==t[0]?"#"+Object(a.b)(t[1]):"")}).join("/")};function U(t,e,n){history.replaceState(t,e,n)}function R(t,e,n){history.pushState(t,e,n)}var B=function(t){var e=A(),n=t[0][0];(j(t)===j(e)?U:R)(h(s()),n,j(t))};var P=function(t){for(var e="",n=!1,a={B:!1,I:!1,S:!1,CODE:!1},o={_:"I","*":"B","~":"S","`":"CODE"},r=[],i=0;i<t.length;i++)!n&&["_","*","~","`"].includes(t[i])?function(){var n=document.createTextNode(e);e="";var c=void 0,l=void 0;Object.keys(a).forEach(function(t){if(a[t]){var e=document.createElement(t);l&&l.appendChild(e),c=c||e,l=e}}),l?(l.appendChild(n),r.push(c)):r.push(n),a[o[t[i]]]=!a[o[t[i]].toUpperCase()]}():n||"\\"!==t[i]?(e+=t[i],n=!1):n=!0;if(e){var c=document.createTextNode(e);r.push(c)}return r};function I(t,e,n){var a=n.linkSelectionData,o=n.selectALink;return a?function(t){return document.querySelectorAll('section[data-topic-name="'.concat(t.sectionElementTopicName,'"]')+'[data-subtopic-name="'.concat(t.sectionElementSubtopicName,'"]')+'[data-path-depth="'.concat(t.sectionElementPathDepth,'"]')+' a[data-text="'.concat(t.linkText,'"]'))[t.relativeLinkNumber]}(a):o?function(t){var e=t[t.length-1];return e[0]===e[1]}(t)&&E(e)||p(e):null}function M(t,e,n){return t&&function(t){return t&&("local"===t.dataset.type||function(t){return t&&"redundant-local"===t.dataset.type&&(e=t,n=function(e){return e.dataset&&e.dataset.targetTopic===t.dataset.targetTopic&&e.dataset.targetSubtopic===t.dataset.targetSubtopic},Array.from(e.parentNode.childNodes).find(function(t){return n(t)&&t!==e}));var e,n}(t))}(t)?f(t):e}function q(t){var e=t[t.length-1];if(e[0]===e[1])return JSON.parse(JSON.stringify(t.slice(0,-1)));var n=JSON.parse(JSON.stringify(t)),a=n.pop();return a[1]=a[0],n.push(a),n}function z(){return JSON.parse(sessionStorage.getItem(j(A())))}var J=function t(e,n){if(e.style.display="block",e.parentNode!==o){var a=d(e);n&&"local"===n.dataset.type&&v(e.parentNode).contains(n)?a.forEach(function(t){return t.classList.add("canopy-preview-link")}):a.forEach(function(t){return t.classList.add("canopy-open-link")}),t(y(a[0]),n)}},$=function(t,e){e=e||{};var n=c(t);if(!n&&1===t.length&&t[0][0]===t[0][1])throw"Unknown path";if(!n)return function(t,e){return console.log("No section element found for path: ",t),console.log("Trying: ",q(t)),$(q(t),e)}(t,e);var a=t[0][0];document.title=function(t){return t}(a),function(t){var e=document.querySelector("#_canopy h1");e&&e.remove();var n=document.createElement("h1");P(t).forEach(function(t){n.appendChild(t)}),o.prepend(n)}(c([[a,a]]).dataset.topicDisplayName),_(document.getElementsByTagName("a"),function(t){t.classList.remove("canopy-dfs-previously-selected-link"),t.classList.remove("canopy-reverse-dfs-previously-selected-link")}),e.postDisplayCallback&&e.postDisplayCallback(),_(document.getElementsByTagName("a"),function(t){t.classList.remove("canopy-selected-link"),t.classList.remove("canopy-open-link")}),_(document.getElementsByTagName("section"),function(t){t.style.display="none"});var r,i,l=I(t,n,e),s=M(l,n);!function(t){t&&t.classList.add("canopy-selected-link")}(l),(i=(r=l)&&JSON.stringify(h(r)))&&sessionStorage.setItem(location.pathname+location.hash,i),e.originatesFromPopStateEvent||B(function(t,e){if(e&&"local"===e.dataset.type){var n=JSON.parse(JSON.stringify(t)),a=n.pop();return a[1]=e.dataset.targetSubtopic,n.push(a),n}return t}(t,l)),J(s,l),window.scrollTo(0,o.scrollHeight)};function F(t){if(!t)return null;for(var e=[],n=t;n!==o;){var a=n.dataset.topicName;for(e.unshift([a,n.dataset.subtopicName]);n.dataset.topicName===a;)n=n.parentNode}return e}var K=function(t,e,n){return function(a){a.preventDefault();var o=F(y(n));if(n.classList.contains("canopy-open-link")){o.pop();var r=[n.dataset.enclosingTopic,n.dataset.enclosingSubtopic];o.push(r)}else{o.pop();var i=[t,e];o.push(i)}rt(o)}},H=function(t,e,n){return function(a){var o;a.preventDefault(),a.altKey?(o=F(y(n)),n.classList.contains("canopy-open-link")||o.push([n.dataset.targetTopic,n.dataset.targetSubtopic])):o=[[t,e]],a.metaKey?window.open(location.origin+j(o),"_blank"):rt(o)}},G=n(28),V=n.n(G),Q={};var W=function(t){if(!Q[t]){var e=i+"/data/"+Object(a.b)(t.toLowerCase())+".json";return fetch(e).then(function(e){return e.json().then(function(e){return Q[t]=e,e})})}};function X(t){var e=P(t.text),n=document.createElement("a");return n.classList.add("canopy-selectable-link"),n.dataset.targetTopic=t.targetTopic,n.dataset.targetSubtopic=t.targetSubtopic,n.dataset.enclosingTopic=t.enclosingTopic,n.dataset.enclosingSubtopic=t.enclosingSubtopic,n.dataset.text=t.text,Y(e,n),n.addEventListener("click",K(t.targetTopic,t.targetSubtopic,n)),n}function Y(t,e){t.forEach(function(t){e.appendChild(t)})}var Z=function(t,e){return"text"===t.type?function(t){var e=document.createElement("SPAN");return Y(P(t.text),e),e}(t):"local"===t.type?function(t,e){var n=e.subtopicsAlreadyRendered,o=e.parentLinkSubtreeCallback;return n.hasOwnProperty(t.targetSubtopic)?function(t){var e=X(t);return e.classList.add("canopy-redundant-local-link"),e.dataset.type="redundant-local",e.dataset.urlSubtopic=t.enclosingSubtopic,e.href="/".concat(Object(a.b)(t.enclosingTopic),"#").concat(Object(a.b)(t.enclosingSubtopic)),e}(t):(o(t),function(t){var e=X(t);return e.classList.add("canopy-local-link"),e.dataset.type="local",e.dataset.urlSubtopic=t.targetSubtopic,e.href="/".concat(Object(a.b)(t.targetTopic),"#").concat(Object(a.b)(t.targetSubtopic)),e}(t))}(t,e):"global"===t.type?function(t,e){var n=e.pathArray,o=e.subtopicName,r=e.globalLinkSubtreeCallback;window.setTimeout(function(){return W(t.targetTopic)},0);var i=function(t){var e=P(t.text),n=document.createElement("a");return Y(e,n),n.classList.add("canopy-global-link"),n.classList.add("canopy-selectable-link"),n.dataset.type="global",n.dataset.targetTopic=t.targetTopic,n.dataset.targetSubtopic=t.targetSubtopic,n.dataset.urlSubtopic=t.enclosingSubtopic,n.dataset.enclosingTopic=t.enclosingTopic,n.dataset.enclosingSubtopic=t.enclosingSubtopic,n.dataset.text=t.text,n.href="/".concat(Object(a.b)(t.targetTopic),"#").concat(Object(a.b)(t.targetSubtopic)),n.addEventListener("click",H(t.targetTopic,t.targetSubtopic,n)),n}(t);return function(t,e,n){var a=e[0][1],o=e[1],r=e[1]&&e[1][0],i=r;return o&&t.dataset.targetTopic===r&&t.dataset.targetSubtopic===i&&n===a}(i,n,o)&&r(t),i}(t,e):"url"===t.type?function(t){var e=document.createElement("SPAN"),n=document.createElement("a");return e.classList.add("canopy-url-link-span"),n.classList.add("canopy-url-link"),n.classList.add("canopy-selectable-link"),n.setAttribute("href",t.url),Y(P(t.text),n),n.dataset.type="url",n.dataset.text=t.text,n.dataset.urlSubtopic=t.urlSubtopic,e.appendChild(n),e.innerHTML+=V.a.replace(/\r?\n|\r/g,""),e}(t):"image"===t.type?function(t){var e=document.createElement("DIV");e.classList.add("canopy-image-div");var n=document.createElement("IMG");e.appendChild(n),n.setAttribute("src",t.resourceUrl);var a=document.createElement("A");if(a.setAttribute("href",t.anchorUrl||t.resourceUrl),a.appendChild(n),e.appendChild(a),t.title){n.setAttribute("title",t.title);var o=document.createElement("SUP"),r=document.createElement("DIV");o.appendChild(document.createTextNode(t.title)),o.classList.add("canopy-image-caption"),r.classList.add("canopy-caption-div"),e.appendChild(o)}else e.appendChild(a);return t.altText&&n.setAttribute("alt",t.altText),e}(t):"html"===t.type?function(t){var e=document.createElement("DIV");return e.innerHTML=t.html,e.classList.add("canopy-raw-html"),e}(t):"footnote"===t.type?function(t){var e=document.createElement("SUP"),n=document.createTextNode(t.text);return e.appendChild(n),e}(t):void 0};var tt={text:function(t,e){var n=[];return t.tokensByLine.forEach(function(t,a){var o=document.createElement("SPAN");o.classList.add("canopy-text-span"),n.push(o),t.forEach(function(t){var n=Z(t,e);o.appendChild(n)})}),n},code:function(t,e){var n=document.createElement("PRE"),a=document.createElement("CODE");return n.appendChild(a),t.lines.forEach(function(t,e){e>0&&a.appendChild(document.createElement("BR"));var n=document.createTextNode(t);a.appendChild(n)}),[n]},quote:function(t,e){var n=document.createElement("BLOCKQUOTE");return t.tokensByLine.forEach(function(t,a){a>0&&n.appendChild(document.createElement("br")),t.forEach(function(t){var a=Z(t,e);n.appendChild(a)})}),[n]},list:function(t,e){return function n(a){var o=t.topLevelNodes[0].ordered?document.createElement("OL"):document.createElement("UL");o.setAttribute("type",a[0].ordinal);a.forEach(function(t){var a=document.createElement("LI");t.tokensOfLine.forEach(function(t){var n=Z(t,e);a.appendChild(n)});if(t.children.length>0){var r=n(t.children);a.appendChild(r)}o.appendChild(a)});return o}(t.topLevelNodes)},table:function(t,e){var n=document.createElement("TABLE");return t.tokensByCellByRow.forEach(function(t,a){var o=document.createElement("TR");t.forEach(function(t){var n=document.createElement("TD");t.forEach(function(t){var a=Z(t,e);n.appendChild(a)}),o.appendChild(n)}),n.appendChild(o)}),[n]},footnote:function(t,e){var n=document.createElement("HR");n.classList.add("footnote-rule");var a=Array.prototype.concat.apply([],t.footnoteObjects.map(function(t,n){var a=document.createElement("SPAN");a.classList.add("footnote-span");var o=document.createTextNode(t.superscript+". ");a.appendChild(o),t.tokens.forEach(function(t){var n=Z(t,e);a.appendChild(n)});var r=[];return n>0&&r.push(document.createElement("BR")),r.push(a),r}));return[n].concat(a)}};function et(t){var e=t.subtopicName,n=t.paragraphsBySubtopic,a=function(t){var e=t.topicName,n=t.subtopicName,a=t.topicDisplayName,o=t.pathDepth,r=document.createElement("section"),i=document.createElement("p");r.appendChild(i),r.style.display="none",r.dataset.topicName=e,r.dataset.topicDisplayName=a,r.dataset.subtopicName=n,r.dataset.pathDepth=o,e===n&&(o>0&&r.prepend(document.createElement("hr")),r.classList.add("canopy-topic-section"));return r}(t);return t.subtopicsAlreadyRendered[e]=!0,t.promises=[],t.parentLinkSubtreeCallback=function(t,e){return function(n){var a=et(Object.assign({},e,{subtopicName:n.targetSubtopic}));a.then(function(e){t.appendChild(e)}),e.promises.push(a)}}(a,t),t.globalLinkSubtreeCallback=function(t,e){var n=e.pathArray,a=e.pathDepth,o=e.promises;return function(e){if(!function(t,e){return D(t,e.targetTopic,e.targetSubtopic)}(t,e)){var r=n.slice(1),i=a+1,c=ot(r,i),l=c.then(function(e){t.appendChild(e)});o.push(l)}}}(a,t),function(t,e){var n=[];return t.forEach(function(t){var a=(0,tt[t.type])(t,e);n=n.concat(a)}),n}(n[e],t).forEach(function(t){v(a).appendChild(t)}),Promise.all(t.promises).then(function(t){return a})}var nt=et,at=function(t){if(Q[t])return Promise.resolve(Q[t]);var e=i+"/data/"+Object(a.b)(t.toLowerCase())+".json";return fetch(e).then(function(e){return e.json().then(function(e){return Q[t]=e,e})}).catch(function(e){return 0===o.childNodes.length&&t!==r&&rt([[r,r]]),Promise.reject("Unrecognized path: "+t)})},ot=function(t,e){if(0===t.length)return Promise.resolve(null);var n=t[0][0];return at(n).then(function(n){var a=n.paragraphsBySubtopic,o=n.topicDisplayName;return nt({topicName:t[0][0],topicDisplayName:o,subtopicName:t[0][0],pathArray:t,paragraphsBySubtopic:a,subtopicsAlreadyRendered:{},pathDepth:e})})},rt=function(t,e){var n=function(t){for(var e=null,n=[],a=0;a<t.length;a++){var o=t.slice(0,a+1);if(!c(o)){n=t.slice(a);break}e=c(o)}return{lowestExtantSectionElementOfPath:e,pathSuffixToRender:n}}(t),a=n.lowestExtantSectionElementOfPath,r=n.pathSuffixToRender;ot(r,t.length-r.length).then(function(n){if(n){var r=a||o;(function(t,e){return Array.from(t.childNodes).filter(function(t){return t.dataset&&t.dataset.topicName===e.dataset.topicName&&t.dataset.subtopicName===e.dataset.subtopicName}).length>0})(r,n)||r.appendChild(n)}$(t,e)})};function it(){var t,e,n,a=A();if(e=l(),n=y(s()),e!==n&&"global"===s().dataset.type)a.pop(),t=s();else if(function(t){return t.parentNode===o}(y(s()))){var r=y(s());a=[[r.dataset.topicName,r.dataset.topicName]],t=null}else if(function(t){return t.dataset.topicName===t.dataset.subtopicName}(y(s())))a.pop(),t=C(s());else{t=C(s());var i=[a.pop()[0],t.dataset.urlSubtopic];a.push(i)}rt(a,{linkSelectionData:h(t)})}function ct(t){var e=A();if("global"===s().dataset.type){if(s().classList.contains("canopy-open-link"))return;return e.push([s().dataset.targetTopic,s().dataset.targetSubtopic]),rt(e,{selectALink:!0})}if("local"===s().dataset.type){var n=S(s())||s(),a=[e.pop()[0],n.dataset.urlSubtopic];return e.push(a),rt(e,{linkSelectionData:h(n)})}if("redundant-local"===s().dataset.type){var o=[e.pop()[0],s().dataset.targetSubtopic];e.push(o);var r=E(c(e));return rt(e,{linkSelectionData:h(r)})}}function lt(){var t=l(),e=y(s()),n=A();"global"===s().dataset.type&&t!==e&&n.pop();var a=x(s())||function(t){if(!t)return null;var e=L(y(t));return e[e.length-1]||null}(s()),o=[n.pop()[0],a.dataset.urlSubtopic];n.push(o),rt(n,{linkSelectionData:h(a)})}function st(){var t=l(),e=y(s()),n=A();"global"===s().dataset.type&&t!==e&&n.pop();var a=b(s())||function(t){return t?L(y(t))[0]||t:null}(s()),o=[n.pop()[0],a.dataset.urlSubtopic];n.push(o),rt(n,{linkSelectionData:h(a)})}function ut(t,e){if("local"===s().dataset.type||"redundant-parent"===s().dataset.type)return ct();if("global"===s().dataset.type){var n;if(n=e?A().concat([[s().dataset.targetTopic,s().dataset.targetSubtopic]]):[[s().dataset.targetTopic,s().dataset.targetSubtopic]],t){var a=j(n);return window.open(location.origin+a,"_blank")}rt(n,{selectALink:!0})}else if("url"===s().dataset.type){if(t)return window.open(s().href,"_blank");window.location=s().href}}function pt(t,e,n){var a=1===t?"canopy-dfs-previously-selected-link":"canopy-reverse-dfs-previously-selected-link",o=document.querySelector("."+a),r=1===t?w(f(s())):E(f(s())),i=s().dataset.targetTopic,l=F(y(s())),u=l.concat([[i,i]]),d=c(l),v=!r||!o||o!==r,g=o!==s(),k=v&&g,T=!d||!m(d),C=1===t?E(d):w(d);if("global"===s().dataset.type&&e&&k&&T)return rt(u,{linkSelectionData:C,postDisplayCallback:dt(t)});if("global"===s().dataset.type&&n&&function(t){return t?0===L(t).length:null}(f(s()))&&s().classList.contains("canopy-open-link"))return rt(A().slice(0,-1),{linkSelectionData:h(s()),postDisplayCallback:dt(t)});var O=1===t?N(s()):S(s()),D=1===t?S(s()):N(s());if(D&&(!o||o!==O)&&"global"!==s().dataset.type&&"redundant-local"!==s().dataset.type){var _=D;return rt(F(y(_)),{linkSelectionData:h(_),postDisplayCallback:dt(t)})}var j=1===t?b(s()):x(s());if(j){var U=j;return rt(F(y(U)),{linkSelectionData:h(U),postDisplayCallback:dt(t)})}var R=p(y(s()));if(R&&"global"!==R.dataset.type){var B=R;return rt(F(y(B)),{linkSelectionData:h(B),postDisplayCallback:dt(t)})}var P=p(y(s()));if(P&&"global"===P.dataset.type&&n){var I=P;return rt(F(y(I)),{linkSelectionData:h(I),postDisplayCallback:dt(t)})}}function dt(t){return function(){var e=1===t?"canopy-dfs-previously-selected-link":"canopy-reverse-dfs-previously-selected-link",n=document.querySelector("."+e);n&&n.classList.remove(e),s()&&s().classList.add(e);var a=1===t,o=2===t;_(document.getElementsByTagName("a"),function(t){!a&&t.classList.remove("canopy-dfs-previously-selected-link"),!o&&t.classList.remove("canopy-reverse-dfs-previously-selected-link")})}}var ft={left:lt,up:it,down:ct,right:st,h:lt,j:ct,k:it,l:st,escape:function(){var t=T(s());t.parentNode!==o&&(t=t.parentNode);var e=m(t);rt(F(t),{linkSelectionData:h(e)})},"shift-escape":function(){var t=T(s()),e=m(t)||s();rt(F(t),{linkSelectionData:h(e)})},return:ut,"command-return":ut.bind(null,!0),"command-alt-return":ut.bind(null,!0,!0),tab:pt.bind(null,1,!1,!1),"alt-tab":pt.bind(null,1,!0,!0),"`":pt.bind(null,1,!1,!0),"shift-tab":pt.bind(null,2,!1,!1),"alt-shift-tab":pt.bind(null,2,!0,!0),"shift-`":pt.bind(null,2,!1,!0)},yt={37:"left",39:"right",38:"up",40:"down",71:"g",72:"h",75:"k",74:"j",76:"l",186:";",13:"return",9:"tab",27:"escape",192:"`",49:"1",50:"2",51:"3",52:"4",53:"5"};var ht,mt=function(){window.addEventListener("popstate",function(t){var e;e=s(),history.replaceState(h(e),document.title,window.location.href);var n=function(t){return t.state&&t.state.targetTopic}(t)?t.state:null;rt(A(),{linkSelectionData:n||z(),originatesFromPopStateEvent:!0})})};(function(){window.addEventListener("keydown",function(t){var e=(t.metaKey?"command-":"")+(t.altKey?"alt-":"")+(t.ctrlKey?"ctrl-":"")+(t.shiftKey?"shift-":""),n=yt[t.keyCode],a=e+n;"tab"===n&&t.preventDefault(),s()?(ft[a]||function(){})():ft[a]&&rt(A(),{selectALink:!0})})})(),mt(),rt((ht=A()).length>0?ht:[[r,r]],{linkSelectionData:history.state&&history.state.targetTopic&&history.state||z()})}});
//# sourceMappingURL=canopy.js.map