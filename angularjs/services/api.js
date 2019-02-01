function apiFunction($http, $cookies) {

}

angular.module('api', [])
  .service('_api', ['$http', '$cookies', apiFunction]);