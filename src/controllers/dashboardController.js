'use strict';

angular.module('scrumdoro').controller('dashboardController',['$scope',
    function($scope){
        console.log("[dashboardController]:Loaded");
        $scope.page.title="Dashboard de la mort qui tue";

    }
]);