import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component'
import {CourseComponent} from './course/course.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'
const routes: Routes = [
  {path:'',component:StudentComponent},
  {path:'student',component:StudentComponent}
,{path:'course',component:CourseComponent}

,{path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent =[StudentComponent,CourseComponent,PagenotfoundComponent]
