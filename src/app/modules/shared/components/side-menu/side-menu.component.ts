import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Direction } from '../../models/layout';
import { BaseMenuComponent } from '../base-menu/base-menu.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent extends BaseMenuComponent implements OnInit {
  constructor(viewContainerRef: ViewContainerRef) {
    super(viewContainerRef);
  }

  ngOnInit(): void {
    this.text += this.type[0] + '.';
  }
  private texts: string[] = ['text-start', 'text-end'];
  private rotationStyles = [
    '-rotate-90 origin-top-left',
    'rotate-90 origin-top-right',
  ];
  public text: string = '';

  setupTextStyle(): string {
    return this.type[0] == Direction.LEFT ? this.texts[0] : this.texts[1];
  }
  setupRotationStyle(): string {
    return this.type[0] == Direction.LEFT
      ? this.rotationStyles[0]
      : this.rotationStyles[1];
  }
}
