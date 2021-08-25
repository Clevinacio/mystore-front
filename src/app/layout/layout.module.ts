import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        FontAwesomeModule,
        NgbModule
    ],
    exports: [],
    declarations: [
        LayoutComponent
    ]
})

export class LayoutModule { }