(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(e,t,r){"use strict";r.r(t);r(32),r(16),r(11),r(3),r(25);var n=r(5),c=r(53);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={name:"home",data:function(){return{current:"message"}},mounted:function(){this.init()},methods:l(l({},Object(c.b)("channel",["cardAction","userCardAction"])),{},{init:function(){this.cardAction(),this.userCardAction()}})},O=r(4),component=Object(O.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"home"}},[r("WeNavbar",{model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[r("WeNavItem",{attrs:{name:"message"}},[e._v("消息")]),r("WeNavItem",{attrs:{name:"voice"}},[e._v("语音")])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);