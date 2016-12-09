angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.lupitaSLetters', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lupitaSLetters.html',
        controller: 'lupitaSLettersCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/about',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.visitUs', {
    url: '/learnmore',
    views: {
      'side-menu21': {
        templateUrl: 'templates/visitUs.html',
        controller: 'visitUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.writeMe', {
    url: '/compose',
    views: {
      'side-menu21': {
        templateUrl: 'templates/writeMe.html',
        controller: 'writeMeCtrl'
      }
    }
  })

  .state('menu.thanks', {
    url: '/success',
    views: {
      'side-menu21': {
        templateUrl: 'templates/thanks.html',
        controller: 'thanksCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});