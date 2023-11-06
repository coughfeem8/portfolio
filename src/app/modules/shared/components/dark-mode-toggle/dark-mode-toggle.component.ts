import { Component, OnDestroy, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { Theme } from '../../models/layout';
import { Subject, skipWhile, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent implements OnInit, OnDestroy {
  private onDestroy$: Subject<boolean> = new Subject();
  private icons: any = { dark: 'moon.svg', light: 'sun.svg' };
  public state!: Theme| null;
  public currentIncon = '';
  constructor(private service: DarkModeService) {}
  
  ngOnInit(): void {
    this.service.currentTheme$.pipe(
      skipWhile(p => p == null),
      takeUntil(this.onDestroy$)
    ).subscribe(
    (res) => {
      this.state = res;
      this.updateIcon();
    }
    );
    if (this.state !== null) {
      this.updateIcon();
    }
  }
  private updateIcon(){
    if(this.state)
    this.currentIncon = environment.iconPath + this.icons[this.state];
  }

  toggle() {
    if (this.state === Theme.DARK){
      this.service.setupTheme(Theme.LIGHT);
    }
    else{
      this.service.setupTheme(Theme.DARK);
    }
  }

  ngOnDestroy(): void {
    console.log('destrying')
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }


  
}
