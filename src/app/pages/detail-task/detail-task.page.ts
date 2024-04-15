import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalRepository } from 'src/app/core/storage/local.repository';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-detail-task-page',
  templateUrl: './detail-task.page.html',
  styleUrls: ['./detail-task.page.scss']
})
export class DetailTaskPage implements OnInit {

  taskIndex!: string | null;
  task!: Task

  constructor (
    private readonly _route: ActivatedRoute,
    private readonly localRepository: LocalRepository
  ) {}

  ngOnInit(): void {
    this.taskIndex = this._route.snapshot.paramMap.get("id");
    this.fetchData()
  }

  async fetchData() {
    let data = await this.localRepository.getUnSecure('data')
    if (data) {
      this.task = data[Number(this.taskIndex)]
    }
  }
}
