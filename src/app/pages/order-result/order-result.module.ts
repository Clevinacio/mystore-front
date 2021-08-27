import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderResultRoutingModule } from './order-result-routing.module';
import { OrderResultComponent } from './order-result.component';

@NgModule({
    imports: [
        CommonModule,
        OrderResultRoutingModule,
    ],
    declarations: [
        OrderResultComponent
    ]
})
export class OrderResultModule { }