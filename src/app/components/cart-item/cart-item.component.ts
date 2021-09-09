import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private cartService: CartService) { }
  @Input() item: any;
  ngOnInit(): void {
  }
  removeFromCart(product_id: number) {
    this.cartService.cleanCartItem(product_id).subscribe();
    // Todo: Show modal to confirm or just reload the page
  }
  upateQuantity(product_id: number) {
    // Todo: Better way to retrieve the quantity and remove the ts-ignore
    const quantity = (<HTMLInputElement>document.getElementById(`item-quantity-${product_id}`)).value
    //@ts-ignore
    this.cartService.updateCartItemQuantity(quantity, product_id).subscribe();
    // Todo: Visual confirmation of the update
  }
}
