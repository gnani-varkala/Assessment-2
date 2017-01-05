(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('firstSectionDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/first-section.directive.html' ,

          };
        })

})();
