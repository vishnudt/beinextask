import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  UserLists : any=[];
  ManagerLists : any=[];

  user = true;
  manager = false;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
   
  }

  UserSub(){
    this.user = true;
    this.manager = false;

  }

  ManagerSub(){
    this.user = false;
    this.manager = true;

  }

  onSubmit(login:any) {
    this.api.getUser().subscribe(data => {
      this.UserLists = data;
      console.log(this.UserLists);
      console.log(login)
   
      for (let item in this.UserLists){
        console.log("username",this.UserLists[item].username);
        console.log("username",login.username);
      
        if((this.UserLists[item].username == login.username) && (this.UserLists[item].password == login.password)){
          console.log("user here")
          this.router.navigateByUrl("user-dashboard")
          
       
        }
        else{
          alert("this user is not here!")
          console.log("no user here")
        }
        
      }
  
    });

  }


  managerSubmit(managerdata:any) {
    this.api.getManager().subscribe(data => {
      this.ManagerLists = data;
      console.log(this.ManagerLists);
      console.log(managerdata)
   
      for (let item in this.ManagerLists){
        console.log("username",this.ManagerLists[item].username);
        console.log("username",managerdata.username);
  
        if((this.ManagerLists[item].username == managerdata.username) && (this.ManagerLists[item].password == managerdata.password)){
          console.log("manager here")
          this.router.navigateByUrl("manager-dashboard")
          
       
        }
        else{
          alert("this manager is not here!")
          console.log("no manager here")
        }
        
      }
  
    });

  }

  

}
