(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),a=n(5),i=n(6),o=n(9),l=n(7),u=n(8),h=n(1),d=(n(14),n(15),n(2)),b=n.n(d),p=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPABET=1]="ALPABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},e.handleReversed=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleSortAlpabet=function(){e.setState({sortType:s.ALPABET})},e.handleSortLength=function(){e.setState({sortType:s.LENGTH})},e.handleReset=function(){e.setState({sortType:s.NONE,isReversed:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=function(e,t){var n=t.sortType,r=t.isReversed,c=Object(u.a)(e);return c.sort((function(e,t){switch(n){case s.ALPABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),r&&c.reverse(),c}(j,this.state),t=this.state,n=t.isReversed,r=t.sortType;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:b()("button is-info",{"is-light":r!==s.ALPABET}),onClick:this.handleSortAlpabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:b()("button is-success",{"is-light":r!==s.LENGTH}),onClick:this.handleSortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:b()("button is-warning",{"is-light":!1===n}),onClick:this.handleReversed,children:"Reverse"}),(r!==s.NONE||n)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:e.map((function(e){return Object(p.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),n}(h.Component);c.a.render(Object(p.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.6409a6b5.chunk.js.map