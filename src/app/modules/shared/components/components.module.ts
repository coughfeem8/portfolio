import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CornerMenuComponent } from './corner-menu/corner-menu.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BaseMenuComponent } from './base-menu/base-menu.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';



const components = [
  CornerMenuComponent,
  SideMenuComponent,
  BaseMenuComponent,
  DarkModeToggleComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CoreModule,
  ],
  exports: components,
})
export class ComponentsModule { }
