import { ControlGroup, Control } from 'angular2/common'

export class PasswordMatchValidator {
    static passwordsShouldMatch(group: ControlGroup) {
        var newPassword = group.find('new');
        var confirmPassword = group.find('confirm');
        
        if (confirmPassword !== newPassword) {
            return { passwordsMatch: false }
        }
        return null;
    }
}