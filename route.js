var module = angular.module("myApp", ['ngRoute', 'angular.backtop']);

module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'home.html',
            controller: 'myCtrl'

        }).
        when('/bio', {
            templateUrl: 'portfolio.html',
            controller: 'myCtrl'
        }).
        when('/interest', {
            templateUrl: 'about.html',
            controller: 'myCtrl'

        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'myCtrl'

        }).
        when('/blog', {
            templateUrl: 'blog.html',
            controller: 'myCtrl'

        }).
        when('/single-post', {
            templateUrl: 'single-post.html',
            controller: 'myCtrl'

        }).
        when('/projects', {
            templateUrl: 'single-project.html',
            controller: 'myCtrl'

        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);

module.controller("myCtrl", ['$scope',
    function($scope) {
        $scope.images = [{}, {}, {}, {}];
    }
]);