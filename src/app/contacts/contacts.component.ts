import { Component, OnInit } from '@angular/core';

import { ContactService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers: [ ContactService ]
  
})
export class ContactsComponent implements OnInit {
  
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
   
  }

}
