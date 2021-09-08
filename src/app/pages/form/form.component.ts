import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private customerService: CustomerService,
        private modalService: NgbModal) { }
    ngOnInit(): void {

    }
    //@ts-ignore
    @ViewChild('content') public content: TemplateRef<any>;

    openSuccessModal() {
        this.modalService.open(this.content, { centered: true });
    }

    homeRedirect() {
        this.modalService.dismissAll();
        this.router.navigate(['/home'])
    }

    validate(e: Event) {
        var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            const customer = {
                first_name: (<HTMLInputElement>document.getElementById('first_name')).value,
                last_name: (<HTMLInputElement>document.getElementById('last_name')).value,
                username: (<HTMLInputElement>document.getElementById('username')).value,
                password: (<HTMLInputElement>document.getElementById('password')).value,
                email: (<HTMLInputElement>document.getElementById('email')).value,
            }
            this.customerService.createCustomer(<Customer>customer).subscribe((customer: Customer) => {
                this.openSuccessModal();
            });
        }
        form.classList.add('was-validated');
    }

}
