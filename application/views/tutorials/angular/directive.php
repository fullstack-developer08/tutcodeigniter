<div class="card">
	<div class="card-header">
		Directives
	</div>
	<div class="card-body">
		<div class="blog-post">
			<h2 class="blog-post-title">*ngIf</h2>
			<ul>
				<li>*ngIf we used to view and hide the part of the code.</li>
			</ul>
            <p>The below example used *ngIf to view and hide the part of the html</p>
            <h3>app.component.html</h3>
            <pre class="prettyprint">
&lt;div *ngIf="courses.length > 0">
  List of courses
&lt;/div>
&lt;div *ngIf="courses.length == 0">
  No Courses
&lt;/div>
            </pre>
            <h3>app.component.ts</h3>
            <pre class="prettyprint">
export class AppComponent {
  title = 'app';
  courses = [1, 2];
}
            </pre>
            <h2 class="blog-post-title">*ngIf with else</h2>
            <ul>
				<li>*ngIf with else is used to view and hide the part of the code.</li>
                <li>we need to define template varibale with #(pound) sign</li>
                <li>instead of div we need to use ng-template.</li>
                <li>inside the *ngIf we need to add else after semicolon.</li>
			</ul>
            <h3>app.component.ts</h3>
            <pre class="prettyprint">
export class AppComponent {
  title = 'app';
  courses = [1, 2];
}
            </pre>
            <h3>app.component.html</h3>
            <pre class="prettyprint">
&lt;div *ngIf="courses.length > 0; else noCourses">
  List of courses
&lt;/div>
&lt;ng-template #noCourses>
  No Courses
&lt;/ng-template>
            </pre>
            <h2 class="blog-post-title">*ngIf with else (with one more better approach)</h2>
            <ul>
				<li>we have three keyword *ngIf, then and else these are the main keyword to execute if and else.</li>
                <li>then keyword is if part and else no need to give explanation. </li>
			</ul>
            <h3>app.component.html</h3>
            <pre class="prettyprint">
&lt;div *ngIf="courses.length > 0; then listCourses else noCourses">&lt;/div>
&lt;ng-template #listCourses>
  List of courses
&lt;/ng-template>
&lt;ng-template #noCourses>
  No Courses
&lt;/ng-template>
            </pre>
            <h3>app.component.ts</h3>
            <pre class="prettyprint">
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses = [1, 2];
}
            </pre>
            <h2 class="blog-post-title">hidden with property binding [hidden]</h2>
            <h3>app.component.ts</h3>
            <pre class="prettyprint">
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses = [1, 2];
}

            </pre>
            <h3>app.component.html</h3>
            <pre class="prettyprint">
&lt;div [hidden]="courses.length == 0">
  List of courses
&lt;/div>
&lt;div [hidden]="courses.length > 0">
  No Courses
&lt;/div>
            </pre>
		</div>
        <div class="alert alert-success">
        Note: *ngIf is the better approach as compair to hidden property binding.
        <br/>
        </div>
        <img src="/assets/images/ngIfandhidden.PNG" alt="*ngIf and hidden which one good approach">
        <br/><br/><br/>
        <h2 class="blog-post-title">ngSwitchCase Directive with [ngSwitch] property binding</h2>
        <pre class="prettyprint">
//app.component.html 

&lt;div [ngSwitch]="viewType">
  &lt;div *ngSwitchCase="'map'">
    Map View
  &lt;/div>
  &lt;div *ngSwitchCase="'list'">
    list View
  &lt;/div>
  &lt;div *ngSwitchCaseDefault>
    list View
  &lt;/div>
&lt;/div>


//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewType = 'list';
}

        </pre>
        <h2 class="blog-post-title">*ngFor Directive</h2>
        <ul>
            <li>It is used for render the elements</li>
            <li>If we search for *ngForOf in angular website then we will able to get more info like</li>
            <li>we can get index value</li>
            <li>we can get first object value</li>
            <li>we can get even objects value</li>
            <li>we can get odd objects value</li>
            <li><img src="/assets/images/ngForOf.PNG"/></li>
        </ul>
        <p>Example:</p>
        <pre class="prettyprint">
export class AppComponent {
  courses = [
    {id: '1', name: "course1"},
    {id: '2', name: "course2"},
    {id: '3', name: "course3"},
  ];
}

&lt;ul>
  &lt;li *ngFor="let course of courses">{{course.name}}&lt;/li>
&lt;/ul>

// with index value
&lt;ul>
  &lt;li *ngFor="let course of courses; index as i">{{ i }} - {{course.name}}&lt;/li>
&lt;/ul>

//with first value
&lt;ul>
  &lt;li *ngFor="let course of courses; first as isFirst">{{course.name}} &lt;span *ngIf="isFirst">First element&lt;/span>&lt;/li>
&lt;/ul>
        </pre>

        
	</div>
</div>