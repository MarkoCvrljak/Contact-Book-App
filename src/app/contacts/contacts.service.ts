import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Contact } from './contact.model';

@Injectable()

export class ContactService{
    public contactSelected = new EventEmitter<Contact>();
    
    private contacts: Contact[] = [
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

      getContact(){
          return this.contacts.slice();
      }
}