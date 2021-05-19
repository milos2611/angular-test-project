import { Component, Input, OnInit } from '@angular/core';
import { PieChartModel } from '@app/@shared/models/pie-chart';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[0].data[tooltipItems.index] + '';
        },
      },
    },
  };

  @Input() products: PieChartModel;

  pieChartType: ChartType = 'pie';

  pieChartLegend = true;

  pieChartPlugins: any = [];
  constructor() {}

  ngOnInit(): void {}
}
