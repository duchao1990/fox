angular.module('fo.controllers', [])
.controller('ContentCtrl', ['$scope','$ionicSideMenuDelegate', function($scope,$ionicSideMenuDelegate){
}])
// .controller('BookCtrl', ['$scope','$stateParams','BookSer', function($scope,$stateParams,BookSer){
// 	$scope.groups=BookSer.navlist();
// 	$scope.toggleGroup = function(group) {
//     group.show = !group.show;
//   };
//   $scope.isGroupShown = function(group) {
//     return group.show;
//   };
// }])
.controller('BookInfoCtrl', ['$scope','$stateParams','BookSer','shareSer','$ionicActionSheet', function($scope,$stateParams,BookSer,shareSer,$ionicActionSheet){
	var did=$stateParams.did;
	$scope.bookinfo=BookSer.bookinfo({id:did});
			$scope.QQshare=function () {
				$scope.url='http://www.zhongfox.com/fo/detail_'+did+'.html';
				$scope.stitle=$scope.bookinfo.title;
				$scope.desc=$scope.bookinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToQQ($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WXshare=function () {
				$scope.url='http://www.zhongfox.com/fo/detail_'+did+'.html';
				$scope.stitle=$scope.bookinfo.title;
				$scope.desc=$scope.bookinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WFshare=function () {
				$scope.url='http://www.zhongfox.com/fo/detail_'+did+'.html';
				$scope.stitle=$scope.bookinfo.title;
				$scope.desc=$scope.bookinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
}])

.controller('newTuiCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:0}).$promise.then(function(success) { 
		$scope.newTuimaxid=success.maxid;
		$scope.newTuininid=success.ninid;
		$scope.newTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.newslist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.newTuininid,id:0}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.newTuilist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.newTuininid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:0}).$promise.then(function(success) { 
		$scope.newTuimaxid=success.maxid;
		$scope.newTuininid=success.ninid;
		$scope.newTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };


}])
.controller('newsCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:1}).$promise.then(function(success) { 
		$scope.newsmaxid=success.maxid;
		$scope.newsninid=success.ninid;
		$scope.newslist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.newsninid,id:1}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.newslist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.newsninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:1}).$promise.then(function(success) { 
		$scope.newsmaxid=success.maxid;
		$scope.newsninid=success.ninid;
		$scope.newslist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('TalkCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:55}).$promise.then(function(success) { 
		$scope.Talkmaxid=success.maxid;
		$scope.Talkninid=success.ninid;
		$scope.Talklist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.Talkninid,id:55}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Talklist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Talkninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:55}).$promise.then(function(success) { 
		$scope.Talkmaxid=success.maxid;
		$scope.Talkninid=success.ninid;
		$scope.Talklist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('ResearchCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
	NewsSer.newslist({id:30}).$promise.then(function(success) { 
		$scope.Researchmaxid=success.maxid;
		$scope.Researchninid=success.ninid;
		$scope.Researchlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.Researchninid,id:30}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Researchlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Researchninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:30}).$promise.then(function(success) { 
		$scope.Researchmaxid=success.maxid;
		$scope.Researchninid=success.ninid;
		$scope.Researchlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('RitualCrtl', ['$scope','NewsSer','$timeout', function ($scope,NewsSer,$timeout) {
		NewsSer.newslist({id:39}).$promise.then(function(success) { 
		$scope.Ritualmaxid=success.maxid;
		$scope.Ritualninid=success.ninid;
		$scope.Rituallist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.newslist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      NewsSer.newslist({ninid:$scope.Ritualninid,id:39}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Rituallist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Ritualninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   NewsSer.newslist({id:39}).$promise.then(function(success) { 
		$scope.Ritualmaxid=success.maxid;
		$scope.Ritualninid=success.ninid;
		$scope.Rituallist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('foTuiCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:0}).$promise.then(function(success) { 
		$scope.foTuimaxid=success.maxid;
		$scope.foTuininid=success.ninid;
		$scope.foTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.booklist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.foTuininid,id:0}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.foTuilist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.foTuininid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:0}).$promise.then(function(success) { 
		$scope.foTuimaxid=success.maxid;
		$scope.foTuininid=success.ninid;
		$scope.foTuilist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };


}])
.controller('foStartCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:1}).$promise.then(function(success) { 
		$scope.foStartmaxid=success.maxid;
		$scope.foStartninid=success.ninid;
		$scope.foStartlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.foStartninid,id:1}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.foStartlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.foStartninid=success.ninid;
					$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:1}).$promise.then(function(success) { 
		$scope.foStartmaxid=success.maxid;
		$scope.foStartninid=success.ninid;
		$scope.foStartlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('wuChanCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:7}).$promise.then(function(success) { 
		$scope.wuChanmaxid=success.maxid;
		$scope.wuChanninid=success.ninid;
		$scope.wuChanlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.wuChanninid,id:7}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.wuChanlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.wuChanninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:7}).$promise.then(function(success) { 
		$scope.wuChanmaxid=success.maxid;
		$scope.wuChanninid=success.ninid;
		$scope.wuChanlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('StoreCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
	BookSer.booklist({id:12}).$promise.then(function(success) { 
		$scope.Storemaxid=success.maxid;
		$scope.Storeninid=success.ninid;
		$scope.Storelist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.Storeninid,id:12}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.Storelist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.Storeninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:12}).$promise.then(function(success) { 
		$scope.Storemaxid=success.maxid;
		$scope.Storeninid=success.ninid;
		$scope.Storelist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('jieLvCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
		BookSer.booklist({id:23}).$promise.then(function(success) { 
		$scope.jieLvmaxid=success.maxid;
		$scope.jieLvninid=success.ninid;
		$scope.jieLvlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.booklist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.jieLvninid,id:23}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.jieLvlist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.jieLvninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:23}).$promise.then(function(success) { 
		$scope.jieLvmaxid=success.maxid;
		$scope.jieLvninid=success.ninid;
		$scope.jieLvlist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('chanDaoCrtl', ['$scope','BookSer','$timeout', function ($scope,BookSer,$timeout) {
		BookSer.booklist({id:18}).$promise.then(function(success) { 
		$scope.chanDaomaxid=success.maxid;
		$scope.chanDaoninid=success.ninid;
		$scope.chanDaolist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
		//$scope.lengths=$scope.booklist.length;
	});

	$scope.loadMore = function(){
	    $timeout(function(){
	      BookSer.booklist({ninid:$scope.chanDaoninid,id:18}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.chanDaolist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.chanDaoninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	   BookSer.booklist({id:18}).$promise.then(function(success) { 
		$scope.chanDaomaxid=success.maxid;
		$scope.chanDaoninid=success.ninid;
		$scope.chanDaolist=success.list;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };

}])
.controller('ChatsCtrl', ['$scope','$timeout','ChatSer', function($scope,$timeout,ChatSer){
	$scope.groups=ChatSer.navlist();
}])
.controller('ChatsListCtrl', ['$scope','$stateParams','ChatSer','$timeout', function($scope,$stateParams,ChatSer,$timeout){
	var cid=$stateParams.cid;
	ChatSer.chatslist({id:cid}).$promise.then(function(success) { 
		$scope.maxid=success.maxid;
		$scope.ninid=success.ninid;
		$scope.chatslist=success.list;
		$scope.title=success.ftitle;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	$scope.loadMore = function(){
	    $timeout(function(){
	      ChatSer.chatslist({ninid:$scope.ninid,id:cid}).$promise.then(function(success) {

	              angular.forEach(success.list, function(value, key) {
	                $scope.chatslist.push(value);
	              });
	              $timeout(function(){$scope.more=success.more;},2000);
	              $scope.chanDaoninid=success.ninid;
$scope.$broadcast("scroll.infiniteScrollComplete");
	          });
	    },500);
  }
    $scope.doRefresh = function() {
	ChatSer.chatslist({id:cid}).$promise.then(function(success) { 
		$scope.maxid=success.maxid;
		$scope.ninid=success.ninid;
		$scope.chatslist=success.list;
		$scope.title=success.ftitle;
		$timeout(function(){$scope.more=success.more;},2000);
	});
	    $scope.$broadcast("scroll.refreshComplete");
	  };
}])

.controller('NewsInfoCtrl', ['$scope','$stateParams','NewsSer','$ionicActionSheet','shareSer', function($scope,$stateParams,NewsSer,$ionicActionSheet,shareSer){
	var did=$stateParams.did;
	$scope.newsinfo=NewsSer.newsinfo({id:did});
	console.log($scope.newsinfo);
		$scope.QQshare=function () {
				$scope.url='http://www.zhongfox.com/news/detail_'+did+'.html';
				$scope.stitle=$scope.newsinfo.title;
				$scope.desc=$scope.newsinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToQQ($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WXshare=function () {
				$scope.url='http://www.zhongfox.com/news/detail_'+did+'.html';
				$scope.stitle=$scope.newsinfo.title;
				$scope.desc=$scope.newsinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WFshare=function () {
				$scope.url='http://www.zhongfox.com/news/detail_'+did+'.html';
				$scope.stitle=$scope.newsinfo.title;
				$scope.desc=$scope.newsinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
}])
.controller('UserCtrl', ['$scope', '$state','userSer','ionicToast',function($scope,$state,userSer,ionicToast){
	$scope.RegForm=function () {
		userSer.reg({username:$scope.Reg.mobile,password:$scope.Reg.password,email:$scope.Reg.email}).$promise.then(function(success) {
			if (success.code==0) {
				 ionicToast.show(success.msg, 'middle',false, 3000);
			}else{
				$state.go('login');
			}
		}, function(error) {
			ionicToast.show('网络不给力!', 'middle',false, 3000);
		});
	}

	$scope.loginForm=function() {
		userSer.login({username:$scope.Reg.mobile,password:$scope.Reg.password}).$promise.then(function(success) {
			if (success.code==0) {
				 ionicToast.show(success.msg, 'middle',false, 3000);
			}else{
				$state.go('tab.indexli');
			}
		}, function(error) {
			ionicToast.show('网络不给力!', 'middle',false, 3000);
		});
	}
	$scope.sendsms=function () {
		userSer.sendsms({mobile:$scope.goVerify.mobile}).$promise.then(function(success) {
			if (success.code==0) {
				 ionicToast.show(success.msg, 'middle',false, 2000);
			}else{
				ionicToast.show(success.msg, 'middle',false, 1500);
				$scope.vcode=success.vcode;
				$scope.uid=success.uid;
			}
		}, function(error) {
			ionicToast.show('网络不给力!', 'middle',false, 3000);
		});
	}


	$scope.ToVcode=function() {
		var vcode=$scope.vcode;
		if (vcode===$scope.goVerify.vcode) {
			$state.go('setpwd');
		};
	}

	$scope.setpwd=function() {
		$scope.setPwdForm = function() {
	      var newpwd=$scope.setPwd.newpwd;var confpwd=$scope.setPwd.confpwd;var uid=$scope.uid;
	      if (newpwd!==confpwd) {
	         ionicToast.show('两次输入密码不一样!', 'middle',false, 2000);
	      }else{
	        userSer.setPwd({newpwd:newpwd,uid:uid}).$promise.then(function(success) {
	         if (success.code==1) {
	          ionicToast.show(success.msg, 'middle',false, 1000);
	          $state.go('userlogin');
	         } else{
	          ionicToast.show(success.msg, 'middle',false, 3000);
	         }
	        }, function(error){
	          ionicToast.show('网络不给力', 'middle',false, 3000);
	       });
	      }
      };
	}
	

}])

.controller('ToolCtrl', ['$scope','ToolSer','$ionicHistory', function($scope,ToolSer,$ionicHistory){
  //突变选择服务

}])
.controller('qiuqianCtrl', ['$scope','$stateParams','ToolSer','$ionicModal','$ionicHistory','$cordovaDeviceMotion','$cordovaVibration','$timeout', function($scope,$stateParams,ToolSer,$ionicModal,$ionicHistory,$cordovaDeviceMotion,$cordovaVibration,$timeout){
    $scope.qid=$stateParams.qid;
var onShake = function () {
  alert('我要了');
};
shake.startWatch(onShake, 10);
    $ionicModal.fromTemplateUrl('html/tool/jieqian.html', function(modal) {
          $scope.modal = modal;
        }, {
          animation: 'slide-in-up',
          focusFirstInput: true
        });


}])
.controller('JqModalCtrl', ['$scope','ToolSer','$ionicHistory', function ($scope,ToolSer,$ionicHistory) {
	var qid= localStorage.getItem("qid");
	$scope.modalInfo=ToolSer.qianInfo({qid:qid});
	$scope.hideModal = function() {
      $scope.modal.hide();
      $ionicHistory.goBack(-1);
    };
    $scope.openActionSheet = function() {
			$scope.url='http://www.tiantianfo.com/issue/detail_'+did+'.html';
			$scope.stitle=$scope.chatinfo.title;
			$scope.desc=$scope.chatinfo.description;
			$scope.imgurl='http://www.tiantianfo.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: '<center class="balanced"><i class="positive iconfont font25 icon-qq"></i></center>'},
                {text: '<center class="assertive"><i class="energized iconfont font25 icon-qqkongjian"></i></center>'},
                {text: '<center class="assertive"><i class="assertive iconfont font25 icon-weixin"></i></center>'},
                {text: '<center class="assertive"><i class="balanced iconfont font25 icon-pengyouquan"></i></center>'},
            ],
            cancelText: '取消',
            cancel: function() {
                // add cancel code..
            },
            buttonClicked: function (index) {
                if (index == 0) {
                    shareSer.shareToQQ($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
                } else if(index==1){
                    shareSer.QZshareNews($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
                }else if(index==2){
                   shareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
                }else if(index==3){
                   shareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
                }
            }
        });
    }

}])
.controller('ActionCtrl', ['$scope', function($scope){
  //突变选择服务
}])

.controller('BaseCtrl', ['$scope', function($scope){
  //突变选择服务
}])
.controller('KnowCtrl', ['$scope', function($scope){
  //突变选择服务
}])

.controller('ChatInfoCtrl', ['$scope','$stateParams','ChatSer','$ionicActionSheet','shareSer', function($scope,$stateParams,ChatSer,$ionicActionSheet,shareSer){
	var did=$stateParams.did;
	$scope.chatinfo=ChatSer.chatinfo({id:did});
		$scope.QQshare=function () {
				$scope.url='http://www.zhongfox.com/issue/detail_'+did+'.html';
				$scope.stitle=$scope.chatinfo.title;
				$scope.desc=$scope.chatinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToQQ($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WXshare=function () {
				$scope.url='http://www.zhongfox.com/issue/detail_'+did+'.html';
				$scope.stitle=$scope.chatinfo.title;
				$scope.desc=$scope.chatinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToWechat($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
		$scope.WFshare=function () {
				$scope.url='http://www.zhongfox.com/issue/detail_'+did+'.html';
				$scope.stitle=$scope.chatinfo.title;
				$scope.desc=$scope.chatinfo.description;
				$scope.imgurl='http://www.zhongfox.com/Uploads/Picture/2015-10-21/5627adecf039a.jpg';
			shareSer.shareToFriends($scope.url, $scope.stitle, $scope.desc, $scope.imgurl);
		}
}])

.controller('QiufoCtrl', ['$scope','$stateParams','$interval','$state','$timeout','$ionicModal','$rootScope', function($scope,$stateParams,$interval,$state,$timeout,$ionicModal,$rootScope){
	$scope.toid=$stateParams.toid;
	var caifu={id:1,name:'南无虚空藏菩萨',img:'image/fo/1.jpg'};
	var jiank={id:2,name:'南无药师琉璃光如来',img:'image/fo/4.jpg'}
	var pinga={id:3,name:'南无地藏王菩萨',img:'image/fo/7.jpg'}
	var qiuzi={id:4,name:'南无送子观世音菩萨',img:'image/fo/10.jpg'}
	var xueye={id:5,name:'南无文殊菩萨',img:'image/fo/13.jpg'}
	var yinyu={id:6,name:'南无观世音菩萨',img:'image/fo/16.jpg'}
	var shiye={id:7,name:'南无大势至菩萨',img:'image/fo/19.jpg'}
	var xiuxi={id:8,name:'南无释迦摩尼佛',img:'image/fo/22.jpg'}
	if($scope.toid==1){$scope.list=caifu}else if($scope.toid==2){$scope.list=jiank}else if($scope.toid==3){$scope.list=pinga}else if($scope.toid==4){$scope.list=qiuzi}
	else if($scope.toid==5){$scope.list=xueye}else if($scope.toid==6){$scope.list=yinyu}else if($scope.toid==7){$scope.list=shiye}else if($scope.toid==8){$scope.list=xiuxi}
		$scope.gzimg='bottom.png';
		$scope.xiangYes=false;
		$scope.baifo=function() {
 			 var audio = document.getElementById('myaudio'); 
			 if(audio!==null){             
			  if(audio.paused)                     {                 
			      audio.play();//audio.play();// 这个就是播放  
			  }else{
			   audio.pause();// 这个就是暂停
			  }
 			} 
		}
		$scope.shangx=function() {
			$scope.xiangYes=true;
		}
	$scope.goaction=function () {
		var audio = document.getElementById('myaudio'); 
		 audio.pause();
		 $state.go('tab.action');
	}
	$scope.qiyuan = function() {
          $scope.modal.show();
        };
    $scope.qiuqian =function (qid) {
    	localStorage.setItem('qid',qid);
    	$state.go('qiuqian');
    }
    $ionicModal.fromTemplateUrl('modal.html', function(modal) {
          $scope.modal = modal;
        }, {
          animation: 'slide-in-up',
          focusFirstInput: true
        });

}])
  .controller('ModalCtrl', function($scope, $ionicActionSheet, $ionicPopup) {
  	 $scope.huanyuan=window.localStorage.qylist;
    $scope.hideModal = function() {
      $scope.modal.hide();
    };
    $scope.removeModal = function() {
      $scope.modal.remove();
    };
    $scope.QYinfoForm=function () {
    	window.localStorage.qylist=$scope.QYinfo.qiyuan;
 		$scope.modal.hide();
    }
    $scope.huany=function () {
    	window.localStorage.qylist='';
    }
    $scope.openActionSheet = function() {
      $ionicActionSheet.show({

        // The various non-destructive button choices
        buttons: [
          { text: 'Share' },
          { text: 'Move' },
        ],

        // The text of the red destructive button
        destructiveText: 'Delete',

        // The title text at the top
        titleText: 'Modify your album',

        // The text of the cancel button
        cancelText: 'Cancel',

        // Called when the sheet is cancelled, either from triggering the
        // cancel button, or tapping the backdrop, or using escape on the keyboard
        cancel: function() {
        },

        // Called when one of the non-destructive buttons is clicked, with
        // the index of the button that was clicked. Return
        // "true" to tell the action sheet to close. Return false to not close.
        buttonClicked: function(index) {
          return true;
        },

        // Called when the destructive button is clicked. Return true to close the
        // action sheet. False to keep it open
        destructiveButtonClicked: function() {
          return true;
        }
      });
    };

    $scope.openPopup = function() {
      $ionicPopup.alert({
       title: 'Hey!',
       content: 'Don\'t do that!'
      }).then(function(res) {});
    };

  })

//定义常用全局变量
.run(['$rootScope',function ($rootScope) {
  $rootScope.serUrl="http://www.zhongfox.com/api.php?s=/";
  	
}]);


