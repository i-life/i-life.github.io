webpackJsonp([1],{505:function(e,t,n){n(511);var r=n(182)(n(510),n(516),null,null);r.options.__file="/Users/zhongzhengguan/WorkStation/VueDemo/src/views/users.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] users.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},510:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(42),i=n(183),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default={data:function(){var e=this;return{current:1,pageSize:10,columns:[{title:"序号",width:80,align:"center",render:function(t,n){return t("span",parseInt((e.current-1)*e.pageSize)+n.row._index+1)}},{title:"UserName",key:"username",sortable:!0},{title:"DisplayName",key:"name",sortable:!0},{title:"BirthDay",key:"birth"},{title:"操作",width:80,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"error",size:"small"},on:{click:function(){e.removeItem(n.index)}}},"删除")])}}]}},computed:a({data:function(){var e=(this.current-1)*this.pageSize;return this.user.all.slice(e,e+this.pageSize)},total:function(){return this.user.all.length},pageCount:function(){var e=parseInt(this.total%this.pageSize),t=parseInt(this.total/this.pageSize);return e>0||0===t?t+1:t}},n.i(r.b)(["user"])),mounted:function(){var e=this;i.a.user.users().then(function(t){e.$store.dispatch("updateUser",t)},function(t){e.$Message.error(t)})},methods:{changePageIndex:function(e){this.current=e},changePageSize:function(e){this.pageSize=e},addNewUser:function(){var e=this;this.$store.dispatch("addNewUser").then(function(){e.current=e.pageCount})},removeItem:function(e){var t=this;this.$store.dispatch("removeUser",e).then(function(){t.current>t.pageCount&&(t.current=t.pageCount)})}}}},511:function(e,t){},516:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("Button",{staticStyle:{margin:"10px"},on:{click:e.addNewUser}},[e._v("Add New")])],1),e._v(" "),n("Table",{attrs:{border:"",stripe:"",size:"small",columns:e.columns,data:e.data}}),e._v(" "),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{total:e.total,current:e.current,"page-size":e.pageSize},on:{"on-change":e.changePageIndex,"on-page-size-change":e.changePageSize}})],1)])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});