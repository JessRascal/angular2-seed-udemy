import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'home-screen',
    template: `
        <h2>Home Page</h2>
        <ul>
            <li *ngFor="#post of blogPosts">
            <a [routerLink]="['Blog Post', { year: post.year, month: post.month }]">
                {{ post.year }}/{{ post.month }}
            </a>
            </li>
        </ul>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})

export class HomeComponent {
    blogPosts = [
        {
            year: "2016",
            month: "1"
        },
        {
            year: "2016",
            month: "2"
        },
        {
            year: "2016",
            month: "3"
        }
        ]
}