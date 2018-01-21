import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ContactsStartComponent } from './contacts/contacts-start/contacts-start.component';
import { ContactEditComponent } from './contacts/contacts-edit/contacts-edit.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    {path: 'contact', component: ContactsComponent, children: [
        { path: '', component: ContactsStartComponent },
        { path: 'new', component: ContactEditComponent },
        { path: ':id', component: ContactsDetailComponent },
        { path: ':id/edit', component: ContactEditComponent }
    ] },
    {path: 'about', component: AboutComponent}
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}