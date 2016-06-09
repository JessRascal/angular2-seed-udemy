import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { Observable } from 'rxjs/Rx';
import { GithubProfileComponent } from './github-profile.component';

@Component({
    selector: 'my-app',
    template: `
        <github-profile></github-profile>
        `,
    directives: [ GithubProfileComponent ]
})
export class AppComponent {
    constructor() {
        
    }
}
