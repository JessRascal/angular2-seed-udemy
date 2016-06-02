import { Component } from 'angular2/core';
import { TweetComponent } from './tweet.component'
import { TweetService } from './tweet.service'

@Component({
    selector: 'my-app',
    template: `
            <div class="container-fluid">
                <div *ngFor="#tweet of tweets">
                    <tweet [data]="tweet"></tweet>
                </div>
            </div>
            `,
    styles: [`
              .container-fluid {
                  margin: 30px;
              }  
            `],
    directives: [ TweetComponent ],
    providers: [ TweetService ]
})
export class AppComponent {
    tweets: any[];
    
    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    }
}