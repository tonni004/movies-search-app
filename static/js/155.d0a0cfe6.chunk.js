/*! For license information please see 155.d0a0cfe6.chunk.js.LICENSE.txt */
(self.webpackChunkmovie_search_app=self.webpackChunkmovie_search_app||[]).push([[155],{155:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(982),a=n(861),i=n(671),s=n(144),c=n(136),o=n(716),u=n(757),l=n.n(u),h=n(791),v=n(390),d={BackBtnDiv:"MoviesView_BackBtnDiv__R-FRD"},f="SearchForm_SearchForm__04cD7",m="SearchForm_SearchBtn__t0MQl",p=n(184),b=function(e){(0,c.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e.handleChange=function(t){var n=t.currentTarget.value;e.setState({value:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value),e.reset()},e.reset=function(){e.setState({value:""})},e}return(0,s.Z)(n,[{key:"render",value:function(){return(0,p.jsx)("div",{className:f,children:(0,p.jsxs)("form",{onSubmit:this.handleSubmit,role:"search",children:[(0,p.jsx)("label",{htmlFor:"search",children:"Search "}),(0,p.jsx)("input",{id:"search",type:"search",placeholder:"Search...","aria-label":"Search",value:this.state.value,onChange:this.handleChange,required:!0}),(0,p.jsx)("button",{type:"submit",className:m,children:"Go!"})]})})}}]),n}(h.Component),g=b,y=n(523),x=n(880),j=n(161),S="MovieCard_Article__4smo+",_=function(e){var t=e.title,n=e.url;return(0,p.jsxs)("article",{className:S,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(n),className:"card-img-top",alt:t}),(0,p.jsx)("div",{className:"card-body",children:(0,p.jsx)("h5",{className:"card-title",children:t})})]})};_.defaultProps={url:j};var Z=_,k=n(694),N=n.n(k),M="MoviesList_MoviesList__7dAIE",w="MoviesList_MovieCard__Jtrd6",I=(0,x.EN)((function(e){var t=e.movies;return(0,p.jsx)(p.Fragment,{children:t&&(0,p.jsx)("ul",{className:M,children:t.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return(0,p.jsx)("li",{className:N()(w,"card shadow p-3 mb-5 bg-dark bg-opacity-75 rounded "),children:(0,p.jsx)(y.rU,{className:"link-underline-light link-body-emphasis  text-white link-underline-opacity-0",to:{pathname:"/movies/".concat(t),state:"".concat(t)},children:(0,p.jsx)(Z,{title:n,url:r,id:t})})},t)}))})})})),B=n(426),C=function(e){(0,c.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={value:"",movies:[],currentPage:1},e.onFormSubmit=function(t){e.setState({value:t,currentPage:1,movies:[]})},e.fetchMovies=(0,a.Z)(l().mark((function t(){var n,a;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.value,t.prev=1,t.next=4,(0,v.vw)(n).then((function(e){return e.data.results}));case 4:a=t.sent,e.setState((function(e){return{movies:[].concat((0,r.Z)(e.movies),(0,r.Z)(a))}})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log("Error");case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return(0,s.Z)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.state.value;t.value!==n&&this.fetchMovies()}},{key:"render",value:function(){var e=this.state.movies,t=this.props.history;return(0,p.jsx)("div",{className:d.BodyPage,children:(0,p.jsxs)("div",{className:"container",children:[(0,p.jsx)(g,{onSubmit:this.onFormSubmit}),(0,p.jsx)("div",{className:d.BackBtnDiv,children:(0,p.jsx)(B.Z,{history:t})}),(0,p.jsx)(I,{movies:e}),0===e.length&&(0,p.jsx)("p",{className:"text-center mt-3 fw-medium",children:"Movies not found."})]})})}}]),n}(h.Component),J=C},426:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(791);var r="BackButton_button-perspective__s+wLS",a=n(184),i=function(e){var t=e.history,n=e.title,i=void 0===n?"Go back":n;return(0,a.jsx)("button",{type:"button",onClick:function(){t.goBack()},className:r,children:i})}},390:function(e,t,n){"use strict";n.d(t,{PY:function(){return s},Qp:function(){return o},gW:function(){return c},hd:function(){return i},vw:function(){return a}});var r=n(819);r.Z.defaults.baseURL="https://api.themoviedb.org/3",r.Z.defaults.headers.common={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTEyN2Y1M2FlOTI3ZmMyMmJkN2YzYWJiMTYyMjlhMCIsInN1YiI6IjY0NWJmYjBlMTU2Y2M3MDExZTAxYjQ3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IS4ys1KMSa1SyeQ79-hzJTYaGcyl7jb10Lui4h4xIuA")},r.Z.defaults.params={api_key:"8e127f53ae927fc22bd7f3abb16229a0"};var a=function(e){return r.Z.get("/search/movie",{params:{query:e}})},i=function(e){return r.Z.get("/movie/".concat(e))},s=function(){return r.Z.get("/trending/movie/week")},c=function(e){return r.Z.get("/movie/".concat(e,"/credits"))},o=function(e){return r.Z.get("/movie/".concat(e,"/reviews"))}},694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},161:function(e,t,n){"use strict";e.exports=n.p+"static/media/default.0f62cb06661a6dcb86b3.jpg"}}]);
//# sourceMappingURL=155.d0a0cfe6.chunk.js.map