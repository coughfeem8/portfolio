import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { BaseMenuComponent } from '../base-menu/base-menu.component';
import { Direction } from '../../models/layout';

@Component({
  selector: 'app-corner-menu',
  templateUrl: './corner-menu.component.html',
  styleUrls: ['./corner-menu.component.scss'],
})
export class CornerMenuComponent extends BaseMenuComponent implements OnInit {

  private texts: string[] = ['text-start', 'text-end'];
  private corners: string[] = ['border-t-2','border-r-2','border-b-2','border-l-2'];
  public text: string ='';

  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
  }
  ngOnInit(): void {
    this.type.forEach( (dir: Direction) => {
      this.text += dir+'.';
    });
  }

  setupCornerStyle(): string[] {
    if(this.type[0]=== Direction.HI){
        return this.type[1] === Direction.LEFT? [this.corners[1],this.corners[2]]: [this.corners[2],this.corners[3]] ;
    }
    else{
      return this.type[1] === Direction.LEFT? [this.corners[0],this.corners[1]]: [this.corners[0],this.corners[3]] ;
    }
   
  }

  setupTextStyle(): string {
      return this.type[1] == Direction.LEFT? this.texts[0]: this.texts[1]
  }

}
