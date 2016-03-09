angular.module('scrumdoro').controller('mainController',['$scope','$interval',
    function($scope,$interval){
        console.log("[mainController]:Loaded");

        $scope.app = {
            name:'ScrumDoro'
        }
        $scope.page = {
            title:"ScrumDoro"
        }


        var d = new Date();
        var weekday = new Array(7);
        weekday[0]=  "Sunday";
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
        var hours_tostring = d.getHours()<10?0+d.getHours():d.getHours();
        var minutes_tostring = d.getMinutes()<10?0+d.getMinutes():d.getMinutes();
        var seconds_tostring =d.getSeconds()<10?0+d.getSeconds():d.getSeconds();
        $scope.date={
            weekday:weekday_tostring,
            day:day_tostring,
            month: month_tostring,
            year: year_tostring,
            hours: hours_tostring,
            minutes:minutes_tostring,
            seconds:seconds_tostring
        }

        var tick = function() {
            var d = new Date();
            var day_tostring = d.getDate();
            var hours_tostring = d.getHours()<10?'0'+d.getHours():d.getHours();
            var minutes_tostring = d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes();
            var seconds_tostring =d.getSeconds()<10?'0'+d.getSeconds():d.getSeconds();

            $scope.date.hours = hours_tostring;
            $scope.date.minutes = minutes_tostring;
            $scope.date.seconds = seconds_tostring;
        }
        $interval(tick, 1000);


    }
]);