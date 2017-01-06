(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('saveWarningDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/saveWarning.directive.html' ,

          };
        })

})();
