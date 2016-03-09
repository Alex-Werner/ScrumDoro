'use strict';

appControllers.controller('applicationController',['$scope','$window','$state',
    function($scope,$window,$state){
        console.log("[appplicationCTRL]:Loaded");
        $scope.page.title="ScrumDoro";

        console.log($state.is('app'));


        //Si on a une company de créer afficher le dashboard
        //$window.location.href = '#/app/dashboard';
        //Sinon affichons l'interface de creation


    }
]);