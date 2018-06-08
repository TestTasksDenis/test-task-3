import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { CateringComponent } from './catering/catering.component';

const AppRouter: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'contacts', component: ContactsComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'catering', component: CateringComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
