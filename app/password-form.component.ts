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
                Validators.required
            ])]
        }, { validator: PasswordMatchValidator.passwordsShouldMatch });
    }
    
    changePassword() {
        var currentPassword = this.form.find('current');
        if (currentPassword.value != '1234')
            currentPassword.setErrors({ validCurrentPassword: true });

        if (this.form.valid)
            alert("Successfully changed password");
    }
}