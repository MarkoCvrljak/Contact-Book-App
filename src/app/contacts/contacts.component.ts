import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';
import { ContactService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers: [ ContactService ]
  
})
export class ContactsComponent implements OnInit {
  selectedContact: Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactSelected
    .subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    )
  }

}
