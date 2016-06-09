System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordMatchValidator;
    return {
        setters:[],
        execute: function() {
            PasswordMatchValidator = (function () {
                function PasswordMatchValidator() {
                }
                PasswordMatchValidator.passwordsShouldMatch = function (group) {
                    var newPassword = group.find('new').value;
                    var confirmPassword = group.find('confirm').value;
                    if (newPassword === '' || confirmPassword === '')
                        return null;
                    // If the 'confirm password' value doesn't match the 'new password' value then validation fails.
                    if (confirmPassword !== newPassword)
                        return { passwordsShouldMatch: true };
                    return null;
                };
                return PasswordMatchValidator;
            }());
            exports_1("PasswordMatchValidator", PasswordMatchValidator);
        }
    }
});
//# sourceMappingURL=passwordMatchValidator.js.map