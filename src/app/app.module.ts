import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HotDogsService } from './shared/services/hot-dogs.service';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared.module';
import { HotDogsListComponent } from './home/hot-dogs-list/hot-dogs-list.component';
import { HotDogItemComponent } from './home/hot-dogs-list/hot-dog-item/hot-dog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotDogsListComponent,
    HotDogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    HotDogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
