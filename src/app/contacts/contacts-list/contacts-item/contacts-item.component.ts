import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../contact.model';
import { ContactService } from '../../contacts.service';
@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html'
  
})
export class ContactsItemComponent implements OnInit {
  @Input() contact: Contact;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  onSelected(){
    this.contactService.contactSelected.emit(this.contact);
  }

}
