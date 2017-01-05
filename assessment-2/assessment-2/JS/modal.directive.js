(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('modalDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/modal.directive.html' ,

          };
        })

})();
