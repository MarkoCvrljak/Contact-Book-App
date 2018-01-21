import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts/contacts-detail/contacts-detail.component';
import { ContactsItemComponent } from './contacts/contacts-list/contacts-item/contacts-item.component';
import { AboutComponent } from './about/about.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ContactService } from './contacts/contacts.service';
import { ContactsStartComponent } from './contacts/contacts-start/contacts-start.component';
import { ContactEditComponent } from './contacts/contacts-edit/contacts-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsItemComponent,
    AboutComponent,
    DropdownDirective,
    ContactsStartComponent,
    ContactEditComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
