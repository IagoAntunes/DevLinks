import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { ButtonComponent } from './components/button/button.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { LinksComponent } from './pages/home/components/links/links.component';
import { SocialLinksComponent } from './pages/home/components/social-links/social-links.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ButtonComponent,
    ProfileComponent,
    LinksComponent,
    SocialLinksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
