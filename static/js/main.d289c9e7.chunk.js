(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(6),s=n.n(l),i=(n(13),n(1)),r=n(2),c=n(4),u=n(3),m=n(7),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).eventHandler=null,a.startResize=function(e,t){a.setState({isDragging:!0,currentPanel:t,adjacentPanel:t-1,initialPos:e.clientX})},a.stopResize=function(){a.state.isDragging&&(a.setState({isDragging:!1,delta:0,previous_delta:0,currentPanel:null}),console.log("stop",a.state.currentPanel,a.state.delta))},a.resizePanel=function(e){if(a.state.isDragging){var t=a.state,n=t.adjacentPanel,o=t.currentPanel,l=t.previous_delta,s=t.panels,i=t.initialPos,r=s,c=r[o],u=r[n],m=e.clientX-i,p=l||m;console.log("X",e.clientX,c,u),m>0?c<=0?(c=0,r.length>o+1?(console.log("hehe",r.length,o+1),a.setState((function(e){return{currentPanel:e.currentPanel++}}))):(u+=c,console.log("EXCEEEDING hehe"))):(u+=m-p,c-=m-p):m<0&&(u<=0?(u=0,o-1!==0?(console.log("hihi",o-1),a.setState((function(e){return{adjacentPanel:e.adjacentPanel--}}))):(c+=u,console.log("EXCEEEDING hihi"))):(u+=m-p,c-=m-p)),r.splice(o,1,c),r.splice(n,1,u),console.log("panels",r),a.setState({panels:r,previous_delta:m})}},a.widthCalc=function(e){for(var t=[],n=(window.innerWidth-10*(e-1))/e,o=0;o<e;o++)t.push(n);a.setState({panels:t})},a.maxCalc=function(e,t){for(var n=[],o=8*(t-1),l=0;l<t;l++)l!==e?n.push(0):n.push(window.innerWidth-o);a.setState({panels:n})},a.state={isDragging:!1,total_panels:a.props.total,panels:[]},a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("mousemove",this.resizePanel),document.addEventListener("mouseup",this.stopResize),document.addEventListener("mouseleave",this.stopResize)}},{key:"componentDidUpdate",value:function(e){e.total!==this.props.total&&this.widthCalc(this.props.total),e.max!==this.props.max&&this.maxCalc(this.props.max,this.props.total)}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.panels,l=(n.delta,n.currentPanel,this.props.children);return o.a.createElement("div",{className:"panel-container",onMouseUp:function(){return t.stopResize()}},(e=[]).concat.apply(e,Object(m.a)(l.map((function(e,n){return 0===n?[o.a.createElement("div",{key:"panel_"+n,className:"panel",style:{minWidth:a[n]+"px"}},e)]:[o.a.createElement("div",{onMouseDown:function(e){return t.startResize(e,n)},key:"resizer_"+n,className:"resizer"}),o.a.createElement("div",{key:"panel_"+n,className:"panel",style:{minWidth:a[n]+"px"}},e)]})))))}}]),n}(a.Component),d=(n(14),function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).addColumn=function(){if(e.state.columns.length>0){var t=e.state.total_columns+1;e.setState((function(e){return{columns:e.columns.concat("C"+t),total_columns:t}}))}else e.setState((function(e){return{columns:e.columns.concat("C0")}}))},e.deleteColumn=function(t){console.log(t),e.setState((function(e){return{columns:e.columns.filter((function(e){return e!==t}))}}))},e.state={columns:[],colors:["red","orange","yellow","green","blue","purple","indigo"],total_columns:0,maximize:null},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.colors,a=t.columns,l=t.maximize;return o.a.createElement("div",null,o.a.createElement("button",{className:"button right",onClick:this.addColumn},"Add Column"),a&&o.a.createElement(p,{total:a.length,max:l},a.map((function(t,a){return o.a.createElement("div",{key:a,style:{backgroundColor:"".concat(n[a%7])},className:"column",onDoubleClick:function(){return e.setState({maximize:a})}},o.a.createElement("label",null,t),o.a.createElement("small",{style:{cursor:"pointer"},onClick:e.deleteColumn.bind(e,t)},"x"))}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d289c9e7.chunk.js.map