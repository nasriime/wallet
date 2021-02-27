import { Component, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


@Component({
    selector : 'ng-app',
    template : `<div>
                    <h2>New</h2>
                </div>`
})
export class designComponent {

 
}

@NgModule({
    imports : [
        RouterModule.forChild([
            {
                path : "",
                component : designComponent
            }
        ])
    ],
    declarations : [designComponent]
})
export class DesignModule {}