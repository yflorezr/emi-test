import { Injectable } from '@angular/core';
import { LocalRepository } from 'src/app/core/storage/local.repository';
import { Task } from 'src/app/models/task.model';
import { EventService } from '../event-service/event.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private readonly localRepository: LocalRepository,
    private readonly eventService: EventService
  ) {}

  public async addItemToList(item: Task, data: Array<Task>) {
    data.push(item)
    await this.localRepository.setUnSecure('data', data)
    this.eventService.emit()
  }

  public async deleteItemToList(index: number, data: Array<Task>) {
    if (data.length > 0) {
      data = data.splice(index, 1);
    }
    await this.localRepository.setUnSecure('data', data)
    this.eventService.emit()
  }
}
