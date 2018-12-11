import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'basic', component: BasicComponent },
];


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BasicComponent
  ],
  exports: [
    RouterModule
  ]
})
export class FormsModule { }
