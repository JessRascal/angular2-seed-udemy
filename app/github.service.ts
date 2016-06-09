import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GithubUser } from './github-user';

@Injectable()
export class GithubService {
    private _githubRootUrl = "https://api.github.com";
    private _userUrl = this._githubRootUrl + "/users/";

    constructor(private _http: Http) {
    }

    getUser(user: string): Observable<GithubUser> {
        var userUrl = this._userUrl + user;

        return this._http.get(userUrl)
            .map(res => res.json());
    }

    getFollowers(user: string): Observable<GithubUser[]> {
        var followersUrl = this._userUrl + user + "/followers";
        
        return this._http.get(followersUrl)
            .map(res => res.json());
    }
}