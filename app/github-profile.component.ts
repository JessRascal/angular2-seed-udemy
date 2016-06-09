import { Component } from 'angular2/core';
import { GithubService } from './github.service';
import { Observable } from 'rxjs/Observable';
import { HTTP_PROVIDERS } from 'angular2/http';
import { OnInit } from 'angular2/core';
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'github-profile',
    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h3>@{{ user.login }}</h3>
        <img class="avatar" src="{{ user.avatar_url }}">
        <hr>
        <h4>Followers</h4>
        <div class="media" *ngFor="#follower of followers">
            <div class="media-left">
                <a href="{{ follower.html_url }}" target="_blank">
                <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="{{ follower.login }} avatar">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>
    `,
    styles: [`
        .avatar {
            width: 100;
            height: 100;
            border-radius: 100%;
        }
    `],
    providers: [ GithubService, HTTP_PROVIDERS ]
})

export class GithubProfileComponent implements OnInit {
    username = "jessrascal";
    user = {};
    followers = [];
    isLoading = true;

    constructor(private _githubService: GithubService) {

    }

    ngOnInit() {
        var userData = this._githubService.getUser(this.username);
        var followerData = this._githubService.getFollowers(this.username)
        Observable
            .forkJoin(userData, followerData)
            .subscribe(response => {
                this.user = response[0],
                this.followers = response[1]
            },
            null,
            () => { this.isLoading = false; });
    }
}