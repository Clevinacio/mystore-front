import { Component, OnInit } from '@angular/core';
import { faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'main-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    isMenuCollapsed = true;
    faCart: IconDefinition = faShoppingCart;
    nome: string = 'Cleverton Inácio';
    constructor() { }

    ngOnInit(): void { }

}
