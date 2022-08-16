import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  viewList : any=[];
  
  

  constructor(private api: ApiService) { }

  ngOnInit(): void {


    this.getDetails()
  }


  getDetails(){
    this.api.getItems().subscribe(res =>{
      this.viewList = res;
      console.log(res)
    })
  }



  

}
