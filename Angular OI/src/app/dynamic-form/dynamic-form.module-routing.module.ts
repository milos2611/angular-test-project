import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { DynamicFormComponent } from './dynamic-form.component';

const routes: Routes = [{ path: '', component: DynamicFormComponent, data: { title: marker('Dynamic form') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class DynamicFormRoutingModule {}
