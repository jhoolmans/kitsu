(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65ec408f"],{"5eb8":function(t,e,s){"use strict";s("b57d")},"6fac":function(t,e,s){"use strict";s("c518")},"716e":function(t,e,s){"use strict";s("c4e3")},ac17:function(t,e,s){},b372:function(t,e,s){"use strict";s("ac17")},b57d:function(t,e,s){},c4e3:function(t,e,s){},c518:function(t,e,s){},e186:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logs fixed-page"},[s("div",{staticClass:"tabs logs-tabs"},[s("ul",[s("li",{class:{"is-active":t.isActiveTab("events")}},[s("a",{on:{click:function(e){t.activeTab="events"}}},[t._v(" "+t._s(t.$t("logs.title"))+" ")])]),s("li",{class:{"is-active":t.isActiveTab("preview_files")}},[s("a",{on:{click:function(e){t.activeTab="preview_files"}}},[t._v(" "+t._s(t.$t("logs.preview_files.title"))+" ")])])])]),t.isActiveTab("events")?s("Events"):t._e(),t.isActiveTab("preview_files")?s("PreviewFiles"):t._e()],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt1"},[s("div",{staticClass:"flexrow"},[s("date-field",{staticClass:"flexrow-item",attrs:{"disabled-dates":{from:t.today},label:t.$t("logs.current_date_label")},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh"},on:{click:t.loadDayEvents}}),s("span",{staticClass:"flexrow-item nb-events"},[t._v(" "+t._s(t.events.length)+" "+t._s(t.$t("logs.events"))+" ")])],1),t.isLoading||0!==t.events.length?t._e():s("div",{staticClass:"mt2"},[t._v(" "+t._s(t.$t("logs.empty_list"))+" ")]),t.isLoading?s("div",{staticClass:"has-text-centered"},[s("spinner")],1):s("div",{staticClass:"log-list"},t._l(t.events,(function(e){return s("div",{key:e.id,staticClass:"mt05 event-line",on:{click:function(s){return t.selectLine(e)}}},[s("div",[s("span",{staticClass:"date tag mr1"},[t._v(t._s(t.formatDate(e.created_at))+" ")]),s("span",{staticClass:"type tag",attrs:{title:e.name.split(":")[1],"data-status":t.formatType(e)}},[t._v(" "+t._s(t.formatType(e))+" ")]),s("span",{staticClass:"name tag mr1"},[t._v(t._s(e.name.split(":")[0]))])]),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.selectedEvents[e.id],expression:"selectedEvents[event.id]"}]},[s("li",{staticClass:"flexrow"},[s("span",{staticClass:"key"},[t._v("user")]),e.user_id?s("people-avatar",{staticClass:"flexrow-item",attrs:{size:20,person:t.personMap.get(e.user_id)}}):t._e(),e.user_id?s("people-name",{staticClass:"flexrow-item",attrs:{person:t.personMap.get(e.user_id)}}):t._e()],1),t._l(Object.keys(e.data).sort(),(function(a){return s("li",{key:e.id+"-"+a,staticClass:"variable"},[s("span",{staticClass:"key"},[t._v(t._s(a))]),t.isLink(a)?s("a",{attrs:{href:t.getLink(e,a)}},[t._v(" "+t._s(e.data[a])+" ")]):s("span",[t._v(t._s(e.data[a]))])])}))],2)])})),0)])},r=[],c=s("5530"),o=(s("ac1f"),s("1276"),s("b0c0"),s("caad"),s("99af"),s("2f62")),l=s("c1df"),u=s.n(l),d=s("ba4c"),p=s.n(d),v=s("3657"),f=s("c279"),b=s("de40"),_=s("d37c"),m=s("eb8c"),h=s("0073"),w=s("be83"),k={name:"Events",mixins:[f["a"]],components:{ButtonSimple:b["a"],DateField:_["a"],PeopleAvatar:m["a"],PeopleName:h["a"],Spinner:w["a"]},data:function(){return{currentDate:new Date,events:[],isLoading:!0,selectedEvents:{}}},mounted:function(){this.loadDayEvents()},computed:Object(c["a"])(Object(c["a"])({},Object(o["c"])(["personMap","productionMap","user"])),{},{today:function(){return u()().toDate()}}),methods:Object(c["a"])(Object(c["a"])({},Object(o["b"])(["loadEvents"])),{},{formatType:function(t){return t.name.split(":")[1].substring(0,3)},loadDayEvents:function(){var t=this,e=u()(this.currentDate).add(1,"days"),s=u()(this.currentDate);this.selectedEvents={},this.isLoading=!0,this.loadEvents({after:Object(v["e"])(s,this.timezone),before:Object(v["e"])(e,this.timezone)}).then((function(e){t.isLoading=!1,t.events=e})).catch((function(e){t.isLoading=!1,console.error(e)}))},selectLine:function(t){p.a.set(this.selectedEvents,t.id,!this.selectedEvents[t.id])},isLink:function(t){var e=["project_id","task_id"];return e.includes(t)},getLink:function(t,e){var s=t.data.project_id,a=e.substring(0,e.length-3);if("project"===a)return"/productions/".concat(s,"/news-feed");var i=t.data[e];return"/productions/".concat(s,"/").concat(a,"s/").concat(i)}}),watch:{currentDate:function(){this.loadDayEvents()}},metaInfo:function(){return{title:"".concat(this.$t("logs.title")," - Kitsu")}}},g=k,y=(s("6fac"),s("0c7c")),C=Object(y["a"])(g,n,r,!1,null,"7a19f047",null),j=C.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt1"},[s("p",{staticClass:"flexrow"},[s("em",{staticClass:"flexrow-item"},[t._v(t._s(t.$t("logs.preview_files.explaination")))]),s("span",{staticClass:"filler"}),s("button-simple",{staticClass:"flexrow-item",attrs:{icon:"refresh"},on:{click:t.reload}})],1),0!==t.previewFiles.length||t.previewFilesLoading?[s("preview-file-list",{attrs:{"preview-files":t.previewFiles,"is-loading":t.previewFilesLoading},on:{"mark-broken-clicked":t.markBrokenClicked}})]:[t._v(" "+t._s(t.$t("logs.preview_files.empty_list"))+" ")]],2)},T=[],O=s("1da1"),F=(s("96cf"),s("4de4"),s("7db0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list"},[s("div",{staticStyle:{overflow:"hidden"}},[s("table",{ref:"headerWrapper",staticClass:"datatable"},[s("thead",{staticClass:"datatable-head"},[s("tr",{staticClass:"datatable-row-header"},[s("th",{staticClass:"date"},[t._v(" "+t._s(t.$t("logs.preview_files.date"))+" ")]),s("th",{staticClass:"production"},[t._v(" "+t._s(t.$t("logs.preview_files.production"))+" ")]),s("th",{staticClass:"entity-name"},[t._v(" "+t._s(t.$t("logs.preview_files.entity_name"))+" ")]),s("th",{staticClass:"task-type"},[t._v(" "+t._s(t.$t("logs.preview_files.task_type_id"))+" ")]),s("th",{staticClass:"revision"},[t._v(" "+t._s(t.$t("logs.preview_files.revision"))+" ")]),s("th",{staticClass:"status"},[t._v(" "+t._s(t.$t("logs.preview_files.status"))+" ")]),s("th",{staticClass:"end-cell"})])])])]),s("table-info",{attrs:{"is-loading":t.isLoading,"is-error":t.isError}}),t.previewFiles.length>0?s("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onBodyScroll,expression:"onBodyScroll"}]},[s("table",{staticClass:"datatable"},[s("tbody",{staticClass:"datatable-body"},t._l(t.previewFiles,(function(e){return s("tr",{key:e.id,staticClass:"datatable-row",on:{click:function(s){return t.redirectToTask(s,e)}}},[s("td",{staticClass:"date"},[t._v(" "+t._s(t.formatDate(e.created_at))+" ")]),s("td",{staticClass:"production"},[s("production-name-cell",{attrs:{entry:t.productionMap.get(e.project_id)}})],1),s("td",{staticClass:"entity-name"},[t._v(" "+t._s(e.full_entity_name)+" ")]),s("task-type-name",{staticClass:"task-type",attrs:{"task-type":t.taskTypeMap.get(e.task_type_id)}}),s("td",{staticClass:"revision"},[t._v(" "+t._s(e.revision)+" ")]),s("td",{staticClass:"status",attrs:{"data-status":e.status}},[t._v(" "+t._s(e.status)+" ")]),s("td",{staticClass:"end-cell has-text-right"},["processing"===e.status?s("button-simple",{staticClass:"mark-broken-button",attrs:{text:"Mark as broken"},on:{click:function(s){return t.$emit("mark-broken-clicked",e.id)}}}):t._e()],1)],1)})),0)])]):t._e()],1)}),$=[],E=s("31f2"),L=s("9d8b"),D=s("e60b"),B=s("09a4"),M=s("58f5"),P={name:"entity-task-list",mixins:[E["a"]],components:{ButtonSimple:b["a"],ProductionNameCell:B["a"],TableInfo:D["a"],TaskTypeName:M["a"]},props:{previewFiles:{type:Array,default:function(){return[]}},isLoading:{type:Boolean,default:!1},isError:{type:Boolean,default:!1}},data:function(){return{currentTask:null}},computed:Object(c["a"])({},Object(o["c"])(["personMap","productionMap","taskTypeMap"])),methods:Object(c["a"])(Object(c["a"])({},Object(o["b"])(["loadTask","markBroken"])),{},{onBodyScroll:function(t,e){this.$refs.headerWrapper.style.left="-".concat(e.scrollLeft,"px")},redirectToTask:function(t,e){var s=this;return Object(O["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("mark-broken-button button"!==t.target.parentNode.className&&"mark-broken-button button"!==t.target.className){a.next=2;break}return a.abrupt("return");case 2:return a.next=4,s.loadTask({taskId:e.task_id});case 4:return i=a.sent,a.abrupt("return",s.$router.push(Object(L["f"])(i,i.project,"tvshow"===i.project.production_type,i.episode,s.taskTypeMap)));case 6:case"end":return a.stop()}}),a)})))()}})},A=P,N=(s("b372"),Object(y["a"])(A,F,$,!1,null,"c0f66024",null)),R=N.exports,S={name:"PreviewFiles",mixins:[f["a"]],components:{ButtonSimple:b["a"],PreviewFileList:R},data:function(){return{previewFilesLoading:!0,previewFiles:[]}},computed:Object(c["a"])(Object(c["a"])({},Object(o["c"])(["personMap","taskTypeMap","user"])),{},{displayedPreviewFiles:function(){return this.previewFiles.filter((function(t){return"ready"!==t.status}))}}),methods:Object(c["a"])(Object(c["a"])({},Object(o["b"])(["getTask","getRunningPreviewFiles","markPreviewFileAsBroken"])),{},{reload:function(){var t=this;return Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.previewFiles=[],t.previewFilesLoading=!0,e.next=4,t.getRunningPreviewFiles();case 4:t.previewFiles=e.sent,t.previewFilesLoading=!1;case 6:case"end":return e.stop()}}),e)})))()},markBrokenClicked:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=e.previewFiles.find((function(e){return e.id===t})),a.status="broken",s.next=4,e.markPreviewFileAsBroken(t);case 4:case"end":return s.stop()}}),s)})))()}}),mounted:function(){this.reload()}},q=S,z=(s("716e"),Object(y["a"])(q,x,T,!1,null,"3783243f",null)),I=z.exports,J={name:"logs",components:{Events:j,PreviewFiles:I},data:function(){return{activeTab:"events"}},mounted:function(){this.$route.query.tab&&(this.activeTab=this.$route.query.tab)},computed:{},methods:{isActiveTab:function(t){return this.activeTab===t}},watch:{activeTab:function(){this.$route.query.tab!==this.activeTab&&this.$router.push({query:{tab:this.activeTab}})}}},W=J,K=(s("5eb8"),Object(y["a"])(W,a,i,!1,null,"73999c28",null));e["default"]=K.exports}}]);
//# sourceMappingURL=chunk-65ec408f.6ffbb91b.js.map