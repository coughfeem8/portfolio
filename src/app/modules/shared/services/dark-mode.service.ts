import { Injectable, OnInit } from '@angular/core';
import { Theme } from '../models/layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private KEY = 'theme';

  private _currentTheme: BehaviorSubject<Theme | null> =
    new BehaviorSubject<Theme | null>(null);

  get curentThemeSnapshot(): Theme | null {
    return this._currentTheme.value;
  }

  get currentTheme$(): Observable<Theme | null> {
    return this._currentTheme.asObservable();
  }

  constructor() {
    const theme = this.get();
    if (theme !== null) {
      this.setupTheme(theme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      console.log(prefersDark);
      prefersDark['matches']
        ? this.setupTheme(Theme.DARK)
        : this.setupTheme(Theme.LIGHT);
    }
  }

  private set(theme: Theme): boolean {
    localStorage.setItem(this.KEY, theme);
    this._currentTheme.next(this.get());
    return true;
  }

  private get(): Theme | null {
    return localStorage.getItem(this.KEY) as Theme;
  }

  private clear() {
    localStorage.removeItem(this.KEY);
  }
  setupTheme(theme: Theme) {
    this.set(theme);
    if (
      this.curentThemeSnapshot !== null &&
      this.curentThemeSnapshot === 'dark'
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
