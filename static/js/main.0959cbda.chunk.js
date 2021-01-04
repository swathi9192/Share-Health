(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},80:function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset.target,n=document.getElementById(t);e.classList.toggle("is-active"),n.classList.toggle("is-active")}))}))}))},81:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),c=n.n(a),r=n(22),i=n.n(r),o=n(13),l=n(16),u=n(41),m=n(42),d=n(18),p=n(4),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload.posts.reduce((function(e,t){return e[t.id]=t,e}),{});case"FETCH_POST":return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t.payload.post.id,t.payload.post));default:return e}},h=n(23),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_COMMENTS":return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t.payload.id,t.payload.comments));case"ADD_COMMENT":return Object(p.a)(Object(p.a)({},e),{},Object(d.a)({},t.payload.id,[].concat(Object(h.a)(e[t.payload.id]),[t.payload.comment])));default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isSignedIn:!1,userId:null,userName:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(p.a)(Object(p.a)({},e),{},{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName});case"SIGN_OUT":return Object(p.a)(Object(p.a)({},e),{},{isSignedIn:!1,userId:null,userName:null});default:return e}},x=Object(l.combineReducers)({posts:j,comments:b,auth:O}),g=Object(l.createStore)(x,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(m.a))),f=n(5),v=n(6),C=n(8),w=n(7),A=n(17),I=n(3),N=n(15),H=n.n(N),T=n(20),S=n(26),D=n.n(S).a.create({baseURL:"https://my-json-server.typicode.com/swathi9192/json-server-sharehealth"}),M=function(e,t){return{type:"ADD_COMMENT",payload:{id:e,comment:t}}},y=function(e,t){return{type:"FETCH_COMMENTS",payload:{id:e,comments:t}}},E=function(e,t){return{type:"SIGN_IN",payload:{userId:e,userName:t}}},B=function(){return{type:"SIGN_OUT"}},J=function(e){return e.posts},P=function(e,t){return e.posts[t]},k=function(e){return e.auth},Y=n(43),R=n.n(Y),G=function(e){return R()(e).format("MMM Do YYYY")},Z=function(e){return Object.keys(e.posts).map((function(t){return e.posts[t]})).sort((function(e,t){return new Date(t.publish_date)-new Date(e.publish_date)})).map((function(e){return Object(s.jsx)("div",{className:"column is-half is-narrow",children:Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h3",{className:"title",children:Object(s.jsx)(A.b,{to:"".concat("/Share-Health","/").concat(encodeURIComponent(e.title.split(" ").join("-").concat("-").concat(e.id))),children:e.title})}),Object(s.jsxs)("h6",{className:"subtitle has-text-grey mb-2",children:["by ",e.author," - ",G(e.publish_date)]}),Object(s.jsx)("p",{children:e.description})]})},e.id)}))},L=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.loadPosts()}},{key:"render",value:function(){return Object(s.jsx)("section",{className:"section homeComponent",children:Object(s.jsxs)("div",{className:"columns is-flex is-flex-direction-column is-align-items-center",children:[this.props.auth.isSignedIn&&Object(s.jsxs)("h2",{className:"subtitle welcomeText",children:["Welcome",Object(s.jsxs)("strong",{children:[" ",this.props.auth.userName]})]}),Object(s.jsx)(Z,{posts:this.props.posts})]})})}}]),n}(c.a.Component),F=Object(o.b)((function(e){return{posts:J(e),auth:k(e)}}),{loadPosts:function(){return function(){var e=Object(T.a)(H.a.mark((function e(t){var n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get("posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:{posts:n.data}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},signIn:E,signOut:B})(L),Q=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(f.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={commentText:""},e.handleTextAreaChange=function(t){e.setState({commentText:t.target.value})},e.submitComment=function(){""!==e.state.commentText&&e.props.submitComment(e.state.commentText,e.props.parentId||null)},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsx)("article",{className:"media",children:Object(s.jsxs)("div",{className:"media-content",children:[Object(s.jsx)("div",{className:"field",children:Object(s.jsx)("p",{className:"control",children:Object(s.jsx)("textarea",{className:"textarea",placeholder:"Add a comment...",value:this.state.commentText,onChange:function(t){return e.handleTextAreaChange(t)}})})}),Object(s.jsx)("div",{className:"field",children:Object(s.jsx)("p",{className:"control",children:Object(s.jsx)("button",{className:"button",onClick:this.submitComment,children:"Submit"})})})]})})}}]),n}(c.a.Component),V=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var s;return Object(f.a)(this,n),(s=t.call(this,e)).state={showNestedComments:!1,showPostComment:!1},s.toggleNestedComments=function(){s.setState((function(e){return{showNestedComments:!e.showNestedComments}}))},s.showPostComment=function(){s.setState((function(e){return{showPostComment:!e.showPostComment,showNestedComments:!0}}))},s}return Object(v.a)(n,[{key:"render",value:function(){var e=this,t=this.props,a=t.comment,c=t.allComments,r=c.filter((function(t){return t.parent_id===e.props.comment.id}))||[];console.log(r);var i=r.map((function(t){return Object(s.jsx)(n,{isSignedIn:e.props.isSignedIn,auth:e.props.auth,submitComment:e.props.submitComment,comment:t,allComments:c},t.id)})),o=new Date(a.date);o.getDate(),o.getMonth(),o.getFullYear();return Object(s.jsxs)("article",{className:"media",children:[Object(s.jsx)("figure",{className:"media-left",children:Object(s.jsx)("p",{className:"image is-64x64",children:Object(s.jsx)("img",{src:"https://bulma.io/images/placeholders/128x128.png"})})}),Object(s.jsxs)("div",{className:"media-content",children:[Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[a.user," "]})," -"," ",Object(s.jsxs)("small",{children:[" ",G(a.date)]}),Object(s.jsx)("br",{}),a.content,Object(s.jsx)("br",{}),Object(s.jsxs)("small",{children:[" ",this.props.isSignedIn&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("a",{children:"Like"})," \xb7"," ",Object(s.jsxs)("a",{onClick:this.showPostComment,children:[this.state.showPostComment?"Cancel":"Reply"," "]})," "]}),r.length>0&&Object(s.jsxs)("a",{onClick:this.toggleNestedComments,children:[this.props.isSignedIn?". ":"",r.length," ",1===r.length?"reply":"replies"," "]})]})]})}),this.state.showPostComment&&Object(s.jsx)(Q,{parentId:this.props.comment.id,submitComment:this.props.submitComment}),this.state.showNestedComments&&i]})]})}}]),n}(c.a.Component),K=function(e){var t=e.comments,n=e.submitComment,a=e.isSignedIn;return t.filter((function(e){return null===e.parent_id})).map((function(e){return Object(s.jsx)(V,{submitComment:n,comment:e,allComments:t,isSignedIn:a},e.id)}))},W=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(f.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleBtnClick=function(){e.props.isSignedIn?e.auth.signOut():!1===e.props.isSignedIn&&e.auth.signIn()},e.onAuthChange=function(){e.auth.isSignedIn.get()?e.props.signIn(e.auth.currentUser.get().getId(),e.auth.currentUser.get().getBasicProfile().getName()):!1===e.auth.isSignedIn.get()&&e.props.signOut()},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"888650686737-99vo39cnloqmlu8vk1816d7ih6hm3ilt.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"render",value:function(){return Object(s.jsxs)("a",{className:"is-medium is-google",onClick:this.handleBtnClick,children:[Object(s.jsx)("span",{className:"icon",children:Object(s.jsx)("i",{className:"fab fa-google"})}),Object(s.jsx)("span",{children:this.props.isSignedIn?"Sign Out":"Sign In"})]})}}]),n}(c.a.Component),q=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:E,signOut:B})(W),U=function(e,t){return e.comments[t]},X=function(e){return decodeURIComponent(e).split("-").pop()},z=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(f.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).submitComment=function(t,n){var s=X(e.props.match.params.title),a={postId:s,parent_id:n,user:e.props.auth.userName,date:new Date,content:t};e.props.postComment(s,a)},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=X(this.props.match.params.title);this.props.loadPost(e),this.props.loadComments(e),console.log(this.props)}},{key:"render",value:function(){return this.props.post?Object(s.jsx)("section",{className:"section postComponent",children:Object(s.jsx)("div",{className:"columns is-flex is-flex-direction-column is-align-items-center",children:Object(s.jsxs)("div",{className:"column is-6 ",children:[Object(s.jsx)("h1",{className:"title",children:this.props.post.title}),Object(s.jsx)("h4",{className:"subtitle",children:this.props.post.description}),Object(s.jsxs)("h6",{className:"subtitle is-6",children:[this.props.post.author," -"," ",G(this.props.post.publish_date)]}),Object(s.jsx)("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.post.content}}),this.props.comments&&Object(s.jsxs)(s.Fragment,{children:[this.props.auth.isSignedIn?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{className:"title is-4",children:"Comments"}),Object(s.jsx)(Q,{submitComment:this.submitComment})," "]}):Object(s.jsxs)("p",{className:"content",children:["Please ",Object(s.jsx)(q,{})," to comment."]}),Object(s.jsx)(K,{submitComment:this.submitComment,comments:this.props.comments,isSignedIn:this.props.auth.isSignedIn})]})]})})}):null}}]),n}(c.a.Component),_=Object(o.b)((function(e,t){var n=X(t.match.params.title);return{auth:k(e),post:P(e,n),comments:U(e,n)}}),{loadPost:function(e){return function(){var t=Object(T.a)(H.a.mark((function t(n){var s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.get("posts/".concat(e));case 2:s=t.sent,n({type:"FETCH_POST",payload:{post:s.data}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},loadComments:function(e){return function(){var t=Object(T.a)(H.a.mark((function t(n){var s;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.get("posts/".concat(e,"/comments"));case 2:s=t.sent,n(y(e,s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},postComment:function(e,t){return function(){var n=Object(T.a)(H.a.mark((function n(s){var a,c,r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.get("comments");case 2:return a=n.sent,c=Math.max.apply(Math,Object(h.a)(a.data.map((function(e){return e.id})))),t=Object(p.a)({id:c+1},t),n.next=7,D.post("posts/".concat(e,"/comments"),t);case 7:r=n.sent,s(M(e,r.data));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},signIn:E,signOut:B})(z),$=(n(78),n(79),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).renderNavEnd=function(){if(e.props.isSignedIn)return Object(s.jsx)("div",{className:"navbar-end",children:Object(s.jsx)("div",{className:"navbar-item",children:Object(s.jsx)(q,{})})})},e.renderNavStart=function(){if(e.props.isSignedIn)return Object(s.jsx)("div",{className:"navbar-start",children:Object(s.jsx)(A.b,{to:"/home",className:"navbar-item",children:"Home"})})},e}return Object(v.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("nav",{className:"navBarCmpnt navbar is-light",role:"navigation","aria-label":"main navigation",children:[Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(A.b,{to:"/Share-Health",className:"navbar-item",children:Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAABOCAYAAACUugLWAAAACXBIWXMAAC4jAAAuIwF4pT92AAAayElEQVR4Xu1ceZxcVZX+zn3VS7o7hABZ2QImGiKkq7oNi+wQoas6BAGDDjqE0VHHJajgAElIv1udhQBKRiCIDOjo4LAEE8B0VQOyKjvdVU0AEwmCQFYYErL0VvXumd993VX1aumuVxAd/dW7f/Xrd+65937nfnc557wieMVDwEOgIALk4eIh4CFQGAGPHN7M8BAYAgGPHN7U8BDwyOHNAQ+B0hDwdo7S8PKkywgBjxxlZGxvqKUh4JGjNLw86TJCwCNHGRnbG2ppCHjkKA0vT7qMEPDIUUbG9oZaGgIeOUrDy5MuIwQ8cpSRsb2hloaAR47S8PKkywgBjxxlZGxvqKUh4JGjNLw86TJCwCNHGRnbG2ppCHjkKA0vT7qMEPDIUUbG9oZaGgIeOUrDy5MuIwQ8cpSRsb2hloaAR47S8PKkywgBjxxlZGxvqKUh4JGjNLw+svT2pfArC6cpxjRBGKOA/QWwE4xtEPijEHhyzEJ0EcAfuRGv4j5FwCPHPoUzW9l712Jksg/fZMY3iDClWFPMeAOE2yuqsHLMldhdTN57/9dFwCPHXwnfra34qsVYrneJj9DE+wTMH9+C2z9CXa/KPkLAI8c+AjKlhiUqNwM/EwKXfGzVhP/utfCNIyR6P7YuT0HJCPzVyRGS9Z9U7BvLVPnaQ/LZD0ru4T9QBX2MsvoQZeDEfdVtxXiunxE8QmLnvtL596TnHNl4UFJYn4KiHVHE1kNCldq/0JLA4awwqcKoXP/gwue3lVp/KPmPRI7T5GnV1WLnMVAYQyQMEO9iRTtGflj1+qoVz/boxkJyxnhC4npFPHOgcdpDTF+LyNhT+6rzf0967p0D48RjcL8AZu3rfhHw8LipCNGFsNzoniOnVfZgxNHKp+poT3Jd2/J1O7LqSYggAlMF0aGWEG+1L3ppgxu9+1ImKI/bjyjRylBzABb2DCHxDO+/+6LopRv73LQ1+4oTR1q1e5Yy6AsMJoD6BfDDNjO+yk39YjIlkaPxG40V4w62FgB0CUNV5yoniF5iurxNdq5ubp2+UjGd75Qhpo6IjO/zyVNskH+L99taca0CrvgrtnXDhBZcXkx/KOw/F0Arg8faE47pQxLiy20tnR36uUn6Q0SYD/DklC4C3RUx45cV070v3wdlIAxS38jTSeLKaEvsV27aCrUGrmJW38uaY6DtETNe76Z+MZmSyBEKB25lKA3+MIUUAZcwIQTmL2ULUnfUjH+iWKf+0d5vacUMBp4jwF4BXZZdzHgHQDUIkwgwhqvHDDYYJ42TeGYoudkLjhuXqOrrTK3EmckvnoyYsS/p98mqvtjAKptdmMT57S2xZ132/WOLhcINkmF9M1eRgPh1mxn7ofP/IRk4hQknEGgPC2qPLup4Q78PtQYuY1b/nqujjms+vWofHOFdk2OW9J9mEd/lBhUBWqOAGACZa6io2TXBjY5/JJnNEg+TwOdc9vlPrDB/wjQ8kDomfShxQI+BC5TCpUQ4eig9BDw9vgUnDfXePr9Tcl3ee6a/RGX8+OZrjhmt+sVrheoTDBkxO3/mcgwfWywYbvgiWP0YxFmLAjHuj8iub6UamLXYH7IU35EhOt0TMePf18/NLf5mNnArg33ODlX2Vx77wNIX9cLzsYprcoRkw0omK+uYNLQRxS8iZmxBUAamgdSjGTnqj5rxwz9Wj//OKm9qRUAAnW66xYw/VDGaD5TY9c4SHGwkcAQIvdaHePXQFejR95ZTjsE8Bq6xd5QChYDjx7fg+SHao6bW+heJcXDWe6b/jcq4TbrmsP/3ynGkysiJH0XN2I/djGNfycz5wQkj9u7f8xqDM2Nlujsq4z9ItREM+5cA/LV0m0R3R1sy78+WJxwgqPtVZ58qfNX+fXExL4Ec/ueZ+LBUJwTotwaT7Gd1JBG+A8JpDhK0RM34fza1+mcQ84OO/78fNePH6Ofg/MAYVOEcIhoh2Hpxrex6oRDoQTn9ECLjOIDG6/cMvK8YHQ/Jzo258vpONGai9TkDmGQRv9Fudj08UAVobm04mRnTmKwXoi1delfLKqHWxmOIrQYFOgiMHSx4XbuKdxTznmxuxQoC7JVsuMKMDYkenFBTjRH9wHgD6E8CPoNwMBOmEKNrgonHtY73lqIhaeERAAfk6lSMlQeb+O5wbYVa63/KjM+nbcXY1Ca7PpN6bpaBmYrUfzt1EItrIjJ2Y67egYtz3+lgOpwI+nT3dlVF5R/WLHjhfwv1YdaS+oOVJY4n4nEKQgjw+0TcsXZR/PWC9g37NzlPFwLiP9vMWEtKtkn67yHiU9J1WfxSgW4noKZddr6sHT9M/Vn2HMejj/gv+UTv7GtPHJno3TubmA5k0CtR2anxdZ2B4JocwbD/dYDrUp0kNr4XkZ332hNdBi4GqWsz78Q5ERl7aZZZf5IlkPYcEIsNERk7TU9EsHUfg/dL1wHdEDHj16eeNSmYaJkAzSx0RiYWj1VV9ly6ZsF620jnLplxaEIl7mLm9J1GQNzSZsYW6y2coFak9DjP1/oooqB+qkjlHVeI6Q0WPK8QmVL93NIK7en5ZBFufJAkHA9Cd2UvqrkSBzHwFWacRYQtCqgWjAMJuHm8iZ9oXZskGoTIJwgz3ppo4ohhySH9v2DipsyEojejMv7Z1PPZYX+zAGcFGAmQEbMr61jVFPbPJaAF4Jrs9qhfEN1RM3Xy0lUXrrI9aOcvbZzQm7CWMeGs3KO0fs9MTymoeQ/Ll7endGmv5wja8WaWbjJWRFs6rzt7QeMEo0rpBfdqhspbJADaGDXjJ4cWBg7nSvVcRsfAvVaT1LLEg4Ca6NC/Kmp2XVrEVunX7skh/a+A+EDHZL41YsbD+rk5XH+6Av5H/00s3uvGqIYn5BPJWeHAmRbUnRnS4Oltm33/NG6ieoRJfSoXcMWJwEPyVTsW0iTro0TwDzsQEp11UyfP1gbKJaLdF9D22qOmNOx9bWMHkxrnANDe2fSqKNC7WhE+PVQ7BOzkCnFKdEHsvVyZv1yF0ZU1KBq7IcZsEN5KCHxQmcRRFmEpgAMtgeChi2CvqCzh22LgjD4LL6RiGu8sxhRDYQ3l9s+HsRMWIK8/mYWl/q6snZzF+qiMnZ56H2ptuJDZskmYKcb3o2bnPWkdrYGLiXl5oYUpUydzFAtK/wMgPnY4exGJV7a9K0Idt3Uk7HlzzUmjVf/unDsQDdgm9ziVo1iA9rSZ8SkheewnmfqezMxL8XbEjB2Xt+MMCghhnNG2qPOPbgjimhwh6X+Iiac7yMEk6Mc1Vt9Nfd2jq5K1e78KnUzHHE0dkfLIQcZqMD/GUDcX6hwxvheRXfZuFAoH7maoU4sNgtj4ekR2rtXBRiakQbLrsbBYYA6xWu3UQ6DlETP+k2bTv0AJnlesDQGxrM2M3ZQrt70VAcvdfaObGeeDMIYYC0A4yqHrT8T4jc/AyoOuxqbcNrb+ELVchxYW+D4BlQOkH/begaD0rwbxCWlbMb0UkfFzUs/NYf9cBV6e1RZjblTax1CcJaeP9ZHxfCF3fVYdHbij+NH66NkcbrhTwTqzGJZg+lZUxu/XcrNlYGKClO1idkzu70bM2G+CrQ1XgK303SNXr97VIzJ+Uh45WLwofGqJZeGBwn1xf7dyT44h3Ga6k0LQv68t4AY8R9aflST80jH0m5kxPesMmTWCTMdD4YZvMixZDGxi8V8RGZs/5945xt4/vt6Z8u8PTCLxAQh35Ln7SFzpU+I+i9SrRSeA3QHxUNSM5aWDvBvGmQbhd8X66Oo9o4cJK3wK14yV2JNb590wvmUQbrF7Y6Bp3EI8NJTe3F2XGE9XVVal3aZ9ib6LOScmQzxwFNY6m1sDLYpV2mM0bP+F7yTtWm0OB76moJYUHSsbd0Zlp+1+PVs2TBZk/d5ZRwAXtZldj2v3rSJcQ1BHFtJJGHD6NF/dcJSqsB5zkOsBAvYoqC8XrpfxdhXrq2tyDKwm4vfOe0KmQ6R33192Y1T4CflEOg8oGG44B7Buy8gZklnNB3FVwY6TWBlpidkAD1wEex8C01MkxDrF+JCIp0Dxt5m4Nq2TqT0i4/+Sem6S9S8RDXprWHQBake2s8A+bl0sQMp55NP1DeWbM4J64t2i+l8VW1dm2jA6IrIzL3i5aTFmCrbvBeliZ9YCzwlguyIcCcZMIqT7W2DcCTD0BfN1RfjRYAr7TYLxGCvsVoQpQh/LBC4GYLssmRCcuAjtQxk3KAPtIFVSIMzp/myW9b9zHjWJjfZa9M7rRu1YRvJ+JpVOpiTyfT7S0vH8HDmtbi9VPEJk/AFAl7aXIHxCsfqO864qmH7XJuP/rPueu+rbxHcce85bduyBvYm+V7LIQ2JhheLV98u4nU4Tkn4/E0czMnQzM5+XngO5IDE9GJXxvPhKYSIVo4/jvT3ZWf001zednkREL/n21F704HVP2+nWueQAGSvsrVLRDkPQvNzJyTCuazc7VwzXpWYZuEmR+oKDmNGIGddHOruEzMALLNSh+m8C3cNMIZAaSSDtndlBTJON7u7vW3UjvqmY0xFnfVeKyJh9bAy2Bk4Fq7sdBHwuIuPn5fZrs8RnSOBFe8ICOw1g3pPrcNeFqzJpHluvRy16cC4DF4BxKgjpe5tdT+EGy4cbSOEwSqJO+GAfbYYrAvjsuBYMGbALycAT+Xe64TSSOnSTMem22zoSA5fknW84L9Wp466dITHRWsPEjRlsMjtOoRaC0r8ClAkGG8Aja80uTfTC5KhU09rmD6S7BJcFxiChXs4iB9MFbTKeDoTmksNQxgpLWD8giARBzdWeLadDoZRsANc7R6qDzeH6s5WiFRA8uiDbmFdH5MvfKUgOxhN6FScW11dhxJ29tLcre+DGd3TqSXqi2/lZ1mxFPJKIPwTUOihczJRJSxEk7mtriaXvDVnkYPGeXuWI6aVjET9XOpLaQtJ/LRPbRrKJxLQXoHcBPsS5M+l3AljVVsDLsWsZDtybxPuDMv88rgVp58NQU1EH/LoFJkBhJYBuAD8UgG+sxLrNYTwjtFerSOnrxcRJy7BlKLFg2P8kwMU8aOnq2nGRSrnQXqeeZDIrbmN77YhGEHhC9gWdVJJpxiMytlkrm7306HGJpG82QPsJVrtZ+LpYqTmgzBGHIB6ImLF/s+dHThxMpx9FzFjaE3fuwhmH9lf2Z7n4FRsnO934eTvH4BzDYLwkGPa/BWROKqn7ZjGM7TnhRihXRvuWQYllDA4Wqm8k6JS1S+Kv5+0cWpipr7+ysrG6n0cp6n86ixyOLXWWrD/WIror342Y3SLBuDVidtpeM12c5BgYIDEnuTm6ODu20RwO3KKg8naDvPEwrbegvuh0QTplNofxJhEm6QAAAb8HYeXPFO5LEZEB2hbGv4IwArCJdJhinEfABjJwi8XYUW1hS0IgxEDRDARibBpv4pDh7Ja7c2i3NwTeJmbt79+PmSeBOB2MJRaxiIyFbPxyvD9Dt0PKgLhirdn564F6gc8AfHfuwpJfn+6ImvGrB+rkHYls92yqTiFy1I2sOXLVZQPJrYV1DPxfJIwztm6njWMPTr6d1QeH46HY3P9I5Eh3LOz/HDMWO4EemJADqQiFyKGPOjr8f3Zr/acFOy+zpAOE+lijgzTULP1PKcokxw01ECK6PNISt93IhcjBwCPtg9u4U0cwHFgOqLmp/+nVE8DjijFBgPRE3g+EZ5grl0fl87uGan9zGLcR4es57zsshe8eImH73z9YjlG9vbiKBOqVwjaD8LDF2FAJiIoqvGH1weoX0FHeYSe93QbjFxNMpI+RhfqVR45B75zDbt9j8FWpZwGxps2MfVs/n7+gcUJPVd7O0c6kC0aSUqNYUA8Dy6Mt8fTiFpT+x0E8tdiEY9BV7WbcdtLkkoMgHo+YsYuGJIcj0j8cOXR2b6QldoG+t4J6MxnHTFZFd+1RqWN/sb66Jof2BnVveOOTuT7is66fXuvrEauZM25egG6OmvGlBckx6BXJjZ7riHubGbezNGeZjYdZIpmVIsEwLmGm93ywfpBJgwcM9jWvlR3pY0DWhdyeTMZ5UdnpCBINkkgGLmPKJK3peMa2Tb7pKR98MeBS7zebOIkMZHlcBuYwLGL8aM9omFMuhZ2C/dYCTKiqxgFJBaPaQN+YRdigP47aOhAone2mTSKcOX4R0t6ZQnWCrYHHwcoxUcUtUTO2OCUbDAcuB1QmuW8w8KbfB2+cXIUP6t5w3isFxNVtZiyd35TbZiGXLCC+qlhsM8DzmKx0QNJgnJty9Z8tpzcIorY0SZl+3ibjC4ciBzPi7bIr67SSv/to7I1vt5uda3Kj54XqD4e5a3I0twa+xMw3MNTDIOMXdVMn/yEVHQ2F/dkrEdPiNhm/JY8cTH1RGddnSs679BLNB2MTj97zFO0c5WdO2r5wXQiU3LbJOPKQw8T4fisRAfigwTf9xP3HCR4xeW24Q3tJtI8/Haxkpj+2y/gZ+iKZO+mbzMaTSCSz8v6dk0B/K5Cs23sBgeYoHy4pFARM9W9LK/S5eEYhoHXmLRFuNBTuHCux1SmzrRUnKEDnM6VjEsMZixmxCSYai/0IQ54rd3C3HoocAnQpM23zjaiJPXjl07vzA7C0sWJvbSi14s6SjQ0K/DUiXq/jP/pIxaR+m+47E+OAPUdU7ho9NmElf8sYCMBqO4IrZghWtr2apf+zivg3GTsbC5j4z0r1r9PB4PPkZ8c676UC9Khi3EfauUF4T6fZFyJHNXP9Gvny9mY540jn0Z1IrCTFj1X2VW5Yc03h9Bcn/q7JEZT+n4E4vboRaBdAMQLvUqDGrDA9G1+Oys7HBr4dyGRU6obrOHH4Kvlaf26AEBCbtQ4B8R/MeDQLbHsppgeJcDwDdal7CCnqYWF7hkRdldGw6qqOD53ksC+S4HeI6Tiiiplt8sU/pwavPwjaw5XxbMcCKWI7m5hB8KeyPYnE9ZGW2A1DTdxCLt2CRAH+TMA7rPUzJhAhJ0tg+L2jmAs3Vbu5NbBKcSYdRqdutMv4F9PkMP0L4Ah+MmOTdn2m8poKpYLbx06mV8CYkvIG6ih1zVFTpvas33i0xSrLtUwQekf4DINHpu0F0QtwP0CVVFnbgL49RznJAYitgBqf8igVcuU6Fkw22JhuWZjAvmS2h28w9pJ/fxqYYwT6TcSMD5ufNkBml6VJBu4nUscVEyeIt4/l2An6QnrO4oYzksqyL2zpQXHVqRH5wp+awoEzyZFakhEQ66t9FV/oTfS/XChHRwf9mFT+99mDhAya9S9AwHblZhUWC6My9nPn/3J3vKHGRqAbI2ZcZ8oOWbZI3AEx/F2gGHbDvSfGr8eb+IobHc0ycIciZV+w7cLZuVVB038FBOdFnwVoY5sZP7n5qmNG8wjjuUIxrRxMd1eMqGm0duzyqWpjXSEX/9D2wlxNrmxypGfJjqgZnxacN7kKB9X9ueA8gI6tISSMqr2W6s36utSA+MpaM/bokM4FFrujiE0tllTqmhwDRyR1a6GOOqZ+P5FxoQ4K6f/lZ+XaS/Kl7WZ8VXBZYBoSznT2AS2pVI2mcP2vCNnfSGjPE5i+xKTSOUCDtTaLnuRM/Tloc9h/pwJnpTHoegR8vc2Mp8+3up6dMj2q514mTmes5k4+weK+rZvFZcXuIq/fiKraHXiMCOkEPzcT2aXMi8kdOFWntbuRD4X91zHYDrTpQqD+CMePSE2GUKv/ImbOS093psnoLwoZOiI/8AlrfqH3QXxxKikzFA7czlDNTrmh7EVM2w0YZyZg1RFxXrxGQPyyzYzZDoOg9D8D4pxES1JEMCMt8dsLZeWmdvrBjOL1uflhOuYVMeNFv9p0TQ7d0ZBsaFKwlhSKPhLRy8Iw5q9dmLkc60zZfivxXPobYT25QfN07oy2Wag1cB+zGpxMpAwSP1nb0nmdbktf8voJqzLpAzoTFNe2tcR/2iTrI+mkRMarhg9z117dZeclaRewInFPOi2ExW79Wehgm3k2nrm8cZSvL3lTHhGZtgC8PJXr5WZSvikxvprwWE7ulJuqQ8swNvh8OH3MwqHjGrmVQznOBh10raipPU7fJ7TsadK//wggkp50TBaR+HEkJwA7Swa+oMBLmHiUYwFU+jOEJNh0urftDAqI1UwDWdE6CMdE10VbOm9uktPvJyL71KHvgSqRnPvw0lfsj5FCYf/PnSEBYvpV7bQpC1L32WbZ8BVFVjpbm5R4h310VXRRp+2UuEROqt6G/dc7sy6csYyQrP8JEy5MLxQs/qcbo67UibHFDFMSObQyO4fptY0B6JwXQTVM2Gkkjc614Y5sf/JgyzrQYxAH9KPFFIvKWDoL0/4hAKNypqXESDL4ucjVsb84O2z/kAPtCJIQRoWFZx4cDDYNuOgSQWJ8uG0zPZq7qut0ZVbiZGbuYa56fDhXbKo9nedjCHWsYB0YwZs106Y8nzJQMRCd79+U2L9a2BnKBWNApejSbuhEN754+HJk/0BCESX2tzLVdAaRMhTw+kjV36Xvec5q58jGGouszzFEtaHo2aHsp3fXPaO6TyZBE/V3LklWzw4V89H2qqGdZ4O5isHPROXL79oL3RUnjkzU9oQE1J6tm4yHs+xl/9hD/UwCHUSGiBXKmG1ubdAReZ2s+ZeaqZ94JtcuTdI/SRCdwIwKAl5L5YjZ45UQTSpwuhA8bij9Q8FZMjlKMW65yvK9MLasx/zBDFwdMym19IKxfPxRWOL2F0dKbcCTL46AR47iGH1kiXclDvEJXK4Yc4lQMN3GqZx1ciXwK4tx3SES9qrrlf8/BDxy/A2wf1OiuppwJginsMKnSWA8M6qJ0MsKW0lHxxlP9TIe9X7d8G9gEJdNeORwCZQnVn4IeOQoP5t7I3aJgEcOl0B5YuWHgEeO8rO5N2KXCHjkcAmUJ1Z+CHjkKD+beyN2iYBHDpdAeWLlh4BHjvKzuTdilwh45HAJlCdWfgh45Cg/m3sjdomARw6XQHli5YeAR47ys7k3YpcIeORwCZQnVn4IeOQoP5t7I3aJgEcOl0B5YuWHgEeO8rO5N2KXCHjkcAmUJ1Z+CHjkKD+beyN2iYBHDpdAeWLlh4BHjvKzuTdilwh45HAJlCdWfgh45Cg/m3sjdomARw6XQHli5YeAR47ys7k3YpcIeORwCZQnVn4I/B/aVJj0aFSpcgAAAABJRU5ErkJggg==",className:"appLogo"})}),Object(s.jsxs)("div",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navBarItems",children:[Object(s.jsx)("span",{"aria-hidden":"true"}),Object(s.jsx)("span",{"aria-hidden":"true"}),Object(s.jsx)("span",{"aria-hidden":"true"})]})]}),Object(s.jsx)("div",{id:"navBarItems",className:"navbar-menu",children:Object(s.jsxs)("div",{className:"navbar-end",children:[Object(s.jsx)("div",{className:"navbar-item",children:Object(s.jsx)(A.b,{to:"/Share-Health",className:"navbar-item",children:"Home"})}),Object(s.jsx)("div",{className:"navbar-item",children:Object(s.jsx)(q,{})})]})})]})}}]),n}(c.a.Component)),ee=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}}))($),te=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(s.jsx)(A.a,{children:Object(s.jsx)("div",{className:"container-fluid ",children:Object(s.jsxs)("div",{className:"mainContainer",children:[Object(s.jsx)(ee,{}),Object(s.jsxs)(I.c,{children:[Object(s.jsx)(I.a,{path:"/Share-Health/",exact:!0,component:F}),Object(s.jsx)(I.a,{path:"/login",exact:!0,component:q}),Object(s.jsx)(I.a,{path:"/Share-Health/:title",component:_}),Object(s.jsx)(I.a,{component:function(){return Object(s.jsx)("div",{children:"404 Not found "})}})]})]})})})}}]),n}(c.a.Component),ne=Object(o.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:E,signOut:B})(te);n(80);i.a.render(Object(s.jsx)(o.a,{store:g,children:Object(s.jsx)(ne,{})}),document.querySelector("#root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.0959cbda.chunk.js.map