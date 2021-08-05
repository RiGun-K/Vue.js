<template>
  <div>
    <p v-if="requiresAuth">
      <router-link :to="{ path: '/signin' }">Signin</router-link>
    </p>  
  </div>
</template>

<script>
  // import 또한 삭제 
import memoApi from '../apis/memos'

  export default {
    name: 'Home',

    // 기존 component 내용 삭제 
    
    // 컴포넌트 내부 가드 
    // 로그인 안해도 일단 진입후 로그인 하도록 유도 <--> 전역, 라우트 별 가드 (일단 로그인)
    data(){
      return {
        memos:[],
      }
    },
    mounted(){
      memoApi.getMemos()
      .then(res=>{
        this.memos = res.data
      })
      .catch(()=>{
      })
    }
    
  }
</script>
