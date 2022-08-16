import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  viewList : any=[];
  searchText:any;

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
