import { CartItem } from './../../models/cart-item';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
    cartSize: number = 0;

    constructor(
        private modalService: NgbModal,
        private cartService: CartService,
        private router: Router,
        private route: ActivatedRoute,
        private productService: ProductService
    ) { }

    product: Product = {} as Product;

    ngOnInit(): void {
        this.productService.getProductById(this.route.snapshot.params.id).subscribe(product => {
            this.product = product;
            this.cartSize = this.cartService.getCartItems.length;
        });
    }

    addToCart(content: any, product: Product) {
        let cartItem: CartItem = {
            id: this.cartSize + 1,
            quantity: 1,
            user: JSON.parse(<string>sessionStorage.getItem('customer'))['id'],
            product: product.id
        }

        this.cartService.addCartItem(cartItem).subscribe();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }

    redirectToCart() {
        this.router.navigate(['/cart']);
    }
}
