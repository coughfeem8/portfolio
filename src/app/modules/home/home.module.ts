import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';


const routes: Route[] = [
  {
      path: '',
      component: HomeComponent,
  }, 
];
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
