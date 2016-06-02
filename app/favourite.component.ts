import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component({
    selector: 'star',
    templateUrl: 'app/favourite.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
            }
        .glyphicon {
            font-size: 80px;
            cursor: pointer;
        }
    `]
})

export class FavouriteComponent {
    @Input() isFavourite = false;
    
    @Output() change = new EventEmitter();
    
    onClick() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}