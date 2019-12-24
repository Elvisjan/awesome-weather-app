(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(14),c=t.n(o),i=t(15),u=t(6),l=t(18),f=t(4),p=t(8),d=t.n(p),s=t(3),m=Object(s.c)("root");m.onCreateStore((function(e){var n=localStorage.getItem(e.shortName);null!==n&&e.setState(JSON.parse(n));var t=!1;return e.watch((function(n){t&&localStorage.setItem(e.shortName,JSON.stringify(n)),t=!0})),e}));var h=m.event,g=m.effect,b=m.store,v=Object(s.d)(),x=Object(s.d)("trigger sample"),w=function(e){e.preventDefault(),x()},O=(h("add city"),h("add input value")),j=g({handler:function(e){var n,t;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://api.openweathermap.org/data/2.5/weather?APPID=a82f5bd7cf235d2d97cf411fd97a845d&units=metric&lang=ru&q=".concat(e),r.next=3,d.a.awrap(fetch(n));case 3:return t=r.sent,r.abrupt("return",t.json());case 5:case"end":return r.stop()}}))}}),y=g({handler:function(e){var n,t,r,a,o,c;return d.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:n=!0,t=!1,r=void 0,i.prev=3,a=e[Symbol.iterator]();case 5:if(n=(o=a.next()).done){i.next=12;break}return c=o.value,i.next=9,d.a.awrap(j(c));case 9:n=!0,i.next=5;break;case 12:i.next=18;break;case 14:i.prev=14,i.t0=i.catch(3),t=!0,r=i.t0;case 18:i.prev=18,i.prev=19,n||null==a.return||a.return();case 21:if(i.prev=21,!t){i.next=24;break}throw r;case 24:return i.finish(21);case 25:return i.finish(18);case 26:case"end":return i.stop()}}),null,null,[[3,14,18,26],[19,,21,25]])}}),k=b(["\u041c\u043e\u0441\u043a\u0432\u0430"],{name:"cityNames"}).on(j.done,(function(e,n){var t=n.result,r=n.params;if(200===t.cod){if((e=Object(f.a)(e)).find((function(e){return e.toLowerCase()===r.toLowerCase()})))return;return e.push(r),e}})).on(v,(function(e,n){return e.filter((function(e,t){return t!==n}))})),E=b([],{name:"cityList"}).on(v,(function(e,n){return e.filter((function(e,t){return t!==n}))})).on(j.done,(function(e,n){var t=n.result,r=n.params,a=(e=Object(f.a)(e)).find((function(e){return e.name.toLowerCase()===r.toLowerCase()}));return a?e[e.indexOf(a)]=Object(l.a)({},a,{temperature:t.main.temp.toFixed(),feels:t.main.feels_like.toFixed(),weather:t.weather}):e.push({name:r.toUpperCase(),weather:t.weather,temperature:t.main.temp,cod:t.cod,id:t.id,feels:t.main.feels_like}),e}));E.getState().length<1&&j("\u041c\u041e\u0421\u041a\u0412\u0410");var S=b("").on(O,(function(e,n){return n.currentTarget.value})).reset(j);Object(s.h)({source:S,clock:x,target:j});var z=t(2),C=t(1);function I(){var e=Object(z.a)(["\n  width: 20rem;\n  height: 2rem;\n  background-color: lightgray;\n  border-radius: 3px;\n  border: none;\n  color: black;\n  margin-left: 10px;\n  padding-left:18px;\n  ::placeholder {    \n    font-size: 17px;\n    width: 100%;\n    color: black;  \n  }\n"]);return I=function(){return e},e}var N=C.default.input(I());function L(){var e=Object(z.a)(["\n  width: 100%;\n  height: 30%;\n  color: white;\n  font-size: 4rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    width: 80%;\n    position: relative;\n    left: 5%;\n    top:50%;      \n    font-size: 2rem;\n  }\n"]);return L=function(){return e},e}var F=C.default.h1(L());function J(){var e=Object(z.a)(["\n  display: grid;\n  margin-left: -15px;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 20px 120px;\n  color: #fff;\n  font-size: 17px;\n  width: 98%;\n"]);return J=function(){return e},e}var A=C.default.li(J());function D(){var e=Object(z.a)(["\n  height: 100%;\n  list-style: none;  \n"]);return D=function(){return e},e}var P=C.default.ul(D());function _(){var e=Object(z.a)(["\n  padding-left: 20px;\n  font-size: 25px;\n  color: #fff;\n"]);return _=function(){return e},e}var q=C.default.label(_());function B(){var e=Object(z.a)(["\n  \n"]);return B=function(){return e},e}var T=C.default.form(B());function U(){var e=Object(z.a)(["\n  height: 150px;\n  margin-top: -43px;\n  background: linear-gradient(to right, #2c3e50, #3498db);\n  @media (max-width: 768px) {\n    position: relative;\n    height: 250px;\n  }\n"]);return U=function(){return e},e}var G=C.default.header(U());function H(){var e=Object(z.a)(["\n  text-align:center;\n  color: #fff;\n  font-size: 36px;\n"]);return H=function(){return e},e}var K=C.default.div(H());function M(){var e=Object(z.a)(["\n  border-style: none;\n  outline: none;\n  width: 120px;\n  height: 30px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  :hover {\n    opacity: 0.9;\n  }\n  :active {\n    background-color: red;\n  }\n"]);return M=function(){return e},e}var Q=C.default.button(M());function R(){var e=Object(z.a)(['  \n  display: block;\n  background-color: green;\n  color: #fff;\n  margin-left: 355px;\n  font-size: 16px;\n  width: 280px;\n  height: 20px;\n  text-align: center;\n  border-radius: 5px;\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-left: 0;\n    background-color: none;\n  }\n\n    ::after {\n      content: " ";\n      display: block;\n      width: 64px;\n      height: 64px;\n      margin: 8px;\n      margin-top: -30px;\n      margin-left: 300px;\n      border-radius: 50%;\n      border: 6px solid #fff;\n      border-color: yellow transparent yellow transparent;\n      animation: 1.2s '," linear infinite;\n}\n"]);return R=function(){return e},e}function V(){var e=Object(z.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }  \n"]);return V=function(){return e},e}var W=Object(C.keyframes)(V()),X=C.default.div(R(),W);function Y(){var e=Object(z.a)(["\n"]);return Y=function(){return e},e}C.default.body(Y());function Z(){var e=Object(z.a)(["\n  min-height: 740px;\n  background: linear-gradient(to right, #2c3e50, #4ca1af);\n"]);return Z=function(){return e},e}var $=C.default.section(Z());function ee(){var e=Object(z.a)(["\n  width: 30px;\n  height: 30px;\n"]);return ee=function(){return e},e}var ne=C.default.img(ee()),te=function(e){var n=e.submiter,t=e.value,r=e.placeholder,o=e.type,c=e.changer,i=e.label;return a.a.createElement(T,{onSubmit:n},a.a.createElement(q,null,i),a.a.createElement(N,{type:o,value:t,placeholder:r,onChange:c}))},re=function(){var e=Object(u.c)(k);return a.a.useEffect((function(){var n=setInterval((function(){y(e)}),6e4);return function(){return clearInterval(n)}}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{className:"App-header"},a.a.createElement(F,null,"\u041a\u043b\u0430\u0441\u0441\u043d\u043e\u0435 \u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),a.a.createElement(oe,{spinner:X})),a.a.createElement($,null,a.a.createElement(te,{value:Object(u.c)(S),changer:O,type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",submiter:w,label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),Object(u.c)(E).length>0?a.a.createElement(ae,null):a.a.createElement(K,null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")))},ae=function(){return Object(u.b)(E,(function(e,n){var t=e.name,r=e.weather,o=e.temperature,c=e.cod,i=e.feels,u=200===c?a.a.createElement(A,null,"\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",t," \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442  ",r[0].description,", \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",parseInt(o)," \xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",parseInt(i),"\xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e ",a.a.createElement(ne,{alt:"\u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435",src:"http://openweathermap.org/img/w/".concat(r[0].icon,".png")}),a.a.createElement(Q,{type:"button",onClick:function(){v(n)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):null;return a.a.createElement(P,null,u)}))},oe=Object(u.a)(j.pending,(function(e,n){return n?a.a.createElement(X,null,"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"):null}));var ce=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Normalize,null),a.a.createElement(re,null))};c.a.render(a.a.createElement(ce,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7cf99239.chunk.js.map