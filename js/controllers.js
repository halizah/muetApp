angular.module('app.controllers', ['ionic', 'ngCordova','autoCompleteModule'])
  
.controller('muetDictionaryCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$ionicPlatform) {
$scope.searchString = null;
$scope.autoCompleteOptions = {
            minimumChars: 1,
            data: function (searchText) {
                searchText = searchText.toUpperCase();

                var colors = _.filter(MOCK_CSS_COLORS, function (color) {
                    return color.name.startsWith(searchText);
                });

                return _.pluck(colors, 'name');
            }
        }
 
 $scope.fnSearch = function(){
	$state.go('menu.wordMeaning');
 };

})
   
.controller('wordMeaningCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 