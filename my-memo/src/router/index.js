import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo.vue'
import Read from  '../views/ReadMemo.vue'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

Vue.use(VueRouter)

const auth=(to, from, next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    if(localStorage.getItem('accessToken')==null){
      alert('Signin please')
      next('/signin');
    }
  }
  next();
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, meta:{requiresAuth:true}
  },
  {
    path: '/add', 
    name: 'Add',
    // 전역 가드 
    component: Add, meta:{requiresAuth:true}
  },
  {
    path: '/memos/:memoId',
    name: 'Read',
    component: Read, meta:{requiresAuth:true}
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 전역 가드 = 모든 라우팅 동작마다 체크하는 방법 
router.beforeEach((to, from, next)=>{
  if(to.matched.some((record)=>record.meta.requiresAuth)){
    alert('Signin please')
    next('/signin');
  } else {
    next();
  }
});

export default router
