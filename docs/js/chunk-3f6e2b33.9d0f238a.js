(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f6e2b33"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(r(t))}},"2f28":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{attrs:{color:"primary",large:"",block:""},on:{click:function(e){return t.getAddr()}}},[t._v("Get Address")])],1),n("v-col",[n("v-checkbox",{attrs:{label:"show_display"},model:{value:t.d_showDisplay,callback:function(e){t.d_showDisplay=e},expression:"d_showDisplay"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"path","hide-details":""},model:{value:t.d_path,callback:function(e){t.d_path=e},expression:"d_path"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-select",{attrs:{items:["SPENDADDRESS","SPENDMULTISIG","EXTERNAL","SPENDWITNESS","SPENDP2SHWITNESS"],label:"script_type","hide-details":""},model:{value:t.d_scriptType,callback:function(e){t.d_scriptType=e},expression:"d_scriptType"}})],1)],1),"SPENDMULTISIG"===t.d_scriptType?n("v-row",[n("v-col",[n("v-textarea",{attrs:{label:"multisig","auto-grow":""},model:{value:t.d_multisig,callback:function(e){t.d_multisig=e},expression:"d_multisig"}})],1)],1):t._e(),n("v-row",[n("v-col",[n("v-textarea",{attrs:{label:"Request",value:t.d_request,filled:"",readonly:"","auto-grow":""}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank"}},[t._v("bip-0044.mediawiki")])]),n("li",[n("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0045.mediawiki",target:"_blank"}},[t._v("bip-0045.mediawiki")])]),n("li",[n("a",{attrs:{href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md",target:"_blank"}},[t._v("slip-0044.md")])])])])],1)],1),n("v-col",{attrs:{cols:"6"}},[n("v-textarea",{attrs:{label:"Response",value:t.d_response,filled:"",readonly:"","auto-grow":""}})],1)],1)],1)},i=[],a=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("ac1f"),n("3ca3"),n("466d"),n("ddb0"),n("96cf"),n("1da1")),o={name:"GetAddress",data:function(){return{d_path:"m/49'/0'/0'/0/0",d_scriptType:"SPENDP2SHWITNESS",d_showDisplay:!1,d_multisig:"",d_response:"",d_request:""}},computed:{c_addressN:function(){var t=[],e=this.d_path.match(/\/[0-9]+('|H)?/g),n=!0,r=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value,c=parseInt(s.match(/[0-9]+/g)[0]);s.match(/('|H)/g)&&(c=(2147483648|c)>>>0),t.push(c)}}catch(u){r=!0,i=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}},watch:{d_scriptType:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:"SPENDMULTISIG"===t&&(e.d_path="m/45'/0/0/0");case 1:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.d_multisig=JSON.stringify({pubkeys:[{node:"Own public key: m/45'/0",address_n:[0,0]},{node:"xpub6AxX9fezLTUJwu2FrRkLcnLb6hdeiBXqabWasqnfvyacrgok92VJ3H963Qb28LH56TZD2T5HkHCB9HB74ADS6c4SEjQjenb2DG4xxFo7NWU",address_n:[0,0]}],m:2},null,4)},methods:{getAddr:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.c_addressN){e.next=2;break}return e.abrupt("return",t.d_response="path error");case 2:return n={address_n:t.c_addressN,script_type:t.d_scriptType,show_display:t.d_showDisplay,multisig:"SPENDMULTISIG"===t.d_scriptType?JSON.parse(t.d_multisig):void 0},e.next=5,t.$usb.getAddr(n);case 5:r=e.sent,t.d_request='abckey.cmd("GetAddress", '+JSON.stringify(n,null,4)+")",t.d_response=JSON.stringify(r,null,4);case 8:case"end":return e.stop()}}),e)})))()}}},s=o,c=n("2877"),u=n("6544"),l=n.n(u),d=n("8336"),f=n("ac7c"),p=n("62ad"),h=n("a523"),b=n("0fd9"),v=n("b974"),m=n("8654"),g=n("a844"),y=Object(c["a"])(s,r,i,!1,null,"00b86375",null);e["default"]=y.exports;l()(y,{VBtn:d["a"],VCheckbox:f["a"],VCol:p["a"],VContainer:h["a"],VRow:b["a"],VSelect:v["a"],VTextField:m["a"],VTextarea:g["a"]})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),a=n("7dd0"),o="String Iterator",s=i.set,c=i.getterFor(o);a(String,"String",(function(t){s(this,{type:o,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"466d":function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("50c4"),o=n("1d80"),s=n("8aa5"),c=n("14c3");r("match",1,(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=i(t),u=String(this);if(!o.global)return c(o,u);var l=o.unicode;o.lastIndex=0;var d,f=[],p=0;while(null!==(d=c(o,u))){var h=String(d[0]);f[p]=h,""===h&&(o.lastIndex=s(u,a(o.lastIndex),l)),p++}return 0===p?null:f}]}))},"6ca7":function(t,e,n){var r=n("dd75");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("499e").default;i("27ca4fa0",r,!0,{sourceMap:!1,shadowMode:!1})},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),l=n("d039"),d=n("5135"),f=n("e8b5"),p=n("861d"),h=n("825a"),b=n("7b0b"),v=n("fc6a"),m=n("c04e"),g=n("5c6c"),y=n("7c73"),S=n("df75"),w=n("241c"),_=n("057f"),x=n("7418"),k=n("06cf"),I=n("9bf2"),O=n("d1e7"),T=n("9112"),N=n("6eeb"),E=n("5692"),D=n("f772"),P=n("d012"),j=n("90e3"),A=n("b622"),C=n("e538"),R=n("746f"),$=n("d44e"),J=n("69f3"),L=n("b727").forEach,V=D("hidden"),H="Symbol",G="prototype",q=A("toPrimitive"),F=J.set,M=J.getterFor(H),U=Object[G],W=i.Symbol,B=a("JSON","stringify"),Q=k.f,X=I.f,z=_.f,Z=O.f,K=E("symbols"),Y=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),rt=i.QObject,it=!rt||!rt[G]||!rt[G].findChild,at=s&&l((function(){return 7!=y(X({},"a",{get:function(){return X(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(U,e);r&&delete U[e],X(t,e,n),r&&t!==U&&X(U,e,r)}:X,ot=function(t,e){var n=K[t]=y(W[G]);return F(n,{type:H,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,n){t===U&&ct(Y,e,n),h(t);var r=m(e,!0);return h(n),d(K,r)?(n.enumerable?(d(t,V)&&t[V][r]&&(t[V][r]=!1),n=y(n,{enumerable:g(0,!1)})):(d(t,V)||X(t,V,g(1,{})),t[V][r]=!0),at(t,r,n)):X(t,r,n)},ut=function(t,e){h(t);var n=v(e),r=S(n).concat(ht(n));return L(r,(function(e){s&&!dt.call(n,e)||ct(t,e,n[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=m(t,!0),n=Z.call(this,e);return!(this===U&&d(K,e)&&!d(Y,e))&&(!(n||!d(this,e)||!d(K,e)||d(this,V)&&this[V][e])||n)},ft=function(t,e){var n=v(t),r=m(e,!0);if(n!==U||!d(K,r)||d(Y,r)){var i=Q(n,r);return!i||!d(K,r)||d(n,V)&&n[V][r]||(i.enumerable=!0),i}},pt=function(t){var e=z(v(t)),n=[];return L(e,(function(t){d(K,t)||d(P,t)||n.push(t)})),n},ht=function(t){var e=t===U,n=z(e?Y:v(t)),r=[];return L(n,(function(t){!d(K,t)||e&&!d(U,t)||r.push(K[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),n=function(t){this===U&&n.call(Y,t),d(this,V)&&d(this[V],e)&&(this[V][e]=!1),at(this,e,g(1,t))};return s&&it&&at(U,e,{configurable:!0,set:n}),ot(e,t)},N(W[G],"toString",(function(){return M(this).tag})),N(W,"withoutSetter",(function(t){return ot(j(t),t)})),O.f=dt,I.f=ct,k.f=ft,w.f=_.f=pt,x.f=ht,C.f=function(t){return ot(A(t),t)},s&&(X(W[G],"description",{configurable:!0,get:function(){return M(this).description}}),o||N(U,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),L(S(nt),(function(t){R(t)})),r({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),r({target:"Object",stat:!0,forced:l((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(b(t))}}),B){var bt=!c||l((function(){var t=W();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(p(e)||void 0!==t)&&!st(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!st(e))return e}),i[1]=e,B.apply(null,i)}})}W[G][q]||T(W[G],q,W[G].valueOf),$(W,H),P[V]=!0},ac7c:function(t,e,n){"use strict";n("6ca7"),n("ec29");var r=n("9d26"),i=n("c37a"),a=n("fe09");e["a"]=a["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},d28b:function(t,e,n){var r=n("746f");r("iterator")},dd75:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}",""]),t.exports=e},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=a.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var p=f.prototype=l.prototype;p.constructor=f;var h=p.toString,b="Symbol(test)"==String(l("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(o(d,t))return"";var n=b?e.slice(7,-1):e.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,n){var r=n("b622");e.f=r}}]);