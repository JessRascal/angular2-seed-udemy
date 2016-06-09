import { Component } from 'angular2/core';
import { GithubService } from './github.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import { OnInit } from 'angular2/core';

@Component({
    selector: 'github-profile',
    template: `
        <h3>@{{ user.login }}</h3>
        <img src="{{ user.avatar_url }}">
    `,
    providers: [ GithubService, HTTP_PROVIDERS ]
})

export class GithubProfileComponent implements OnInit {
    username = "jessrascal";
    user = {};

    constructor(private _githubService: GithubService) {

    }

    ngOnInit() {
        this._githubService.getUser(this.username)
            .subscribe(user => this.user = user);
    }
}