(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{303:function(t,e,r){var content=r(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("358e9596",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";var n=r(303);r.n(n).a},337:function(t,e,r){(e=r(22)(!1)).push([t.i,"#local[data-v-713e87dc]{position:absolute;right:10px;bottom:10px;width:25vw;height:40vw;border-radius:4px;overflow:hidden;box-shadow:0 2px 3px var(--weui-FG-3)}#remote[data-v-713e87dc]{height:25vh}",""]),t.exports=e},407:function(t,e,r){"use strict";r.r(e);r(24),r(15),r(8),r(4),r(20),r(21);var n=r(1),o=r(5),c=r(29);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={layout:"channel",data:function(){return{input:""}},mixins:[{computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.e)("user",["user"])),methods:{initRtcClient:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$RTC.client||t.user&&t.login(),t.$store.subscribe(t.rtcEventsHandle);case 2:case"end":return e.stop()}}),e)})))()},rtcEventsHandle:function(t){var e=this,r=t.type,n=t.payload,o={"user/USER":function(){return n?e.login():e.logout()}};r in o&&o[r]()},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$RTC.createClient(t.user.id),t.$RTC.subscribeClientEvents(),e.next=4,r.join({roomId:t.$route.params.id});case 4:return n=t.$RTC.createStream({userId:t.user.id,audio:!0,video:!0}),e.next=7,n.initialize().then((function(){n.play("local")}));case 7:return e.next=9,r.publish(n);case 9:t.$RTC.subscribe(t.RTCsubscribe),t.$RTC.subscribed(t.RTCsubscribed);case 11:case"end":return e.stop()}}),e)})))()},RTCsubscribe:function(t){console.log("RTCsubscribe",t)},RTCsubscribed:function(t){console.log("RTCsubscribed",t)},logout:function(){}}}],computed:f(f({},Object(c.c)("channel",["getCard"])),{},{userTarget:function(){return this.getCard(this.$route.params.id)}}),methods:{init:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.initRtcClient());case 1:case"end":return e.stop()}}),e)})))()},sendMsg:function(){}}},m=(r(336),r(3)),h=r(60),O=r.n(h),w=r(414),y=r(400),j=r(324),C=r(396),x=r(401),R=r(402),_=r(306),T=r(331),k=r(326),P=r(310),V=r(317),$=r(280),S=r(405),E=r(403),D=r(406),I=r(299),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LazyLoadView",{staticClass:"h-full",attrs:{initFN:t.init},scopedSlots:t._u([{key:"loading",fn:function(){return[r("CircleLoader")]},proxy:!0}])},[r("v-app-bar",{attrs:{app:"",fixed:"","elevate-on-scroll":""}},[r("v-app-bar-nav-icon",{on:{click:function(e){return t.$router.back()}}},[r("v-icon",[t._v("arrow_back")])],1),r("v-toolbar-title",[r("v-avatar",{attrs:{rounded:"",height:"32","min-width":"32",width:"32"}},[r("img",{attrs:{src:t.userTarget.smallImgUrl,alt:t.userTarget.serverName}})]),r("span",{staticClass:"ml-2",domProps:{textContent:t._s(t.userTarget.serverName)}})],1),r("v-spacer"),r("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("more_vert")])],1)]}}])},[r("v-list",[r("v-list-item",[r("v-list-item-title",[t._v("频道成员")])],1),r("v-list-item",[r("v-list-item-title",[t._v("麦克风")])],1),r("v-list-item",[r("v-list-item-title",[t._v("音量")])],1)],1)],1)],1),r("v-main",{staticClass:"h-full"},[r("v-container",{staticClass:"h-full relative overflow-y-auto",attrs:{fluid:""}},[r("div",{staticClass:"absolute inset-0"},[r("div",{attrs:{id:"remote"}}),r("div",{attrs:{id:"local"}})]),r("nuxt-child")],1)],1),r("v-footer",{staticClass:"safe-aria",attrs:{app:"",fixed:""}},[r("v-input",{attrs:{dense:"","hide-details":!0},scopedSlots:t._u([{key:"prepend",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("keyboard_voice")])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("sentiment_satisfied_alt")])],1)],1),r("div",{staticClass:"w-10 h-10 flex items-center justify-center",on:{click:t.sendMsg}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("send")])],1)],1)]},proxy:!0}])},[r("v-textarea",{attrs:{dense:"",filled:"","auto-grow":"",rows:"1","row-height":"20"},model:{value:t.input,callback:function(e){t.input="string"==typeof e?e.trim():e},expression:"input"}})],1)],1)],1)}),[],!1,null,"713e87dc",null);e.default=component.exports;O()(component,{VAppBar:w.a,VAppBarNavIcon:y.a,VAvatar:j.a,VBtn:C.a,VContainer:x.a,VFooter:R.a,VIcon:_.a,VInput:T.a,VList:k.a,VListItem:P.a,VListItemTitle:V.a,VMain:$.a,VMenu:S.a,VSpacer:E.a,VTextarea:D.a,VToolbarTitle:I.a})}}]);