import { Label } from 'ng2-charts';

export class PieChartModel {
  pieChartLabels: Label[];
  pieChartData: number[];

  constructor(pieChartLabels: Label[], pieChartData: number[]) {
    this.pieChartData = pieChartData;
    this.pieChartLabels = pieChartLabels;
  }
}
