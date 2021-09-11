"use strict";(self.webpackChunkmystore_front=self.webpackChunkmystore_front||[]).push([[705],{3705:(b,s,a)=>{a.r(s),a.d(s,{CartModule:()=>v});var l=a(8583),m=a(7957),t=a(7716),u=a(910),d=a(8632);let p=(()=>{class n{constructor(e,o){this.cartService=e,this.router=o}ngOnInit(){}removeFromCart(e){this.cartService.cleanCartItem(e).subscribe(),this.reloadComponent()}upateQuantity(e){const o=document.getElementById(`item-quantity-${e}`).value;this.cartService.updateCartItemQuantity(o,e).subscribe(),this.reloadComponent()}reloadComponent(){let e=this.router.url;this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload",this.router.navigate([e])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.N),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart-item"]],inputs:{item:"item"},decls:12,vars:5,consts:[[1,"cart-item-card"],[1,"cart-item-card-info"],[1,"item-product-name"],[1,"item-total-price"],[1,"cart-item-card-quantity","mt-4"],["type","number",1,"item-quantity","form-control",3,"id","value"],[1,"btn","btn-info","btn-sm","mr-2",3,"click"],[1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"input",5),t.TgZ(8,"button",6),t.NdJ("click",function(){return o.upateQuantity(o.item.product.id)}),t._uU(9,"Salvar"),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(){return o.removeFromCart(o.item.product.id)}),t._uU(11,"Remover"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.AsE("",o.item.product.name," (R$",o.item.product.price.toFixed(2),")"),t.xp6(2),t.hij("R$",(o.item.product.price*o.item.quantity).toFixed(2),""),t.xp6(2),t.MGl("id","item-quantity-",o.item.product.id,""),t.s9C("value",o.item.quantity))},styles:[".cart-item-card[_ngcontent-%COMP%]{padding:1rem;border-radius:.3125rem;background-color:#fff;box-shadow:0 .0625rem .1875rem #00000080;margin:2rem 0}.item-product-name[_ngcontent-%COMP%], .item-total-price[_ngcontent-%COMP%]{font-size:1.45rem;font-weight:bolder}.cart-item-card-info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:space-between}.item-quantity[_ngcontent-%COMP%]{width:5rem;margin-right:1.25rem;display:inline-block}"]}),n})();function C(n,r){1&n&&(t.TgZ(0,"div",5),t.TgZ(1,"div",6),t.TgZ(2,"h2",7),t._uU(3,"Nenhum item adicionado no carrinho :("),t.qZA(),t.qZA(),t.qZA())}function g(n,r){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-cart-item",12),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Q6J("item",e)}}function _(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,g,2,1,"div",8),t.TgZ(2,"div",9),t.TgZ(3,"div",10),t.TgZ(4,"button",11),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),c=t.MAs(6);return i.finalizePurchase(c)}),t._uU(5,"Finalizar compra"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.items)}}function f(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"h4",14),t._uU(2,"Compra finalizada"),t.qZA(),t.TgZ(3,"button",15),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.TgZ(4,"span",16),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",17),t.TgZ(7,"p"),t._uU(8,"Sua compra foi finalizada com sucesso!"),t.qZA(),t.qZA(),t.TgZ(9,"div",18),t.TgZ(10,"button",19),t.NdJ("click",function(){const c=t.CHM(e).$implicit;return t.oxw().redirectToProducts(),c.close("Save click")}),t._uU(11,"Voltar para a p\xe1gina inicial"),t.qZA(),t.TgZ(12,"button",20),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Save click")}),t._uU(13,"Fechar"),t.qZA(),t.qZA()}}const Z=[{path:"",component:(()=>{class n{constructor(e,o,i){this.cartService=e,this.router=o,this.modalService=i,this.items=[]}ngOnInit(){this.cartService.getCartItems().subscribe(e=>{this.items=e})}finalizePurchase(e){this.cartService.cleanCartItem().subscribe(),this.reloadComponent(),this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"})}redirectToProducts(){this.router.navigate(["/products"])}reloadComponent(){let e=this.router.url;this.router.routeReuseStrategy.shouldReuseRoute=()=>!1,this.router.onSameUrlNavigation="reload",this.router.navigate([e])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.N),t.Y36(m.F0),t.Y36(d.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],decls:7,vars:2,consts:[[1,"container","mt-4"],[2,"font-weight","bolder"],["class","d-flex justify-content-md-center",4,"ngIf"],[4,"ngIf"],["content",""],[1,"d-flex","justify-content-md-center"],[1,"col-md-auto"],[2,"color","gray","padding-top","50px"],[4,"ngFor","ngForOf"],[1,"row","justify-content-end"],[1,"col-2"],[1,"btn","btn-primary",2,"margin","10px 0",3,"click"],[3,"item"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1",1),t._uU(2,"Meu carrinho"),t.qZA(),t.YNc(3,C,4,0,"div",2),t.YNc(4,_,6,1,"div",3),t.qZA(),t.YNc(5,f,14,0,"ng-template",null,4,t.W1O)),2&e&&(t.xp6(3),t.Q6J("ngIf",0==o.items.length),t.xp6(1),t.Q6J("ngIf",o.items.length>0))},directives:[l.O5,l.sg,p],styles:[".container[_ngcontent-%COMP%]{min-height:100vh}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(Z)],m.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,h]]}),n})()}}]);