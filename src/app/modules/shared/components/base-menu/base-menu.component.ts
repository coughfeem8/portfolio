import { Component, ViewContainerRef,Input } from '@angular/core';
import { Direction } from '../../models/layout'
@Component({
  selector: 'app-base-menu',
  templateUrl: './base-menu.component.html',
  styleUrls: ['./base-menu.component.scss']
})

/** parent component that allows all child to inject dynamic
 *  content. Used for menus and ideally to change at runtime */
export class BaseMenuComponent {
  @Input() type: Direction[] = [];
  constructor(private viewContainerRef: ViewContainerRef ){
    
  }

  loadComponent(componentType: any) {
    this.viewContainerRef.createComponent(componentType);
  }
}
