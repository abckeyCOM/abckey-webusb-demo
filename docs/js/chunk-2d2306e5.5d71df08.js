(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2306e5"],{ebf8:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"4"}},[s("v-card",[s("v-card-text",[s("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.getAddress()}}},[e._v(e._s(e.$t("Get Address")))]),s("br"),s("v-select",{attrs:{items:e.c_coins,label:e.$t("coin_name")},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}}),s("v-text-field",{attrs:{label:e.$t("bip32_path")},model:{value:e.d_bip32Path,callback:function(t){e.d_bip32Path=t},expression:"d_bip32Path"}}),s("v-select",{attrs:{items:["LEGACY","BECH32","P2SH_SEGWIT"],label:e.$t("script_type")},model:{value:e.d_scriptType,callback:function(t){e.d_scriptType=t},expression:"d_scriptType"}}),s("v-select",{attrs:{items:[!0,!1],label:e.$t("show_display")},model:{value:e.d_showDisplay,callback:function(t){e.d_showDisplay=t},expression:"d_showDisplay"}})],1)],1)],1),s("v-col",{attrs:{cols:"12",sm:"8"}},[s("v-textarea",{attrs:{label:e.$t("Request"),value:e.d_request,filled:"",readonly:"","auto-grow":""}}),s("v-textarea",{attrs:{label:e.$t("Response"),value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},a=[],n=(s("96cf"),s("1da1")),r={name:"Address",data:function(){return{d_coinName:"Bitcoin",d_bip32Path:"m/49'/0'/0'/0/0",d_scriptType:"P2SH_SEGWIT",d_showDisplay:!1,d_response:"",d_request:""}},computed:{c_coins:function(e){return e.$store.__s("app.asBTC")}},watch:{d_scriptType:function(e){"LEGACY"===e&&(this.d_bip32Path="m/44'/0'/0'/0/0"),"BECH32"===e&&(this.d_bip32Path="m/49'/0'/0'/0/0"),"P2SH_SEGWIT"===e&&(this.d_bip32Path="m/49'/0'/0'/0/0")},d_coinName:function(e){"Bitcoin"===e?(this.d_bip32Path="m/49'/0'/0'/0/0",this.d_scriptType="P2SH_SEGWIT"):"Litecoin"===e?(this.d_bip32Path="m/49'/2'/0'/0/0",this.d_scriptType="P2SH_SEGWIT"):"Dogecoin"===e&&(this.d_bip32Path="m/44'/3'/0'/0/0",this.d_scriptType="LEGACY")}},methods:{getAddress:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s={coin_name:e.d_coinName,bip32_path:e.d_bip32Path,script_type:e.d_scriptType,show_display:e.d_showDisplay},e.d_request="abckey.cmd('GetAddress', "+JSON.stringify(s,null,4)+")",t.next=4,e.$usb.cmd("GetAddress",s);case 4:i=t.sent,e.d_response=JSON.stringify(i,null,4);case 6:case"end":return t.stop()}}),t)})))()}},i18n:{messages:{zhCN:{"Get Address":"获取地址",coin_name:"币名",bip32_path:"路径",script_type:"类型",show_display:"显示"}}}},c=r,d=s("2877"),o=Object(d["a"])(c,i,a,!1,null,"48b25238",null);t["default"]=o.exports}}]);