"use strict";(self.webpackChunkPaytez_web=self.webpackChunkPaytez_web||[]).push([[211],{9211:function(e,s,t){t.r(s);var a=t(24611),n=t(53755),i=t(23680),c=t(76870),r=t(79428),l=t(49111),o=t(69935),d=(t(13409),t(53071),t(99033)),m=t(96470),h=t(53384),u=t(79153),x=t(26863),p=t(5779),w=t(52516);s.default=function(){var e=(0,r.TH)().key,s=(0,d.I0)(),t=(0,r.s0)();(0,c.useEffect)((function(){return(0,l.Z)("./assets/js/vendor.min.js"),(0,l.Z)("./assets/js/theme.min.js"),function(){(0,o.Z)("./assets/js/vendor.min.js"),(0,o.Z)("./assets/js/theme.min.js")}}),[e]);var j=(0,d.v9)((function(e){return e.auth})),v=(j.user,j.isAuthenticated),N=(0,c.useState)(),g=(0,i.Z)(N,2),f=g[0],b=g[1],y=(0,d.v9)((function(e){return e.web3})),k=y.connected;y.providerConnect,y.provider,y.signer;console.log("connected",k),(0,c.useEffect)((function(){v&&t("/user/dashboard")}),[v]);var Z=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var t,n,i,c,r,l,o,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.Q(m.m.rpcProvider),e.next=3,t.getNetwork();case 3:return n=e.sent,i=n.chainId,localStorage.setItem("chainId",i),console.log("chainId",i),c=t.getSigner(),e.next=10,c.getAddress();case 10:r=e.sent,l=p.cz.find((function(e){return e.networkID===i})),o={provider:t,address:r,signer:c,connected:!0,chainId:i,symbol:l.symbol,networkName:l.networkName,icon:l.icon},d={firstName:"~",email:f,origin:"Email",walletAddress:r},s((0,u.fY)(o)),s((0,x.x4)(d,"user"));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.m.auth.loginWithEmailOTP({email:f});case 3:e.sent,Z(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.m.oauth.loginWithRedirect({provider:"google",redirectURI:new URL("/auth",window.location.origin).href});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,w.jsx)("div",{className:"bg-gradient2 min-vh-100 align-items-center d-flex justify-content-center pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,w.jsx)("div",{className:"container",children:(0,w.jsxs)("div",{className:"row justify-content-center",children:[(0,w.jsx)("div",{className:"col-xl-12",children:(0,w.jsxs)("div",{className:"card",children:[(0,w.jsx)("div",{className:"card-body p-0",children:(0,w.jsxs)("div",{className:"row g-0",children:[(0,w.jsx)("div",{className:"col-md-5 shadow",children:(0,w.jsxs)("div",{className:"p-xl-5 p-3",children:[(0,w.jsx)("div",{className:"mx-auto mb-5",children:(0,w.jsx)("a",{href:"/",className:"d-flex",children:(0,w.jsx)("img",{src:"assets/images/logo.png",className:"align-self-center",alt:"logo-img",height:50})})}),(0,w.jsx)("h6",{className:"h5 mb-0 mt-3",children:"With a account you get access to easy payments all around the world"}),(0,w.jsx)("p",{className:"text-muted mt-1 mb-4",children:"Sign in with email"}),(0,w.jsxs)("form",{action:"#",className:"authentication-form",children:[(0,w.jsxs)("div",{className:"mb-3",children:[(0,w.jsxs)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:["Email ",(0,w.jsx)("small",{children:"*"})]}),(0,w.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",onChange:function(e){return b(e.target.value)},value:f})]}),(0,w.jsx)("div",{className:"mb-0 text-center d-grid",children:(0,w.jsx)("button",{className:"btn btn-primary ",type:"button",onClick:I,children:"Sign In"})})]}),(0,w.jsx)("div",{className:"py-3 text-center",children:(0,w.jsx)("span",{className:"fs-13 fw-bold",children:"OR"})}),(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:"col-12 text-center mt-2",children:(0,w.jsxs)("button",{onClick:P,className:"btn btn-primary  w-100",children:[(0,w.jsx)("i",{"data-feather":"mail",className:"icon icon-xs me-2"}),"Sign in with Google"]})}),(0,w.jsx)("div",{className:"col-12 text-center mt-2",children:(0,w.jsxs)("a",{href:"",className:"btn btn-white opacity-50 w-100",children:[(0,w.jsx)("i",{"data-feather":"facebook",className:"icon icon-xs me-2"}),"Sign in with Facebook"]})}),(0,w.jsx)("div",{className:"col-12 text-center mt-2",children:(0,w.jsxs)("a",{href:"",className:"btn btn-white opacity-50 w-100",children:[(0,w.jsx)("i",{"data-feather":"twitter",className:"icon icon-xs me-2"}),"Sign in with Twitter"]})}),(0,w.jsx)("div",{className:"col-12 text-center mt-2",children:(0,w.jsxs)("a",{href:"",className:"btn btn-white opacity-50 w-100",children:[(0,w.jsx)("i",{"data-feather":"github",className:"icon icon-xs me-2"}),"Sign in with Github"]})})]})]})}),(0,w.jsx)("div",{className:"col-md-5 offset-md-1 d-none d-md-inline-block",children:(0,w.jsx)("div",{className:"position-relative mt-5 pt-5",children:(0,w.jsx)("div",{className:"slider",children:(0,w.jsxs)("div",{className:"swiper-container","data-toggle":"swiper","data-swiper":'{"slidesPerView":1, "loop":true, "spaceBetween": 0, "autoplay": {"delay": 5000}, "breakpoints": {"576": {"slidesPerView": 1.2 }, "768": { "slidesPerView": 1 } }, "roundLengths":true, "pagination": {"el": ".swiper-pagination", "dynamicBullets": true}}',children:[(0,w.jsxs)("div",{className:"swiper-wrapper",children:[(0,w.jsx)("div",{className:"swiper-slide",children:(0,w.jsxs)("div",{className:"swiper-slide-content",children:[(0,w.jsx)("div",{className:"row text-center",children:(0,w.jsx)("div",{className:"col",children:(0,w.jsx)("img",{src:"./assets/images/products/ecommerce.svg",alt:"",className:"w-75"})})}),(0,w.jsx)("div",{className:"row text-center my-4 pb-5",children:(0,w.jsxs)("div",{className:"col",children:[(0,w.jsx)("h5",{className:"fw-medium fs-16",children:"E-commerce plugins"}),(0,w.jsx)("p",{className:"text-muted",children:"Now, you can sell your products for Crypto by using Paytez button"})]})})]})}),(0,w.jsx)("div",{className:"swiper-slide",children:(0,w.jsxs)("div",{className:"swiper-slide-content",children:[(0,w.jsx)("div",{className:"row text-center",children:(0,w.jsx)("div",{className:"col",children:(0,w.jsx)("img",{src:"./assets/images/products/qrpayment.svg",alt:"",className:"w-75"})})}),(0,w.jsx)("div",{className:"row text-center my-4 pb-5",children:(0,w.jsxs)("div",{className:"col",children:[(0,w.jsx)("h5",{className:"fw-medium fs-16",children:"QR Payments"}),(0,w.jsx)("p",{className:"text-muted",children:"Using QR Payment, now you get the settlement done."})]})})]})}),(0,w.jsx)("div",{className:"swiper-slide",children:(0,w.jsxs)("div",{className:"swiper-slide-content",children:[(0,w.jsx)("div",{className:"row text-center",children:(0,w.jsx)("div",{className:"col",children:(0,w.jsx)("img",{src:"./assets/images/products/api.svg",alt:"",className:"w-75"})})}),(0,w.jsx)("div",{className:"row text-center my-4 pb-5",children:(0,w.jsxs)("div",{className:"col",children:[(0,w.jsx)("h5",{className:"fw-medium fs-16",children:"API integration"}),(0,w.jsx)("p",{className:"text-muted",children:"Well documented developer docs for the customer who wants to integrate our API's"})]})})]})})]}),(0,w.jsx)("div",{className:"swiper-pagination"})]})})})})]})})," "]})})," "]})})})}},53071:function(e,s,t){var a=t(91247),n=t(77630),i=t(62499),c={web3AuthClientId:"BBXXmrK3cwdQZOAT5dv53ROThnhqcjQ9JY8Fk04xWYQrVWNINMv1Ohjxi2jms5NT0u4KiSgeo-EHtUBow110Hsk",baseUrl:window.location.origin,redirectPathName:"auth",enableLogging:!0,uxMode:"redirect",network:"cyan"},r=new n.ZP,l=new i.ZP;new a.Z({modules:{webStorage:r,securityQuestions:l},customAuthArgs:c})}}]);
//# sourceMappingURL=211.ca275282.chunk.js.map