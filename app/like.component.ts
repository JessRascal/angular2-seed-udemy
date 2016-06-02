import { Component, Input } from 'angular2/core'

@Component({
    selector: 'like',
    template: `
        <div class="like-component">
            <i class="glyphicon glyphicon-heart like-icon"
            [class.has-liked] = "hasLiked"
            (click)="onClick()"
            ></i>
            <span>{{ totalLikes }}</span>
        </div>
    `,
    styles: [`
        .like-component {
            font-size: 20px;
            color: #666;
        }
        .like-icon {
            cursor: pointer;
        }
        .has-liked {
            color: deeppink;
        }
    `]
})

export class LikeComponent {
    @Input() hasLiked = false;
    @Input() totalLikes = 0;
    
    onClick() {
        this.hasLiked = !this.hasLiked;
        this.totalLikes += this.hasLiked ? 1 : -1;
    }
}