(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{377:function(e,n,t){"use strict";t.r(n);var r=t(171),o=t(170),l={name:"more",components:{Banners:r.default,Banner:o.default},data:function(){return{index:0,banner:"https://api.adorable.io/avatars/285/",banners:[{key:1,url:"https://api.adorable.io/avatars/285/1.png"},{key:2,url:"https://api.adorable.io/avatars/285/2.png"},{key:3,url:"https://api.adorable.io/avatars/285/3.png"},{key:4,url:"https://api.adorable.io/avatars/285/4.png"},{key:5,url:"https://api.adorable.io/avatars/285/5.png"}]}},computed:{beforeActive:function(){return 0===this.index?this.banners[this.banners.length-1]:this.banners[this.index-1]},afterActive:function(){return this.index===this.banners.length-1?this.banners[0]:this.banners[this.index+1]}}},d=t(3),component=Object(d.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"more"}},[t("Banners",{attrs:{active:e.banners[e.index],before:e.beforeActive,after:e.afterActive},model:{value:e.index,callback:function(n){e.index=n},expression:"index"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);