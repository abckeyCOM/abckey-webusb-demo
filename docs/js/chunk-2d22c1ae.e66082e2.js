(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c1ae"],{f28d:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"4"}},[i("v-card",[i("v-card-text",[i("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.getAddress()}}},[t._v(t._s(t.$t("Get Address")))]),i("br"),i("v-select",{attrs:{items:t.c_coins,label:t.$t("coin_name")},model:{value:t.d_coinName,callback:function(e){t.d_coinName=e},expression:"d_coinName"}}),i("v-select",{attrs:{items:["SPENDADDRESS","SPENDMULTISIG","EXTERNAL","SPENDWITNESS","SPENDP2SHWITNESS"],label:t.$t("script_type")},model:{value:t.d_scriptType,callback:function(e){t.d_scriptType=e},expression:"d_scriptType"}}),i("v-text-field",{attrs:{label:t.$t("bip44_path")},model:{value:t.d_bip44Path,callback:function(e){t.d_bip44Path=e},expression:"d_bip44Path"}}),i("v-select",{attrs:{items:[!0,!1],label:t.$t("show_display")},model:{value:t.d_showDisplay,callback:function(e){t.d_showDisplay=e},expression:"d_showDisplay"}}),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank"}},[t._v("bip-0032.mediawiki")])]),i("li",[i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank"}},[t._v("bip-0044.mediawiki")])]),i("li",[i("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki",target:"_blank"}},[t._v("bip-0045.mediawiki")])]),i("li",[i("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank"}},[t._v("slip-0044.md")])])])],1)],1)],1),i("v-col",{attrs:{cols:"12",sm:"8"}},[i("v-textarea",{attrs:{label:t.$t("Request"),value:t.d_request,filled:"",readonly:"","auto-grow":""}}),i("v-textarea",{attrs:{label:t.$t("Response"),value:t.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},a=[],r=(i("96cf"),i("1da1")),n={name:"GetAddress",data:function(){return{d_coinName:"Bitcoin",d_bip44Path:"m/49'/0'/0'/0/0",d_scriptType:"SPENDP2SHWITNESS",d_showDisplay:!1,d_multisig:"",d_response:"",d_request:""}},computed:{c_coins:function(t){return t.$store.__s("app.asBTC")}},watch:{d_scriptType:function(t){"SPENDADDRESS"===t&&(this.d_bip44Path="m/44'/0/0/0/0"),"SPENDMULTISIG"===t&&(this.d_bip44Path="m/45'/0/0/0"),"SPENDP2SHWITNESS"===t&&(this.d_bip44Path="m/49'/0/0/0/0")},d_coinName:function(t){"Bitcoin"===t?(this.d_bip44Path="m/49'/0'/0'/0/0",this.d_scriptType="SPENDP2SHWITNESS"):"Dogecoin"===t&&(this.d_bip44Path="m/44'/0'/0'/0/0",this.d_scriptType="SPENDADDRESS")}},mounted:function(){this.d_multisig=JSON.stringify({pubkeys:[{node:"Own public key: m/45'/0",address_n:[0,0]},{node:"xpub6AxX9fezLTUJwu2FrRkLcnLb6hdeiBXqabWasqnfvyacrgok92VJ3H963Qb28LH56TZD2T5HkHCB9HB74ADS6c4SEjQjenb2DG4xxFo7NWU",address_n:[0,0]}],m:2},null,4)},methods:{getAddress:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={coin_name:t.d_coinName,bip44_path:t.d_bip44Path,script_type:t.d_scriptType,show_display:t.d_showDisplay,multisig:"SPENDMULTISIG"===t.d_scriptType?JSON.parse(t.d_multisig):void 0},t.d_request="abckey.cmd('GetAddress', "+JSON.stringify(i,null,4)+")",e.next=4,t.$usb.cmd("GetAddress",i);case 4:s=e.sent,t.d_response=JSON.stringify(s,null,4);case 6:case"end":return e.stop()}}),e)})))()}},i18n:{messages:{zhCN:{"Get Address":"获取地址",coin_name:"币名",bip44_path:"路径",script_type:"类型",show_display:"显示"}}}},c=n,d=i("2877"),o=Object(d["a"])(c,s,a,!1,null,"8ac71efa",null);e["default"]=o.exports}}]);