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

  dateNow = new Date();
  valueDate = this.dateNow.toISOString().substring(0, 10);
  data:any[] = [];
  emList:any[] = [];
  serialNumber: string = "59366";
  dateTime:Date= new Date(2022, 4, 11);

  btn(val:number){
    this.valueDate = new Date(this.dateNow.setDate(this.dateNow.getDate() + val)).toISOString().substring(0, 10);
  }

  btnUpdate(){
    this.getTaskDataService.getData(this.serialNumber,this.dateTime).subscribe(x=> { this.data = x; console.log(typeof x, x) });

  }

  update(){
    this.getTaskDataService.getData(this.serialNumber,this.dateTime).subscribe(x=> { this.data = x; console.log(typeof x, x) });
    this.getTaskDataService.getEmList().subscribe(x=> { this.emList = x});
  }

  ngOnInit(): void {
    console.log("Сегодня: " + this.valueDate);
    this.update();
  }
  
}
