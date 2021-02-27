import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  list: any;

  constructor( private todo: TodoService ){}

  delete(id: any){
    this.todo.deleteID(id).subscribe();
    this.todo.getList().subscribe((doing)=>{
      this.list = doing;
    })
  }

  postTodo(val: string){
    let obj = {
      title: val
    }    
    this.todo.postWork(obj).subscribe();
    this.todo.getList().subscribe((doing)=>{
      this.list = doing;
    })
  }
  
  ngOnInit(){
    this.todo.getList().subscribe((doing)=>{
      this.list = doing;
    })
  }
}
