import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';


const modules: any[] = [
  HttpClientModule,
  AngularSvgIconModule.forRoot(),
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  
];
@NgModule({
  declarations: [ ],
  imports: modules,
  exports: modules,
  providers: [ // used because it is required at startup 
  ]
})
/**
 * the Core module will expose all bare minimum modules for app startup..
 * here you will add global modules that ARE at startup.
 * ONLY include the module in the main module and the Shared Module. no one else will need it directly.
 */
export class CoreModule {}
