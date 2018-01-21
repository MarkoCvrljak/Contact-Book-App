import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html'
})
export class ContactsDetailComponent implements OnInit {
  id: number;
  contact: Contact;

 constructor(private route: ActivatedRoute,
  private contactsService: ContactService,
  private router: Router) {
 }

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.contact = this.contactsService.getSingleContact(this.id);
      }
    );
}

onEditRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.route})
}

onDeleteRecipe() {
  this.contactsService.deleteRecipe(this.id);
  this.router.navigate(['/recipes']);
}



}
