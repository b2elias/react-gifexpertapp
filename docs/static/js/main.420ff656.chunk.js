(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),r=n.n(c),i=n(5),s=n(2),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(i.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",placeholder:"Name",value:r,onChange:function(e){o(e.target.value)}})})},j=n(10),d=n(7),l=n.n(d),p=n(9),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"L5plmDzgdFqWSJ4JbFYioJFFbC89GFQj",5,n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=").concat("L5plmDzgdFqWSJ4JbFYioJFFbC89GFQj","&limit=").concat(5),e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){e.id;var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(m,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["One punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("ol",{children:n.map((function(e,t){return Object(u.jsx)(f,{category:e},t)}))})]})};n(17);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.420ff656.chunk.js.map