/**
 * Update the following components to meet the requirements : 
 * * Bind [field] of [textfield] component to its text input
 * * Pass value of [field] from [textfield] component to [title] property of component [ng-app]
 */
import { Component, NgModule, Output, EventEmitter  } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
    selector : 'textfield',
    template : '<input type="text" (input)="changeInputValue($event.target.value)" [value]="field" />'
})
export class TextField {
    field = "";

    @Output() inputValue = new EventEmitter<string>();

    changeInputValue(value: string) {
        this.inputValue.emit(value);
      }
}

@Component({
    selector : 'child-component',
    template : `<h2>Title:<h2><br/><textfield (inputValue)="liftValueUp($event)"></textfield>`
})
export class ChildComponent {
    @Output() liftedValue = new EventEmitter<string>();

    liftValueUp(value: string) {
        this.liftedValue.emit(value);
      }
}


@Component({
    selector : 'ng-app',
    template : `<div>
                    <child-component (liftedValue)="changeTitle($event)"></child-component> <br/>
                    Title is {{title}}
                </div>`
})
export class Test02Component {

    title:string = "";

    changeTitle(value: string) {
        this.title = value;
    }
}

@NgModule({
    imports : [
        CommonModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test02Component
            }
        ])
    ],
    declarations : [Test02Component,ChildComponent,TextField]
})
export class Test02Module {};