import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// index.html에 어떤 element를 붙어야 하는지 설정
// App.vue - 최상위 컴포넌트
// componenets - 컴포넌트 작업 폴더
// assets - 이미지, css , src 폴더 하단에 있는 이 파일들은 webpack이 처리한다.


// 위와 동일한 코드를 풀어서 씀

// new Vue({
//   render:function (createElement) {
//     return createElement(App)
//   }
// }).$mount('#app');
