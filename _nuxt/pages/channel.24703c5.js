(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{282:function(e,t,n){var content=n(305);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("aafec11c",content,!0,{sourceMap:!1})},304:function(e,t,n){"use strict";var r=n(282);n.n(r).a},305:function(e,t,n){(t=n(20)(!1)).push([e.i,".safe-aria[data-v-4da37e74] .v-text-field__details{display:none}",""]),e.exports=t},353:function(e,t,n){"use strict";n.r(t);n(30),n(12),n(9),n(19),n(14),n(15),n(4),n(22);var r=n(2),o=n(5),c=n(65),l=n(118),d=n(38);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={layout:"channel",components:{LazyLoadView:c.default,CircleLoader:l.default},data:function(){return{input:""}},computed:v(v({},Object(d.c)("channel",["getCard"])),Object(d.d)("user",["user"])),methods:{init:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$RTM.createInstance();case 2:return n=t.sent,console.log(n),e.$RTM.connectionStateChanged(e.connectionStateChanged),t.next=7,e.$RTM.login(e.user.id.toString());case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})))()},connectionStateChanged:function(e,t){console.log("connectionStateChanged",e,t)},sendMsg:function(){this.$RTM.sendMessageToPeer({text:this.input},this.$route.params.id)}}},y=(n(304),n(3)),m=n(59),w=n.n(m),x=n(359),O=n(352),j=n(349),C=n(350),k=n(299),P=n(273),S=n(351),V=n(344),component=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("LazyLoadView",{attrs:{initFN:e.init},scopedSlots:e._u([{key:"loading",fn:function(){return[n("CircleLoader")]},proxy:!0}])},[n("v-app-bar",{attrs:{app:"",fixed:"","elevate-on-scroll":""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.$router.back()}}},[n("box-icon",{attrs:{name:"arrow-back"}})],1),n("v-toolbar-title",{domProps:{textContent:e._s(e.getCard(e.$route.params.id).username)}})],1),n("v-main",[n("v-container",{staticClass:"h-full overflow-y-auto",attrs:{fluid:""}},[n("nuxt-child")],1)],1),n("v-footer",{staticClass:"safe-aria",attrs:{app:"",fixed:""}},[n("v-input",{attrs:{dense:"","hide-details":!0},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("box-icon",{attrs:{name:"equalizer"}})]},proxy:!0},{key:"append",fn:function(){return[n("div",{staticClass:"w-6 h-6 flex items-center justify-center"},[n("SvgIcon",{attrs:{className:"#iconemoji"}})],1),n("div",{staticClass:"w-6 h-6 flex items-center justify-center",on:{click:e.sendMsg}},[n("box-icon",{attrs:{name:"send",type:"solid"}})],1)]},proxy:!0}])},[n("v-textarea",{attrs:{dense:"",filled:"","auto-grow":"",rows:"1","row-height":"20"},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)],1)],1)}),[],!1,null,"4da37e74",null);t.default=component.exports;w()(component,{VAppBar:x.a,VAppBarNavIcon:O.a,VContainer:j.a,VFooter:C.a,VInput:k.a,VMain:P.a,VTextarea:S.a,VToolbarTitle:V.a})}}]);