(this.webpackJsonpdeltatrefrontend=this.webpackJsonpdeltatrefrontend||[]).push([[0],{116:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=n(55),s=n.n(o),d=n(14),u=n(67),l=n(20),p=n(33),j=n(36),b=n.n(j),h="/products";b.a.defaults.validateStatus=function(){return status<400};var m=n(149),f=n(150),O=n(141),x=n(143),g=n(145),v=n(146),C=n(156),w=n(147),y=n(148),N=n(5),k=Object(O.a)((function(t){return{button:{marginBottom:t.spacing(2),backgroundColor:"#006fff","&:hover":{backgroundColor:"#1990ff",boxShadow:"0px 0px 4px 1px grey"}},card:{height:"100%",display:"flex",flexDirection:"column"},cardActions:{justifyContent:"center",alignContent:"center"},cardContent:{flexGrow:1},warning:{color:"#db0000"}}})),B=function(t){var e=t.info,n=t.value;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("b",{children:[e,": "]}),"Description"===e?Object(N.jsxs)("div",{className:"descriptionBox",children:[" ",n," "]}):n]})},S=function(t){var e=t.product,n=t.handleRemove,c=Object(a.useState)(!1),r=Object(l.a)(c,2),i=r[0],o=r[1],s=k();return e?Object(N.jsxs)(x.a,{id:"productCard",elevation:3,className:s.card,children:[Object(N.jsxs)(g.a,{className:s.cardContent,children:[Object(N.jsxs)(v.a,{id:"productCardName",component:"div",variant:"h4",align:"center",children:[" ",Object(N.jsx)("b",{children:e.name})," "]}),Object(N.jsxs)(C.a,{p:2,children:[Object(N.jsx)(v.a,{id:"productCardDescription",component:"div",variant:"h6",paragraph:!0,children:Object(N.jsx)(B,{info:"Description",value:e.description})}),Object(N.jsx)(v.a,{id:"productCardQuantity",component:"div",variant:"h6",children:Object(N.jsx)(B,{info:"Qty. Available",value:e.quantity})})]})]}),Object(N.jsx)(g.a,{className:s.warning,children:Object(N.jsx)(v.a,{component:"div",variant:"h6",align:"center",children:i?"Are you sure?":null})}),Object(N.jsx)(w.a,{className:s.cardActions,children:Object(N.jsx)(y.a,{id:"productRemoveButton",className:s.button,variant:"contained",color:"primary",value:e.id,onClick:function(t){i?(n(t,e.id),o(!1)):(o(!0),setTimeout((function(){o(!1)}),5e3))},children:"Remove"})})]}):null},D=Object(O.a)((function(t){return{cardGrid:{paddingTop:t.spacing(10),paddingBottom:t.spacing(2)}}})),R=function(t){var e=t.products,n=t.handleRemove,a=D();return e?Object(N.jsx)(m.a,{className:a.cardGrid,maxWidth:"lg",children:Object(N.jsx)(f.a,{container:!0,spacing:5,children:e.map((function(t){return Object(N.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(N.jsx)(S,{product:t,handleRemove:n},t.id)},t.id)}))})}):null},q=n(155),L=Object(O.a)((function(t){return{addForm:{display:"flex",flexDirection:"column",alignItems:"center",width:"50%"},button:{marginBottom:t.spacing(2),backgroundColor:"#006fff","&:hover":{backgroundColor:"#1990ff",boxShadow:"0px 0px 4px 1px grey"}},form:{width:"100%",marginTop:t.spacing(10)},warning:{color:"#db0000"}}})),A=function(t){var e=t.handleAdd,n=t.products,c=Object(a.useState)({name:"",description:"",quantity:""}),r=Object(l.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)(!1),u=Object(l.a)(s,2),p=u[0],j=u[1],b=L();return Object(N.jsx)(m.a,{className:b.addForm,children:Object(N.jsxs)("form",{className:b.form,onSubmit:function(t){t.preventDefault(),n.find((function(t){return t.name.toLowerCase()===i.name.toLowerCase()}))?(j(!0),setTimeout((function(){j(!1)}),5e3)):(e(Object(d.a)({},i)),o({name:"",description:"",quantity:""}))},children:[Object(N.jsx)(m.a,{className:b.warning,children:Object(N.jsx)(v.a,{component:"div",variant:"h6",align:"center",children:p?"Name already exists in the list!":null})}),Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"productName",label:"Name",name:"name",type:"text",inputProps:{"data-testid":"Name"},autoComplete:"name",autoFocus:!0,value:i.name,onChange:function(t){return o(Object(d.a)(Object(d.a)({},i),{},{name:t.target.value}))}}),Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"productDescription",label:"Description",name:"description",type:"text",inputProps:{"data-testid":"Description"},multiline:!0,rows:2,rowsMax:4,autoComplete:"Description",autoFocus:!0,value:i.description,onChange:function(t){return o(Object(d.a)(Object(d.a)({},i),{},{description:t.target.value}))}}),Object(N.jsx)(q.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"productQuantity",label:"Quantity",name:"quantity",type:"number",inputProps:{"data-testid":"Quantity",min:0},autoComplete:"name",autoFocus:!0,value:i.quantity,onChange:function(t){return o(Object(d.a)(Object(d.a)({},i),{},{quantity:t.target.value}))}}),Object(N.jsx)(y.a,{id:"productAddButton",className:b.button,variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Add Product"})]})})},I=n(74),W=n.n(I),F=n(72),P=n.n(F),G=n(73),Q=n.n(G),T=n(151),E=n(152),M=n(153),J=n(157),z=n(154),H=n(13),K=Object(O.a)((function(t){return{appBar:{backgroundColor:"#002c73",position:"fixed"},menuButton:{marginRight:t.spacing(2),"&:hover":{backgroundColor:Object(H.b)(t.palette.common.white,.2)}},cardContent:{flexGrow:1},search:Object(p.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(H.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(H.b)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),title:Object(p.a)({flexGrow:1,display:"none"},t.breakpoints.up("sm"),{display:"block"}),loadingButton:{position:"absolute",left:"50%",top:"50%",color:"#002c73",margin:"auto"}}})),U=function(){var t=Object(a.useState)({products:[],etag:""}),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(!0),i=Object(l.a)(r,2),o=i[0],p=i[1],j=Object(a.useState)(),m=Object(l.a)(j,2),f=m[0],O=m[1],x=Object(a.useState)(""),g=Object(l.a)(x,2),C=g[0],w=g[1],y=K(),k=n.products.filter((function(t){return t.name.toLowerCase().includes(C.toLowerCase())}));Object(a.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r=n.etag,b.a.head(h,{headers:{"if-none-match":r}}).then((function(t){return t}));case 3:if(304===(e=t.sent).status){t.next=12;break}return t.next=7,b.a.get(h).then((function(t){return t}));case 7:a=t.sent,c({products:a.data,etag:a.headers.etag}),p(!1),t.next=13;break;case 12:c(Object(d.a)(Object(d.a)({},n),{},{etag:e.headers.etag}));case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:o&&p(!1);case 19:case"end":return t.stop()}var r}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}})()()}),[n]);var B=function(t){return O(t)};return o?Object(N.jsx)(z.a,{size:100,className:y.loadingButton}):Object(N.jsxs)("div",{className:y.cardContent,children:[Object(N.jsx)(T.a,{className:y.appBar,children:Object(N.jsxs)(E.a,{children:[Object(N.jsx)(M.a,{edge:"start",className:y.menuButton,id:"iconButton",color:"inherit","aria-label":"open drawer",onClick:function(){B(!f)},children:f?Object(N.jsx)(Q.a,{}):Object(N.jsx)(P.a,{})}),0!==k.length?Object(N.jsx)(v.a,{className:y.title,component:"div",variant:"h5",noWrap:!0,children:Object(N.jsx)("b",{children:" Product List "})}):Object(N.jsx)(v.a,{className:y.title,component:"div",variant:"h5",noWrap:!0,children:Object(N.jsx)("b",{children:" Nothing Found! Maybe add some? "})}),Object(N.jsxs)("div",{className:y.search,children:[Object(N.jsxs)("div",{className:y.searchIcon,children:[" ",Object(N.jsx)(W.a,{})," "]}),Object(N.jsx)(J.a,{id:"productSearch",placeholder:"Search\u2026",classes:{root:y.inputRoot,input:y.inputInput},inputProps:{"aria-label":"search"},value:C,onChange:function(t){return w(t.target.value)}})]})]})}),f&&Object(N.jsx)(A,{handleAdd:function(t){(function(t){return b.a.post(h,t).then((function(t){return t}))})(t).then((function(t){c(Object(d.a)(Object(d.a)({},n),{},{etag:t.headers.etag}))})).catch((function(t){return console.log(t)}))},products:k}),n.products&&Object(N.jsx)(R,{id:"productList",products:k,handleRemove:function(t,e){t.preventDefault(),function(t){return b.a.delete("".concat(h,"/").concat(t)).then((function(t){return t}))}(e).then((function(t){c(Object(d.a)(Object(d.a)({},n),{},{etag:t.headers.etag}))})).catch((function(t){return console.log(t)}))}})]})};i.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(U,{})}),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.263406e9.chunk.js.map