import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ContactsStartComponent } from './contacts/contacts-start/contacts-start.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    {path: 'contact', component: ContactsComponent, children: [
        { path: '', component: ContactsStartComponent },
        { path: ':id', component: ContactsDetailComponent },
    ] },
    {path: 'about', component: AboutComponent}
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}