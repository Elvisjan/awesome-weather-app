(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(n,e,t){n.exports=t(35)},35:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(14),i=t.n(c),o=t(15),u=t(3),l=t(2);function f(){var n=Object(u.a)(["\n\nbody {\n  height: 100vh;\n  display: grid;\n}\n#root {\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n"]);return f=function(){return n},n}var d=Object(l.createGlobalStyle)(f()),p=t(7),s=t(18),h=t(4),m=t(1),g=t(5),b=t.n(g),v=Object(m.f)("a82f5bd7cf235d2d97cf411fd97a845d"),x=Object(m.f)({units:"metric",lang:"ru"}),O=Object(m.f)("https://api.openweathermap.org/data/2.5/weather?"),j=Object(m.d)({handler:function(n){var e,t;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e="".concat(O.getState(),"APPID=").concat(v.getState(),"&units=").concat(x.getState().units,"&lang=").concat(x.getState().lang,"&q=").concat(n),r.next=3,b.a.awrap(fetch(e));case 3:return t=r.sent,r.abrupt("return",t.json());case 5:case"end":return r.stop()}}))}}),w=Object(m.e)("trigger sample"),y=function(n){n.preventDefault(),w()},E=Object(m.d)({handler:function(n){var e,t;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://api.openweathermap.org/data/2.5/group?id=".concat(n,"&units=metric&appid=a82f5bd7cf235d2d97cf411fd97a845d&lang=ru"),r.next=3,b.a.awrap(fetch(e));case 3:return t=r.sent,r.abrupt("return",t.json());case 5:case"end":return r.stop()}}))}}),k=(Object(m.e)("add city"),Object(m.e)("add input value")),S=Object(m.e)("delete item"),I=Object(m.f)(JSON.parse(localStorage.getItem("cityIds"))||[],{name:"cityIds"}).on(j.done,(function(n,e){var t=e.result;return 200!==t.cod||n.find((function(n){return n===t.id}))?n:n=[].concat(Object(h.a)(n),[t.id])})).on(S,(function(n,e){return n.filter((function(n,t){return t!==e}))})),z=Object(m.f)(JSON.parse(localStorage.getItem("cityList"))||[],{name:"cityList"}).on(j.done,(function(n,e){var t=e.result;return(n=Object(h.a)(n)).find((function(n){return n.id===t.id}))?n:(n.push({name:t.name,weather:t.weather,temperature:t.main.temp,cod:t.cod,id:t.id,feels:t.main.feels_like}),n)})).on(E.done,(function(n,e){var t=e.result;n=Object(h.a)(n);var r=!0,a=!1,c=void 0;try{for(var i,o=function(){var e=i.value,t=n.find((function(n){return n.id===e.id}));t&&(n[n.indexOf(t)]=Object(s.a)({},t,{temperature:e.main.temp,feels:e.main.feels_like,weather:e.weather}))},u=t.list[Symbol.iterator]();!(r=(i=u.next()).done);r=!0)o()}catch(l){a=!0,c=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw c}}return n})).on(S,(function(n,e){return n.filter((function(n,t){return t!==e}))})),N=Object(m.f)("").on(k,(function(n,e){return e.currentTarget.value})).reset(j);function J(){var n=Object(u.a)(["\n  width: 18rem;\n  height: 2rem;\n  background-color: lightgray;\n  border-radius: 3px;\n  border: none;\n  color: black;\n  margin: 0 10px;\n  padding-left: 18px;\n  ::placeholder {\n    font-size: 17px;\n    width: 100%;\n    color: black;\n  }\n  @media (max-width: 768px) {   \n    width: 55%;\n  }\n"]);return J=function(){return n},n}I.updates.watch((function(n){return localStorage.setItem(I.shortName,JSON.stringify(n))})),z.updates.watch((function(n){return localStorage.setItem(z.shortName,JSON.stringify(n))})),z.getState().length<1&&j("\u041c\u041e\u0421\u041a\u0412\u0410"),I.getState().length>0&&E(I.getState()),Object(m.i)({source:N,clock:w,target:j});var C=l.default.input(J());function T(){var n=Object(u.a)(["\n  margin: 0;\n  width: 100%;\n  height: 30%;\n  color: white;\n  font-size: 4rem;\n  text-align: center;\n  @media (max-width: 768px) {\n    width: 80%;\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 2rem;\n  }\n"]);return T=function(){return n},n}var A=l.default.h1(T());function D(){var n=Object(u.a)(["\n  display: grid;\n  margin-left: -15px;\n  grid-gap: 20px;\n  grid-template-columns: 1fr 20px 120px;\n  color: #fff;\n  font-size: 17px;\n  width: 98%;\n"]);return D=function(){return n},n}var F=l.default.li(D());function L(){var n=Object(u.a)(["\n  height: 100%;\n  list-style: none;\n  margin-bottom: 0;\n"]);return L=function(){return n},n}var P=l.default.ul(L());function _(){var n=Object(u.a)(["\n  padding-left: 20px;\n  font-size: 25px;\n  color: #fff;\n"]);return _=function(){return n},n}var q=l.default.label(_());function B(){var n=Object(u.a)([""]);return B=function(){return n},n}var G=l.default.form(B());function H(){var n=Object(u.a)(["\n  position: relative;\n  height: 150px;\n  background: linear-gradient(to right, #2c3e50, #3498db);\n  @media (max-width: 768px) {\n    position: relative;\n    height: 250px;\n  }\n"]);return H=function(){return n},n}var K=l.default.header(H());function M(){var n=Object(u.a)(["\n  text-align: center;\n  color: #fff;\n  font-size: 36px;\n"]);return M=function(){return n},n}var Q=l.default.div(M());function R(){var n=Object(u.a)(["\n  border-style: none;\n  outline: none;\n  width: 120px;\n  height: 30px;\n  border-radius: 10px;\n  background-color: green;\n  color: #fff;\n  :hover {\n    opacity: 0.9;\n  }\n  :active {\n    background-color: red;\n  }\n"]);return R=function(){return n},n}var U=l.default.button(R());function V(){var n=Object(u.a)(['\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  background-color: green;\n  color: #fff;\n  font-size: 16px;\n  width: 280px;\n  height: 20px;\n  text-align: center;\n  border-radius: 5px;\n  ::after {\n    content: " ";\n    display: block;\n    position: absolute;\n    left: 75%;\n    width: 35px;\n    height: 35px;\n    border-radius: 50%;\n    border: 6px solid #fff;\n    border-color: yellow transparent yellow transparent;\n    animation: 1.2s '," linear infinite;\n  }\n  @media (max-width: 768px) {\n    top: 10%;\n    left: 0;\n    width: 100%;\n    background-color: none;\n  }\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }  \n"]);return W=function(){return n},n}var X=Object(l.keyframes)(W()),Y=l.default.div(V(),X);function Z(){var n=Object(u.a)(["\n  min-height: 740px;\n  background: linear-gradient(to right, #2c3e50, #4ca1af);\n"]);return Z=function(){return n},n}var $=l.default.section(Z());function nn(){var n=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n"]);return nn=function(){return n},n}var en=l.default.img(nn()),tn=function(n){var e=n.submitter,t=n.value,r=n.placeholder,c=n.type,i=n.changer,o=n.label,u=n.buttonText;return a.a.createElement(G,{onSubmit:e},a.a.createElement(q,null,o),a.a.createElement(C,{type:c,value:t,placeholder:r,onChange:i}),a.a.createElement(U,{onClick:e},u))},rn=function(){var n=Object(p.c)(I);return a.a.useEffect((function(){var e=setInterval((function(){E(n)}),6e4);return function(){return clearInterval(e)}}),[n]),a.a.createElement(a.a.Fragment,null,a.a.createElement(K,{className:"App-header"},a.a.createElement(A,null,"\u041a\u043b\u0430\u0441\u0441\u043d\u043e\u0435 \u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),a.a.createElement(cn,{spinner:Y})),a.a.createElement($,null,a.a.createElement(tn,{value:Object(p.c)(N),changer:k,type:"text",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",submitter:y,label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430",buttonText:"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u043e\u0440\u043e\u0434"}),Object(p.c)(z).length>0?a.a.createElement(an,null):a.a.createElement(Q,null,"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0433\u043e\u0440\u043e\u0434")))},an=function(){return Object(p.b)(z,(function(n,e){var t=n.name,r=n.weather,c=n.temperature,i=n.cod,o=n.feels,u=200===i?a.a.createElement(F,null,"\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",t," \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 ",r[0].description,", \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ",parseInt(c)," \xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e, \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",parseInt(o),"\xb0 \u043f\u043e \u0446\u0435\u043b\u044c\u0441\u0438\u044e",a.a.createElement(en,{alt:"\u043f\u043e\u0433\u043e\u0434\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435",src:"http://openweathermap.org/img/w/".concat(r[0].icon,".png")}),a.a.createElement(U,{type:"button",onClick:function(){S(e)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")):null;return a.a.createElement(P,null,u)}))},cn=Object(p.a)(j.pending,(function(n,e){return e?a.a.createElement(Y,null,"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435"):null}));var on=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.Normalize,null),a.a.createElement(d,null),a.a.createElement(rn,null))};i.a.render(a.a.createElement(on,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.53a6b0d5.chunk.js.map