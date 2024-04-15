import { Injectable } from '@angular/core';
import { LocalRepository } from 'src/app/core/storage/local.repository';
import { ItemModel } from 'src/app/models/item.model';
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

  public async setMarkedItemToList(item: ItemModel, data: Array<Task>) {
    // if (data.length > 0) {
    //   const groupFind: Array<Task> = data.filter(element => (element.group === item.group))
    //   if (groupFind.length === 1) {
    //     const itemsFind: Array<ItemModel> = groupFind[0].items.filter(element => (element.name === item.name))
    //     if (itemsFind.length === 1) {
    //       itemsFind[0] = item
    //     }
    //   }
    // }
    // await this.localRepository.setUnSecure('data', data)
    // this.eventService.emit()
  }

  public async deleteAllGroupToList(group: string, data: Array<Task>) {
    // if (data.length > 0) {
    //   data = data.filter(element => (element.group !== group))
    // }
    await this.localRepository.setUnSecure('data', data)
    this.eventService.emit()
  }
}
