"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[344],{8975:function(n,e,t){var r=t(5671),i=t(3144),a=t(136),s=t(9388),o=t(2791),l=t(1128),c=t(184),d=function(n){(0,a.Z)(t,n);var e=(0,s.Z)(t);function t(){var n;(0,r.Z)(this,t);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(n=e.call.apply(e,[this].concat(a))).interval=void 0,n.state={isAnimated:!1},n}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var n=this;this.props.repeat?this.interval=window.setInterval((function(){n.setState({isAnimated:!n.state.isAnimated})}),1e3*this.props.duration):this.setState({isAnimated:!this.state.isAnimated})}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"render",value:function(){var n=this;return(0,c.jsx)(l.r,{start:function(){return{value:n.props.valueStart}},update:function(){return{value:[n.state.isAnimated?n.props.valueEnd:n.props.valueStart],timing:{duration:1e3*n.props.duration,ease:n.props.easingFunction}}},children:function(e){var t=e.value;return n.props.children(t)}})}}]),t}(o.Component);d.defaultProps={valueStart:0},e.Z=d},2344:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});t(2791);var r=t(3593),i=t(5021),a=t(653),s=t(7945),o=t.n(s),l=(t(4655),t(7621)),c=t(3044),d=t(890),u=(t(8475),t(1087)),h=t(1889),p=t(9391),x=t(7400),g=t(8975),v=t(7793),b=t(184),m=function(n){var e=n.imageFile,t=n.title,s=n.percentage,m=n._id;o().init();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("style",{type:"text/css",children:"   \n.btns {\nbackground-color: red;\ncolor: white;\n}\n\n.btn-xxl {\npadding: 1rem 1.5rem;\nfont-size: 1.5rem;\n}\n.btn-secondary{       background-color: pink;}\n.progress-bar{  background-color: rgb(255, 2, 204);  }\n.progress{\n  background-color: white;\n}\n\n\n}\n\n"})}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)(h.ZP,{item:!0,lg:4,sm:6,xl:3,md:4,xs:12,sx:{display:"flex",justifyContent:"center",textAlign:"center",alignItems:"center"},children:(0,b.jsx)(v.E.div,{initial:"hidden",whileInView:"visible",transition:{duration:.5},variants:{visible:{opacity:1,scale:1,y:1},hidden:{opacity:0,scale:.5,y:-100}},children:(0,b.jsxs)(l.Z,{sx:{width:"270px",backgroundImage:"linear-gradient(\n    90deg,\n    rgba(78, 78, 246, 0.647) 0%,\n    rgba(247, 90, 216, 0.696) 100%\n  )",borderRadius:"12%",transition:"0.2s",padding:"7px",boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"},children:[(0,b.jsxs)("div",{className:"About3",children:[" ",(0,b.jsxs)("h3",{children:[" ",t]})]}),(0,b.jsx)(g.Z,{valueStart:1,valueEnd:s,duration:1.4,easingFunction:x.U2,children:function(n){var t=Math.round(n);return(0,b.jsxs)(p.Wo,{value:t,styles:(0,p.y3)({textColor:"black",pathColor:"rgb(255, 2, 204)",border:"1px solid black",trailColor:"white",pathTransition:"none"}),style:{overflow:"hidden"},children:[(0,b.jsx)("img",{style:{width:"100px",height:"100px",textAlign:"center",overflow:"hidden",borderRadius:"50%"},src:e,alt:"sufi",loading:"lazy"}),(0,b.jsx)("div",{style:{fontSize:12},children:(0,b.jsx)(d.Z,{sx:{fontSize:"26px",color:"black",marginBottom:"20px"},children:"".concat(t,"%")})})]})}})," ",(0,b.jsxs)(i.ZP,{children:[(0,b.jsx)(a.Z,{children:(0,b.jsx)(c.Z,{style:{backgroundSize:"cover",backgroundPosition:"center",width:"60px",height:"60px",background:"none"},children:(0,b.jsx)("img",{className:"i-swing",src:e,alt:"",style:{width:"100%",height:"auto"}})})}),(0,b.jsx)(r.Z,{animated:!0,now:s,style:{width:"100%"},label:"".concat(s,"%")})]}),(0,b.jsx)(u.rU,{to:"/skill/".concat(m),children:(0,b.jsx)(d.Z,{variant:"h5",sx:{color:"black",textDecoration:"underline",cursor:"pointer","&:hover":{color:"blue"}},children:"Read More.."})})]})})})]})}}}]);
//# sourceMappingURL=344.fbf00376.chunk.js.map