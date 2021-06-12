(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/m+g":
/*!****************************************************************!*\
  !*** ./src/app/components/nav-mobile/nav-mobile.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbW9iaWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Francisco Medina\Documents\Codes\reddit-client\src\main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "9H9P":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav-mobile/nav-mobile.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Reddit Posts</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <app-sidebar [showDismissAllMobile]=true (onSelectedPost)=\"displayPost($event)\"></app-sidebar>\n      </ul>\n    </div>\n</nav>\n");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};


/***/ }),

/***/ "E5f3":
/*!***************************************************************!*\
  !*** ./src/app/components/nav-mobile/nav-mobile.component.ts ***!
  \***************************************************************/
/*! exports provided: NavMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMobileComponent", function() { return NavMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_mobile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-mobile.component.html */ "9H9P");
/* harmony import */ var _nav_mobile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-mobile.component.css */ "/m+g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavMobileComponent = class NavMobileComponent {
    constructor() {
        this.onSelectedPost = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
    }
    displayPost(post) {
        this.onSelectedPost.emit(post);
    }
};
NavMobileComponent.ctorParameters = () => [];
NavMobileComponent.propDecorators = {
    onSelectedPost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
NavMobileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-mobile',
        template: _raw_loader_nav_mobile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_mobile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavMobileComponent);



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"posts-container\">\n    <div class=\"title\">\n        <p>Reddit Posts</p>\n    </div>\n    <div class=\"posts-list\">\n        <i [ngClass]=\"postDataArray.length == 0 ? 'show' : 'hide'\" class=\"fas fa-spinner fa-3x fa-spin\"></i>\n        <div *ngFor=\"let post of postDataArray\" class=\"post-block\">\n            <div [id]=\"post.id\" class=\"post-sub_block\" [ngClass]=\"post.seen ? 'seen-post' : 'unseen-post'\">\n                <div>\n                    <p data-bs-toggle=\"collapse\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" class=\"post-title\" (click)=\"selectPost(this.post)\"><i [ngClass]=\"post.seen ? 'seen-dot' : 'unseen-dot'\" class=\"fas fa-sm fa-circle\"></i>{{post.author}} <span>{{post.created}}</span></p>\n                    <div data-bs-toggle=\"collapse\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" class=\"post-preview\" (click)=\"selectPost(this.post)\">\n                       <img *ngIf=\"post\" [src]=\"post?.thumb\" alt=\"\" >\n                       <p>{{post.preview_title}}</p> \n                    </div>\n                    <div class=\"post-footer\">\n                        <p (click)=\"dismissPost(post.id);\" class=\"dismiss-label\"><i class=\"far fa-times-circle\"></i> Dismiss Post</p>\n                        <p data-bs-toggle=\"collapse\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" (click)=\"selectPost(this.post)\">{{post.num_comments}} comments</p>\n                    </div>\n                </div>\n                <div data-bs-toggle=\"collapse\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" (click)=\"selectPost(this.post)\">\n                    <i class=\"fas fa-lg fa-chevron-right\"></i>\n                </div>\n            </div>\n            <hr style=\"border-color: gray;\">\n        </div>\n    </div>\n    <div [ngClass]=\"showDismissAllMobile ? 'showOnMobile' : 'hideOnMobile' \" (click)=\"dismissAll();\" class=\"dismiss-block\">\n        <p>Dismiss All</p>\n    </div>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor(elRef) {
        this.elRef = elRef;
        this.title = 'reddit-client';
        this.featuredPost = { title: "", author: "", thumb: "" };
    }
    displayPost(post) {
        this.featuredPost = post;
        const player = this.elRef.nativeElement.querySelector('video');
        try {
            player.load();
        }
        catch (_a) { }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-page\">\n  <div class=\"sidebar-container\">\n    <app-sidebar [showDismissAllMobile]=false (onSelectedPost)=\"displayPost($event)\"></app-sidebar>\n  </div>\n  <div class=\"post-container\">\n    <app-nav-mobile (onSelectedPost)=\"displayPost($event)\"></app-nav-mobile>\n    <h3>{{featuredPost?.author}}</h3>\n    <div *ngIf=\"featuredPost.video; then videoBlock else defaultBlock\"></div>\n    <ng-template #videoBlock>\n      <video id=\"videoElement\" controls class=\"featuredMedia\" >\n        <source [src]=\"featuredPost.media\"   type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n    </ng-template>\n    <ng-template #defaultBlock>\n      <img *ngIf=\"featuredPost.media?.includes('.jpg') || featuredPost.media?.includes('.png'); else urlBlock\" [src]=\"featuredPost.media\" class=\"featuredMedia\" alt=\"\">\n      <ng-template #urlBlock>\n        <a *ngIf=\"featuredPost.thumb == 'default'\" [href]=\"featuredPost.media\" class=\"featuredMedia\" target=\"_blank\" rel=\"noopener noreferrer\"> Click here </a>\n      </ng-template>\n    </ng-template>\n    <p>{{featuredPost?.title}}</p>\n  </div>\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data-api.service */ "etbh");
/* harmony import */ var _components_nav_mobile_nav_mobile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-mobile/nav-mobile.component */ "E5f3");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"],
            _components_nav_mobile_nav_mobile_component__WEBPACK_IMPORTED_MODULE_7__["NavMobileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [_services_data_api_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "etbh":
/*!**********************************************!*\
  !*** ./src/app/services/data-api.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let DataApiService = class DataApiService {
    constructor(http) {
        this.http = http;
    }
    get(endPoint) {
        let link = endPoint;
        return this.http.request('GET', link, {});
    }
};
DataApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataApiService);



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var C_Users_Francisco_Medina_Documents_Codes_reddit_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-api.service */ "etbh");






