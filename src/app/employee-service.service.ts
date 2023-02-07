import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService implements OnInit {

  private _url = "http://localhost:8080/api/employee";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(`${this._url}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(this._url,employee);
  }

  getEmployeeById(employeeId: number) :Observable<Employee>{
    return this.http.get<Employee>(`${this._url}/${employeeId}`);
  }
//`${this._url}/${employeeId}`
  updateEmployee(employeeId: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this._url}/${employeeId}`,employee);
  }

  deleteEmployeeById(id: number): Observable<Object>{
     return this.http.delete(`${this._url}/${id}`);
  }


  // getAll(): IEmployee[]{
  //   return [
  //     {
  //         "employeeAddress": "",
  //         "employeeAge": 0,
  //         "employeeDesignation": "",
  //         "employeeId": 1,
  //         "employeeName": ""
  //     },
  //     {
  //         "employeeAddress": "Nerul",
  //         "employeeAge": 5,
  //         "employeeDesignation": "A5",
  //         "employeeId": 2,
  //         "employeeName": "Rajat"
  //     },
  //     {
  //         "employeeAddress": "Vashi",
  //         "employeeAge": 15,
  //         "employeeDesignation": "A4",
  //         "employeeId": 3,
  //         "employeeName": "Kumar"
  //     },
  //     {
  //         "employeeAddress": "Turbe",
  //         "employeeAge": 25,
  //         "employeeDesignation": "A3",
  //         "employeeId": 4,
  //         "employeeName": "Nayak"
  //     }
  // ];
  // }


}
