(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6420],{81319:function(vt,te,n){"use strict";n.r(te),n.d(te,{Overview:function(){return Ce},default:function(){return lt}});var ne=n(93224),k=n(11849),N=n(2824),a=n(67294),Ie=n(51615),Ze=n(69968),ae=n(8935),ke=[{key:"taskCenter",i:"taskCenter",tabs:[{key:"1",title:"\u5F85\u529E\u4E8B\u9879"},{key:"2",title:"\u5DF2\u529E\u4E8B\u9879"},{key:"3",title:"\u6284\u9001\u4E8B\u9879"},{key:"4",title:"\u6211\u53D1\u8D77\u7684"},{key:"5",title:"\u5168\u90E8\u6570\u636E"}],name:"taskCenter","data-grid":{x:0,y:0,w:12,h:2,i:"taskCenter"},widgetProps:{}},{key:"quickSetting",i:"quickSetting",name:"quickSetting",title:"\u7CFB\u7EDF\u8BBE\u7F6E","data-grid":{x:0,y:2,w:6,h:1,i:"quickSetting"}}],Ne=n(91512),Fe=n(68654),Te=n(54549),se=n(11628),P=n(68489),V=n(2299),Ee=n(69610),Ae=n(27361),pe=n.n(Ae),e=n(85893),De=function l(){var t=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(0,Ee.Z)(this,l),this._registry=void 0,this.registerComponent=function(u,d){t._registry[u]=d},this.getComponent=function(u){return pe()(t._registry,"".concat(u),function(d){return(0,e.jsxs)("div",{children:[u,"\u5BF9\u5E94\u7EC4\u4EF6\u672A\u6CE8\u518C"]})})},this._registry=s},Re=new De,J=Re,ft=a.createContext({}),$=n(21063),ie=n(18111),ht=n(71194),re=n(50146),mt=n(49111),le=n(19650),gt=n(59250),Pe=n(13013),xt=n(57663),z=n(71577),jt=n(30887),ce=n(54689),yt=n(34792),U=n(48086),Ct=n(18106),oe=n(67164),X=n(11075),ue=n(15873),q=n(73218),de=n(64072),Oe=n(44545),we=n(58491),Be=n(57254),ze=n(98244),Ue=n(99741),St=n(87593),ve=n(37636),It=n(22385),be=n(31097),Zt=n(94233),_=n(51890),Me=n(94184),fe=n.n(Me),We=n(89366),Le={save:"blue",agree:"green",refuse:"red",reject:"red",revoke:"red",transfer:"red",todo:"orange"},H=function(t){return(0,e.jsx)(be.Z,{placement:"bottom",title:(0,e.jsxs)("div",{style:{textAlign:"center",fontSize:12},children:[t.name,(0,e.jsx)("br",{}),t.email]}),children:t.avatar?(0,e.jsx)(_.C,{src:"/api/public/preview/".concat(t.avatar),size:22}):(0,e.jsx)(_.C,{icon:(0,e.jsx)(We.Z,{}),size:22})})},He=function(t){var s=function(){if(t.approvalType==="save"){var d;return(0,e.jsxs)(e.Fragment,{children:[t.auditUser&&(0,e.jsx)(H,(0,k.Z)({},t.auditUser)),(d=t.auditUser)===null||d===void 0?void 0:d.name," \u53D1\u8D77\u65B0\u7684"]})}else if(t.approvalType==="agree"){var i;return(0,e.jsxs)(e.Fragment,{children:[t.auditUser&&(0,e.jsx)(H,(0,k.Z)({},t.auditUser)),(i=t.auditUser)===null||i===void 0?void 0:i.name," \u5BA1\u6279\u901A\u8FC7"]})}else if(t.approvalType==="todo"){var m,r;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(_.C.Group,{maxCount:3,children:(m=t.waitAuditUserList)===null||m===void 0?void 0:m.filter(function(I){return!!I}).map(function(I){return(0,a.createElement)(H,(0,k.Z)((0,k.Z)({},I),{},{key:I.userId}))})}),(r=t.waitAuditUserList)===null||r===void 0?void 0:r.length,"\u6210\u5458\u5904\u7406\u4E2D..."]})}else if(t.approvalType==="refuse"){var S;return(0,e.jsxs)(e.Fragment,{children:[t.auditUser&&(0,e.jsx)(H,(0,k.Z)({},t.auditUser)),(S=t.auditUser)===null||S===void 0?void 0:S.name," \u5BA1\u6279\u62D2\u7EDD"]})}else if(t.approvalType==="rollback"){var x;return(0,e.jsxs)(e.Fragment,{children:[t.auditUser&&(0,e.jsx)(H,(0,k.Z)({},t.auditUser)),(x=t.auditUser)===null||x===void 0?void 0:x.name," \u56DE\u9000\u81F3 ",t.newActivityName]})}else if(t.approvalType==="revert"){var v;return(0,e.jsxs)(e.Fragment,{children:[t.auditUser&&(0,e.jsx)(H,(0,k.Z)({},t.auditUser)),(v=t.auditUser)===null||v===void 0?void 0:v.name," \u64A4\u9500\u5904\u7406"]})}};return(0,e.jsxs)(ve.Z.Item,{color:Le[t.approvalType]||"gray",children:[(0,e.jsx)("div",{className:"audit-time",children:t.createAt}),(0,e.jsxs)("div",{className:"record-item",children:[(0,e.jsx)("div",{className:"item-header",children:t.activityName}),(0,e.jsxs)("div",{className:"item-content",children:[(0,e.jsxs)("div",{className:"content-row",children:[(0,e.jsx)("span",{className:fe()("action",t.approvalType),children:s()}),(0,e.jsx)("span",{})]}),t.comment&&(0,e.jsx)("div",{className:"content-row",children:(0,e.jsx)("span",{className:"comment",children:t.comment})})]})]})]},t.id)},Ke=function(t){var s=t.processInstanceId,u=(0,a.useState)(),d=(0,N.Z)(u,2),i=d[0],m=d[1];return(0,a.useEffect)(function(){P.hi.getAuditRecord(s).then(function(r){m(r)})},[s]),(0,a.useEffect)(function(){var r=document.getElementsByClassName("ant-tabs-content-holder");r.length>0&&(r[0].scrollTop=r[0].scrollHeight)},[i]),(0,e.jsx)(ve.Z,{className:"audit-timeline",children:i==null?void 0:i.map(function(r){return(0,a.createElement)(He,(0,k.Z)((0,k.Z)({},r),{},{key:r.id||r.activityId}))})})},kt=n(47673),he=n(4107),Ve=he.Z.TextArea;function Qe(l){var t=(0,a.useState)(),s=(0,N.Z)(t,2),u=s[0],d=s[1];return(0,e.jsxs)(re.Z,{visible:!0,title:"\u786E\u8BA4",onOk:function(){return l.onOk(u)},onCancel:l.onCancel,okButtonProps:l.buttonProps,children:[(0,e.jsx)("div",{style:{fontWeight:"bold",marginBottom:10},children:"\u5904\u7406\u53CD\u9988"}),(0,e.jsx)(Ve,{placeholder:"\u5728\u6B64\u5904\u8F93\u5165\u5904\u7406\u53CD\u9988\uFF0C\u53EF\u4E0D\u586B\u76F4\u63A5\u63D0\u4EA4",value:u,onChange:function(m){return d(m.target.value)}})]})}var me=oe.Z.TabPane,M="task-edit-modal",Ye=(0,V.Pi)(function(l){var t=l.currentRecord,s=l.currIndex,u=l.total,d=l.onClose,i=l.onNav,m=l.taskType,r=(0,a.useState)(345),S=(0,N.Z)(r,2),x=S[0],v=S[1],I=(0,a.useRef)(null),O=(0,a.useState)(),w=(0,N.Z)(O,2),A=w[0],p=w[1],j=(0,a.useRef)(null),g=(0,a.useState)([]),F=(0,N.Z)(g,2),D=F[0],W=F[1],h=(0,a.useState)(),y=(0,N.Z)(h,2),c=y[0],o=y[1];(0,a.useEffect)(function(){P.hi.loadFlowSchema({activityId:t.activityId,projectId:t.projectId}).then(function(T){return p(T)})},[t]);var B=(0,a.useState)(!1),G=(0,N.Z)(B,2),R=G[0],C=G[1];(0,a.useEffect)(function(){var T,E=t.answer,f=t.attachment;(T=j.current)===null||T===void 0||T.setValues(E,f)},[t]);var L=function(){return A?(0,e.jsx)(Ue.O,{ref:j,schema:A,headerVisible:!1,footerVisible:!1,paginationVisible:!1,initialValues:t.answer,fieldPermission:t.fieldPermission}):(0,e.jsx)(e.Fragment,{})},Se=function(E){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i(E==="up"?s-1:s+1,f)},ct=function(){return(0,e.jsx)("div",{style:{position:"absolute",height:"100%",width:"100%",overflow:"hidden"},children:(0,e.jsxs)(oe.Z,{defaultActiveKey:"1",children:[(0,e.jsx)(me,{tab:"\u65E5\u5FD7",children:(0,e.jsx)(Ke,{processInstanceId:t.processInstanceId})},"1"),(0,e.jsx)(me,{tab:"\u7559\u8A00",children:"Content of Tab Pane 2"},"2")]})})},ot=function(){return(0,e.jsx)(ce.Z,{onClick:function(f){var Z,K=f.key;(Z=j.current)===null||Z===void 0||Z.submit().then(function(b){b?o({visible:!0,buttonProps:{type:"ghost",icon:(0,e.jsx)(X.Z,{})},callback:function(dt){C(!0),P.hi.approvalTask({answer:b.values,attachment:b.attachments,answerId:t.answerId,taskId:t.id,type:"rollback",activityId:t.activityId,comment:dt,projectId:t.projectId,processInstanceId:t.processInstanceId,newActivityId:K}).then(function(){U.default.success("\u5DF2\u56DE\u9000"),C(!1),o(void 0),i(s,!0)})}}):C(!1)})},children:D==null?void 0:D.map(function(E,f){return(0,e.jsx)(ce.Z.Item,{children:(0,e.jsx)("a",{children:f!==D.length-1?E.activityName:"\u53D1\u8D77\u4EBA"})},E.activityId)})})},ut=function(){return(0,e.jsxs)(le.Z,{children:[m===1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(z.Z,{type:"primary",loading:R,icon:(0,e.jsx)(ue.Z,{}),onClick:function(){var f;(f=j.current)===null||f===void 0||f.submit().then(function(Z){Z?o({visible:!0,buttonProps:{type:"primary",icon:(0,e.jsx)(ue.Z,{})},callback:function(b){C(!0),P.hi.approvalTask({answer:Z.values,attachment:Z.attachments,answerId:t.answerId,taskId:t.id,type:"agree",activityId:t.activityId,comment:b,projectId:t.projectId,processInstanceId:t.processInstanceId}).then(function(){U.default.success("\u5BA1\u6838\u901A\u8FC7"),C(!1),o(void 0),i(s,!0)})}}):C(!1)})},children:"\u901A\u8FC7"}),(0,e.jsx)(z.Z,{type:"primary",danger:!0,icon:(0,e.jsx)(q.Z,{}),loading:R,onClick:function(){var f;(f=j.current)===null||f===void 0||f.submit().then(function(Z){Z?o({visible:!0,buttonProps:{type:"primary",danger:!0,icon:(0,e.jsx)(q.Z,{})},callback:function(b){C(!0),P.hi.approvalTask({answer:Z.values,attachment:Z.attachments,answerId:t.answerId,taskId:t.id,type:"refuse",activityId:t.activityId,comment:b,projectId:t.projectId,processInstanceId:t.processInstanceId}).then(function(){U.default.success("\u5DF2\u62D2\u7EDD"),C(!1),o(void 0),i(s,!0)})}}):C(!1)})},children:"\u62D2\u7EDD"}),(0,e.jsx)(Pe.Z,{overlay:ot,placement:"topCenter",trigger:["click"],children:(0,e.jsx)(z.Z,{onClick:function(){P.hi.getRevertNodes(t.processInstanceId).then(function(f){f&&W(f)})},icon:(0,e.jsx)(X.Z,{}),loading:R,children:"\u56DE\u9000"})})]}),m===2&&t.status===1&&t.latest&&t.approvalType!=="revert"&&(0,e.jsx)(z.Z,{onClick:function(){var f;(f=j.current)===null||f===void 0||f.submit().then(function(Z){Z?o({visible:!0,buttonProps:{type:"primary",danger:!0,icon:(0,e.jsx)(q.Z,{})},callback:function(b){C(!0),P.hi.approvalTask({answer:Z.values,attachment:Z.attachments,answerId:t.answerId,taskId:t.id,type:"revert",activityId:t.activityId,newActivityId:t.activityId,comment:b,projectId:t.projectId,processInstanceId:t.processInstanceId}).then(function(){U.default.success("\u5DF2\u64A4\u56DE"),C(!1),o(void 0),i(s,!0)})}}):C(!1)})},icon:(0,e.jsx)(X.Z,{}),loading:R,children:"\u64A4\u56DE"}),m===4&&t.status===6&&(0,e.jsx)(z.Z,{onClick:function(){var f;(f=j.current)===null||f===void 0||f.submit().then(function(Z){Z?o({visible:!0,buttonProps:{type:"primary",icon:(0,e.jsx)(de.Z,{})},callback:function(b){C(!0),P.hi.approvalTask({answer:Z.values,attachment:Z.attachments,answerId:t.answerId,taskId:t.id,type:"save",activityId:t.activityId,comment:b,projectId:t.projectId,processInstanceId:t.processInstanceId}).then(function(){U.default.success("\u5DF2\u64A4\u56DE"),C(!1),o(void 0),i(s,!0)})}}):C(!1)})},icon:(0,e.jsx)(de.Z,{}),loading:R,children:"\u518D\u6B21\u63D0\u4EA4"}),(0,e.jsx)(z.Z,{onClick:function(){},icon:(0,e.jsx)(Oe.Z,{}),loading:R})]})};return(0,e.jsx)("div",{ref:I,className:"edit-data ",children:(0,e.jsxs)(re.Z,{visible:!0,maskClosable:!1,title:!1,width:900,onCancel:function(){return d()},className:"task-edit-modal",footer:!1,children:[(0,e.jsxs)("div",{style:{display:"flex"},children:[(0,e.jsxs)("div",{className:M+"-survey-container",style:{flex:1},children:[(0,e.jsx)("div",{className:M+"-survey-container-title",children:"\u6211\u7684\u5BA1\u6279"}),(0,e.jsx)("div",{className:M+"-survey-container-content",children:L()}),(0,e.jsxs)("div",{className:M+"-survey-container-footer",children:[(0,e.jsxs)("div",{className:"nav",children:[(0,e.jsxs)("span",{children:[s+1,"/",u]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(z.Z,{type:"text",shape:"circle",icon:(0,e.jsx)(we.Z,{}),disabled:s===0,onClick:function(){return Se("up")}}),(0,e.jsx)(z.Z,{type:"text",shape:"circle",icon:(0,e.jsx)(Be.Z,{}),disabled:s===u-1,onClick:function(){return Se("down")}})]})]}),ut()]})]}),(0,e.jsxs)("div",{className:M+"-metaInfo-container",style:{width:x},children:[(0,e.jsx)("div",{className:M+"-metaInfo-container-title"}),(0,e.jsx)("div",{className:M+"-metaInfo-container-content",children:ct()}),(0,e.jsx)("div",{className:M+"-metaInfo-container-resizer",style:{transform:x===0?"rotateY(180deg) translate3d(100%,-50%,0)":"translate3d(0,-50%,0)"},onClick:function(){v(x===0?350:0)},children:(0,e.jsx)(ze.Z,{})})]})]}),(c==null?void 0:c.visible)&&(0,e.jsx)(Qe,{onOk:function(E){return c.callback(E)},onCancel:function(){return o(void 0)},buttonProps:c.buttonProps})]})})}),Ge=(0,V.Pi)(function(l){var t=l.projectId,s=l.taskType,u=(0,a.useContext)(ee),d=(0,P.iZ)(t),i=(0,P.Ge)(t),m=(0,a.useRef)(),r=i.tasks[s]||{list:[],total:0,current:1,pageSize:50},S=(0,a.useState)(),x=(0,N.Z)(S,2),v=x[0],I=x[1],O=(0,a.useState)(),w=(0,N.Z)(O,2),A=w[0],p=w[1];(0,a.useEffect)(function(){var h=r.list.length;if(v===void 0){p(void 0);return}if(h===0){I(void 0);return}if(v>=h){I(0);return}v!==void 0&&r.current&&r.total&&p({currIndex:v,total:r.total,currentRecord:r.list[v]})},[v,r]);var j=function(y,c){i.loadFlowTasks({type:s,projectId:t,current:y,pageSize:c})};(0,a.useEffect)(function(){(s||v===void 0)&&j()},[s,v]);var g=d.schema,F=(0,a.useMemo)(function(){var h=(0,ie.ZZ)(g)||[];return h.splice(0,0,{name:"approvalStage",title:"\u5F53\u524D\u6D41\u7A0B\u72B6\u6001",width:180}),h.push({name:"createUser",title:"\u7533\u8BF7\u4EBA"}),h.push({name:"createAt",title:"\u7533\u8BF7\u65F6\u95F4",width:180}),h.push({name:"updateAt",title:"\u66F4\u65B0\u65F6\u95F4",width:180}),h},[g]),D=(0,a.useMemo)(function(){var h=(0,ie.IR)(r.list,F);return h.forEach(function(y){var c;y.createUser=(c=y.createUser)===null||c===void 0?void 0:c.name}),h},[r,F]),W=function(y,c){A&&(c?i.removeTask(A.currentRecord.id,s):I(y))};return(0,e.jsxs)("div",{children:[(0,e.jsx)($._$,{ref:m,width:u.width-10,height:u.height-95,data:D,schema:F,selectionMode:"row",allowSorting:!0,onDoubleClick:function(y){var c;if(((c=y.data)===null||c===void 0?void 0:c._i)!==void 0){var o;I((o=y.data)===null||o===void 0?void 0:o._i)}}}),(0,e.jsxs)("div",{className:"statusBar-container",children:[(0,e.jsx)("div",{children:(0,e.jsx)("div",{style:{fontSize:12,color:"##767e89",userSelect:"none"},children:"\u53CC\u51FB\u884C\u5BA1\u6279"})}),(0,e.jsxs)("div",{children:[(0,e.jsx)($.tl,{current:r.current,pageSize:r.pageSize,total:r.total,onChange:function(y){j(y.current,y.pageSize)}}),(0,e.jsx)($.hY,{onClick:function(){return j(r.current,r.pageSize)}})]}),(0,e.jsx)("div",{})]}),A&&(0,e.jsx)(Ye,(0,k.Z)((0,k.Z)({},A),{},{taskType:s,onClose:function(){I(void 0)},onNav:W}))]})}),Je=(0,V.Pi)(function(l){var t=(0,a.useContext)(se.xI),s=(t==null?void 0:t.id)||l.projectId,u=(0,P.iZ)(s),d=at();return(0,a.useEffect)(function(){u.loadProject()},[u,s]),(0,e.jsx)("div",{style:{padding:"2px 5px"},className:"task-widget",children:(0,e.jsx)(Ge,{projectId:s,taskType:parseInt(d.activeKey||"0")})})});J.registerComponent("taskCenter",Je);var Nt=n(13062),ge=n(71230),Ft=n(77576),xe=n(12028),Tt=n(89032),Q=n(15746),Et=n(20136),$e=n(55241),je=n(3182),Xe=n(94043),Y=n.n(Xe),qe=n(23538),ye=n(92592),_e=he.Z.Search;function et(l){return"".concat(window.location.origin,"/s/").concat(l)}var tt=function(){var t,s,u,d,i=(0,se.IE)(),m=i.loading,r=(t=i.project)===null||t===void 0||(s=t.setting)===null||s===void 0?void 0:s.status,S=(0,a.useState)(r===1),x=(0,N.Z)(S,2),v=x[0],I=x[1],O=(u=i.project)===null||u===void 0||(d=u.setting)===null||d===void 0?void 0:d.answerSetting.autoSave,w=(0,a.useState)(O),A=(0,N.Z)(w,2),p=A[0],j=A[1];(0,a.useEffect)(function(){I(r===1)},[r]),(0,a.useEffect)(function(){j(O)},[O]);var g=et(i.id),F=(0,a.useState)(""),D=(0,N.Z)(F,2),W=D[0],h=D[1];(0,a.useEffect)(function(){function c(){return o.apply(this,arguments)}function o(){return o=(0,je.Z)(Y().mark(function B(){return Y().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:ye.toDataURL(g,{errorCorrectionLevel:"H",type:"image/jpeg",quality:.3,margin:1,color:{dark:"#010599FF",light:"#FFBF60FF"}}).then(function(C){h(C)}).catch(function(C){console.error(C)});case 1:case"end":return R.stop()}},B)})),o.apply(this,arguments)}c()},[g]);var y=(0,a.useCallback)(function(){var c=(0,je.Z)(Y().mark(function o(B){return Y().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:ye.toDataURL(g,{errorCorrectionLevel:"H",margin:1,color:{dark:"#010599FF",light:"#FFBF60FF"},width:B}).then(function(C){h(C);var L=document.createElement("a");L.href=C,L.setAttribute("download","".concat(i.name,"_").concat(B,".png")),document.body.appendChild(L),L.click(),document.body.removeChild(L)});case 1:case"end":return R.stop()}},o)}));return function(o){return c.apply(this,arguments)}}(),[g,i]);return(0,e.jsx)(ge.Z,{gutter:[20,20],style:{padding:10},children:(0,e.jsx)(Q.Z,{sm:24,xs:24,children:(0,e.jsxs)(ge.Z,{gutter:[10,10],children:[(0,e.jsxs)(Q.Z,{span:24,className:"setting-item",children:[(0,e.jsx)(_e,{value:g,style:{width:360},enterButton:"\u6253\u5F00",className:"open-target",onSearch:function(){window.open("/s/".concat(i.id))}}),(0,e.jsx)($e.Z,{content:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{src:W,height:150,width:150}),(0,e.jsx)("div",{style:{textAlign:"center"},children:(0,e.jsxs)(le.Z,{children:[(0,e.jsx)(z.Z,{size:"small",type:"link",onClick:function(){return y(256)},children:"\u5C0F\u53F7"}),(0,e.jsx)(z.Z,{size:"small",type:"link",onClick:function(){return y(512)},children:"\u4E2D\u53F7"}),(0,e.jsx)(z.Z,{size:"small",type:"link",onClick:function(){return y(1024)},children:"\u5927\u53F7"})]})})]}),title:"".concat(i.name,"(\u4E8C\u7EF4\u7801)"),trigger:["click"],children:(0,e.jsx)(qe.Z,{style:{fontSize:30}})})]}),(0,e.jsxs)(Q.Z,{className:"setting-item",span:24,children:[(0,e.jsx)("div",{className:"title",children:"\u95EE\u5377\u5F00\u542F/\u505C\u6B62"}),(0,e.jsx)("div",{children:(0,e.jsx)(xe.Z,{checked:v,onChange:function(o){I(o),P.hi.updateSetting({id:i.id,settingKey:"status",settingValue:o?1:0}).then(function(B){B.code===200?o?U.default.info("\u95EE\u5377\u5DF2\u5F00\u542F"):U.default.warn("\u95EE\u5377\u5DF2\u505C\u6B62"):U.default.error(B.message)})}})})]}),(0,e.jsxs)(Q.Z,{className:"setting-item",span:24,children:[(0,e.jsx)("div",{className:"title",children:"\u95EE\u5377\u586B\u5199\u65F6\u81EA\u52A8\u4FDD\u5B58"}),(0,e.jsx)("div",{children:(0,e.jsx)(xe.Z,{checked:p,onChange:function(o){j(o),P.hi.updateSetting({id:i.id,settingKey:"answerSetting.autoSave",settingValue:o}).then(function(B){B.code===200?o?U.default.info("\u6682\u5B58\u5DF2\u5F00\u542F"):U.default.warn("\u6682\u5B58\u5DF2\u505C\u6B62"):U.default.error(B.message)})}})})]})]})})})};J.registerComponent("quickSetting",(0,V.Pi)(tt));var nt=function(t){var s=t.tabs,u=t.defaultActive,d=(0,a.useState)(u||s[0].key),i=(0,N.Z)(d,2),m=i[0],r=i[1],S=function(v){r(v),t.onChange(v)};return(0,e.jsx)("div",{className:"tabs-nav-list",children:s.map(function(x){return(0,e.jsx)("div",{onClick:function(){return S(x.key)},className:fe()("tabs-tab",{active:m===x.key}),children:x.title},x.key)})})},ee=a.createContext({});function at(){return(0,a.useContext)(ee)}var st=a.forwardRef(function(l,t){var s=l.style,u=l.className,d=l.key,i=l.children,m=l.name,r=l.title,S=l.tabs,x=l.widgetProps,v=l.toggleFullScreen,I=(0,ne.Z)(l,["style","className","key","children","name","title","tabs","widgetProps","toggleFullScreen"]),O=(0,a.useState)(S&&S[0].key),w=(0,N.Z)(O,2),A=w[0],p=w[1],j=(0,a.useState)(!1),g=(0,N.Z)(j,2),F=g[0],D=g[1],W=function(){return S?(0,e.jsx)(nt,{tabs:S,onChange:function(c){return p(c)}}):(0,e.jsx)("span",{className:"",children:r})};return(0,e.jsxs)("div",(0,k.Z)((0,k.Z)({style:(0,k.Z)({},s),className:["widget",u].join(" ")},I),{},{ref:t,children:[(0,e.jsxs)("div",{className:"header",children:[(0,e.jsxs)("span",{className:"title",children:[W(),(0,e.jsx)("div",{className:"drag-handle"})]}),(0,e.jsxs)("div",{className:"widget-controls",children:[F&&(0,e.jsx)(Ne.Z,{className:"control-item",onClick:function(){D(!1),v()}}),!F&&(0,e.jsx)(Fe.Z,{className:"control-item",onClick:function(){D(!0),v()}}),(0,e.jsx)(Te.Z,{className:"control-item"})]})]}),(0,e.jsx)(ae.SizeMe,{monitorHeight:!0,children:function(y){var c=y.size;return(0,e.jsx)(ee.Provider,{value:{height:c.height||0,width:c.width||0,activeKey:A},children:(0,e.jsx)("div",{style:{height:"100%"},children:a.createElement(J.getComponent(m),x)})})}}),i]}),d)}),it=st,rt=n(93118),Ce=function(t){var s=(0,Ie.UO)(),u=s.id,d=(0,a.useState)(ke),i=(0,N.Z)(d,2),m=i[0],r=i[1],S=(0,a.useRef)(0),x=(0,a.useState)(),v=(0,N.Z)(x,2),I=v[0],O=v[1];if(u==="new")return(0,e.jsx)(rt.default,(0,k.Z)({},t));var w=function(p){if(I)r(I.cacheData),O(void 0);else{var j=JSON.parse(JSON.stringify(m.find(function(g){return g.key===p})));O({key:p,cacheData:m}),j["data-grid"]={x:0,y:0,w:12,h:(S.current-100)/150,i:p,static:!0},r([j])}};return(0,e.jsx)("div",{className:"survey-overview",children:(0,e.jsx)(ae.SizeMe,{monitorHeight:!0,children:function(p){var j=p.size;return S.current=j.height||0,(0,e.jsx)(Ze.Responsive,{autoSize:!1,className:"layout",onDrag:function(F){},draggableHandle:".drag-handle",breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:12,sm:12,xs:4,xxs:2},width:j.width||0,layouts:{lg:m.map(function(g){return g["data-grid"]}),md:m.map(function(g){return g["data-grid"]})},useCSSTransforms:!1,onLayoutChange:function(F){},children:m.map(function(g){var F=g.key,D=(0,ne.Z)(g,["key"]);return(0,e.jsx)(it,(0,k.Z)((0,k.Z)({},D),{},{toggleFullScreen:function(){return w(F)}}),F)})})}})})},lt=Ce}}]);
