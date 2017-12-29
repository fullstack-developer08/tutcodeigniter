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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOOGLE_TODO; });
var ADD_TODO = 'ADD_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var CLEAR_ALL = 'CLEAR_ALL';
var TOOGLE_TODO = 'TOOGLE_TODO';


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

module.exports = "<app-todo-dashboard></app-todo-dashboard>\n\n<app-todo-list></app-todo-list>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_dashboard_todo_dashboard_component__ = __webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_component__ = __webpack_require__("../../../../../src/app/todo-list/todo-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__("../../../../../src/app/store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_7__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_7__store__["a" /* INITIAL_STATE */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_dashboard_todo_dashboard_component__["a" /* TodoDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__todo_list_todo_list_component__["a" /* TodoListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = rootReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/actions.ts");

var INITIAL_STATE = {
    todos: [],
    lastUpdate: null
};
function rootReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADD_TODO */]:
            action.payload.todo.id = state.todos.length + 1;
            console.log('A');
            return Object.assign({}, state, { todos: state.todos.concat(Object.assign({}, action.payload.todo)), lastUpdate: new Date() });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* REMOVE_TODO */]:
            return Object.assign({}, state, { todos: state.todos.filter(function (todo) { return todo.id !== action.payload.todoId; }) });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["b" /* CLEAR_ALL */]:
            return Object.assign({}, state, { todos: [] });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["d" /* TOOGLE_TODO */]:
            var todo = state.todos.find(function (todo) { return todo.id === action.payload.todoId; });
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: state.todos.slice(0, index).concat([
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted })
                ], state.todos.slice(index + 1))
            });
    }
    return state;
}


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

module.exports = "<div>\r\n  <div (click)=\"clearAll()\">Clear All</div>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmitTodo(f)\">\r\n    <div>\r\n      <input type=\"text\" placeholder=\"desc\" ngModel name=\"desc\" #desc=\"ngModel\">\r\n    </div>\r\n    <div>\r\n      <select ngModel name=\"priority\" #priority=\"ngModel\">\r\n        <option value=\"\">--select priority--</option>\r\n        <option value=\"Low\">Low</option>\r\n        <option value=\"Medium\">Medium</option>\r\n        <option value=\"High\">High</option>\r\n      </select>\r\n    </div>\r\n    <div>\r\n      <input type=\"text\" placeholder=\"assigned person\" ngModel name=\"assignedPerson\" #assignedPerson=\"ngModel\">\r\n    </div>\r\n    <div>\r\n      <button type=\"submit\">ADD TODO</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/todo-dashboard/todo-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
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
    function TodoDashboardComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.model = {
            id: 0,
            desc: '',
            priority: ''
        };
    }
    TodoDashboardComponent.prototype.ngOnInit = function () {
    };
    TodoDashboardComponent.prototype.onSubmitTodo = function (todo) {
        this.model = todo.value;
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ADD_TODO */], payload: { todo: this.model } });
        console.log(todo.value);
    };
    TodoDashboardComponent.prototype.clearAll = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* CLEAR_ALL */] });
    };
    TodoDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo-dashboard',
            template: __webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/todo-dashboard/todo-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]])
    ], TodoDashboardComponent);
    return TodoDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clrGreen {\r\n    background-color: lightgreen;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.html":
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let todo of todos | async\">\n  <span (click)=\"toogleTodo(todo.id)\" [class.clrGreen]=\"todo.isCompleted\">{{todo.id}}-{{todo.desc}}-{{todo.priority}}-{{lastUpdate | async}}</span>  => <span (click)=\"removeTodo(todo.id)\">Remove Todo</span>\n</li>"

/***/ }),

/***/ "../../../../../src/app/todo-list/todo-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("../../../../../src/app/actions.ts");
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
    function TodoListComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.removeTodo = function (id) {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* REMOVE_TODO */], payload: { todoId: id } });
    };
    TodoListComponent.prototype.toogleTodo = function (id) {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* TOOGLE_TODO */], payload: { todoId: id } });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]])
    ], TodoListComponent);
    return TodoListComponent;
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