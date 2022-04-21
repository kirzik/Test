import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()


export class TaskDataService {

  constructor(private http: HttpClient) { }
   
  baseUrl = "https://localhost:5001/meters";


  getSerialNumberList(){
    return this.http.get<any>(this.baseUrl);
  }
  
 
  getMeter(serialNumber: string){
    return this.http.get<any>(this.baseUrl + "/" + serialNumber);
  }

}
