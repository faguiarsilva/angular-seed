'use strict';

angular.module('myApp.cadastro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
    templateUrl: 'module/cadastro/views/cadastro.html',
    controller: 'CadastroCtrl'
  });
}])

.controller('CadastroCtrl', [function() {

}]);