<div class="card">
  <div class="card-header">
    Reactive Form
  </div>
  <div class="card-body">
    <p class="card-text">First we need to import below dependencies inside form component</p>
    <pre class="prettyprint">
import { FormGroup, FormControl } from '@angular/forms';
        </pre>
    <p>then we need to create the instance of the FormGroup using new keyword. see given below images.</p>
    <img src="<?php echo base_url();?>assets/images/FormGroupInstanceInfo.png" />
    <pre class="prettyprint">
form = new FormGroup({
    username : new FormControl(),
    password: new FormControl()
});
      </pre>
  </div>
  <hr/>
  <div class="card-body">
    <h4 class="card-title">What is abstract control</h4>
    <img src="<?php echo base_url();?>assets/images/abstractControl.png" />
    <p>In object oriented programming language we have concept call inheritance. we have multiple classes that should have common
      behaviour and property instead of this implementing common behaviour and property in multiple places we defined that
      once in parent or base class and those other class inherit this property and behaviour from base class.</p>
    <p>In angular abstract control is a base class of FormControl and FormGroup, AbstractControl simply inherit these property
      from it's parent.</p>
  </div>
  <hr/>
  <div class="card-body">
    <h4 class="card-title">If we get below error</h4>
    <p>can't bind to 'formGroup' since it isn't a known property of 'form'.</p>
    <p>Reactive form define inside ReactiveFormsModule so we need to import it before using reactive form.</p>
    <pre class="prettyprint">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<p class="highlight">import { FormsModule, ReactiveFormsModule } from '@angular/forms';</p> // need to add this line
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule // need to change this import section.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
      </pre>
  </div>
  <hr/>
  <div class="card-body">
    <h4 class="card-title">Validation in Reactive form</h4>
    <p>In html5 we have required, minlength="", maxlength="", pattern="" but in angular we need not to use this.</p>
    <p>to work with validation in angular we need to import first Validators from @angular/form</p>
    <pre class="prettyprint">
import { FormGroup, FormControl, Validators } from '@angular/forms';
    </pre>
    <p>validator we need to use inside the FormControl so check below image</p>
    <img src="<?php echo base_url();?>assets/images/validatorsImport.png"/>
    <p>if you see above image then FormControl wants that formState as optional parameter, formState nothing but predefined value, second parameter is validator function, here validation will go.</p>
    <pre class="prettyprint">
// when validatorFn is have one validation then we need to follow below example
  form = new FormGroup({
    username : new FormControl('', Validators.required),
  });

// when we have more than one validation then we need to give to validatorFn[]
  form = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('', [ Validators.required, Validators.minLength(6)])
  });
    </pre>
    <p>in html we need to add below code</p>
<pre class="prettyprint">
&lt;div *ngIf="form.get('username').touched && form.get('username').invalid" class="alert alert-danger">
          username is required.
&lt;/div>   
</pre>
<p>in above code we want to remove form.get('username') for this we have one approach</p>
<pre class="prettyprint">
get username() {
    return this.form.get('username');
}
</pre>
<p>now our html will be look like this</p>
<pre class="prettyprint">
&lt;div *ngIf="username.touched && username.invalid" class="alert alert-danger">
          username is required.
&lt;/div>
</pre>
  </div>
  <hr/>
  <div class="card-body">
    <h4 class="card-title">implementing custom validators</h4>
    <p>go to angular.io website and search for validatorFn function.</p>
    <img src="<?php echo base_url();?>assets/images/validatorFn-search-in-angular-website.png"/>
    <p>If you will see above image than you would found ValidatorFn and AsyncValidatorFn two interface.</p>
    <p>ValidatorFn function is an interface as it indicated by the I in aboved attached image.</p>
    
    <p>If you will check above image than we found that ValidatorFn interface define inside @angular/form.</p>
    <p>below image shows structure of interface.</p>
    <img src="<?php echo base_url();?>assets/images/ValidatorFn-structure-of-interface.PNG"/>
    <p>to make custom validator we need to follow above structure. It means any function that takes control as a parameter and type of the control is AbstractControl and return value is ValidationErrors or null.</p>
    <pre class="prettyprint">
import { AbstractControl,ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static canNotContainSpace (control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) 
            return { canNotContainSpace: true }
        return null;
    }
}      
    </pre>
    <p>In above example we have took any random name for function and just giving control type of AbstractControl and return type is ValidatorErrors or null, then it will be a custom validator function.</p>
    <img src="<?php echo base_url();?>assets/images/control-value-type-of-any.png"/>
    <p>If you will see above image control.value is type of any but i want to treat as a string so that used control.value as string</p>
    <p>just go to again in angular.io website and search for ValidationErrors</p>
    <img src="<?php echo base_url();?>assets/images/validationErrors-on-angular.PNG"/>
    <p>In above image ValidationErrors represents the object that has the key and value pairs, key is type of string and value can be anything.</p>
  </div>
  <hr/>
    <div class="card-body">
        <div class="blog-post">
            <h2 class="blog-post-title">Asynchronous operation</h2>
            <!--<p class="blog-post-meta">January 1, 2014 by</p>-->
            <!--<p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
            <hr>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <pre><code>Example code block</code></pre>
            <h3>Sub-heading</h3>
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>-->
            <ul>
              <li>Asynchronous means non blocking.</li>
              <li>In asynchronous operation we need to call the server to validate given value.</li>
              <li>when we call the server we get the response with some delay, it should be 1s, 2s or 20 second depending on the connection speed.</li>
              <li>In situations like that the process whereas executing our code doesn't want to block while waiting for the result coming back from the server.</li>
              <li>because if the process blocks then the user can not interact to browser so that process is going to call the server behind the scene and when the result is ready is going to display to the user.</li>
              <li>once again the process that executes the code doesn't block while waiting.</li>
              <li>calling the server is not only asynchronous operations, setTimeOut() function is also the asynchnous operation.</li>
            </ul>
          </div>
    </div>
     <hr/>
    <div class="card-body">
        <div class="blog-post">
            <h2 class="blog-post-title">Asynchronous Validators</h2>
            <ul>
              <li></li>
            </ul>
          </div>
    </div>
</div>