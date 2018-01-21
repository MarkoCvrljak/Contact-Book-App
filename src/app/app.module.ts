import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ContactsItemComponent } from './contacts/contacts-list/contacts-item/contacts-item.component';
import { AboutComponent } from './about/about.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ContactService } from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsItemComponent,
    AboutComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
