(function() {
  var UnrealUnitCtrl = function($scope) {
    $scope.heading = "Unreal Converter";
    $scope.unrealUnit = 0;
    $scope.foot = 0;
    $scope.meter = 0;

    $scope.unrealUpdate = function(val) {
      $scope.foot = 16 * val;
      $scope.meter = 52.5 * val;
    }
  };

  myApp.controller("UnrealUnitCtrl", ["$scope", UnrealUnitCtrl]);
}());
