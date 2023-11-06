import { Component } from '@angular/core';
import { Direction } from '../../models/layout';
import { of } from 'rxjs';

const componentsConfig = [
  {
    component: () =>
      import('src/app/modules/shared/components/dark-mode-toggle/dark-mode-toggle.component'),
  },
];

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss'],
})
export class MasterLayoutComponent {
  public topLeft: Direction[] = [Direction.HI, Direction.LEFT];
  public topRight: Direction[] = [Direction.HI, Direction.RIGHT];
  public bottomLeft: Direction[] = [Direction.LOW, Direction.LEFT];
  public bottomRight: Direction[] = [Direction.LOW, Direction.RIGHT];
  public left: Direction[] = [Direction.LEFT];
  public right: Direction[] = [Direction.RIGHT];
}
