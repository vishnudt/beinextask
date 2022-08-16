import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { addModel } from './user-dashboard.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  viewList : any=[];

  formValue ! : FormGroup <any>
  addObj:addModel= new addModel;

  public isShow = true;
  dtltable = true;

  btnSaveshow:boolean=true;
  btnUpdateshow:boolean=false;

  rjcttable = false;
  apptable = false;

  searchText:any;
  

  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      task_name :[''],
      task_id :[''],
      task_status :[''],
      start_time :[''],
      end_time:[''],
      created_date:[''],
      approval_status :[''],
      assigned_manager:[''],
      task_description :[''],


    })

    this.getDetails()
  }

  ApprovalTask(){
    this.apptable = true;
    this.rjcttable = false;
    this.isShow = true;
    this.dtltable = false
  }

  RejectTask(){
    this.rjcttable = true;
    this.isShow = true;
    this.dtltable = false
    this.apptable = false;
  }

  displayForm(){
    this.isShow = !this.isShow;
    this.dtltable = false;
    this.rjcttable=false;
    this.apptable = false;
    
  }
  displayDtl(){
    this.dtltable = true;
    this.isShow = true;
    this.rjcttable=false
    this.apptable = false;
  }

  showSave(){
    this.btnSaveshow=true;
    this.btnUpdateshow=false;
  }

  showUpdate(){
    this.btnSaveshow=false;
    this.btnUpdateshow=true;
  }





  getDetails(){
    this.api.getItems().subscribe(res =>{
      this.viewList = res;
      console.log(res)
    })
  }



  add(){
    this.addObj.task_name = this.formValue.value.task_name;
    this.addObj.task_id = this.formValue.value.task_id;
    this.addObj.task_status = this.formValue.value.task_status;
    this.addObj.start_time  = this.formValue.value.start_time ;
    this.addObj.end_time  = this.formValue.value.end_time ;
    this.addObj.created_date = this.formValue.value.created_date ;
    this.addObj.approval_status = this.formValue.value.approval_status ;
    this.addObj.assigned_manager  = this.formValue.value.assigned_manager;
    this.addObj.task_description  = this.formValue.value.task_description;
    this.api.postData(this.addObj).subscribe({next: (p) => {
      console.log(p)
    },
    error: (e) => {
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record added")
      alert("record added")
      this.showSave()
      
    }
  })


  }


  editGetvalue(data:any){
    this.formValue.controls['task_name'].setValue(data.task_name);
    this.formValue.controls['task_id'].setValue(data.task_id);
    this.formValue.controls['task_status'].setValue(data.task_status);
    this.formValue.controls['start_time'].setValue(data.start_time);
    this.formValue.controls['end_time'].setValue(data.end_time);
    this.formValue.controls['created_date'].setValue(data.created_date);
    this.formValue.controls['approval_status'].setValue(data.approval_status);
    this.formValue.controls['assigned_manager'].setValue(data.assigned_manager);
    this.formValue.controls['task_description'].setValue(data.task_description);
    this.addObj.id = data.id;
    this.displayForm();
    this.showUpdate()
    
    
  }


  updateTask(){
    this.addObj.task_name = this.formValue.value.task_name;
    this.addObj.task_id = this.formValue.value.task_id;
    this.addObj.task_status = this.formValue.value.task_status;
    this.addObj.start_time  = this.formValue.value.start_time ;
    this.addObj.end_time  = this.formValue.value.end_time ;
    this.addObj.created_date = this.formValue.value.created_date ;
    this.addObj.approval_status = this.formValue.value.approval_status ;
    this.addObj.assigned_manager  = this.formValue.value.assigned_manager;
    this.addObj.task_description  = this.formValue.value.task_description;
    this.api.PutData(this.addObj,this.addObj.id).subscribe({ next: (u) => {
      console.log(u)
    },
    error: (e) => {
      console.log(e)
      alert('error')
    },
    complete: () =>{
      console.log("reccord updated")
      alert("record updated")
      this.getDetails()
      
      
    }
  })

  }

  deleteTask(data:any){
    this.api.deleteData(data.id).subscribe({next: (d) => {
      console.log(d)
    },
    error: (e) => {
      console.log(e)
      alert("error")
    },
    complete: () => {
      console.log("record deleted")
      alert("record deleted")
      
      
    }
  })
  }


  clearForm(){
    this.formValue.reset()
  }







  get val_task_name() {
    return this.api.formValue.get('task_name');
  }
  get val_task_id() {
    return this.api.formValue.get('task_id');
  }
  get val_task_status() {
    return this.api.formValue.get('task_status');
  }
  get val_start_time() {
    return this.api.formValue.get('start_time');
  }
  get val_end_time () {
    return this.api.formValue.get('end_time ');
  }
  get val_created_date () {
    return this.api.formValue.get('created_date ');
  }
  get val_approval_status() {
    return this.api.formValue.get('approval_status');
  }
  get val_assigned_manager() {
    return this.api.formValue.get('assigned_manager');
  }
  get val_task_description () {
    return this.api.formValue.get('task_description ');
  }


}
