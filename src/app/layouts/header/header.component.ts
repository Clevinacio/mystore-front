import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff, faShoppingCart, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isMenuCollapsed = true;
    faCart: IconDefinition = faShoppingCart;
    faOff: IconDefinition = faPowerOff;
    nome: string = 'User full_name';
    constructor(private router: Router,) { }

    ngOnInit(): void {
      this.nome = JSON.parse(<string>sessionStorage.getItem('customer'))['first_name'] + ' ' + JSON.parse(<string>sessionStorage.getItem('customer'))['last_name']
    }

    logout() {
      sessionStorage.removeItem('customer');
      this.router.navigate(['/home']);
    }

}
