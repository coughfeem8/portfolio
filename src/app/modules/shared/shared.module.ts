
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//#region modules
import { CoreModule } from '../core/core.module';
import { LayoutsModule } from './layouts/layouts.module';
import { GuardsModule } from './guards/guards.module';
import { PipesModule } from './pipes/pipes.module';
import { ComponentsModule } from './components/components.module';
//#endregion

const modules: any[]= [
  CoreModule,
  LayoutsModule,
  GuardsModule,
  PipesModule,
  ComponentsModule,
  HttpClientModule,
];

@NgModule({
  imports: modules,
  exports: [
    CoreModule,
    ComponentsModule,
  ],
  providers: [ ]
})

/**
 * the Shared module will expose all reusable assets of the application.
 * here you will add global application features that are not required at startup.
 * DO DOT include at App Module or at the Core Module.
 */
export class SharedModule { }
