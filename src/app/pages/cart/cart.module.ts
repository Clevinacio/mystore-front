import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from 'src/app/components/cart-item/cart-item.component';

@NgModule({
    imports: [
        CommonModule,
        CartRoutingModule,
    ],
    declarations: [
        CartComponent,
        CartItemComponent,
    ]
})
export class CartModule { }