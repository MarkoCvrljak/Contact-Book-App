import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contacts.service'
@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
  
})
export class ContactsListComponent implements OnInit {
  
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContact();
  }

  

}
