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

  constructor(private itemService: ItemServiceService, private toastr: ToastrService) { }

  category: string[] = []
  title: string = '';
  description: string = '';
  select: string = '';

  ngOnInit(): void {
    this.category = Object.values(Category);
  }

  addItem() {
    this.itemService.addItems(
      {
        title: this.title,
        description: this.description,
        category: this.select,
        status: Status.Pending
      });
    this.toastr.success(`Item Added to the Category : ${this.select}`);
    this.title = '';
    this.description = '';
    this.select = '';
  }

}
