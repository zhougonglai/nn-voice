(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{317:function(e,t,r){var content=r(397);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("55400330",content,!0,{sourceMap:!1})},318:function(e,t,r){var content=r(399);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("2a61eefc",content,!0,{sourceMap:!1})},396:function(e,t,r){"use strict";var n=r(317);r.n(n).a},397:function(e,t,r){(t=r(23)(!1)).push([e.i,".card[data-v-51ec9562]{background:var(--weui-BG-5);box-shadow:0 2px 3px var(--weui-FG-3);color:var(--weui-FG-0);overflow:hidden}.card[data-v-51ec9562],.card-header[data-v-51ec9562]{position:relative}.card-avatar[data-v-51ec9562]{position:absolute;right:15px;top:80px;background:var(--weui-BG-5);padding:4px;border-radius:50%}.card-content[data-v-51ec9562]{flex:1}.card-title[data-v-51ec9562]{font-size:large;font-weight:400;color:var(--weui-FG-0)}.card-intro[data-v-51ec9562]{font-size:small;color:var(--weui-FG-HALF);text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}",""]),e.exports=t},398:function(e,t,r){"use strict";var n=r(318);r.n(n).a},399:function(e,t,r){(t=r(23)(!1)).push([e.i,"#home[data-v-1bb34a1c]{background-color:var(--weui-BG-2)}",""]),e.exports=t},408:function(e,t,r){"use strict";r.r(t);var n=r(65),o=(r(21),r(9),r(8),r(17),r(10),r(11),r(4),r(22),r(1)),c=r(5),l=r(29);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{LazyLoadView:n.default},computed:f(f(f({},Object(l.e)("user",["user","users"])),Object(l.e)("rtm",["peersStatus"])),Object(l.c)("rtm",["getMessages"])),methods:f(f(f({},Object(l.b)("user",["usersAction"])),Object(l.b)("rtm",["peersStatusAction"])),{},{initCards:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.usersAction(1).catch((function(e){}));case 2:return t.next=4,e.usersAction(2).catch((function(e){}));case 4:return e.messageFromPeer(),t.abrupt("return",!0);case 6:case"end":return t.stop()}}),t)})))()},messageFromPeer:function(){},updatePeersStatus:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.peersStatusAction(e.users.map((function(e){return e.id.toString()}))));case 1:case"end":return t.stop()}}),t)})))()},navigationChat:function(e){this.$router.push("/peer/".concat(e.id))}})},m=r(3),h=r(60),w=r.n(h),O=r(307),y=r(332),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LazyLoadView",{key:"cards",attrs:{initFN:e.initCards},scopedSlots:e._u([{key:"loading",fn:function(){return e._l(5,(function(e){return r("v-skeleton-loader",{key:e,staticClass:"mx-auto rounded-0",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0}])},[r("WePanel",e._l(e.users.filter((function(t){return t.id!==e.user.id})),(function(t){return r("WeBox",{key:t.id,staticClass:"weui-media-box_appmsg",attrs:{hasDot:""},on:{click:function(r){return e.navigationChat(t)}},scopedSlots:e._u([{key:"header",fn:function(){return[r("img",{staticClass:"rounded-lg weui-media-box__thumb",attrs:{src:t.avatar}}),e.peersStatus&&isFinite(e.peersStatus[t.id])?[r("WeBage",{staticClass:"weui-badge_dot",class:{"bg-success":e.peersStatus[t.id]}})]:e._e()]},proxy:!0},{key:"footer",fn:function(){return[r("v-icon",[e._v("send")]),e.getMessages(t.id).length?[r("WeBage",{staticClass:"weui-badge_dot"})]:e._e()]},proxy:!0}],null,!0)},[r("div",{staticClass:"weui-media-box__title"},[e._v(e._s(t.first_name)+" "+e._s(t.last_name))]),e.getMessages(t.id).length?r("div",{staticClass:"weui-media-box__desc"},[e._v(e._s(e.getMessages(t.id)[e.getMessages(t.id).length-1].text))]):r("div",{staticClass:"weui-media-box__desc"},[e._v(e._s(t.email))])])})),1),r("LoadMore",{attrs:{placehold:"没有更多了",line:""}})],1)}),[],!1,null,null,null),x=component.exports;w()(component,{VIcon:O.a,VSkeletonLoader:y.a});r(52);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={components:{LazyLoadView:n.default},computed:j({},Object(l.e)("channel",["cards"])),methods:j(j({},Object(l.b)("channel",["cardAction"])),{},{initCards:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.cardAction()]);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}})},k=(r(396),Object(m.a)(P,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("LazyLoadView",{key:"cards",attrs:{initFN:e.initCards},scopedSlots:e._u([{key:"loading",fn:function(){return e._l(5,(function(e){return r("v-skeleton-loader",{key:e,staticClass:"mx-auto rounded-0",attrs:{type:"list-item"}})}))},proxy:!0}])},[r("div",{staticClass:"grid grid-cols-2 gap-2 pa-2"},e._l(e.cards,(function(t){return r("n-link",{key:t.id,staticClass:"rounded card flex flex-col",attrs:{to:"/channel/"+t.serverId}},[r("div",{staticClass:"card-header"},[r("img",{attrs:{src:t.bigImgUrl}})]),r("div",{staticClass:"card-avatar"},[r("img",{attrs:{src:t.smallImgUrl}})]),r("div",{staticClass:"card-content pa-2"},[r("div",{staticClass:"card-title",domProps:{textContent:e._s(t.serverName)}}),r("div",{staticClass:"card-intro",domProps:{textContent:e._s(t.intor)}})])])})),1),r("LoadMore",{attrs:{placehold:"没有更多了",line:""}})],1)}),[],!1,null,"51ec9562",null)),C=k.exports;w()(k,{VSkeletonLoader:y.a});var S={name:"index",data:function(){return{current:"peer",banners:[{url:"https://api.adorable.io/avatars/285/1.png"},{url:"https://api.adorable.io/avatars/285/2.png"},{url:"https://api.adorable.io/avatars/285/3.png"},{url:"https://api.adorable.io/avatars/285/4.png"},{url:"https://api.adorable.io/avatars/285/5.png"}]}},components:{LazyLocadView:n.default,PeerToPeer:x,PeerToChannel:C}},L=(r(398),Object(m.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"h-full overflow-y-auto",attrs:{id:"home"}},[r("WeNavbar",{model:{value:e.current,callback:function(t){e.current=t},expression:"current"}},[r("WeNavItem",{attrs:{name:"peer"}},[e._v("好友")]),r("WeNavItem",{attrs:{name:"channel"}},[e._v("频道")])],1),r("keep-alive",{attrs:{include:["PeerToPeer","PeerToChannel"]}},["peer"===e.current?r("PeerToPeer"):r("PeerToChannel")],1)],1)}),[],!1,null,"1bb34a1c",null));t.default=L.exports}}]);