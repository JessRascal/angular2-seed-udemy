import { Component } from 'angular2/core'
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common'
import { PasswordMatchValidator } from './passwordMatchValidator'

@Component ({
    selector: 'password-form',
    templateUrl: 'app/password-form.template.html'
})

export class PasswordFormComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            current: ['', Validators.compose([
                Validators.required
                ])],
            new: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
                ])],
            confirm: ['', Validators.compose([
                Validators.required,
                PasswordMatchValidator.passwordsShouldMatch
            ])]
        })
    }
    
    changePassword() {
        if (this.form.find('current').value != "1234") {
            console.log("Invalid old password");
        } else {
            alert("Successfully changed password");
        }
    }
}