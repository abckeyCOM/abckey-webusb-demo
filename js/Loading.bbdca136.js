(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Loading"],{"45d6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height"},[r("v-layout",{staticClass:"d-flex justify-center align-center text-center"},[r("div",[r("v-progress-circular",{attrs:{indeterminate:"",size:"188",color:"primary"}},[e._v(" "+e._s(e.$t("Loading ABCKEY"))+" ")])],1)])],1)},a=[],i=(r("d3b7"),r("96cf"),r("1da1")),u={name:"Loading",data:function(){return{}},methods:{initialize:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$usb.cmd("Initialize");case 2:if(r=t.sent,!r.data.bootloader_mode||r.data.firmware_present){t.next=7;break}return t.abrupt("return",e.$router.push({path:"/Welcome"}));case 7:if(!r.data.bootloader_mode||!r.data.bootloader_mode){t.next=11;break}return t.abrupt("return",e.$router.push({path:"/Bootloader"}));case 11:if(r.data.initialized){t.next=13;break}return t.abrupt("return",e.$router.push({path:"/Initialize"}));case 13:return t.abrupt("return",r);case 14:case"end":return t.stop()}}),t)})))()},publickey:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={coin_name:"Bitcoin",address_n:[2147483697,2147483648,2147483648],script_type:"SPENDP2SHWITNESS",show_display:!1},t.next=3,e.$usb.cmd("GetPublicKey",r);case 3:n=t.sent,"PublicKey"===n.type?e.$router.push({path:"/Bitcoin/Account"}):"Failure"===n.type&&e.$router.push({path:"/Connect"});case 5:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){return setTimeout(e,1111)}));case 2:return t.next=4,e.initialize();case 4:if(n=t.sent,!(null===(r=n.data)||void 0===r?void 0:r.initialized)){t.next=8;break}return t.next=8,e.publickey();case 8:case"end":return t.stop()}}),t)})))()},i18n:{messages:{zhCN:{"Loading ABCKEY":"正在加载 ABCKEY"}}}},o=u,c=r("2877"),s=Object(c["a"])(o,n,a,!1,null,"ae3afcee",null);t["default"]=s.exports}}]);