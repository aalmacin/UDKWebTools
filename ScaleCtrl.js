(function() {
  var ScaleCtrl = function($scope, $http) {
    $scope.heading = "UDK Scale Calculator";

    var onScales = function(response) {
      $scope.scales = response.data;
    }

    var onError = function() {
      $scope.error = "Unable to retrieve data.";
    }

    var scalesurl = "scales.json";
    $http.get(scalesurl).then(onScales, onError);

    $scope.totalScaleCount = 0;
    // Keep this private
    $scope.scaleHistory = [];

    $scope.addScale = function(newVal) {
      $scope.totalScaleCount += newVal;
      $scope.scaleHistory.push(newVal);
    };

    $scope.undo = function() {
      if ($scope.scaleHistory.length > 0) {
        var lastCount = $scope.scaleHistory.pop();
        $scope.totalScaleCount -= lastCount;
      }
    }

    $scope.clear = function() {
      var lastCount = 0;
      $scope.totalScaleCount = 0;
      $scope.scaleHistory = [];
    }
  };

  myApp.controller("ScaleCtrl", ["$scope", "$http", ScaleCtrl]);
}());
