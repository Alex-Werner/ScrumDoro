'use strict';

appControllers.controller('bugController',['$scope',
    function($scope){
        console.log("[bugController]:Loaded");
        $scope.page.title="Bug Manager";

    }
]);