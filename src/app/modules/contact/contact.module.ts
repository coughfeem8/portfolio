import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Route[] = [
  {
    path: '',
    component: LandingComponent,
    
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing',
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
