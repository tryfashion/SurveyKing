(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7562],{34713:function(pn,ae,n){"use strict";n.r(ae),n.d(ae,{Project:function(){return ye},ProjectContext:function(){return K},default:function(){return cn}});var Sn=n(14781),Ie=n(93286),An=n(59250),L=n(13013),Dn=n(57663),N=n(71577),Bn=n(36017),O=n(35247),In=n(13062),Pe=n(71230),Pn=n(89032),Te=n(15746),Tn=n(88983),W=n(66253),Nn=n(34792),I=n(48086),On=n(47673),X=n(4107),kn=n(17462),le=n(76772),Rn=n(30887),V=n(28682),v=n(11849),g=n(94657),Mn=n(71194),P=n(50146),c=n(67294),Ne=n(99884),C=n(3980),se=n(23156),Oe=n(15873),b=n(57119),ke=n(18401),Re=n(34707),re=n(49101),Me=n(99937),oe=n(80937),ze=n(80129),ie=n.n(ze),ce=n(51615),w=n(73727),zn=n(54421),q=n(38272),Ln=n(58024),Le=n(91894),Vn=n(54029),de=n(79166),Ve=n(83279),Un=n(71153),U=n(60331),$n=n(13254),fe=n(14277),Ue=n(8212),$e=n(92570),Ke=n(57820),Je=n(24616),ve=n(44545),A=n(42285),Ge=n(92977),e=n(85893);function Ye(Z){var d=Z.project,m=(0,c.useContext)(K),r=m.deleteProject,E=m.editName;return(0,e.jsx)("div",{style:{width:230,marginLeft:8},onClick:function(){A.m8.push("/project/".concat(d.id))},children:(0,e.jsxs)("div",{className:"folder-box",style:{marginTop:14},children:[(0,e.jsx)("div",{className:"folder-wrap",children:(0,e.jsxs)("button",{className:"folder",children:[(0,e.jsx)("i",{className:"folder-page"}),(0,e.jsx)("i",{className:"folder-page-add"}),(0,e.jsx)("i",{className:"folder-cover"})]})}),(0,e.jsxs)("div",{className:"folder-info",children:[(0,e.jsx)("div",{className:"folder-name",children:(0,e.jsx)("button",{title:d.name,className:"folder-title",children:d.name})}),(0,e.jsxs)("div",{className:"folder-statistics",children:[(0,e.jsxs)("span",{className:"total",children:[d.total," \u4E2A\u95EE\u5377"]}),(0,e.jsx)("button",{className:"morebtn",onClick:function(o){return o.stopPropagation()},children:(0,e.jsx)(L.Z,{trigger:["click"],overlay:(0,e.jsx)(V.Z,{items:[{key:"1",label:(0,e.jsx)("a",{onClick:function(o){E(d)},children:"\u91CD\u547D\u540D"})},{key:"2",label:(0,e.jsx)("a",{onClick:function(o){r(d)},children:"\u79FB\u52A8\u5230\u56DE\u6536\u7AD9"})}]}),children:(0,e.jsx)(Ge.Z,{})})})]})]})]})})}var He=(0,oe.Pi)(function(Z){var d=Z.moreMenu,m=(0,C.ok)(),r=m.loading,E=m.projects,f=(0,C.dD)(),o=function(s,u,t){s.stopPropagation(),t!=="more"&&A.m8.push("/survey/".concat(u.id,"/").concat(t,"?mode=").concat(u.mode||"survey"))};if(E.length===0)return(0,e.jsx)(fe.Z,{image:fe.Z.PRESENTED_IMAGE_SIMPLE,imageStyle:{height:60},description:(0,e.jsx)("span",{children:"\u5F53\u524D\u8FD8\u6CA1\u6709\u521B\u5EFA\u95EE\u5377"})});var F=function(s){return s==="exam"?(0,e.jsx)(U.Z,{color:"red",children:"\u8003\u8BD5"}):(0,e.jsx)(U.Z,{color:"blue",children:"\u95EE\u5377"})};return(0,e.jsx)(q.ZP,{rowKey:"id",className:"survey-home-content",loading:r,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:6},dataSource:(0,Ve.Z)(E),renderItem:function(s){return s&&s.id?s.mode==="folder"?(0,e.jsx)(Ye,{project:s}):(0,e.jsx)(q.ZP.Item,{children:(0,e.jsx)(Le.Z,{hoverable:!0,style:{width:f?void 0:240},actions:[(0,e.jsx)(N.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(Ue.Z,{onClick:function(t){return o(t,s,"edit")}},"edit")}),(0,e.jsx)(N.Z,{shape:"circle",size:"small",icon:(0,e.jsx)($e.Z,{onClick:function(t){return o(t,s,"data")}},"data")}),(0,e.jsx)(N.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(Ke.Z,{onClick:function(t){return o(t,s,"report")}},"report")}),(0,e.jsx)(N.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(Je.Z,{onClick:function(t){return o(t,s,"setting")}},"setting")}),(0,e.jsx)(N.Z,{shape:"circle",size:"small",icon:(0,e.jsx)(L.Z,{overlay:d(s),trigger:["click"],children:(0,e.jsx)(ve.Z,{onClick:function(t){return o(t,s,"more")}},"ellipsis")})})],children:(0,e.jsxs)("div",{onClick:function(){return A.m8.push("/survey/".concat(s.id,"?mode=").concat(s.mode||"survey"))},children:[(0,e.jsxs)("div",{className:"card-header",children:[(0,e.jsx)("span",{className:"survey-title",title:s.name,children:s.name}),F(s.mode)]}),(0,e.jsxs)("div",{className:"card-content",children:[(0,e.jsx)("div",{className:"publish-status",children:s.setting.status===1?(0,e.jsx)(de.Z,{status:"processing",text:"\u6536\u96C6\u4E2D",className:"yes"}):(0,e.jsx)(de.Z,{status:"warning",text:"\u672A\u53D1\u5E03",className:"no"})}),(0,e.jsxs)("div",{className:"total",children:[(0,e.jsx)("span",{children:s.total}),"\u4EFD\u6570\u636E"]})]})]})})},s.id):(0,e.jsx)(q.ZP.Item,{children:(0,e.jsxs)(N.Z,{type:"dashed",className:"newButton",onClick:function(){return A.m8.push("/survey/new")},children:[(0,e.jsx)(re.Z,{})," \u65B0\u589E\u95EE\u5377"]})})}})}),Qe=He,Kn=n(49111),me=n(19650),Jn=n(66456),_=n(1670),We=n(3182),Xe=n(94043),he=n.n(Xe),be=n(16894),we=function(d){var m=d.onCancel,r=(0,c.useRef)(),E=(0,c.useState)([]),f=(0,g.Z)(E,2),o=f[0],F=f[1],h=[{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"name",ellipsis:!0},{title:"\u6570\u636E\u6761\u6570",dataIndex:"total"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createAt"},{title:"\u5220\u9664\u65F6\u95F4",dataIndex:"updateAt"}];return(0,e.jsx)(P.Z,{visible:!0,onCancel:m,maskClosable:!1,width:750,footer:!1,children:(0,e.jsx)(be.ZP,{columns:h,bordered:!0,actionRef:r,request:(0,We.Z)(he().mark(function s(){var u;return he().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,C.hi.getDeletedProject();case 2:return u=a.sent,console.log(u),a.abrupt("return",{success:!0,data:u,total:u==null?void 0:u.length});case 5:case"end":return a.stop()}},s)})),columnsState:{persistenceKey:"recycle",persistenceType:"localStorage"},rowSelection:{selections:[_.Z.SELECTION_ALL,_.Z.SELECTION_INVERT],defaultSelectedRowKeys:[],onChange:function(u){F(u)}},tableAlertRender:function(u){var t=u.selectedRowKeys,a=u.selectedRows,i=u.onCleanSelected;return(0,e.jsx)(me.Z,{size:24,children:(0,e.jsxs)("span",{children:["\u5DF2\u9009 ",t.length," \u9879",(0,e.jsx)("a",{style:{marginLeft:8},onClick:i,children:"\u53D6\u6D88\u9009\u62E9"})]})})},tableAlertOptionRender:function(){return(0,e.jsxs)(me.Z,{size:16,children:[(0,e.jsx)("a",{onClick:function(){P.Z.confirm({title:"\u5F7B\u5E95\u5220\u9664\u95EE\u5377",content:"\u786E\u5B9A\u5C06\u9009\u4E2D\u7684 ".concat(o.length," \u4E2A\u95EE\u5377\u5F7B\u5E95\u5220\u9664\u5417\uFF1F\u5220\u9664\u4E4B\u540E\u5C06\u65E0\u6CD5\u627E\u56DE"),onOk:function(){C.hi.destroyProject(o).then(function(){var a,i,j;(a=r.current)===null||a===void 0||a.reload(),(i=r.current)===null||i===void 0||(j=i.clearSelected)===null||j===void 0||j.call(i)})},okType:"danger",okText:"\u5220\u9664",cancelText:"\u53D6\u6D88"})},children:"\u5F7B\u5E95\u5220\u9664"}),(0,e.jsx)("a",{onClick:function(){P.Z.confirm({title:"\u6062\u590D\u95EE\u5377",content:"\u786E\u5B9A\u5C06\u9009\u4E2D\u7684 ".concat(o.length," \u4E2A\u95EE\u5377\u6062\u590D\u5417\uFF1F"),onOk:function(){C.hi.restoreProject(o).then(function(){var a,i,j;(a=r.current)===null||a===void 0||a.reload(),(i=r.current)===null||i===void 0||(j=i.clearSelected)===null||j===void 0||j.call(i)})},okText:"\u6062\u590D",cancelText:"\u53D6\u6D88"})},children:"\u6062\u590D"})]})},rowKey:"id",pagination:!1,search:!1,dateFormatter:"string",headerTitle:"\u56DE\u6536\u7AD9",toolBarRender:function(){return[]}})})},Gn=n(43185),xe=n(32620),Ce=n(43347),qe=xe.Z.Dragger,_e=function(d){var m=d.onCancel,r=d.parentId,E=(0,c.useState)(!1),f=(0,g.Z)(E,2),o=f[0],F=f[1],h=(0,c.useState)(),s=(0,g.Z)(h,2),u=s[0],t=s[1],a=(0,c.useState)([]),i=(0,g.Z)(a,2),j=i[0],D=i[1],ne=(0,c.useState)(!1),J=(0,g.Z)(ne,2),M=J[0],te=J[1],G={multiple:!1,accept:".xlsx",beforeUpload:function(B){return D([B]),!1},onRemove:function(){D([])},maxCount:1};return(0,e.jsxs)(P.Z,{visible:!0,title:"\u901A\u8FC7Excel\u5BFC\u5165\u95EE\u5377",okText:M?"\u8DF3\u8F6C":"\u5BFC\u5165",onOk:function(){if(M)A.m8.push("/survey/".concat(u,"/data?mode=survey"));else{if(j.length===0){I.default.error("\u8BF7\u9009\u62E9\u6587\u4EF6");return}F(!0),C.hi.upload("/api/answers/upload",{file:j[0],autoSchema:!0,parentId:r},function(B){}).then(function(B){B.success?(I.default.success("\u5BFC\u5165\u6210\u529F\uFF0C\u70B9\u51FB\u8DF3\u8F6C"),t(B.data.projectId),te(!0)):I.default.error(B.message),F(!1)})}},okButtonProps:{loading:o},confirmLoading:o,onCancel:m,children:[(0,e.jsxs)(qe,(0,v.Z)((0,v.Z)({},G),{},{disabled:M,children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(Ce.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u8005\u62D6\u62FDExcel\u6587\u4EF6\u5230\u6B64\u5904"})]})),(0,e.jsx)("div",{style:{marginTop:10},children:(0,e.jsx)(le.Z,{message:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:"1. excel \u7B2C\u4E00\u884C\u4F1A\u88AB\u89E3\u6790\u4E3A\u95EE\u9898\u6807\u9898"}),(0,e.jsx)("div",{children:"2. excel \u540D\u79F0\u4F1A\u88AB\u89E3\u6790\u4E3A\u95EE\u5377\u540D\u79F0"}),(0,e.jsx)("div",{children:"3. \u6240\u6709\u9898\u76EE\u9ED8\u8BA4\u5C06\u88AB\u89E3\u6790\u6210\u586B\u7A7A\u9898"}),(0,e.jsx)("div",{children:"4. \u5BFC\u5165\u5B8C\u6BD5\u53EF\u4EE5\u5728\u7F16\u8F91\u9875\u9762\u7EE7\u7EED\u5BF9\u95EE\u5377\u8FDB\u884C\u7F16\u8F91"})]}),type:"info"})})]})},en=xe.Z.Dragger,nn=function(d){var m=d.onCancel,r=(0,c.useState)(""),E=(0,g.Z)(r,2),f=E[0],o=E[1],F={multiple:!1,accept:".json",beforeUpload:function(s){var u=new FileReader;return u.readAsText(s,"UTF-8"),u.onload=function(t){try{var a=JSON.parse(t.target.result);o(a)}catch(i){I.default.error("\u6A21\u677F\u89E3\u6790\u5931\u8D25")}},u.onerror=function(){I.default.error("\u6A21\u677F\u8BFB\u53D6\u5931\u8D25")},!1}};return(0,e.jsx)(P.Z,{visible:!0,title:"\u901A\u8FC7\u6A21\u677F\u5BFC\u5165\u95EE\u5377(JSON\u6A21\u677F)",okText:"\u5BFC\u5165",onOk:function(){setTimeout(function(){localStorage.setItem("temp-template",JSON.stringify(f)),A.m8.push("/survey/new?fromTemplate")},20)},onCancel:m,children:(0,e.jsxs)(en,(0,v.Z)((0,v.Z)({},F),{},{children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(Ce.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u8005\u62D6\u62FD\u6A21\u677F\u6587\u4EF6\u5230\u6B64\u5904"})]}))})},Yn=n(48736),tn=n(27049),un=n(16165),an=n(77613),ln=function(){return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"32",height:"32",children:[(0,e.jsx)("path",{d:"M938.666667 464.592593h-853.333334v-265.481482c0-62.577778 51.2-113.777778 113.777778-113.777778h128.948148c15.17037 0 28.444444 3.792593 41.718519 11.377778l98.607407 64.474074h356.503704c62.577778 0 113.777778 51.2 113.777778 113.777778v189.62963z",fill:"#3A69DD","p-id":"7352"}),(0,e.jsx)("path",{d:"M805.925926 398.222222h-587.851852v-125.155555c0-24.651852 20.859259-45.511111 45.511111-45.511111h496.82963c24.651852 0 45.511111 20.859259 45.511111 45.511111V398.222222z",fill:"#D9E3FF","p-id":"7353"}),(0,e.jsx)("path",{d:"M843.851852 417.185185h-663.703704v-98.607407c0-28.444444 22.755556-53.096296 53.096296-53.096297h559.407408c28.444444 0 53.096296 22.755556 53.096296 53.096297V417.185185z",fill:"#FFFFFF","p-id":"7354"}),(0,e.jsx)("path",{d:"M786.962963 938.666667h-549.925926c-83.437037 0-151.703704-68.266667-151.703704-151.703704V341.333333s316.681481 37.925926 430.45926 37.925926c189.62963 0 422.874074-37.925926 422.874074-37.925926v445.62963c0 83.437037-68.266667 151.703704-151.703704 151.703704z",fill:"#5F7CF9","p-id":"7355"}),(0,e.jsx)("path",{d:"M559.407407 512h-75.851851c-20.859259 0-37.925926-17.066667-37.925926-37.925926s17.066667-37.925926 37.925926-37.925926h75.851851c20.859259 0 37.925926 17.066667 37.925926 37.925926s-17.066667 37.925926-37.925926 37.925926z",fill:"#F9D523","p-id":"7356"})]})},sn=(0,an.P)(function(Z){var d=Z.moreMenu,m=(0,c.useContext)(K),r=m.deleteProject,E=m.editName,f=(0,C.ok)(),o=f.loading,F=f.projects,h=function(t,a){return{onClick:function(){t.mode==="folder"?A.m8.push("/project/".concat(t.id)):a==="name"?A.m8.push("/survey/".concat(t.id,"/edit?mode=").concat(t.mode||"survey")):a==="total"?A.m8.push("/survey/".concat(t.id,"/data?mode=").concat(t.mode||"survey")):A.m8.push("/survey/".concat(t.id,"?mode=").concat(t.mode||"survey"))}}},s=[{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"name",onCell:function(t){return h(t,"name")},render:function(t,a){return a.mode==="folder"?(0,e.jsxs)("span",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(un.Z,{component:ln,style:{marginRight:5,margin:"-6px 5px -6px 0"}}),t]}):t}},{title:"\u9879\u76EE\u72B6\u6001",dataIndex:"status",onCell:function(t){return h(t,"status")},render:function(t,a){var i,j=(i=a.setting)===null||i===void 0?void 0:i.status;return j===void 0?"":j===0?(0,e.jsx)(U.Z,{color:"warning",children:"\u672A\u5F00\u59CB"}):(0,e.jsx)(U.Z,{color:"processing",children:"\u6536\u96C6\u4E2D"})}},{title:"\u7C7B\u578B",dataIndex:"mode",render:function(t){return t==="exam"?"\u8003\u8BD5":t==="survey"?"\u95EE\u5377":""},onCell:function(t){return h(t,"status")}},{title:"\u7B54\u5377\u6570",dataIndex:"total",onCell:function(t){return h(t,"total")},render:function(t,a){return a.mode==="folder"?"":t}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createAt",onCell:function(t){return h(t,"createAt")}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateAt",onCell:function(t){return h(t,"updateAt")}},{title:"\u64CD\u4F5C",dataIndex:"operate",render:function(t,a){return a.mode==="folder"?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("a",{onClick:function(){return E(a)},children:"\u91CD\u547D\u540D"},"rename"),(0,e.jsx)(tn.Z,{type:"vertical"}),(0,e.jsx)("a",{onClick:function(){return r(a)},children:"\u5220\u9664"},"delete")]}):(0,e.jsx)(L.Z,{overlay:d(a),trigger:["click"],children:(0,e.jsx)(ve.Z,{},"ellipsis")})}}];return(0,e.jsx)("div",{children:(0,e.jsx)(_.Z,{dataSource:F,loading:o,columns:s,rowKey:"id",pagination:!1,rowClassName:function(){return"project-list-row"}})})}),rn=sn,Hn=n(9715),ee=n(86835);function on(Z){var d=Z.onCancel,m=Z.onOk,r=Z.current,E=ee.Z.useForm(),f=(0,g.Z)(E,1),o=f[0],F=function(s){console.log("Finish:",s)};return(0,e.jsx)(P.Z,{title:r?"\u4FEE\u6539\u6587\u4EF6\u5939\u540D\u79F0":"\u521B\u5EFA\u6587\u4EF6\u5939",visible:!0,maskClosable:!1,onCancel:d,onOk:function(){o.validateFields().then(function(s){r?C.hi.updateProject({id:r.id,name:s.name}).then(function(u){u.success?m():I.default.error(u.message)}):C.hi.saveProject({mode:"folder",name:s.name}).then(function(u){u.success?m():I.default.error(u.message)})})},children:(0,e.jsx)(ee.Z,{form:o,onFinish:F,initialValues:{name:r==null?void 0:r.name},children:(0,e.jsx)(ee.Z.Item,{name:"name",rules:[{required:!0,message:"\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A!"}],children:(0,e.jsx)(X.Z,{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",style:{maxWidth:320}})})})})}var $=P.Z.confirm,Ee="home-content-type",ye=(0,oe.Pi)(function(Z){var d=(0,C.ok)(),m=(0,ce.UO)(),r=m.id,E=(0,c.useRef)(""),f=(0,c.useState)(localStorage.getItem(Ee)||"card"),o=(0,g.Z)(f,2),F=o[0],h=o[1],s=(0,c.useState)({current:1,pageSize:24}),u=(0,g.Z)(s,2),t=u[0],a=u[1],i=(0,c.useState)(),j=(0,g.Z)(i,2),D=j[0],ne=j[1],J=(0,c.useState)(!1),M=(0,g.Z)(J,2),te=M[0],G=M[1],Y=(0,c.useState)(!1),B=(0,g.Z)(Y,2),dn=B[0],ge=B[1],fn=(0,c.useState)(!1),je=(0,g.Z)(fn,2),vn=je[0],Fe=je[1],mn=(0,c.useState)(!1),Ze=(0,g.Z)(mn,2),hn=Ze[0],pe=Ze[1],xn=(0,c.useState)(),Se=(0,g.Z)(xn,2),ue=Se[0],H=Se[1],Cn=(0,c.useState)([]),Ae=(0,g.Z)(Cn,2),En=Ae[0],yn=Ae[1],Q=(0,ce.k6)();(0,c.useEffect)(function(){d.loadProjects((0,v.Z)((0,v.Z)({},t),{},{parentId:r}))},[t,d,r]);var De=function(){C.hi.loadProjects({mode:"folder",current:1,pageSize:1024}).then(function(l){yn(l.list)})};(0,c.useEffect)(function(){De()},[]),(0,c.useEffect)(function(){r&&C.hi.loadProject(r).then(function(x){x&&ne(x)})},[r]);var Be=function(l){return l.mode==="folder"?(0,e.jsx)(V.Z,{onClick:function(k){return k.domEvent.stopPropagation()},items:[{label:"\u91CD\u547D\u540D",key:"preview",onClick:function(){return window.open("/s/".concat(l.id))}}]}):(0,e.jsx)(V.Z,{items:[{key:"preview",label:"\u9884\u89C8"},{key:"rename",label:"\u91CD\u547D\u540D"},{key:"publish",label:"\u53D1\u5E03",style:{display:l.setting.status===0?"flex":"none"}},{key:"stop",label:"\u505C\u6B62",style:{display:l.setting.status===1?"flex":"none"}},{key:"moveOut",label:"\u79FB\u51FA\u6587\u4EF6\u5939",style:{display:l.parentId&&l.parentId!=="0"?"flex":"none"}},{key:"moveIn",label:"\u79FB\u52A8",style:{display:!l.parentId||l.parentId==="0"?"flex":"none"},children:En.map(function(y){return{label:y.name,key:y.id}})},{key:"download",label:"\u4E0B\u8F7D\u6A21\u677F"},{key:"copy",label:"\u590D\u5236"},{key:"delete",label:"\u5220\u9664"}],onClick:function(k){var S=k.key,z=k.keyPath,Qn=k.domEvent;S==="rename"?$({title:"\u95EE\u5377\u91CD\u547D\u540D",icon:void 0,content:(0,e.jsxs)("div",{children:[(0,e.jsx)(le.Z,{message:"\u95EE\u5377\u91CD\u547D\u540D\u6210\u529F\uFF0C\u7CFB\u7EDF\u5185\u5404\u5904\u5C06\u663E\u793A\u91CD\u547D\u540D\u6807\u9898\u3002\u6B64\u64CD\u4F5C\u4E0D\u5F71\u54CD\u516C\u5F00\u95EE\u5377\u540D\u79F0",type:"info",showIcon:!0}),(0,e.jsx)(X.Z,{style:{marginTop:10},onChange:function(p){return E.current=p.target.value},defaultValue:l.name})]}),okText:"\u786E\u8BA4",okType:"primary",cancelText:"\u53D6\u6D88",onOk:function(){new se.Uf(l.id).saveOrUpdateProject({name:E.current}).then(function(p){p.code===200&&a(function(R){return(0,v.Z)({},R)})})}}):S==="publish"?$({title:"\u786E\u5B9A\u53D1\u5E03\u5F53\u524D\u95EE\u5377?",icon:(0,e.jsx)(Oe.Z,{style:{color:"#1890ff"}}),content:"\u53EA\u6709\u53D1\u5E03\u7684\u95EE\u5377\u624D\u80FD\u6536\u96C6\u6570\u636E",okText:"\u53D1\u5E03",okType:"primary",cancelText:"\u53D6\u6D88",onOk:function(){C.hi.updateSetting({id:l.id,settingKey:"status",settingValue:1}).then(function(p){p.success&&a(function(R){return(0,v.Z)({},R)})})}}):S==="stop"?$({title:"\u786E\u5B9A\u505C\u6B62\u5F53\u524D\u95EE\u5377?",icon:(0,e.jsx)(b.Z,{}),content:"\u505C\u6B62\u4E4B\u540E\u95EE\u5377\u5C06\u4E0D\u80FD\u7EE7\u7EED\u6536\u96C6\u6570\u636E",okText:"\u505C\u6B62",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){C.hi.updateSetting({id:l.id,settingKey:"status",settingValue:0}).then(function(p){p.success&&a(function(R){return(0,v.Z)({},R)})})}}):S==="moveOut"?C.hi.updateProject({id:l.id,parentId:"0"}).then(function(T){T.success&&a(function(p){return(0,v.Z)({},p)})}):z.length>1&&z[1]==="moveIn"?C.hi.updateProject({id:l.id,parentId:z[0]}).then(function(T){T.success&&a(function(p){return(0,v.Z)({},p)})}):S==="delete"?$({title:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u95EE\u5377?",icon:(0,e.jsx)(b.Z,{}),content:"\u5220\u9664\u4E4B\u540E\u53EF\u4EE5\u5728\u56DE\u6536\u7AD9\u91CC\u9762\u627E\u56DE",okText:"\u5220\u9664",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){new se.Uf(l.id).deleteProject(l.id).then(function(p){p.code===200&&a(function(R){return(0,v.Z)({},R)})})}}):S==="preview"?window.open("/s/".concat(l.id)):S==="download"?(0,C.LR)("".concat(l.name,".sk.json"),JSON.stringify(l.survey)):S==="copy"&&setTimeout(function(){localStorage.setItem("temp-template",JSON.stringify(l.survey)),Q.push("/survey/new?fromTemplate")},20)}})},gn=function(l){H({type:"editName",current:l})},jn=function(l){P.Z.confirm({title:"\u79FB\u52A8\u5230\u56DE\u6536\u7AD9",content:"\u786E\u5B9A\u8981\u5C06\u6587\u4EF6\u5939 \u201C".concat(l.name,"\u201D \u79FB\u52A8\u5230\u56DE\u6536\u7AD9\u5417\uFF1F "),icon:(0,e.jsx)(b.Z,{}),okType:"danger",cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A",onOk:function(k){return C.hi.deleteProject(l.id).then(function(S){S.success?(k(),a(function(z){return(0,v.Z)({},z)})):I.default.error(S.message)}),!1}})},Fn=function(){return F==="card"?(0,e.jsx)(Qe,{moreMenu:Be}):(0,e.jsx)(rn,{moreMenu:Be})},Zn=(0,e.jsx)("div",{children:(0,e.jsx)(Pe.Z,{className:"survey-home-search",children:(0,e.jsxs)(Te.Z,{span:24,children:[(0,e.jsxs)(W.ZP.Group,{value:F,onChange:function(l){h(l.target.value),localStorage.setItem(Ee,l.target.value)},children:[(0,e.jsx)(W.ZP.Button,{value:"card",children:(0,e.jsx)(ke.Z,{})}),(0,e.jsx)(W.ZP.Button,{value:"list",children:(0,e.jsx)(Re.Z,{})})]}),(0,e.jsx)(X.Z.Search,{className:"search",placeholder:"\u641C\u7D22\u9879\u76EE\u540D\u79F0",onSearch:function(l){a(function(y){return(0,v.Z)((0,v.Z)({},y),{},{name:l})})}})]})})});return(0,e.jsx)(K.Provider,{value:{editName:gn,deleteProject:jn},children:(0,e.jsxs)(Me.ZP,{header:{title:D?D.name:"\u6211\u7684\u9879\u76EE",ghost:!0,breadcrumb:r?(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(O.Z.Item,{children:(0,e.jsx)(w.rU,{to:"/",children:"\u9996\u9875"})}),(0,e.jsx)(O.Z.Item,{children:(0,e.jsx)(w.rU,{to:"/project",children:"\u6211\u7684\u9879\u76EE"})}),(0,e.jsx)(O.Z.Item,{children:D==null?void 0:D.name})]}):(0,e.jsxs)(O.Z,{children:[(0,e.jsx)(O.Z.Item,{children:(0,e.jsx)(w.rU,{to:"/",children:"\u9996\u9875"})}),(0,e.jsx)(O.Z.Item,{children:"\u6211\u7684\u9879\u76EE"})]})},content:Zn,extra:[(0,e.jsx)(L.Z,{trigger:["click"],overlay:(0,e.jsx)(V.Z,{onClick:function(l){var y=l.key;y==="newFolder"?H({type:"editName"}):y==="survey"?Q.push("/survey/new?".concat(ie().stringify({parentId:r,mode:"survey"}))):y==="importJson"?G(!0):y==="exam"?Q.push("/survey/new?".concat(ie().stringify({parentId:r,mode:"exam"}))):y==="importText"?ge(!0):y==="importExcel"?Fe(!0):y==="recycle"&&pe(!0)},items:[{label:"\u95EE\u5377\u8C03\u67E5",key:"survey"},{label:"\u5728\u7EBF\u8003\u8BD5",key:"exam"},{label:"\u901A\u8FC7Excel\u5BFC\u5165(\u5FEB\u67E5)",key:"importExcel"},{label:"\u901A\u8FC7\u6587\u672C\u5BFC\u5165",key:"importText"},{label:"\u901A\u8FC7\u6A21\u677F\u5BFC\u5165",key:"importJson"},{label:"\u65B0\u5EFA\u6587\u4EF6\u5939",key:"newFolder",style:{display:D?"none":"flex"}},{label:"\u56DE\u6536\u7AD9",key:"recycle"}]}),placement:"bottomLeft",children:(0,e.jsx)(N.Z,{type:"primary",icon:(0,e.jsx)(re.Z,{}),size:"large",style:{width:200},children:"\u65B0\u5EFA"},"add")},"add")],children:[(0,e.jsxs)("div",{className:"survey-home",children:[Fn(),(0,e.jsx)("div",{className:"pagination-container",children:(0,e.jsx)(Ie.Z,{size:"small",current:t.current,pageSize:t.pageSize,total:d.total,showTotal:function(l){return"\u5171 ".concat(l," \u6761")},onChange:function(l){a(function(y){return(0,v.Z)((0,v.Z)({},y),{},{current:l})})}})})]}),te&&(0,e.jsx)(nn,{onCancel:function(){return G(!1)}}),ue&&ue.type==="editName"&&(0,e.jsx)(on,{onCancel:function(){return H(void 0)},current:ue.current,onOk:function(){H(void 0),De(),a(function(l){return(0,v.Z)({},l)})}}),vn&&(0,e.jsx)(_e,{onCancel:function(){return Fe(!1)}}),dn&&(0,e.jsx)(Ne.Z,{onClose:function(){return ge(!1)},okText:"\u521B\u5EFA\u9879\u76EE",mode:"survey",title:"\u6587\u672C\u5BFC\u5165\u95EE\u5377",defaultContent:`\u9879\u76EE\u6807\u9898
\u611F\u8C22\u60A8\u80FD\u62BD\u51FA\u51E0\u5206\u949F\u65F6\u95F4\u6765\u53C2\u52A0\u672C\u6B21\u7B54\u9898\uFF0C\u73B0\u5728\u6211\u4EEC\u5C31\u9A6C\u4E0A\u5F00\u59CB\u5427\uFF01\u3010\u6B22\u8FCE\u8BED\u3011

\u60A8\u7ECF\u5E38\u521B\u5EFA\u4EC0\u4E48\u7C7B\u578B\u7684\u9879\u76EE\uFF1F\u3010\u5355\u9009\u9898\u3011
\u95EE\u5377\u8C03\u7814
\u6295\u7968\u8BC4\u9009
\u6D4B\u8BC4\u8003\u8BD5

\u60A8\u4E86\u89E3\u8FC7\u54EA\u4E9B\u95EE\u5377\u7CFB\u7EDF\uFF1F\u3010\u591A\u9009\u9898\u3011
\u95EE\u5377\u7F51
\u95EE\u5377\u661F
\u91D1\u6570\u636E
\u5377\u738B

\u8BF7\u586B\u5199\u60A8\u7684\u95EE\u9898\u548C\u5EFA\u8BAE\u3010\u586B\u7A7A\u9898\u3011

\u8BF7\u586B\u5199\u60A8\u7684\u4E2A\u4EBA\u4FE1\u606F\uFF1F\u3010\u6A2A\u5411\u586B\u7A7A\u3011
\u59D3\u540D___\u5E74\u9F84___\u5C81
\u8054\u7CFB\u65B9\u5F0F____

\u5730\u533A\u3010\u7EA7\u8054\u9898\u3011
\u7701 \u5E02 \u53BF
\u5317\u4EAC\u5E02 \u6D77\u6DC0\u533A
\u5317\u4EAC\u5E02 \u897F\u57CE\u533A
\u6CB3\u5357\u7701 \u90D1\u5DDE\u5E02 \u7BA1\u57CE\u533A
\u6CB3\u5357\u7701 \u90D1\u5DDE\u5E02 \u9AD8\u65B0\u533A
\u6CB3\u5357\u7701 \u4FE1\u9633\u5E02 \u6D49\u6CB3\u533A
\u6CB3\u5357\u7701 \u4FE1\u9633\u5E02 \u7F8A\u5C71\u65B0\u533A`,onOk:function(l){setTimeout(function(){localStorage.setItem("temp-template",JSON.stringify(l)),Q.push("/survey/new?fromTemplate&mode=survey")},20)}}),hn&&(0,e.jsx)(we,{onCancel:function(){pe(!1),a(function(l){return(0,v.Z)({},l)})}})]})})}),cn=ye,K=(0,c.createContext)({})}}]);
