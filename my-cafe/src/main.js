import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
// index는 파일 이름 생략가능하므로 /store/store => /store 로 가능 

Vue.config.productionTip = false

new Vue({
  router,
  store:store,
  render: h => h(App),
}).$mount('#app')
