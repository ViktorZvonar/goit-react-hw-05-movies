"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[796],{796:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(689),i=n(791),o=n(228),c="SingleMoviePage_wrapper__T37mb",s="SingleMoviePage_button__+job9",l="SingleMoviePage_image__HKQyp",v="SingleMoviePage_container__vlVXl",d="SingleMoviePage_info__d4XXR",u=n(87),g=n(184);function h(){var e,t,n=(0,a.UO)().id,r=(0,a.TH)();return(0,g.jsxs)("div",{children:[(0,g.jsxs)("ul",{className:"",children:[(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{state:{from:null===(e=r.state)||void 0===e?void 0:e.from},to:"/movies/".concat(n,"/cast"),children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(u.rU,{state:{from:null===(t=r.state)||void 0===t?void 0:t.from},to:"/movies/".concat(n,"/reviews"),children:"Reviews"})})]}),(0,g.jsx)(i.Suspense,{fallback:(0,g.jsx)("p",{children:"Wait! I'm loading..."}),children:(0,g.jsx)(a.j3,{})})]})}var f=function(){var e,t=(0,i.useState)(0),n=(0,r.Z)(t,2),u=n[0],f=n[1],p=(0,a.UO)().id,m=(0,a.s0)(),_=(null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)||"/movies";(0,i.useEffect)((function(){try{o.Z.getSingleMovie(p).then((function(e){var t=e.data,n=t.title,r=t.overview,a=t.poster_path,i=t.vote_average,o=t.genres,c=t.release_date;f({title:n,overview:r,poster_path:a,vote_average:i,genres:o,release_date:c})}))}catch(e){console.log(e)}}),[p]);var x=u.title,j=u.overview,w=u.poster_path,k=u.vote_average,b=u.genres,y=u.release_date;if(u){return(0,g.jsxs)("div",{className:c,children:[(0,g.jsx)("button",{className:s,onClick:function(){return m(_)},children:"\u2190 Go back"}),(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500".concat(w),alt:x}),(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("h2",{children:"".concat(x," (").concat(y,")")}),(0,g.jsx)("p",{children:"User score: ".concat(k.toFixed(1)," out of 10")}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:j}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("p",{children:b.map((function(e){var t=e.name;return"".concat(t," ")}))})]})]}),(0,g.jsx)("p",{children:"Additional information"}),(0,g.jsx)(h,{})]})}}},228:function(e,t,n){var r=n(861),a=n(757),i=n.n(a),o=n(912);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="9c395628f4600763367d246b976f93ea",s=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l={getTrendingMovies:s,getSingleMovie:function(e){return o.Z.get("/movie/".concat(e,"?api_key=").concat(c))},getMoviesByQuery:function(e){return o.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(e))},getCast:function(e){return o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c))},getReview:function(e){return o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c))}};t.Z=l}}]);
//# sourceMappingURL=796.41952551.chunk.js.map