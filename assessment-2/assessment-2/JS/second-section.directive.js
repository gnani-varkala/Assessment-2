(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('secondSectionDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/second-section.directive.html' ,

          };
        })

})();
