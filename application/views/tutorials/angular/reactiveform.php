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
    <p>In angular abstract control is a base class of FormControl and FormGroup, AbstractControl siply inherit thease property
      from it's parent.</p>
  </div>
  <hr/>
  <div class="card-body">
    <h4 class="card-title">If we get below error</h4>
    <p>can't bind to 'formGroup' since it isn't a known property of 'form'.</p>
    <p>Reactive form define inside ReactiveFormsModule so we need to inmport it before using reactive form.</p>
    <pre class="prettyprint">
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // need to add this line
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
    <p>if you see above image then FormControl wants that formState as option parameter, formState nothing but predefined value, second parameter is validator function, here validation will go.</p>
    <pre>
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
<pre>
&lt;div *ngIf="form.get('username').touched && form.get('username').invalid" class="alert alert-danger">
          username is required.
&lt;/div>   
</pre>
<p>in above code we want to remove form.get('username') for this we have one approach</p>
<pre>
get username() {
    return this.form.get('username');
}
</pre>
<p>now our html will be look like this</p>
<pre>
&lt;div *ngIf="username.touched && username.invalid" class="alert alert-danger">
          username is required.
&lt;/div>
</pre>
  </div>
  <hr/>
  <div class="card-body">
    <h4 class="card-title">implementing custom validators</h4>
   
  </div>
</div>