import { Component } from '@angular/core';

interface Task{
  title: string,
  is_canceled: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Array<Task> = [
    {
      title: "Ir a la casa",
      is_canceled: false
    },
    {
      title: "tomar un descanso",
      is_canceled: false
    },
    {
      title: "estudiar el hpta angular 100",
      is_canceled: false
    }
  ];
  
  clearToDo(){
    let do_delete = confirm("estas seguro que quieres borrarlo todo")
    if(do_delete){
    this.tasks.splice(0);
   }
  }

  addTask(value: string){
    this.tasks.push(
      {
        title: value,
        is_canceled: false
      }
    );
  }

  cancelTask(idx: number){
    if (this.tasks[idx].is_canceled){
      this.tasks[idx].is_canceled = false;
    }else{
      this.tasks[idx].is_canceled = true;
    }
  }

  deleteTask(idx: number){
    let do_delete = confirm("estas seguro")
    if(do_delete){
      this.tasks.splice(idx, 1);
    }
    
  }

}
