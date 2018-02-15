webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <app-common-modal></app-common-modal>\r\n    <app-common-messages></app-common-messages>\r\n    <br/>\r\n    <app-todo-dashboard></app-todo-dashboard>\r\n    <br/>\r\n    <app-todo-list></app-todo-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export instrumentOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo__ = __webpack_require__("../../../../../src/app/todo/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_messages__ = __webpack_require__("../../../../../src/app/common-messages/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_modal__ = __webpack_require__("../../../../../src/app/common-modal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar__ = __webpack_require__("../../../../../src/app/navbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store_log_monitor__ = __webpack_require__("../../../../@ngrx/store-log-monitor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngrx_store_localstorage__ = __webpack_require__("../../../../ngrx-store-localstorage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngrx_store_localstorage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ngrx_store_localstorage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RouterModule, Routes } from '@angular/router';
// import { Reducer } from 'redux';
// import { createLogger } from 'redux-logger';















function instrumentOptions() {
    return {
        monitor: Object(__WEBPACK_IMPORTED_MODULE_12__ngrx_store_log_monitor__["b" /* useLogMonitor */])({ visible: false, position: 'right' })
    };
}
var reducers = {
    todos: __WEBPACK_IMPORTED_MODULE_5__todo__["d" /* todoReducer */],
    commonModal: __WEBPACK_IMPORTED_MODULE_7__common_modal__["b" /* commonModalReducer */],
    commonMessage: __WEBPACK_IMPORTED_MODULE_6__common_messages__["e" /* commonMessageReducer */]
};
var appReducer = Object(__WEBPACK_IMPORTED_MODULE_10__ngrx_core_compose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_13_ngrx_store_localstorage__["localStorageSync"])({ keys: ['todos', 'commonModal', 'commonMessage'], rehydrate: true }), __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["k" /* combineReducers */])(reducers);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo__["a" /* TodoDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo__["b" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_messages__["a" /* CommonMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__common_modal__["a" /* CommonModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["i" /* StoreModule */].forRoot({
                    todos: __WEBPACK_IMPORTED_MODULE_5__todo__["d" /* todoReducer */],
                    commonModal: __WEBPACK_IMPORTED_MODULE_7__common_modal__["b" /* commonModalReducer */],
                    commonMessage: __WEBPACK_IMPORTED_MODULE_6__common_messages__["e" /* commonMessageReducer */]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ngrx_store_devtools__["b" /* StoreDevtoolsModule */].instrument(instrumentOptions),
                __WEBPACK_IMPORTED_MODULE_12__ngrx_store_log_monitor__["a" /* StoreLogMonitorModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__todo__["c" /* TodoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common-messages/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SUCCESS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INFO_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return REMOVE_MESSAGE; });
var SUCCESS_MESSAGE = 'SUCCESS_MESSAGE';
var INFO_MESSAGE = 'INFO_MESSAGE';
var REMOVE_MESSAGE = 'REMOVE_MESSAGE';


/***/ }),

/***/ "../../../../../src/app/common-messages/common-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-messages/common-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let message of commonMessages | async\">\r\n  <article class=\"message is-success\" *ngIf=\"message.success\">\r\n    <div class=\"message-body\">\r\n      {{message.success}}\r\n    </div>\r\n  </article>\r\n  <article class=\"message is-info\" *ngIf=\"message.info\">\r\n    <div class=\"message-body\">\r\n      {{message.info}}\r\n    </div>\r\n  </article>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/common-messages/common-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonMessagesComponent = /** @class */ (function () {
    function CommonMessagesComponent() {
    }
    CommonMessagesComponent.prototype.ngOnInit = function () {
    };
    CommonMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-common-messages',
            template: __webpack_require__("../../../../../src/app/common-messages/common-messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-messages/common-messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonMessagesComponent);
    return CommonMessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common-messages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_messages_component__ = __webpack_require__("../../../../../src/app/common-messages/common-messages.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_messages_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("../../../../../src/app/common-messages/store.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/common-messages/actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__actions__["c"]; });





/***/ }),

/***/ "../../../../../src/app/common-messages/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MESSAGE_INITIAL_STATE */
/* harmony export (immutable) */ __webpack_exports__["a"] = commonMessageReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/common-messages/actions.ts");

