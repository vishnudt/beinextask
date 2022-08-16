import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.register = {
      full_name :'',
      username :'',
      password :'',
      user_id :'',
      is_superuser :'',
      department :'',
      designation :'',

      

    }
  }


 onRegister(){
  this.api.postUser(this.register).subscribe({next: (p) => {
    console.log(p)
  },
  error: (e) => {
    console.log(e)
    alert("error")
  },
  complete: () => {
    console.log("record added")
    alert("record added")
  
    
  }
})
 }

}
