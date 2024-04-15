import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { AddTaskPage } from './pages/add-task/add-task.page';
import { DetailTaskPage } from './pages/detail-task/detail-task.page';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'new', component: AddTaskPage },
  { path: "view/:id", component: DetailTaskPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
