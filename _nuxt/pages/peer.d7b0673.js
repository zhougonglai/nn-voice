(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{334:function(e,t,r){var content=r(412);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("ac269584",content,!0,{sourceMap:!1})},411:function(e,t,r){"use strict";var n=r(334);r.n(n).a},412:function(e,t,r){(t=r(25)(!1)).push([e.i,".safe-aria[data-v-4ec75a9c] .v-text-field__details{display:none}",""]),e.exports=t},435:function(e,t,r){"use strict";r.r(t);r(21),r(13),r(7),r(4),r(17),r(22);var n=r(1),c=r(5),o=r(31),l=r(53);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={layout:"channel",data:function(){return{input:"",loading:{send:!1,emoj:!1,audio:!1}}},computed:f(f(f(f({},Object(o.c)("user",["getUser"])),Object(o.e)("user",["user","users"])),Object(o.e)("rtm",["peersStatus"])),{},{userTarget:function(){return this.$route.params&&this.getUser(this.$route.params.id)}}),methods:f(f({},Object(o.d)("rtm",["MSG_UPDATE"])),{},{init:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!0;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},sendMsg:Object(l.throttle)(Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.input){e.next=7;break}return e.next=3,this.$RTM.sendPeerMessage(this.input,this.$route.params.id);case 3:t=e.sent,r=t.hasPeerReceived,this.MSG_UPDATE({messageType:"TEXT",pid:this.user.id,sendTo:this.$route.params.id,text:this.input,serverReceivedTs:Date.now(),received:r}),this.input="";case 7:case"end":return e.stop()}}),e,this)}))),650),switcher:function(){console.log("switcher"),window.weui.picker(this.users.map((function(e){return f(f({},e),{},{label:"".concat(e.first_name," ").concat(e.last_name),value:e.id})})),{className:"custom-classname",container:"body",defaultValue:[this.$route.params.id],onChange:function(e){console.log(e)},onConfirm:function(e){console.log(e)},id:"singleLinePicker"})}})},h=(r(411),r(3)),m=r(66),w=r.n(m),y=r(437),_=r(423),O=r(345),j=r(419),x=r(424),T=r(425),k=r(326),C=r(352),P=r(300),V=r(429),S=r(319),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LazyLoadView",{staticClass:"h-screen",attrs:{initFN:e.init},scopedSlots:e._u([{key:"loading",fn:function(){return[r("CircleLoader")]},proxy:!0}])},[r("v-app-bar",{attrs:{app:"",fixed:"","elevate-on-scroll":""}},[r("v-app-bar-nav-icon",{on:{click:function(t){return e.$router.back()}}},[r("v-icon",[e._v("arrow_back")])],1),e.userTarget?r("v-toolbar-title",{on:{click:e.switcher}},[r("v-avatar",{attrs:{height:"32","min-width":"32",width:"32"}},[r("img",{attrs:{src:e.userTarget.avatar,alt:e.userTarget.first_name+" "+e.userTarget.last_name}})]),r("span",{staticClass:"ml-2"},[e._v(e._s(e.userTarget.first_name)+" "+e._s(e.userTarget.last_name))]),e.peersStatus&&isFinite(e.peersStatus[e.user.id])?[r("WeBage",{staticClass:"weui-badge_dot ml-2",class:{"bg-success":e.peersStatus[e.userTarget.id]}})]:e._e()],2):e._e(),r("div",{staticClass:"flex-1"}),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("call")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("videocam")])],1)],1),r("v-main",{staticClass:"h-full"},[r("v-container",{staticClass:"h-full overflow-y-auto",attrs:{fluid:""}},[r("nuxt-child")],1)],1),r("v-footer",{staticClass:"safe-aria",attrs:{app:"",fixed:""}},[r("v-input",{attrs:{dense:"","hide-details":!0},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("keyboard_voice")])],1)],1)]},proxy:!0},{key:"append",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mood")])],1)],1),r("div",{staticClass:"w-10 h-10 flex items-center justify-center",on:{click:e.sendMsg}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("send")])],1)],1)]},proxy:!0}])},[r("v-textarea",{attrs:{dense:"",filled:"","auto-grow":"",rows:"1","row-height":"20"},model:{value:e.input,callback:function(t){e.input="string"==typeof t?t.trim():t},expression:"input"}})],1)],1)],1)}),[],!1,null,"4ec75a9c",null);t.default=component.exports;w()(component,{VAppBar:y.a,VAppBarNavIcon:_.a,VAvatar:O.a,VBtn:j.a,VContainer:x.a,VFooter:T.a,VIcon:k.a,VInput:C.a,VMain:P.a,VTextarea:V.a,VToolbarTitle:S.a})}}]);