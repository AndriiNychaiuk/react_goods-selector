(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),a=c(7),o=c(5),r=c(6),l=c(9),i=c(8),d=c(3),u=c.n(d),p=c(1),h=c.n(p),b=(c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(l.a)(c,e);var t=Object(i.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.clear=function(){e.setState({selectedGoods:[]})},e.select=function(t){e.state.selectedGoods.includes(t)?e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}})):e.setState((function(e){return{selectedGoods:[].concat(Object(a.a)(e.selectedGoods),[t])}}))},e.message=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");case 2:return"".concat(t[0]," and ").concat(t[1]," are selected");default:return"".concat(t.slice(0,-1).join(", ")," and ").concat(t.slice(-1)," are selected")}},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App__container",children:[Object(b.jsx)("h1",{className:"App__title",children:this.message()}),Object(b.jsx)("button",{type:"button",className:u()("App__button",{"App__button--hidden":0===t.length}),onClick:this.clear,children:"clear"}),Object(b.jsx)("ul",{className:"App__list",children:j.map((function(c){return Object(b.jsxs)("li",{className:u()("App__item",{"App__item--selected":t.includes(c)}),children:[c,Object(b.jsx)("button",{type:"button",className:"App__button",onClick:function(){e.select(c)},children:t.includes(c)?"Remove":"Select "})]},c)}))})]})})}}]),c}(h.a.Component),_=m;n.a.render(Object(b.jsx)(_,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d9e8fe2.chunk.js.map