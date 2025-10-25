import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  backgroundImage: string = '';
  private destroy$ = new Subject<void>();

  constructor(private themeService: ThemeService) {}

  get currentTheme(): 'dark' | 'light' {
    return this.themeService.currentTheme;
  }

  ngOnInit(): void {
    this.themeService.theme$
      .pipe(takeUntil(this.destroy$))
      .subscribe(theme => {
        this.updateBackgroundImage(theme);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  private updateBackgroundImage(theme: 'dark' | 'light'): void {
    this.backgroundImage = theme === 'dark' 
      ? 'url(assets/bg_dark.png)' 
      : 'url(assets/bg_light.png)';
  }

  get backgroundStyle(): { [key: string]: string } {
    return {
      'background-image': this.backgroundImage,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat'
    };
  }
}
