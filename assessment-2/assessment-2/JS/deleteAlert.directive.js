(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('deleteDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/deleteAlert.directive.html' ,

          };
        })

})();
