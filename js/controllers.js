angular.module('app.controllers', ['ionic', 'ngCordova','autoCompleteModule'])
  
.controller('muetDictionaryCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicPlatform,$rootScope) {
//$scope.searchString = null;
$scope.autoCompleteOptions = {
            minimumChars: 1,
            data: function (searchText) {
                searchText = searchText.toUpperCase();

                var colors = _.filter(MOCK_DATA, function (colorss) {
                    return colorss.name.startsWith(searchText);
                });

                return _.pluck(colors, 'name');
            }
        }
 
 $scope.fnSearch = function(searchString){
	$rootScope.txtSearch = searchString;
	
	//alert("data to send: "+$rootScope.txtSearch);
	$state.go('menu.wordMeaning');
 };

})
   
.controller('wordMeaningCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope) {
	
	var txtSearch = $rootScope.txtSearch;
	var objResult = _.find(MOCK_DATA, function (data) {
                    return data.name === txtSearch;
                });
	//alert("Data from mock " + objResult.definition);
	$scope.txtboxWord = txtSearch;
	$scope.txtboxMeaning = objResult.definition;
	$scope.txtAreaSentence = objResult.sentenceEng;
})
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 