import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@app/@shared/models/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  @Input() product: Product;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
