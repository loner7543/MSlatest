(function () {
  angular
    .module('frontend')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController($scope, $http,UtilsFunctionsFactory,files) {
    $scope.filenames=files.data;
    var vm = this;

    $scope.profileParams = {
      fileName: "",
      mode:""
    };

    $scope.calcProfile=function () {
      debugger;
      console.log($scope.profileParams.fileName)
      $http({
        method: "POST",
        url: "http://localhost:8080/krugstat/rest/calculateProfile",
        params:$scope.profileParams
      }).then(function (resp) {
          console.log("Профиль", resp)
          $scope.profile=resp.data;
        },
        function (result) {
          console.error(result, result.data);
        });
    }

    $scope.calculateCruglogramme = function () {
      debugger;
      console.log($scope.profileParams.mode)
      $http({
        method: "POST",
        url: "http://localhost:8080/krugstat/rest/calculateCluglogramme",
        params:$scope.profileParams
      }).then(function (resp) {
          console.log("высоты круглограммы", resp)
          $scope.cruglogrammeHeights=resp.data;
        },
        function (result) {
          console.error(result, result.data);
        });
    }

    $scope.uploadCruglogramme = function () {

    }
  }
})();
