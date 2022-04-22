import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()


export class TaskDataService {

  constructor(private http: HttpClient) { }
   
  baseUrl = "https://localhost:5001/meters";


  //получить список всех ПУ
  getEmList(){
    return this.http.get<any>(this.baseUrl);
  }
  // получить данные по ПУ
  getData(serialNumber: string, dateTime:Date){
    return this.http.get<any>(this.baseUrl + "/" + serialNumber + "/" + dateTime);
  }


}
