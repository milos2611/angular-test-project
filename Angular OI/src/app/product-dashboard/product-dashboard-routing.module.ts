import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { ProductDashboardComponent } from './product-dashboard.component';

const routes: Routes = [
  { path: '', component: ProductDashboardComponent, data: { title: marker('Product Dashboard') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductDashboardRouting {}
