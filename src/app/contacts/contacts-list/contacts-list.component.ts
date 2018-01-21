import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
  
})
export class ContactsListComponent implements OnInit {
  @Output() contactWasSelected = new EventEmitter<Contact>();
  contacts: Contact[] = [
    new Contact(
      'Marko Markovic',
      'First Road 33', 'email@gotit.com', '555666',
      'https://media.licdn.com/media/AAEAAQAAAAAAAAluAAAAJDA1ZjY2ZTIxLTRmMzMtNGY1ZC04ZDkwLWJkZjc5ZTgwMzI0NA.jpg',
    'Lead Engineer'),
    new Contact(
      'Ivan Ivanov',
      'Road 66', 'email@gotit.com', '333444',
      'https://media.licdn.com/media/AAIA_wDGAAAAAQAAAAAAAAykAAAAJDY1NzQ4MjBhLWVmNTctNGFmMy04MzU3LWY2MTlkMWE0NGZhNg.jpg',
    'Head Staff')
  ];

  constructor() { }

  ngOnInit() {
  }

  onContactSelected(contact: Contact){
    this.contactWasSelected.emit(contact);
  }

}
