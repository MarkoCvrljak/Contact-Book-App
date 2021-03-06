import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ContactService } from '../contacts.service';

@Component({
    selector: 'app-contacts-edit',
    templateUrl: './contacts-edit.component.html',
    styleUrls: ['./contact-edit.component.css']
})

export class ContactEditComponent{
    id: number;
    editMode = false;
    contactForm: FormGroup;
    public errorMessage:any = null;

    constructor(private route: ActivatedRoute,
        private contactService: ContactService,
        private router: Router) {
}

    ngOnInit(){
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initForm();
            }
        );
    }

    public showErrorIfNotANumber(event:any){
        if(event.charCode>=48 && event.charCode<=57){
            this.errorMessage = null;
        }
        else{
            this.errorMessage = 'use numbers in phone field!';
        }
        }

    onSubmit() {
        // const newContact = new Contact(
        //   this.contactForm.value['name'],
        //   this.contactForm.value['description'],
        //   this.contactForm.value['imagePath'],
        //   this.contactForm.value['ingredients']);
        if (this.editMode) {
          this.contactService.updateContact(this.id, this.contactForm.value);
        } else {
          this.contactService.addContact(this.contactForm.value);
        }
        this.onCancel();
        this.router.navigate(['/contact']);
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }
    

    private initForm() {
        let Name = '';
        let Address = '';
        let Email = '';
        let Phone = '';
        let City = '';
        let State = '';
        
    
        if (this.editMode) {
          const contact = this.contactService.getSingleContact(this.id);
          Name = contact.name;
          Address = contact.address;
          Email = contact.email;
          Phone = contact.phone;
          City = contact.city;
          State = contact.state;
          
          
        }
    
        this.contactForm = new FormGroup({
          'name': new FormControl(Name, Validators.required),
          'address': new FormControl(Address, Validators.required),
          'email': new FormControl(Email, [Validators.required,
            Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )]),
          'phone': new FormControl(Phone, Validators.required),
          'city': new FormControl(City, Validators.required),
          'state': new FormControl(State, Validators.required),
          
        });
    }
    

}