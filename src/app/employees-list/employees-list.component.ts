import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  emplist:any=[{empId:'100',firstName:'pavan',lastName:'kumar'},
                  {empId:200,firstName:'yash',lastName:'naravade'},
                  {empId:300,firstName:'ravi',lastName:'kiran'},


];


}
