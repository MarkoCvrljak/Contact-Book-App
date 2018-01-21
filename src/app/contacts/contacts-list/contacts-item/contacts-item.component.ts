import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../contact.model';
@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html'
  
})
export class ContactsItemComponent implements OnInit {
  @Input() contact: Contact;
  @Output() contactSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.contactSelected.emit();
  }

}
