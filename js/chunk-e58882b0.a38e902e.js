(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e58882b0"],{"32e6":function(a,t,c){"use strict";c.r(t);var e=function(){var a=this,t=a.$createElement,c=a._self._c||t;return c("v-container",{staticClass:"fill-height mt-7"},[c("v-layout",{staticClass:"d-flex justify-center"},[c("div",{staticClass:"account"},[c("v-row",[c("v-col",{attrs:{cols:"2"}},[c("v-select",{attrs:{items:a.c_coin,label:a.$t("coin"),solo:"",dense:""},model:{value:a.d_coin,callback:function(t){a.d_coin=t},expression:"d_coin"}})],1),c("v-col",{attrs:{cols:"2"}},[c("v-select",{attrs:{items:a.c_cash,label:a.$t("cash"),solo:"",dense:""},model:{value:a.d_cash,callback:function(t){a.d_cash=t},expression:"d_cash"}})],1),c("v-col",{attrs:{cols:"8"}},[c("v-text-field",{attrs:{label:a.$t("xpub"),solo:"",dense:""},model:{value:a.d_xpub,callback:function(t){a.d_xpub=t},expression:"d_xpub"}})],1)],1),c("wallet-account",{attrs:{coin:a.d_coin,cash:a.d_cash,xpub:a.d_xpub}})],1)])],1)},s=[],o={name:"Account",data:function(){return{d_coin:"BTC",d_cash:"USD",d_xpub:""}},computed:{c_coin:function(a){return a.$store.__s("app.coin")},c_cash:function(a){return a.$store.__s("app.cash")}},i18n:{messages:{zhCN:{xpub:"扩展公钥"}}}},n=o,l=(c("7abf"),c("2877")),i=Object(l["a"])(n,e,s,!1,null,"7aeae4a6",null);t["default"]=i.exports},"7abf":function(a,t,c){"use strict";var e=c("aa33"),s=c.n(e);s.a},aa33:function(a,t,c){var e=c("ed75");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var s=c("499e").default;s("69dbc73a",e,!0,{sourceMap:!1,shadowMode:!1})},ed75:function(a,t,c){var e=c("24fb");t=e(!1),t.push([a.i,".account[data-v-7aeae4a6]{width:777px}",""]),a.exports=t}}]);