(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-423f2f44"],{3935:function(t,e,i){"use strict";(function(t){i("d3b7"),i("25f0"),i("96cf");var a=i("1da1");e["a"]={name:"PublicKey",data:function(){return{d_coinName:"Bitcoin",d_bip32Path:"m/49'/0'/0'",d_scriptType:"P2SHSEGWIT",d_showDisplay:!1,d_response:"",d_request:""}},computed:{c_coins:function(t){return t.$store.__s("app.asBTC")}},watch:{d_scriptType:function(t){"LEGACY"===t&&(this.d_bip32Path="m/44'/0'/0'"),"BECH32"===t&&(this.d_bip32Path="m/49'/0'/0'"),"P2SHSEGWIT"===t&&(this.d_bip32Path="m/49'/0'/0'")},d_coinName:function(t){"Bitcoin"===t?(this.d_bip32Path="m/49'/0'/0'",this.d_scriptType="P2SHSEGWIT"):"Testnet"===t?(this.d_bip32Path="m/44'/1'/0'/0/0",this.d_scriptType="LEGACY"):"Litecoin"===t?(this.d_bip32Path="m/49'/2'/0'",this.d_scriptType="P2SHSEGWIT"):"Dogecoin"===t&&(this.d_bip32Path="m/44'/3'/0'",this.d_scriptType="LEGACY")}},methods:{getPublicKey:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a={coin_name:e.d_coinName,bip32_path:e.d_bip32Path,script_type:e.d_scriptType,show_display:e.d_showDisplay},e.d_request="abckey.cmd('GetPublicKey', "+JSON.stringify(a,null,4)+")",i.next=4,e.$usb.cmd("GetPublicKey",a);case 4:s=i.sent,s.data.node.chain_code=t.from(s.data.node.chain_code,"base64").toString("hex"),s.data.node.public_key=t.from(s.data.node.public_key,"base64").toString("hex"),e.d_response=JSON.stringify(s,null,4);case 8:case"end":return i.stop()}}),i)})))()}},i18n:{messages:{zhCN:{"Get Public Key":"获取公钥",coin_name:"币名",bip32_path:"路径",script_type:"类型",show_display:"显示"}}}}}).call(this,i("b639").Buffer)},"3f55":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-card",[i("v-card-text",[i("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.getPublicKey()}}},[t._v(t._s(t.$t("Get Public Key")))]),i("br"),i("v-select",{attrs:{items:t.c_coins,label:t.$t("coin_name")},model:{value:t.d_coinName,callback:function(e){t.d_coinName=e},expression:"d_coinName"}}),i("v-text-field",{attrs:{label:t.$t("bip32_path")},model:{value:t.d_bip32Path,callback:function(e){t.d_bip32Path=e},expression:"d_bip32Path"}}),i("v-select",{attrs:{items:["LEGACY","BECH32","P2SHSEGWIT"],label:t.$t("script_type")},model:{value:t.d_scriptType,callback:function(e){t.d_scriptType=e},expression:"d_scriptType"}}),i("v-select",{attrs:{items:[!0,!1],label:t.$t("show_display")},model:{value:t.d_showDisplay,callback:function(e){t.d_showDisplay=e},expression:"d_showDisplay"}})],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-textarea",{attrs:{label:t.$t("Request"),value:t.d_request,filled:"",readonly:"","auto-grow":""}}),i("v-textarea",{attrs:{label:t.$t("Response"),value:t.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},s=[],c=i("3935"),n=c["a"],r=i("2877"),o=Object(r["a"])(n,a,s,!1,null,"101bdc0d",null);e["default"]=o.exports}}]);