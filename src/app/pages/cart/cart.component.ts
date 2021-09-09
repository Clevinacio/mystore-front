import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    items: CartItem[] = [];

    constructor(
        private cartService: CartService,
        private router: Router,
        private modalService: NgbModal) { }

    ngOnInit() {
        this.cartService.getCartItems().subscribe((items: CartItem[]) => {
            this.items = items;
        });
    }

    finalizePurchase(content: any) {
        this.cartService.cleanCartItem().subscribe();
        this.reloadComponent();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }

    redirectToProducts() {
        this.router.navigate(['/products']);
    }

    reloadComponent() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
