import { ControlGroup, Control } from 'angular2/common'

export class PasswordMatchValidator {
    static passwordsShouldMatch(group: ControlGroup) {
        var newPassword = group.find('new').value;
        var confirmPassword = group.find('confirm').value;
        
        if (newPassword === '' || confirmPassword === '')
            return null;

        // If the 'confirm password' value doesn't match the 'new password' value then validation fails.
        if (confirmPassword !== newPassword)
            return { passwordsShouldMatch: true };

        return null;
    }
}