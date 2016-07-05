import { provideRouter, RouterConfig } from '@angular/router';

import { AppComponent } from './app';
import { TodoListComponent } from './app/todo-list'

export const APP_ROUTES: RouterConfig = [
  { path: '', component: AppComponent, terminal: true },
  { path: 'todo-list', component: TodoListComponent }
  //TODO Add a todo-detail component
];

export const APP_ROUTER_PROVIDER = provideRouter(APP_ROUTES);
