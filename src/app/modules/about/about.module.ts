import { NgModule } from '@angular/core';
import { LandingComponent } from './pages/landing/landing.component';
import { Route, RouterModule } from '@angular/router';
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

const modules: any = [
  SharedModule,
  RouterModule.forChild(routes),
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: modules,

})
export class AboutModule { }
