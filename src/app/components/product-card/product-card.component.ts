import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

    constructor(private modalService: NgbModal) { }
    @Input() product: any;
    @Output() buy = new EventEmitter();
    ngOnInit(): void {
    }

    addToCart(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }

    redirectToCart() {
        this.buy.emit();
    }
}
