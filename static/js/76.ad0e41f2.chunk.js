"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(439),r=a(791),c=a(689),i=a(228),s="Cast_image__mOsuM",o="Cast_text__P2vgu",u="Cast_list__GlWio",p="Cast_wrapper__XmIBi",f=a(184),l=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),a=t[0],l=t[1],m=(0,c.UO)().id;(0,r.useEffect)((function(){try{i.Z.getCast(m).then((function(e){l(e.data.cast)}))}catch(e){console.log(e)}}),[m]);var _=a.map((function(e,t){var a=e.name,n=e.profile_path,r=e.character;return(0,f.jsxs)("li",{className:p,children:[n&&(0,f.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w500".concat(n),alt:a}),(0,f.jsx)("p",{className:o,children:a}),(0,f.jsx)("p",{className:o,children:"Character: ".concat(r)})]},t)}));return(0,f.jsx)("ul",{className:u,children:_})}},228:function(e,t,a){var n=a(861),r=a(757),c=a.n(r),i=a(912);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="9c395628f4600763367d246b976f93ea",o=function(){var e=(0,n.Z)(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u={getTrendingMovies:o,getSingleMovie:function(e){return i.Z.get("/movie/".concat(e,"?api_key=").concat(s))},getMoviesByQuery:function(e){return i.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e))},getCast:function(e){return i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s))},getReview:function(e){return i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s))}};t.Z=u}}]);
//# sourceMappingURL=76.ad0e41f2.chunk.js.map