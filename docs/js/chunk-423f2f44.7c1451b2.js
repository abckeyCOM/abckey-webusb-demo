(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423f2f44"],{3935:function(e,t,i){"use strict";(function(e){i("d3b7"),i("25f0"),i("96cf");var a=i("1da1");t["a"]={name:"PublicKey",data:function(){return{d_coinName:"Bitcoin",d_bip32Path:"m/49'/0'/0'",d_scriptType:"P2SH_SEGWIT",d_showDisplay:!1,d_response:"",d_request:""}},computed:{c_coins:function(e){return e.$store.__s("app.asBTC")}},watch:{d_scriptType:function(e){"LEGACY"===e&&(this.d_bip32Path="m/44'/0'/0'"),"BECH32"===e&&(this.d_bip32Path="m/49'/0'/0'"),"P2SH_SEGWIT"===e&&(this.d_bip32Path="m/49'/0'/0'")},d_coinName:function(e){"Bitcoin"===e?(this.d_bip32Path="m/49'/0'/0'",this.d_scriptType="P2SH_SEGWIT"):"Litecoin"===e?(this.d_bip32Path="m/49'/2'/0'",this.d_scriptType="P2SH_SEGWIT"):"Dogecoin"===e&&(this.d_bip32Path="m/44'/3'/0'",this.d_scriptType="LEGACY")}},methods:{getPublicKey:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a={coin_name:t.d_coinName,bip32_path:t.d_bip32Path,script_type:t.d_scriptType,show_display:t.d_showDisplay},t.d_request="abckey.cmd('GetPublicKey', "+JSON.stringify(a,null,4)+")",i.next=4,t.$usb.cmd("GetPublicKey",a);case 4:s=i.sent,s.data.node.chain_code=e.from(s.data.node.chain_code,"base64").toString("hex"),s.data.node.public_key=e.from(s.data.node.public_key,"base64").toString("hex"),t.d_response=JSON.stringify(s,null,4);case 8:case"end":return i.stop()}}),i)})))()}},i18n:{messages:{zhCN:{"Get Public Key":"获取公钥",coin_name:"币名",bip32_path:"路径",script_type:"类型",show_display:"显示"}}}}}).call(this,i("b639").Buffer)},"3f55":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-card",[i("v-card-text",[i("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.getPublicKey()}}},[e._v(e._s(e.$t("Get Public Key")))]),i("br"),i("v-select",{attrs:{items:e.c_coins,label:e.$t("coin_name")},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}}),i("v-text-field",{attrs:{label:e.$t("bip32_path")},model:{value:e.d_bip32Path,callback:function(t){e.d_bip32Path=t},expression:"d_bip32Path"}}),i("v-select",{attrs:{items:["LEGACY","BECH32","P2SH_SEGWIT"],label:e.$t("script_type")},model:{value:e.d_scriptType,callback:function(t){e.d_scriptType=t},expression:"d_scriptType"}}),i("v-select",{attrs:{items:[!0,!1],label:e.$t("show_display")},model:{value:e.d_showDisplay,callback:function(t){e.d_showDisplay=t},expression:"d_showDisplay"}})],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-textarea",{attrs:{label:e.$t("Request"),value:e.d_request,filled:"",readonly:"","auto-grow":""}}),i("v-textarea",{attrs:{label:e.$t("Response"),value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},s=[],n=i("3935"),c=n["a"],r=i("2877"),o=Object(r["a"])(c,a,s,!1,null,"56e3f743",null);t["default"]=o.exports}}]);