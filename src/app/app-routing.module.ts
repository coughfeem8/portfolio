import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './modules/shared/layouts/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./modules/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then(
            (m) => m.AboutModule
          ),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('./modules/statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
