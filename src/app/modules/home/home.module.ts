import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SectionCardComponent } from './components/section-card/section-card.component';

const pages: any[] = [LandingComponent];
const components: any[] = [SectionCardComponent];

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
  declarations: [...pages, ...components],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [components],
})
export class HomeModule {}
