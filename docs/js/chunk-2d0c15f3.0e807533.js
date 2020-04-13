(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c15f3"],{4683:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",[a("v-card-text",[a("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.signETH()}}},[e._v(e._s(e.$t("Sign Transaction")))]),a("br"),a("v-select",{attrs:{items:e.c_coins,label:e.$t("coin_name")},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}}),a("v-text-field",{attrs:{label:e.$t("bip44_path")},model:{value:e.d_bip44Path,callback:function(t){e.d_bip44Path=t},expression:"d_bip44Path"}}),a("v-text-field",{attrs:{label:e.$t("nonce"),type:"number"},model:{value:e.d_nonce,callback:function(t){e.d_nonce=t},expression:"d_nonce"}}),a("v-text-field",{attrs:{label:e.$t("gas_price"),type:"number"},model:{value:e.d_gasPrice,callback:function(t){e.d_gasPrice=t},expression:"d_gasPrice"}}),a("v-text-field",{attrs:{label:e.$t("gas_limit"),type:"number"},model:{value:e.d_gasLimit,callback:function(t){e.d_gasLimit=t},expression:"d_gasLimit"}}),a("v-text-field",{attrs:{label:e.$t("to")},model:{value:e.d_to,callback:function(t){e.d_to=t},expression:"d_to"}}),a("v-text-field",{attrs:{label:e.$t("value"),type:"number"},model:{value:e.d_value,callback:function(t){e.d_value=t},expression:"d_value"}}),a("v-text-field",{attrs:{label:e.$t("chain_id"),type:"number"},model:{value:e.d_chainId,callback:function(t){e.d_chainId=t},expression:"d_chainId"}}),a("br"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md"}},[e._v("EIP 155")])]),a("li",[a("a",{attrs:{href:"https://chainid.network"}},[e._v("Chain ID")])])])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-textarea",{attrs:{label:e.$t("Request"),value:e.d_request,filled:"",readonly:"","auto-grow":""}}),a("v-textarea",{attrs:{label:e.$t("Response"),value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},i=[],s=(a("96cf"),a("1da1")),r={name:"SignTransaction",data:function(){return{d_coinName:"Ethereum",d_bip44Path:"m/44'/60'/0'/0/0",d_nonce:"0",d_gasPrice:"1",d_gasLimit:"21000",d_to:"0xAEc6B4896bCCa877653a9E0df13FE085c3fafef2",d_value:"1",d_chainId:"1",d_request:"",d_response:""}},computed:{c_coins:function(e){return e.$store.__s("app.asETH")}},mounted:function(){},methods:{signETH:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={bip44_path:e.d_bip44Path,nonce:e.d_nonce,gas_price:e.d_gasPrice,gas_limit:e.d_gasLimit,to:e.d_to,value:e.d_value,chain_id:e.d_chainId},e.d_request="abckey.signETH("+JSON.stringify(a,null,4)+")",t.next=4,e.$usb.signETH(a);case 4:n=t.sent,e.d_response=JSON.stringify(n,null,4);case 6:case"end":return t.stop()}}),t)})))()}},i18n:{messages:{zhCN:{"Sign Transaction":"签名交易"}}}},l=r,c=a("2877"),o=Object(c["a"])(l,n,i,!1,null,"3d7896bc",null);t["default"]=o.exports}}]);