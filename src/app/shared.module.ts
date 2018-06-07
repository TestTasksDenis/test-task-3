import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';
import { BannerImgComponent } from './shared/components/banner-img/banner-img.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BtnBlueComponent } from './shared/components/btn-blue/btn-blue.component';

@NgModule({
  declarations: [
    BannerImgComponent,
    BtnBlueComponent,
    FooterComponent,
    HeaderComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainMenuComponent,
    BtnBlueComponent
  ]
})
export class SharedModule { }
