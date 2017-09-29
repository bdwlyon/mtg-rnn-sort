import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {SortComponent} from '../sort/sort.component';
import {SearchComponent} from '../search/search.component';
import {IndexComponent} from '../index/index.component';
import {CubeComponent} from "../cube/cube.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'sort', component: SortComponent},
  {path: 'search', component: SearchComponent},
  {path: 'cube', component: CubeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
