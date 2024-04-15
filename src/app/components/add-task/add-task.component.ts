import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalRepository } from 'src/app/core/storage/local.repository';
import { groupModel } from 'src/app/models/group.model';
import { States } from 'src/app/models/states.model';
import { Task } from 'src/app/models/task.model';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  
  public groups: Array<groupModel> = new Array<groupModel>()
  public task: Task = new Task();
  public states: States[] = [] 
  newTaskForm!: FormGroup
  notesFormArray!: FormArray;

  constructor(
    private readonly localRepository: LocalRepository,
    private readonly dataService: DataService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router
  ) {}

  async ngOnInit() {
    const data = await this.localRepository.getUnSecure('status')
    this.states = data
    console.log(this.states)
  }

  addNewNote() {
    const point: FormGroup = this._fb.group({
      text: [""],
    });
    this.notesFormArray.push(point);
  }

  private async _buildForm() {
    this.newTaskForm = this._fb.group({
      notes: this._fb.array([], [Validators.required])
    })
    this.notesFormArray = this.newTaskForm.get("notes") as FormArray;
  }

  public async addNewItem() {
    let data = await this.localRepository.getUnSecure('data')
    if (!data) {
      data = new Array<Task>()
    }
    this.task.stateHistory.push({
      date: new Date(),
      state: this.task.state
    })
    this.dataService.addItemToList(this.task, data)
    this._router.navigate(['/'])
  }
}
