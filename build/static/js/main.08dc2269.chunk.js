(this.webpackJsonptrilateral=this.webpackJsonptrilateral||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(4),a=c.n(s),i=(c(12),c(2)),l=c.n(i),b=c(5),j=c(6),d=(c(14),c(7),c(0));var o=function(e){var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(),o=Object(j.a)(i,2),h=o[0],x=o[1],O=s[h],u=function(){var e=Object(b.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.carbonintensity.org.uk/intensity/date/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u();case 1:case"end":return e.stop()}}),e)}))),[h]);var m=function(e){x(e)};return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("nav",{className:"navbar navbar navbar-dark bg-primary",children:Object(d.jsx)("a",{className:"navbar-brand display-4",href:"#",children:"Trilateral Research"})}),Object(d.jsxs)("div",{className:"container jumbotron",children:[Object(d.jsx)("h3",{className:"display-4",children:"Technical Assigment : Carbon Intensity"}),Object(d.jsx)("p",{className:"lead",children:"This is the simple react app designed to view the Carbon Intensity by fetching the data from API"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{scope:"col",children:"DOUBLE CLICK TO SELECT THE DATES"})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsx)("tr",{children:Object(d.jsx)("td",{scope:"row",children:Object(d.jsx)("button",{onClick:function(){m(0)},className:"btn btn-primary",children:"20 Feb 2021"})})}),Object(d.jsx)("tr",{children:Object(d.jsxs)("td",{scope:"row",children:[" ",Object(d.jsx)("button",{onClick:function(){m(1)},className:"btn btn-primary",children:"19 Feb 2021"})]})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{scope:"row",children:Object(d.jsx)("button",{onClick:function(){m(2)},className:"btn btn-primary",children:"18 Feb 2021"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{scope:"row",children:Object(d.jsx)("button",{onClick:function(){m(3)},className:"btn btn-primary",children:"17 Feb 2021"})})}),Object(d.jsx)("tr",{children:Object(d.jsx)("td",{scope:"row",children:Object(d.jsx)("button",{onClick:function(){m(4)},className:"btn btn-primary",children:"16 Feb 2021"})})})]})]})]}),Object(d.jsx)("div",{children:O&&Object.keys(O).slice(0,1).map((function(e,t){return Object(d.jsxs)("div",{id:e,value:t,className:"Container jumbotron",children:[Object(d.jsx)("h1",{className:"display-4 text-center",children:"Carbon Intensity Details"}),Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"text-center border",children:"From Date"}),Object(d.jsx)("th",{className:"text-center border",children:"To Date"}),Object(d.jsx)("th",{className:"text-center border",children:"Intensity Values"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{id:e,value:t,children:[Object(d.jsx)("td",{className:"text-center lead border",children:O.from}),Object(d.jsx)("td",{className:"text-center lead border",children:O.to}),Object(d.jsx)("td",{className:"text-center lead border",children:Object.keys(O.intensity).map((function(e,t){return Object(d.jsx)("ul",{value:t,className:"border",children:Object(d.jsxs)("li",{className:"text-center lead",children:[e,":  ",O.intensity[e]]})},e)}))})]},e)})]})]},e)}))})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(o,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.08dc2269.chunk.js.map