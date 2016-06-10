import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home.component';
import { BlogPostComponent } from './blog-post.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/archive/:year/:month', name: 'Blog Post', component: BlogPostComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})

export class AppComponent {
    
}