import { ItemModel } from './../../../../interfaces/item-model';
import { ItemServiceService } from './../../../../services/item-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private itemService: ItemServiceService) { }

  items: ItemModel[] = []
  category: any = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe((parms) => {
      this.category = parms.get('category');
      this.itemService.getItems();
      this.itemService.sourceMessage.subscribe((res) => {
        this.items = res.filter((data) => data.category === this.category);
      })
    })
  }

  updateItems(id: any) {
    this.itemService.updateItems(id);
  }

  deleteItems(id: any) {
    this.itemService.deleteItems(id);
  }

  stylePending = {
    marginTop: '10px',
    backgroundColor: 'rgb(255, 46, 88)',
    borderRadius: '15px',
    padding: '10px',
  }

  styleCompleted = {
    marginTop: '10px',
    backgroundColor: 'rgb(27, 196, 39)',
    borderRadius: '15px',
    padding: '10px',
  }

}
