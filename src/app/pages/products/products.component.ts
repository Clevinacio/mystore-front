import { CartItem } from './../../models/cart-item';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products: Product[] = [];
    cartSize: number = 0
    constructor(private productService: ProductService, private cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.productService.getProducts().subscribe((products: Product[]) => {
            this.products = products;
            this.cartSize = this.cartService.getCartItems.length;
        });
    }

    buy(product: Product) {
        let cartItem: CartItem = {
            id: this.cartSize + 1,
            quantity: 1,
            user: JSON.parse(<string>sessionStorage.getItem('customer')),
            product: product
        }
        this.cartService.addCartItem(cartItem);
        this.cartService.getCartItems().subscribe((items: CartItem[]) => {
            console.log(items);
        });
    }
}
