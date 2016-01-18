'use strict';

angular.module('MyApp', [
  'ionic',
  'firebase',
  'MyApp.controllers',
  'MyApp.services'
])
.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/sidemenu.html'
      
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
    })
    
    
    .state('intro', {
      url: '/intro',
      templateUrl: 'templates/intro.html'
      
    })

    
    .state('app.dashboard', {
      url: '/dashboard', 
      views: {
        menuContent: {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashboardCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about', 
      views: {
        menuContent: {
          templateUrl: 'templates/about.html'
          
        }
      }
    })
    
    .state('app.payment', {
      url: '/payment', 
      views: {
        menuContent: {
          templateUrl: 'templates/Payment/payment.html',
          controller: 'PaymentCtrl'
          
        }
      }
    })
    .state('app.history', {
      url: '/history', 
      views: {
        menuContent: {
          templateUrl: 'templates/History/history.html',
          controller: 'HistoryCtrl'
          
        }
      }
    })

    .state('app.notifications', {
      url: '/notifications', 
      views: {
        menuContent: {
          templateUrl: 'templates/notifications.html'
          
        }
      }
    })

    .state('app.booktanker', {
      url: '/booktanker', 
      views: {
        menuContent: {
          templateUrl: 'templates/BookTanker/bookTanker.html', 
          controller: 'BookTankCtrl'
                 
        }
      }
    })

    .state('app.help', {
      url: '/help', 
      views: {
        menuContent: {
          templateUrl: 'templates/help.html'
          
        }
      }
    })
    .state('app.profile', {
      url: '/profile', 
      views: {
        menuContent: {
          templateUrl: 'templates/Profile/profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('app.settings', {
      url: '/settings', 
      views: {
        menuContent: {
          templateUrl: 'templates/settings.html'
          
        }
      }
    })

    .state('app.bookingdetails', {
      url: '/bookingdetails', 
      views: {
        menuContent: {
          templateUrl: 'templates/BookTanker/bookingdetails.html',
          controller: 'BookTankCtrl'
        }
      }
    })



    .state('app.alert6', {
      url: '/alert6', 
      views: {
        menuContent: {
          templateUrl: 'templates/alert6.html'
          
        }
      }
    })

    .state('app.alert7', {
      url: '/alert7', 
      views: {
        menuContent: {
          templateUrl: 'templates/alert7.html'
          
        }
      }
    })

    .state('app.alert8', {
      url: '/alert8', 
      views: {
        menuContent: {
          templateUrl: 'templates/alert8.html'
          
        }
      }
    });

  $urlRouterProvider.otherwise('/app/dashboard');
})
.run(function($rootScope, $state, $ionicPlatform) {

   $ionicPlatform.registerBackButtonAction(function (event) {
    if($state.current.name=="app.dashboard"){
      navigator.app.exitApp();
    }
    else {
      navigator.app.backHistory();
    }
  }, 100);
   
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory 
    // bar above the keyboard for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, 
                                                 fromState, fromParams, error) {
      $state.go(error);
    });
  });
})

angular.module('MyApp.controllers', []);
