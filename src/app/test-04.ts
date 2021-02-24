/**
 * Add 2 input forms in the following component for first name and last name. Once both forms are filled out by the user, and user has clicked out of the fields, then beside it a username should be automatically generated which should be in the following format: [firstname]_[lastname]_[random integer]
 * First name and last name should be lowercased, and then a random integer between 1 and 9 should be added to the end
 * For example: if the inputs are "John" and "DOE" the generated username could be "john_doe_4" or "john_doe_2"
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `
                <h2>Enter your first and last name</h2>
                <input type='text' name='firstname' (input)='generateUsername()' [(ngModel)]='firstname' /><br/>
                <input type='text' name='lastname' (input)='generateUsername()' [(ngModel)]='lastname' /><br/>
                <p *ngIf='firstname && lastname' >{{username}}</p>
                <div>
                </div>
                `,
    styles : []
})
export class UserNameComponent {
    firstname:string = "2";
    lastname:string = "3";
    random_integer:number = Math.floor(Math.random() * 8) + 1;
    username = this.generateUsername();

    generateUsername(){
        if(this.firstname && this.lastname){
            this.username = `${this.firstname}_${this.lastname}_${this.random_integer}`;
        }
        return this.username
    }

}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : UserNameComponent
            }
        ])
    ],
    declarations : [UserNameComponent]
})
export class UserNameModule {};