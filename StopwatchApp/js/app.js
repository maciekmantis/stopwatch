angular.module('StopwatchApp', ['ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            window.StatusBar.styleDefault();
        }
    });
})

.controller('ContentCtrl', function ($scope, $ionicModal) {
    $scope.items = [];

    $ionicModal.fromTemplateUrl('new-stopwatch.html', function (modal) {
        $scope.newStopwatchModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.onAdd = function () {
        $scope.newStopwatchModal.show();
    };

    $scope.onCancel = function () {
        $scope.newStopwatchModal.hide();
    };

    $scope.onCreate = function (stopwatch) {
        $scope.items.push({
            title: stopwatch.title
        });
        $scope.newStopwatchModal.hide();
        stopwatch.title = "";
    };

})