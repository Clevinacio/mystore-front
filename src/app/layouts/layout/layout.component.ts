import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor() {
        console.log('LayoutComponent:constructor');
    }

    ngOnInit(): void { }

}
