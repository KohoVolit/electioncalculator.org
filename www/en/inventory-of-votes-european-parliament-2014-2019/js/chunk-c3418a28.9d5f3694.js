(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3418a28","chunk-1fa761fa"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),s=n("07e3"),i=n("8e60"),a=n("63b6"),o=n("9138"),c=n("ebfd").KEY,u=n("294c"),f=n("dbdb"),l=n("45f2"),d=n("62a0"),b=n("5168"),p=n("ccb9"),v=n("6718"),h=n("47ee"),m=n("9003"),g=n("e4ae"),y=n("f772"),w=n("36c3"),_=n("1bc3"),x=n("aebd"),C=n("a159"),O=n("0395"),S=n("bf0b"),j=n("d9f6"),$=n("c3a1"),k=S.f,E=j.f,P=O.f,N=r.Symbol,T=r.JSON,q=T&&T.stringify,F="prototype",D=b("_hidden"),J=b("toPrimitive"),W={}.propertyIsEnumerable,M=f("symbol-registry"),I=f("symbols"),K=f("op-symbols"),A=Object[F],R="function"==typeof N,Y=r.QObject,z=!Y||!Y[F]||!Y[F].findChild,G=i&&u(function(){return 7!=C(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(A,e);r&&delete A[e],E(t,e,n),r&&t!==A&&E(A,e,r)}:E,L=function(t){var e=I[t]=C(N[F]);return e._k=t,e},Q=R&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},B=function(t,e,n){return t===A&&B(K,e,n),g(t),e=_(e,!0),g(n),s(I,e)?(n.enumerable?(s(t,D)&&t[D][e]&&(t[D][e]=!1),n=C(n,{enumerable:x(0,!1)})):(s(t,D)||E(t,D,x(1,{})),t[D][e]=!0),G(t,e,n)):E(t,e,n)},H=function(t,e){g(t);var n,r=h(e=w(e)),s=0,i=r.length;while(i>s)B(t,n=r[s++],e[n]);return t},U=function(t,e){return void 0===e?C(t):H(C(t),e)},V=function(t){var e=W.call(this,t=_(t,!0));return!(this===A&&s(I,t)&&!s(K,t))&&(!(e||!s(this,t)||!s(I,t)||s(this,D)&&this[D][t])||e)},X=function(t,e){if(t=w(t),e=_(e,!0),t!==A||!s(I,e)||s(K,e)){var n=k(t,e);return!n||!s(I,e)||s(t,D)&&t[D][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=P(w(t)),r=[],i=0;while(n.length>i)s(I,e=n[i++])||e==D||e==c||r.push(e);return r},tt=function(t){var e,n=t===A,r=P(n?K:w(t)),i=[],a=0;while(r.length>a)!s(I,e=r[a++])||n&&!s(A,e)||i.push(I[e]);return i};R||(N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===A&&e.call(K,n),s(this,D)&&s(this[D],t)&&(this[D][t]=!1),G(this,t,x(1,n))};return i&&z&&G(A,t,{configurable:!0,set:e}),L(t)},o(N[F],"toString",function(){return this._k}),S.f=X,j.f=B,n("6abf").f=O.f=Z,n("355d").f=V,n("9aa9").f=tt,i&&!n("b8e3")&&o(A,"propertyIsEnumerable",V,!0),p.f=function(t){return L(b(t))}),a(a.G+a.W+a.F*!R,{Symbol:N});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)b(et[nt++]);for(var rt=$(b.store),st=0;rt.length>st;)v(rt[st++]);a(a.S+a.F*!R,"Symbol",{for:function(t){return s(M,t+="")?M[t]:M[t]=N(t)},keyFor:function(t){if(!Q(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!R,"Object",{create:U,defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),T&&a(a.S+a.F*(!R||u(function(){var t=N();return"[null]"!=q([t])||"{}"!=q({a:t})||"{}"!=q(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],s=1;while(arguments.length>s)r.push(arguments[s++]);if(n=e=r[1],(y(e)||void 0!==t)&&!Q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Q(e))return e}),r[1]=e,q.apply(T,r)}}),N[F][J]||n("35e8")(N[F],J,N[F].valueOf),l(N,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"036c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.results[t.index]?n("div",{staticClass:"modal-dialog modal-lg"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header row m-2"},[t._m(0),n("div",{staticClass:"card col-12"},[n("div",{staticClass:"card-body pb-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-8"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.results[t.index].info.name))]),n("div",{staticClass:"card-text"},[n("span",[t._v(t._s(t.results[t.index].info.party))]),n("br"),n("small",[n("img",{attrs:{src:t.results[t.index].info.political_group_logo}}),t._v(" "+t._s(t.results[t.index].info.political_group))]),n("br"),n("img",{attrs:{src:t.results[t.index].info.country_logo}}),n("small",[t._v(" "+t._s(t.results[t.index].info.country))])]),n("div",{staticClass:"card-text text-muted"},[t._v(t._s(t.$t("match"))+": "+t._s(t.results[t.index].result_percent)+"%")])]),n("div",{staticClass:"col-4 text-right"},[n("img",{staticClass:"picture mr-2",attrs:{src:t.results[t.index].info.picture}})])])])]),n("button",{staticClass:"btn btn-secondary btn-lg btn-block mt-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("close")))])]),n("div",{staticClass:"modal-body"},[n("table",{staticClass:"table-striped w-100"},[n("thead",[n("th",{staticClass:"text-left"},[t._v("\n                        "+t._s(t.$t("question"))+"\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.$t("me"))+"\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        x\n                    ")]),n("th",{staticClass:"text-center"},[t._v("\n                        "+t._s(t.results[t.index].info.name)+"\n                    ")])]),n("tbody",t._l(t.questions,function(e,r){return n("tr",{class:[t.compared(t.answers[e.id],t.results[t.index]["info"]["votes"][e.id]),t.weighted(t.weights[e.id])]},[n("td",[t.weights[e.id]?n("i",{staticClass:"fa fa-star"}):t._e(),t._v("\n                            "+t._s(e.name)+"\n                            "),n("i",{staticClass:"fa fa-info-circle more-question",attrs:{tabindex:"0","data-toggle":"popover","data-trigger":"focus","data-content":e.question,title:t.$t("question")}})]),n("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.answer2Text(t.answers[e.id]))+"\n                        ")]),n("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.compare(t.answers[e.id],t.results[t.index]["info"]["votes"][e.id]))+"\n                        ")]),n("td",{staticClass:"text-center"},[t._v("\n                            "+t._s(t.answer2TextThem(t.results[t.index]["info"]["votes"][e.id]))+"\n                        ")])])}),0)])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn btn-secondary btn-lg mt-2",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("close")))])])])]):t._e()},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i={props:["index","questions","results","answers","weights"],mounted:function(){"undefined"!==typeof $&&$(function(){$('[data-toggle="popover"]').popover()})},computed:{stars:function(){var t=Math.floor(this.results[this.index].rating),e=0;t<this.results[this.index].rating&&(e=1);var n=5-t-e;return{full:t,half:e,empty:n}}},methods:{send:function(t){return t},answer2Text:function(t){return 1===t?this.$t("yes"):-1===t?this.$t("no"):0===t?this.$t("dont_know"):"--"},answer2TextThem:function(t){return 1===t?this.$t("yes"):-1===t?this.$t("no"):0===t?this.$t("not_voted"):"--"},compare:function(t,e){return t*e===-1?"x":""},compared:function(t,e){return void 0===t?"text-muted":t*e===-1?"text-danger":t*e===1?"text-success":""},weighted:function(t){return t?"strong":""},shortenText:function(t){if(!t)return"";var e=window.innerWidth,n=0;return n=e<576?20:400,t.length>n?t.substr(0,n-3)+"...":t},shortened:function(t){if(!t)return!1;var e=window.innerWidth,n=0;return n=e<576?20:400,t.length>n}},components:{}},a=i,o=(n("d8d6"),n("2877")),c=Object(o["a"])(a,r,s,!1,null,"2fdac4d0",null);e["default"]=c.exports},"0395":function(t,e,n){var r=n("36c3"),s=n("6abf").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?o(t):s(r(t))}},"1dae":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row result-winners justify-center m-1"},[n("div",{staticClass:"card-group"},t._l(t.results.slice(0,3),function(e,r){return n("div",{staticClass:"card",attrs:{"data-toggle":"modal","data-target":"#modal-winners"},on:{click:function(n){return t.clicked("result_winners",{rank:r,id:e.info.id})}}},[n("div",{staticClass:"card-body"},[n("img",{staticClass:"picture mr-2",attrs:{src:e.info.picture}}),n("h5",{staticClass:"card-title"},[t._v(t._s(e.info.name))]),n("h6",{staticClass:"card-title"},[t._v(t._s(e.info.party))])]),n("div",{staticClass:"card-footer"},[n("component-stars",{attrs:{stars:e.rating}}),n("div",{staticClass:"card-text text-muted"},[t._v(t._s(t.$t("match"))+": "+t._s(e.result_percent)+"%")]),n("span",{staticClass:"badge badge-secondary"},[t._v(t._s(r+1))])],1)])}),0),n("div",{staticClass:"modal fade",attrs:{id:"modal-winners",tabindex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"}},[n("component-results-modal",{attrs:{index:t.index,questions:t.questions,results:t.results,answers:t.answers,weights:t.weights}})],1)])},s=[],i=n("cebc"),a=n("2f62"),o=n("76e5"),c=n("036c"),u={props:["questions"],data:function(){return{index:0}},computed:Object(i["a"])({},Object(a["b"])({results:"getResults",answers:"getAnswers",weights:"getWeights"})),methods:{clicked:function(t,e){this.openingModal(e["rank"]),this.$clicked(t,e)},getResults:function(){return this.$store.state.results},openingModal:function(t){this.index=t}},components:{"component-stars":o["default"],"component-results-modal":c["default"]}},f=u,l=(n("a129"),n("2877")),d=Object(l["a"])(f,r,s,!1,null,"2b019ef2",null);e["default"]=d.exports},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),s=n("c3a1");n("ce7e")("keys",function(){return function(t){return s(r(t))}})},"401e":function(t,e,n){},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),s=n("9aa9"),i=n("355d");t.exports=function(t){var e=r(t),n=s.f;if(n){var a,o=n(t),c=i.f,u=0;while(o.length>u)c.call(t,a=o[u++])&&e.push(a)}return e}},6718:function(t,e,n){var r=n("e53d"),s=n("584a"),i=n("b8e3"),a=n("ccb9"),o=n("d9f6").f;t.exports=function(t){var e=s.Symbol||(s.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:a.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),s=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},"85f2":function(t,e,n){t.exports=n("454f")},8716:function(t,e,n){},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},a129:function(t,e,n){"use strict";var r=n("8716"),s=n.n(r);s.a},a4bb:function(t,e,n){t.exports=n("8aae")},bf0b:function(t,e,n){var r=n("355d"),s=n("aebd"),i=n("36c3"),a=n("1bc3"),o=n("07e3"),c=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=i(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(o(t,e))return s(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),s=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return s(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),s=n("584a"),i=n("294c");t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},cebc:function(t,e,n){"use strict";var r=n("268f"),s=n.n(r),i=n("e265"),a=n.n(i),o=n("a4bb"),c=n.n(o),u=n("85f2"),f=n.n(u);function l(t,e,n){return e in t?f()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=c()(n);"function"===typeof a.a&&(r=r.concat(a()(n).filter(function(t){return s()(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}n.d(e,"a",function(){return d})},d8d6:function(t,e,n){"use strict";var r=n("401e"),s=n.n(r);s.a},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var r=n("62a0")("meta"),s=n("f772"),i=n("07e3"),a=n("d9f6").f,o=0,c=Object.isExtensible||function(){return!0},u=!n("294c")(function(){return c(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++o,w:{}}})},l=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[r].w},b=function(t){return u&&p.NEED&&c(t)&&!i(t,r)&&f(t),t},p=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:b}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-c3418a28.9d5f3694.js.map