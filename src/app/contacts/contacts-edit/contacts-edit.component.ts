import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ContactService } from '../contacts.service';

@Component({
    selector: 'app-contacts-edit',
    templateUrl: './contacts-edit.component.html',
})

export class ContactEditComponent{
    id: number;
    editMode = false;
    contactForm: FormGroup;

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

    onSubmit() {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']);
        if (this.editMode) {
          this.contactService.updateRecipe(this.id, this.contactForm.value);
        } else {
          this.contactService.addRecipe(this.contactForm.value);
        }
        this.onCancel();
      }

      onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    

    private initForm() {
        let Name = '';
        let Address = '';
        let Email = '';
        let Phone = '';
        let ImagePath = '';
        let Description = '';
        let Ingredients = new FormArray([]);
    
        if (this.editMode) {
          const contact = this.contactService.getSingleContact(this.id);
          Name = contact.name;
          Address = contact.address;
          Email = contact.email;
          Phone = contact.phone;
          ImagePath =contact.imagePath;
          Description = contact.description;
          
          
        }
    
        this.contactForm = new FormGroup({
          'name': new FormControl(Name, Validators.required),
          'address': new FormControl(Address, Validators.required),
          'email': new FormControl(Email, Validators.required),
          'phone': new FormControl(Phone, Validators.required),
          'imagePath': new FormControl(ImagePath, Validators.required),
          'description': new FormControl(Description, Validators.required),
          
        });
      }
    

}