import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductComponent } from './all-products/product/product.component';
import { AdministrationComponent } from './administration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AllProductsComponent, ProductComponent, AdministrationComponent],
  imports: [CommonModule, AdministrationRoutingModule, ReactiveFormsModule, FormsModule, TranslateModule],
})
export class AdministrationModule {}