var MESSAGE_INITIAL_STATE = {
    commonMessages: []
};
function showSuccessMessage(state, action) {
    return Object.assign({}, state, { commonMessages: state.commonMessages.concat(action.payload) });
}
function showInfoMessage(state, action) {
    return Object.assign({}, state, { commonMessages: state.commonMessages.concat(action.payload) });
}
function clearMessage(state, action) {
    return Object.assign({}, state, { commonMessages: [] });
}
function commonMessageReducer(state, action) {
    if (state === void 0) { state = MESSAGE_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SUCCESS_MESSAGE */]: return showSuccessMessage(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* REMOVE_MESSAGE */]: return clearMessage(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* INFO_MESSAGE */]: return showInfoMessage(state, action);
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/common-modal/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DISABLE_MODAL; });
var CONFIRM = 'CONFIRM';
var DISABLE_MODAL = 'DISABLE_MODAL';


/***/ }),

/***/ "../../../../../src/app/common-modal/common-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-modal/common-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Confirm Modal -->\r\n<div class=\"modal\" [class.is-active]=\"modalObject.modalObject.messageType === 'confirm'\" *ngIf=\"modalObject.modalObject.messageType\">\r\n        <div class=\"modal-background\"></div>\r\n        <div class=\"modal-card\">\r\n            <input type=\"hidden\" #id [value]=\"modalObject.modalObject.removeTodoId\"/>\r\n            <header class=\"modal-card-head\">\r\n                <p class=\"modal-card-title\">{{modalObject.modalObject.heading}}</p>\r\n                <button class=\"delete\" aria-label=\"close\" (click)=\"disableModal()\"></button>\r\n            </header>\r\n            <section class=\"modal-card-body\">\r\n                {{modalObject.modalObject.message}}\r\n            </section>\r\n            <footer class=\"modal-card-foot\">\r\n                <button class=\"button is-danger\" (click)=\"removeTodo(id.value)\">REMOVE TODO</button>\r\n                <button class=\"button\" (click)=\"disableModal()\">Cancel</button>\r\n            </footer>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/common-modal/common-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__("../../../../../src/app/todo/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/common-modal/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonModalComponent = /** @class */ (function () {
    function CommonModalComponent(store, _todoService) {
        this.store = store;
        this._todoService = _todoService;
    }
    CommonModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select('commonModal').subscribe(function (object) {
            _this.modalObject = object;
            console.log(_this.modalObject);
        });
    };
    CommonModalComponent.prototype.removeTodo = function (id) {
        this._todoService.removeTodo(id);
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* DISABLE_MODAL */], payload: {} });
    };
    CommonModalComponent.prototype.disableModal = function () {
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* DISABLE_MODAL */], payload: {} });
    };
    CommonModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-common-modal',
            template: __webpack_require__("../../../../../src/app/common-modal/common-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-modal/common-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_2__todo__["c" /* TodoService */]])
    ], CommonModalComponent);
    return CommonModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common-modal/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_modal_component__ = __webpack_require__("../../../../../src/app/common-modal/common-modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("../../../../../src/app/common-modal/store.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/common-modal/actions.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "../../../../../src/app/common-modal/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MODAL_INITIAL_STATE */
/* harmony export (immutable) */ __webpack_exports__["a"] = commonModalReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/common-modal/actions.ts");

var MODAL_INITIAL_STATE = {
    modalObject: {}
};
function confirmModal(state, action) {
    console.log('confirm');
    return Object.assign({}, state, { modalObject: action.payload });
}
function disableModal(state, action) {
    return Object.assign({}, state, { modalObject: action.payload });
}
function commonModalReducer(state, action) {
    if (state === void 0) { state = MODAL_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* CONFIRM */]: return confirmModal(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* DISABLE_MODAL */]: return disableModal(state, action);
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/navbar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-success\">\r\n  <div class=\"navbar-brand\">\r\n    <a class=\"navbar-item\" href=\"#\">\r\n       TODO APP\r\n    </a>\r\n    <div class=\"navbar-burger burger\" data-target=\"navMenuColorsuccess-example\">\r\n      <span></span>\r\n      <span></span>\r\n      <span></span>\r\n    </div>\r\n  </div>\r\n  <div id=\"navMenuColorsuccess-example\" class=\"navbar-menu\">\r\n  </div>\r\n</nav>\r\n<br/>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOOGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_TODO_SUCCESS; });
var ADD_TODO = 'ADD_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var TOOGLE_TODO = 'TOOGLE_TODO';
var FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';


/***/ }),

/***/ "../../../../../src/app/todo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__todo_dashboard_todo_dashboard_component__ = __webpack_require__("../../../../../src/app/todo/todo-dashboard/todo-dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__todo_dashboard_todo_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo/todo-list/todo-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__todo_list_todo_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__todo_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("../../../../../src/app/todo/store.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__store__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("../../../../../src/app/todo/actions.ts");
/* unused harmony namespace reexport */







/***/ }),

