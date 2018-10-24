// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
/* 过滤请求 */
axios.interceptors.request.use((config) => {
  config.url='http://www.369college.com/369research'+ config.url;
  return config
})
Vue.prototype.$axios = axios;

if (process.env.NODE_ENV == 'development') { //拦截请求模拟数据
  var Mock = require('mockjs');
  var dataroutes = require('./components/stuAndClassManage/getAllClass.js');
  let modules = Object.keys(dataroutes); //获取全部路由
  let routes = Object
    .keys(dataroutes)
    .map((item) => item.toLowerCase()); //获取全部路由
  let routeIndex = -1;
  Mock.mock(/http:\/\/www.369college.com\/369research\/.*/, function (options) {
    var url = options
      .url
      .toLowerCase();
    var route = routes.filter((item, index) => {
      let result = false;
      result = url.indexOf(item) != -1;
      if (result) {
        routeIndex = index;
      }
      return result;
    });
    if (route.length > 0) {
      var template = dataroutes[modules[routeIndex]]
      return Mock.mock(template)
    }

  })
  Mock.mock(/http:\/\/ppp\/.*/, function (options) {
    console.log(options)
    return {"classList": 123}
  })
}
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({el: '#app', router, components: {
    App
  }, template: '<App/>'})
