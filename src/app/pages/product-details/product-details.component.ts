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

    constructor(
      private modalService: NgbModal, 
      private cartService: CartService, 
      private router: Router,
      private route: ActivatedRoute,
      private productService: ProductService
      ) { }
    
      product: Product|null = null;
  
      ngOnInit(): void {
      this.productService.getProductById(this.route.snapshot.params.id).subscribe(product => {
        this.product = product;
      });
    }

    addToCart(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }

    redirectToCart() {
        this.router.navigate(['/cart']);
    }
}
