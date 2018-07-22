// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import 'babel-polyfill' //解决手机不支持promise 出现白屏的问题
import fastClick from 'fastclick'/*解决移动端点击延迟300毫秒的问题*/
import './assets/styles/reset.css'/*初始化重置css 让所有终端css样式一致*/
import './assets/styles/border.css'/*解决移动端1像素边框问题*/
import '@/assets/styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
fastClick.attach(document.body)/*需使用这个方法解决点击延迟问题*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
