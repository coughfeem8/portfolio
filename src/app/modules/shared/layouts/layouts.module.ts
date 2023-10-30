import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';

import { MasterLayoutComponent } from './master-layout/master-layout.component';

const components = [MasterLayoutComponent];
@NgModule({
  declarations: components,
  imports: [CoreModule],
  exports: [
    CoreModule, 
    components],
})
export class LayoutsModule {}
