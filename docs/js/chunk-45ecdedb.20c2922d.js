(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ecdedb"],{4717:function(e,t,a){"use strict";(function(e){a("d3b7"),a("25f0"),a("96cf");var n=a("1da1");t["a"]={name:"GetPublicKey",data:function(){return{d_coinName:"Ethereum",d_bip32Path:"m/44'/60'/0'/0",d_showDisplay:!1,d_response:"",d_request:""}},computed:{c_coins:function(e){return e.$store.__s("app.asETH")}},watch:{d_coinName:function(e){"Ethereum"===e&&(this.d_bip32Path="m/44'/60'/0'/0")}},methods:{getPublicKey:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={coin_name:t.d_coinName,bip32_path:t.d_bip32Path,show_display:t.d_showDisplay},t.d_request="abckey.cmd('EthereumGetPublicKey', "+JSON.stringify(n,null,4)+")",a.next=4,t.$usb.cmd("EthereumGetPublicKey",n);case 4:s=a.sent,s.data.node.chain_code=e.from(s.data.node.chain_code,"base64").toString("hex"),s.data.node.public_key=e.from(s.data.node.public_key,"base64").toString("hex"),t.d_response=JSON.stringify(s,null,4);case 8:case"end":return a.stop()}}),a)})))()}},i18n:{messages:{zhCN:{"Get Public Key":"获取公钥",coin_name:"币名",bip32_path:"路径",show_display:"显示"}}}}}).call(this,a("b639").Buffer)},a877:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-card",[a("v-card-text",[a("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.getPublicKey()}}},[e._v(e._s(e.$t("Get Public Key")))]),a("br"),a("v-select",{attrs:{items:e.c_coins,label:e.$t("coin_name")},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}}),a("v-text-field",{attrs:{label:e.$t("bip32_path")},model:{value:e.d_bip32Path,callback:function(t){e.d_bip32Path=t},expression:"d_bip32Path"}}),a("v-select",{attrs:{items:[!0,!1],label:e.$t("show_display")},model:{value:e.d_showDisplay,callback:function(t){e.d_showDisplay=t},expression:"d_showDisplay"}})],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"8"}},[a("v-textarea",{attrs:{label:e.$t("Request"),value:e.d_request,filled:"",readonly:"","auto-grow":""}}),a("v-textarea",{attrs:{label:e.$t("Response"),value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},s=[],i=a("4717"),c=i["a"],o=a("2877"),r=Object(o["a"])(c,n,s,!1,null,"316825a5",null);t["default"]=r.exports}}]);