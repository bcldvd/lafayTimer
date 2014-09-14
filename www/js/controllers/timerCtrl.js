app.controller('timerCtrl', function($scope, genericServices, $element, $compile) {
    $scope.projects = ['15', '30', '45', '1:00', '2:00', '3:00'];
    $scope.timerActive = false;
    $scope.timeRemaining = 0;

    $scope.startTimer = function(time) {
        $scope.timerActive = true;
        $scope.$broadcast ('timer-set-countdown', genericServices.hmsToSeconds(time), true);
        $scope.$broadcast('timer-start');
    };

    $scope.stopTimer = function() {
        $scope.timerActive = false;
        $scope.$broadcast('timer-stop');
        $scope.$broadcast ('timer-set-countdown', 0, true);
    };

    $scope.$on('timer-stopped', function (event, data){
        $scope.timerActive = false;
        // TODO : Add sound when over (not when user purposly ends it ?)
    });
});