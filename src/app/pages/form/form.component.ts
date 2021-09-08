import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit(): void {

    }

    validate(e: Event) {
        var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            this.router.navigate(['/home'])
        }
        form.classList.add('was-validated');
    }

}
