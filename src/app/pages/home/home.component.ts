import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService,  private modalService: NgbModal) { }

    ngOnInit(): void {
    }

      
      @ViewChild('content_user_not_found') public user_not_found: TemplateRef<any> | undefined;
      @ViewChild('content_wrong_password') public wrong_password: TemplateRef<any> | undefined;

      openUserNotFound() {
          this.modalService.open(this.user_not_found, { centered: true });
        }
        openWrongPassword() {
          this.modalService.open(this.wrong_password, { centered: true });
      }

    

    login(e: Event) {
        var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
          const username= (<HTMLInputElement>document.getElementById('username')).value;
          const password= (<HTMLInputElement>document.getElementById('password')).value;
          this.customerService.login(username, password).subscribe(
            (customer: Customer) => {
              console.log(customer)
              sessionStorage.setItem('customer', JSON.stringify(customer));
              this.router.navigate(['/products']);
            },
            err => {
              if(err.status == 404)
                this.openUserNotFound()
              else if(err.status == 401)
                this.openWrongPassword()
            }),
          e.preventDefault()
        }
    }
}
