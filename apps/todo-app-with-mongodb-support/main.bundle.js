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

/***/ "../../../../../src/app/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TOOGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_TODO_SUCCESS; });
var ADD_TODO = 'ADD_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var CLEAR_ALL = 'CLEAR_ALL';
var TOOGLE_TODO = 'TOOGLE_TODO';
var FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';


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

module.exports = "<nav class=\"navbar is-success\">\r\n    <div class=\"navbar-brand\">\r\n        <a class=\"navbar-item\" href=\"#\">\r\n       way2programming\r\n    </a>\r\n        <div class=\"navbar-burger burger\" data-target=\"navMenuColorsuccess-example\">\r\n            <span></span>\r\n            <span></span>\r\n            <span></span>\r\n        </div>\r\n    </div>\r\n    <div id=\"navMenuColorsuccess-example\" class=\"navbar-menu\">\r\n    </div>\r\n</nav>\r\n<br/>\r\n<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <app-todo-dashboard></app-todo-dashboard>\r\n    <br/>\r\n    <app-todo-list></app-todo-list>\r\n</div>"

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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_dashboard_todo_dashboard_component__ = __webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store__ = __webpack_require__("../../../../../src/app/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test1_test1_component__ = __webpack_require__("../../../../../src/app/test1/test1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var routes = [];
var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_9__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_9__store__["a" /* INITIAL_STATE */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__todo_dashboard_todo_dashboard_component__["a" /* TodoDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__todo_list_todo_list_component__["a" /* TodoListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__test1_test1_component__["a" /* Test1Component */],
                __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgReduxModule"], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__todo_service__["a" /* TodoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_redux_store__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



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

module.exports = "<nav class=\"navbar is-success\">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" href=\"#\">\n       way2programming\n    </a>\n    <router-outlet></router-outlet>\n    <div class=\"navbar-burger burger\" data-target=\"navMenuColorsuccess-example\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n  <div id=\"navMenuColorsuccess-example\" class=\"navbar-menu\">\n  </div>\n</nav>\n<br/>"

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

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = rootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var INITIAL_STATE = {
    todos: []
};
function rootReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_TODO */]: {
            return Object.assign({}, state, { todos: state.todos.concat(Object.assign({}, action.todo)) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* REMOVE_TODO */]: {
            return Object.assign({}, state, { todos: __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](state.todos, function (todo) { return todo._id !== action.todoId; }) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* CLEAR_ALL */]: {
            return Object.assign({}, state, { todos: action.todos });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* TOOGLE_TODO */]: {
            var todo = state.todos.find(function (todo) { return todo._id == action.todo._id; });
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: state.todos.slice(0, index).concat([
                    Object.assign({}, todo, { isCompleted: action.todo.isCompleted, lastUpdated: action.todo.lastUpdated })
                ], state.todos.slice(index + 1))
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* FETCH_TODO_SUCCESS */]: {
            return Object.assign({}, state, { todos: action.todos });
        }
    }
    return state;
}


/***/ }),

/***/ "../../../../../src/app/test1/test1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test1/test1.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test1 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/test1/test1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Test1Component; });
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

