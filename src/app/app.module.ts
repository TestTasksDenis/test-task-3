import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutesModule } from './app.routes.module';
import { SharedModule } from './shared.module';

import { HotDogsService } from './shared/services/hot-dogs.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotDogsListComponent } from './home/hot-dogs-list/hot-dogs-list.component';
import { HotDogItemComponent } from './home/hot-dogs-list/hot-dog-item/hot-dog-item.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactService } from './shared/services/contact.service';
import { AboutComponent } from './about/about.component';
import { CateringComponent } from './catering/catering.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    CateringComponent,
    HomeComponent,
    HotDogsListComponent,
    HotDogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HotDogsService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
