import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Contact } from './contact.model';

@Injectable()

export class ContactService{
    contactsChanged = new Subject<Contact[]>();

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
        'Head Staff'),
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

      getContact(){
          return this.contacts.slice();
      }

      getSingleContact(index: number) {
        return this.contacts[index];
      }

      updateContact(index: number, newFormValues: Contact){
        this.contacts[index] = newFormValues;
        this.contactsChanged.next(this.contacts.slice());
      }

      addContact(formValues: Contact){
        this.contacts.push(formValues);
        this.contactsChanged.next(this.contacts.slice());
      }

      deleteRecipe(index: number) {
        this.contacts.splice(index, 1);
        this.contactsChanged.next(this.contacts.slice());
      }

}