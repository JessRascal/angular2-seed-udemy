import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'blog-post',
    template: `
        <h2>Archives</h2>
        {{ year }} / {{ month }}
    `
})

export class BlogPostComponent {
    year: string;
    month: string;

    constructor(routeParams: RouteParams) {
        this.year = routeParams.get("year");
        this.month = routeParams.get("month");
    }
}