import { Component } from 'angular2/core';

@Component({
    selector: 'home-screen',
    template: `
        <h2>Home Page</h2>
        <ul>
            <li *ngFor="#post of blogPosts">
            <a href="">
                {{ post }}
            </a>
            </li>
        </ul>
    `
})

export class HomeComponent {
    blogPosts = ["2016/1", "2016/2", "2016/3"];
}
