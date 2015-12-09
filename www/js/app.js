// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('fo', ['ionic','ngCordova','chinaSdk', 'fo.controllers','fo.services','ionic-toast','tabSlideBox','ngIOS9UIWebViewPatch','fo.Dir'])
.run(function ($ionicPlatform, $rootScope, $location, $timeout, $ionicHistory) {
    
      $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
      //双击退出
    $ionicPlatform.registerBackButtonAction(function (e) {
        //判断处于哪个页面时双击退出
        if ($location.path() == '/tab/tool' || $location.path() == '/tab/base' || $location.path() == '/tab/action'||$location.path() == '/tab/chats') {
            if ($rootScope.backButtonPressedOnceToExit) {
                ionic.Platform.exitApp();
            } else {
                $rootScope.backButtonPressedOnceToExit = true;
                api.toast();
                $cordovaToast.showShortTop('再按一次退出系统');
                setTimeout(function () {
                    $rootScope.backButtonPressedOnceToExit = false;
                }, 2000);
            }
        }else if ($ionicHistory.backView()) {
            $ionicHistory.goBack();
        } else {
            $rootScope.backButtonPressedOnceToExit = true;
            $cordovaToast.showShortTop('再按一次退出系统');
            setTimeout(function () {
                $rootScope.backButtonPressedOnceToExit = false;
            }, 2000);
        }
        e.preventDefault();
        return false;
    }, 101);
    })

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'html/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.action', {
      url: '/action',
      views: {
        'tab-action': {
          templateUrl: 'html/tab-action.html',
          controller: 'ActionCtrl'
        }
      }
    })
    .state('tab.base', {
      url: '/base',
      views: {
        'tab-base': {
          templateUrl: 'html/tab-base.html',
          controller: 'BaseCtrl'
        }
      }
    })
    .state('tab.know', {
      url: '/know',
      views: {
        'tab-know': {
          templateUrl: 'html/tab-know.html',
          controller: 'KnowCtrl'
        }
      }
    })

    .state('newsInfo', {
      url: '/newsInfo/:did',
		      templateUrl: 'html/news/info.html',
		      controller: 'NewsInfoCtrl'
    })
    .state('bookInfo', {
      url: '/bookInfo/:did',
          templateUrl: 'html/book/info.html',
          controller: 'BookInfoCtrl'
  })
  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'html/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('tab.chatsList', {
      url: '/chatsList/:cid',
      views: {
	      'tab-chats': {
		      templateUrl: 'html/chat/list.html',
		      controller: 'ChatsListCtrl'
	      }
      }
    })
    .state('tab.chatInfo', {
      url: '/chatInfo/:did',
	    views: {
		  'tab-chats': {
		      templateUrl: 'html/chat/info.html',
		      controller: 'ChatInfoCtrl'
		      }
	   }
    })
    .state('tab.tool', {
      url: '/tool',
      views: {
        'tab-tool': {
          templateUrl: 'html/tab-tool.html',
          controller: 'ToolCtrl'
        }
      }
    })
  .state('qiuqian', {
      url: '/qiuqian/:qid',
      templateUrl: 'html/tool/qiuqian.html',
      controller: 'qiuqianCtrl'
    })
  .state('qiufo', {
    url: '/qiufo/:toid',
    templateUrl: 'html/act/qiufo.html',
    controller: 'QiufoCtrl'
  })
  .state('reg', {
          url: '/reg',
          templateUrl: 'html/user/reg.html',
          controller: 'userCtrl'
      })
      //用户页面
  .state('login', {
          url: '/login',
          templateUrl: 'html/user/login.html',
          controller: 'userCtrl'
          
      })
  .state('vmobile', {
          url: '/vmobile',
          templateUrl: 'html/user/vmobile.html',
          controller: 'userCtrl'
          
      })
  .state('setpwd', {
        url: '/setpwd',
        templateUrl: 'html/user/setpwd.html',
        controller: 'userCtrl'
        
    })
  .state('booklist', {
        url: '/booklist/:bid',
        templateUrl: 'html/book/list.html',
        controller: 'BookListCtrl'
        
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/action');

});
