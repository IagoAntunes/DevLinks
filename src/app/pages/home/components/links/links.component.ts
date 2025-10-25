import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { Link } from './models/link-model';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {

  constructor(private themeService: ThemeService) {}

  get buttonsLinks() : Link[] {
    return [
      {
        label: 'Meus aplicativos',
        link: 'https://play.google.com/store/apps/developer?id=Iago+Antunes+Ferreira&hl=pt_BR'
      },
      {
        label: 'Meu Portfólio',
        link: 'https://iagoferreira.web.app/'
      },
    ]
  }

  get currentTheme(): 'dark' | 'light' {
    return this.themeService.currentTheme;
  }
}
