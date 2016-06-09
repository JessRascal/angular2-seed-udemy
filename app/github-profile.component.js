System.register(['angular2/core', './github.service', 'rxjs/Observable', 'angular2/http', 'rxjs/add/observable/forkJoin'], function(exports_1, context_1) {
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
    var core_1, github_service_1, Observable_1, http_1;
    var GithubProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            GithubProfileComponent = (function () {
                function GithubProfileComponent(_githubService) {
                    this._githubService = _githubService;
                    this.username = "jessrascal";
                    this.user = {};
                    this.followers = [];
                    this.isLoading = true;
                }
                GithubProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var userData = this._githubService.getUser(this.username);
                    var followerData = this._githubService.getFollowers(this.username);
                    Observable_1.Observable
                        .forkJoin(userData, followerData)
                        .subscribe(function (response) {
                        _this.user = response[0],
                            _this.followers = response[1];
                    }, null, function () { _this.isLoading = false; });
                };
                GithubProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'github-profile',
                        template: "\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        <h3>@{{ user.login }}</h3>\n        <img class=\"avatar\" src=\"{{ user.avatar_url }}\">\n        <hr>\n        <h4>Followers</h4>\n        <div class=\"media\" *ngFor=\"#follower of followers\">\n            <div class=\"media-left\">\n                <a href=\"{{ follower.html_url }}\" target=\"_blank\">\n                <img class=\"media-object avatar\" src=\"{{ follower.avatar_url }}\" alt=\"{{ follower.login }} avatar\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{ follower.login }}</h4>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .avatar {\n            width: 100;\n            height: 100;\n            border-radius: 100%;\n        }\n    "],
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