import{a as S,s as y,t as x,m as u,l as A,v as I,q as O,b as n,f as s,j as r,F as v,w as f,x as m,y as a,h as g,z as k,A as b,E as P,o as d,B,p as F,e as U}from"./entry.393a8b12.js";import{u as C}from"./shoppingCart.9b44f3d6.js";const $={name:"confirmOrder",data(){return{confirmAddress:1,address:[{id:1,name:"陈同学",phone:"100861001010000",address:"广东 广州市 白云区 ***"},{id:2,name:"陈同学",phone:"100861001010000",address:"广东 广州市 白云区 ***"}]}},setup(){let t=y();return{ElNotificationError:t.$ElNotificationError,ElNotificationSuccess:t.$ElNotificationSuccess,targetUrl:x().public.$target}},mounted(){this.getCheckNum<1&&(this.ElNotificationError("请勾选商品后再结算"),this.$router.push({path:"/shoppingCart"}))},computed:{...u(C,["getCheckNum","getTotalPrice","getCheckGoods"]),...u(A,["getUser"])},methods:{...I(C,["deleteShoppingCart"]),addOrder(){O(()=>"/apiapi/user/order/addOrder",{method:"post",body:{user_id:this.getUser.user_id,products:this.getCheckGoods}},"$AjUIBlXehK").then(t=>{console.log("data",t.data.value);const o=t.data.value;let p=this.getCheckGoods;switch(o.code){case"001":for(let i=0;i<p.length;i++){const l=p[i];this.deleteShoppingCart(l.id)}this.ElNotificationSuccess(o.msg),this.$router.push({path:"/order"});break;default:this.ElNotificationError(o.msg)}}).catch(t=>Promise.reject(t))},changeAddress(t){this.confirmAddress=t}}},c=t=>(F("data-v-f7ccab0c"),t=t(),U(),t),j={class:"confirmOrder"},w={class:"confirmOrder-header"},G={class:"header-content"},T=c(()=>s("p",null,[s("i",{class:"el-icon-s-order"})],-1)),V=c(()=>s("p",null,"确认订单",-1)),z={class:"content"},q={class:"section-address"},D=c(()=>s("p",{class:"title"},"收货地址",-1)),K={class:"address-body"},L=["onClick"],R={class:"phone"},X={class:"address"},H={class:"add-address"},J=c(()=>s("p",null,"添加新地址",-1)),M={class:"section-goods"},Q=c(()=>s("p",{class:"title"},"商品及优惠券",-1)),W={class:"goods-list"},Y=["src"],Z={class:"pro-name"},ss={class:"pro-price"},ts=c(()=>s("span",{class:"pro-status"},null,-1)),es={class:"pro-total"},as=k('<div class="section-shipment" data-v-f7ccab0c><p class="title" data-v-f7ccab0c>配送方式</p><p class="shipment" data-v-f7ccab0c>包邮</p></div><div class="section-invoice" data-v-f7ccab0c><p class="title" data-v-f7ccab0c>发票</p><p class="invoice" data-v-f7ccab0c>电子发票</p><p class="invoice" data-v-f7ccab0c>个人</p><p class="invoice" data-v-f7ccab0c>商品明细</p></div>',2),cs={class:"section-count"},os={class:"money-box"},is=c(()=>s("span",{class:"title"},"商品件数：",-1)),ns={class:"value"},ds=c(()=>s("span",{class:"title"},"商品总价：",-1)),ls={class:"value"},rs=k('<li data-v-f7ccab0c><span class="title" data-v-f7ccab0c>活动优惠：</span><span class="value" data-v-f7ccab0c>-0元</span></li><li data-v-f7ccab0c><span class="title" data-v-f7ccab0c>优惠券抵扣：</span><span class="value" data-v-f7ccab0c>-0元</span></li><li data-v-f7ccab0c><span class="title" data-v-f7ccab0c>运费：</span><span class="value" data-v-f7ccab0c>0元</span></li>',3),ps={class:"total"},_s=c(()=>s("span",{class:"title"},"应付总额：",-1)),hs={class:"value"},us={class:"total-price"},vs={class:"section-bar"},fs={class:"btn"};function ms(t,o,p,i,l,_){const h=b("router-link"),N=b("CirclePlusFilled"),E=P;return d(),n("div",j,[s("div",w,[s("div",G,[T,V,r(h,{to:""})])]),s("div",z,[s("div",q,[D,s("div",K,[s("ul",null,[(d(!0),n(v,null,f(l.address,e=>(d(),n("li",{class:B(e.id==l.confirmAddress?"in-section":""),key:e.id,onClick:gs=>_.changeAddress(e.id)},[s("h2",null,a(e.name),1),s("p",R,a(e.phone),1),s("p",X,a(e.address),1)],10,L))),128)),s("li",H,[r(E,{size:"20px",class:"delete",style:{"vertical-align":"middle",cursor:"pointer"}},{default:m(()=>[r(N)]),_:1}),J])])])]),s("div",M,[Q,s("div",W,[s("ul",null,[(d(!0),n(v,null,f(t.getCheckGoods,e=>(d(),n("li",{key:e.id},[s("img",{src:i.targetUrl+e.productImg},null,8,Y),s("span",Z,a(e.productName),1),s("span",ss,a(e.price)+"元 x "+a(e.num),1),ts,s("span",es,a(e.price*e.num)+"元",1)]))),128))])])]),as,s("div",cs,[s("div",os,[s("ul",null,[s("li",null,[is,s("span",ns,a(t.getCheckNum)+"件",1)]),s("li",null,[ds,s("span",ls,a(t.getTotalPrice)+"元",1)]),rs,s("li",ps,[_s,s("span",hs,[s("span",us,a(t.getTotalPrice),1),g("元 ")])])])])]),s("div",vs,[s("div",fs,[r(h,{to:"/shoppingCart",class:"btn-base btn-return"},{default:m(()=>[g("返回购物车")]),_:1}),s("a",{href:"javascript:void(0);",onClick:o[0]||(o[0]=(...e)=>_.addOrder&&_.addOrder(...e)),class:"btn-base btn-primary"},"结算")])])])])}const ks=S($,[["render",ms],["__scopeId","data-v-f7ccab0c"]]);export{ks as default};
