import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService,) { }

    ngOnInit(): void {
    }

    login(e: Event) {
        var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
          const username= (<HTMLInputElement>document.getElementById('username')).value;
          const password= (<HTMLInputElement>document.getElementById('password')).value;
          this.customerService.login(username, password).subscribe((customer: Customer) => {
            sessionStorage.setItem('customer', JSON.stringify(customer));
            this.router.navigate(['/products']);
          });
          e.preventDefault()
        }
        form.classList.add('was-validated');
    }
}
