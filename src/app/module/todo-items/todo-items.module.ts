import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoItemsRoutingModule } from './todo-items-routing.module';
import { ListItemsComponent } from './components/list-items/list-items.component';

@NgModule({
  declarations: [
    ListItemsComponent
  ],
  imports: [
    CommonModule,
    TodoItemsRoutingModule
  ]
})
export class TodoItemsModule { }
