(function() {
    'use strict';

    angular
        .module('paymentApp')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = ['$scope', 'jsonService'];

    function mainCtrl($scope, jsonService) {

      $('#dateRangePicker')
            .datepicker({
               format: 'mm/dd/yyyy',
            })

        var paymentDetails = [];
        $scope.display = false;
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
        $scope.saveShow = true;
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
            if(type == "Other"){
              $scope.display=true;
            }
            else{
              $scope.display=false;
            }
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



        $scope.generate = function(details) {
            var flagCheck =false;
            var index = -1;

            for(var i=0;i<$scope.myDetails.length;i++){
              if($scope.myDetails[i].payType == details.typeOfPayment){
                flagCheck=true;
                index = i;
                break;
              }
            }
            if(flagCheck){
              $scope.myDetails[index].data.push(angular.copy(details));
            }else{
              var payDetails ={};
              payDetails.payType=details.typeOfPayment;
              payDetails.data = [];
              payDetails.data.push(angular.copy(details));
              $scope.myDetails.push(payDetails)

            }

            $scope.details = {};
            $('#gridSystemModal').modal('hide');
            $scope.fstSection=true;
        }

        $scope.delete = function(parent,index){
          $scope.newIndex = index;
          $scope.newParent = parent;
          $('#new-modal').modal('show');
        }
        $scope.deleteConform = function(){
          $scope.myDetails[$scope.newParent].data.splice($scope.newIndex,1);
          $('#new-modal').modal('hide');
        }
        var x;
        $scope.edit=function(parent,index){

          console.log($scope.myDetails);
          $scope.saveShow = false;
          $('#gridSystemModal').modal('show');
          $scope.details = angular.copy($scope.myDetails[parent].data[index]);
          $scope.parentIndex= parent;
          $scope.index=index;
        }

        $scope.save =function(){
          var editedDetails = angular.copy($scope.details);
          $scope.myDetails[$scope.parentIndex].data[$scope.index] = editedDetails;
          $('#gridSystemModal').modal('hide');
          $scope.details = {};
          $scope.saveShow = true;
          $scope.fstSection=true;
        }

        $scope.warning=function(){
          if($scope.saveShow == false) {
            $('#warning-modal').modal('show');
          }
        }
        $scope.unSave=function(){
          $('#warning-modal').modal('hide');
          $scope.details = angular.copy($scope.myDetails[$scope.parentIndex].data[$scope.index]);
          $scope.fstSection=false;
        }

        $scope.close=function(){
          $scope.details = {};
          $scope.fstSection=true;
          $scope.saveShow == true;
        }

        $scope.cancelWarning = function(){
          $scope.fstSection=true;
        }

        $scope.ValidationCheck = function(){;
          $scope.isChecked=true;
          // if($scope.isChecked){
          //   $scope.fstSection=true;
          // }
          // else{
          //   $scope.fstSection=false;
          // }
        }

        // $scope.value = function(frequency){
        //   console.log(frequency);
        //   if(frequency == "Other"){
        //     $scope.display = true;
        //   }
        // }
    }
})();
