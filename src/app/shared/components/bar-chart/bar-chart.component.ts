import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  basicData: any;

  horizontalOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['StockX', 'Ebay'],
      datasets: [
          {
              label: 'Average Sale Price (Last 30 days)',
              backgroundColor: '#66BB6A',
              data: [500, 1250]
          }
      ]
    };

    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
    };

  }

}
