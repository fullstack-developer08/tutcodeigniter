<div class="card">
<a class="btn btn-primary" href="http://demo.way2programming.com/" target="_blank">Demo</a>
<img src="<?php echo base_url();?>assets/app_structure.PNG"></img>
  <div class="card-header">
    Angular4 with Redux App with Global error concept
  </div>
  <div class="card-body">
    <h4 class="card-title">Package.json</h4>
    <pre class="prettyprint">
// Add Dependencies
"@ngrx/core": "^1.2.0",
"@ngrx/store": "^2.2.3",
    </pre>
    <h4 class="card-title">index.html</h4>
    <pre class="prettyprint">
// Add new Bootstrap4
&lt;!doctype html>
&lt;html lang="en">
&lt;head>
  &lt;meta charset="utf-8">
  &lt;title>AngularCli&lt;/title>
  &lt;base href="/">

  &lt;meta name="viewport" content="width=device-width, initial-scale=1">
  &lt;link rel="icon" type="image/x-icon" href="favicon.ico">
  &lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
&lt;/head>
&lt;body>
&lt;app-root>&lt;/app-root>
&lt;script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">&lt;/script>
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous">&lt;/script>
&lt;script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous">&lt;/script>
&lt;/body>
&lt;/html>
    </pre>
    <h4 class="card-title">app.component.html</h4>
    <pre class="prettyprint">
{{check | async}}
&lt;div class="container">
  &lt;div class="row">
    &lt;div class="col-3">
    &lt;/div>
    &lt;div class="col-6">
      &lt;h4>Redux Application&lt;/h4>
    &lt;/div>
    &lt;div class="col-3">
    &lt;/div>
  &lt;/div>
  &lt;div class="row">
    &lt;div class="col-3">
    &lt;/div>
    &lt;div class="col-6">
      &lt;error-root>&lt;/error-root>
    &lt;/div>
    &lt;div class="col-3">
    &lt;/div>
  &lt;/div>
  &lt;div class="container">
  &lt;div class="row">
    &lt;div class="col-3">
      &lt;button (click)="increment()" class="btn btn-success">Increment&lt;/button>
    &lt;/div>
    &lt;div class="col-6">
      &lt;div class="alert alert-primary" role="alert">Current Count: {{ counter | async }}&lt;/div>
    &lt;/div>
    &lt;div class="col-3">
      &lt;button (click)="decrement()" class="btn btn-danger">Decrement&lt;/button>
    &lt;/div>
  &lt;/div>
  &lt;div class="row">
    &lt;div class="col-3">
    &lt;/div>
    &lt;div class="col-6">
      &lt;button (click)="reset()" class="btn btn-warning">Reset Counter&lt;/button>
    &lt;/div>
    &lt;div class="col-3">
    &lt;/div>
  &lt;/div>
&lt;/div>
&lt;/div>
    </pre>
<h4 class="card-title">app.component.ts</h4>
    <pre class="prettyprint">
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter.reducer';
import { ERROR, CLEAR, SUCCESS } from './reducers/error.reducer';
import { Observable } from 'rxjs';

interface AppState {
	counter: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	counter: Observable&lt;number>;
	error: Observable&lt;string>;
	check: any;

	constructor(private store: Store&lt;AppState>) {
		this.counter = store.select('counter');
		this.error = store.select('error');
	}

	increment() {
		this.store.dispatch({ type: INCREMENT });
		this.counter.subscribe(
			val => {
				if(val >= 10){
					this.store.dispatch({ type: SUCCESS, payload: { message: 'Hey you clicked atleast 10 times, I am happy!' } });
				} else {
					if (val &lt; 0) { 
						this.store.dispatch({ type: ERROR, payload: { message: 'Value can not be less than 0' } });
					} else {
						this.store.dispatch({ type: CLEAR }); 
					}
				}
			}
		)
	}

