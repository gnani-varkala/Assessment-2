(function() {
    'use strict';

    angular
        .module('paymentApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'jsonService'];

    function mainCtrl($scope, jsonService) {
        var paymentDetails = [];
        $scope.myDetails = [];
        $scope.fstSection = true;
        $scope.paymentType = [];
        $scope.accountingType = [];
        $scope.frequencyType = [];
        $scope.paymentTiming = [];
        $scope.paymentDue = [];
        $scope.paymentDueDay = [];
        $scope.growthType = [];
        $scope.amountBasis = [];
        $scope.details = {};
        jsonService.paymentJson('JSON/jsons/c_paymentType.json').then(function(data) {
            paymentDetails = data;

            for (var i = 0; i < paymentDetails.length; i++) {
                var array = [];
                array = (paymentDetails[i].path).split("\\");
                $scope.paymentType.push(array[array.length - 1]);
            }
        });
        $scope.typeOfPayment = "";
        $scope.selectPaymentType = function(type) {
            $scope.details.typeOfPayment = type;
        }



        jsonService.paymentJson('JSON/jsons/l_AccountingType.json').then(function(data) {
            var accountingType = data.result;
            for (var i = 0; i < accountingType.length; i++) {
                $scope.accountingType.push(accountingType[i].value);
            }
        });
        $scope.selectAccountType = function(type) {
            $scope.details.accountType = type;

        }



        jsonService.paymentJson('JSON/jsons/c_frequecyType.json').then(function(data) {
            var frequencyType = data;
            for (var i = 0; i < frequencyType.length; i++) {
                var frequencyarray = [];
                frequencyarray = (frequencyType[i].path).split("\\");
                $scope.frequencyType.push(frequencyarray[frequencyarray.length - 1]);
            }
        });
        $scope.selectfrequencyType = function(type) {
            $scope.details.typeOffrequency = type;
        }



        jsonService.paymentJson('JSON/jsons/l_PaymentTiming.json').then(function(data) {
            var paymentTiming = data.result;
            for (var i = 0; i < paymentTiming.length; i++) {
                $scope.paymentTiming.push(paymentTiming[i].value);
            }
        });
        $scope.selectpaymentTiming = function(type) {
            $scope.details.paymentTime = type;

        }

        jsonService.paymentJson('JSON/jsons/l_PaymentDueOn.json').then(function(data) {
            var paymentDue = data.result;
            for (var i = 0; i < paymentDue.length; i++) {
                $scope.paymentDue.push(paymentDue[i].value);
            }
        });
        $scope.selectpaymentDue = function(type) {
            $scope.details.paymentDueDate = type;
        }

        jsonService.paymentJson('JSON/jsons/l_PaymentDueDay.json').then(function(data) {
            var paymentDueDay = data.result;
            for (var i = 0; i < paymentDueDay.length; i++) {
                $scope.paymentDueDay.push(paymentDueDay[i].value);
            }
        });
        $scope.selectpaymentDueDay = function(type) {
            $scope.details.paymentDueday = type;
        }


        jsonService.paymentJson('JSON/jsons/l_GrowthType.json').then(function(data) {
            var growthType = data.result;
            for (var i = 0; i < growthType.length; i++) {
                $scope.growthType.push(growthType[i].value);
            }
        });
        $scope.selectGrowthType = function(type) {
            $scope.details.typeOfGrowth = type;
        }



        jsonService.paymentJson('JSON/jsons/l_ChargeAmountBasis.json').then(function(data) {
            var amountBasis = data.result;
            for (var i = 0; i < amountBasis.length; i++) {
                $scope.amountBasis.push(amountBasis[i].value);
            }
        });
        $scope.selectAmountBasis = function(type) {
            $scope.details.basisAmount = type;
        }

        // $scope.firstPage=function(){
        //   $scope.fstSection=false;
        // }

        $scope.generate = function(details) {
            $scope.myDetails.push(details);
            $scope.details = {};
            $('#gridSystemModal').modal('hide');
            $scope.fstSection=true;
        }

        $scope.delete = function(index){
          $scope.myDetails.splice(index,1);
        }

        $scope.edit=function(editDetails){
          $('#gridSystemModal').modal('show');
          $scope.details = editDetails;
        }
    }
})();
