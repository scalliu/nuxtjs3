import{a as A,ab as F,s as K,t as v,m as C,l as S,q as M,v as b,b as h,j as e,x as t,ac as R,o as u,f as o,h as l,y as k,B as D,ad as q,c as x,ae as P,a4 as T,I as G,Z as H,A as m,E as J,a5 as O,$ as W,a6 as Z,a7 as Q,a8 as X,a9 as Y,aa as $,a3 as ee}from"./entry.393a8b12.js";/* empty css                 */import{u as y}from"./shoppingCart.9b44f3d6.js";const te=""+new URL("logo.03d6d6da.png",import.meta.url).href;const oe={components:{Search:F},beforeUpdate(){},data(){return{isLogin:!1,activeIndex:"",search:"",register:!1,visible:!1}},setup(){let s=K();return{ElNotificationError:s.$ElNotificationError,ElNotificationSuccess:s.$ElNotificationSuccess}},created(){var s;console.log("apiSecret",v().apiSecret),!((s=v().apiSecret)!=null&&s.env)&&(console.log("-----created-----"),console.log(localStorage.getItem("user")),console.log("每次登陆家砸死",localStorage.getItem("user")),localStorage.getItem("user")&&this.setUser(JSON.parse(localStorage.getItem("user"))))},mounted(){console.log("----mounted---",this.getUser,this.getUser.user_id)},computed:{...C(S,["getUser"]),...C(y,["getNum"])},watch:{getUser:function(s){s===""?this.setShoppingCart([]):M(()=>"/apiapi/user/shoppingCart/getShoppingCart",{method:"post",body:{user_id:s.user_id}},"$VbeGLRT2Wl").then(n=>{let d=n.data.value;d.code==="001"?this.setShoppingCart(d.shoppingCartData):this.ElNotificationError(d.msg)}).catch(n=>Promise.reject(n))}},methods:{...b(S,["setUser","setShowLogin"]),...b(y,["setShoppingCart"]),login(){this.setShowLogin(!0)},logoutCancel(){this.visible=!1,console.log(this.visible,"visiblevisible")},logout(){this.visible=!1,localStorage.setItem("user",""),this.setUser(""),this.ElNotificationSuccess("成功退出登录")},isRegister(s){this.register=s},enter(){this.searchClick()},searchClick(){this.search!=""&&(this.$router.push({path:"/goods",query:{search:this.search}}),this.search="")}}},se={id:"app",name:"app"},le={class:"topbar"},ne={class:"nav"},ae={key:0},ie=o("span",{class:"sep"},"|",-1),re={key:1},ce=o("p",null,"确定退出登录吗？",-1),_e={style:{"text-align":"right",margin:"10px 0 0"}},ue={class:"num"},de={class:"logo"},pe=o("img",{src:te,alt:""},null,-1),he=o("div",{class:"flex-grow"},null,-1),me={class:"so"},ge={class:"footer"},fe=o("div",{class:"ng-promise-box"},[o("div",{class:"ng-promise"},[o("p",{class:"text"},[o("a",{class:"icon1",href:"javascript:;"},"7天无理由退换货"),o("a",{class:"icon2",href:"javascript:;"},"满99元全场免邮"),o("a",{class:"icon3",style:{"margin-right":"0"},href:"javascript:;"},"100%品质保证")])])],-1),ve=o("div",{class:"github"},null,-1),Ce={class:"mod_help"},Se=o("span",null,"|",-1),be=o("span",null,"|",-1),ke=o("p",{class:"coty"},"商城版权所有 © 2012-2021",-1);function xe(s,n,d,ye,a,r){const c=G,E=H,g=R,i=m("router-link"),f=J,p=O,N=m("ShoppingCartFull"),w=W,U=Z,I=Q,V=X,z=m("router-view"),B=Y,L=$,j=ee;return u(),h("div",se,[e(g,null,{default:t(()=>[e(j,null,{default:t(()=>[o("div",le,[o("div",ne,[o("ul",null,[s.getUser?(u(),h("li",re,[e(g,null,{default:t(()=>[e(E,{placement:"top",width:"180",trigger:"click",visible:a.visible},{reference:t(()=>[e(c,{onClick:n[1]||(n[1]=_=>a.visible=!a.visible)},{default:t(()=>[l(k(s.getUser.userName),1)]),_:1})]),default:t(()=>[ce,o("div",_e,[e(c,{size:"small",onClick:r.logoutCancel},{default:t(()=>[l("取消")]),_:1},8,["onClick"]),e(c,{type:"primary",size:"small",onClick:r.logout},{default:t(()=>[l("确定")]),_:1},8,["onClick"])])]),_:1},8,["visible"])]),_:1})])):(u(),h("li",ae,[e(c,{onClick:r.login},{default:t(()=>[l("登录")]),_:1},8,["onClick"]),ie,e(c,{onClick:n[0]||(n[0]=_=>a.register=!0)},{default:t(()=>[l("注册")]),_:1})])),o("li",null,[e(i,{to:"/order"},{default:t(()=>[l("我的订单")]),_:1})]),o("li",null,[e(i,{to:"/collect"},{default:t(()=>[l("我的收藏")]),_:1})]),o("li",{class:D(s.getNum>0?"shopCart-full":"shopCart")},[e(i,{to:"/shoppingCart"},{default:t(()=>[e(f,{size:"20px",style:{"vertical-align":"middle","margin-right":"10px"}}),l("购物车 "),o("span",ue,"("+k(s.getNum)+")",1)]),_:1})],2)])])]),e(I,null,{default:t(()=>[e(U,{"default-active":a.activeIndex,class:"el-menu-demo",mode:"horizontal","active-text-color":"#409eff",router:""},{default:t(()=>[o("div",de,[e(i,{to:"/"},{default:t(()=>[pe]),_:1})]),e(p,{index:"/"},{default:t(()=>[l("首页")]),_:1}),e(p,{index:"/goods"},{default:t(()=>[l("全部商品")]),_:1}),e(p,{index:"/about"},{default:t(()=>[l("关于我们")]),_:1}),he,o("div",me,[e(w,{placeholder:"请输入搜索内容",modelValue:a.search,"onUpdate:modelValue":n[2]||(n[2]=_=>a.search=_),onKeydown:q(r.enter,["enter"])},{append:t(()=>[e(f,{size:"20px",style:{"vertical-align":"middle",cursor:"pointer"},onClick:r.searchClick},{default:t(()=>[e(N)]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeydown"])])]),_:1},8,["default-active"])]),_:1}),e(V),e(B,null,{default:t(()=>[e(z,null,{default:t(({Component:_})=>[(u(),x(T,null,[(u(),x(P(_)))],1024))]),_:1})]),_:1}),e(L,null,{default:t(()=>[o("div",ge,[fe,ve,o("div",Ce,[o("p",null,[e(i,{to:"/"},{default:t(()=>[l("首页")]),_:1}),Se,e(i,{to:"/goods"},{default:t(()=>[l("全部商品")]),_:1}),be,e(i,{to:"/about"},{default:t(()=>[l("关于我们")]),_:1})]),ke])])]),_:1})]),_:1})]),_:1})])}const Ue=A(oe,[["render",xe]]);export{Ue as default};
