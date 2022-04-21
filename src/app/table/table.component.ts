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

  selectAr = [
    {
      id: 1,
      name: "ПУ 1",
    },
    {
      id:2,
      name: "ПУ 2"
    },
    {
      id: 3,
      name: "ПУ 3"
    },
    {
      id: 4,
      name: "ПУ 4"
    },
  ];

  arr = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
  ]

  dateNow = new Date();
  value = this.dateNow.toISOString().substring(0, 10);

  btn(val:number){
    this.value = new Date(this.dateNow.setDate(this.dateNow.getDate() + val)).toISOString().substring(0, 10);
  }

  meterS = "16603"
  baseUrl = "https://localhost:5001/meters";
  
  getData = this.http.get<any>(this.baseUrl + "/" + this.meterS)
  
  btnUpdate(){
    // this.getTaskDataService.getMeter(this.meterS).subscribe(x=> {console.log(x)});
    console.log(this.update());
  }

  update(){
    return this.getTaskDataService.getMeter(this.meterS)
  }
  
  ngOnInit(): void {
    console.log("Сегодня: " + this.value);
  }
  
}
