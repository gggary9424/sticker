webpackJsonp([1],{"BV/l":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),s=n("//Fk"),o=n.n(s),i=n("Dd8w"),u=n.n(i),a=n("NYxO"),c=n("M4fF"),l=n.n(c),f=n("mtWM"),m=n.n(f),h=function(){0};r.a.use(a.a);var d=new a.a.Store({state:{user:{hasLogined:!1,token:""}},getters:{user:function(e){return e.user}},mutations:{setUserInfo:function(e,t){e.user.hasLogined=!0,e.user.token=t}}}),g=m.a.create({baseURL:"https://sticker-bot-forward.herokuapp.com/",timeout:15e3});g.interceptors.request.use(function(e){return d.state.user.token&&(e.headers.Bearer=d.state.user.token),e},function(e){h(e),o.a.reject(e)});var p=g,v={name:"home_page",data:function(){return{columnNum:4,images:[],colors:["red","black","green","yellow","pupple"]}},computed:u()({},Object(a.b)(["user"]),{imageChunks:function(){if(this.columnNum>this.images.length)return l.a.map(this.images,function(e){return[e]});for(var e=Math.floor(this.images.length/this.columnNum),t=this.images.length%this.columnNum,n=[],r=0;r<this.columnNum;r++)if(r<t){n[r]=[];for(var s=r*e,o=s;o<s+e+1;o++)n[r].push(this.images[o])}else{n[r]=[];for(var i=(r+1)*e+t-e,u=i;u<i+e;u++)n[r].push(this.images[u])}return n}}),watch:{user:{handler:function(){this.getImageUrls()},deep:!0}},methods:{getImageUrls:function(){var e=this;return p.get("/v1/uploaded-images").then(function(t){e.images=t.data.urls})},sendSticker:function(e){var t={attachment:{type:"image",payload:{url:e}}};return new o.a(function(e,n){MessengerExtensions.beginShareFlow(function(t){e(t.is_sent)},function(e,t){n({errorCode:e,errorMessage:t})},t,"current_thread")}).then(function(e){e&&MessengerExtensions.requestCloseBrowser(function(){},function(e,t){})}).catch(function(e){console.error(e)})}}},k={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.user.hasLogined?n("div",{staticClass:"columns is-mobile is-gapless is-multiline"},e._l(e.imageChunks,function(t,r){return n("div",{key:r,staticClass:"column"},e._l(t,function(t,r){return n("img",{key:r,staticStyle:{width:"100%"},attrs:{src:t},on:{click:function(n){e.sendSticker(t)}}})}))})):n("div",[e._v("\n    Please wait ...\n  ")])])},staticRenderFns:[]};var w={name:"App",components:{Home:n("VU/8")(v,k,!1,function(e){n("BV/l")},"data-v-f0fb75d2",null).exports},beforeCreate:function(){var e=this.$store;window.extAsyncInit=function(){return new o.a(function(e,t){return MessengerExtensions.getContext("1477124502376307",function(t){return e(t)},function(e,n){return console.error(e,n),t({errorCode:e,errorMessage:n})})}).then(function(e){return console.log(e),p.post("/v1/login",e)}).then(function(t){t.data.token?e.commit("setUserInfo",t.data.token):e.commit("setUserInfo","")})}}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Home")],1)},staticRenderFns:[]};var b=n("VU/8")(w,_,!1,function(e){n("SrOF")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:b},template:"<App/>",store:d})},SrOF:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.51c38486320f43300470.js.map