/***/ "../../../../../src/app/todo/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TODO_INITIAL_STATE */
/* harmony export (immutable) */ __webpack_exports__["a"] = todoReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/todo/actions.ts");


var TODO_INITIAL_STATE = {
    todos: []
};
function addTodo(state, action) {
    console.log(action);
    __WEBPACK_IMPORTED_MODULE_0_lodash__["reverse"](state.todos);
    return Object.assign({}, state, {
        todos: __WEBPACK_IMPORTED_MODULE_0_lodash__["reverse"](state.todos.concat(Object.assign({}, action.todo)))
    });
}
function removeTodo(state, action) {
    return Object.assign({}, state, {
        todos: __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](state.todos, function (todo) { return todo._id !== action.todoId; })
    });
}
function toggleTodo(state, action) {
    var todo = state.todos.find(function (todo) { return todo._id == action.todo._id; });
    var index = state.todos.indexOf(todo);
    return Object.assign({}, state, {
        todos: state.todos.slice(0, index).concat([
            Object.assign({}, todo, { isCompleted: action.todo.isCompleted, lastUpdated: action.todo.lastUpdated })
        ], state.todos.slice(index + 1))
    });
}
function fetchTodoSuccess(state, action) {
    return Object.assign({}, state, {
        todos: __WEBPACK_IMPORTED_MODULE_0_lodash__["reverse"](action.todos)
    });
}
function todoReducer(state, action) {
    if (state === void 0) { state = TODO_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ADD_TODO */]: return addTodo(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* REMOVE_TODO */]: return removeTodo(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* TOOGLE_TODO */]: return toggleTodo(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* FETCH_TODO_SUCCESS */]: return fetchTodoSuccess(state, action);
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/todo/todo-dashboard/todo-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo-dashboard/todo-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"message is-success \">\r\n  <div class=\"message-header is-uppercase\">\r\n    <p>Todo Dashboard</p>\r\n  </div>\r\n  <div class=\"message-body\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTodo(f)\">\r\n      <div class=\"field is-horizontal\">\r\n        <div class=\"field-label is-normal\">\r\n          <label class=\"label\">Description</label>\r\n        </div>\r\n        <div class=\"field-body\">\r\n          <div class=\"field\">\r\n            <p class=\"control\">\r\n              <input class=\"input is-success\" [class.is-danger]=\"!desc.valid && desc.touched\" type=\"text\" ngModel name=\"desc\" #desc=\"ngModel\"\r\n                required>\r\n            </p>\r\n            <div *ngIf=\"!desc.valid && desc.touched\">\r\n              <div *ngIf=\"desc.errors.required\">Field required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field is-horizontal\">\r\n        <div class=\"field-label is-normal\">\r\n          <label class=\"label\">Priority</label>\r\n        </div>\r\n        <div class=\"field-body\">\r\n          <div class=\"field\">\r\n            <div class=\"control\">\r\n              <div class=\"select is-success\" [class.is-danger]=\"!priority.valid && priority.touched\">\r\n                <select ngModel name=\"priority\" #priority=\"ngModel\" required>\r\n                      <option value=\"\">--select priority--</option>\r\n                      <option value=\"Low\">Low</option>\r\n                      <option value=\"Medium\">Medium</option>\r\n                      <option value=\"High\">High</option>\r\n                </select>\r\n              </div>\r\n              <div *ngIf=\"!priority.valid && priority.touched\">\r\n                <div *ngIf=\"priority.errors.required\">Field required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field is-horizontal\">\r\n        <div class=\"field-label is-normal\">\r\n          <label class=\"label\"></label>\r\n        </div>\r\n        <div class=\"field-body\">\r\n          <div class=\"field\">\r\n            <div class=\"control\">\r\n              <input class=\"button is-success is-outlined\" [disabled]=\"!f.valid\" type=\"submit\" value=\"ADD TODO\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/todo/todo-dashboard/todo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDashboardComponent = /** @class */ (function () {
    function TodoDashboardComponent(_todoService) {
        this._todoService = _todoService;
    }
    TodoDashboardComponent.prototype.ngOnInit = function () {
    };
    TodoDashboardComponent.prototype.onSubmitTodo = function (form) {
        if (form.valid) {
            form.value.lastUpdated = new Date();
            this._todoService.addTodo(form.value);
            form.reset();
        }
    };
    TodoDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-dashboard',
            template: __webpack_require__("../../../../../src/app/todo/todo-dashboard/todo-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo/todo-dashboard/todo-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]])
    ], TodoDashboardComponent);
    return TodoDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clrGreen {\r\n    background-color: lightgreen;\r\n  }\r\n.line-through {\r\n  text-decoration: line-through;\r\n}\r\n.cursor-pointer {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-success\" *ngIf=\"todos.todos.length > 0\">\r\n  <thead>\r\n    <tr>\r\n      <th>Description</th>\r\n      <th>Priority</th>\r\n      <th>Last Updated</th>\r\n      <th>Remove</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let todo of todos.todos\">\r\n      <td class=\"cursor-pointer\" [class.line-through]=\"todo.isCompleted\" (click)=\"toogleTodo(todo._id, todo.isCompleted)\">{{todo.desc}}</td>\r\n      <td class=\"cursor-pointer\" [class.line-through]=\"todo.isCompleted\" (click)=\"toogleTodo(todo._id, todo.isCompleted)\">{{todo.priority}}</td>\r\n      <td class=\"cursor-pointer\" [class.line-through]=\"todo.isCompleted\" (click)=\"toogleTodo(todo._id, todo.isCompleted)\">{{todo.lastUpdated | date: 'dd/MM/yyyy'}}</td>\r\n      <td>\r\n        <button class=\"button is-outlined is-danger\" (click)=\"removeTodo(todo._id)\">REMOVE TODO</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/todo/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_modal_actions__ = __webpack_require__("../../../../../src/app/common-modal/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__todo_service__ = __webpack_require__("../../../../../src/app/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store, _todoService) {
        this.store = store;
        this._todoService = _todoService;
        this._todoService.getTodos();
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select("todos").subscribe(function (todo) {
            _this.todos = todo;
            console.log(_this.todos);
        });
    };
    TodoListComponent.prototype.removeTodo = function (id) {
        var confirmObject = {
            messageType: 'confirm',
            heading: 'Confirm Modal',
            message: 'Are you sure you want to delete this todo?',
            removeTodoId: id
        };
        this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__common_modal_actions__["a" /* CONFIRM */], payload: confirmObject });
    };
    TodoListComponent.prototype.toogleTodo = function (id, isCompleted) {
        isCompleted = !isCompleted;
        var lastUpdated = new Date();
        this._todoService.toggleTodo(id, isCompleted, lastUpdated);
    };
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-todo-list',
            template: __webpack_require__("../../../../../src/app/todo/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_3__todo_service__["a" /* TodoService */]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("../../../../../src/app/todo/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_messages__ = __webpack_require__("../../../../../src/app/common-messages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodoService = /** @class */ (function () {
    function TodoService(store, _http) {
        this.store = store;
        this._http = _http;
        this.URL = 'https://sleepy-citadel-54178.herokuapp.com/api';
    }
    TodoService.prototype.addTodo = function (todo) {
        var _this = this;
        this._http.post(this.URL + '/todos', todo)
            .map(function (todo) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["a" /* ADD_TODO */], todo: todo }); })
            .subscribe(function (todo) {
            _this.store.dispatch(todo);
            _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__common_messages__["d" /* SUCCESS_MESSAGE */], payload: { success: 'Your todo added successfully.' } });
            setTimeout(function () {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__common_messages__["c" /* REMOVE_MESSAGE */] });
            }, 2000);
        });
    };
    TodoService.prototype.getTodos = function () {
        var _this = this;
        this._http.get(this.URL + '/todos')
            .map(function (todos) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["b" /* FETCH_TODO_SUCCESS */], todos: todos }); })
            .subscribe(function (todos) {
            _this.store.dispatch(todos);
        });
    };
    TodoService.prototype.removeTodo = function (id) {
        var _this = this;
        this._http.delete(this.URL + '/todos/' + id)
            .map(function (todoId) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["c" /* REMOVE_TODO */], todoId: todoId }); })
            .subscribe(function (todoId) {
            _this.store.dispatch(todoId);
        });
    };
    TodoService.prototype.toggleTodo = function (id, isCompleted, lastUpdated) {
        var _this = this;
        this._http.patch(this.URL + '/todos/' + id, { 'isCompleted': isCompleted, 'lastUpdated': lastUpdated })
            .map(function (todo) { return ({ type: __WEBPACK_IMPORTED_MODULE_4__actions__["d" /* TOOGLE_TODO */], todo: todo }); })
            .subscribe(function (todo) {
            _this.store.dispatch(todo);
            if (isCompleted) {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__common_messages__["b" /* INFO_MESSAGE */], payload: { info: 'Todo status changed to completed.' } });
            }
            else {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__common_messages__["b" /* INFO_MESSAGE */], payload: { info: 'Todo status changed to not completed.' } });
            }
            setTimeout(function () {
                _this.store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_5__common_messages__["c" /* REMOVE_MESSAGE */] });
            }, 3000);
        });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map