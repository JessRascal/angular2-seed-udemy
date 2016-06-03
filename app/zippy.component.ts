import { Component, Input } from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading"
            (click) = "toggle()">
                <h3 class="panel-title">{{ title }}
                    <i class="pull-right glyphicon"
                    [ngClass] = "{
                        'glyphicon-chevron-up': expanded,
                        'glyphicon-chevron-down': !expanded
                    }"
                    ></i>
                </h3>
            </div>
            <div class="panel-body"
            [hidden]="!expanded">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
        `})

export class ZippyComponent {
    @Input() title = "";
    expanded = false;
    
    toggle() {
        this.expanded = !this.expanded;
    }
}