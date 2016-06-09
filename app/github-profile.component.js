System.register(['angular2/core', './github.service', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, github_service_1, http_1;
    var GithubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            GithubProfileComponent = (function () {
                function GithubProfileComponent(_githubService) {
                    this._githubService = _githubService;
                    this.username = "jessrascal";
                    this.user = {};
                }
                GithubProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._githubService.getUser(this.username)
                        .subscribe(function (user) { return _this.user = user; });
                };
                GithubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        template: "\n        <h3>@{{ user.login }}</h3>\n        <img src=\"{{ user.avatar_url }}\">\n    ",
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubProfileComponent);
                return GithubProfileComponent;
            }());
            exports_1("GithubProfileComponent", GithubProfileComponent);
        }
    }
});
//# sourceMappingURL=github-profile.component.js.map