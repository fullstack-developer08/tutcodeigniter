<div class="card">
	<div class="card-header">
		User Input
	</div>
	<div class="card-body">
		<h4 class="card-title">Binding to user Input Events</h4>
        <table>
            <li>To bind to a DOM event, surround the DOM event name in parentheses and assign a quoted template statement to it.</li>
            <li>The following example shows an event binding that implements a click handler:
                <button (click)="onClickMe()">Click me!</button>
            </li>
        </table>
        <h4 class="card-title">Get user input from the $event object</h4>
            DOM events carry a payload of information that may be useful to the component.
        <table>
            <li>The properties of an $event object vary depending on the type of DOM event.</li>
            <li>Target property of event object refer to element.
                <pre>
template: ` <input (keyup)="onKey($event)"> <p>{{values}}</p> `
	
	export class KeyUpComponent_v1 {
  		values = '';
		onKey(event: any) { // without type info
    			this.values += event.target.value + ' | ';
 	 	}
}

                </pre>
            </li>
        </table>
        <h4 class="card-title">Type the $event</h4>
        <li>The previous example was casts the $event as an any type.
            <pre>
export class KeyUpComponent_v1 {
  values = '';
  onKey(event: KeyboardEvent) { // with type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}
            </pre>
        </li>
        <li>The OnKey method more clearly expresses what it expects from the template and how it interprets the event.</li>
        <li>https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement</li>
        <h4 class="card-title">Passing $event is a dubious practice</h4>
        <li>When we passing $event , it pass entire DOM to the method.</li>
        <li>It can't extract information without knowing more like below example
            <pre>$event.target.value</pre>
        </li>
        <li>We have to explicitly defined what we want.</li>
        <li>use template reference variables to address this problem</li>
        <h4 class="card-title">Get user input from a template reference variable</h4>
        <li>To declare a template reference variable, precede an identifier with a hash (or pound) character (#).
            <img src="<?php echo base_url();?>assets/images/keyU.png"/>
        </li>
        <li>The above example won't work at all unless you bind to an event.
            <img src="<?php echo base_url();?>assets/images/keyU2.png"/>
        </li>
        <li>A nice aspect of this approach is that the component gets clean data values from the view. It no longer requires knowledge of the $event and its structure.</li>
        <h4 class="card-title">Key event filtering (with key.xyz)</h4>
        <li><img src="<?php echo base_url();?>assets/images/keyU3.png"/></li>
        <li>Exp:
            1. Keyup.enter<br/>
            2. Keyup.shift<br/>
            3. Keyup.backspace<br/>
            4. Keyup.delete<br/> 
            etc
        </li>
        <li>The (keyup) event handler hears every keystroke.</li>
        <li>Bind to Angular's keyup.enter pseudo-event instead of $event.keyCode .</li>
	</div>
	<div class="card-footer text-muted">

	</div>
</div>



<div class="card">
	<div class="card-header">
		Template Driven Form
	</div>
	<div class="card-body">
		<h4 class="card-title">ngForm</h4>
        <li>Angular automatically creates and attaches an NgForm directive to the &lt;form> tag.</li>
        <li>The NgForm directive supplements the form element with additional features. It holds the controls you created for the elements with an ngModel directive and name attribute, and monitors their properties, including their validity. It also has its own valid property which is true only if every contained control is valid.</li>
        <h4 class="card-title">Track control state and validity with ngModel</h4>
        <li>Using ngModel in a form gives you more than just two-way data binding. It also tells you if the user touched the control, if the value changed, or if the value became invalid.</li>
        <li>Angular comes with a directive ngForm that matches the <form> selector, so in fact, our form element already has an instance of ngForm applied. ngForm is there for a reason. It provides us information about the current state of the form including:</li>
        <h4 class="card-title">ngModel Directive</h4>
        <li>In order to register form controls on an ngForm instance, we use the ngModel directive. In combination with a name attribute, ngModel creates a form control abstraction for us behind the scenes. Every form control that is registered with ngModel will automatically show up in form.value and can then easily be used for further post processing.</li>
	</div>
	<div class="card-footer text-muted">

	</div>
</div>


<div class="card">
	<div class="card-header">
		Reactive Form
	</div>
	<div class="card-body">
		<h4 class="card-title"></h4>
       
	</div>
	<div class="card-footer text-muted">

	</div>
</div>