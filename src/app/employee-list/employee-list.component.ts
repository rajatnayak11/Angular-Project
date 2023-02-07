import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{

  public employees: IEmployee[] = [];
  public showFilter = false;
  private _filterList =  "";
  public filteredEmployees: IEmployee[] = [];
  constructor(private employeeService: EmployeeServiceService, private router: Router) {}

  get filterList() :string{
    return this._filterList;
  }

  set filterList(value : string) {
    this._filterList = value;
    this.filteredEmployees = this.performFilter(this._filterList);
  }

  onFilterClick(){
      this.showFilter = !this.showFilter;
  }

  ngOnInit(): void {
    this.getEmployees();
  //  this.employees = this.employeeService.getAll();
    this.filteredEmployees = this.employees;
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  performFilter(enteredValue: string): IEmployee[]{
    enteredValue = enteredValue.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
    employee.employeeName.toLocaleLowerCase().includes(enteredValue));
  }

  onClickInfo(id: number){
    this.router.navigate(['/employee-details',id]);
  }

  onClickUpdate(employeeId: number){
    this.router.navigate(['/update-employee',employeeId]);
  }

  onClickDelete(id: number)
  {
    this.employeeService.deleteEmployeeById(id).subscribe(data =>{
      this.getEmployees();
    })
  }


}
