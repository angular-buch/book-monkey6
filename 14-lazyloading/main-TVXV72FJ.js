import{M as n,N as o,O as c,T as i,ca as s,ka as l,la as u,na as f,oa as d,qa as h,ra as C,sa as v,ta as k,z as r}from"./chunk-EMUGM7BJ.js";var p=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-home"]],decls:2,vars:0,template:function(t,x){t&1&&(n(0,"h1"),i(1,"Welcome to the BookMonkey!"),o())},encapsulation:2})};var A=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:p,title:"BookMonkey"},{path:"books",loadChildren:()=>import("./chunk-NMPHQ5ZR.js").then(e=>e.booksPortalRoutes)},{path:"admin",loadChildren:()=>import("./chunk-GHJ5CF2D.js").then(e=>e.booksAdminRoutes)}];var g={providers:[s(),v(A,k()),l(u())]};var m=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=r({type:e,selectors:[["app-root"]],decls:13,vars:0,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"]],template:function(t,x){t&1&&(n(0,"main")(1,"nav")(2,"ul")(3,"li")(4,"a",0),i(5,"Home"),o()(),n(6,"li")(7,"a",1),i(8,"Books"),o()(),n(9,"li")(10,"a",2),i(11,"Admin"),o()()()(),c(12,"router-outlet"),o())},dependencies:[d,h,C],encapsulation:2})};f(m,g).catch(e=>console.error(e));
