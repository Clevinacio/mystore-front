import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@NgModule({
    imports: [
        CommonModule,
        CartRoutingModule,
    ],
    declarations: [
        CartComponent,
        ProductCardComponent
    ]
})
export class CartModule { }