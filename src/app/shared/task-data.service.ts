import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()


export class TaskDataService {

  constructor(private http: HttpClient) { }
  
  

  getSerialNumberList(){
    return this.http.get(this.baseUrl);
  }
  
  baseUrl = "https://localhost:5001/meters";
  
  getMeter(serialNumber: string){
    return this.http.get<any>(this.baseUrl + "/" + serialNumber);
  }

}
