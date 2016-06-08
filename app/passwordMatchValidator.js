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
                    var newPassword = group.find('new');
                    var confirmPassword = group.find('confirm');
                    if (confirmPassword !== newPassword) {
                        return { passwordsMatch: false };
                    }
                    return null;
                };
                return PasswordMatchValidator;
            }());
            exports_1("PasswordMatchValidator", PasswordMatchValidator);
        }
    }
});
//# sourceMappingURL=passwordMatchValidator.js.map