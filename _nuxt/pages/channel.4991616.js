(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{329:function(e,t,r){var content=r(363);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(27).default)("331fdbb6",content,!0,{sourceMap:!1})},362:function(e,t,r){"use strict";var n=r(329);r.n(n).a},363:function(e,t,r){(t=r(26)(!1)).push([e.i,"#local[data-v-1fb14c0f]{position:absolute;right:10px;top:calc(25vh + 10px);width:25vw;height:40vw;border-radius:4px;overflow:hidden;box-shadow:0 2px 3px var(--weui-FG-3);transform:box-shadow 2s linear}#local.good[data-v-1fb14c0f]{border:1px solid var(--weui-GREEN);box-shadow:0 0 1px 1px var(--weui-GREEN)}#local.normal[data-v-1fb14c0f]{border:1px solid var(--weui-YELLOW)}#local.bad[data-v-1fb14c0f],#local.normal[data-v-1fb14c0f]{box-shadow:0 0 1px 1px var(--weui-YELLOW)}#local.bad[data-v-1fb14c0f]{border:1px solid var(--weui-RED)}#remote[data-v-1fb14c0f]{height:25vh;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:4px;grid-row-gap:4px;background-color:var(--weui-FG-3)}#controls[data-v-1fb14c0f]{width:25vw;height:10vw;position:absolute;right:10px;top:calc(25vh + 40vw + 20px);display:flex;align-items:center;justify-content:space-evenly;z-index:9}",""]),e.exports=t},435:function(e,t,r){"use strict";r.r(t);r(19),r(10),r(7),r(4),r(15),r(328),r(28),r(21);var n=r(0),o=r(5),c=r(25),l=r(53);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={layout:"channel",name:"channelContainer",data:function(){return{input:"",quality:{local:null},remotes:[],peers:[]}},mixins:[r(161).a],computed:v(v({},Object(c.c)("channel",["getCard"])),{},{userTarget:function(){return this.getCard(this.$route.params.id)}}),beforeDestroy:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.unpublishLocalRTC();case 2:e.$RTC.unsubscribeClient(),e.$RTC.close(),e.$RTC.leave();case 5:case"end":return t.stop()}}),t)})))()},methods:{init:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()},connect:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$RTC.subscribe(e.RTCsubscribe),e.$RTC.subscribed(e.RTCsubscribed),e.$RTC.streamUpdate(e.RTCstreamUpdate),e.$RTC.streamRemove(e.RTCstreamRemove),t.next=6,e.joinRTC(e.$route.params.id);case 6:return e.$RTC.peerJoin(e.RTCPeerJoin),e.$RTC.peerLeave(e.RTCPeerLeave),t.next=10,e.publishLocalRTC({audio:!0,video:!0,mirror:!0}).catch((function(e){switch(e.name){case"NotFoundError":window.weui.alert("没找到可用设备");break;case"NotAllowedError":window.weui.alert("访问摄像头/麦克风被拒绝");break;case"NotReadableError":window.weui.alert("暂时无法访问摄像头/麦克风，请确保当前没有其他应用请求访问摄像头/麦克风，并重试");break;case"AbortError":window.weui.alert("由于某些未知原因导致设备无法被使用")}}));case 10:t.sent.play(e.$refs.local);case 12:case"end":return t.stop()}}),t)})))()},networkQuality:function(e){this.quality.local=e},RTCsubscribe:function(e){this.$RTC.client.subscribe(e.stream)},RTCsubscribed:function(e){e.stream.on("player-state-changed",this.playerStateChanged);var t=e.stream.getId();this.remotes=Object(l.unionBy)(this.remotes.concat([{id:t,event:e}])),this.$nextTick((function(){var r=document.getElementById(t);e.stream.play(r,{objectFit:"cover"})}))},playerStateChanged:function(e){var t=e.state;console.log("state change",t)},RTCstreamUpdate:function(e){console.log("RTCstreamUpdate",e)},RTCstreamRemove:function(e){var t=e.stream.getId(),r=this.remotes.findIndex((function(e){return e.id===t}));this.remotes.splice(r,1)},RTCPeerJoin:function(e){var t=e.userId;console.log("RTCPeerJoin",t),this.peers.push({id:t,event:e})},RTCPeerLeave:function(e){var t=e.userId;this.peers.delete(t),this.peers.splice(this.peers.findIndex((function(e){return e.id===t})),1)},sendMsg:function(){},deleteMsg:function(e){}}},m=(r(362),r(3)),h=r(66),w=r.n(h),y=r(442),x=r(428),C=r(351),R=r(424),T=r(429),k=r(430),O=r(332),j=r(357),_=r(353),V=r(336),$=r(344),E=r(305),L=r(433),P=r(431),I=r(434),N=r(324),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LazyLoadView",{staticClass:"h-full",attrs:{initFN:e.init},on:{rendered:e.connect},scopedSlots:e._u([{key:"loading",fn:function(){return[r("CircleLoader")]},proxy:!0}])},[r("v-app-bar",{attrs:{app:"",fixed:"","elevate-on-scroll":""}},[r("v-app-bar-nav-icon",{on:{click:function(t){return e.$router.back()}}},[r("v-icon",[e._v("arrow_back")])],1),r("v-toolbar-title",[r("v-avatar",{attrs:{rounded:"",height:"32","min-width":"32",width:"32"}},[r("img",{attrs:{src:e.userTarget.smallImgUrl,alt:e.userTarget.serverName}})]),r("span",{staticClass:"ml-2",domProps:{textContent:e._s(e.userTarget.serverName)}})],1),r("v-spacer"),r("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[e._v("more_vert")])],1)]}}])},[r("v-list",[r("v-list-item",[r("v-list-item-title",[e._v("频道成员")])],1),r("v-list-item",[r("v-list-item-title",[e._v("麦克风")])],1),r("v-list-item",[r("v-list-item-title",[e._v("音量")])],1)],1)],1)],1),r("v-main",{staticClass:"h-full"},[r("v-container",{staticClass:"h-full relative overflow-y-auto",attrs:{fluid:""}},[r("div",{staticClass:"absolute inset-0"},[r("div",{ref:"remote",attrs:{id:"remote"}},e._l(e.remotes,(function(e){return r("div",{key:e.id,staticClass:"remote",attrs:{id:e.id}})})),0),r("div",{ref:"local",class:[{good:e.quality.local&&e.quality.local.uplinkNetworkQuality<3,normal:e.quality.local&&3===e.quality.local.uplinkNetworkQuality,bad:e.quality.local&&e.quality.local.uplinkNetworkQuality>=3}],attrs:{id:"local"}}),r("div",{attrs:{id:"controls"}},[r("div",{attrs:{id:"camera"}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("videocam")])],1)],1),r("div",{attrs:{id:"speakers"}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("volume_up")])],1)],1)])]),r("nuxt-child")],1)],1),r("v-footer",{staticClass:"safe-aria",attrs:{app:"",fixed:""}},[r("v-input",{attrs:{dense:"","hide-details":!0},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("keyboard_voice")])],1)],1),r("div",{staticClass:"w-10 h-10 flex items-center justify-center"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mood")])],1)],1)]},proxy:!0}])},[r("v-textarea",{attrs:{dense:"",filled:"","auto-grow":"",rows:"1","row-height":"20"},scopedSlots:e._u([{key:"append",fn:function(){return[r("div",{staticClass:"w-10 h-10 flex items-center justify-center",on:{click:e.sendMsg}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("send")])],1)],1)]},proxy:!0}]),model:{value:e.input,callback:function(t){e.input="string"==typeof t?t.trim():t},expression:"input"}})],1)],1)],1)}),[],!1,null,"1fb14c0f",null);t.default=component.exports;w()(component,{VAppBar:y.a,VAppBarNavIcon:x.a,VAvatar:C.a,VBtn:R.a,VContainer:T.a,VFooter:k.a,VIcon:O.a,VInput:j.a,VList:_.a,VListItem:V.a,VListItemTitle:$.a,VMain:E.a,VMenu:L.a,VSpacer:P.a,VTextarea:I.a,VToolbarTitle:N.a})}}]);