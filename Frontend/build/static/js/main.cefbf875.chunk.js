(this.webpackJsonpdeltatrefrontend=this.webpackJsonpdeltatrefrontend||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n.n(c),o=n(10),i=n.n(o),s=n(17),u=n(45),l=n(46),d=n.n(l),j="/products",b=n(142),p=n(143),h=n(134),m=n(136),f=n(138),O=n(139),x=n(148),g=n(140),v=n(141),w=Object(h.a)((function(e){return{button:{marginBottom:e.spacing(2),backgroundColor:"#006fff","&:hover":{backgroundColor:"#1990ff",boxShadow:"0px 0px 4px 1px grey"}},card:{height:"100%",display:"flex",flexDirection:"column"},cardActions:{justifyContent:"center",alignContent:"center"},cardContent:{flexGrow:1},warning:{color:"#db0000"}}})),y=function(e){var t=e.info,n=e.value;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("b",{children:[t,": "]}),"Description"===t?Object(a.jsxs)("div",{className:"descriptionBox",children:[" ",n," "]}):n]})},C=function(e){var t=e.id,n=e.product,r=e.handleRemove,o=Object(c.useState)(!1),i=Object(s.a)(o,2),u=i[0],l=i[1],d=w();return n?Object(a.jsxs)(m.a,{elevation:3,className:d.card,children:[Object(a.jsxs)(f.a,{className:d.cardContent,children:[Object(a.jsxs)(O.a,{component:"div",y:!0,variant:"h4",align:"center",children:[" ",Object(a.jsx)("b",{children:n.name})," "]}),Object(a.jsxs)(x.a,{p:2,children:[Object(a.jsx)(O.a,{component:"div",variant:"h6",paragraph:"true",children:Object(a.jsx)(y,{info:"Description",value:n.description})}),Object(a.jsx)(O.a,{component:"div",variant:"h6",children:Object(a.jsx)(y,{info:"Qty. Available",value:n.quantity})})]})]}),Object(a.jsx)(f.a,{className:d.warning,children:Object(a.jsx)(O.a,{component:"div",y:!0,variant:"h6",align:"center",children:u?"Are you sure?":null})}),Object(a.jsx)(g.a,{className:d.cardActions,children:Object(a.jsx)(v.a,{className:d.button,variant:"contained",color:"primary",value:t,onClick:function(e){u?r(e,t):(l(!0),setTimeout((function(){l(!1)}),5e3))},children:"Remove"})})]}):null},N=Object(h.a)((function(e){return{cardGrid:{paddingTop:e.spacing(10),paddingBottom:e.spacing(2)}}})),k=function(e){var t=e.productKeys,n=e.products,c=e.handleRemove,r=N();return n&&t?Object(a.jsx)(b.a,{className:r.cardGrid,maxWidth:"lg",children:Object(a.jsx)(p.a,{container:!0,spacing:5,children:t.map((function(e,t){return Object(a.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(C,{id:e,product:n[t],handleRemove:c},e)},e)}))})}):null},S=n(147),L=Object(h.a)((function(e){return{addForm:{display:"flex",flexDirection:"column",alignItems:"center",width:"50%"},button:{marginBottom:e.spacing(2),backgroundColor:"#006fff","&:hover":{backgroundColor:"#1990ff",boxShadow:"0px 0px 4px 1px grey"}},form:{width:"100%",marginTop:e.spacing(10)},warning:{color:"#db0000"}}})),R=function(e){var t=e.handleAdd,n=e.products,r=Object(c.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1],l=Object(c.useState)(""),d=Object(s.a)(l,2),j=d[0],p=d[1],h=Object(c.useState)(""),m=Object(s.a)(h,2),f=m[0],x=m[1],g=Object(c.useState)(!1),w=Object(s.a)(g,2),y=w[0],C=w[1],N=L();return Object(a.jsx)(b.a,{className:N.addForm,children:Object(a.jsxs)("form",{className:N.form,onSubmit:function(e){e.preventDefault(),n.find((function(e){return e.name.toLowerCase()===i.toLowerCase()}))?(C(!0),setTimeout((function(){C(!1)}),5e3)):(t({name:i,description:j,quantity:f}),u(""),p(""),x(""))},children:[Object(a.jsx)(b.a,{className:N.warning,children:Object(a.jsx)(O.a,{component:"div",y:!0,variant:"h6",align:"center",children:y?"Name already exists in the list!":null})}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",type:"text",autoComplete:"name",autoFocus:!0,value:i,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"description",label:"Description",name:"description",type:"text",multiline:!0,rows:2,rowsMax:4,autoComplete:"Description",autoFocus:!0,value:j,onChange:function(e){return p(e.target.value)}}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"quantity",label:"Quantity",name:"quantity",type:"number",InputProps:{inputProps:{min:0}},autoComplete:"name",autoFocus:!0,value:f,onChange:function(e){return x(e.target.value)}}),Object(a.jsx)(v.a,{className:N.button,variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Add Product"})]})})},B=n(70),D=n.n(B),I=n(68),q=n.n(I),A=n(69),W=n.n(A),F=n(144),G=n(145),P=n(146),T=n(149),E=n(13),M=Object(h.a)((function(e){return{appBar:{backgroundColor:"#002c73",position:"fixed"},menuButton:{marginRight:e.spacing(2),"&:hover":{backgroundColor:Object(E.b)(e.palette.common.white,.2)}},cardContent:{flexGrow:1},search:Object(u.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(u.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),title:Object(u.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}})),J=function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(),i=Object(s.a)(o,2),u=i[0],l=i[1],b=Object(c.useState)(""),p=Object(s.a)(b,2),h=p[0],m=p[1],f=M(),x=Object.keys(n).filter((function(e){return n[e].name.toLowerCase().includes(h.toLowerCase())})),g=Object.values(n).filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())})),v=0===g.length;Object(c.useEffect)((function(){d.a.get(j).then((function(e){return e})).then((function(e){304!==e.status&&r(e.data)}))}),[n]);var w=function(e){return l(e)};return Object(a.jsxs)("div",{className:f.cardContent,children:[Object(a.jsx)(F.a,{className:f.appBar,children:Object(a.jsxs)(G.a,{children:[Object(a.jsx)(P.a,{edge:"start",className:f.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){w(!u)},children:u?Object(a.jsx)(W.a,{}):Object(a.jsx)(q.a,{})}),v?Object(a.jsx)(O.a,{className:f.title,component:"div",variant:"h5",noWrap:!0,children:Object(a.jsx)("b",{children:" Nothing Found! Maybe add some? "})}):Object(a.jsx)(O.a,{className:f.title,component:"div",variant:"h5",noWrap:!0,children:Object(a.jsx)("b",{children:" Product List "})}),Object(a.jsxs)("div",{className:f.search,children:[Object(a.jsxs)("div",{className:f.searchIcon,children:[" ",Object(a.jsx)(D.a,{})," "]}),Object(a.jsx)(T.a,{placeholder:"Search\u2026",classes:{root:f.inputRoot,input:f.inputInput},inputProps:{"aria-label":"search"},value:h,onChange:function(e){return m(e.target.value)}})]})]})}),u&&Object(a.jsx)(R,{handleAdd:function(e){(function(e){return d.a.post(j,e).then((function(e){return e}))})(e).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))},products:g}),n&&Object(a.jsx)(k,{productKeys:x,products:g,handleRemove:function(e,t){e.preventDefault(),function(e){return d.a.delete("".concat(j,"/").concat(e)).then((function(e){return e}))}(t).then((function(e){204===e.status&&r(n)})).catch((function(e){return console.log(e)}))}})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(J,{})}),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.cefbf875.chunk.js.map