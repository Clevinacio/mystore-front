import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    constructor(private modalService: NgbModal, private router: Router) { }
    @Input() product: any;
    @Output() buy = new EventEmitter();
    ngOnInit(): void {
    }

    addToCart(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.buy.emit();
    }

    redirectToCart() {
        this.router.navigate(['/cart']);
    }
}
