import { Status } from './../constants/status';
import { ItemModel } from '../interfaces/item-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private sourceSubject = new Subject<ItemModel[]>();
  sourceMessage = this.sourceSubject.asObservable();

  private url = 'https://angular-todo-1fc81-default-rtdb.asia-southeast1.firebasedatabase.app/todos';

  listItem: ItemModel[] = [];

  constructor(private http: HttpClient) { }

  addItems(item: ItemModel) {
    this.http.post(`${this.url}.json`, item).subscribe(res => {
      this.getItems();
    })
  }

  getItems() {
    this.http.get(`${this.url}.json`).subscribe((data: any) => {
      this.listItem = [];
      if (data) {
        this.listItem = Object.keys(data).map((key: any) => {
          data[key].id = key;
          return data[key];
        });
      }
      this.sourceSubject.next(this.listItem);
    });
  }

  updateItems(key: any) {
    let temp = {
      status: Status.Completed
    }
    this.http.patch(`${this.url}/${key}.json`, temp).subscribe(res => {
      this.getItems();
    })
  }

  deleteItems(key: any) {
    this.http.delete(`${this.url}/${key}.json`).subscribe(res => {
      this.getItems();
    })

  }

}
