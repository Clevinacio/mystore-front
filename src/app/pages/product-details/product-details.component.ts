import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { CartItem } from './../../models/cart-item';
import { Product } from './../../models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private modalService: NgbModal, private cartService: CartService, private router: Router) { }

    ngOnInit(): void {
    }

    addToCart(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }

    redirectToCart() {
        this.router.navigate(['/cart']);
    }
}
