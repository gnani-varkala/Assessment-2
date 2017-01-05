(function () {
    'use strict';

    angular
        .module('paymentApp')
        .directive('firstFooterDir',function(){
          return {
            restrict: 'E',
            templateUrl:'VIEW/first-footer.directive.html' ,

          };
        })

})();
