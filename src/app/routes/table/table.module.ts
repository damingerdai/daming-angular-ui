import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { SharedModule } from '../../shared/shared.module';


const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'basic', component: BasicComponent },
];


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableModule { }
