import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../shared/task-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [TaskDataService]
})
export class TableComponent implements OnInit {

  constructor(
    private getTaskDataService:TaskDataService
  ) { }

  d = new Date();
  value = this.d.toISOString().substring(0, 10);

  selectAr = [
    {
      id: 1,
      name: "ПУ 1",
      A1: new Array(48),
      A2: new Array(48),
      R1: new Array(48),
      R2: new Array(48)
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
  
  btn(val:number){
    this.value =new Date(this.d.setDate(this.d.getDate() + val)).toISOString().substring(0, 10);
  }

  



  ngOnInit(): void {
    console.log("Сегодня: " + this.value);
    console.log(this.getTaskDataService.getData())
  }

}
