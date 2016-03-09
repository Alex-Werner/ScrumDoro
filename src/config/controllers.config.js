appControllers.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('app.dashboard', {
            url: '/dashboard',
            views: {
                'content': {
                    templateUrl: 'partials/dashboard.html',
                    controller: 'dashboardController'
                }
            }
        })
        .state('app.projectManager', {
            url: '/projectManager',
            views: {
                'content': {
                    templateUrl: 'partials/projectManager.html',
                    controller: 'projectController'
                }
            }
        })
        .state('app.taskManager', {
            url: '/taskManager',
            views: {
                'content': {
                    templateUrl: 'partials/taskManager.html',
                    controller: 'taskController'
                }
            }
        })
        .state('app.bugManager', {
            url: '/bugManager',
            views: {
                'content': {
                    templateUrl: 'partials/bugManager.html',
                    controller: 'bugController'
                }
            }
        })
    $urlRouterProvider.otherwise('/app/dashboard');

}]);