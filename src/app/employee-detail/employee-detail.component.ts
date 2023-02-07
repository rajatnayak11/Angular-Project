import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public id!: number;
  public employee: Employee = new Employee();

  constructor(private route: ActivatedRoute, private employeeService: EmployeeServiceService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['employeeId'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;},
      error => console.log(error)
      );
  }

  onBack(){
    this.router.navigate(['/employee-list']);
  }
}
