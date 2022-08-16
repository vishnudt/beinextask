import { Time } from "@angular/common";

export class addModel{
    id:number=0;
    task_name?:string;
    task_id:number=0;
    task_status?:string;
    start_time?:Time;
    end_time?:Time; 
    created_date?:Date
    approval_status?:string;
    assigned_manager?:string;
    task_description?:string; 



}