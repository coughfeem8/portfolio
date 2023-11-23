import { NgModule } from '@angular/core';
import { DarkModeService } from './dark-mode.service';
import { ResponsiveService } from './responsive.service'


@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    DarkModeService,
    ResponsiveService,
  ]
})
export class ServiceModule { }