	decrement() {
		this.store.dispatch({ type: DECREMENT });
		this.counter.subscribe(
			val => { 
				if (val &lt; 0) { 
						this.store.dispatch({ type: ERROR, payload: { message: 'Value can not be less than 0' } });
				} else { 
					if(val >= 10){
						this.store.dispatch({ type: SUCCESS, payload: { message: 'Hey you clicked atleast 10 times Increment button, I am happy!' } });
					} else {
						this.store.dispatch({ type: CLEAR }); 
					}
					
				} 
			}
		)
	}

	reset() {
		this.store.dispatch({ type: RESET });
	}

}
    </pre>
<h4 class="card-title">app.module.ts</h4>
<pre class="prettyprint">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/counter.reducer';
import { errorReducer } from './reducers/error.reducer';
@NgModule({
  declarations: [
    AppComponent, ErrorComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer, error: errorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
</pre>
<h4 class="card-title">error.component.html</h4>
<pre class="prettyprint">
&lt;div *ngIf="error | async">
&lt;div class="alert alert-danger" role="alert" *ngIf="(error | async).action === 'error'">
   {{(error | async).payload}}
&lt;/div>
&lt;div class="alert alert-success" role="alert" *ngIf="(error | async).action === 'success'">
   {{(error | async).payload}}
&lt;/div>
&lt;/div>
</pre>
<h4 class="card-title">error.component.ts</h4>
<pre class="prettyprint">
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
interface AppState {
  counter: number;
}

@Component({
  selector: 'error-root',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
	
	error: Observable&lt;string>;

	constructor(private store: Store&lt;AppState>){
		this.error = store.select('error');
	}
}
</pre>
<h4 class="card-title">location.component.ts</h4>
<pre class="prettyprint">
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './reducers/counter.reducer';
import { ERROR, CLEAR, SUCCESS } from './reducers/error.reducer';
import { Observable } from 'rxjs';

interface AppState {
	counter: number;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class LocationComponent {
	counter: Observable&lt;number>;
	error: Observable&lt;string>;
	check: any;

	constructor(private store: Store&lt;AppState>) {
		this.counter = store.select('counter');
		this.error = store.select('error');
	}

	increment() {
		this.store.dispatch({ type: INCREMENT });
		this.counter.subscribe(
			val => {
				if(val >= 10){
					this.store.dispatch({ type: SUCCESS, payload: { message: 'Hey you clicked atleast 10 times, I am happy!' } });
				} else {
					if (val &lt; 0) { 
						this.store.dispatch({ type: ERROR, payload: { message: 'Value can not be less than 0' } });
					} else {
						this.store.dispatch({ type: CLEAR }); 
					}
				}
			}
		)
	}

	decrement() {
		this.store.dispatch({ type: DECREMENT });
		this.counter.subscribe(
			val => { 
				if (val &lt; 0) { 
						this.store.dispatch({ type: ERROR, payload: { message: 'Value can not be less than 0' } });
				} else { 
					if(val >= 10){
						this.store.dispatch({ type: SUCCESS, payload: { message: 'Hey you clicked atleast 10 times Increment button, I am happy!' } });
					} else {
						this.store.dispatch({ type: CLEAR }); 
					}
					
				} 
			}
		)
	}

	reset() {
		this.store.dispatch({ type: RESET });
	}

}

</pre>
<h4 class="card-title">counter.reducer.ts</h4>
<pre class="prettyprint">
import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
	switch (action.type) {
		case INCREMENT:
			return state + 1;

		case DECREMENT:
			return state - 1;

		case RESET:
			return 0;

		default:
			return state;
	}
}
</pre>
<h4 class="card-title">error.reducer.ts</h4>
<pre class="prettyprint">
import { ActionReducer, Action } from '@ngrx/store';

export const ERROR = 'ERROR';
export const CLEAR = 'CLEAR';
export const SUCCESS = 'SUCCESS';

export function errorReducer(state , action: Action) {
	switch (action.type) {
		case ERROR:{
            return {'action': 'error', 'payload': action.payload.message};
        };
        case CLEAR: {
            return 0;
        };
        case SUCCESS: {
            return {'action': 'success', 'payload': action.payload.message};
        }
		default:
			return state;
	}
}
</pre>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>