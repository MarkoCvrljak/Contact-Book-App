import { Component } from '@angular/core';
import { Contact } from '../contacts/contact.model';

import { ContactService } from '../contacts/contacts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  
})
export class HeaderComponent {
    contacts: Contact[];
    
    constructor(private contactService: ContactService){

    }

    getContacts(){
      this.contactService.contactsChanged
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
        }
      )
      this.contacts = this.contactService.getContact()
    }

    saveToLocal(){
      this.contacts = this.contactService.getContact();
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      console.log(this.contacts);
      
    }
}
