(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/forgot-password/forgot-password.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/forgot-password/forgot-password.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n  <div class=\"authBlock\">\n  <h3>Reset Password</h3>\n  <p class=\"text-center\">Please enter your email address to request a password reset.</p>\n  <div class=\"formGroup\">\n  <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required>\n  </div>\n  <!-- Calling ForgotPassword from AuthService Api -->\n  <div class=\"formGroup\">\n  <input type=\"submit\" class=\"btn btnPrimary\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">\n  </div>\n  </div>\n  <div class=\"redirectToLogin\">\n  <span>Go back to ? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/forgot-password/forgot-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/forgot-password/forgot-password.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/admin/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/admin/forgot-password/forgot-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n    <div class=\"authBlock\">\n      <h3>Sign In</h3>\n        <div class=\"formGroup\">\n          <input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required>\n        </div>\n        <div class=\"formGroup\">\n          <input type=\"password\" class=\"formControl\" placeholder=\"Password\" (keypress)=\"keypress($event,userName.value,userPassword.value)\" #userPassword required>\n        </div>\n        <!-- Calling SignIn Api from AuthService -->\n        <div class=\"formGroup\">\n          <input type=\"button\" class=\"btn btnPrimary\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">\n        </div>\n        <div class=\"formGroup\">\n          <span class=\"or\"><span class=\"orInner\">Or</span></span>\n        </div>\n        <!-- Calling GoogleAuth Api from AuthService -->\n        <div class=\"formGroup\">\n          <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n            <i class=\"fab fa-google-plus-g\"></i>\n            Log in with Google\n          </button>\n        </div>\n        <div class=\"forgotPassword\">\n          <span routerLink=\"/forgot-password\">Forgot Password?</span>\n        </div>\n        </div>\n        <div class=\"redirectToLogin\">\n      <span>Don't have an account?<span class=\"redirect\" routerLink=\"/register-user\"> Sign Up</span></span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGtsYXBtYW4vRG9jdW1lbnRzL0NvZGluZy9DYXBzdG9uZSBFeGFtcGxlL1RyYXZlbEh1bnQvc3JjL2FwcC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUEwRSxFQUM3RSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgIDEwcHggIDIwcHggIHJnYmEoMCwwLDAsMC4xOSksIDAgIDZweCAgNnB4ICByZ2JhKDAsMCwwLDAuMjMpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.keypress = function (event, userName, userPassword) {
        if (event.keyCode == 13) {
            this.authService.SignIn(userName, userPassword);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/admin/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n  <div class=\"authBlock\">\n  <h3>Sign Up</h3>\n  <div class=\"formGroup\">\n  <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\n  </div>\n  <div class=\"formGroup\">\n  <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\n  </div>\n  <div class=\"formGroup\">\n  <input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\n  </div>\n  <div class=\"formGroup\">\n  <span class=\"or\"><span class=\"orInner\">Or</span></span>\n  </div>\n  <!-- Continue with Google -->\n  <div class=\"formGroup\">\n  <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\n  <i class=\"fab fa-google-plus-g\"></i>\n  Continue with Google\n  </button>\n  </div>\n  <!-- Continue with Facebook -->\n  </div>\n  <div class=\"redirectToLogin\">\n  <span>Already have an account? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService) {
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/admin/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/admin/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/admin/verify-email/verify-email.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/verify-email/verify-email.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n  <div class=\"authBlock\">\n  <h3>Thank You for Registering</h3>\n  <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n  <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n  <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n  </div>\n  <!-- Calling SendVerificationMail() method using authService Api -->\n  <div class=\"formGroup\">\n  <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n  <i class=\"fas fa-redo-alt\"></i>\n  Resend Verification Email\n  </button>\n  </div>\n  </div>\n  <div class=\"redirectToLogin\">\n  <span>Go back to?<span class=\"redirect\" routerLink=\"/sign-in\"> Sign in</span></span>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/verify-email/verify-email.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/verify-email/verify-email.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/verify-email/verify-email.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/verify-email/verify-email.component.ts ***!
  \**************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");



var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/admin/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/admin/verify-email/verify-email.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapview/mapview.component */ "./src/app/mapview/mapview.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _admin_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/forgot-password/forgot-password.component */ "./src/app/admin/forgot-password/forgot-password.component.ts");
/* harmony import */ var _admin_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/verify-email/verify-email.component */ "./src/app/admin/verify-email/verify-email.component.ts");








var routes = [
    { path: '', component: _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_3__["MapviewComponent"] },
    { path: 'login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register-user', component: _admin_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'forgot-password', component: _admin_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
    { path: 'verify-email-address', component: _admin_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_7__["VerifyEmailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">TravelHunt</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\" routerLink=''>Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <!-- [hidden]=\"isAuth()\" add this to login and logout for hiding -->\n          <a class=\"nav-link\" (click)=\"SignOut()\" href=\"\">Logout</a>\n        </li>\n      </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/// <reference types="@types/googlemaps" />



var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent.prototype.SignOut = function () {
        this.auth.SignOut();
    };
    AppComponent.prototype.isAuth = function () {
        this.auth.isAuthenticated();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mapview/mapview.component */ "./src/app/mapview/mapview.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _admin_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/forgot-password/forgot-password.component */ "./src/app/admin/forgot-password/forgot-password.component.ts");
/* harmony import */ var _admin_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/verify-email/verify-email.component */ "./src/app/admin/verify-email/verify-email.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_9__["MapviewComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _admin_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _admin_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _admin_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _admin_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_17__["VerifyEmailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_config__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].FIREBASE_CONFIG),
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: _config__WEBPACK_IMPORTED_MODULE_3__["CONFIG"].GOOGLE_API_KEY,
                    libraries: ['places', 'geometry']
                }),
            ],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['dashboard']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        this.userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(this.userData, {
            merge: true
        });
    };
    // Get User ID for Location Add
    AuthService.prototype.GetUserId = function () {
        return JSON.parse(localStorage.getItem('user')).uid;
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('user') != 'null';
    };
    // Sign out 
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
var CONFIG = {
    GOOGLE_API_KEY: 'AIzaSyA1qBZfxHHZG4HxoKMg4JSkbkDk6puRuWQ',
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyCm1ngpJEFSbMw6YSdDVXH9TaiVtQrILYA",
        authDomain: "angular-maps-project-243323.firebaseapp.com",
        databaseURL: "https://angular-maps-project-243323.firebaseio.com",
        projectId: "angular-maps-project-243323",
        storageBucket: "angular-maps-project-243323.appspot.com",
        messagingSenderId: "173570027909",
        appId: "1:173570027909:web:1f26beab6c7a7425"
    }
};


/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mapview/mapview.component.html":
/*!************************************************!*\
  !*** ./src/app/mapview/mapview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"route-container\">\n  <div class=\"font-bold\">\n      <p id=\"route-label\">Where do you want to go?</p>\n  </div>\n  <div class=\"add-route-container\">\n      <div id=\"input-and-display-address\" class=\"col col-xl-6 col-lg-12\">\n          <div class=\"form-group\">\n              <input class=\"form-control\" #search [formControl]=\"searchControl\" type=\"text\" placeholder=\"Search for Location\" autocorrect=\"off\"\n                  autocapitalize=\"off\" spellcheck=\"off\">\n          </div>\n          <div id=\"addresses-container\" *ngIf=\"addresses\">\n              <ul *ngFor=\"let address of addresses; let index = index; trackBy: trackByIndex;\">\n                  <div class=\"line\">\n                      <div class=\"letter-marker\" (click)=\"drawRoute(index)\">{{ alphabeticLabels[index] }}</div>\n                      <div style=\"width:100%\">\n                          <li class=\"loc-info\">\n                              <span><div>{{ address.street }}</div>\n                              <p class=\"address-complement\">{{ addresses[index].additionalInfo}}</p></span>\n                              <img (click)=\"removeMarker(index)\" src=\"../assets/img/redx.png\" alt=\"Remove\" style=\"width: 25px; height:25px;\">\n                          </li>\n                      </div>\n                  </div>\n              </ul>\n          </div>\n          <div id=\"distance-price-container\" *ngIf=\"distance\">\n              <div id=\"distance-container\">\n                  <div class=\"font-bold\">\n                      <p id=\"distance-label\">Distance</p>\n                  </div>\n                  <div id=\"distance-value\">{{ distance }} mi</div>\n              </div>\n          </div>\n      </div>\n      <div id=\"map\" class=\"col col-xl-6 col-lg-12\">\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\">\n              <div *ngFor=\"let marker of markers\">\n                  <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [label]=\"marker.label\">\n                  </agm-marker>\n              </div>\n          </agm-map>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/mapview/mapview.component.scss":
/*!************************************************!*\
  !*** ./src/app/mapview/mapview.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[placeholder] {\n  text-overflow: ellipsis; }\n\n.border {\n  border: 1em;\n  border-radius: 10%; }\n\n#route-container {\n  margin: 1em; }\n\n.add-route-container {\n  display: flex;\n  padding: 0%;\n  margin-bottom: 5em; }\n\n.add-route-container #input-and-display-address {\n    justify-content: flex-start;\n    padding: 0%; }\n\n.add-route-container #input-and-display-address #distance-price-container {\n      display: flex;\n      justify-content: flex-end; }\n\n.add-route-container #map {\n    justify-content: flex-end;\n    padding-right: 0%; }\n\nul {\n  list-style: none;\n  padding: 0%; }\n\nagm-map {\n  height: 500px;\n  width: 100%; }\n\n#distance-container {\n  padding-top: 2em;\n  padding-right: 2em; }\n\n#price-container {\n  padding-top: 2em; }\n\n.font-bold {\n  font-weight: bold; }\n\n.line {\n  display: flex;\n  align-content: center; }\n\n.letter-marker {\n  height: 25px;\n  width: 25px;\n  min-width: 25px;\n  background-color: cornflowerblue;\n  border-radius: 50%;\n  display: inline-block;\n  color: white;\n  text-align: center;\n  margin-right: 1em;\n  align-self: center; }\n\n.address-complement, .personResponsible, .scheduledArrivalTime, .waitingTime {\n  border: none; }\n\n.center {\n  vertical-align: middle; }\n\n.loc-info {\n  display: flex;\n  width: 100%;\n  justify-content: space-between; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZGtsYXBtYW4vRG9jdW1lbnRzL0NvZGluZy9DYXBzdG9uZSBFeGFtcGxlL1RyYXZlbEh1bnQvc3JjL2FwcC9tYXB2aWV3L21hcHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBcUIsd0JBQXVCLEVBQUk7O0FBRWhEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNJLGNBQWE7RUFDYixZQUFXO0VBQ1gsbUJBQWtCLEVBZXJCOztBQWxCRDtJQU1RLDRCQUEyQjtJQUMzQixZQUFXLEVBTWQ7O0FBYkw7TUFVWSxjQUFhO01BQ2IsMEJBQXlCLEVBQzVCOztBQVpUO0lBZVEsMEJBQXlCO0lBQ3pCLGtCQUFpQixFQUNwQjs7QUFHTDtFQUNJLGlCQUFnQjtFQUNoQixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxjQUFhO0VBQ2IsWUFBVyxFQUNkOztBQUVEO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFFRDtFQUNJLGNBQWE7RUFDYixzQkFBcUIsRUFDeEI7O0FBRUQ7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLGdCQUFlO0VBQ2YsaUNBQWdDO0VBQ2hDLG1CQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLFlBQVc7RUFDWCwrQkFBOEIsRUFDakMiLCJmaWxlIjoic3JjL2FwcC9tYXB2aWV3L21hcHZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFtwbGFjZWhvbGRlcl0geyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4uYm9yZGVyIHtcbiAgICBib3JkZXI6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XG59XG5cbiNyb3V0ZS1jb250YWluZXIge1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmFkZC1yb3V0ZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNWVtO1xuXG4gICAgI2lucHV0LWFuZC1kaXNwbGF5LWFkZHJlc3Mge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDAlO1xuXG4gICAgICAgICNkaXN0YW5jZS1wcmljZS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgI21hcCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAlO1xuICAgIH1cbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMCU7XG59XG5cbmFnbS1tYXAge1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNkaXN0YW5jZS1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyZW07XG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xufVxuXG4jcHJpY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ubGV0dGVyLW1hcmtlciB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1pbi13aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYWRkcmVzcy1jb21wbGVtZW50LCAucGVyc29uUmVzcG9uc2libGUsIC5zY2hlZHVsZWRBcnJpdmFsVGltZSwgLndhaXRpbmdUaW1lICB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9jLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/mapview/mapview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mapview/mapview.component.ts ***!
  \**********************************************/
/*! exports provided: MapviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapviewComponent", function() { return MapviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");




//Firebase Imports


var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var MapviewComponent = /** @class */ (function () {
    function MapviewComponent(mapsApiLoader, ngZone, afs, auth) {
        this.mapsApiLoader = mapsApiLoader;
        this.ngZone = ngZone;
        this.afs = afs;
        this.auth = auth;
        // markers labels
        this.alphabeticLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // google maps zoom level
        this.zoom = 11;
        // initial center position for the map
        this.lat = 18.109581;
        this.lng = -77.297508;
        this.markers = [];
        this.TAX = 4;
    }
    MapviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.initializeRouteAndComponents();
        this.setGoogleMaps();
        this.getPosition().then(function (pos) {
            console.log("Positon: " + pos.lng + " " + pos.lat);
            _this.lat = pos.lat;
            _this.lng = pos.lng;
        });
        if (this.auth.isAuthenticated()) {
            this.itemsCollection = this.afs.collection('location', function (ref) { return ref.where('uid', '==', _this.auth.GetUserId()); }); //! Pulling in ALL locations in DB (after <Location> is not working)
            this.Location = this.itemsCollection.valueChanges();
            this.Location.subscribe(function (userCollection) {
                _this.markers = [];
                _this.addresses = [];
                userCollection.forEach(function (item) {
                    _this.markers.push({
                        lat: item.lat,
                        lng: item.lng,
                        label: _this.alphabeticLabels[_this.labelIndex++ % _this.alphabeticLabels.length]
                    });
                    _this.addresses.push({
                        street: item.street,
                        additionalInfo: item.additionalInfo,
                        lat: item.lat,
                        lng: item.lng
                    });
                });
            });
        }
    };
    MapviewComponent.prototype.setGoogleMaps = function () {
        var _this = this;
        this.maps.mapReady.subscribe(function (mapReady) { return _this.directionsDisplay.setMap(mapReady); }, function (e) { return console.log('Error setting map in DirectionRenderer', e); });
        this.labelIndex = 0;
        this.mapsApiLoader
            .load()
            .then(function () {
            // services have to be initialized inside MapsApiLoader to work
            _this.initializeGoogleMapsServices();
            _this.setPlacesAutocomplete();
            // workaround to restrict Autocomplete to get addresses within the chosen city boundaries
            _this.maps.boundsChange.subscribe(function (bounds) { return _this.autoComplete.setBounds(bounds); });
            _this.setupPlaceChangedListener();
        })
            .catch(function (e) { return console.log('Error loading MapsApi', e); });
    };
    MapviewComponent.prototype.getPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (resp) {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, function (err) {
                reject(err);
            });
        });
    };
    //Helper function to send info to Firebase
    MapviewComponent.prototype.addFiresbaseItem = function (item) {
        if (this.auth.isAuthenticated()) {
            this.itemsCollection.add(item);
        }
    };
    MapviewComponent.prototype.setupPlaceChangedListener = function () {
        var _this = this;
        this.idListener = this.autoComplete.addListener('place_changed', function () {
            console.log('Setting listener');
            _this.ngZone.run(function () {
                var place = _this.autoComplete.getPlace();
                if (!place.place_id || place.geometry === undefined || place.geometry === null) {
                    console.log('Place not found');
                    return;
                }
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
                var address = {
                    street: place.formatted_address,
                    additionalInfo: place.name,
                    lat: latitude,
                    lng: longitude
                };
                // Configuring Push to Firebase
                if (_this.auth.isAuthenticated()) {
                    _this.addFiresbaseItem({
                        street: address.street,
                        additionalInfo: address.additionalInfo,
                        lat: address.lat,
                        lng: address.lng,
                        uid: _this.auth.GetUserId(),
                    });
                }
                _this.addresses.push(address);
                _this.markers.push({
                    lat: latitude,
                    lng: longitude,
                    label: _this.alphabeticLabels[_this.labelIndex++ % _this.alphabeticLabels.length]
                });
                console.log('Markers list: ', JSON.stringify(_this.markers));
                _this.searchControl.reset();
                // this.drawRoute();
            });
        });
    };
    MapviewComponent.prototype.drawRoute = function (index) {
        // const length = this.markers.length;
        // if (!(length >= 2)) {
        //     return;
        // }
        this.setDirectionsRequest(index);
        var waypoints = [];
        // const user_loc: google.maps.DirectionsWaypoint = {location: {lat:this.lat,lng:this.lng}, stopover: null}
        var marker_loc = { location: this.markers[index], stopover: null };
        // this.markers.slice(1, this.markers.length - 1)
        //     .forEach(coordinates => {
        //         const way: google.maps.DirectionsWaypoint = {location: coordinates, stopover: null};
        //         waypoints.push(way);
        //     });
        // waypoints.push(user_loc)
        waypoints.push(marker_loc);
        this.directionsRequest.waypoints = waypoints;
        console.log('Waypoints: ', JSON.stringify(waypoints));
        // }
        this.callDirectionServiceRoute();
    };
    MapviewComponent.prototype.setDirectionsRequest = function (index) {
        // this.directionsRequest.origin = _.first(this.markers);
        this.directionsRequest.origin = { lat: this.lat, lng: this.lng };
        this.directionsRequest.destination = this.markers[index];
        this.directionsRequest.travelMode = google.maps.TravelMode.DRIVING;
        this.directionsRequest.optimizeWaypoints = true;
    };
    MapviewComponent.prototype.callDirectionServiceRoute = function () {
        var _this = this;
        this.directionsService.route(this.directionsRequest, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                _this.directionsDisplay.setDirections(response);
                _this.calcDistance(response);
            }
            else {
                console.log('Failed to display directions');
            }
        });
    };
    MapviewComponent.prototype.calcDistance = function (response) {
        var route = response.routes[0];
        var distance = 0;
        for (var i = 0; i < route.legs.length; i++) {
            distance += route.legs[i].distance.value;
        }
        this.distance = parseFloat(((distance / 1000) / 1.609).toFixed(2));
        console.log('Distance total: ', this.distance);
    };
    //Remove markers and location from Firebase
    MapviewComponent.prototype.removeMarker = function (index) {
        var _this = this;
        var ctx = this;
        if (this.auth.isAuthenticated()) {
            this.itemsCollection.ref.get().then(function (snapshot) {
                var docFound = false;
                snapshot.docs.forEach(function (doc, docIndex) {
                    var dataObj = doc.data();
                    if (!docFound) {
                        console.log(ctx.markers[0].lat);
                        if (dataObj.lat == ctx.markers[index].lat && dataObj.lng == ctx.markers[index].lng && dataObj.uid == ctx.auth.GetUserId()) {
                            doc.ref.delete();
                            docFound = true;
                        }
                    }
                });
                _this.addresses.splice(index, 1);
                console.log("Removing from markers");
                _this.markers.splice(index, 1);
                console.log("Done");
            });
        }
        else {
            this.addresses.splice(index, 1);
            console.log("Removing from markers");
            this.markers.splice(index, 1);
            console.log("Done");
        }
    };
    MapviewComponent.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    MapviewComponent.prototype.ngOnDestroy = function () {
        google.maps.event.removeListener(this.idListener);
    };
    MapviewComponent.prototype.initializeGoogleMapsServices = function () {
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRequest = {};
        this.directionsDisplay = new google.maps.DirectionsRenderer();
    };
    MapviewComponent.prototype.setPlacesAutocomplete = function () {
        this.autoComplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement);
        //! Uncomment below code to set bounds for map country
        // this.autoComplete.setTypes(['address']);
        // this.autoComplete.setComponentRestrictions({country: 'br'});
    };
    MapviewComponent.prototype.initializeRouteAndComponents = function () {
        this.addresses = [];
        this.markers = [];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MapviewComponent.prototype, "searchElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"])
    ], MapviewComponent.prototype, "maps", void 0);
    MapviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapview',
            template: __webpack_require__(/*! ./mapview.component.html */ "./src/app/mapview/mapview.component.html"),
            styles: [__webpack_require__(/*! ./mapview.component.scss */ "./src/app/mapview/mapview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MapviewComponent);
    return MapviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidklapman/Documents/Coding/Capstone Example/TravelHunt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map