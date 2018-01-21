import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
  
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [
    new Contact(
      'Marko Markovic',
      'First Road 33', 'email@gotit.com', '555666',
      'https://media.licdn.com/media/AAEAAQAAAAAAAAluAAAAJDA1ZjY2ZTIxLTRmMzMtNGY1ZC04ZDkwLWJkZjc5ZTgwMzI0NA.jpg',
    'Lead Engineer'),
    new Contact(
      'Marko Markovic',
      'First Road 33', 'email@gotit.com', '555666',
      'https://media.licdn.com/media/AAEAAQAAAAAAAAluAAAAJDA1ZjY2ZTIxLTRmMzMtNGY1ZC04ZDkwLWJkZjc5ZTgwMzI0NA.jpg',
    'Lead Engineer')
  ];

  constructor() { }

  ngOnInit() {
  }

}
