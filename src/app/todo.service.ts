import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url = 'http://localhost:3000/list';

  constructor(private http: HttpClient) { }

  deleteID(del: any){
    return this.http.delete(this.url + "/" + del);
  }

  postWork(data){
    return this.http.post(this.url, data);
  }

  getList(){
    return this.http.get(this.url);
  }
}
