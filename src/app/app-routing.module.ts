import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InputComponent } from './components/input/input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['input'])

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent, ...canActivate(redirectToHome) },
  {
    path: 'login', component: LoginComponent, ...canActivate(redirectToHome)
  },
  { path: 'input', component: InputComponent, ...canActivate(redirectToLogin) },
  { path: 'input/:id', component: InputComponent, ...canActivate(redirectToLogin) },
  {
    path: 'todoItems', loadChildren: () => import('./module/todo-items/todo-items.module')
      .then(m => m.TodoItemsModule), ...canActivate(redirectToLogin)
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [InputComponent, PagenotfoundComponent,
  RegistrationComponent, LoginComponent]
