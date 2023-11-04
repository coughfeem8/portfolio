import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CornerMenuComponent } from './corner-menu/corner-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';



const components = [
  CornerMenuComponent,
  SideMenuComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CoreModule,
  ],
  exports: components,
})
export class ComponentsModule { }
