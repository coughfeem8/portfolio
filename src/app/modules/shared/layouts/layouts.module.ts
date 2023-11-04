import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';

import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { ComponentsModule } from '../components/components.module';

const components = [MasterLayoutComponent];
@NgModule({
  declarations: components,
  imports: [CoreModule,ComponentsModule],
  exports: [
    CoreModule, 
    components
  ],
})
export class LayoutsModule {}
