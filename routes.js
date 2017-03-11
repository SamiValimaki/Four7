angular.module('four7', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')
      $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './templates/home/home.html'
        })
          .state('classes', {
            url: '/classes',
            templateUrl: './templates/classes/classes.html'
        })
          .state('pricing',{
            url: '/pricing',
            templateUrl: './templates/pricing/pricing.html'
        })
          .state('trainers',{
            url: '/trainers',
            templateUrl: './templates/trainers/trainers.html'
        })
          .state('video',{
            url: '/video',
            templateUrl: './templates/video/video.html'
        })
          .state('contact',{
            url: '/contact',
            templateUrl: './templates/contact/contact.html'
        })
  });
