import { Component, OnInit } from '@angular/core';
import { EmployeeFormModel } from '../Store/employeeFormModel'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeFormModel: EmployeeFormModel;
  submitted:any;
  submittedDOJ: any;

  tablename = 'Sample Table';

  lstSample = [
    {id:1, name:'One'},
    {id:2, name:'two'},
    {id:3, name:'three'},
    {id:4, name:'four'},
    {id:5, name:'five'},
  ];

  lstSample1 = ['Six', 'Seven', 'Eight', 'nine', 'ten'];

  constructor() {
    this.employeeFormModel = new EmployeeFormModel();
   }
  ngOnInit(): void {
    this.submitted = false;
    this.submittedDOJ = false;
  }

  Submit() {
    debugger;
    if(this.employeeFormModel.empName == ''){
      this.submitted = false;
    }
    else {
      this.submitted = true;
    }
    if(this.employeeFormModel.organization == ''){
      this.submittedDOJ = false;
    }
    else{
      this.submittedDOJ = true;
    }


    this.lstSample; 
    var sirstname = this.lstSample[0].name;  
    this.lstSample1;
    this.employeeFormModel;  
  }

}
