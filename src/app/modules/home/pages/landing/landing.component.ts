import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, skipWhile, takeUntil } from 'rxjs';
import { Size } from 'src/app/modules/shared/models/layout';
import { ResponsiveService } from 'src/app/modules/shared/services/responsive.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private responsive: ResponsiveService) {}

  public isPhone: boolean= true;
  public onDestroy$: Subject<boolean> = new Subject();
  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
  ngOnInit(): void {
    this.responsive.deviceInfo$
    .pipe(
      skipWhile((p) => p.size === null),
      takeUntil(this.onDestroy$),
    )
    .subscribe((res) => {
      this.isPhone = res.size === Size.PHONE;
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
