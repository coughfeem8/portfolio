import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Direction } from '../../models/layout';
import { BaseMenuComponent } from '../base-menu/base-menu.component';
import { skipWhile, takeUntil } from 'rxjs';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})


export class SideMenuComponent extends BaseMenuComponent implements OnInit {
  @ViewChild('container',{read: ViewContainerRef, static: false}) container!: ViewContainerRef;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.content.pipe(
      skipWhile(p => p == null),
      takeUntil(this.onDestroy$)
    ).subscribe(
    (res) => {
      res.forEach( async (component) => {
        console.log('adding components')
        const componentInstance = await component.component();
        console.log(this.container);
        this.container.clear();
        const ref = this.container.createComponent(componentInstance);
        
      });
    }
    );
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
