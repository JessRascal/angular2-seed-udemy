import { Component } from 'angular2/core'

@Component ({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.component.html'
})

export class SubscriptionFormComponent {
    onSubscribe(form) {
        console.log(form.value);
    }
}