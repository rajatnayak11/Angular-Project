import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  public employee: Employee = new Employee();
  public employeeId!: number;
  
  constructor(private employeeService: EmployeeServiceService, private route: ActivatedRoute, private router: Router) {}
  
  
  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data =>
      {this.employee = data;},
      error => console.log(error)
      );
  }

  onUpdate(){
    this.employeeService.updateEmployee(this.employeeId,this.employee).subscribe(data =>{
      this.router.navigate(['/employee-list']);
    },
    error => console.log(error));

  }

  onCancel()
  {
    this.router.navigate(['/employee-list']);
  }

}
