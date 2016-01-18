'use strict';

angular.module('MyApp.controllers', ['ngStorage'])

.controller('SignupCtrl', 
  function($scope,  $state, DataService, $localStorage, $firebase) {

    
     $scope.user = {};                
     $scope.user.device = ionic.Platform.device();
     $scope.user.date = new Date();
     $scope.user.logcount = 1;

     $scope.save = function() {
        console.log("SignupCtrl(Save) Entered");
        console.log("User Data ")
        console.log($scope.user);
        //DataService.Create($scope.user);
        $localStorage.data1 = $scope.user;
        $localStorage.showtutorial1 = true;
        $state.go('app.dashboard');
     }    
  })

.controller('BookTankCtrl', 
  function($scope, $ionicLoading, $state, $ionicModal, $ionicPopup, $localStorage, $firebase) {
  console.log("BookTankCtrl Entered");

  $scope.BookTank = { name:"Aru Water supply",
                      rate:'Rs 700/-',
                      phone: '8090706050',
                      time: '1 hour',
                      date: new Date()
                };


    // Create the avatar Modal which is used for Avatar changes
  $ionicModal.fromTemplateUrl('templates/BookTanker/booknow.model.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.BookNowmodal = modal;
  });
  
  $ionicModal.fromTemplateUrl('templates/BookTanker/booklater.model.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.BookLaterModal = modal;
  });

  $scope.showBookNow = function() {
    $scope.BookNowmodal.show();
    console.log('show BookNowmodal');
  };

  // Triggered in the login modal to close it
    $scope.closeBookNow = function() {
      console.log('show BookNowmodal');
        $scope.BookNowmodal.hide();
    };  

  $scope.showBookLater = function() {
    $scope.BookLaterModal.show();
    console.log('show BookLatermodal');
  };

  // Triggered in the login modal to close it
    $scope.closeBookLater = function() {
      console.log('show BookNowmodal');
        $scope.BookLaterModal.hide();
    }; 

    $scope.cancleBook = function() {
      console.log("Booking Cancled");
      $state.go('app.booktanker');

    };

      $scope.bookNow = function() {
        console.log("BookNow");
        $scope.BookNowmodal.hide();

        $scope.BookTank = { name:"Aru Water supply",
                      rate:'Rs 700/-',
                      phone: '8090706050',
                      time: '1 hour',
                      now: true,
                      date: new Date()
                };
        console.log('Booking Tanker ');
        $state.go('app.bookingdetails');        
      };
      $scope.bookLater = function() {
        console.log("BookLater");
        $scope.BookLaterModal.hide();

        $scope.BookTank = { name:"Aru Water supply",
                      rate:'Rs 700/-',
                      phone: '8090706050',
                      time: '1 hour',
                      now:false,
                      date: new Date()
                };
        console.log('Booking Tanker ');
        $state.go('app.bookingdetails');        
      }      

     var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(12.9715987, 77.5945627),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }


    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      $scope.bookNow = function() {
        console.log("BookNow");
        $scope.BookNowmodal.hide();

        $scope.BookTank = { name:"Aru Water supply",
                      rate:'Rs 700/-',
                      phone: '8090706050',
                      time: '1 hour'
                };
        console.log('Booking Tanker ');
        $state.go('app.bookingdetails');        
      }
  })

.controller('PaymentCtrl', function($scope, $ionicModal, DataService, $rootScope) {

  console.log("PaymentCtrl Entered");
  $scope.payments = DataService.getAllPayment();
  console.log("GetAll payment");
  console.log($scope.payments );


  $ionicModal.fromTemplateUrl('templates/Payment/addPayment.model.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.PaymentModal = modal;
  });

  $scope.showPaymentModal = function() {
    $scope.PaymentModal.show();
    console.log('show PaymentModal');
  };

  // Triggered in the login modal to close it
    $scope.closeBookNow = function() {
      console.log('show PaymentModal');
        $scope.PaymentModal.hide();
    };  

  $scope.addPayment = function() {
    console.log("addPayment");
  }

  $scope.deletePayment = function() {
    console.log("deletePayment");
  }

})

.controller('HistoryCtrl', function($scope, DataService, $rootScope) {

  $scope.history = DataService.getAllHistory();
  console.log("getAllHistory");
  console.log($scope.historys);

})

.controller('SettingCtrl', function($scope, DataService, $rootScope) {

  $scope.settings = DataService.getAllSettings();
  console.log("getAllSettings");
  console.log($scope.historys);
})
.controller('NotificationCtrl', function($scope, DataService, $rootScope) {

  $scope.notification = DataService.getAllNotification();
  console.log("getAllNotification");
  console.log($scope.notification);
})
.controller('ProfileCtrl', function($scope, $localStorage, $firebase, $ionicModal, DataService, $rootScope) {
  $scope.loggedUser = {};
  $scope.enableEdit = false;

  $scope.loggedUser = $localStorage.data1;

  console.log("I am in ProfileCtrl "+ localStorage.getItem('loggedUser'));

    // Create the avatar Modal which is used for Avatar changes
  $ionicModal.fromTemplateUrl('templates/profile/avatar.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.avatarmodal = modal;
  });
  $scope.showAvatar = function() {
    $scope.avatarmodal.show();
    console.log('show avatar');
  }
  // Triggered in the login modal to close it
    $scope.closeAvatar = function() {
        $scope.avatarmodal.hide();
    };  


    // Get Image for Avatar
    $scope.getImage = function(cameraType) {

      console.log('Inside image control for type ' + cameraType);

        if (cameraType == 'CAMERA') {
          console.log("Getting from camera");
        } else {
          console.log("Getting from Gallery");
        }
    }
  $scope.edit = function() {
    $scope.enableEdit = true;
  }
  $scope.save = function() {
    DataService.updateUsers($scope.loggedUser);
    $scope.enableEdit = false;
  }  

})
.controller('DashboardCtrl', 
  function($scope, $state, $localStorage, $firebase) {
    

      console.log('DashboardCtrl: "Entered');
      $scope.showtutorial1 = $localStorage.showtutorial1;
      $scope.data1 = $localStorage.data1; 
      
      if(typeof $scope.showtutorial1 === "undefined"){
        console.log('inside the intro');
        $state.go('intro');
      }
      else if(typeof $scope.data1 === "undefined"){
        $state.go('signup');
        console.log('inside the signup');
      }
      else{
        var connectedRef = new Firebase("https://appdevfactory.firebaseio.com/.info/connected");
        var reflink = new Firebase("https://appdevfactory.firebaseio.com/eagleeye/userdata");
        $scope.ref = $firebase(reflink);
        var obj = $firebase(reflink);
        if(typeof $localStorage.store === "undefined"){
          connectedRef.on("value", function(snap) {
            if (snap.val() === true) {
                $localStorage.store = true;
                $scope.ref.$add($scope.data1);
            } 
          });
        }
        $state.go('app.dashboard');
        console.log('inside the dashboard');
      }
  });

