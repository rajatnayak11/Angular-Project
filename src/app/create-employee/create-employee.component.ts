import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  public employee: Employee = new Employee() ;
  
  constructor(private employeeService: EmployeeServiceService, private router: Router) {}

  ngOnInit(): void {

  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      data => {console.log(data);
        this.goToEmployeeList();      
      },
      error => console.log(error)
    );
  }

  goToEmployeeList(){
      this.router.navigate(['/employee-list']);
  }

  onSubmit(){
      console.log(this.employee);
      this.saveEmployee();
  }

  onCancel(){
    this.router.navigate(['/employee-list']);
  }

}
