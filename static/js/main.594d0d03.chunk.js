(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(2),a=n.n(r),d=n(5),l=n(3),u=n(4),s=n(7),i=n(6);n(13);var m=function(e){var t,n=e.name,c=e.selectedGood;return o.a.createElement("p",{className:(t=c.includes(n),t?"active":"")},n)};function f(e){return e?"hiddenButton":""}var v=function(e){var t=e.name,n=e.selectedProduct,c=e.selectedGood;return o.a.createElement("button",{type:"button",className:f(c.includes(t)),onClick:function(e){n(t)}},"\u2714")},p=function(e){var t=e.name,n=e.removedProduct,c=e.selectedGood;return o.a.createElement("button",{type:"button",className:f(!c.includes(t)),onClick:function(e){n(t)}},"\u2718")},G=function(e){var t=e.name,n=e.selectedGood,c=e.selectedProduct,r=e.removedProduct;return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{name:t,selectedGood:n}),o.a.createElement(v,{name:t,selectedProduct:c,selectedGood:n}),o.a.createElement(p,{name:t,removedProduct:r,selectedGood:n}))},E=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(e,t){return{name:e,id:t+1}})),P=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:["Jam"]},e.selectedProduct=function(t){e.state.selectedGood.includes(t)||e.setState((function(e){return{selectedGood:[].concat(Object(d.a)(e.selectedGood),[t])}}))},e.removedProduct=function(t){e.state.selectedGood.includes(t)&&e.setState((function(e){return{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}}))},e.resetProduct=function(){e.setState({selectedGood:[]})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood,n=t.join(", ");return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,t.length>0?"Selected good: ".concat(n):"No goods selected"),o.a.createElement("button",{type:"button",className:f(0===t.length),onClick:function(t){e.resetProduct()}},"reset"),o.a.createElement("div",null,E.map((function(n){return o.a.createElement("div",{key:n.id},o.a.createElement(G,{name:n.name,selectedGood:t,selectedProduct:e.selectedProduct,removedProduct:e.removedProduct}))}))))}}]),n}(o.a.Component);a.a.render(o.a.createElement(P,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.594d0d03.chunk.js.map