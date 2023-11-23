import { Component, OnInit } from '@angular/core';
import { Direction, Size, Orientation } from '../../models/layout';
import { of, skipWhile } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';
const componentsConfig = [
  {
    component: () =>
      import(
        'src/app/modules/shared/components/dark-mode-toggle/dark-mode-toggle.component'
      ),
  },
];

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss'],
})
export class MasterLayoutComponent implements OnInit {
  constructor(private responsive: ResponsiveService) {}

  public isPhone: boolean = false;
  public isPortrait: boolean = false;

  public topLeft: Direction[] = [Direction.HI, Direction.LEFT];
  public topRight: Direction[] = [Direction.HI, Direction.RIGHT];
  public bottomLeft: Direction[] = [Direction.LOW, Direction.LEFT];
  public bottomRight: Direction[] = [Direction.LOW, Direction.RIGHT];
  public left: Direction[] = [Direction.LEFT];
  public right: Direction[] = [Direction.RIGHT];
  public topRightContent = of(componentsConfig);

  ngOnInit(): void {
    this.responsive.deviceInfo$
      .pipe(
        skipWhile((p) => p.size === null),
        //takeUntil(this.onDestroy$),
      )
      .subscribe((res) => {
        this.isPhone = res.size === Size.PHONE;
        this.isPortrait = res.orientation === Orientation.PORTRAIT;
        this.setupLayout();
      });
  }

  public setupLayout(): string {
    return this.isPhone ? 'mobile' : 'desktop';
  }
}
