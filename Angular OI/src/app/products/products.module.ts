import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsRoutingModule } from './procuts-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsDetailsComponent } from './products-list/products-details/products-details.component';

@NgModule({
  declarations: [ProductsListComponent, ProductsDetailsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ProductsRoutingModule,
    FormsModule,
    SharedModule,
    NgbModule,
    TranslateModule,
  ],
})
export class ProductsModule {}
