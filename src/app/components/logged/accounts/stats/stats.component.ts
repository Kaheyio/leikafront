import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createPolarAChart();
    this.createBarChart();
  }


  createPolarAChart(){
    const polarAChart = new Chart("polarAChart", {
      type: 'polarArea',
      data: {
          labels: ['Rejected', 'Pending', 'Incoming'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)', // red
                  'rgba(54, 162, 235, 0.2)', // blue
                  // 'rgba(255, 206, 86, 0.2)', yellow
                  'rgba(75, 192, 192, 0.2)', // green
                  // 'rgba(153, 102, 255, 0.2)', purple
                  // 'rgba(255, 159, 64, 0.2)' orange
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  // 'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  // 'rgba(153, 102, 255, 1)',
                  // 'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

  createBarChart(){
    // TODO:
    // const labels = get transaction date ?
    // data = get sum of transaction amount
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    const barChart = new Chart("barChart", {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'Click here to clear chart',
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)', // red
                // 'rgba(75, 192, 192, 0.2)', // green
                'rgba(224, 182, 66, 0.2)',  // gold
                'rgba(8, 8, 8, 0.2)'        // black     
              ],
              borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(75, 192, 192, 1)',
                'rgba(224, 182, 66, 1)',  
                'rgba(8, 8, 8, 1)'             
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  }

}
