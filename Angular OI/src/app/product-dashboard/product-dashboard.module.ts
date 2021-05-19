import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard.component';
import { ProductDashboardRouting } from './product-dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/@shared';

@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [CommonModule, ProductDashboardRouting, FormsModule, SharedModule],
})
export class ProductDashboardModule {}
