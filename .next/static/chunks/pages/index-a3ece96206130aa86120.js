_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),s=n.n(r),o=n("HaE+"),c=n("1OyB"),a=n("vuIU"),i=n("Ji7U"),l=n("md7G"),u=n("foSv"),j=n("nKUr"),d=n("MX0m"),x=n.n(d),f=n("q1tI"),p=n.n(f),h=n("LpSC"),b=n.n(h),m=n("eomm"),v=n.n(m),y=n("YFqc"),g=n.n(y),O=function(e){var t=e.stories;return Object(j.jsxs)("div",{className:"jsx-98085932 story-list",children:[t.map((function(e,t){return Object(j.jsxs)("div",{className:"jsx-98085932 story",children:[Object(j.jsx)("h2",{className:"jsx-98085932 story-title",children:Object(j.jsx)("a",{href:e.url,className:"jsx-98085932",children:e.title})}),Object(j.jsxs)("div",{className:"jsx-98085932 story-details",children:[Object(j.jsxs)("span",{className:"jsx-98085932",children:[e.points||0,"points"]}),Object(j.jsx)(g.a,{href:"/story?Id=".concat(e.id),children:Object(j.jsxs)("a",{className:"jsx-98085932",children:[e.comments_count||0,"comments"]})})]})]},t)})),Object(j.jsx)(x.a,{id:"98085932",children:[".story-list.jsx-98085932{padding:0 1em;}",".story.jsx-98085932{padding:1em 0;}",".story-title.jsx-98085932{font-size:1rem;font-weight:400;margin:0;margin-bottom:0.5rm;}",".story-title.jsx-98085932 a.jsx-98085932{color:#333;-webkit-text-decoration:none;text-decoration:none;}",".story-title.jsx-98085932 a.jsx-98085932:hover,.story-details.jsx-98085932 a.jsx-98085932:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".story-details.jsx-98085932{font-sixe:0.8rem;font-size:bold;}",".story-details.jsx-98085932{margin-right:1em;}",".story-details.jsx-98085932 a.jsx-98085932{color:#6600ff;-webkit-text-decoration:none;text-decoration:none;}"]})]})},w=n("ezhv");function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var s=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var N=function(e){Object(i.a)(n,e);var t=k(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then((function(e){return console.log("Service Worker Registration Successful",e)})).catch((function(e){console.warn("Service Worker Registraion failed!",e.message)}))}},{key:"render",value:function(){var e=this.props,t=e.stories,n=e.page;return 0==t.length?Object(j.jsx)(v.a,{statusCode:503}):Object(j.jsxs)(w.a,{title:"Hacker Next",description:"Next js sample",backButton:n>1,children:[Object(j.jsx)(O,{stories:t}),Object(j.jsx)("footer",{className:"jsx-2581509140",children:Object(j.jsx)(g.a,{href:"/?page=".concat(+n+1),children:Object(j.jsxs)("a",{className:"jsx-2581509140",children:["Next Page(",n+1,")"]})})}),Object(j.jsx)(x.a,{id:"2581509140",children:["footer.jsx-2581509140{padding:1em;}","footer.jsx-2581509140 a.jsx-2581509140{font-weight:bold;color:black;-webkit-text-decoration:none;text-decoration:none;}"]})]})}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(s.a.mark((function e(t){var n,r,o,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,t.res,n=t.query,e.prev=1,o=Number(n.page)||1,e.next=5,b()("https://node-hnapi.herokuapp.com/news?page=".concat(o));case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),r=[];case 15:return e.abrupt("return",{stories:r,page:o});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}]),n}(p.a.Component);t.default=N},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);