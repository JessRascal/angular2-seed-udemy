import { Component } from 'angular2/core'
import { LikeComponent } from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <img class="media-object" src="http://lorempixel.com/100/100/people?1" alt="Tweet Image">
            </div>
            <div class="media-body">
                <div class="media-heading">
                    <h4 class="author">Jess Rascal</h4>
                    <h4 class="username">@JessRascal</h4>
                </div>
                <div class="tweet-text">This is just a test tweet so don't even look at it.</div>
                <like></like>
            </div>
        </div>
    `,
    styles: [`
        .media-object {
            border-radius: 5px;
        }
        .media-body {
            color: #666;
        }
        .username {
            color: #ccc;
            font-size: 95%;
        }
        .author, .username {
            display: inline-block;
        }
    `]
})

export class TweetComponent {
    
}