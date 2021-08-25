import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './app.component.scss'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    faCart = faShoppingCart;
    nome = 'Cleverton Inácio';
    public isMenuCollapsed = true;
}
