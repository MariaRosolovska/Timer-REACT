(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),l=n.n(c),u=n(1);n(9);function o(e){return e.toString().padStart(2,"0")}function i(){var e=Object(r.useState)("Let countdown begin!!!"),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(1500),i=Object(u.a)(l,2),s=i[0],m=i[1],p=Object(r.useState)(!1),b=Object(u.a)(p,2),f=b[0],E=b[1],d=Object(r.useRef)(null);function v(){clearInterval(d.current),d.current=null,c("Another round, eh?"),m(1500),E(!1)}var h=o(Math.floor(s/60)),S=o(Math.floor(s-60*h));return a.a.createElement("div",{className:"app"},a.a.createElement("h2",null,n),a.a.createElement("div",{className:"timer"},a.a.createElement("span",null,h),a.a.createElement("span",null,":"),a.a.createElement("span",null,S)),a.a.createElement("div",{className:"buttons"},!f&&a.a.createElement("button",{onClick:function(){null===d.current&&(c("You're going great"),E(!0),d.current=setInterval((function(){m((function(e){return e>=1?e-1:(v(),0)}))}),1e3))}},"Start"),f&&a.a.createElement("button",{onClick:function(){null!==d.current&&(clearInterval(d.current),d.current=null,c("Keep it up"),E(!1))}},"Stop"),a.a.createElement("button",{onClick:v},"Reset")))}l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i,null)),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.f2ed8111.chunk.js.map