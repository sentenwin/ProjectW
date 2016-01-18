'use strict';
angular.module('MyApp.services', ['ngStorage'])

.factory('AuthService', function(DataService) {
  // Might use a resource here that returns a JSON array

  var offers = [
    { title: 'BigBazzer', id: 1, img: 'bigbazzer.jpg'},
    { title: 'PizzaHut', id: 2, img: 'pizza-hut.jpg' },
    { title: 'MakeMyTrip', id: 3, img: 'make_my_trip.jpg' },
    { title: 'FoodPanda', id: 4, img: 'foodpanda.jpg' },
    { title: 'Coffee Day', id: 5, img: 'cafe-coffee.jpg' },
    { title: 'Redbus', id: 6, img: 'redbus.jpg' }
  ];
  

  return {
    loginAuth: function(authData) {
      var userObj = {};
      console.log("Hi i am in loginAuth");
      console.log(authData);
      console.log(DataService.getAllUsers());
      userObj = DataService.getUserByUsername(authData.username);
      console.log(userObj);
      if (userObj != null) {
        if (userObj.password === authData.password) {
            console.log("valid user");
            console.log(userObj);
            return userObj;
        }
      } else {
        console.log("Invalid login");
        return null;
      }    
      
    },  
    signupAuth: function(authData) {
      console.log("Hi i am in signupAuth");
      console.log(authData);
      DataService.createUsers(authData);
      return true;
    },    
    forgotPassword: function(authData) {
      console.log("Hi i am in forgotPassword");
      console.log(authData);
      return true;
    }
  };
})


.factory('DataService', function() {
  // Might use a resource here that returns a JSON array

  var userData = [
    { username: 'aaa@gmail.com', id: 1, phone: '9876543210', name: 'Senthil-alpha', password: 'asdfghjkl', img: 'avatar.png'},
    { username: 'bbb@gmail.com', id: 2, phone: '9876543210', name: 'Senthil-beta', password: 'asdfghjkl', img: 'avatar.png' },
    { username: 'ccc@gmail.com', id: 3, phone: '9876543210', name: 'Senthil-gamma', password: 'asdfghjkl', img: 'avatar.png' },
    { username: 'ddd@gmail.com', id: 4, phone: '9876543210', name: 'Senthil-theta', password: 'asdfghjkl', img: 'avatar.png' },
    { username: 'eee@gmail.com', id: 5, phone: '9876543210', name: 'Senthil-omega', password: 'asdfghjkl',img: 'avatar.png' },
    { username: 'fff@gmail.com', id: 6, phone: '9876543210', name: 'Senthil-pi', password: 'asdfghjkl', img: 'avatar.png' }
  ];

  var History = [
    { id: 1, title: '15-Dec-2015', supplier: 'Aru Water supply', water:'10000Ltr', amount: '1200' },
    { id: 2, title: '16-Nov-2015', supplier: 'Saro Water supply', water:'10000Ltr', amount: '1200' },
    { id: 2, title: '14-Oct-2015', supplier: 'Saro Water supply', water:'10000Ltr', amount: '700' },
    { id: 2, title: '15-Sep-2015', supplier: 'Aru Water supply', water:'10000Ltr', amount: '800'  },
    { id: 2, title: '15-Aug-2015', supplier: 'Saro Water supply', water:'10000Ltr', amount: '1200' },
    { id: 2, title: '12-July-2015', supplier: 'Aru Water supply', water:'10000Ltr', amount: '1200'  }
  ];

  var PaymentProviders = [
      {id: 1, name:"Card Payment"},
      {id: 2, name:"PayTm"},
      {id: 3, name:"Airtel Money"},
      {id: 4, name:"PayU Money"}
  ]

  var setting = [
      {id: 1, name:"Card Payment"},
      {id: 2, name:"PayTm"},
      {id: 3, name:"Airtel Money"},
      {id: 4, name:"PayU Money"}
  ]
    var Notification = [
      {id: 1, name:"Card Payment"},
      {id: 2, name:"PayTm"},
      {id: 3, name:"Airtel Money"},
      {id: 4, name:"PayU Money"}
  ]
  // Private Functions
    function getUsersDB() {
        console.log("connecting to DB:Get");
        if(!localStorage.getItem('usersDB')){
            //window.localStorage['usersDB', JSON.stringify([])];
            localStorage.setItem('usersDB', JSON.stringify([]));
        }

        return JSON.parse(localStorage.getItem('usersDB'));
        //return JSON.parse(window.localStorage['usersDB']);
    }

    function setUsersDB(users) {
         console.log("connecting to DB:Set");

         localStorage.setItem('usersDB', JSON.stringify(users));
         //window.localStorage['usersDB', JSON.stringify(users)];
    }
  // Private Functions
    function getPaymentDB() {
        console.log("connecting to PaymentDB:Get");
        if(!localStorage.getItem('paymentDB')){
            //window.localStorage['usersDB', JSON.stringify([])];
            localStorage.setItem('paymentDB', JSON.stringify([]));
        }

        return JSON.parse(localStorage.getItem('paymentDB'));
        //return JSON.parse(window.localStorage['usersDB']);
    }

    function setPaymentDB(payment) {
         console.log("connecting to PaymentDB:Set");

         localStorage.setItem('paymentDB', JSON.stringify(payment));
         //window.localStorage['usersDB', JSON.stringify(users)];
    }
  return {
    all: function() {
      return chats;
    },
    getAllUsers: function() {
      return getUsersDB();
    }, 
    getUserByUsername: function(username) {
      var userData = getUsersDB();
      for (var i = 0; i < userData.length; i++) {
        if (userData[i].username == username) {
          return userData[i];
        }
      }
      return null;
    }, 
    createUsers: function(user) {
      var users = getUsersDB();
      users.push(user);
      setUsersDB(users);
      console.log("Testing localstorage");
      console.log(getUsersDB());
    },  
    updateUsers: function(user) {
      var users = getUsersDB();
      for (var i = 0; i < users.length; i++) {
        if (users[i].id === parseInt(user.id)) {
          users[i].username = user.username;
          users[i].phone = user.phone;
          users[i].name = user.name;
          users[i].password = user.password;
          users[i].img = user.img;
          setUsersDB(users);
          console.log(users[i]);
        }
      }           
      console.log("Update function");
      console.log(getUsersDB());
    },  


    getAllHistory: function() {
      console.log("Hi i am in getAllHistory service");
      return History;
    },  
 
    getAllPayment: function() {
      console.log("Hi i am in getAllOffers service ");
      console.log(PaymentProviders);
      return PaymentProviders;
    },  
    getAllSettings: function() {
      console.log("Hi i am in getAllSettings service ");
      console.log(Settings);
      return Settings;
    }, 
    getAllNotification: function() {
      console.log("Hi i am in getAllNotification service ");
      console.log(Notification);
      return Notification;
    },         
    getPayment: function(paymentId) {
      //payments = getPaymentDB();
      for (var i = 0; i < PaymentProviders.length; i++) {
        if (PaymentProviders[i].id === parseInt(paymentId)) {
          return PaymentProviders[i];
        }
      }
      return null;
    },    


    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
