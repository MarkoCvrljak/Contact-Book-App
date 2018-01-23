import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contacts.service'


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
  
})
export class ContactsListComponent implements OnInit {
  public productsPerPage = 4;
  public selectedPage = 1;
  

  constructor(private contactService: ContactService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
     
  }

  get contacts(){
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.contactService.getContact()
    .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePageSize(newSize: number){
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  changePage(newPage: number){
    this.selectedPage = newPage;
  }

    get pageNumbers(): number[] {
    return Array(Math.ceil(this.contactService
    .getContact().length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1);
  }

  onNewContact(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
