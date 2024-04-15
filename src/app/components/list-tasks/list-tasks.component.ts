import { Component, OnInit } from '@angular/core';
import { LocalRepository } from 'src/app/core/storage/local.repository';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data-service/data.service';
import { TaskService } from 'src/app/services/data-service/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  tasks: Task[] = [];
  currentPage: number = 1;
  tasksPerPage: number = 5;
  pages = 1

  constructor(
    private readonly localRepository: LocalRepository,
    private readonly dataService: DataService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  async fetchTasks() {
    let data = await this.localRepository.getUnSecure('data')
    if (data) {
      this.tasks = data
    } else {
      data = await this.taskService.getTasks()
      this.tasks = data.tasks
      this.localRepository.setUnSecure('status', data.states)
    }
    this.pages = Math.ceil(this.tasks.length / this.tasksPerPage)
    this.localRepository.setUnSecure('data', this.tasks)
  }

  onDeleteTask(index: number) {
    this.dataService.deleteItemToList(index, this.tasks)
  }

  onEditTask(task: Task) {
    // Edit task logic here
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  markAsCompleted(task: Task) {
    // Mark task as completed logic here
  }
}
