import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {

  type = 'bar';
  data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {     
        label: "Sales for last 5 months",
        fill:'true',
        backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d"],
        data: [2478,5267,734,784,5000]
      }
    ]
  };

options = {
  legend: {
    display: true
},
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      { display: true,
                gridLines: {
                    display:false
                }
            }],
    yAxes: [
      {
                display: true,
                gridLines: {
                    display:false
                }   
            }]
}
}

  constructor() { }

  ngOnInit(): void {
  }
  


}
