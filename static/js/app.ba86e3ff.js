(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,b=[];d<o.length;d++)i=o[d],s[i]&&b.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1082:function(t,e,a){t.exports=a.p+"img/empty_state.3df1eec3.png"},5695:function(t,e,a){t.exports=a.p+"img/learning.9865a390.png"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("f213"),s=a("5f5b"),r=a("8c4f"),i=a("2f62"),o=a("2b0e"),l=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navigation",{attrs:{sub_header:"Home.",link_name:"Lectures.",link_path:"/lectures"}}),a("b-container",{staticClass:"body_for_footer"},[a("b-row",{staticClass:"mt-4"},[a("b-col",[a("b-row",[a("b-col",{staticClass:"text-center"},[a("h2",{staticClass:"hse_font_color"},[t._v("What is it?")])])],1),a("b-row",[a("b-col",[a("p",[a("strong",[t._v("Это платформа для улучшения организации Ваших заметок!")])]),a("p",[t._v("Планируйте лекции, сохраняйте ссылки на них и делитесь ими.")]),a("p",[t._v("Создавайте категории и заметки для самых нужных вещей.")])])],1)],1),a("b-col",{staticClass:"text-center"},[a("b-img",{attrs:{src:t.images.first,lazy:"",fluid:""}})],1)],1),a("b-row",{staticClass:"text-center mt-3 hse_font_color"},[a("b-col",[a("h2",[t._v("Попробуйте!")])])],1),a("b-row",{staticClass:"text-center mt-2",attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"3"}},[a("b-button",{staticClass:"btn-white btn-animation-1  btn-hse",attrs:{to:"/lectures",size:"lg"}},[t._v("\n                    Lectures planner\n                ")])],1),a("b-col",{attrs:{sm:"3"}},[a("b-button",{staticClass:"btn-white btn-animation-1  btn-hse",attrs:{to:"/dashboard",size:"lg"}},[t._v("\n                    Dashboard\n                ")])],1)],1)],1),a("Footer")],1)}),c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},d=[],b={name:"Footer"},h=b,_=a("2877"),m=Object(_["a"])(h,u,d,!1,null,"5fb7ef9d",null),p=m.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hse_nav_background hse_nav_font_color container-fluid"},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{staticClass:"ml-5 hse_nav_header_main"},[a("router-link",{attrs:{to:"/"}},[a("h1",[a("span",{staticClass:"align-middle",staticStyle:{color:"white"}},[t._v("On|"+t._s(t.sub_header))])])])],1),a("b-col",{staticClass:"text-right mr-5"},[a("router-link",{staticClass:"hse_a",attrs:{to:t.link_path}},[a("h4",[t._v("->"+t._s(t.link_name))])])],1)],1),a("hr")],1)},v=[],g=(a("ab28"),{name:"Navigation",props:["sub_header","link_name","link_path"],created(){document.title="On | "+this.sub_header}}),y=g,x=Object(_["a"])(y,f,v,!1,null,"d1f4c6c0",null),w=x.exports,k=a("5695"),C=a.n(k),S={name:"indexView",components:{Footer:p,Navigation:w},data:()=>({images:{first:C.a}})},O=S,z=Object(_["a"])(O,l,c,!1,null,"5b4e55de",null),E=z.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navigation",{attrs:{sub_header:"Lectures.",link_name:"Blog.",link_path:"/blog"}}),a("b-container",{staticClass:"body_for_footer"},[a("b-row",[a("b-col",{staticClass:"text-center"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],staticClass:"btn-hse btn-white btn-animation-1 btn-xl",attrs:{size:"lg"}},[t._v("Add lecture.\n                ")]),a("b-modal",{attrs:{id:"modal-1","hide-footer":""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("span",{staticClass:"hse_font_color"},[t._v("Creating lecture window")])]},proxy:!0}])},[a("div",{staticClass:"text-center"},[a("b-form",[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter lecture title"},model:{value:t.lecture_model.title,callback:function(e){t.$set(t.lecture_model,"title",e)},expression:"lecture_model.title"}}),a("b-form-input",{staticClass:"mt-3",attrs:{id:"input-2",type:"text",required:"",placeholder:"Link for materials"},model:{value:t.lecture_model.link,callback:function(e){t.$set(t.lecture_model,"link",e)},expression:"lecture_model.link"}}),a("b-button",{staticClass:"mt-3 btn-white btn-animation-1 btn-xl btn-hse",attrs:{size:"md"},on:{click:t.add_lecture}},[t._v("\n                                Add lecture.\n                            ")])],1)],1)])],1)],1),t.lectures.length>0?a("div",[a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{sm:"6"}},[a("b-form-input",{staticStyle:{"border-radius":"50px"},attrs:{id:"input-1",type:"text",required:"",placeholder:"Find in archive"},model:{value:t.find,callback:function(e){t.find=e},expression:"find"}})],1),a("b-col",[a("b-button",{staticClass:"btn btn-xl",attrs:{size:"md",pill:"",disabled:""}},[t._v("Find in archive.")])],1)],1),a("b-row",[a("b-col",[a("b-table",{staticClass:"mt-3",attrs:{striped:"",hover:"",items:t.lectures,fields:t.fields},scopedSlots:t._u([{key:"index",fn:function(e){return[t._v("\n                            "+t._s(e.index+1)+"\n                        ")]}},{key:"link",fn:function(e){return[a("a",{staticClass:"hse_font_color btn btn-white",attrs:{href:e.item.link}},[t._v("Materials")])]}},{key:"Delete",fn:function(e){return[a("b-button",{staticClass:"btn",attrs:{pill:""},on:{click:function(a){return t.delete_lecture(e.item)}}},[t._v("X")])]}}],null,!1,165597692)})],1)],1)],1):a("b-row",{staticClass:"mt-4"},[a("b-col",[a("Empty",{attrs:{header:"No lectures... ",text:"Create or call your teacher to fix this!"}})],1)],1)],1),a("Footer")],1)},$=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"text-center"},[a("b-row",[a("b-col",[a("b-img",{attrs:{src:t.images.first,lazy:"",fluid:""}})],1)],1),a("b-row",[a("b-col",[a("h3",{staticClass:"hse_font_color"},[t._v(t._s(t.header))]),a("p",[t._v(t._s(t.text))])])],1)],1)},F=[],P=a("1082"),J=a.n(P),M={name:"Empty",props:["header","text"],data:()=>({images:{first:J.a}})},U=M,B=Object(_["a"])(U,j,F,!1,null,"34a29a1a",null),D=B.exports,V={name:"lecturesView",components:{Empty:D,Footer:p,Navigation:w},data:()=>({user:"test_user",file:null,find:null,fields:["index",{key:"title",sortable:!1},{key:"link",sortable:!0},"Delete"],lectures:[],select_options:{types:["Online article","Video file","Audio file","Read file"],langs:["ru","en"],countries:["Russia","USE","China","UK"],themes:["Math"],courses:["1","2","3","4"],universities:["HSE","MSU","PSU","URFU"]},lecture_model:{type:"Online article",lang:"ru",link:null,file:null,university:"HSE",theme:"Math",course:"1",country:"Russia",author:null,title:null}}),methods:{add_lecture(){this.lectures.push(this.lecture_model),this.lecture_model={type:"Online article",lang:"ru",link:null,file:null,university:"HSE",theme:"Math",course:"1",country:"Russia",author:null,title:null},this.save_local()},delete_lecture(t){this.$delete(this.lectures,this.lectures.indexOf(t)),this.save_local()},save_local(){localStorage.lectures_app=JSON.stringify(this.lectures)}},created(){localStorage.getItem("lectures_app")&&(this.lectures=JSON.parse(localStorage.getItem("lectures_app")))}},H=V,R=Object(_["a"])(H,N,$,!1,null,"f189ea24",null),I=R.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navigation",{attrs:{sub_header:"Blog.",link_path:"/dashboard",link_name:"Dashboard."}}),a("b-container",{staticClass:"body_for_footer"},[a("b-row",{staticClass:"mt-5"},[a("b-col",[a("Empty",{attrs:{header:"Nothing new.",text:"Update soon)"}})],1)],1),a("b-row",{staticClass:"mt-3 text-center"},[a("b-col",[a("b-button",{staticClass:"btn-white btn-animation-1 btn-xl btn-hse",attrs:{size:"md"}},[t._v("Contact me.")])],1)],1)],1),a("Footer")],1)},T=[],A={name:"blogView",components:{Empty:D,Footer:p,Navigation:w}},q=A,K=Object(_["a"])(q,L,T,!1,null,"0af5a1eb",null),W=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navigation",{attrs:{sub_header:"Dashboard.",link_path:"/",link_name:"Home."}}),a("b-container",{staticClass:"body_for_footer"},[a("b-tabs",{attrs:{"content-class":"mt-3","no-fade":""},scopedSlots:t._u([{key:"tabs-end",fn:function(){return[a("b-nav-item",{on:{click:function(e){return t.add_category("NewBoard")}}},[a("b",[t._v("+")])])]},proxy:!0}])},t._l(t.nots,function(e){return a("div",{key:e.category_name},[a("b-tab",{attrs:{lazy:""},scopedSlots:t._u([{key:"title",fn:function(){return[a("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[a("div",{staticClass:"mr-1 btn-primary btn rounded-pill disabled"},[t._v(t._s(e.items.length))])]},proxy:!0}],null,!0)},[a("b-form-input",{staticStyle:{border:"none","box-shadow":"none",color:"transparent","text-shadow":"0 0 0 black"},attrs:{spellcheck:"false"},model:{value:e.new_name,callback:function(a){t.$set(e,"new_name",a)},expression:"item.new_name"}}),a("b-input-group-append",{staticClass:"ml-1"},[a("b-button",{attrs:{pill:"",variant:"outline-success"},on:{click:function(a){return t.save_name(e.category_name,e.new_name)}}},[t._v("✓\n                                ")]),a("b-button",{staticClass:"ml-1",attrs:{pill:"",variant:"outline-danger"},on:{click:function(a){return t.delete_category(e.new_name)}}},[t._v("×\n                                ")])],1)],1)]},proxy:!0}],null,!0)},[a("category-view",{attrs:{category_name:e.category_name,items:e.items},on:{re_save:t.save_local}})],1)],1)}),0),0===t.nots.length?a("div",[a("b-row",[a("b-col",[a("Empty",{attrs:{header:"No boards... "}})],1)],1),a("b-row",{staticClass:"text-center"},[a("b-col",[a("b-button",{staticClass:"btn-hse btn-white btn-animation-1",attrs:{size:"lg"},on:{click:function(e){return t.add_category("NewBoard")}}},[t._v("Create new board\n                    ")])],1)],1)],1):t._e()],1),a("Footer")],1)},G=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("b-card-group",{attrs:{columns:""}},[a("b-card",{attrs:{"border-variant":t.input.variant,"header-bg-variant":t.input.variant,"header-text-variant":"white",align:"center","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[a("b-row",{staticClass:"text-right",staticStyle:{"max-height":"10px"},attrs:{"aligh-h":"end"}},[a("b-col",{attrs:{sm:"12"}},[a("div",[a("b-button",{staticClass:"active",attrs:{variant:"secondary",pill:""},on:{click:t.create}},[t._v(">\n                                    ")])],1)])],1)]},proxy:!0}])},[a("b-card-text",[a("b-row",{staticStyle:{"max-height":"25px"}},[a("b-col",{attrs:{sm:"10"}},[a("b-input",{staticStyle:{border:"none","box-shadow":"none","font-size":"120%"},attrs:{placeholder:"Enter header",size:"sm"},model:{value:t.input.header,callback:function(e){t.$set(t.input,"header",e)},expression:"input.header"}})],1)],1),a("hr"),a("b-row",[a("b-col",[a("b-textarea",{staticStyle:{border:"none","box-shadow":"none",resize:"none",overflow:"auto"},attrs:{placeholder:"Enter body text",size:"sm","max-rows":"60"},model:{value:t.input.body,callback:function(e){t.$set(t.input,"body",e)},expression:"input.body"}})],1)],1),a("b-row",{staticStyle:{"max-height":"15px"}},[a("b-col",{staticClass:"text-left"},[a("b-form-checkbox",{staticClass:"mr-n2",model:{value:t.date_flag,callback:function(e){t.date_flag=e},expression:"date_flag"}},[a("em",[t._v("Date")])])],1),a("b-col",{staticClass:"text-right"},[a("b-button",{attrs:{size:"sm",pill:"",disabled:""}},[t._v("Add link")])],1)],1)],1)],1),t._l(t.card,function(e){return a("div",{key:e.body},[a("card-component",{attrs:{item:e},on:{delete_component:t.delete_item,change_item:t.change_variant}})],1)})],2)],1)],1),0===t.items.length?a("b-row",[a("b-col",[a("Empty",{attrs:{header:"Create new note!"}})],1)],1):t._e()],1)},Y=[],Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"border-variant":t.variant_self,"header-bg-variant":t.variant_self,"header-text-variant":"white",align:"center","footer-tag":"footer","bg-variant":t.variant_self},scopedSlots:t._u([{key:"header",fn:function(){return[a("b-row",{staticClass:"justify-content-between",staticStyle:{"max-height":"26px"}},[a("b-col",[a("b-button",{staticClass:"active mr-5",attrs:{variant:t.variant_self,pill:"",size:"md"},on:{click:t.onClickButton}},[t._v("\n                    ×\n                ")]),a("b-button",{attrs:{variant:"danger",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("danger")}}},[t._v(" \n                ")]),a("b-button",{attrs:{variant:"warning",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("warning")}}},[t._v(" \n                ")]),a("b-button",{attrs:{variant:"primary",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("primary")}}},[t._v(" \n                ")]),a("b-button",{attrs:{variant:"success",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("success")}}},[t._v(" \n                ")]),a("b-button",{attrs:{variant:"secondary",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("secondary")}}},[t._v(" \n                ")])],1)],1)]},proxy:!0}])},[a("b-card-text",[a("b-row",{staticStyle:{"max-height":"25px"}},[a("b-col",[a("b-input",{class:"bg-"+t.variant_self+("warning"===t.variant_self?" text-black":" text-white"),staticStyle:{border:"none","box-shadow":"none","font-size":"120%"},attrs:{placeholder:"Header",spellcheck:"false",size:"sm"},on:{change:t.change_item},model:{value:t.header_self,callback:function(e){t.header_self=e},expression:"header_self"}})],1)],1),a("hr"),a("b-row",[a("b-col",[a("b-textarea",{class:"bg-"+t.variant_self+("warning"===t.variant_self?" text-black":" text-white"),staticStyle:{border:"none","box-shadow":"none",resize:"none",overflow:"auto"},attrs:{spellcheck:"false",placeholder:"Text",size:"sm","max-rows":"60"},on:{change:t.change_item},model:{value:t.text_self,callback:function(e){t.text_self=e},expression:"text_self"}})],1)],1),a("b-row",{class:"bg-"+t.variant_self+("warning"===t.variant_self?" text-black":" text-white"),staticStyle:{"max-height":"10px"}},[a("b-col",{staticClass:"text-left",staticStyle:{"font-size":"80%"}},[a("em",[t._v(t._s(t.item.date))])])],1)],1)],1)},tt=[],et={name:"cardComponent",props:["item"],data:()=>({text_self:"",variant_self:"secondary",header_self:"",tmp:null}),methods:{onClickButton(){this.$emit("delete_component",this.tmp)},change_item(){this.$emit("change_item",this.variant_self,this.text_self,this.header_self,this.tmp),this.tmp.body=this.text_self,this.tmp.variant=this.variant_self},change_variant(t){this.variant_self=t,this.change_item()}},created(){this.text_self=this.item.body,this.variant_self=this.item.variant,this.header_self=this.item.header,this.tmp=this.item}},at=et,nt=Object(_["a"])(at,Z,tt,!1,null,"7aae0e9e",null),st=nt.exports,rt={name:"categoryView",components:{Empty:D,CardComponent:st},props:["category_name","items"],data:()=>({input:{header:"",body:"",footer:"",variant:"secondary",date:"",links:[]},date_flag:!1,show_buttons_flag:!1,card:[]}),methods:{create(){this.date_flag&&(this.input.date=(new Date).toISOString().split("T")[0]),this.card.push(this.input),this.input={header:"",body:"",footer:"",variant:"secondary",date:""},this.date_flag=!1,this.save_in_browser()},delete_item(t){this.$delete(this.card,this.card.indexOf(t)),this.save_in_browser()},change_variant(t,e,a,n){let s=this.card.indexOf(n);this.card[s].body=e,this.card[s].variant=t,this.card[s].header=a,this.save_in_browser()},save_in_browser(){this.$emit("re_save",this.card,this.category_name)}},created(){this.card=this.items}},it=rt,ot=Object(_["a"])(it,Q,Y,!1,null,"dcce880e",null),lt=ot.exports,ct={name:"dashboardView",components:{Empty:D,CategoryView:lt,Footer:p,Navigation:w},data:()=>({nots:[],flag:!1}),methods:{save_local(t,e){for(let a=0;a++;a<this.nots.length)this.nots[a].category_name===e&&(this.nots[a].items=t);localStorage.nots_app=JSON.stringify(this.nots)},add_category(t){this.nots.push({category_name:t,items:[],new_name:t}),localStorage.nots_app=JSON.stringify(this.nots)},delete_category(t){let e=-1;for(let a=0;a<this.nots.length;a++)this.nots[a].category_name!==t&&this.nots[a].new_name!==t||(e=a);this.$delete(this.nots,e),localStorage.nots_app=JSON.stringify(this.nots)},save_name(t,e){for(let a=0;a<this.nots.length;a++)this.nots[a].category_name===t&&(this.nots[a].category_name=e);localStorage.nots_app=JSON.stringify(this.nots)}},created(){localStorage.getItem("nots_app")&&(this.nots=JSON.parse(localStorage.getItem("nots_app")))}},ut=ct,dt=Object(_["a"])(ut,X,G,!1,null,"57bd7fc7",null),bt=dt.exports;const ht=[{path:"/",component:E,name:"indexPage",meta:{}},{path:"/lectures",component:I,name:"lecturesPage",meta:{}},{path:"/blog",component:W,name:"blogPage",meta:{}},{path:"/dashboard",component:bt,name:"dashboardPage",meta:{}}];var _t=ht,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),a("vue-snotify")],1)},pt=[],ft={},vt=ft,gt=(a("5c0b"),Object(_["a"])(vt,mt,pt,!1,null,null,null)),yt=gt.exports;const xt=a("bc3a");var wt=xt.create({baseURL:"/api/v1"});o["default"].use(s["a"]),o["default"].use(r["a"]),o["default"].use(i["a"]),o["default"].use(n["b"],{toast:{position:n["a"].rightTop,timeout:3e3}}),o["default"].prototype.$api=wt;const kt=new i["a"].Store({state:{},mutations:{}}),Ct=new r["a"]({routes:_t,mode:"history",scrollBehavior:()=>({y:0})});new o["default"]({el:"#app",router:Ct,store:kt,render:t=>t(yt)})},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){},ab28:function(t,e,a){}});