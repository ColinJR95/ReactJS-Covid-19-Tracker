(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{197:function(e,t,c){},198:function(e,t,c){},201:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),r=c.n(a),s=c(7),o=c.n(s),i=(c(93),c(22)),l=c.n(i),u=c(36),d=c(10),j=(c(95),c(236)),f=c(237),h=c(238),b=c(228),v=c(232),p=c(2),O=c(233);c(96);var x=function(e){var t=e.title,c=e.cases,a=e.total,r=e.active,s=e.isRed,o=Object(p.a)(e,["title","cases","total","active","isRed"]);return console.log(t,r),Object(n.jsx)(b.a,{onClick:o.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(s&&"infoBox--red"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(O.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!s&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(O.a,{className:"infoBox__total",color:"textSecondary",children:[a," Total"]})]})})},m=c(81),g=c(12),y=c.n(g),C={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}},_=function(e,t){var c,n=[];for(var a in e.cases){if(c){var r={x:a,y:e[t][a]-c};n.push(r)}c=e[t][a]}return n};var k=function(e){var t=e.casesType,c=Object(a.useState)({}),r=Object(d.a)(c,2),s=r[0],o=r[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=_(e,t);o(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===s||void 0===s?void 0:s.length)>0&&Object(n.jsx)(m.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:C})})};c(197);var w=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:y()(e.cases).format("0,0")})})]})}))})},N=c(15),S=c(239),I=c(234),B={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},R=function(e){var t=Object(N.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},T=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:B[t].hex,fillColor:B[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*B[t].multiplier,children:Object(n.jsx)(I.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",y()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))},F=c(235),L=c(240);c(198);var M=function(e){var t=e.countries,c=e.casesType,a=e.center,r=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(F.a,{center:a,zoom:r,children:[Object(n.jsx)(L.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),D(t,c)]})})},z=(c(199),function(){var e=Object(a.useState)("worldwide"),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)({}),o=Object(d.a)(s,2),i=o[0],p=o[1],O=Object(a.useState)([]),m=Object(d.a)(O,2),g=m[0],C=m[1],_=Object(a.useState)([]),N=Object(d.a)(_,2),S=N[0],I=N[1],B=Object(a.useState)([]),D=Object(d.a)(B,2),F=D[0],L=D[1],z=Object(a.useState)("cases"),E=Object(d.a)(z,2),A=E[0],J=E[1],P=Object(a.useState)({lat:34.80746,lng:-40.4796}),W=Object(d.a)(P,2),Y=W[0],q=W[1],V=Object(a.useState)(3),G=Object(d.a)(V,2),H=G[0],K=G[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){p(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=R(e);C(t),I(e),L(c)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(A);var Q=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){r(c),p(e),q([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"Colin COVID-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",value:c,onChange:Q,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),g.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===A,cases:T(i.todayCases),total:y()(i.cases).format("0.0a")}),Object(n.jsx)(x,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===A,cases:T(i.todayRecovered),total:y()(i.recovered).format("0.0a")}),Object(n.jsx)(x,{onClick:function(e){return J("deaths")},title:"Deaths",isRed:!0,active:"deaths"===A,cases:T(i.todayDeaths),total:y()(i.deaths).format("0.0a")})]}),Object(n.jsx)(M,{countries:S,casesType:A,center:Y,zoom:H})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("div",{className:"app__information",children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(w,{countries:F}),Object(n.jsxs)("h3",{children:["Worldwide new ",A]}),Object(n.jsx)(k,{casesType:A})]})})})]})}),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,242)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),E()},93:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){}},[[201,1,2]]]);
//# sourceMappingURL=main.7c20f495.chunk.js.map