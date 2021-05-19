import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '@app/@core/http/services/products.service';
import { Product } from '@app/@shared/models/product';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss'],
})
export class NgxDatatableComponent implements OnInit {
  rows: Product[] = [];

  temp: Product[] = [];

  columns = [{ prop: 'title' }, { name: 'price' }, { name: 'description' }];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;
  private unSubsribe$ = new Subject<void>();

  constructor(private productsService: ProductsService) {}
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.unSubsribe$))
      .subscribe((products: Product[]) => {
        this.temp = products;

        // push our inital complete list
        this.rows = products;
      });
  }

  updateFilter(event: string) {
    // filter our data
    const temp = this.temp.filter((data: Product) => data.title.toLowerCase().includes(event.toLowerCase()));

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
