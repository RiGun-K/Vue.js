<template>
    <div>
        <h1>회원가입</h1>
        <form @submit.prevent="onSubmit(userid, password)">
            
            <input type="text" v-model="userid" placeholder="아이디" />
    
            <input type="password" v-model="password" placeholder="비밀번호" />

     
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
    name: 'Signup',
    data(){
        return {
            userid:'',
            password:'',
            message:''
        }
    },
    methods:{
        onSubmit(userid, password){
            this.$store.dispatch('signup',{userid, password})
            .then(()=>{
                this.$router.push('/')
            })
            .catch(()=>{
                this.message='회원가입에 실패하였습니다.'
                
            })
        }
    }
}
</script>