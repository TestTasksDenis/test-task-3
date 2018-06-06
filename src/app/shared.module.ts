import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { BannerImgComponent } from './shared/components/banner-img/banner-img.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerImgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
