"use strict";

var app = angular.module("scrumdoro", [ "ui.router", "ngRoute", "jsonFormatter", "scrumdoro.controllers", "scrumdoro.services", "scrumdoro.directives" ]);

var appControllers = angular.module("scrumdoro.controllers", [ "scrumdoro.services", "ui.router" ]);

var appDirectives = angular.module("scrumdoro.directives", []);

"use strict";

app.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    var $isTrue = true;
    if ($isTrue) {
        $urlRouterProvider.when("/app", "/app/dashboard");
    }
    $stateProvider.state("debug", {
        url: "/debug",
        templateUrl: "debug.html",
        controller: "debugController"
    }).state("app", {
        url: "/app",
        templateUrl: "application.html",
        controller: "applicationController",
        resolve: {
            test: function() {
                console.log("resolve for app");
            }
        }
    });
    $urlRouterProvider.otherwise("/app");
} ]);

appControllers.config([ "$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("app.dashboard", {
        url: "/dashboard",
        views: {
            content: {
                templateUrl: "partials/dashboard.html",
                controller: "dashboardController"
            }
        }
    }).state("app.projectManager", {
        url: "/projectManager",
        views: {
            content: {
                templateUrl: "partials/projectManager.html",
                controller: "projectController"
            }
        }
    }).state("app.taskManager", {
        url: "/taskManager",
        views: {
            content: {
                templateUrl: "partials/taskManager.html",
                controller: "taskController"
            }
        }
    }).state("app.bugManager", {
        url: "/bugManager",
        views: {
            content: {
                templateUrl: "partials/bugManager.html",
                controller: "bugController"
            }
        }
    });
    $urlRouterProvider.otherwise("/app/dashboard");
} ]);

var appServices = angular.module("scrumdoro.services", []);

"use strict";

appControllers.controller("applicationController", [ "$scope", "$window", "$state", function($scope, $window, $state) {
    console.log("[appplicationCTRL]:Loaded");
    $scope.page.title = "ScrumDoro";
    console.log($state.is("app"));
} ]);

"use strict";

appControllers.controller("bugController", [ "$scope", function($scope) {
    console.log("[bugController]:Loaded");
    $scope.page.title = "Bug Manager";
} ]);

"use strict";

angular.module("scrumdoro").controller("dashboardController", [ "$scope", function($scope) {
    console.log("[dashboardController]:Loaded");
    $scope.page.title = "Dashboard de la mort qui tue";
} ]);

angular.module("scrumdoro").controller("mainController", [ "$scope", "$interval", function($scope, $interval) {
    console.log("[mainController]:Loaded");
    $scope.app = {
        name: "ScrumDoro"
    };
    $scope.page = {
        title: "ScrumDoro"
    };
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var day_tostring = d.getDate();
    var weekday_tostring = weekday[d.getDay()];
    var month_tostring = month[d.getMonth()];
    var year_tostring = d.getFullYear();
    var hours_tostring = d.getHours() < 10 ? 0 + d.getHours() : d.getHours();
    var minutes_tostring = d.getMinutes() < 10 ? 0 + d.getMinutes() : d.getMinutes();
    var seconds_tostring = d.getSeconds() < 10 ? 0 + d.getSeconds() : d.getSeconds();
    $scope.date = {
        weekday: weekday_tostring,
        day: day_tostring,
        month: month_tostring,
        year: year_tostring,
        hours: hours_tostring,
        minutes: minutes_tostring,
        seconds: seconds_tostring
    };
    var tick = function() {
        var d = new Date();
        var day_tostring = d.getDate();
        var hours_tostring = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        var minutes_tostring = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        var seconds_tostring = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
        $scope.date.hours = hours_tostring;
        $scope.date.minutes = minutes_tostring;
        $scope.date.seconds = seconds_tostring;
    };
    $interval(tick, 1e3);
} ]);

"use strict";

appControllers.controller("projectController", [ "$scope", function($scope) {
    console.log("[projectController]:Loaded");
    $scope.page.title = "Project Manager";
} ]);

"use strict";

appControllers.controller("taskController", [ "$scope", function($scope) {
    console.log("[taskController]:Loaded");
    $scope.page.title = "Task Manager";
} ]);