import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<'dark' | 'light'>('dark');
  public theme$: Observable<'dark' | 'light'> = this.themeSubject.asObservable();

  constructor() {
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initialTheme = savedTheme || 'dark';
    this.setThemeWithoutEmit(initialTheme);
  }

  private setThemeWithoutEmit(theme: 'dark' | 'light'): void {
    this.themeSubject.next(theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
    }
  }

  get currentTheme(): 'dark' | 'light' {
    return this.themeSubject.value;
  }

  setTheme(theme: 'dark' | 'light'): void {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    
    // Aplica o tema na classe do document
    if (theme === 'dark') {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-light');
    } else {
      document.documentElement.classList.add('theme-light');
      document.documentElement.classList.remove('theme-dark');
    }
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}
