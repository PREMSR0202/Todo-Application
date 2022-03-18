import { ActivatedRoute } from '@angular/router';
import { ItemModel } from './../../interfaces/item-model';
import { Status } from './../../constants/status';
import { Category } from './../../constants/category';
import { ItemServiceService } from './../../services/item-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private itemService: ItemServiceService, private toastr: ToastrService, private route: ActivatedRoute) { }

  id: any = ''
  todoItems: ItemModel[] = [];

  category: string[] = []
  status: string = Status.Pending;

  temp: ItemModel = {
    id: '',
    title: '',
    category: '',
    description: '',
    status: this.status,
    date: new Date()
  }

  ngOnInit(): void {
    this.category = Object.values(Category);
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.itemService.getItems();
      this.itemService.sourceMessage.subscribe(data => {
        this.temp = data.find((data) => data.id == this.id) || this.temp
      })
    })
  }

  addItem() {
    if (!this.temp.id) {
      this.itemService.addItems(this.temp);
      this.toastr.success(`Item Added to the Category : ${this.temp.category}`);
    } else {
      this.itemService.updateTodo(this.temp);
      this.toastr.success(`Item Updated to the Category : ${this.temp.category}`);
    }
    this.temp.title = '';
    this.temp.description = '';
    this.temp.category = '';
  }

  filter() {
    const i = this.todoItems.filter(data => {
      data.id === this.id
    })
    console.log(i);
  }

}
