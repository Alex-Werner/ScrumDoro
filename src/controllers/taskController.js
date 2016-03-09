'use strict';

appControllers.controller('taskController',['$scope',
    function($scope){
        console.log("[taskController]:Loaded");
        $scope.page.title="Task Manager";

    }
]);