import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
      ],
      declarations: [
        ProductsComponent,
        ProductCardComponent
    ]
})
export class ProductsModule { }
