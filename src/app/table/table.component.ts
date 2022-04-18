import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  selectAr = [
    {
      id: 1,
      name: "ПУ 1"
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

  dateNow = new Date().toISOString().substring(0, 10);

  ngOnInit(): void {
    console.log("Сегодня: " + this.dateNow)
  }

}
