import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contacts.service'


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
  
})
export class ContactsListComponent implements OnInit {
  
  contacts: Contact[];

  constructor(private contactService: ContactService,
  private router: Router,
private route: ActivatedRoute) { }

  ngOnInit() {
    this.contacts = this.contactService.getContact();
  }

  onNewContact(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
