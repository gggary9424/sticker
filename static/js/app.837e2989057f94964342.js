webpackJsonp([1],{"4G2I":function(t,e){},FUWy:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o=n("//Fk"),i=n.n(o),a=n("/kJX"),r=n("M4fF"),c=n.n(r),p={name:"home_page",components:[a.Carousel,a.Slide],data:function(){return{text:"Click it, bitch !",columnNum:2,images:["https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg","https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg","https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline","https://thumbs-prod.si-cdn.com/i3vwJpVXw5BDAXgpUVismkkngj4=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/49/01/49014501-c0be-4c40-a54b-034b46a7b2ad/istock-856455230_1.jpg","https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg","https://pbs.twimg.com/media/DVpbYdpUQAA63c2.jpg","https://www.petmd.com/sites/default/files/petmd-cat-happy-13.jpg","https://e3.365dm.com/18/01/750x563/skynews-cat-istock_4199673.jpg?20180106154111","https://www.lifegate.com/app/uploads/gattino-primo-piano.jpg","https://d3n8a8pro7vhmx.cloudfront.net/taxpayers/pages/679/attachments/original/1499663166/4-ways-cheer-up-depressed-cat.jpg?1499663166","https://onefastcat.com/media/neoshop/default/subs_kitty.png","https://static.boredpanda.com/blog/wp-content/uploads/2017/10/ninja-cats-photography-hisakata-hiroyuki-10-59f197289e003__880.jpg"],colors:["red","black","green","yellow","pupple"]}},computed:{imageChunks:function(){if(this.columnNum>this.images.length)return c.a.map(this.images,function(t){return[t]});for(var t=Math.floor(this.images.length/this.columnNum),e=this.images.length%this.columnNum,n=[],s=0;s<this.columnNum;s++)if(s<e){n[s]=[];for(var o=s*t,i=o;i<o+t+1;i++)n[s].push(this.images[i])}else{n[s]=[];for(var a=(s+1)*t+e-t,r=a;r<a+t;r++)n[s].push(this.images[r])}return n}},methods:{sendSticker:function(t){var e={attachment:{type:"image",payload:{url:t}}};return new i.a(function(t,n){MessengerExtensions.beginShareFlow(function(e){t(e.is_sent)},function(t,e){n({errorCode:t,errorMessage:e})},e,"current_thread")}).then(function(t){t&&MessengerExtensions.requestCloseBrowser(function(){},function(t,e){})}).catch(function(t){console.error(t)})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns is-mobile is-gapless is-multiline"},t._l(t.imageChunks,function(e,s){return n("div",{key:s,staticClass:"column"},t._l(e,function(e,s){return n("img",{key:s,staticStyle:{width:"100%"},attrs:{src:e},on:{click:function(n){t.sendSticker(e)}}})}))}))])},staticRenderFns:[]};var l={name:"App",components:{Home:n("VU/8")(p,u,!1,function(t){n("FUWy")},"data-v-51f3e382",null).exports},beforeCreate:function(){window.extAsyncInit=function(){return new i.a(function(t,e){return console.log("getting fb"),MessengerExtensions.getContext("1925245824355888",function(e){return console.log(e),t(e)},function(t,n){return console.error(t,n),e({errorCode:t,errorMessage:n})})}).then(function(t){})}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Home")],1)},staticRenderFns:[]};var d=n("VU/8")(l,m,!1,function(t){n("4G2I")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:d},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.837e2989057f94964342.js.map