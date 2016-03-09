'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('scrumdoro', [
    'ui.router','ngRoute',
    'jsonFormatter',
    'scrumdoro.controllers','scrumdoro.services','scrumdoro.directives'

]);
