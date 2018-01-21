import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html'
  
})
export class ContactsItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() index: number;
  
  ngOnInit() {
  }

}
