<div class="panel panel-primary">
    <a class="btn btn-primary" href="http://demo.way2programming.com/error-interceptor.html" target="_blank">Demo</a>
	<div class="panel panel-content">
		<pre class="prettyprint">
&lt;html>

&lt;head>&lt;/head>

&lt;body>
    &lt;div ng-app="myApp" ng-controller="formCtrl">
        &lt;div ng-repeat="errorMessage in data.errorMessages track by $index">{{errorMessage}}&lt;/div>
        &lt;form name="myForm" novalidate>
            First Name:&lt;br>
            &lt;input type="text" name="firstName" ng-model="user.firstName">&lt;br> Last Name:&lt;br>
            &lt;input type="text" ng-model="user.lastName">
            &lt;br>&lt;br>
            &lt;button ng-click="reset()">RESET&lt;/button>
            &lt;input type="submit" ng-click="submit()">Submit&lt;/input>
        &lt;/form>
        &lt;p>form = {{user}}&lt;/p>
        &lt;p>master = {{master}}&lt;/p>
    &lt;/div>
    &lt;script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js">&lt;/script>
    &lt;script>
        var app = angular.module('myApp', []);
        app.controller('formCtrl', function ($scope, $log, $http, errorInterceptor) {
            $scope.data = {
                errorMessages: []
            };
            $scope.master = { firstName: "John", lastName: "Doe" };
            $scope.reset = function () {
                $scope.user = angular.copy($scope.master);
            };
            $scope.reset();
            $scope.$on('clearMessages', function () {
                $scope.data.errorMessages=[];
            });
            $scope.$on('errorMessages', function (event, data) {
                $scope.data.errorMessages.push(data.message);
            });
            $scope.submit = function () {
                $http.get('example/').then(function (res) {
                    return res.data;
                });
            };
        });

        app.factory('errorInterceptor', ['$rootScope', '$log', function ($rootScope, $log) {
            return {
                response: function (response) {
                    $log.log('test1');
                    var errors = (response.data && response.data.payload) ? response.data.payload.errors || [] : [];
                    if (errors instanceof Array) {
                        $rootScope.$broadcast('clearMessages');
                        errors.forEach(function (data) {
                            $rootScope.$broadcast('errorMessages', data);
                        });
                    }
                    return response;
                }
            };
        }]);

        app.config(['$httpProvider', function ($httpProvider) {
            $httpProvider.interceptors.push('errorInterceptor');
        }]);

    &lt;/script>
&lt;/body>

&lt;/html>
       </pre>
	</div>
</div>