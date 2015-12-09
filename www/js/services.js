angular.module('fo.services', ['ngResource'])

  .factory('userSer', ['$resource','$rootScope',function ($resource,$rootScope) {
    var uid=window.localStorage.uid;
    var MobileApp=$rootScope.serUrl;
  return $resource(MobileApp+':con'+'.php?act='+':fun', {}, {
    //注册
    reg: {method: 'POST',params:{con:'appuser',fun:'register'},isArray: false},
    //denglu
    login: {method: 'POST',params:{con:'appuser',fun:'login'},isArray: false},
    //验证手机
    vmobile: {method: 'POST',params:{con:'appuser',fun:'vmobile'},isArray: false},
    //设置密码
    setpwd: {method: 'POST',params:{con:'appuser',fun:'setpwd',uid:uid},isArray: false},
    //发送短信
    setpwd: {method: 'POST',params:{con:'appuser',fun:'sendsms',uid:uid},isArray: false},
  })
}])
//藏经阁
  .factory('BookSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=window.localStorage.uid;
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Book/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      booklist: {method: 'GET',params:{fun:'booklist'},isArray: false},
      //验证手机
      bookinfo: {method: 'GET',params:{fun:'bookinfo'},isArray: false},
      //设置密码
      setpwd: {method: 'POST',params:{con:'appuser',fun:'setpwd',uid:uid},isArray: false},
      //发送短信
      setpwd: {method: 'POST',params:{con:'appuser',fun:'sendsms',uid:uid},isArray: false},
    })
  }])
  .factory('NewsSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=window.localStorage.uid;
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'News/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: false},
      //denglu
      newslist: {method: 'GET',params:{fun:'newslist'},isArray: false},
      //验证手机
      newsinfo: {method: 'GET',params:{fun:'newsinfo'},isArray: false},
    })
  }])
    .factory('ChatSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=window.localStorage.uid;
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Issue/:fun', {}, {
      //注册
      navlist: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      chatslist: {method: 'GET',params:{fun:'chatslist'},isArray: false},
      //验证手机
      chatinfo: {method: 'GET',params:{fun:'chatinfo'},isArray: false},
    })
  }])
    .factory('ToolSer', ['$resource','$rootScope',function ($resource,$rootScope) {

    var uid=window.localStorage.uid;
    var MobileApp=$rootScope.serUrl;
    return $resource(MobileApp+'Tool/:fun', {}, {
      //分类
      navList: {method: 'GET',params:{fun:'navlist'},isArray: true},
      //denglu
      qianInfo: {method: 'GET',params:{fun:'qianInfo'},isArray: false},
      //验证手机
      chatinfo: {method: 'GET',params:{fun:'chatinfo'},isArray: false},
    })
  }])
