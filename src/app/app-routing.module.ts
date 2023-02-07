import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'', redirectTo:'/home-page', pathMatch:'full'},
  {path:'home-page', component: HomePageComponent},
  {path:'employee-list', component: EmployeeListComponent},
  {path:'create-employee', component: CreateEmployeeComponent},
  {path:'update-employee/:employeeId', component: UpdateEmployeeComponent},
  {path:'employee-details/:employeeId', component: EmployeeDetailComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutesObjects = [HomePageComponent, EmployeeListComponent, CreateEmployeeComponent, UpdateEmployeeComponent, EmployeeDetailComponent];