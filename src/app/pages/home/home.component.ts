import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
    }

    login(e: Event) {
        var form = document.getElementsByClassName('needs-validation')[0] as HTMLFormElement;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            this.router.navigate(['/products'])
        }
        form.classList.add('was-validated');
    }
}
