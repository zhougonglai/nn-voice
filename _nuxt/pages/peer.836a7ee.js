(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{295:function(e,t,r){var content=r(318);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("0806e38e",content,!0,{sourceMap:!1})},317:function(e,t,r){"use strict";var n=r(295);r.n(n).a},318:function(e,t,r){(t=r(21)(!1)).push([e.i,".safe-aria[data-v-1a433824] .v-text-field__details{display:none}",""]),e.exports=t},377:function(e,t,r){"use strict";r.r(t);r(23),r(9),r(8),r(5),r(17),r(24);var n=r(1),o=r(4),c=r(64),l=r(169),d=r(29),f=r(38);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={layout:"channel",components:{LazyLoadView:c.default,CircleLoader:l.default},data:function(){return{input:"",loading:{send:!1,emoj:!1,audio:!1}}},computed:h(h(h(h({},Object(d.c)("user",["getUser"])),Object(d.e)("user",["user","users"])),Object(d.e)("rtm",["peersStatus"])),{},{userTarget:function(){return this.$route.params&&this.getUser(this.$route.params.id)}}),methods:h(h({},Object(d.d)("rtm",["MSG_UPDATE"])),{},{init:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!0;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},sendMsg:Object(f.throttle)(Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.input){e.next=7;break}return e.next=3,this.$RTM.sendPeerMessage(this.input,this.$route.params.id);case 3:t=e.sent,r=t.hasPeerReceived,this.MSG_UPDATE({messageType:"TEXT",pid:this.user.id,sendTo:this.$route.params.id,text:this.input,serverReceivedTs:Date.now(),received:r}),this.input="";case 7:case"end":return e.stop()}}),e,this)}))),650),switcher:function(){console.log("switcher"),window.weui.picker(this.users.map((function(e){return h(h({},e),{},{label:"".concat(e.first_name," ").concat(e.last_name),value:e.id})})),{className:"custom-classname",container:"body",defaultValue:[this.$route.params.id],onChange:function(e){console.log(e)},onConfirm:function(e){console.log(e)},id:"singleLinePicker"})}})},w=(r(317),r(3)),y=r(60),x=r.n(y),O=r(379),j=r(368),k=r(369),_=r(362),T=r(370),C=r(371),V=r(311),P=r(314),S=r(282),$=r(373),M=r(359),component=Object(w.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LazyLoadView",{attrs:{initFN:e.init},scopedSlots:e._u([{key:"loading",fn:function(){return[r("CircleLoader")]},proxy:!0}])},[r("v-app-bar",{attrs:{app:"",fixed:"","elevate-on-scroll":""}},[r("v-app-bar-nav-icon",{on:{click:function(t){return e.$router.back()}}},[r("v-icon",[e._v("arrow_back")])],1),e.userTarget?r("v-toolbar-title",{on:{click:e.switcher}},[r("v-avatar",{attrs:{rounded:"",height:"32","min-width":"32",width:"32"}},[r("img",{attrs:{src:e.userTarget.avatar,alt:e.userTarget.first_name+" "+e.userTarget.last_name}})]),r("span",{staticClass:"ml-2"},[e._v(e._s(e.userTarget.first_name)+" "+e._s(e.userTarget.last_name))]),e.peersStatus&&isFinite(e.peersStatus[e.user.id])?[r("WeBage",{staticClass:"weui-badge_dot ml-2",class:{"bg-success":e.peersStatus[e.userTarget.id]}})]:e._e()],2):e._e(),r("div",{staticClass:"flex-1"}),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("call")])],1),r("v-btn",{attrs:{icon:""}},[r("box-icon",{attrs:{type:"solid",name:"video",color:e.$vuetify.theme.dark?"white":"black"}})],1)],1),r("v-main",{staticClass:"h-full"},[r("v-container",{staticClass:"h-full overflow-y-auto",attrs:{fluid:""}},[r("nuxt-child")],1)],1),r("v-footer",{staticClass:"safe-aria",attrs:{app:"",fixed:""}},[r("v-input",{attrs:{dense:"","hide-details":!0},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("box-icon",{attrs:{name:"equalizer",color:e.$vuetify.theme.dark?"white":"black"}})],1)]},proxy:!0},{key:"append",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("SvgIcon",{attrs:{className:"#iconemoji"}})],1),r("div",{staticClass:"w-10 h-10 flex items-center justify-center",on:{click:e.sendMsg}},[r("box-icon",{attrs:{name:"send",type:"solid",color:e.$vuetify.theme.dark?"white":"black"}})],1)]},proxy:!0}])},[r("v-textarea",{attrs:{dense:"",filled:"","auto-grow":"",rows:"1","row-height":"20"},model:{value:e.input,callback:function(t){e.input="string"==typeof t?t.trim():t},expression:"input"}})],1)],1)],1)}),[],!1,null,"1a433824",null);t.default=component.exports;x()(component,{VAppBar:O.a,VAppBarNavIcon:j.a,VAvatar:k.a,VBtn:_.a,VContainer:T.a,VFooter:C.a,VIcon:V.a,VInput:P.a,VMain:S.a,VTextarea:$.a,VToolbarTitle:M.a})}}]);