"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[954],{126:function(e,t,n){var r=n(87),i=n(184),c=function(e){var t=e.items.map((function(e){var t=e.id,n=e.title;return(0,i.jsx)("li",{title:n,id:t,children:(0,i.jsx)(r.rU,{to:"/movies/".concat(t),children:n})},t)}));return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:t})})};t.Z=c,c.defaultProps={items:[]}},954:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),i=n(791),c=n(228),a=n(126),o=n(184),u=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],u=t[1];return(0,i.useEffect)((function(){try{c.Z.getTrendingMovies().then((function(e){u(e.results)}))}catch(e){console.log(e)}}),[u]),(0,o.jsx)("div",{children:n.length>0&&(0,o.jsx)(a.Z,{items:n})})},s="HomePage_container__bUkO+",d=function(){return(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:(0,o.jsx)(u,{})})]})}},228:function(e,t,n){var r=n(861),i=n(757),c=n.n(i),a=n(912);a.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="9c395628f4600763367d246b976f93ea",u=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s={getTrendingMovies:u,getSingleMovie:function(e){return a.Z.get("/movie/".concat(e,"?api_key=").concat(o))},getMoviesByQuery:function(e){return a.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(e))},getCast:function(e){return a.Z.get("/movie/".concat(e,"/credits?api_key=").concat(o))},getReview:function(e){return a.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(o))}};t.Z=s}}]);
//# sourceMappingURL=954.a59d49b2.chunk.js.map