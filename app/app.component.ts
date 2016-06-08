///<reference path="../typings/index.d.ts"/>

import { Component } from 'angular2/core';
import { PasswordFormComponent } from './password-form.component'

@Component({
    selector: 'my-app',
    directives: [ PasswordFormComponent ],
    template: `
        <password-form></password-form>
    `
})
export class AppComponent {
}