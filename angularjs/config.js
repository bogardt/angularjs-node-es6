
var linkoscope = angular
.module('apgv', [
  'ui.router',
  'oc.lazyLoad',
  'ngCookies',
  'ngSanitize',
  'api'
])
.run(function ($rootScope, $state) {
  $rootScope.$state = $state;
});


linkoscope.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$ocLazyLoadProvider',
function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {

  $urlRouterProvider.otherwise('/home');

  $ocLazyLoadProvider.config({
    debug: false
  });

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: homeCtrl
    })

    ;

}]);