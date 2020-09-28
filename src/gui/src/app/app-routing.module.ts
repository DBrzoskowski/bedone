import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { TaskComponent} from './task/task.component';

const APP_ROUTES: Route[] = [
  { path: 'task', component: TaskComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
        RouterModule.forRoot(APP_ROUTES)
  ]
})
export class AppRoutingModule { }
