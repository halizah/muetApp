angular.module('app.controllers', ['ionic','sw2.ionic.input-clearable', 'ngCordova','autoCompleteModule'])
  
.controller('muetDictionaryCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicPlatform,$rootScope) {
//$scope.searchString = null;
$scope.autoCompleteOptions = {
            minimumChars: 1,
			itemSelected: function (items) {
                fnGoTo(items.item);
            },
            data: function (searchText) {
                searchText = searchText.toUpperCase();

                var objResult = _.filter(MOCK_DATA, function (dataObj) {
                    return dataObj.word.startsWith(searchText);
                });

                return _.pluck(objResult, 'word');
            }
        }
 
 $scope.fnSearch = function(searchString){
	fnGoTo(searchString);
 };
 
 function fnGoTo(searchString)
 {
	 $rootScope.txtSearch = searchString;
	
	//alert("data to send: "+$rootScope.txtSearch);
	$state.go('menu.wordMeaning');
 }
})
   
.controller('wordMeaningCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope) {
	
	var txtSearch = $rootScope.txtSearch;
	var objResult = _.find(MOCK_DATA, function (data) {
                    return data.word === txtSearch;
                });
	//alert("Data from mock " + objResult.definition);
	$scope.txtboxWord = txtSearch;
	$scope.txtboxMeaning = objResult.definition;
	$scope.txtboxMeaningBM = objResult.definitionBM;
	$scope.txtAreaSentence = objResult.sentenceEng;
	$scope.txtAreaSentenceBM = objResult.sentenceBM;
	//var googleTTS = require('google-tts-api');
	if (!$rootScope.initialized) {
    
    $rootScope.initialized = true;
  }
	/*$scope.msgChannel   = 'MySpeech';
	var msgCallback = function(payload) {
    $scope.$apply(function() {
      $scope.messages.push(payload);
    });
    $scope.sayIt(payload.data);
  }; */
	
	$scope.publish = function(txtboxWord)
	{
	 /*Pubnub.publish({
      channel: $scope.msgChannel,
      message: {data:txtboxWord}
	  });  */
	 $scope.sayIt(txtboxWord);
	};
	//Pubnub.subscribe({ channel: [$scope.msgChannel, $scope.prsChannel], message: msgCallback });
	
	$scope.sayIt = function (theText) {
		TTS.speak({
            text: theText,
            locale: 'en-GB',
            rate: 0.75
        }, function () {
        //alert('success');
		}, function (reason) {
        alert("Sorry your phone did not support this feature!" + reason);
		});
   
  };
  
})
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 