import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiRoot = 'http://127.0.0.1:8000/';

  private apiUser = 'http://127.0.0.1:8000/auth/';


  constructor(private http: HttpClient) { }

  formValue = new FormGroup({
    'task_name': new FormControl('',[Validators.required, ]),
    'task_id' : new FormControl('',[Validators.required]),
    'task_status' : new FormControl('',[Validators.required, ]),
    'start_time' : new FormControl('',[Validators.required ]),
    'end_time ' : new FormControl('',[Validators.required]),
    'created_date ' : new FormControl('',[Validators.required]),
    'approval_status' : new FormControl('',[Validators.required]),
    'assigned_manager' : new FormControl('',[Validators.required]),
    'task_description' : new FormControl('',[Validators.required]),
  })


  getItems(){
    return this.http.get<any>(this.apiRoot.concat('task')).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  getUser(){
    return this.http.get<any>(this.apiRoot.concat('user')).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  getManager(){
    return this.http.get<any>(this.apiRoot.concat('manager')).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  postData(data:any){
    return this.http.post<any>(this.apiRoot.concat('task/'), data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  postUser(userdata: any):Observable<any>{
    return this.http.post<any>(this.apiUser.concat('user/'), userdata).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

  PutData(data:any, id:number){
    return this.http.put<any>('http://127.0.0.1:8000/task/'+id,data).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }


  deleteData(id:number){
    return this.http.delete<any>(this.apiRoot.concat('task/')+ id).pipe(
      map(
        (res =>{
          return res;
        })
      )
    )
  }

}
