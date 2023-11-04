import { Component,ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-corner-menu',
  templateUrl: './corner-menu.component.html',
  styleUrls: ['./corner-menu.component.scss']
})
export class CornerMenuComponent {

  constructor( private viewContainerRef: ViewContainerRef ){
    
  }

  loadComponent(componentType: any) {
    this.viewContainerRef.createComponent(componentType);
  }
  

}

