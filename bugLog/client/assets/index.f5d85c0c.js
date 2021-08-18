import{r as t,c as e,o as a,a as o,b as s,F as n,d as r,S as c,C as i,p as l,e as d,t as u,w as p,f as g,g as m,h as b,i as h,j as v,k as f,l as w,m as y}from"./vendor.57c849f3.js";const _=t({user:{},account:{},bugs:{},activeBug:{},notes:[]});const E={name:"App",setup:()=>({appState:e((()=>_))})},k={class:"container-fluid"},T=s("footer",null,[s("div",{class:"bg-dark text-light text-center p-4"}," Made with 🐞 by Jonathan ")],-1);E.render=function(t,e,c,i,l,d){const u=r("Navbar"),p=r("router-view");return a(),o(n,null,[s("header",null,[s(u)]),s("main",null,[s("div",k,[s(p)])]),T],64)};class A{static async confirm(t="Are you sure?",e="You won't be able to revert this!",a="warning",o="Yes, delete it!"){try{return!!(await c.fire({title:t,text:e,icon:a,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:o})).isConfirmed}catch(s){return!1}}static toast(t="Warning!",e="warning",a="top-end",o=3e3,s=!0){c.fire({title:t,icon:e,position:a,timer:o,timerProgressBar:s,toast:!0,showConfirmButton:!1})}}const C=window.location.origin.includes("localhost"),O=C?"http://localhost:3000":"",x=i.create({baseURL:O,timeout:8e3});const I=new class{async getAll(){const t=await x.get("api/bugs");_.bugs=t.data}async getById(t){const e=await x.get("api/bugs/"+t);_.activeBug=e.data}async getNotes(t){const e=await x.get("api/bugs/"+t+"/notes");_.notes=e.data}async create(t){const e=await x.post("api/bugs",t);return _.bugs.push(e.data),e.data.id}async edit(t,e){const a=await x.put("api/bugs/"+e,t);_.activeBug=a.data}async destroy(t){await x.delete("api/bugs/"+t),this.getAll()}};const P={props:{bug:{type:Object,required:!0}},setup:t=>({date:e((function(){const e=t.bug.updatedAt.split("T")[0],a=e.split("-")[0];return`${e.split("-")[1]}-${e.split("-")[2]}-${a}`})),async close(t){try{await A.confirm("Ready To Close?","This cannot be reverted!","warning","Yes, Close It!")&&(await I.destroy(t),await I.getAll())}catch(e){A.toast(e)}}})},S=p("data-v-831bb828");l("data-v-831bb828");const R={class:"row border border-dark align-items-center"},B={class:"col-md-3 col-12 pt-2"},j={class:"pl-2"},L={class:"text-muted text-dark"},N={class:"col-md-4 col-12 pt-2"},D={class:"row align-items-center pb-md-2 pl-2"},H={class:"col-md-1 pb-md-0 pb-2"},U={class:"col-md-10 pb-md-0 pb-2 pt-2"},$={class:"pl-md-4"},Y={class:"col-md-2 col-5 pt-2"},V={key:0,class:"d-flex"},z=s("h5",{class:"pl-2"},"Open ",-1),q={key:1,class:"d-flex"},G=s("h5",{class:"pl-2"},"Closed ",-1),K=s("h5",{class:"pl-1"}," 🔴",-1),M={class:"col-md-3 col-7 pt-2"},W={class:"pl-2"};d();const F=S(((t,e,n,c,i,l)=>{var d,p;const g=r("router-link");return a(),o("div",R,[s("div",B,[s("h5",j,[s(g,{to:{name:"Info",params:{bugId:n.bug.id}}},{default:S((()=>[s("span",L,u(n.bug.title),1)])),_:1},8,["to"])])]),s("div",N,[s("div",D,[s("div",H,[s("img",{src:null==(d=n.bug.creator)?void 0:d.picture,alt:"ProfilePicture",height:"40",class:"rounded rounded-circle"},null,8,["src"])]),s("div",U,[s("h5",$,u(null==(p=n.bug.creator)?void 0:p.name),1)])])]),s("div",Y,[!1===n.bug.closed?(a(),o("span",V,[z,s("h5",{class:"pl-3 action",onClick:e[1]||(e[1]=t=>c.close(n.bug.id))}," 🟢")])):(a(),o("span",q,[G,K]))]),s("div",M,[s("h5",W,u(c.date),1)])])}));P.render=F,P.__scopeId="data-v-831bb828";var Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});let X;const J={},Z=function(t,e){if(!e||0===e.length)return t();if(void 0===X){const t=document.createElement("link").relList;X=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in J)return;J[t]=!0;const e=t.endsWith(".css"),a=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");return o.rel=e?"stylesheet":X,e||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),e?new Promise(((t,e)=>{o.addEventListener("load",t),o.addEventListener("error",e)})):void 0}))).then((()=>t()))};function tt(t){return()=>function(t){switch(t){case"./pages/AccountPage.vue":return Z((()=>import("./AccountPage.d92ff021.js")),["/assets/AccountPage.d92ff021.js","/assets/AccountPage.f3fa63f7.css","/assets/vendor.57c849f3.js"]);case"./pages/BugInfoPage.vue":return Z((()=>import("./BugInfoPage.b44db20d.js")),["/assets/BugInfoPage.b44db20d.js","/assets/BugInfoPage.532f5eb8.css","/assets/vendor.57c849f3.js"]);case"./pages/HomePage.vue":return Z((()=>import("./HomePage.ec2a9d0e.js")),["/assets/HomePage.ec2a9d0e.js","/assets/HomePage.b721a944.css","/assets/vendor.57c849f3.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+t))}}(`./pages/${t}.vue`)}const et=[{path:"/",name:"Home",component:tt("HomePage"),beforeEnter:b},{path:"/bug/:bugId",name:"Info",component:tt("BugInfoPage"),beforeEnter:b},{path:"/account",name:"Account",component:tt("AccountPage"),beforeEnter:b}],at=g({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:m(),routes:et});function ot(t,e){if(C)console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e);else{switch(t){case"log":case"assert":return}console[t](`[${t}] :: ${(new Date).toLocaleTimeString()} :: `,...e)}}const st={log(){ot("log",arguments)},error(){ot("error",arguments)},warn(){ot("warn",arguments)},assert(){ot("assert",arguments)},trace(){ot("trace",arguments)}};const nt=new class{async getAccount(){try{const t=await x.get("/account");_.account=t.data}catch(t){st.error("HAVE YOU STARTED YOUR SERVER YET???",t)}}};let rt=!1,ct=[];const it="connected",lt="authenticate",dt="authenticated",ut="error";const pt=new class extends class{constructor(t=O){this.socket=h(t||O),this.on(it,this.onConnected).on(dt,this.onAuthenticated).on(ut,this.onError)}on(t,e){return this.socket.on(t,e.bind(this)),this}onConnected(t){st.log("[SOCKET_CONNECTION]",t),rt=!0}onAuthenticated(t){st.log("[SOCKET_AUTHENTICATED]",t);const e=[...ct];ct=[],e.forEach((t=>{this.emit(t.action,t.payload)}))}authenticate(t){this.socket.emit(lt,t)}onError(t){st.error("[SOCKET_ERROR]",t)}emit(t,e){if(!rt)return st.log("[ENQUEING_ACTION]",{action:t,payload:e}),ct.push({action:t,payload:e});this.socket.emit(t,e)}}{constructor(){super(),this.on("error",this.onError)}onError(t){st.error("[SOCKET_ERROR]",t),A.toast(t.message,"error")}},gt=v({domain:"codeworksclassroom.auth0.com",clientId:"pOXw2OGv1LsYi7LEBmDF04RLkXQvldml",audience:"https://codeworksclassroom.com",useRefreshTokens:!0,onRedirectCallback:t=>{at.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}});async function mt(t){if(!gt.isAuthenticated)return t;const e=1e3*gt.identity.exp,a=e<Date.now(),o=e<Date.now()+432e5;return a?await gt.loginWithPopup():o&&(await gt.getTokenSilently(),x.defaults.headers.authorization=gt.bearer,pt.authenticate(gt.bearer)),t}gt.on(gt.AUTH_EVENTS.AUTHENTICATED,(async function(){x.defaults.headers.authorization=gt.bearer,x.interceptors.request.use(mt),_.user=gt.user,await nt.getAccount(),pt.authenticate(gt.bearer)}));const bt={setup:()=>({state:t({dropOpen:!1}),user:e((()=>_.user)),async login(){gt.loginWithPopup()},async logout(){gt.logout({returnTo:window.location.origin})}})},ht=p("data-v-28634cc5");l("data-v-28634cc5");const vt={class:"navbar navbar-expand-lg navbar-dark bg-dark"},ft=s("div",{class:"d-flex flex-column align-items-center"}," BUGLOG ",-1),wt=s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),yt={class:"collapse navbar-collapse",id:"navbarText"},_t={class:"navbar-nav mr-auto"},Et={class:"nav-item"},kt=f(" Home "),Tt={class:"navbar-text"},At={key:1,class:"dropdown"},Ct={class:"mx-3"},Ot=s("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);d();const xt=ht(((t,e,n,c,i,l)=>{const d=r("router-link");return a(),o("nav",vt,[s(d,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:ht((()=>[ft])),_:1}),wt,s("div",yt,[s("ul",_t,[s("li",Et,[s(d,{to:{name:"Home"},class:"nav-link"},{default:ht((()=>[kt])),_:1})])]),s("span",Tt,[c.user.isAuthenticated?(a(),o("div",At,[s("div",{class:"dropdown-toggle",onClick:e[2]||(e[2]=t=>c.state.dropOpen=!c.state.dropOpen)},[s("img",{src:c.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),s("span",Ct,u(c.user.name),1)]),s("div",{class:["dropdown-menu p-0 list-group w-100",{show:c.state.dropOpen}],onClick:e[4]||(e[4]=t=>c.state.dropOpen=!1)},[s(d,{to:{name:"Account"}},{default:ht((()=>[Ot])),_:1}),s("div",{class:"list-group-item list-group-item-action hoverable",onClick:e[3]||(e[3]=(...t)=>c.logout&&c.logout(...t))}," logout ")],2)])):(a(),o("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>c.login&&c.login(...t))}," Login "))])])])}));bt.render=xt,bt.__scopeId="data-v-28634cc5";var It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const Pt=new class{async create(t){const e=await x.post("api/notes",t);return _.notes.push(e.data),e.data}async destroy(t){await x.delete("api/notes/"+t),_.notes=_.notes.filter((e=>e.id!==t))}};const St={props:{note:{type:Object,required:!0}},setup:()=>({account:e((()=>_.account)),async destroy(t,e){try{await A.confirm()&&(await Pt.destroy(t),await I.getNotes(e))}catch(a){A.toast(a)}}})},Rt=p("data-v-75b8549b");l("data-v-75b8549b");const Bt={class:"row bg-light text-dark align-items-center border border-dark"},jt={class:"col-md-3 col-12 pt-2 d-flex align-items-center"},Lt={class:"row align-items-center pb-md-2"},Nt={class:"col-md-2 pb-md-0 pb-2"},Dt={class:"col-md-10 pb-md-0 pb-2 pt-2"},Ht={class:"pl-3"},Ut={class:"col-md-8 col-12 pt-2"},$t={class:"pl-3"},Yt={class:"col-md-1 col-12 pt-2 d-flex justify-content-md-center pr-md-5 justify-content-end"};d();const Vt=Rt(((t,e,n,r,c,i)=>{var l,d;return a(),o("div",Bt,[s("div",jt,[s("div",Lt,[s("div",Nt,[s("img",{src:null==(l=n.note.creator)?void 0:l.picture,alt:"ProfilePicture",height:"50",class:"rounded rounded-circle"},null,8,["src"])]),s("div",Dt,[s("h5",Ht,u(null==(d=n.note.creator)?void 0:d.name),1)])])]),s("div",Ut,[s("h5",$t,u(n.note.body),1)]),s("div",Yt,[n.note.creatorId===r.account.id?(a(),o("h5",{key:0,class:"action",onClick:e[1]||(e[1]=t=>r.destroy(n.note.id,n.note.bug))}," 🗑 ")):w("",!0)])])}));St.render=Vt,St.__scopeId="data-v-75b8549b";var zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:St});const qt=y(E);!function(t){const e={"./components/BugCard.vue":Q,"./components/Navbar.vue":It,"./components/NoteCard.vue":zt};Object.entries(e).forEach((([e,a])=>{const o=a.name||e.substr(e.lastIndexOf("/")+1).replace(/\.\w+$/,"");t.component(o,a.default)}))}(qt),qt.use(at).mount("#app");export{_ as A,A as P,I as b,Pt as n};
