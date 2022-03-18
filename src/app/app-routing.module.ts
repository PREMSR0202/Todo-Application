import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InputComponent } from './components/input/input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputComponent },
  { path: 'input/:id', component: InputComponent },
  {
    path: 'todoItems', loadChildren: () => import('./module/todo-items/todo-items.module')
      .then(m => m.TodoItemsModule)
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [InputComponent, PagenotfoundComponent]
