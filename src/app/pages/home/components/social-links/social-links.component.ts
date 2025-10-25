import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { SocialLink } from 'src/app/pages/home/components/social-links/models/social-link.model';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {

  constructor(private themeService: ThemeService) {}

  get currentTheme(): 'dark' | 'light' {
    return this.themeService.currentTheme;
  }

  get socialLinks(): SocialLink[] {
    return [
      {
        asset: `assets/ic_github_${this.currentTheme}.svg`,
        link: 'https://github.com/IagoAntunes',
        alt: 'Github',
      },
      {
        asset: `assets/ic_linkedin_${this.currentTheme}.svg`,
        link: 'https://www.linkedin.com/in/iagoaferreira/',
        alt: 'Linkedin'
      }
    ];
  }

}
