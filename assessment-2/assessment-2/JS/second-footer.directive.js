(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('secondFooterDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/second-footer.directive.html' ,

          };
        })

})();
