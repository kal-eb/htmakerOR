'use strict';

/**
 * @ngdoc function
 * @name htmakerOrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the htmakerOrApp
 */
angular.module('htmakerOrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
