import { Component, OnDestroy, OnChanges, ViewChild, ViewContainerRef,Input, OnInit } from '@angular/core';
import { Direction } from '../../models/layout'
import { Observable, Subject, skipWhile, takeUntil } from 'rxjs';
@Component({
  selector: 'app-base-menu',
  styleUrls: ['./base-menu.component.scss'],
  templateUrl: './base-menu.component.html'   
})

/** parent component that allows all child to inject dynamic
 *  content. Used for menus. ideally to change at runtime */
export class BaseMenuComponent implements OnDestroy {
  @Input() type: Direction[] = [];
  @Input() content: Observable<any[]> = new Observable<any[]>();
  public onDestroy$: Subject<boolean> = new Subject();

  constructor(){ }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}
