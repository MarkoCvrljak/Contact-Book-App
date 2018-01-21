import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-contacts-edit',
    templateUrl: './contacts-edit.component.html',
})

export class ContactEditComponent{
    id: number;
    editMode = false;

    constructor(private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
            }
        );
    }

}