import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChartModule } from 'angular2-chartjs';




@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    ManagerDashboardComponent,
    TaskListComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    ChartModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
