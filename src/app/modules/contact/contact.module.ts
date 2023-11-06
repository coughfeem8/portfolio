import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
