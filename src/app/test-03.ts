/**
 * Update the following components to meet the requirements : 
 * 
 * * Bind [email] property to input[name="email"]
 * * Bind [password] property to input[name="password"]
 * 
 * Without using angular forms, validate both fields so that :
 * * email is in correct format ( ex: ends with @a.com)
 * * password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length
 * * The fields should be validated when trying to submit the form
 * * Prevent the form from doing an actual form submit and instead, after validation pass, turn on the [logged_in] flag
 * 
 * You can add error messages below each field that shows if the field is not valid
 */
import { Component, NgModule  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector : 'ng-app',
    template : `<form #userForm="ngForm">
                    <h2>Login</h2>
                    <br/>
                        <input type="email" name="email" #email="ngModel"
                            required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" 
                            [(ngModel)]="userForm.email" >
                        <div *ngIf="email.errors && (email.invalid || email.touched)">
                            <small class="text-danger" *ngIf="email.errors.required">Email is required</small>
                            <small class="text-danger" *ngIf="email.errors.pattern">Please provide a valid email address</small>
                        </div>
                        <br/>
                        <input type="text" name="password" #password="ngModel"
                            required pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}"
                            [(ngModel)]="userForm.password" >
                        <div *ngIf="password.errors && (password.invalid || password.touched)">
                            <small class="text-danger" *ngIf="password.errors.required">Password is required</small>
                            <small class="text-danger" *ngIf="password.errors.pattern">password contains at least one special character, one upper case character, one lower case character, one number and a minium of 8 characters in length</small>
                        </div>
                        <br/>
                        <button type="submit" [disabled]='userForm.invalid'>Submit</button>
                    <br/><br/>
                    <div *ngIf="logged_in">Logged In!</div>
                </form>`
})
export class Test03Component {

    email:string = "";
    password:string = "";

    logged_in = false;
}

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test03Component
            }
        ])
    ],
    declarations : [Test03Component]
})
export class Test03Module {};