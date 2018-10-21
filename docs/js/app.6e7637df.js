(function(t){function e(e){for(var n,a,c=e[0],u=e[1],s=e[2],p=0,d=[];p<c.length;p++)a=c[p],r[a]&&d.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={app:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},5057:function(t,e,o){"use strict";var n=o("606f"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t._m(0),o("div",{staticClass:"controls"},[o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"size"}},[t._v("Size")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"slider",attrs:{type:"range",min:"30",max:"500",id:"size"},domProps:{value:t.size},on:{__r:function(e){t.size=e.target.value}}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"counterLocation"}},[t._v("Counter Location")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.counterLocation,expression:"counterLocation"}],attrs:{name:"counterLocation",id:"counterLocation"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.counterLocation=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"upperRight"}},[t._v("Upper Right")]),o("option",{attrs:{value:"upperLeft"}},[t._v("Upper Left")]),o("option",{attrs:{value:"lowerRight"}},[t._v("Lower Right")]),o("option",{attrs:{value:"lowerLeft"}},[t._v("Lower Left")]),o("option",{attrs:{value:"center"}},[t._v("Center")])])]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"notificationCount"}},[t._v("Notification Count")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],attrs:{type:"number",min:"1",id:"notificationCount"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"upperLimit"}},[t._v("Notifications Upper Limit")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.upperLimit,expression:"upperLimit"}],attrs:{type:"number",min:"1",id:"upperLimit"},domProps:{value:t.upperLimit},on:{input:function(e){e.target.composing||(t.upperLimit=e.target.value)}}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"counterStyle"}},[t._v("Counter Style")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.counterStyle,expression:"counterStyle"}],attrs:{name:"counterStyle",id:"counterStyle"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.counterStyle=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"roundRectangle"}},[t._v("Round Rectangle")]),o("option",{attrs:{value:"round"}},[t._v("Round")]),o("option",{attrs:{value:"rectangle"}},[t._v("Rectangle")])])]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"counterBackgroundColor"}},[t._v("Counter Background Color")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.counterBackgroundColor,expression:"counterBackgroundColor"}],attrs:{type:"color",id:"counterBackgroundColor"},domProps:{value:t.counterBackgroundColor},on:{input:function(e){e.target.composing||(t.counterBackgroundColor=e.target.value)}}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"counterTextColor"}},[t._v("Counter Text Color")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.counterTextColor,expression:"counterTextColor"}],attrs:{type:"color",id:"counterTextColor"},domProps:{value:t.counterTextColor},on:{input:function(e){e.target.composing||(t.counterTextColor=e.target.value)}}})]),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"iconColor"}},[t._v("Icon Color")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.iconColor,expression:"iconColor"}],attrs:{type:"color",id:"iconColor"},domProps:{value:t.iconColor},on:{input:function(e){e.target.composing||(t.iconColor=e.target.value)}}})])]),o("notification-bell",{staticClass:"bell",attrs:{size:parseInt(t.size),count:parseInt(t.count),upperLimit:parseInt(t.upperLimit),"counter-location":t.counterLocation,counterStyle:t.counterStyle,counterBackgroundColor:t.counterBackgroundColor,counterTextColor:t.counterTextColor,iconColor:t.iconColor}}),t._m(1)],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",[o("h1",[t._v("Vue Notification Bell")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",[o("p",[t._v("Created by "),o("a",{attrs:{href:"https://twitter.com/maryayi",target:"_blank"}},[t._v("@maryayi")]),t._v(" and "),o("a",{attrs:{href:"https://github.com/mrastiak",target:"_blank"}},[t._v("@mrastiak")])])])}],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"notification-bell"}},[o("div",{staticClass:"notification",style:t.notificationStyle},[t.icon?o("img",{staticClass:"notification-icon",attrs:{src:t.resolvedIcon}}):o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 20 20",fill:t.iconColor}},[o("title",[t._v("\n        bell\n      ")]),o("path",{attrs:{d:"M16 7a5.38 5.38 0 0 0-4.46-4.85C11.6 1.46 11.53 0 10 0S8.4 1.46 8.46 2.15A5.38 5.38 0 0 0 4 7v6l-2 2v1h16v-1l-2-2zm-6 13a3 3 0 0 0 3-3H7a3 3 0 0 0 3 3z",width:"100%",height:"100%"}})]),t.count>0?o("div",{staticClass:"notification-counter",style:t.notificationCounterStyle},[t._v("\n      "+t._s(this.decoratedCounter)+"\n    ")]):t._e()])])},c=[],u=(o("c5f6"),o("f751"),{name:"NotificationBell",methods:{},computed:{notificationCounterPosition:function(){switch(this.counterLocation){case"upperRight":return{fontSize:"".concat(.5*this.size,"px"),left:"calc(100% - ".concat(.45*this.size,"px)"),top:0,transform:"translateY(-40%)",padding:"".concat(this.size/20,"px ").concat(this.size/10,"px")};case"lowerRight":return{fontSize:"".concat(.5*this.size,"px"),bottom:0,transform:"translateY(40%)",left:"calc(100% - ".concat(.45*this.size,"px)"),padding:"".concat(this.size/20,"px ").concat(this.size/10,"px")};case"upperLeft":return{fontSize:"".concat(.5*this.size,"px"),top:0,transform:"translateY(-40%)",right:"calc(100% - ".concat(.45*this.size,"px)"),padding:"".concat(this.size/20,"px ").concat(this.size/10,"px")};case"lowerLeft":return{fontSize:"".concat(.5*this.size,"px"),bottom:0,transform:"translateY(40%)",right:"calc(100% - ".concat(.45*this.size,"px)"),padding:"".concat(this.size/20,"px ").concat(this.size/10,"px")};case"center":return{fontSize:"".concat(.5*this.size,"px"),top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"".concat(this.size/20,"px ").concat(this.size/10,"px")};default:return{fontSize:"".concat(.5*this.size,"px"),left:"calc(100% - ".concat(.45*this.size,"px)"),top:0,transform:"translateY(-40%)",padding:"".concat(this.size/20,"px ").concat(this.size/10,"px")}}},notificationStyle:function(){return{width:"".concat(this.size,"px"),height:"".concat(this.size,"px")}},notificationCounterStyle:function(){return Object.assign({},this.notificationCounterPosition,this.notificationCounterShape,this.notificationCounterColor)},notificationCounterShape:function(){switch(this.counterStyle){case"roundRectangle":return{borderRadius:"".concat(this.size/10,"px")};case"rectangle":return{borderRadius:"0"};case"round":return{borderRadius:"100%",padding:"".concat(this.size/10,"px")};default:return{borderRadius:"".concat(this.size/10,"px")}}},notificationCounterColor:function(){return{backgroundColor:this.counterBackgroundColor,color:this.counterTextColor}},decoratedCounter:function(){return this.count<=this.upperLimit?Math.floor(this.count):"+".concat(Math.floor(this.upperLimit))},resolvedIcon:function(){if(this.icon)return this.count>0?this.icon:this.disabledIcon?this.disabledIcon:this.icon}},props:{count:{type:Number,default:0},upperLimit:{type:Number,default:99},size:{type:Number,default:30},counterLocation:{type:String,default:"upperRight"},icon:{type:String,default:null},disabledIcon:{type:String,default:null},counterStyle:{type:String,default:"roundRectangle"},counterBackgroundColor:{type:String,default:"red"},counterTextColor:{type:String,default:"white"},iconColor:{type:String,default:"#000000"}}}),s=u,l=(o("5057"),o("2877")),p=Object(l["a"])(s,a,c,!1,null,"49e1874e",null);p.options.__file="NotificationBell.vue";var d=p.exports,f={name:"app",data:function(){return{size:100,counterLocation:"upperRight",count:2,upperLimit:50,counterStyle:"roundRectangle",counterBackgroundColor:"#FF0000",counterTextColor:"#FFFFFF",iconColor:"#000000"}},components:{NotificationBell:d}},v=f,m=(o("cf25"),Object(l["a"])(v,r,i,!1,null,null,null));m.options.__file="App.vue";var h=m.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},"606f":function(t,e,o){},7386:function(t,e,o){},cf25:function(t,e,o){"use strict";var n=o("7386"),r=o.n(n);r.a}});
//# sourceMappingURL=app.6e7637df.js.map