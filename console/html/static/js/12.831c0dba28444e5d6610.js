webpackJsonp([12],{"F8/f":function(t,a){},aNZI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("EbL2"),l={name:"alarm",data:function(){return{resData:{loading:!0,page:{pageSizes:[10,20,30,40],pageNo:1,pageSize:10,totalRecord:0,totalPage:1},resLists:[]},typeVal:"",typeList:["Meta Partition List"],ip:"",h3Txt:""}},computed:{crumbInfo:function(){return this.ip}},methods:{handleSizeChange:function(t){this.resData.page.pageSize=t,this.resData.page.pageNo=1,this.handleCurrentChange(1)},handleCurrentChange:function(t){this.resData.page.pageNo=t;var a=(t-1)*this.resData.page.pageSize,e=t*this.resData.page.pageSize;this.resData.resLists=this.storageLists.slice(a,e)},queryList:function(){var t=this,a=this;a.resData.loading=!0;var e={addr:this.ip},l="data"===this.h3Txt?"dataNodeGet":"metaNodeGet";this.apollo.query(this.url.cluster,s.a[l],e).then(function(e){if(a.resData.loading=!1,e){var s=e.data;"data"===t.h3Txt?(t.storageLists=s.dataNodeGet.dataPartitionReports,t.resData.page.totalRecord=s.dataNodeGet.dataPartitionReports.length):(t.storageLists=s.metaNodeGet.metaPartitionInfos,t.resData.page.totalRecord=s.metaNodeGet.metaPartitionInfos.length),t.handleCurrentChange(1)}}).catch(function(t){a.resData.loading=!1,console.log(t)})}},mounted:function(){var t=this.$route.query;this.ip=t.ip,this.h3Txt=t.type,this.queryList()}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("crumb",{attrs:{crumbInfo:t.crumbInfo}}),t._v(" "),e("div",{staticClass:"cluster alarm"},[t._v("\n    "+t._s(t.h3Txt)+" Partition List\n    "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.resData.loading,expression:"resData.loading"}],staticClass:"data-block"},["data"===t.h3Txt?e("el-table",{staticClass:"mt20",staticStyle:{width:"100%"},attrs:{data:t.resData.resLists}},[e("el-table-column",{attrs:{type:"index",label:"#"}}),t._v(" "),e("el-table-column",{attrs:{prop:"partitionID",label:"Partiton ID"}}),t._v(" "),e("el-table-column",{attrs:{prop:"volName",label:"Volume "}}),t._v(" "),e("el-table-column",{attrs:{prop:"total",label:"Total"}}),t._v(" "),e("el-table-column",{attrs:{prop:"used",label:"Used"}}),t._v(" "),e("el-table-column",{attrs:{prop:"diskPath",label:"DiskPath"}}),t._v(" "),e("el-table-column",{attrs:{prop:"isLeader",label:"Leader"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.isLeader))])]}}],null,!1,2025729776)}),t._v(" "),e("el-table-column",{attrs:{prop:"extentCount",label:"Extent Count"}}),t._v(" "),e("el-table-column",{attrs:{prop:"needCompare",label:"Need Compare"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.needCompare))])]}}],null,!1,631425820)})],1):e("el-table",{staticClass:"mt20",staticStyle:{width:"100%"},attrs:{data:t.resData.resLists}},[e("el-table-column",{attrs:{type:"index",label:"#"}}),t._v(" "),e("el-table-column",{attrs:{prop:"partitionID",label:"Partiton ID"}}),t._v(" "),e("el-table-column",{attrs:{prop:"volName ",label:"Volume "}}),t._v(" "),e("el-table-column",{attrs:{prop:"start",label:"Start"}}),t._v(" "),e("el-table-column",{attrs:{prop:"end",label:"End"}}),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"Status"}}),t._v(" "),e("el-table-column",{attrs:{prop:"isLeader",label:"Leader"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[t._v(t._s(a.row.isLeader))])]}}])})],1),t._v(" "),e("div",{staticClass:"clearfix mt20"},[e("el-pagination",{staticClass:"fr",attrs:{"page-sizes":t.resData.page.pageSizes,"page-size":t.resData.page.pageSize,layout:"sizes, prev, pager, next",total:t.resData.page.totalRecord},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),e("span",{staticClass:"fr page-tips pr10"},[t._v("Each page shows")])],1)],1)])],1)},staticRenderFns:[]};var n=e("C7Lr")(l,r,!1,function(t){e("F8/f")},"data-v-50347585",null);a.default=n.exports}});
//# sourceMappingURL=12.831c0dba28444e5d6610.js.map