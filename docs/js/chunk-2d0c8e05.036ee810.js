(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8e05"],{"576c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{attrs:{align:"center"}},[s("v-col",[s("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(t){return e.signTransaction()}}},[e._v("Sign Transaction")])],1),s("v-col",[s("v-select",{attrs:{items:e.d_coinList,label:"coin_name","hide-details":"",outlined:""},model:{value:e.d_coinName,callback:function(t){e.d_coinName=t},expression:"d_coinName"}})],1),s("v-col",[s("v-text-field",{attrs:{label:"version","hide-details":"",outlined:""},model:{value:e.d_version,callback:function(t){e.d_version=t},expression:"d_version"}})],1),s("v-col",[s("v-text-field",{attrs:{label:"lock_time","hide-details":"",outlined:""},model:{value:e.d_lockTime,callback:function(t){e.d_lockTime=t},expression:"d_lockTime"}})],1)],1),s("v-row",[s("v-col",[s("v-textarea",{attrs:{label:"inputs_json",outlined:"","auto-grow":""},model:{value:e.d_inputs,callback:function(t){e.d_inputs=t},expression:"d_inputs"}})],1)],1),s("v-row",[s("v-col",[s("v-textarea",{attrs:{label:"outputs_json",outlined:"","auto-grow":""},model:{value:e.d_outputs,callback:function(t){e.d_outputs=t},expression:"d_outputs"}})],1)],1),s("v-row",{staticClass:"mt-7"},[s("v-col",[s("v-textarea",{attrs:{label:"Response",value:e.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1),s("v-row",{staticClass:"mt-7"},[s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki",target:"_blank"}},[e._v("https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki")])]),s("li",[s("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank"}},[e._v("https://github.com/satoshilabs/slips/blob/master/slip-0044.md")])])])])],1)},n=[],i=(s("96cf"),s("1da1")),o={name:"home",data:function(){return{d_coinList:["Bitcoin","Litecoin"],d_coinName:"Bitcoin",d_version:1,d_lockTime:0,d_inputs:'[{"address_n":[2147483697,2147483650,2147483648,0,0],"amount":"12519198","prev_hash":"f6ceb5e14b4cb7bd8a2b1922bd2d91596de3be447c806141f225c3d77a0e99eb","prev_index":0,"script_type":"SPENDP2SHWITNESS","sequence":4294967295},{"address_n":[2147483697,2147483650,2147483648,0,1],"amount":"12519198","prev_hash":"f6ceb5e14b4cb7bd8a2b1922bd2d91556de3be447c806141f225c3d77a0e99eb","prev_index":0,"script_type":"SPENDP2SHWITNESS","sequence":4294967295},{"address_n":[2147483697,2147483650,2147483648,0,2],"amount":"12519198","prev_hash":"f6ceb5e14b4c47bd8a2b1922bd2d91556de3be447c806141f225c3d77a0e99eb","prev_index":0,"script_type":"SPENDP2SHWITNESS","sequence":4294967295}]',d_outputs:'[{"address":"3QswBJnmzKEzfazbimK2P15YLWYZfcSpv5","amount":"12519063","script_type":"PAYTOADDRESS"},{"address":"3QswBJnmzKEzfazbimK2P15YLWYZfcSpv5","amount":"1251","script_type":"PAYTOADDRESS"},{"address":"3QswBJnmzKEzfazbimK2P15YLWYZfcSpv5","amount":"1251","script_type":"PAYTOADDRESS"}]',d_response:""}},mounted:function(){this.d_inputs=JSON.stringify(JSON.parse(this.d_inputs),null,4),this.d_outputs=JSON.stringify(JSON.parse(this.d_outputs),null,4)},methods:{signTransaction:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$usb.signTransaction(e.d_coinName,JSON.parse(e.d_inputs),JSON.parse(e.d_outputs));case 2:s=t.sent,e.d_response=JSON.stringify(s,null,4);case 4:case"end":return t.stop()}}),t)})))()}}},r=o,c=s("2877"),d=s("6544"),l=s.n(d),u=s("8336"),p=s("62ad"),b=s("a523"),_=s("0fd9"),m=s("b974"),v=s("8654"),f=s("a844"),h=Object(c["a"])(r,a,n,!1,null,"525311c7",null);t["default"]=h.exports;l()(h,{VBtn:u["a"],VCol:p["a"],VContainer:b["a"],VRow:_["a"],VSelect:m["a"],VTextField:v["a"],VTextarea:f["a"]})}}]);