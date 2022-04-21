import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../shared/task-data.service';
import { map } from 'rxjs/operators';
import { Meter } from '../shared/meter';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TaskDataService]
})
export class TableComponent implements OnInit {

  constructor(
    private getTaskDataService:TaskDataService,
    private http: HttpClient
  ) { }

  dateNow = new Date();
  valueDate = this.dateNow.toISOString().substring(0, 10);
  data:any[] = [];

  btn(val:number){
    this.valueDate = new Date(this.dateNow.setDate(this.dateNow.getDate() + val)).toISOString().substring(0, 10);
  }

  btnUpdate(){
    console.log(this.update());
  }

  update(){
    this.getTaskDataService.getSerialNumberList().subscribe(x=> { this.data = x; console.log(typeof x, x) });
  }
  
  ngOnInit(): void {
    console.log("Сегодня: " + this.valueDate);
    this.update();
  }
  
}
