import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()


export class TaskDataService {

  constructor(private http: HttpClient) { }

  getData(){
    //return this.http.get('http://localhost:48998')
    return this.http.get("http://localhost:5000/weatherforecast",{headers:new HttpHeaders("application/json; charset=utf-8; Access-Control-Allow-Origin")}).subscribe();
  }


}
