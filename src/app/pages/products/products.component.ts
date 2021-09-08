import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products: Product[] = [];

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit() {
        this.productService.getProducts().subscribe((products: Product[]) => {
            this.products = products;
        });
    }

    buy(content: Product) {
        console.log(content)
        this.router.navigate(['/cart']);
    }
}
