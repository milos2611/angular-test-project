import { Pipe, PipeTransform } from '@angular/core';
import { PieChartModel } from '../models/pie-chart';
import { Label } from 'ng2-charts';

@Pipe({
  name: 'filterCurrency',
})
export class FilterCurrencyPipe implements PipeTransform {
  transform(value: PieChartModel, filternNumber: number): unknown {
    let pieChartLabels: Label[] = [];
    let pieChartData: number[] = [];

    for (let i = 0; i < value.pieChartData.length; i++) {
      if (value.pieChartData[i] >= filternNumber) {
        pieChartLabels.push(value.pieChartLabels[i]);
        pieChartData.push(value.pieChartData[i]);
      }
    }

    return new PieChartModel(pieChartLabels, pieChartData);
  }
}
