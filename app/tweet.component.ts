import { Component, Input } from 'angular2/core'
import { LikeComponent } from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <img class="media-object" src="{{ data.imgUrl }}" alt="Tweet Image">
            </div>
            <div class="media-body">
                <div class="media-heading">
                    <h4 class="author">{{ data.author }}</h4>
                    <h4 class="username">{{ data.username }}</h4>
                </div>
                <div class="tweet-text">{{ data.tweetText }}</div>
                <like [totalLikes]="data.totalLikes" [hasLiked]="data.hasLiked"></like>
            </div>
        </div>
    `,
    styles: [`
        .media {
            margin: 20px;
        }
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
    `],
    directives: [ LikeComponent ]
})

export class TweetComponent {
    @Input() data;
}