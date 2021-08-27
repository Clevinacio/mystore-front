import { Component, OnInit } from '@angular/core';
import { faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isMenuCollapsed = true;
    faCart: IconDefinition = faShoppingCart;
    nome: string = 'Cleverton Inácio';
    constructor() { }

    ngOnInit(): void {
    }

}
