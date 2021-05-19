import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/@core/http/services/products.service';
import { PieChartModel } from '@app/@shared/models/pie-chart';
import { Product } from '@app/@shared/models/product';
import { Label } from 'ng2-charts';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  private unSubsribe$ = new Subject<void>();

  products: PieChartModel;

  price: number;
  maxValue: number;
  minValue: number;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productsService
      .getProducts()
      .pipe(
        map((product: Product[]) => {
          let pieChartLabels: Label[] = [];
          let pieChartData: number[] = [];

          product.forEach((data: Product) => {
            pieChartLabels.push(data.title);
            pieChartData.push(data.price);
          });
          return new PieChartModel(pieChartLabels, pieChartData);
        }),
        takeUntil(this.unSubsribe$)
      )
      .subscribe((products: PieChartModel) => {
        this.products = products;
        this.findMaxValue();
      });
  }

  findMaxValue() {
    this.maxValue = Math.max(...this.products.pieChartData);
    this.minValue = Math.min(...this.products.pieChartData);
    this.price = this.minValue;
  }
}
