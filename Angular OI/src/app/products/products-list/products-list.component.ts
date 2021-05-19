import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '@app/@core/http/services/products.service';
import { Product } from '@app/@shared/models/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import * as io from 'socket.io-client';
import { HeaderService } from '@app/@shared/services/header.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environmentData } from '@app/@shared/services/config.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProduct = '';
  public isCollapsed = false;
  private unSubsribe$ = new Subject<void>();
  private socket: any;
  public data: any;

  constructor(
    private productsService: ProductsService,
    private modalService: NgbModal,
    private headerService: HeaderService
  ) {
    this.socket = io(environmentData.ioUrl);
  }

  ngOnInit(): void {
    this.getProduct();
    this.getProductFomNodeJs();
  }

  getProductFomNodeJs() {
    this.socket.on('notification', (product: Product) => {
      if (this.products.find((i) => i.id !== product.id)) {
        this.products.push(product);
        this.headerService.addElement(1);
      }
    });
  }
  getProduct() {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.unSubsribe$))
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }
  open(product: Product) {
    const modalRef = this.modalService.open(ProductsDetailsComponent);
    modalRef.componentInstance.product = product;
  }

  ngOnDestroy() {
    this.socket.disconnect();
  }
}
