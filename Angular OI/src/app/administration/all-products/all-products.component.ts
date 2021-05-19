import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '@app/@core/http/services/products.service';
import { Product } from '@app/@shared/models/product';
import { HeaderService } from '@app/@shared/services/header.service';
import { NotificationDataService } from '@app/@shared/services/notification.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  editMode = false;
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationDataService: NotificationDataService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getRouterId() {}

  getProduct() {
    this.productsService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  editProduct(id: number) {
    this.router.navigate(['../', 'product', 'edit', id], { relativeTo: this.route });
  }

  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product.id).subscribe((data) => {
      this.products = this.products.filter((h) => h !== product);
      this.notificationDataService.showNotification('success', 'Product ' + product.title + ' is deleted!');
    });
  }
}
