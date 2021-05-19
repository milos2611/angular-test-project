import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { NgxDatatableComponent } from './ngx-datatable.component';

const routes: Routes = [{ path: '', component: NgxDatatableComponent, data: { title: marker('Ngx Datatable') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class NgxDatatabeleRouting {}
