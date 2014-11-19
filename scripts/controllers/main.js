'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Hans programmiert ein einfaches Barchart Diagram',
      'AngularJS',
      'Karma'
    ];
  });
