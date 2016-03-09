'use strict';
app.config(
        ['$stateProvider','$urlRouterProvider',
            function($stateProvider,$urlRouterProvider){
                var $isTrue = true;
                if($isTrue){
                    $urlRouterProvider.when('/app', '/app/dashboard');

                }

                //$urlRouterProvider
                //    .when('/app',['$state',function($state){
                //        console.log('when app');
                //    }])
                $stateProvider
                    .state('debug',{
                        url:'/debug',
                        templateUrl:'debug.html',
                        controller:'debugController'
                    })
                    .state('app',{
                        url:'/app',
                        templateUrl:'application.html',
                        controller:'applicationController',
                        resolve:{
                            test:function(){
                                console.log('resolve for app');
                            }
                        }
                    })
                $urlRouterProvider
                    .otherwise('/app');

            }

        ]
    );/*
 resolve:{
 'userData':['$scope',function($scope){
 console.log("[app.router.js - App resolved]");
 }]
 }*/