var Test1Component = (function () {
    function Test1Component() {
    }
    Test1Component.prototype.ngOnInit = function () {
    };
    Test1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__("../../../../../src/app/test1/test1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"message is-success \">\r\n  <div class=\"message-header is-uppercase\">\r\n    <p>Todo Dashboard</p>\r\n    <!--<p><button class=\"button is-outlined is-danger\" (click)=\"clearAll()\">CLEAR ALL TODO</button></p>-->\r\n  </div>\r\n  <div class=\"message-body\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTodo(f)\">\r\n      <div class=\"field is-horizontal\">\r\n        <div class=\"field-label is-normal\">\r\n          <label class=\"label\">Description</label>\r\n        </div>\r\n        <div class=\"field-body\">\r\n          <div class=\"field\">\r\n            <p class=\"control\">\r\n              <input class=\"input is-success\" [class.is-danger]=\"!desc.valid && desc.touched\" type=\"text\" ngModel name=\"desc\" #desc=\"ngModel\"\r\n                required>\r\n            </p>\r\n            <div *ngIf=\"!desc.valid && desc.touched\">\r\n              <div *ngIf=\"desc.errors.required\">Field required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field is-horizontal\">\r\n        <div class=\"field-label is-normal\">\r\n          <label class=\"label\">Priority</label>\r\n        </div>\r\n        <div class=\"field-body\">\r\n          <div class=\"field\">\r\n            <div class=\"control\">\r\n              <div class=\"select is-success\" [class.is-danger]=\"!priority.valid && priority.touched\">\r\n                <select ngModel name=\"priority\" #priority=\"ngModel\" required>\r\n                      <option value=\"\">--select priority--</option>\r\n                      <option value=\"Low\">Low</option>\r\n                      <option value=\"Medium\">Medium</option>\r\n                      <option value=\"High\">High</option>\r\n                </select>\r\n              </div>\r\n              <div *ngIf=\"!priority.valid && priority.touched\">\r\n                <div *ngIf=\"priority.errors.required\">Field required</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field is-horizontal\">\r\n        <div class=\"field-label is-normal\">\r\n          <label class=\"label\"></label>\r\n        </div>\r\n        <div class=\"field-body\">\r\n          <div class=\"field\">\r\n            <div class=\"control\">\r\n              <input class=\"button is-success is-outlined\"  [disabled]=\"!f.valid\" type=\"submit\" value=\"ADD TODO\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</article>"

/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDashboardComponent = (function () {
    function TodoDashboardComponent(ngRedux, _todoService) {
        this.ngRedux = ngRedux;
        this._todoService = _todoService;
    }
    TodoDashboardComponent.prototype.ngOnInit = function () {
    };
    TodoDashboardComponent.prototype.onSubmitTodo = function (form) {
        if (form.valid) {
            form.value.lastUpdated = new Date();
            this._todoService.addTodo(form.value);
        }
    };
    TodoDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-dashboard',
            template: __webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]])
    ], TodoDashboardComponent);
    return TodoDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clrGreen {\r\n    background-color: lightgreen;\r\n  }\r\n.line-through {\r\n  text-decoration: line-through;\r\n}\r\n.cursor-pointer {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-success\" *ngIf=\"(todos | async).length > 0\">\n  <thead>\n    <tr>\n      <th>Description</th>\n      <th>Priority</th>\n      <th>Last Updated</th>\n      <th>Remove</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let todo of todos | async\">\n      <td class=\"cursor-pointer\" [class.line-through]=\"todo.isCompleted\" (click)=\"toogleTodo(todo._id, todo.isCompleted)\">{{todo.desc}}</td>\n      <td class=\"cursor-pointer\" [class.line-through]=\"todo.isCompleted\" (click)=\"toogleTodo(todo._id, todo.isCompleted)\">{{todo.priority}}</td>\n      <td class=\"cursor-pointer\" [class.line-through]=\"todo.isCompleted\" (click)=\"toogleTodo(todo._id, todo.isCompleted)\">{{todo.lastUpdated | date: 'dd/MM/yyyy'}}</td>\n      <td><button class=\"button is-outlined is-danger\" (click)=\"removeTodo(todo._id)\">REMOVE TODO</button></td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_service__ = __webpack_require__("../../../../../src/app/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = (function () {
    function TodoListComponent(ngRedux, _todoService) {
        this.ngRedux = ngRedux;
        this._todoService = _todoService;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this._todoService.getTodos();
    };
    TodoListComponent.prototype.removeTodo = function (id) {
        this._todoService.removeTodo(id);
    };
    TodoListComponent.prototype.toogleTodo = function (id, isCompleted) {
        isCompleted = !isCompleted;
        var lastUpdated = new Date();
        this._todoService.toggleTodo(id, isCompleted, lastUpdated);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "todos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "lastUpdate", void 0);
    TodoListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__("../../../../../src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_2__todo_service__["a" /* TodoService */]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoService = (function () {
    function TodoService(_http, ngRedux, _router) {
        this._http = _http;
        this.ngRedux = ngRedux;
        this._router = _router;
        this.URL = 'https://sleepy-citadel-54178.herokuapp.com/';
    }
    TodoService.prototype.addTodo = function (todo) {
        var _this = this;
        this._http.post(this.URL + '/todos', todo).subscribe(function (todo) { return _this.ngRedux.dispatch({ type: 'ADD_TODO', todo: todo }); });
    };
    TodoService.prototype.getTodos = function () {
        var _this = this;
        this._http.get(this.URL + '/todos').subscribe(function (todos) {
            console.log(todos);
            _this.ngRedux.dispatch({ type: 'FETCH_TODO_SUCCESS', todos: todos });
        });
    };
    TodoService.prototype.removeTodo = function (id) {
        var _this = this;
        this._http.delete(this.URL + '/todos/' + id).subscribe(function (todoId) { _this.ngRedux.dispatch({ type: 'REMOVE_TODO', todoId: todoId }); });
    };
    TodoService.prototype.toggleTodo = function (id, isCompleted, lastUpdated) {
        var _this = this;
        this._http.patch(this.URL + '/todos/' + id, { 'isCompleted': isCompleted, 'lastUpdated': lastUpdated }).subscribe(function (todo) { _this.ngRedux.dispatch({ type: 'TOOGLE_TODO', todo: todo }); });
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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