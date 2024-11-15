/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';


@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>Loan Details</h2>
                    <input type='number' [(ngModel)]='loan_amount' min='0' />
                    <b>Monthly Payment:</b> {{loan_amount ? monthly_payment : 'N/A'}} <br/>
                    <b>Late Payment Fee : {{loan_amount ? late_payment  : 'N/A'}}</b> <br/>
                </div>`
})
export class Test01Component {

    loan_amount:number = 1000;
    monthly_payment:number = (this.loan_amount * 2)/100;
    late_payment = (this.monthly_payment * 2)/100;;
}

@NgModule({
    imports : [
        FormsModule,
        RouterModule.forChild([
            {
                path : "",
                component : Test01Component
            }
        ])
    ],
    declarations : [Test01Component]
})
export class Test01Module {}