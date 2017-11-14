(function () {
  angular
    .module('frontend')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController($scope, $http,UtilsFunctionsFactory,files) {
    $scope.filenames=files.data;
    var vm = this;

    $scope.calcProfile=function () {
      $http({
        method: "POST",
        url: "http://localhost:8080/krugstat/rest/calculateProfile",
        params:{
          fileName:"BEM_120.DAT"
        }
      }).then(function (resp) {
          console.log("Профиль", resp)
          $scope.profile=resp.data;
        },
        function (result) {
          console.error(result, result.data);
        });
    }

    $scope.calculateCruglogramme = function () {

    }

    $scope.uploadCruglogramme = function () {

    }
  }
})();
