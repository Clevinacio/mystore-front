import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductCardComponent } from "../components/product-card/product-card.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LayoutFooterComponent } from "./layout-footer-only/layout-footer.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FontAwesomeModule,
        NgbModule,
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        LayoutFooterComponent,
        FooterComponent,
        HeaderComponent
    ]
})

export class LayoutModule { }