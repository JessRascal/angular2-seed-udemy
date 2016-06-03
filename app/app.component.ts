import { Component } from 'angular2/core'
import { ZippyComponent } from './zippy.component'

@Component({
    selector: 'my-app',
    template: `
            <div class="container-fluid">
            
                <zippy title = "Test Title">
                    <div class="body">
                        This is the test body content.
                    </div>
                </zippy>
                <zippy title = "Second Zippy">
                    <div class="body">
                        There is nothing of interest here.
                    </div>
                </zippy>
                
            </div>
            `,
    styles: [`
              .container-fluid {
                  margin: 30px;
              }  
            `],
    directives: [ ZippyComponent ]
})
export class AppComponent {
    
}