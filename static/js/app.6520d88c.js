(function(t){function e(e){for(var s,n,l=e[0],o=e[1],d=e[2],_=0,u=[];_<l.length;_++)n=l[_],i[n]&&u.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);c&&c(e);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1082:function(t,e,a){t.exports=a.p+"img/empty_state.3df1eec3.png"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("f213"),i=a("5f5b"),r=a("8c4f"),n=a("2f62"),l=a("2b0e"),o=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navigation",{attrs:{sub_header:"Dashboard."}}),a("b-container",{staticClass:"body_for_footer",attrs:{fluid:""}},[a("b-tabs",{attrs:{"content-class":"mt-3","no-fade":""},scopedSlots:t._u([{key:"tabs-start",fn:function(){return[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{staticClass:"mr-1"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.set_show_items_flag()}}},[t.show_items?a("div",[t._v("\n                                >\n                            ")]):a("div",[t._v("\n                                <\n                            ")])])],1),t.show_items?a("b-col",[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{staticStyle:{"border-top-left-radius":"20px","border-bottom-left-radius":"20px"},attrs:{variant:"outline_color"===t.style_schema?"outline-primary":"primary"},on:{click:function(e){return t.set_style(0)}}},[t._v("⚫\n                            ")]),a("b-button",{staticStyle:{"border-top-right-radius":"20px","border-bottom-right-radius":"20px"},attrs:{variant:"outline_color"===t.style_schema?"primary":"outline-primary"},on:{click:function(e){return t.set_style(1)}}},[t._v("⚪\n                            ")])],1)],1):t._e()],1)]},proxy:!0},{key:"tabs-end",fn:function(){return[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("b-nav-item",{on:{click:function(e){return t.create_board(t.uniqueBoardName)}}},[a("h4",[t._v("+")])])],1)],1)]},proxy:!0}])},[t.show_items?a("b-tab",{attrs:{lazy:"",active:t.active_board===t.special_boards.calendar},on:{click:function(e){return t.utils_set_active_board(t.special_boards.calendar)}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n                    "+t._s(t.dateToString)+"\n                    "),a("b-form-datepicker",{staticClass:"bg-light",attrs:{"button-only":"",locale:"en-US","aria-controls":"example-input","button-variant":"","value-as-date":"",right:"",size:"md"},model:{value:t.calendar_board_date_value,callback:function(e){t.calendar_board_date_value=e},expression:"calendar_board_date_value"}})]},proxy:!0}],null,!1,3088790232)},[a("category-component",{attrs:{board_name:t.special_boards.calendar,disabled:!0,items:t.dateCardsArray,style_schema:t.style_schema},on:{create_item:t.create_card,delete_item:t.delete_card,change_item:t.change_card}})],1):t._e(),t.show_items?a("b-tab",{attrs:{lazy:"",active:t.active_board===t.special_boards.templates},on:{click:function(e){return t.utils_set_active_board(t.special_boards.templates)}},scopedSlots:t._u([{key:"title",fn:function(){return[a("b-row",{attrs:{cols:"3","cols-sm":"3","no-gutters":"","align-v":"center"}},[a("b-col",[a("div",{staticClass:"mr-1 btn-success btn rounded-pill disabled"},[t._v(t._s(t.templatesCardsArray.length)+"\n                            ")])]),a("b-col",{staticClass:"ml-1"},[a("h6",[t._v("Templates")])])],1)]},proxy:!0}],null,!1,3121116978)},[a("category-component",{attrs:{board_name:t.special_boards.templates,disabled:!1,templates:t.templatesCardsArray,items:t.templatesCardsArray,style_schema:t.style_schema},on:{create_item:t.create_card,delete_item:t.delete_card,change_item:t.change_card}})],1):t._e(),t.show_items?a("b-tab",{attrs:{lazy:"",active:t.active_board===t.special_boards.everyday},on:{click:function(e){return t.utils_set_active_board(t.special_boards.everyday)}},scopedSlots:t._u([{key:"title",fn:function(){return[a("b-row",{attrs:{cols:"3","cols-sm":"3","no-gutters":"","align-v":"center"}},[a("b-col",[a("div",{staticClass:"mr-1 btn-success btn rounded-pill disabled"},[t._v(t._s(t.everydayCardsArray.length)+"\n                            ")])]),a("b-col",{staticClass:"ml-1"},[a("h6",[t._v("Everyday")])])],1)]},proxy:!0}],null,!1,137040146)},[a("category-component",{attrs:{board_name:t.special_boards.everyday,disabled:!1,items:t.everydayCardsArray,templates:t.templatesCardsArray,style_schema:t.style_schema},on:{create_item:t.create_card,delete_item:t.delete_card,change_item:t.change_card}})],1):t._e(),t._l(t.sortedBoardsArray,function(e){return a("div",{key:e.board_name},[a("b-tab",{attrs:{lazy:"",active:t.active_board===e.board_name},on:{click:function(a){return t.utils_set_active_board(e.board_name)}},scopedSlots:t._u([{key:"title",fn:function(){return[a("b-input-group",{scopedSlots:t._u([{key:"prepend",fn:function(){return[a("div",{staticClass:"mr-1 btn-primary btn rounded-pill disabled"},[t._v(t._s(e.items.length)+"\n                                ")])]},proxy:!0}],null,!0)},[a("b-form-input",{staticStyle:{border:"none","box-shadow":"none",color:"transparent","text-shadow":"0 0 0 black"},attrs:{spellcheck:"false"},on:{change:function(a){return t.change_name_board(e.tmp_name,e.board_name)}},model:{value:e.tmp_name,callback:function(a){t.$set(e,"tmp_name",a)},expression:"item.tmp_name"}}),a("b-input-group-append",{staticClass:"ml-1"},[a("b-button",{staticClass:"ml-1",attrs:{pill:"",variant:"outline-danger"},on:{click:function(a){return t.delete_board(e.board_name)}}},[t._v("×\n                                ")])],1)],1)]},proxy:!0}],null,!0)},[a("category-component",{attrs:{board_name:e.board_name,disabled:!1,items:e.items,templates:t.templatesCardsArray,style_schema:t.style_schema,active_card:t.active_card},on:{create_item:t.create_card,delete_item:t.delete_card,change_item:t.change_card}})],1)],1)})],2),0===t.boards.length?a("div",[a("b-row",{staticClass:"text-center"},[a("b-col",[a("b-button",{staticClass:"btn-hse btn-white btn-animation-1",attrs:{size:"lg",variant:"primary",pill:""},on:{click:function(e){return t.create_board(t.uniqueBoardName)}}},[t._v("Create new board\n                    ")])],1)],1)],1):t._e()],1),a("Footer")],1)}),d=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hse_nav_background hse_nav_font_color container-fluid mb-3"},[a("b-row",{attrs:{"align-v":"center","no-gutters":""}},[a("b-col",{staticClass:"hse_nav_header_main",attrs:{sm:"5"}},[a("h1",{staticStyle:{display:"inline-block"}},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"align-middle",staticStyle:{color:"white"}},[t._v("On|"+t._s(t.sub_header))])])],1),a("span",{staticClass:"badge badge-warning mt-1",staticStyle:{"vertical-align":"top"}},[t._v("Beta")])])],1),t.notf?a("b-row",{class:"text-center alert-"+t.variant,on:{click:t.checked}},[a("b-col",[a("h4",[t._v(t._s(t.notf))]),t._v("(нажмите чтобы убрать)")])],1):t._e()],1)},_=[],u={name:"Navigation",props:["sub_header","link_name","link_path","notification","variant","show_once"],data:()=>({notf:null}),methods:{checked(){this.notf=null,this.show_once&&(localStorage.note_app_show_once="true")}},created(){document.title="On | "+this.sub_header,localStorage.getItem("note_app_show_once")&&!this.show_once&&localStorage.removeItem("note_app_show_once"),localStorage.getItem("note_app_show_once")||(this.notf=this.notification)}},m=u,h=a("2877"),b=Object(h["a"])(m,c,_,!1,null,"04ee2445",null),p=b.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},f=[],g={name:"Footer"},y=g,x=Object(h["a"])(y,v,f,!1,null,"60d300fe",null),k=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",[a("b-row",[this.disabled?t._e():a("b-col",{staticClass:"text-left",attrs:{sm:"6",md:"6",lg:"4",xl:"3"}},[a("b-card",{staticClass:"shadow shadow-sm mb-4",staticStyle:{"border-radius":"20px"},attrs:{"border-variant":t.card_model.variant,align:"center","footer-tag":"footer"},scopedSlots:t._u([{key:"header",fn:function(){return[a("b-row",{staticStyle:{"max-height":"20px"},attrs:{"aligh-h":"end","no-gutters":"",cols:"12"}},[a("b-col",{staticClass:"text-left",attrs:{cols:"4"}},[t._v("\n                                    New note\n                                ")]),t.notesTemplates.length>1?a("b-col",[a("b-form-select",{staticClass:"btn-sm rounded-pill",attrs:{size:"sm",options:t.notesTemplates},model:{value:t.active_template,callback:function(e){t.active_template=e},expression:"active_template"}})],1):t._e(),a("b-col",{staticClass:"text-right"},[a("b-button",{staticClass:"active",attrs:{variant:"secondary",pill:"",size:"lg",tabindex:3},on:{click:t.create_item}},[t._v("+\n                                    ")])],1)],1)]},proxy:!0}],null,!1,2141443458)},[a("b-card-text",[a("b-row",{staticStyle:{"max-height":"25px"}},[a("b-col",{attrs:{sm:"10"}},[a("b-input",{staticStyle:{border:"none","box-shadow":"none","font-size":"120%"},attrs:{placeholder:"Enter header",size:"sm",tabindex:1},model:{value:t.card_model.header,callback:function(e){t.$set(t.card_model,"header",e)},expression:"card_model.header"}})],1)],1),a("hr"),a("b-row",[a("b-col",[a("b-textarea",{staticStyle:{border:"none","box-shadow":"none",resize:"none",overflow:"auto"},attrs:{placeholder:"Enter body text (or paste link to auto-detect)",size:"sm","max-rows":"60",formatter:t.link_detect,tabindex:2},model:{value:t.card_model.body,callback:function(e){t.$set(t.card_model,"body",e)},expression:"card_model.body"}})],1)],1),a("hr"),a("b-row",{attrs:{"no-gutters":""}},[a("b-col",[a("b-form",{attrs:{inline:""}},["everyday board"!==this.board_name?a("b-form-datepicker",{attrs:{"button-only":"",locale:"en-US","aria-controls":"example-input","button-variant":"","reset-button":"","value-as-date":"","reset-value":null,dropup:""},model:{value:t.input_extra.deadline_date,callback:function(e){t.$set(t.input_extra,"deadline_date",e)},expression:"input_extra.deadline_date"}}):t._e(),a("b-form-timepicker",{attrs:{dropup:"","button-only":"","reset-button":"","reset-value":null,"aria-controls":"example-input","no-close-button":"","button-variant":""},model:{value:t.input_extra.deadline_time,callback:function(e){t.$set(t.input_extra,"deadline_time",e)},expression:"input_extra.deadline_time"}})],1)],1),t.deadlineDate?a("b-col",{staticClass:"text-left",attrs:{sm:"5"}},[t._v("\n                                    "+t._s(t.deadlineDateString)+"\n                                    "),a("b-form-checkbox",{model:{value:t.input_extra.notification_flag,callback:function(e){t.$set(t.input_extra,"notification_flag",e)},expression:"input_extra.notification_flag"}},[a("em",[t._v("Notification")])])],1):t._e()],1),a("b-row",{staticClass:"mt-1"},[a("b-col",{staticClass:"text-left",attrs:{"align-self":"center",sm:"4"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}],attrs:{size:"sm",pill:"",variant:"secondary"}},[t._v("Add link\n                                    ")]),a("b-modal",{ref:"modal-1",attrs:{id:"modal-1","hide-footer":"",centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("span",{staticClass:"hse_font_color"},[t._v("Add link")])]},proxy:!0}],null,!1,3895200343)},[a("div",{staticClass:"text-center"},[a("b-form",[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",size:"md",placeholder:"Short link name: VK for example"},model:{value:t.input_extra.link_short_name,callback:function(e){t.$set(t.input_extra,"link_short_name",e)},expression:"input_extra.link_short_name"}}),a("b-form-input",{staticClass:"mt-3",attrs:{id:"input-2",type:"text",required:"",placeholder:"Link value: http://vk.com for example"},model:{value:t.input_extra.link_value,callback:function(e){t.$set(t.input_extra,"link_value",e)},expression:"input_extra.link_value"}}),a("hr"),a("p",[t._v("Or select a notification from another board")]),a("b-form-select",{attrs:{options:t.notesLinks},model:{value:t.input_extra.link_note,callback:function(e){t.$set(t.input_extra,"link_note",e)},expression:"input_extra.link_note"}}),a("hr"),a("b-button",{staticClass:"mt-3 btn-hse btn-white",attrs:{size:"md",pill:""},on:{click:t.add_link}},[t._v("\n                                                    Add link.\n                                                ")])],1)],1)])],1),t._l(t.card_model.links,function(e,s){return a("div",{key:s},[a("b-button",{attrs:{pill:"",size:"sm",variant:"outline-primary"},on:{click:function(e){return t.delete_link(s)}}},[t._v("\n                                        "+t._s(e.name)+"\n                                    ")])],1)})],2)],1)],1)],1),t._l(t.sortedItems,function(e,s){return a("b-col",{key:s,staticClass:"text-left",attrs:{sm:"6",md:"6",lg:"4",xl:"3"}},[a("card-component",{attrs:{item:e,active:t.active_card===e.header,board_name:t.board_name,style_schema:t.style_schema,disabled:t.disabled,index:s},on:{delete_item:t.delete_item,change_item:t.change_item}})],1)})],2)],1)],1),a("b-row",[a("b-col",[0!==t.items.length||this.disabled?t._e():a("Empty",{attrs:{header:"Create new note!"}}),0===t.items.length&&!1!==this.disabled?a("Empty",{attrs:{header:"There is nothing here!"}}):t._e()],1)],1)],1)},C=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow shadow-sm mb-4",staticStyle:{"border-radius":"25px","border-width":"2px"},attrs:{"bg-variant":"full_color"===t.style_schema?t.item.variant:"white","border-variant":t.item.variant,"header-text-variant":"full_color"!==t.style_schema?t.item.variant:"white",align:"center","footer-tag":"footer",id:t.item.header},scopedSlots:t._u([{key:"header",fn:function(){return[!1===t.disabled?a("b-row",{staticStyle:{"max-height":"30px"},attrs:{"cols-sm":"4",cols:"6","no-gutters":"","align-v":"start"}},[a("b-col",{staticClass:"text-left",attrs:{sm:"7"}},[a("b-button",{staticClass:"mr-5 shadow shadow-sm",attrs:{variant:t.item.variant,pill:""},on:{click:t.delete_item}},[t._v("\n                    ×\n                ")])],1),a("b-col",{staticClass:"text-right",attrs:{sm:"1"}},[a("b-button",{attrs:{variant:"danger",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("danger")}}},[t._v(" \n                ")])],1),a("b-col",{staticClass:"text-right",attrs:{sm:"1"}},[a("b-button",{attrs:{variant:"warning",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("warning")}}},[t._v(" \n                ")])],1),a("b-col",{staticClass:"text-right",attrs:{sm:"1"}},[a("b-button",{attrs:{variant:"primary",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("primary")}}},[t._v(" \n                ")])],1),a("b-col",{staticClass:"text-right",attrs:{sm:"1"}},[a("b-button",{attrs:{variant:"success",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("success")}}},[t._v(" \n                ")])],1),a("b-col",{staticClass:"text-right",attrs:{sm:"1"}},[a("b-button",{attrs:{variant:"secondary",pill:"",size:"sm"},on:{click:function(e){return t.change_variant("secondary")}}},[t._v(" \n                ")])],1)],1):a("b-row",{staticStyle:{"max-height":"30px"},attrs:{"no-gutters":"","align-v":"center"}},[a("b-col",{staticClass:"text-left"},[t._v(t._s(t.item.board_name||"Everyday"))]),a("b-col",{staticClass:"text-right",attrs:{self:""}},[a("a",{staticClass:"rounded-pill btn-sm primary",attrs:{href:"?board="+t.item.board_name+"&note="+t.item.header}},[t._v("Go to note")])])],1)]},proxy:!0}])},[a("b-card-text",[t.active?a("b-tooltip",{attrs:{show:t.show,target:t.item.header,placement:"top"},on:{"update:show":function(e){t.show=e}}},[t._v("\n            This note was in link!\n        ")]):t._e(),a("b-row",{staticStyle:{"max-height":"25px"},attrs:{"col-sm-":""}},[a("b-col",{staticClass:"text-left ml-2"},[a("b-input",{class:t.style_schema_string_bg_text_color,staticStyle:{border:"none","box-shadow":"none","font-size":"120%"},attrs:{value:t.item.header,placeholder:"Header",spellcheck:"false",size:"sm",disabled:!1!==t.disabled},on:{input:function(e){return t.change_item(arguments[0],"header")}}})],1)],1),a("hr"),a("b-row",[a("b-col",[a("b-form-group",[a("b-textarea",{class:t.style_schema_string_bg_text_color,staticStyle:{border:"none","box-shadow":"none",resize:"none",overflow:"auto"},attrs:{value:t.item.body,spellcheck:"false",placeholder:"Text",size:"sm","max-rows":"60",disabled:!1!==t.disabled,formatter:t.link_detect},on:{input:function(e){return t.change_item(arguments[0],"body")}}})],1)],1)],1),null!==this.item.date||this.item.links.length>0?a("hr"):t._e(),a("b-row",{staticClass:"ml-1 text-left"},t._l(t.item.links,function(e){return a("div",{key:e.name,staticClass:"text-right"},[a("b-button-group",{attrs:{size:"sm"}},[a("a",{staticClass:"btn-sm btn-primary",staticStyle:{"border-top-left-radius":"20px","border-bottom-left-radius":"20px","background-color":"#FFA07A"},attrs:{href:e.value,target:"_blank"}},[t._v(t._s(e.name))]),a("b-button",{staticStyle:{"border-top-right-radius":"20px","border-bottom-right-radius":"20px","background-color":"#FA8072"},attrs:{variant:"danger"},on:{click:function(a){return t.delete_link(e.value)}}},[t._v("\n                        ×\n                    ")])],1)],1)}),0),a("b-row",{class:t.style_schema_string_bg_text_color+"  text-right  mt-2",staticStyle:{"font-size":"80%"},attrs:{"no-gutters":"","align-v":"center"}},[null!==this.item.date?a("b-col",{staticClass:"text-left"},[a("em",[t._v(t._s(t.deadlineDateString)+" "+t._s(t.deadlineTimeString))])]):t._e(),null!==this.item.date?a("div",{ref:"time_deadline"},[t.deadline_left.days>5?a("b-col",[a("em",[t._v(t._s(t.deadline_left.days)+"d left")])]):t.deadline_left.days>=1?a("b-col",[a("em",[a("strong",[t._v(t._s(t.deadline_left.days)+"d "+t._s(t.deadline_left.hours)+"h left 🔥")])])]):0===t.deadline_left.days?a("b-col",[a("em",[a("strong",[t._v(t._s(t.deadline_left.hours)+"h "+t._s(t.deadline_left.minutes)+"m left 🔥")])])]):a("b-col",[a("em",[a("strong",[t._v("Passed")])])])],1):t._e(),"calendar board"!==this.board_name?a("b-col",{staticClass:"text-right"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t.item.header,expression:"item.header"}],staticStyle:{"background-color":"#87CEFA"},attrs:{size:"sm",pill:"",variant:"primary"}},[t._v("⏰\n                ")]),a("b-modal",{ref:t.item.header,attrs:{id:t.item.header,"hide-footer":"",centered:""},scopedSlots:t._u([{key:"modal-title",fn:function(){return[a("span",{staticClass:"hse_font_color"},[t._v("Date window")])]},proxy:!0}],null,!1,1941284270)},[a("div",{staticClass:"text-center"},[a("b-form",[a("b-form-timepicker",{attrs:{"reset-button":"","reset-value":null,"aria-controls":"example-input","value-as-date":""},model:{value:t.new_time,callback:function(e){t.new_time=e},expression:"new_time"}}),"everyday board"!==this.board_name?a("b-form-datepicker",{attrs:{locale:"en-US","aria-controls":"example-input","reset-button":"","value-as-date":"","reset-value":null},model:{value:t.new_date,callback:function(e){t.new_date=e},expression:"new_date"}}):t._e(),a("hr"),a("b-button",{staticClass:"mt-3 btn-primary",attrs:{size:"md",pill:""},on:{click:function(e){return t.change_date(t.item.header,!1)}}},[t._v("\n                                Save date\n                            ")]),a("b-button",{staticClass:"mt-3 btn-danger",attrs:{size:"md",pill:""},on:{click:function(e){return t.change_date(t.item.header,!0)}}},[t._v("\n                                Remove date\n                            ")])],1)],1)])],1):t._e()],1)],1)],1)},$=[],O={name:"cardComponent",props:["item","active","style_schema","disabled","index","board_name"],data:()=>({new_date:null,new_time:null,deadline_left:null}),methods:{delete_item(){this.$emit("delete_item",this.item)},change_item(t,e){this.item[e]=t,this.$emit("change_item",this.index,this.item)},change_variant(t){this.item.variant=t,this.change_item()},change_date(t,e){if(e)return this.change_item(null,"date"),void this.$bvModal.hide(t);null!==this.new_date||null!==this.new_time?(null===this.new_date&&(this.new_date=new Date),null===this.new_time&&(this.new_time="00:00"),this.new_date.setHours(parseInt(this.new_time.split(":")[0])),this.new_date.setMinutes(parseInt(this.new_time.split(":")[1])),this.$bvModal.hide(t),this.change_item(this.new_date,"date"),this.deadline_left=this.deadlineLeftObject()):this.$snotify.warning("You need to select fields")},add_link(t,e){let a=this.item.links;a.push({name:t,value:e}),this.change_item(a,"links")},delete_link(t){let e=this.item.links;for(let a=0;a<e.length;a++)if(e[a].value===t)return this.$delete(e,a),void this.change_item(e,"links")},add_null(t,e=10){return t<e?"0"+t:t.toString()},link_detect(t){let e=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,a="";if(t=t.replace(e,function(t){return a=t,""}),!this.link_exists(a)&&""!==a){let t=a.split("/")[2];this.add_link(t,a)}return t},link_exists(t){for(let e=0;e<this.item.links.length;e++)if(this.item.links[e].value===t)return!0;return!1},deadlineLeftObject(){if(null===this.item.date)return null;let t=new Date(this.item.date);if(null===t)return"";let e=(t.getTime()-(new Date).getTime())/1e3;if(e<0)return{days:-1};let a=Math.floor(e/86400);e-=86400*a;let s=Math.floor(e/3600)%24;e-=3600*s;let i=Math.floor(e/60)%60;return e-=60*i,{days:a,hours:s,minutes:i}}},created(){null!==this.item.date&&(this.new_date=new Date(this.item.date),this.new_time=this.new_date.getHours()+":"+this.new_date.getMinutes(),this.deadline_left=this.deadlineLeftObject(),setInterval(()=>this.deadline_left=this.deadlineLeftObject(),6e4))},computed:{style_schema_string_bg_text_color(){return this.style_schema===this.$store.state.styles[0]?"bg-"+this.item.variant+("warning"===this.item.variant||"success"===this.item.variant?" text-black":" text-white"):"bg-white"},deadlineDateString:function(){let t=new Date(this.item.date);return this.add_null(t.getDate(),10)+"."+this.add_null(t.getMonth()+1,10)+"."+t.getFullYear()},deadlineTimeString:function(){let t=new Date(this.item.date);return this.add_null(t.getHours(),10)+":"+this.add_null(t.getMinutes(),10)}}},z=O,D=Object(h["a"])(z,S,$,!1,null,"f6e3fc62",null),E=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"text-center"},[a("b-row",[a("b-col",[a("b-img",{staticStyle:{border:"none"},attrs:{src:t.images.first,thumbnail:"",lazy:"",fluid:""}})],1)],1),a("b-row",[a("b-col",[a("h3",{staticClass:"hse_font_color"},[t._v(t._s(t.header))]),a("p",[t._v(t._s(t.text))])])],1)],1)},T=[],j=a("1082"),I=a.n(j),M={name:"Empty",props:["header","text"],data:()=>({images:{first:I.a}})},N=M,J=Object(h["a"])(N,A,T,!1,null,"34bbfe1b",null),F=J.exports,q=a("310e"),H=a.n(q),P={name:"categoryComponent",components:{Empty:F,CardComponent:E,draggable:H.a},props:["board_name","items","active_card","style_schema","disabled","templates"],data:()=>({card_model:{header:"",body:"",footer:"",variant:"secondary",date:null,links:[]},input_extra:{link_value:"",link_short_name:"",link_note:"",deadline_time:null,deadline_date:null,notification_flag:!1},active_template:null}),methods:{unset_inputs(){this.card_model={header:"",body:"",footer:"",variant:"secondary",date:null,links:[]},this.input_extra={link_value:"",link_short_name:"",link_note:"",deadline_time:null,deadline_date:null,notification_flag:!1}},change_item(t,e){this.$emit("change_item",this.board_name,t,e)},delete_item(t){this.$emit("delete_item",this.board_name,this.items.indexOf(t))},create_item(){""===this.card_model.header||this.boardCardHeadersArray.includes(this.card_model.header)?this.$snotify.warning("Headers cannot be empty or repeated."):(this.card_model.date=this.input_extra.deadline_date,this.$emit("create_item",this.board_name,this.card_model,{notification_flag:this.notification_flag}),this.unset_inputs())},add_link(){if(this.input_extra.link_note){let t=this.input_extra.link_note.split(": ");this.card_model.links.push({name:t[1],value:"?board="+t[0]+"&note="+t[1]})}else{if(""===this.input_extra.link_short_name||""===this.input_extra.link_value)return void this.$snotify.warning("Short name and value cannot be empty");this.card_model.links.push({name:this.input_extra.link_short_name,value:this.input_extra.link_value})}this.$refs["modal-1"].hide(),this.input_extra.link_short_name="",this.input_extra.link_value="",this.input_extra.link_note=""},delete_link(t){this.$delete(this.card_model.links,t)},link_detect(t){let e=/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,a="";return t=t.replace(e,function(t){return a=t,""}),this.input_extra.link_value=a,this.link_exists(a)||""===a||(this.input_extra.link_short_name=a.split("/")[2],this.add_link()),t},link_exists(t){for(let e=0;e<this.card_model.links.length;e++)if(this.card_model.links[e].value===t)return!0;return!1},add_null(t,e){return t<e?"0"+t:t.toString()}},computed:{notesLinks:function(){let t=JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.boards)),e=[];return this.items.forEach(t=>{e.push(this.board_name+": "+t.header)}),t.forEach(t=>{t.items.forEach(a=>{t.board_name!==this.board_name&&e.push(t.board_name+": "+a.header)})}),e},notesTemplates:function(){let t=[];return t.push({value:null,text:"Template"}),null!==this.templates&&this.templates.forEach(e=>{t.push({text:e.header,value:e})}),t},sortedItems:function(){let t=["secondary","success","primary","warning","danger"],e=this.items;return e.sort(function(e,a){return t.indexOf(e.variant)>t.indexOf(a.variant)?-1:e.variant===a.variant?e.date&&a.date?new Date(e.date).getTime()-new Date(a.date).getTime()>0?1:-1:e.date?-1:1:1}),e},boardCardHeadersArray:function(){let t=[];return this.items.forEach(e=>{t.push(e.header)}),t},deadlineDate:function(){return this.input_extra.deadline_date||this.input_extra.deadline_time?(this.input_extra.deadline_time||(this.input_extra.deadline_time="00:00"),this.input_extra.deadline_date||(this.input_extra.deadline_date=new Date),this.input_extra.deadline_date.setHours(parseInt(this.input_extra.deadline_time.split(":")[0])),this.input_extra.deadline_date.setMinutes(parseInt(this.input_extra.deadline_time.split(":")[1])),this.input_extra.deadline_date):null},deadlineDateString:function(){let t=this.deadlineDate;return this.add_null(t.getDate(),10)+"."+this.add_null(t.getMonth()+1,10)+"."+t.getFullYear()+" "+this.add_null(t.getHours(),10)+":"+this.add_null(t.getMinutes(),10)}},watch:{active_template:function(t){this.card_model=Object.assign({},t)}}},B=P,L=Object(h["a"])(B,w,C,!1,null,"610e6f21",null),Y=L.exports,U={name:"dashboardView",components:{CategoryComponent:Y,Footer:k,Navigation:p,draggable:H.a},data:()=>({boards:[],style_schema:"",active_board:null,active_card:null,calendar_board_date_value:new Date,show_items:!0,special_boards:{calendar:"",templates:"",everyday:""},special_boards_values:[]}),methods:{set_show_items_flag(){this.show_items=!this.show_items,localStorage[this.$store.state.localstorage_variables.show_items_flag]=JSON.stringify(this.show_items)},set_style(t){this.style_schema=this.$store.state.styles[t],localStorage[this.$store.state.localstorage_variables.style_schema]=this.style_schema},create_board(t){this.boards.push({board_name:t,items:[],tmp_name:t}),this.utils_set_active_board(t),this.$store.commit("save_items_local",this.boards)},change_name_board(t,e){if(this.boardsHeadersArray.includes(t)&&""!==t){this.$snotify.warning("Boards names cannot be empty or repeated");for(let t=0;t<this.boards.length;t++)if(this.boards[t].board_name===e){this.boards[t].tmp_name=e;break}}else for(let a=0;a<this.boards.length;a++)if(this.boards[a].board_name===e){this.boards[a].board_name=t,this.utils_set_active_board(t),this.$store.commit("save_items_local",this.boards);break}},delete_board(t){for(let e=0;e<this.boards.length;e++)if(this.boards[e].board_name===t){this.$delete(this.boards,e);break}this.$store.commit("save_items_local",this.boards)},delete_card(t,e){for(let a=0;a<this.special_boards_values.length;a++)if(this.special_boards_values[a].board_name===t)return this.$delete(this.special_boards_values[a].items,e),void this.$store.commit("save_special_items_local",this.special_boards_values);for(let a=0;a<this.boards.length;a++)if(this.boards[a].board_name===t)return this.$delete(this.boards[a].items,e),void this.$store.commit("save_items_local",this.boards)},change_card(t,e,a){for(let s=0;s<this.special_boards_values.length;s++)if(this.special_boards_values[s].board_name===t)return this.special_boards_values[s].items[e]=a,void this.$store.commit("save_special_items_local",this.special_boards_values);for(let s=0;s<this.boards.length;s++)if(this.boards[s].board_name===t)return this.boards[s].items[e]=a,void this.$store.commit("save_items_local",this.boards)},create_card(t,e,a){for(let s=0;s<this.special_boards_values.length;s++)if(this.special_boards_values[s].board_name===t)return this.special_boards_values[s].items.push(e),void this.$store.commit("save_special_items_local",this.special_boards_values);for(let s=0;s<this.boards.length;s++)if(this.boards[s].board_name===t)return this.boards[s].items.push(e),!0===a.notification_flag&&this.set_notification(e.header,t,e.date),void this.$store.commit("save_items_local",this.boards)},set_notification(t,e,a){"granted"===Notification.permission?setTimeout(()=>{let a=e,s=new Notification(e+": "+t);s.onclick=function(){window.open("?board="+a+"&note="+t)}},a.getTime()-(new Date).getTime()):Notification.requestPermission().then(this.set_notification(t,e,a))},utils_set_active_board(t){this.active_board=t,this.$store.commit("set_active_board",t)},utils_set_active_card_and_board(t,e){this.active_card=e,this.$store.commit("set_active_card",e),this.utils_set_active_board(t)},utils_init_vars(){this.special_boards=this.$store.state.special_boards},add_null(t,e){return t<e?"0"+t:t.toString()},test(t){console.log("asd")}},created(){this.utils_init_vars(),localStorage.getItem(this.$store.state.localstorage_variables.boards)&&(this.boards=JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.boards)),this.$route.query.board&&this.$route.query.note?(this.utils_set_active_card_and_board(this.$route.query.board,this.$route.query.note),this.$router.replace({query:{}})):localStorage.getItem(this.$store.state.localstorage_variables.active_board)&&(this.active_board=localStorage.getItem(this.$store.state.localstorage_variables.active_board))),localStorage.getItem(this.$store.state.localstorage_variables.style_schema)?this.style_schema=localStorage.getItem(this.$store.state.localstorage_variables.style_schema):this.style_schema=this.$store.state.styles[0],localStorage.getItem(this.$store.state.localstorage_variables.special_boards)?this.special_boards_values=JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.special_boards)):localStorage[this.$store.state.localstorage_variables.special_boards]=JSON.stringify([{board_name:this.special_boards.everyday,tmp_name:this.special_boards.everyday,items:[]},{board_name:this.special_boards.templates,tmp_name:this.special_boards.templates,items:[]}]),localStorage.getItem(this.$store.state.localstorage_variables.show_items_flag)&&(this.show_items=JSON.parse(localStorage.getItem(this.$store.state.localstorage_variables.show_items_flag)))},computed:{uniqueBoardName:function(){let t="Board",e=1;while(this.boardsHeadersArray.includes(t+e))e++;return t+e},boardsHeadersArray:function(){let t=[];return this.boards.forEach(e=>{t.push(e.board_name)}),t},sortedBoardsArray:function(){let t=this.boards;return t.sort(function(t,e){let a=t.items.length>e.items.length;return a?-1:1}),t},templatesCardsArray:function(){let t=[];return this.special_boards_values.forEach(e=>{e.board_name!==this.special_boards.templates||(t=e.items)}),t},everydayCardsArray:function(){let t=[];return this.special_boards_values.forEach(e=>{if(e.board_name!==this.special_boards.everyday);else{t=e.items;let a=this.calendar_board_date_value;t.forEach(t=>{if(null!==t.date){let e=new Date(t.date);e.setMonth(a.getMonth()),e.setFullYear(a.getFullYear()),e.setDate(a.getDate()),t.date=e}})}}),t},dateCardsArray:function(){let t=[];return this.boards.forEach(e=>{e.items.forEach(a=>{let s=new Date(a.date);s.getMonth()===this.calendar_board_date_value.getMonth()&&s.getDate()===this.calendar_board_date_value.getDate()&&s.getFullYear()===this.calendar_board_date_value.getFullYear()&&(a.board_name=e.board_name,t.push(a))})}),t=t.concat(this.everydayCardsArray),t},dateToString:function(){let t=this.calendar_board_date_value;return this.add_null(t.getDate(),10)+"."+this.add_null(t.getMonth()+1,10)+"."+t.getFullYear()}}},Z=U,V=Object(h["a"])(Z,o,d,!1,null,"68778294",null),G=V.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container-fluid"},[a("b-row",[a("draggable",{attrs:{group:"people",list:t.list4}},t._l(t.list4,function(e,s){return a("div",{key:e.name,staticClass:"list-group-item"},[t._v("\n                    "+t._s(e.name)+" "+t._s(s)+"\n                ")])}),0),a("div",{staticClass:"col-3"},[a("h3",[t._v("Draggable 1")]),a("draggable",{staticClass:"list-group",attrs:{list:t.list1,group:"people"},on:{change:t.log}},t._l(t.list1,function(e,s){return a("div",{key:e.name,staticClass:"list-group-item"},[t._v("\n                        "+t._s(e.name)+" "+t._s(s)+"\n                    ")])}),0)],1),a("div",{staticClass:"col-3"},[a("h3",[t._v("Draggable 2")]),a("draggable",{staticClass:"list-group",attrs:{list:t.list2,group:"people"},on:{change:t.log}},t._l(t.list2,function(e,s){return a("div",{key:e.name,staticClass:"list-group-item",attrs:{draggable:"true"}},[t._v("\n                        "+t._s(e.name)+" "+t._s(s)+"\n                    ")])}),0)],1),a("div",{staticClass:"col-3"},[a("h3",[t._v("Draggable 3")]),a("draggable",{staticClass:"list-group",attrs:{list:t.list3,group:"people"},on:{change:t.log}},t._l(t.list3,function(e,s){return a("div",{key:e.name,staticClass:"list-group-item",attrs:{draggable:"true"}},[t._v("\n                        "+t._s(e.name)+" "+t._s(s)+"\n                    ")])}),0)],1)],1)],1)])},K=[],Q={name:"testView",components:{draggable:H.a},data:()=>({list4:[{name:"asd",id:1},{name:"qwe",id:2},{name:"zxc",id:3}],list1:[{name:"John",id:1},{name:"Joao",id:2},{name:"Jean",id:3},{name:"Gerard",id:4}],list2:[{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}],list3:[{name:"Juan",id:5},{name:"Edgard",id:6},{name:"Johnson",id:7}]}),methods:{add:function(){this.list1.push({name:"Juan",id:this.list1.length+this.list2.length})},replace:function(){this.list=[{name:"Edgard"}]},clone:function(t){return{name:t.name+" cloned"}},log:function(t){window.console.log(t)}}},W=Q,X=Object(h["a"])(W,R,K,!1,null,"347f9a0e",null),tt=X.exports;a("ab28");const et=[{path:"/",component:G,name:"dashboardPage",meta:{}},{path:"/test",component:tt,name:"testPage",meta:{}},{path:"/dashboard",component:G,name:"dashboardPage",meta:{}}];var at=et,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),a("vue-snotify")],1)},it=[],rt={},nt=rt,lt=(a("5c0b"),Object(h["a"])(nt,st,it,!1,null,null,null)),ot=lt.exports;const dt=a("bc3a");var ct=dt.create({baseURL:"/api/v1"});l["default"].use(i["a"]),l["default"].use(r["a"]),l["default"].use(n["a"]),l["default"].use(s["b"],{toast:{position:s["a"].rightTop,timeout:3e3}}),l["default"].prototype.$api=ct;const _t=new n["a"].Store({state:{special_boards:{calendar:"calendar board",templates:"templates board",everyday:"everyday board"},localstorage_variables:{special_boards:"dashboard_special_boards",boards:"nots_app",active_board:"dashboard_active_board",style_schema:"dashboard_style_schema",show_items_flag:"show_items_flag"},styles:["full_color","outline_color"]},mutations:{set_active_card(t,e){t.active_card=e,localStorage[t.localstorage_variables.active_card]=e},set_active_board(t,e){t.active_board=e,localStorage[t.localstorage_variables.active_board]=e},save_items_local(t,e){localStorage[t.localstorage_variables.boards]=JSON.stringify(e)},save_special_items_local(t,e){localStorage[t.localstorage_variables.special_boards]=JSON.stringify(e)}}}),ut=new r["a"]({routes:at,mode:"history",scrollBehavior:()=>({y:0})});new l["default"]({el:"#app",router:ut,store:_t,render:t=>t(ot)})},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),i=a.n(s);i.a},"5e27":function(t,e,a){},ab28:function(t,e,a){}});