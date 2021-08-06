<template>
    <div>
        <h1>로그인</h1>
        <form @submit.prevent="onSubmit(userid, password)">
            
            <input type="text" v-model="userid" placeholder="아이디" />
    
        <p v-if="requiresAuth">
            <router-link :to="{ path: '/signup' }">Signup</router-link>
            <input type="password" v-model="password" placeholder="비밀번호" />
        </p> 
     
        <v-btn color="primary">
          <input type="submit" value="로그인"  />
        </v-btn>

        <v-btn color="block">
          <input type="submit" value="회원가입"  />
        </v-btn>
               
        </form>
        
        <p><i>{{ message }}</i></p>
    </div>
</template>

<!-- span style="color:#4374D9" = 파란색상 -->

<script>
export default {
    name: 'Signin',
    data(){
        return {
            userid:'',
            password:'',
            message:''
        }
    },
    methods:{
        onSubmit(userid, password){
            this.$store.dispatch('signin',{userid, password})
            .then(()=>{
                this.$router.push('/')
            })
            .catch(()=>{
                this.message='로그인에 실패하였습니다.'
                
            })
        }
    }
}
</script>