let SidebarComponent = class SidebarComponent {
  constructor(api) {
    this.api = api;
    this.onSelectedPost = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    this.postDataArray = [];

    this.delay = ms => new Promise(res => setTimeout(res, ms));
  }

  ngOnInit() {
    this.getPosts();
    console.log(this.showDismissAllMobile);
  }

  selectPost(post) {
    this.onSelectedPost.emit(post);
    post.seen = true;
  }

  getPosts() {
    var _this = this;

    this.api.get('https://www.reddit.com/r/all/top.json?count=0&limit=50').subscribe( /*#__PURE__*/function () {
      var _ref = Object(C_Users_Francisco_Medina_Documents_Codes_reddit_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (posts) {
        posts.data.children.forEach(postRawData => {
          var _a, _b;

          let postData = {
            id: postRawData.data.id,
            title: postRawData.data.title,
            preview_title: postRawData.data.title.length >= 75 ? postRawData.data.title.substring(0, 75) + "..." : postRawData.data.title,
            author: postRawData.data.author,
            created: _this.timeSince(new Date(postRawData.data.created * 1000)) + " ago",
            thumb: postRawData.data.thumbnail,
            num_comments: postRawData.data.num_comments,
            seen: false,
            media: postRawData.data.media ? (_b = (_a = postRawData.data.media) === null || _a === void 0 ? void 0 : _a.reddit_video) === null || _b === void 0 ? void 0 : _b.fallback_url : postRawData.data.url,
            video: Boolean(postRawData.data.media)
          };

          _this.postDataArray.push(postData);
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  dismissPost(postId) {
    var _this2 = this;

    return Object(C_Users_Francisco_Medina_Documents_Codes_reddit_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      (_a = document.getElementById(postId)) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
      yield _this2.delay(500);
      _this2.postDataArray = _this2.postDataArray.filter(p => p.id != postId);
    })();
  }

  dismissAll() {
    var _this3 = this;

    return Object(C_Users_Francisco_Medina_Documents_Codes_reddit_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.postDataArray.forEach(post => {
        var _a;

        (_a = document.getElementById(post.id)) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
      });

      yield _this3.delay(500);
      _this3.postDataArray = [];
    })();
  }

  timeSince(date) {
    var seconds = Math.floor((+new Date() - date) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }

    interval = seconds / 2592000;

    if (interval > 1) {
      return Math.floor(interval) + " months";
    }

    interval = seconds / 86400;

    if (interval > 1) {
      return Math.floor(interval) + " days";
    }

    interval = seconds / 3600;

    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }

    interval = seconds / 60;

    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }

    return Math.floor(seconds) + " seconds";
  }

};

SidebarComponent.ctorParameters = () => [{
  type: src_app_services_data_api_service__WEBPACK_IMPORTED_MODULE_5__["DataApiService"]
}];

SidebarComponent.propDecorators = {
  onSelectedPost: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
  }],
  showDismissAllMobile: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
  }]
};
SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
  selector: 'app-sidebar',
  template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_3__["default"]]
})], SidebarComponent);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.cef277de3ba5a85f7a17.js.map