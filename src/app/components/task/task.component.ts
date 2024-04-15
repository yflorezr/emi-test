import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;
  @Input() edit: boolean = false;
  @Input() index: number = 0;
  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();

  editMode: boolean = false;
  taskTmp: Task | undefined
  editedTitle!: string;
  editedDescription!: string;
  editedDueDate!: Date;
  editedNotes!: string[];

  constructor() {}

  ngOnInit() {
    this.taskTmp = this.task
  }

  onEdit() {
    this.editedTitle = this.task.title;
    this.editedDescription = this.task.description;
    this.editedDueDate = this.task.dueDate;
    this.editedNotes = this.task.notes;
    this.editMode = true;
  }

  onSave() {
    const editedTask: Task = {
      ...this.task,
      title: this.editedTitle,
      description: this.editedDescription,
      dueDate: this.editedDueDate,
      notes: this.editedNotes
    };
    this.editTask.emit(editedTask);
    this.editMode = false;
  }

  onCancel() {
    this.editMode = false;
  }

  onDelete() {
    this.deleteTask.emit(this.task);
  }
}