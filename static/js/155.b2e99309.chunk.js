/*! For license information please see 155.b2e99309.chunk.js.LICENSE.txt */
(self.webpackChunkmovie_search_app=self.webpackChunkmovie_search_app||[]).push([[155],{1155:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(9439),a=r(2791),i=r(9434),u=r(638),c=r(6515),s=r(2300),o={BackBtnDiv:"MoviesView_BackBtnDiv__R-FRD",MoviesNotFoundField:"MoviesView_MoviesNotFoundField__qjclm",TextField:"MoviesView_TextField__KaFdj",SmallText:"MoviesView_SmallText__JVsp3",NoText:"MoviesView_NoText__eu48V",LoadMoreField:"MoviesView_LoadMoreField__ArlrN",LoadMoreBtn:"MoviesView_LoadMoreBtn__bPILB"},l={SearchForm:"SearchForm_SearchForm__04cD7",SearchBtn:"SearchForm_SearchBtn__t0MQl"},d=r(184);function v(e){var t=e.onSubmit,r=(0,a.useState)(""),i=(0,n.Z)(r,2),u=i[0],c=i[1],s=(0,a.useCallback)((function(e){var t=e.currentTarget.value;c(t)}),[]),o=(0,a.useCallback)((function(e){e.preventDefault(),t(u),v()}),[t,u]),v=function(){c("")};return(0,d.jsx)("div",{className:l.SearchForm,children:(0,d.jsxs)("form",{onSubmit:o,role:"search",children:[(0,d.jsx)("label",{htmlFor:"search",children:"Search "}),(0,d.jsx)("input",{className:l.SearchInput,id:"search",type:"search",placeholder:"Search...","aria-label":"Search",value:u,onChange:s,required:!0}),(0,d.jsx)("button",{type:"submit",className:l.SearchBtn,children:"Go!"})]})})}var p=r(1087),f=r(1694),h=r.n(f),m="MoviesList_MoviesList__7dAIE",x="MoviesList_MovieCard__Jtrd6",b="MovieCard_Article__4smo+";function _(e){var t=e.title,r=e.url,i=(0,a.useState)(),u=(0,n.Z)(i,2),c=u[0],s=u[1];return(0,a.useEffect)((function(){s(null===r?"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg":"https://image.tmdb.org/t/p/w300/".concat(r))}),[r]),(0,d.jsxs)("article",{className:b,children:[(0,d.jsx)("img",{src:c,className:"card-img-top",alt:t}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("h5",{className:"card-title",children:t})})]})}function j(){var e=(0,i.v9)(s.VW);return(0,d.jsx)(d.Fragment,{children:e&&(0,d.jsx)(u.E.ul,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:.3}}},className:m,children:e.map((function(e){var t=e.id,r=e.title,n=e.poster_path;return(0,d.jsx)("li",{className:h()(x,"card shadow p-3 mb-3 bg-dark bg-opacity-75 rounded "),children:(0,d.jsx)(p.rU,{className:"link-underline-light link-body-emphasis  text-white link-underline-opacity-0",to:"/movie-search-app/movies/".concat(t),children:(0,d.jsx)(_,{title:r,url:n})})},t)}))})})}var y=r(2426);function g(){var e=(0,i.I0)(),t=(0,a.useState)(1),r=(0,n.Z)(t,2),l=r[0],p=r[1],f=(0,a.useState)(""),h=(0,n.Z)(f,2),m=h[0],x=h[1],b=(0,i.v9)(s.VW),_=(0,a.useCallback)((function(t){p(1),x(t);var r={query:t,page:1};e((0,c.z1)(r,!1))}),[e]),g=(0,a.useCallback)((function(){var t=l+1;p(t);var r={query:m,page:t};e((0,c.z1)(r,!0))}),[e,l,m]);return(0,d.jsx)("div",{className:o.BodyPage,children:(0,d.jsxs)(u.E.div,{initial:"hidden",animate:"visible",exit:{opacity:0,transition:{duration:.3}},className:"container",children:[(0,d.jsx)(v,{onSubmit:_}),(0,d.jsx)("div",{className:o.BackBtnDiv,children:(0,d.jsx)(y.Z,{})}),(0,d.jsx)(j,{}),b.length>19&&(0,d.jsx)("div",{className:o.LoadMoreField,children:(0,d.jsx)("button",{type:"button",className:o.LoadMoreBtn,onClick:g,children:"Load more"})}),0===b.length&&(0,d.jsx)(u.E.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{duration:1}}},className:o.MoviesNotFoundField,children:(0,d.jsxs)("div",{className:o.TextField,children:[(0,d.jsxs)("div",{className:o.SmallText,children:[(0,d.jsx)("span",{children:"Movies"}),(0,d.jsx)("span",{children:"found"})]}),(0,d.jsx)("span",{className:o.NoText,children:"not"})]})})]})})}},2426:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});r(2791);var n=r(7689),a="BackButton_button-perspective__s+wLS",i=r(184);function u(e){var t=e.title,r=void 0===t?"Go back":t,u=e.link,c=(0,n.s0)();return(0,i.jsx)("button",{type:"button",onClick:function(){c(u||-1)},className:a,children:r})}},6515:function(e,t,r){"use strict";r.d(t,{yx:function(){return f},Mn:function(){return h},gu:function(){return p},z1:function(){return v},WB:function(){return m}});var n=r(5861),a=r(4687),i=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.headers.common={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTEyN2Y1M2FlOTI3ZmMyMmJkN2YzYWJiMTYyMjlhMCIsInN1YiI6IjY0NWJmYjBlMTU2Y2M3MDExZTAxYjQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IS4ys1KMSa1SyeQ79-hzJTYaGcyl7jb10Lui4h4xIuA")},u.Z.defaults.params={api_key:"8e127f53ae927fc22bd7f3abb16229a0"};var c=function(e){var t=e.query,r=e.page,n=void 0===r?1:r;return u.Z.get("/search/movie",{params:{query:t,page:n}}).then((function(e){return e.data.results}))},s=function(e){return u.Z.get("/movie/".concat(e)).then((function(e){return e.data}))},o=function(e){return u.Z.get("/movie/".concat(e,"/credits")).then((function(e){return e.data.cast}))},l=function(e){return u.Z.get("/movie/".concat(e,"/reviews")).then((function(e){return e.data.results}))},d=r(6284),v=function(e,t){return function(){var r=(0,n.Z)(i().mark((function r(n){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n((0,d.C5)()),r.prev=1,r.next=4,c(e);case 4:return a=r.sent,r.abrupt("return",n((0,d.wB)(a,t)));case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",n((0,d.S4)(r.t0.message)));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,n.Z)(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r((0,d.FE)()),t.prev=1,t.next=4,s(e);case 4:return n=t.sent,t.abrupt("return",r((0,d.j2)(n)));case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r((0,d.pr)(t.t0.message)));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,d.p3)()),e.prev=1,e.next=4,u.Z.get("/trending/movie/week").then((function(e){return e.data.results}));case 4:return r=e.sent,e.abrupt("return",t((0,d.r)(r)));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",t((0,d.Tv)(e.t0.message)));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,n.Z)(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r((0,d.DE)()),t.prev=1,t.next=4,o(e);case 4:return n=t.sent,t.abrupt("return",r((0,d.wi)(n)));case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r((0,d.ub)(t.t0.message)));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=(0,n.Z)(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r((0,d.Tg)()),t.prev=1,t.next=4,l(e);case 4:return n=t.sent,t.abrupt("return",r((0,d.Kf)(n)));case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r((0,d.G2)(t.t0.message)));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},2300:function(e,t,r){"use strict";r.d(t,{VW:function(){return n},Y6:function(){return i},af:function(){return a},jc:function(){return c},l1:function(){return u}});var n=function(e){return e.movies.movies},a=function(e){return e.movies.movieDetails},i=function(e){return e.movies.trends},u=function(e){return e.movies.cast},c=function(e){return e.movies.reviews}},1694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var u=a.apply(null,r);u&&e.push(u)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=155.b2e99309.chunk.js.map