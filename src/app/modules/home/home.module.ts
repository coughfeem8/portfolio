import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
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
    LandingComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
