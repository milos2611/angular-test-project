import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './pipe/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicReactiveFormComponent } from './component/dynamic-reactive-form/dynamic-reactive-form.component';
import { GoogleMapComponent } from './component/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { PieChartComponent } from './component/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { FilterCurrencyPipe } from './pipe/filter-currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6DQUssVnkJk8Fn2nO-O5BOL9pR_jm9vQ',
    }),
    ChartsModule,
  ],
  declarations: [FilterPipe, DynamicReactiveFormComponent, GoogleMapComponent, PieChartComponent, FilterCurrencyPipe],
  exports: [FilterPipe, DynamicReactiveFormComponent, GoogleMapComponent, PieChartComponent, FilterCurrencyPipe],
})
export class SharedModule {}
