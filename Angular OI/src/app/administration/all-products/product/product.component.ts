import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@app/@core/http/services/products.service';
import { Product } from '@app/@shared/models/product';
import { Location } from '@angular/common';
import { NotificationDataService } from '@app/@shared/services/notification.service';
import { ImageUploadService } from '@app/@shared/services/image-upload.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as _ from 'lodash';
import { HeaderService } from '@app/@shared/services/header.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  product: Product;
  editMode = false;
  base64textString: String = '';

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private notificationDataService: NotificationDataService
  ) {}

  ngOnInit(): void {
    this.getProductId();
    this.initForm();
    this.setValue();
  }

  getProductId() {
    this.activatedRoute.paramMap.subscribe((params: Params) => {
      this.id = params.get('id') as number;
      this.id != null ? (this.editMode = true) : (this.editMode = false);
    });
  }

  initForm() {
    this.productForm = new FormGroup({
      title: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }

  setValue() {
    if (!this.editMode) {
      return false;
    }
    this.productsService.getProduct(this.id).subscribe((product: Product) => {
      this.productForm.setValue({
        title: product.title,
        id: product.id,
        description: product.description,
        quantity: product.quantity,
        image: product.image,
        price: product.price,
      });
    });
  }

  onSubmit() {
    this.productsService.addProduct(this.productForm.value).subscribe((data) => {
      if (this.editMode) {
        this.notificationDataService.showNotification(
          'success',
          'Product ' + this.productForm.value.title + ' is edited!'
        );
      } else {
        this.notificationDataService.showNotification(
          'success',
          'Product ' + this.productForm.value.title + ' is added!'
        );
      }
    });

    this.location.back();
  }
}
