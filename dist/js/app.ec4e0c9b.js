(function(t){function n(n){for(var e,o,i=n[0],u=n[1],s=n[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(t[e]=u[e]);l&&l(n);while(p.length)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var t,n=0;n<c.length;n++){for(var a=c[n],e=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(e=!1)}e&&(c.splice(n--,1),t=o(o.s=a[0]))}return t}var e={},r={app:0},c=[];function o(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,n,a){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(a,e,function(n){return t[n]}.bind(null,e));return a},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="/cat-api/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var l=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"1f53":function(t,n,a){t.exports=a.p+"img/cat.923a8e55.png"},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-app-bar",{staticClass:"centered-content",attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Cats Logo",contain:"",src:a("1f53"),transition:"scale-transition",width:"40"}}),e("h2",[t._v("Cats-API")])],1)]),e("v-main",[e("cats-list")],1)],1)},c=[],o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("v-row",[t.catsList.length?t._l(t.catsList,(function(n,e){return a("v-col",{key:e,attrs:{md:"4",sm:"6",cols:"12"}},[a("v-tooltip",{attrs:{"max-width":"250",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,c=e.attrs;return[a("v-card",t._g(t._b({},"v-card",c,!1),r),[a("v-card-text",[a("h2",[t._v(t._s(n.breed))]),a("div",{staticClass:"text-truncate"},[t._v(" "+t._s(n.country?n.country:"no country information")+" ")]),a("div",[t._v(t._s(n.coat?n.coat:"no coat information"))])]),a("cat-pic")],1)]}}],null,!0)},[a("cat-fact")],1)],1)})):a("v-col",[t._v("No cats data available ;_;")])],2)],1)},i=[];a("d3b7");function u(){return new Promise((function(t,n){fetch("https://catfact.ninja/breeds").then((function(n){n.json().then((function(n){t(n.data)}))})).catch((function(t){console.log(t),n(t)}))}))}function s(){return new Promise((function(t,n){fetch("https://cataas.com/cat?json=true").then((function(n){n.json().then((function(n){t("https://cataas.com".concat(n.url))}))})).catch((function(t){console.log(t),n(t)}))}))}function l(){return new Promise((function(t,n){fetch("https://catfact.ninja/fact").then((function(n){n.json().then((function(n){t(n.fact)}))})).catch((function(t){console.log(t),n(t)}))}))}var f=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.picUrl?a("v-img",{attrs:{src:t.picUrl,height:"250"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"blue"}})],1)]},proxy:!0}],null,!1,911053785)}):t._e()},p=[],d={name:"CatPic",data:function(){return{picUrl:""}},mounted:function(){var t=this;s().then((function(n){t.picUrl=n}))}},v=d,h=a("2877"),m=a("6544"),b=a.n(m),_=a("adda"),g=a("490a"),y=a("0fd9"),w=Object(h["a"])(v,f,p,!1,null,null,null),j=w.exports;b()(w,{VImg:_["a"],VProgressCircular:g["a"],VRow:y["a"]});var C=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.catFact?a("span",[t._v(t._s(t.catFact))]):t._e()},x=[],O={name:"CatFact",data:function(){return{catFact:""}},mounted:function(){var t=this;l().then((function(n){t.catFact=n,console.log("fact",t.catFact)}))}},P=O,V=Object(h["a"])(P,C,x,!1,null,null,null),k=V.exports,F={name:"CatsList",components:{CatPic:j,CatFact:k},data:function(){return{catsList:[]}},mounted:function(){var t=this;u().then((function(n){t.catsList=n}))}},L=F,S=a("b0af"),M=a("99d9"),T=a("62ad"),$=a("a523"),A=a("3a2f"),E=Object(h["a"])(L,o,i,!1,null,null,null),U=E.exports;b()(E,{VCard:S["a"],VCardText:M["a"],VCol:T["a"],VContainer:$["a"],VRow:y["a"],VTooltip:A["a"]});var I={name:"App",components:{CatsList:U},data:function(){return{}}},J=I,R=(a("9c50"),a("7496")),B=a("40dc"),N=a("f6c4"),q=Object(h["a"])(J,r,c,!1,null,"498f7d12",null),z=q.exports;b()(q,{VApp:R["a"],VAppBar:B["a"],VImg:_["a"],VMain:N["a"]});var D=a("f309");e["a"].use(D["a"]);var G=new D["a"]({});e["a"].config.productionTip=!1,new e["a"]({vuetify:G,render:function(t){return t(z)}}).$mount("#app")},"9a5d":function(t,n,a){},"9c50":function(t,n,a){"use strict";a("9a5d")}});
//# sourceMappingURL=app.ec4e0c9b.js.map