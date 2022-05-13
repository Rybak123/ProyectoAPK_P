import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-resumen-de-la-agenda-virtual',
  templateUrl: './resumen-de-la-agenda-virtual.component.html',
  styleUrls: ['./resumen-de-la-agenda-virtual.component.scss']
})
export class ResumenDeLaAgendaVirtualComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    let startDateArry: any[] = [];
    let blinkArry: any[] = [];

    for (var i = 0; i < 7; i++) {
      blinkArry.push(Math.round(Math.random() * 100));
      startDateArry.push(Math.round(Math.random() * 100));
    }

    this.barChartData = [{ data: blinkArry, label: 'blinks' }];

    this.barChartLabels = [startDateArry];
    console.log('this is the issue!', this.barChartLabels);

    /* SOLUTION */
    this.barChartLabels = startDateArry;
    console.log('this is the fix!!!', this.barChartLabels);
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];

}
