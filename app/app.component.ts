import { Component } from 'angular2/core';
import { ContactFormComponent } from './contact-form.component'

@Component({
    selector: 'my-app',
    directives: [ ContactFormComponent ],
    template: `<div class="container-fluid">
            
            <contact-form></contact-form>
            
            </div>`
})
export class AppComponent {
    log(x) {
        console.log(x);
    }
}